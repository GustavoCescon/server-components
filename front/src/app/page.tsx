import { Suspense } from "react";
import { AddTag } from "./add-tag";
import { Tags } from "./tags";

export default function Home() {
	return (
		<div className="container mx-auto p-10">
			<AddTag />
			<Suspense fallback={<p>Carregando tags..</p>}>
				<Tags />
			</Suspense>
		</div>
	);
}
