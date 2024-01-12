import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const id = '';

	try {
		if (!id) throw new Error('ERROR WITH DELETE PARAMETER');
		await sql`DELETE FROM recipes WHERE id = ${id};`;
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}

	// const recipes = await sql`SELECT * FROM recipes;`;
	// return NextResponse.json({ recipes }, { status: 200 });
}
