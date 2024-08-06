"use client";

import { useFormStatus } from "react-dom";

export function AddTagButton() {
	const { pending } = useFormStatus();
	return (
		<div className="flex justify-end">
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				disabled={pending}
			>
				{pending ? "Criando tag..." : "Criar tag"}
			</button>
		</div>
	);
}
