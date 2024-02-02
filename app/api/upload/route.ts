import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import JSZip from 'jszip';

import { getData, getFiles, getPageNumbers } from '@/app/lib/utils';

export async function POST(request: NextRequest) {
	const BEGIN_SCRIPT = Date.now();

	// Get data from FormData object
	const formData = await request.formData();
	const zipped: File | null = formData.get('file') as unknown as File;
	const createFile: Boolean = formData.has('createFile');

	// Convert the File object into ArrayBuffer to load into JSZIP. Creates a JSZip instance with the file data (still compressed as Uint8Array )
	const unzipped = await JSZip.loadAsync(zipped.arrayBuffer());

	// Array of HTML pages as strings (partXXX.xhtml)
	const recipeDir = await Promise.all(getFiles(unzipped, 'part', true));
	// Array of HTML pages as strings (indexXX.xhtml)
	const idxDir = await Promise.all(getFiles(unzipped, 'index'));
	// Object of title : page
	const idxData = await getPageNumbers(idxDir);
	// Main array for Recipe objects
	const recipes: any = [];

	// TODO: Implement better error handling (big error)
	if (!recipeDir || !idxDir) {
		return NextResponse.json({ success: false });
	}

	// Get all Recipes from each page
	recipeDir.forEach(file => {
		const data = getData(file, idxData);

		recipes.push(...data);
	});

	// Write data to a JSON file
	if (createFile) {
		writeFile('RECIPES.json', JSON.stringify(recipes));
	}

	const END_SCRIPT = Date.now();

	const successMessage: string = `Parsed ${recipes.length} recipes in ${
		(END_SCRIPT - BEGIN_SCRIPT) / 1000
	} seconds.`;

	// FIXME: remove for production
	console.log(successMessage);

	// TODO: improve response or at least read it somewhere in the client
	return NextResponse.json({
		success: true,
		message: successMessage,
	});
}
