interface data {
	id: number | string;
	slug: string;
}

export async function Tags() {
	await new Promise((resolve) => setTimeout(resolve, 3000));

	const response = await fetch("http://localhost:3333/tags", {
		next: {
			tags: ["tags"],
		},
	});

	const data = await response.json();
	return (
		<ul>
			{data.map((item: data) => (
				<li key={item.id}>{item.slug}</li>
			))}
		</ul>
	);
}
