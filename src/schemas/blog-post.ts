import { z } from "astro:content";

export const blogPostSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z
		.string()
		.date()
		.or(z.date())
		.transform((val) => new Date(val)),
	draft: z.boolean().optional(),
	updated: z
		.string()
		.date()
		.or(z.date())
		.optional()
		.transform((val) => (val ? new Date(val) : undefined)),
	archived: z
		.string()
		.date()
		.or(z.date())
		.optional()
		.transform((val) => {
			if (!val) return val;

			return new Date(val);
		}),
	archiveReason: z.string().optional(),
});

export type BlogPost = z.output<typeof blogPostSchema>;
