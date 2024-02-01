import fs from 'fs';
import { parse } from 'node-html-parser';

import { FILE_PATH } from './script_OLD.mjs';

/* TABLE OF CONTENTS
cleanText ................................................................ func-1 
	* Remove newline characters and whitespace from text
getElementSiblings ....................................................... func-2
    * Iterate through HTML until a certain selector is found
getPageNumbers ........................................................... func-3
    * Parse all the JoC indices for page number data
*/

/** func-1 ----------------------------------------------------------------
 * Remove new line characters and replace groups of \t with a space to keep the adjoining words separate.
 * @param {string} text
 * @returns {string}
 */
/* const cleanText = function (text) {
	return text
		.replace(/\r\n|\n|\r/gm, '')
		.replace(/\t{2,}/gm, ' ')
		.trim();
}; */

// func-2 ----------------------------------------------------------------

// Takes an HTML element as the starting point and an array of string selectors as the stopping point. Iterates through HTML putting all starting el's siblings into an array until it finds an el with a selector attribute. Includes the starting el and excludes the end el. The selectors do not need CSS syntax (e.g., . for class and # for id).
const getElementSiblings = function (el: Element, selectors: string[] = []) {
	const siblings = [];
	let next = el.nextElementSibling;

	// Loop through all siblings
	while (next) {
		// Break when a matching attribute is found
		if (selectors.some(v => next?.classList.contains(v))) {
			break;
		}

		// Otherwise, push to array
		siblings.push(next);

		next = next.nextElementSibling;
	}

	return [el, ...siblings];

	// RETURN AS HTML STRING
	// return [
	// 	'<div>',
	// 	...[el, ...siblings].map(node => node.outerHTML),
	// 	'</div>',
	// ].join('');
};

// func-3 ----------------------------------------------------------------

// Get all page number data from each index file. This returns a lot of junk data that don't have corresponding recipes; this ultimately doesn't matter because the final recipe data only appends a page number if the recipe title matches exactly with one of the keys here.
interface PageNumberData {
	[key: string]: string;
}

const getPageNumbers = async function (dir: FileList) {
	const pages: PageNumberData = {};

	for await (const file of Array.from(dir)) {
		const byteArr = await file.arrayBuffer();
		const page = Buffer.from(byteArr).toString();

		const html = parse(page);

		// Query only elements with an id of idxX_YYYY
		const listEls = html.querySelectorAll('[id*="idx"]');

		// Extract name and page number
		listEls.forEach(idxEl => {
			const pageData = idxEl
				.querySelectorAll('span, a')
				.map(el => el.textContent.trim().toUpperCase());

			let [key, value] = pageData;

			// Remove trailing , and .
			if (key.at(-1) === ',' || key.at(-1) === '.') {
				key = key.replace(/.$/, '');
			}

			// Remove non-numerical page numbers
			if (!/[a-z]/gi.test(value)) {
				pages[key] = value;
			}
		});
	}

	return pages;
};

// Returns null if selector doesn't exist
const getElText = (doc: Element, selector: string) =>
	doc.querySelector(selector) &&
	doc.querySelector(selector)?.textContent?.trim();

interface Recipe {
	id: string;
	title: string;
	section: string;
	body: string;
	servings: string | null;
	page: string | null;
	html: string;
}

const getData = function (file: string, idxData: PageNumberData) {
	// FIXME: rename recipesPage ??
	const recipes: Recipe[] = [];

	// 1) Import HTML file as a string
	// const file = fs.readFileSync(path, {
	// 	encoding: 'utf-8',
	// });

	const pageDOM = parse(file);

	const section: Recipe['section'] =
		pageDOM.querySelector('title')!.textContent;

	// Object with page numbers for recipes
	// const idxData = getPageNumbers();

	const recipesDOM: Array<Element[]> = [];
	pageDOM.querySelectorAll('.h3rec').forEach(el => {
		let recipe: Element[] = getElementSiblings(el as unknown as Element, [
			'h3rec',
			'h2',
		]);

		recipesDOM.push(recipe);
	});

	// ---- INDIVIDUAL RECIPES ----
	recipesDOM.forEach(recipeArr => {
		const recipeDOM = parse(recipeArr as unknown as string);

		const {
			id,
			textContent: title,
		}: { id: Recipe['id']; textContent: Recipe['title'] } =
			recipeDOM.querySelector('.h3rec')!;

		const page: Recipe['page'] = idxData[title] || null;

		const servings: Recipe['servings'] =
			getElText(recipeDOM as unknown as Element, '.noindentl') ??
			getElText(recipeDOM as unknown as Element, '.r-serve') ??
			null;

		// Get all the text of the element not including the title or servings
		const body = (
			['noindentl', 'r-serve'].some(className =>
				recipeArr[1].classList.contains(className)
			)
				? // Has title and servings
				  recipeArr.slice(2)
				: // Has only title
				  recipeArr.slice(1)
		)
			.map((el: Element) => el.textContent!.trim())
			.join('\n');
		// .replace(/[\t\n\r\f\v]/g, '');

		const recipeHTML = [...recipeArr.map((node: Element) => node.outerHTML)]
			.join('')
			.trim();

		recipes.push({
			id: id,
			title: title,
			section: section,
			body: body,
			servings: servings,
			page: page,
			html: recipeHTML,
		});
	});

	return recipes;
};

