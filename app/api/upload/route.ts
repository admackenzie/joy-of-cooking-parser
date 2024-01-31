import { readFile, writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';

import { getData } from '@/app/_lib/script';
import { getPageNumbers } from '@/app/_lib/utils.mjs';

export async function POST(request: NextRequest) {
	const RECIPE_DATA = [];
	const beginScript = Date.now();

	const formData = await request.formData();

	const recipeDir: FileList | null = formData.getAll(
		'recipes'
	) as unknown as FileList;

	const idxDir: FileList | null = formData.getAll(
		'indices'
	) as unknown as FileList;

	const createFile: Boolean = formData.has('createFile');

	if (!recipeDir || !idxDir) {
		return NextResponse.json({ success: false });
	}

	// -------------------------------------------------
	// BUG: page data is all null
	// BUG: recipeDir is being read in wrong order
	// BUG: deleting the local JoC directory breaks the whole app

	const idxData = getPageNumbers(idxDir);

	for await (const file of Array.from(recipeDir)) {
		const byteArr = await file.arrayBuffer();
		const page = Buffer.from(byteArr).toString();

		const data = getData(page, idxData);

		RECIPE_DATA.push(...data);
	}

	// ------------------------------------

	// Write data into JSON file

	if (createFile) {
		writeFile('TESTTESTTEST.json', JSON.stringify(RECIPE_DATA));
	}

	const endScript = Date.now();

	const successMessage: string = `Parsed ${RECIPE_DATA.length} recipes in ${
		(endScript - beginScript) / 1000
	} seconds.`;

	console.log(successMessage);

	return NextResponse.json({ success: true });
}
