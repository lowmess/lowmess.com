import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

import { resumeSchema } from "#schemas/resume.ts";

export const blogPostSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z
		.string()
		.or(z.date())
		.transform((val) => new Date(val)),
	draft: z.boolean().optional(),
	updated: z
		.string()
		.or(z.date())
		.optional()
		.transform((val) => (val ? new Date(val) : undefined)),
	archived: z
		.string()
		.or(z.date())
		.optional()
		.transform((val) => {
			if (!val) return val;

			return new Date(val);
		}),
	archiveReason: z.string().optional(),
});

export type BlogPost = z.infer<typeof blogPostSchema>;

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

export const collections = { blog, projects, resume };
