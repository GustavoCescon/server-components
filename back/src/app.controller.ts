import { randomUUID } from "node:crypto";
import { Body, Controller, Get, Post } from "@nestjs/common";

// Definindo a interface para as tags
interface Tag {
	id: string;
	slug: string;
}

// Definindo a interface para o corpo da solicitação de criação de tag
interface CreateTagDto {
	slug: string;
}

@Controller()
export class AppController {
	private tags: Tag[] = [{id: '1', slug: "Next"}];

	@Get("tags")
	getTags(): Tag[] {
		return this.tags;
	}

	@Post("tags")
	createTag(@Body() createTagDto: CreateTagDto) {

    const {slug} = createTagDto;

     console.log(createTagDto)

    if(!slug) return; 

		const tag: Tag = {
			id: randomUUID(),
			slug: slug
		};

		this.tags.push(tag);

		return this.tags;
	}
}
