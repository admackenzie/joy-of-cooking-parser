import fs from 'fs';
import { parse } from 'node-html-parser';

import { getElementSiblings, getElText, getPageNumbers } from './utils.mjs';

interface Recipe {
	id: string;
	title: string;
	section: string;
	body: string;
	servings: string | null;
	page: string | null;
	html: string;
}

const getData = function (file: string, idxData) {
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

	const recipesDOM: Array<HTMLElement[]> = [];

	pageDOM.querySelectorAll('.h3rec').forEach(el => {
		let recipe: HTMLElement[] = getElementSiblings(el, ['h3rec', 'h2']);

		recipesDOM.push(recipe);
	});

	// ---- INDIVIDUAL RECIPES ----
	recipesDOM.forEach(recipeArr => {
		const recipeDOM = parse(recipeArr);

		const {
			id,
			textContent: title,
		}: { id: Recipe['id']; textContent: Recipe['title'] } =
			recipeDOM.querySelector('.h3rec')!;

		const page: Recipe['page'] = idxData[title] || null;

		const servings: Recipe['servings'] =
			getElText(recipeDOM, '.noindentl') ??
			getElText(recipeDOM, '.r-serve');

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
			.map((el: HTMLElement) => el.textContent!.trim())
			.join('\n');
		// .replace(/[\t\n\r\f\v]/g, '');

		const recipeHTML = [
			...recipeArr.map((node: HTMLElement) => node.outerHTML),
		]
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

const PATH = 'app/_lib/Joy of Cooking/e9781439130827/xhtml';
const RECIPE_DATA: Recipe[] = [];

const runScript = function (path: string, arr: Recipe[], createFile = false) {
	const beginScript = Date.now();

	const filesDir = fs.readdirSync(`${path}`);
	const recipeFiles = filesDir.filter(file => file.startsWith('part'));

	// Get array of recipe data from each .epub file
	// FIXME: change this back to recipeFiles.length
	for (let i = 0; i < 1; i++) {
		const data = getData(`${path}/${recipeFiles[i]}`);

		arr.push(...data);
	}

	// Write data into JSON file
	if (createFile) {
		fs.writeFileSync('RECIPES.json', JSON.stringify(arr));
	}

	const endScript = Date.now();

	console.log(
		`Parsed ${arr.length} recipes in ${
			(endScript - beginScript) / 1000
		} seconds.`
	);

	return arr;
};

// runScript(PATH, RECIPE_DATA);
// console.log(RECIPE_DATA[0]);

export { getData, runScript };
