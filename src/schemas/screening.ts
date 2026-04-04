import { z } from "astro/zod";

export const screeningSchema = z.object({
	date: z.iso
		.date()
		.or(z.date())
		.transform((val) => new Date(val)),
	title: z.string(),
	format: z
		.enum(["35mm", "70mm", "IMAX", "IMAX 3D", "3D", "Digital"])
		.default("Digital"),
	venue: z.string(),
	with: z.array(z.string()).optional(),
	link: z.string(),
});

export type Screening = z.output<typeof screeningSchema>;
