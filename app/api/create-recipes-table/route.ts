import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	try {
		const result =
			await sql`CREATE TABLE recipes ( id varchar(255), title varchar(255), section varchar(255), page varchar(255), servings varchar(255), body JSONB );`;
		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}
