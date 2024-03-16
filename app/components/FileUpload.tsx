'use client';

// test

// FIXME: does there need to be a check for malicious code before the archive is sent to the server?? (Zip Slip Vulnerability?)

import { useRef, useState } from 'react';

// Make this a global variable?? Used to write final JSON output
const CREATE_FILE = true;

export default function FileUpload() {
	const [dragActive, setDragActive] = useState<Boolean>(false);
	const [file, setFile] = useState<File>();
	// References the hidden <input type="file"> to upload files
	const inputRef = useRef<any>();

	// Drag and drop handler
	const handleDaD = (e: any, { active = false, drop = false }) => {
		e.preventDefault();

		setDragActive(active);

		// Drop functionality
		if (drop) {
			const file = e.dataTransfer.files?.[0] ?? undefined;

			// Permit only .epub file types
			if (file.type === 'application/epub+zip') {
				setFile(file);
			} else {
				// TODO: Implement visual/textual error response for dragging wrong file type
				console.log('WRONG FILE TYPE');
			}
		}
	};

	// Send file to server
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

			// Wait for response
			const res = await fetch('/api/upload', {
				method: 'POST',
				body: data,
			});

			// Remove file name display after submit
			setFile(undefined);

			// TODO: Improve error handling
			if (!res.ok) throw new Error(await res.text());
		} catch (e: any) {
			// TODO: Improve error handling
			console.error(e);
		}
	};

	return (
		<div>
			<form
				// Change drop element background color during drag event
				className={`border-solid border-2 border-indigo-500 w-1/3 min-h-[10rem]
                ${dragActive && 'bg-blue-400'}`}
				// Event handlers from the drag and drop API
				onDrop={e => handleDaD(e, { drop: true })}
				onDragEnter={e => handleDaD(e, { active: true })}
				onDragLeave={e => handleDaD(e, {})}
				onDragOver={e => handleDaD(e, { active: true })}
				onSubmit={handleSubmit}
			>
				{/* Hidden upload file input. Referenced by inputRef */}
				<input
					accept=".epub"
					className="hidden"
					onChange={e => setFile(e.target.files?.[0] ?? undefined)}
					ref={inputRef}
					type="file"
				/>

				{/* Drop element text. The embedded <span> references the file upload input */}
				<p>
					Drag .epub file here or
					<span
						className="font-bold text-blue-600 cursor-pointer"
						onClick={() => {
							inputRef.current.value = '';
							inputRef.current.click();
						}}
					>
						{' '}
						upload
					</span>
				</p>

				{/* Display file name when a file is uploaded */}
				{/* BUG: Very long file names extend outside the element. Text needs to wrap */}
				<div>
					<span>{file?.name}</span>
					{file && (
						// Remove button
						<span
							className="text-red-500 cursor-pointer"
							onClick={() => setFile(undefined)}
						>
							[X]
						</span>
					)}
				</div>

				{/* Submit button */}
				{file && <input type="submit" value="Submit" />}
			</form>
		</div>
	);
}
