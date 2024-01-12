import fs from 'fs';
import { parse } from 'node-html-parser';

import { getElementSiblings, getPageNumbers, cleanText } from './utils.mjs';

// TODO: refactor into TypeScript
// interface Recipe {
// 	id: string;
// 	title: string;
// 	section: string;
// 	page: string;
// 	servings: string;
// 	body: { text: string[], links: string[] };
// }
// [];

const FILE = 'app/_lib/Joy of Cooking';
const TOTAL_RECIPES = 2591;
const RECIPE_DATA = [];

const FILE_PATH = {
	epub: FILE,
	url: `${FILE}/e9781439130827/xhtml`,
	filesDir: fs.readdirSync(`${FILE}/e9781439130827/xhtml`),
};

// ----------------------------------------------------------------------

// ----------------------------------------------------------------

const getData = function (url) {
	// Array of all recipes from this file
	const recipes = [];

	// Object with page numbers for recipes
	const idxData = getPageNumbers();

	// 1) Import HTML file as a string
	const file = fs.readFileSync(url, {
		encoding: 'utf-8',
	});

	const html = parse(file);

	// 2) Isolate recipes into recipe arrays. DOM methods can't be run on arrays of HTML elements, so each recipe is turned back into a string to be parsed individually in step 3
	const section = cleanText(html.querySelector('title').innerText);

	const recipesHTML = [];

	html.querySelectorAll('.h3rec').forEach(el => {
		let recipeHTML = getElementSiblings(el, ['h3rec', 'h2']);

		recipesHTML.push(recipeHTML);
	});

	// 3) Parse individual recipes back into HTML. Use DOM methods to extract the data into the recipes object. Each recipe will be stored as JSON, queried by the app, and rendered into a Recipe card element

	recipesHTML.forEach(recipeArr => {
		// Final object to be exported as JSON to the database
		let recipe = {};

		// ---- USING RECIPE IN HTML FORMAT ----
		const recipeStr = recipeArr;

		const recipeHTML = parse(recipeStr);

		// If the selector exists on the current element, extract the text data
		const getElText = function (selector) {
			return (
				recipeHTML.querySelector(selector) &&
				cleanText(recipeHTML.querySelector(selector).innerText)
			);
		};

		const title = getElText('.h3rec');
		const id = recipeHTML.querySelector('.h3rec').id;

		recipe['id'] = id;
		recipe['title'] = title;
		recipe['section'] = section;
		recipe['page'] = idxData[title] || null;
		recipe['servings'] = getElText('.noindentl');

		// ---- USING RECIPE AS ARRAY OF HTML ELEMENTS ----
		let bodyArr = recipeArr.slice(1);

		if (bodyArr[0].classList.contains('noindentl')) {
			bodyArr = bodyArr.slice(1);
		}

		let body = {
			text: [],
		};

		bodyArr.forEach(el => {
			// Get link data
			if (el.getElementsByTagName('a')) {
				el.querySelectorAll('a').forEach(link => {
					const linkName = cleanText(link.textContent);

					// Match only links that go to other recipes
					// href =  partXX.xhtml#partXX_subYYY_ZZ
					const href = link
						.getAttribute('href')
						?.match(/(part)\d{2}_(sub)\d{3}_\d{2}$/)
						?.at(0);

					// Filter out links that go to their own recipes
					if (href && href !== id) {
						const linkData = {
							name: linkName,
							idx: el.textContent.indexOf(linkName),
							href: href,
						};

						body['links'] = body.links
							? [...body.links, linkData]
							: [linkData];
					}
				});

				// Give body.links a null value if the recipe has no links
				if (!body.links) body['links'] = null;
			}

			// Store list items in an object
			if (el.tagName === 'UL') {
				const listItems = [];

				el.querySelectorAll('li').forEach((listEl, j) => {
					listItems.push(cleanText(listEl.textContent));
				});

				body['text'].push({ list: listItems });
			}

			// All other elements
			else {
				body['text'].push(cleanText(el.textContent));
			}
		});

		recipe['body'] = body;

		recipes.push(recipe);

		// console.log(recipe.body);
	});

	// console.log(recipes);
	return recipes;
};

// const test = getData(`${FILE_PATH.url}/part18.xhtml`);

// ---- EXECUTE SCRIPT ----

let str = `INSERT INTO recipes ([id], [title], [section], [page], [servings], [body]) VALUES`;

const execute = function () {
	const beginScript = Date.now();

	const { filesDir, url } = FILE_PATH;

	const recipeFiles = filesDir.filter(file => file.startsWith('part'));

	for (let i = 0; i < recipeFiles.length; i++) {
		const data = getData(`${url}/${recipeFiles[i]}`);

		RECIPE_DATA.push(...data);
	}

	const endScript = Date.now();

	console.log(
		`${RECIPE_DATA.length} recipes in ${
			(endScript - beginScript) / 1000
		} seconds`
	);

	// fs.writeFileSync('RECIPE_DATA.json', JSON.stringify(RECIPE_DATA));
};

// execute();

export { execute, FILE_PATH, RECIPE_DATA };
