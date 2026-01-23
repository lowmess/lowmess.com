import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

import { blogPostSchema } from "#schemas/blog-post.ts";
import { concertSchema } from "#schemas/concert.ts";
import { resumeSchema } from "#schemas/resume.ts";
import { screeningSchema } from "#schemas/screening.ts";

const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
	schema: blogPostSchema,
});

const projects = defineCollection({
	loader: file("./src/data/projects.json"),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z
			.string()
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

export const collections = { blog, projects, resume, concerts, screenings };
