// import Image from 'next/image'
'use client';

const PATH = 'app/_lib/Joy of Cooking/e9781439130827/xhtml';
const CREATE_FILE = false;

import { useState } from 'react';

//  Allows File API directory upload without error
declare module 'react' {
	interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
		// extends React's HTMLAttributes
		directory?: string;
		webkitdirectory?: string;
	}
}

export default function Home() {
	const [dir, setDir] = useState<FileList>();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// TODO: add better error handling
		if (!dir) return;

		try {
			const data = new FormData();

			// Add recipe files
			Array.from(dir)
				.filter(file => file.name.startsWith('part'))
				// Sort files to the order they appear in the ebook
				.sort((a, b) => {
					// Handle files with alphanumeric indices (e.g., part09a.xhtml)
					const fileIdx = (f: File) => {
						const idx =
							f.name.match(/(?<=part).*(?=\.)/i)?.at(0) ?? '';

						return /[a-z]/i.test(idx)
							? +idx.slice(0, -1) + idx.charCodeAt(2) / 100
							: +idx;
					};

					return fileIdx(a) - fileIdx(b);
				})
				.forEach(file => data.append('recipes', file));

			// Add index files
			Array.from(dir)
				.filter(file => file.name.startsWith('index'))
				.forEach(file => data.append('indices', file));

			// Create JSON results file
			CREATE_FILE && data.append('createFile', 'true');

			// Response
			const res = await fetch('/api/upload', {
				method: 'POST',
				body: data,
			});
			// handle the error
			if (!res.ok) throw new Error(await res.text());
		} catch (e: any) {
			// Handle errors here
			console.error(e);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="file"
				name="file"
				onChange={e => setDir(e.target.files ?? undefined)}
				directory=""
				webkitdirectory=""
			/>

			<input type="submit" value="Upload" />
		</form>
	);
}
