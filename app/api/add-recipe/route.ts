import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

import { execute, RECIPE_DATA } from '../../_lib/script.mjs';

// SELECT DISTINCT body ->> 'text' FROM recipes WHERE id='part01_sub016_02';

execute();

export async function GET(request: Request) {
	for (let i = 0; i < RECIPE_DATA.length; i++) {
		const { id, title, section, page, servings, body } = RECIPE_DATA[i];

		try {
			if (!id) throw new Error('ERROR WITH ID');
			await sql`INSERT INTO recipes (id, title, section, page, servings, body) VALUES (${id}, ${title}, ${section}, ${page}, ${servings}, ${JSON.stringify(
				body
			)});`;
		} catch (error) {
			return NextResponse.json({ error }, { status: 500 });
		}
	}

	const recipes = await sql`SELECT * FROM recipes;`;
	return NextResponse.json({ recipes }, { status: 200 });
}
