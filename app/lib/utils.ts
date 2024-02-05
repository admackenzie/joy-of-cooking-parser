import { parse } from 'node-html-parser';

/** Parse HTML strings into an object containing page number data.
 * @param dir - Array of stringified HTML
 * @returns - pageData object structured as { title: page }
 */
interface pageData {
	[key: string]: string;
}

const getPageData = async (dir: string[]) => {
	const pages: pageData = {};

	dir.forEach(file => {
		// Convert HTML string into a DOM tree
		const fileDOM = parse(file);

		// Query only elements with an id of idxA_BBBB
		fileDOM.querySelectorAll('[id*="idx"]').forEach(idxEl => {
			const data = idxEl
				.querySelectorAll('span, a')
				.map(el => el.textContent.trim().toUpperCase());

			let [key, value] = data;

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

/** Parse a string of HTML into arrays of elements, each array comprising one recipe, then convert the arrays into Recipe objects.
 * @param file - String of HTML elements
 * @param idxData - Object with page number data structured as { title: page }
 * @returns - Array of Recipe objects
 */
interface Recipe {
	id: string;
	title: string;
	section: string;
	bodyText: string;
	servings: string | null;
	page: string | null;
	html: string;
}

const getRecipeData = (file: string, pageData: pageData) => {
	const fileData: Recipe[] = [];

	// Convert HTML string into a DOM tree
	const fileDOM = parse(file);

	// Isolate each recipe into arrays of elements
	const recipesArr = fileDOM.querySelectorAll('.h3rec').map(el => {
		const siblings = [];

		for (
			let currEl = el.nextElementSibling;
			currEl;
			currEl = currEl.nextElementSibling
		) {
			// The next element containing one of these classes indicates the end of a recipe
			if (['h3rec', 'h2'].some(v => currEl?.classList.contains(v))) {
				break;
			}

			siblings.push(currEl);
		}

		return [el, ...siblings];
	});

	// Build a Recipe object from each array of elements
	recipesArr.forEach(recipe => {
		/** Split the elements array into a 'head' and a 'body'. The head contains the title element and the servings element if it exists. The body contains everything else.
		 * @param arr - Array of elements that comprises one recipe
		 * @returns - Split elements array in the form of [ head, body ]
		 */
		const splitRecipe = (arr: any[]) => {
			const getIdx = () =>
				['noindentl', 'r-serve'].some(className =>
					arr.at(1)?.classList.contains(className)
				)
					? 2
					: 1;
			const idx = getIdx();

			return [arr.slice(0, idx), arr.slice(idx)];
		};
		const [head, body] = splitRecipe(recipe);

		// Extract data from elements
		const id: Recipe['id'] = head.at(0)?.id!;
		const title: Recipe['title'] = head.at(0)?.textContent!;
		const section: Recipe['section'] =
			fileDOM.querySelector('title')!.textContent;
		const bodyText: Recipe['bodyText'] = body
			.map((el: Element) => el.textContent!.trim())
			.join('');
		const servings: Recipe['servings'] = head.at(1)?.textContent ?? null;
		const page: Recipe['page'] = pageData[title!] || null;
		// Join HTML strings of the head and body with a non-breaking space
		const html: Recipe['html'] = [head, body]
			.map(arr => {
				return arr
					.map(node => node.outerHTML)
					.join('')
					.trim();
			})
			.join('\u00a0');

		// Add Recipe object to the file's output array
		fileData.push({
			id: id,
			title: title,
			section: section,
			bodyText: bodyText,
			servings: servings,
			page: page,
			html: html,
		});
	});

	return fileData;
};

/**
 * Convert File objects into strings.
 * @param dir - JSZip instance of unzipped files
 * @param re - Regex for filtering files
 * @param sort - Boolean for using the sorting function
 * @returns - Array of promises
 */
const stringifyFiles = (dir: any, re: string, { sort } = { sort: false }) => {
	return (
		dir
			.file(new RegExp(`${re}`))
			.sort((a: any, b: any) => {
				if (!sort) return;

				// Handle files with alphanumeric indices (e.g., part09a.xhtml)
				const fileIdx = (f: any) => {
					const idx =
						f.name
							.match(new RegExp(`(?<=${re}).*(?=.xhtml)`))
							?.at(0) ?? '';

					return /[a-z]/i.test(idx)
						? +idx.slice(0, -1) + idx.charCodeAt(2) / 100
						: +idx;
				};

				return fileIdx(a) - fileIdx(b);
			})
			// Convert each directory File to a string
			.map((file: any) => file.async('string'))
	);
};

export { getPageData, getRecipeData, stringifyFiles };
