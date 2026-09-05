import { file, glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

import { blogPostSchema } from "#schemas/blog-post";
import { concertSchema } from "#schemas/concert";
import { resumeSchema } from "#schemas/resume";
import { screeningSchema } from "#schemas/screening";
import { sportingEventSchema } from "#schemas/sporting-event";

const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
	schema: blogPostSchema,
});

const projects = defineCollection({
	loader: file("./src/data/projects.json"),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.iso
			.date()
			.or(z.date())
			.transform((val) => new Date(val)),
		website: z.string().optional(),
		repo: z.string().optional(),
	}),
});

const resume = defineCollection({
	loader: file("./src/data/resume.json"),
	schema: resumeSchema,
});

const concerts = defineCollection({
	loader: file("./src/data/concerts.json"),
	schema: concertSchema,
});

const screenings = defineCollection({
	loader: file("./src/data/screenings.json"),
	schema: screeningSchema,
});

const sportingEvents = defineCollection({
	loader: file("./src/data/sporting-events.json"),
	schema: sportingEventSchema,
});

export const collections = {
	blog,
	projects,
	resume,
	concerts,
	screenings,
	sportingEvents,
};
