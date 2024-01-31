import fs from 'fs';
import { parse } from 'node-html-parser';

import {
	getElementSiblings,
	getPageNumbers,
	cleanText,
	getHypertext,
	getElText,
} from './utils.mjs';

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
// const recipesHTML = [];

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

	/* 
	// STORE RECIPES AS HTML
	html.querySelectorAll('.h3rec').forEach(el => {
		let recipeHTML = getElementSiblings(el, ['h3rec', 'h2']);

		recipesHTML.push(JSON.stringify(recipeHTML.outerHTML));

		
	});
const HTMLFile = fs.readFileSync('./RECIPES.JSON', {
		encoding: 'utf-8',
	const json = JSON.parse(HTMLFile);

	console.log(json[0]);

	return;
	}); */

	// 3) Parse individual recipes back into HTML. Use DOM methods to extract the data into the recipes object. Each recipe will be stored as JSON, queried by the app, and rendered into a Recipe card element

	recipesHTML.forEach(recipeArr => {
		// Final object to be exported as JSON to the database
		let recipe = {};

		// ---- USING RECIPE IN HTML FORMAT ----
		const recipeStr = recipeArr;

		const recipeHTML = parse(recipeStr);

		const title = getElText('.h3rec');
		const id = recipeHTML.querySelector('.h3rec').id;

		recipe['id'] = id;
		recipe['title'] = title;
		recipe['section'] = section;
		recipe['page'] = idxData[title] || null;
		// Try both classes used for serving size
		recipe['servings'] = getElText('.noindentl') ?? getElText('.r-serve');

		// ---- USING RECIPE AS ARRAY OF HTML ELEMENTS ----
		//  Remove title
		let bodyArr = recipeArr.slice(1);

		// Begin body element after 'servings' element if it exists
		if (
			bodyArr[0].classList.contains('noindentl') ||
			bodyArr[0].classList.contains('r-serve')
		) {
			bodyArr = bodyArr.slice(1);
		}

		let body = [];

		// ---------------------------------------------------------
		bodyArr.forEach(el => {
			if (el.tagName === 'UL') {
				// Store list items in an object
				const listItems = [];

				el.querySelectorAll('li').forEach(listEl => {
					listItems.push(getHypertext(listEl, id));
					// getHypertext(listEl, id);
				});

				body.push({ list: listItems });
			}

			// All other elements
			else {
				body.push(getHypertext(el, id));
				// getHypertext(el, id);
			}
		});

		if (title === 'VACUUM-METHOD COFFEE') {
			// console.log(body[0]);
		}

		recipe['body'] = body;

		recipes.push(recipe);

		// console.log('BODY:', recipe.body);
	});

	return recipes;
};

// const test = getData(`${FILE_PATH.url}/part18.xhtml`);

// ---- EXECUTE SCRIPT ----

const execute = function () {
	const beginScript = Date.now();

	const { filesDir, url } = FILE_PATH;

	const recipeFiles = filesDir.filter(file => file.startsWith('part'));

	// FIXME: change i < 1 back to i < recipeFiles.length
	for (let i = 0; i < 1; i++) {
		const data = getData(`${url}/${recipeFiles[i]}`);

		RECIPE_DATA.push(...data);
	}

	const endScript = Date.now();

	console.log(
		`${RECIPE_DATA.length} recipes in ${
			(endScript - beginScript) / 1000
		} seconds`
	);

	// fs.writeFileSync('RECIPE_DATA.JS', JSON.stringify(RECIPE_DATA));
};

// execute();

export { execute, FILE_PATH, RECIPE_DATA };
