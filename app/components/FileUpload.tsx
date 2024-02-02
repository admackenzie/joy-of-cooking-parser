'use client';

// FIXME: does there need to be a check for malicious code before the archive is sent to the server?? (Zip Slip Vulnerability?)

const CREATE_FILE = false;

import { useState } from 'react';

export default function FileUpload() {
	const [file, setFile] = useState<File>();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// TODO: Improve error handling
		if (!file) return;

		try {
			const data = new FormData();

			// Add zip file to FormData
			data.append('file', file);

			// Add createFile to FormData if true
			CREATE_FILE && data.append('createFile', 'true');

			// Response
			const res = await fetch('/api/upload', {
				method: 'POST',
				body: data,
			});
			// TODO: Improve error handling

			if (!res.ok) throw new Error(await res.text());
		} catch (e: any) {
			// TODO: Improve error handling
			console.error(e);
		}
	};

	return (
		// TODO: add drag and drop element here

		<form onSubmit={handleSubmit}>
			<input
				type="file"
				name="file"
				onChange={e => {
					setFile(e.target.files?.[0] ?? undefined);
				}}
			/>

			<input type="submit" value="Upload" />
		</form>
	);
}
