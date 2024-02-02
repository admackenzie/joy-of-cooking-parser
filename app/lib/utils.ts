import { parse } from 'node-html-parser';

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
};

// func-3 ----------------------------------------------------------------

// Get all page number data from each index file. This returns a lot of junk data that don't have corresponding recipes; this ultimately doesn't matter because the final recipe data only appends a page number if the recipe title matches exactly with one of the keys here.
interface PageNumberData {
	[key: string]: string;
}

const getPageNumbers = async function (dir: string[]) {
	const pages: PageNumberData = {};

	// for await (const file of Array.from(dir)) {
	// 	const byteArr = await file.arrayBuffer();
	// 	const page = Buffer.from(byteArr).toString();
	dir.forEach(page => {
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
	});

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

/**
 * @param dir - JSZip instance of unzipped files
 * @param re - regex for filtering files
 * @param sort - choose to use the sorting function
 * @returns an array of promises
 */
const getFiles = (dir: any, re: string, sort = false) => {
	return dir
		.file(new RegExp(`${re}`))
		.sort((a: any, b: any) => {
			if (!sort) return;

			// Handle files with alphanumeric indices (e.g., part09a.xhtml)
			const fileIdx = (f: any) => {
				const idx =
					f.name.match(new RegExp(`(?<=${re}).*(?=.xhtml)`))?.at(0) ??
					'';

				return /[a-z]/i.test(idx)
					? +idx.slice(0, -1) + idx.charCodeAt(2) / 100
					: +idx;
			};

			return fileIdx(a) - fileIdx(b);
		})
		.map((file: any) => file.async('string'));
};

export { getPageNumbers, getElementSiblings, getData, getFiles };
