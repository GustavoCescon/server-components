import { revalidateTag } from "next/cache";
import { AddTagButton } from "./add-tag-button";

export function AddTag() {
	async function handleSubmit(form: FormData) {
		"use server";

		const slug = form.get("slug");

		if (!slug) {
			return;
		}
		const data = { slug: slug };
		await new Promise((resolve) => setTimeout(resolve, 3000));

		await fetch("http://localhost:3333/tags", {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-type": "application/json; charset=UTF-8" },
		});
		revalidateTag("tags");
	}

	return (
		<form action={handleSubmit} method="POST">
			<div className="mb-2">
				<label
					htmlFor="large-input"
					className="block mb-2 text-sm font-medium text-gray-900 "
				>
					Digite o slug da tag
				</label>
				<input
					type="text"
					id="slug"
					name="slug"
					placeholder="Slug tag"
					className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>
			<AddTagButton />
		</form>
	);
}