// -----------------------------------------------------------------------

/* const getHypertext = function (el, id) {
	const output = [];
	const result = [];

	// console.log(el.rawTgName, el.textContent);
	el.childNodes.forEach(node => {
		// console.log(node.nodeType, node.rawTagName);

		if (node.nodeType === 3) {
			// console.log(node.textContent);
			result.push(node.textContent);
		} else {
			// Hyperlinks
			if (node.rawTagName === 'a') {
				const href = node
					.getAttribute('href')
					?.match(/(part)\d{2}_(sub)\d{3}_\d{2}$/)
					?.at(0);

				// Filter out links to non-recipe text and links to their own recipe
				if (href && href !== id) {
					result.push({
						anchor: { text: node.textContent, href: href },
					});
				}

				// Apply emphasis to text that is neither a list item nor contains a hyperlink
				if (el.tagName !== 'LI') {
					if (node.rawTagName === 'b') {
						result.push({ emphasis: [node.textContent, 'bold'] });
						return;
					} else if (node.rawTagName === 'i') {
						result.push({ emphasis: [node.textContent, 'italic'] });
						return;
					}
				}
				// Filtered out links
				// else {
				// 	result.push(node.textContent);
				// }
			} else {
				result.push(node.textContent);
				// result.push('---- WEIRD NODE DETECTED ----');
				// console.log(
				// 	el.nodeType,
				// 	el.tagName,
				// 	el.rawTagName,
				// 	el.textContent
				// );
			}
		}
		// console.log(
		// 	'EL:',
		// 	el.tagName,
		// 	// el.textContent,
		// 	'N:',
		// 	node.rawTagName,
		// 	node.textContent,
		// 	'-----'
		// );
		// Text nodes
		// if (node.rawTagName) {
		// 	result.push(node.textContent);
		// }
	});

	// console.log(result);
	// console.log('---- END EL----');

	if (result.some(v => typeof v !== 'string')) {
		return result;
	}

	return result.join('');

	// console.log(result);

	// el.childNodes.forEach((node, i) => {
	// 	// console.log(node.nodeType, node.textContent, node.rawTagName);

	// 	if (node.rawTagName === 'b') {
	// 		console.log(i);
	// 		output.push({ bold: node.textContent });
	// 	} else if (node.rawTagName === 'i') {
	// 		console.log(i);
	// 		output.push({ italic: node.textContent });
	// 	} else if (node.rawTagName === 'a') {
	// 		const href = node
	// 			.getAttribute('href')
	// 			?.match(/(part)\d{2}_(sub)\d{3}_\d{2}$/)
	// 			?.at(0);

	// 		if (href && href !== id) {
	// 			console.log(i);
	// 			output.push({
	// 				hypertext: { text: node.textContent, href: href },
	// 			});
	// 		} else {
	// 			console.log(i);
	// 			output.push(node.textContent);
	// 		}
	// 	} else {
	// 		console.log(i);
	// 		output.push(node.textContent);
	// 	}
	// });

	// console.log(output);

	// el.querySelectorAll('b').forEach(node => {
	// 	console.log('b:', node.textContent);
	// });

	// el.querySelectorAll('a').forEach(node => {
	// 	console.log('a:', node.textContent);
	// 	const text = node.parentNode.childNodes.map(node => [
	// 		node.nodeType,
	// 		node.textContent,
	// 		node.rawTagName,
	// 	]);
	// 	// .join('');
	// 	console.log(text);
	// });

	el.querySelectorAll('a').forEach(a => {
		//Match only anchors where href = partXX.xhtml#partXX_subYYY_ZZ
		const href = a
			.getAttribute('href')
			?.match(/(part)\d{2}_(sub)\d{3}_\d{2}$/)
			?.at(0);

		// Filter out anchors that link to themselves (e.g., subheadings) or to non-recipe text
		if (href && href !== id) {
			a.parentNode.childNodes.forEach(node => {
				// console.log(node);
			});

			const nodeData = a.parentNode.childNodes.map(node => {
				return node.nodeType === 3
					? // Text nodes
					  node.rawTagName === 'b'
						? // Bolded non-link text
						  node.textContent
						: // Link text
						  node['_rawText']
					: // Element nodes
					  {
							anchor: {
								text: node.textContent,
								href: href,
							},
					  };
			});

			output['hypertext'] = nodeData;
		}
	});
	// return output.hypertext ? output : el.textContent;
}; */

export { getPageNumbers, getElementSiblings, getData };
