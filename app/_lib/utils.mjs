import fs from 'fs';
import { parse } from 'node-html-parser';

import { FILE_PATH } from './script.mjs';

/* TABLE OF CONTENTS
cleanText ................................................................ func-1 
    Remove newline characters and whitespace from text
getElementSiblings ....................................................... func-2
    Iterate through HTML until a certain selector is found
getPageNumbers ........................................................... func-3
    Parse all the JoC indices for page number data
*/

// func-1 ----------------------------------------------------------------

// Takes a string as the input. Remove new line characters and replace groups of \t with a space to keep the adjoining words separate.
const cleanText = function (text) {
	return text
		.replace(/\r\n|\n|\r/gm, '')
		.replace(/\t{2,}/gm, ' ')
		.trim();
};

// func-2 ----------------------------------------------------------------

// Takes an HTML element as the starting point and an array of string selectors as the stopping point. Iterates through HTML putting all starting el's siblings into an array until it finds an el with a selector attribute. Includes the starting el and excludes the end el. The selectors do not need CSS syntax (e.g., . for class and # for id).
const getElementSiblings = function (el, selectors = []) {
	const siblings = [];
	let next = el.nextElementSibling;

	// Loop through all siblings
	while (next) {
		// Break when a matching attribute is found
		if (selectors.some(v => next.classList.contains(v))) {
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
const getPageNumbers = function () {
	const pages = {};

	const { filesDir, url } = FILE_PATH;

	const indexFiles = filesDir.filter(file => file.startsWith('index'));

	// Iterate through all the index files
	for (let i = 0; i < indexFiles.length; i++) {
		const file = fs.readFileSync(`${url}/${indexFiles[i]}`);
		const html = parse(file);

		// Query all elements with an id of idxX_YYYY
		const listEls = html.querySelectorAll('[id*="idx"]');

		// Extract name and page number
		listEls.forEach(idxEl => {
			const pageData = idxEl
				.querySelectorAll('span, a')
				.map(el => cleanText(el.textContent).toUpperCase());

			let [key, value] = pageData;

			// Remove trailing , and .
			if (key.at(-1) === ',' || key.at(-1) === '.') {
				key = key.replace(/.$/, '');
			}

			pages[key] = value;
		});
	}

	return pages;
};

// const getLinkData = function (el, recipeID) {
// 	let links = [];

// 	el.querySelectorAll('a').forEach(link => {
// 		const linkName = cleanText(link.textContent);

// 		// Match only links that go to other recipes
// 		// href =  partXX.xhtml#partXX_subYYY_ZZ
// 		const href = link
// 			.getAttribute('href')
// 			?.match(/(part)\d{2}_(sub)\d{3}_\d{2}$/)
// 			?.at(0);

// 		// Filter out links that go to their own recipes
// 		if (href && href !== recipeID) {
// 			const linkData = {
// 				name: linkName,
// 				idx: el.textContent.indexOf(linkName),
// 				href: href,
// 			};

// 			// body['links'] = body.links ? [...body.links, linkData] : [linkData];
// 			links.push(linkData);
// 		}
// 	});

// 	// Give body.links a null value if the recipe has no links
// 	// if (!body.links) body['links'] = null;

// 	return links.length >= 1 ? links : null;
// };

export { cleanText, getPageNumbers, getElementSiblings };
