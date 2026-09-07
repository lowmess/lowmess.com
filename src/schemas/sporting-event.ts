import { z } from "astro/zod";

export const SPORTING_EVENT_TYPES = Object.freeze({
	Baseball: "baseball",
	Basketball: "basketball",
	Football: "football",
	Motorsport: "motorsport",
	Soccer: "soccer",
} as const);

export type SportingEventType =
	(typeof SPORTING_EVENT_TYPES)[keyof typeof SPORTING_EVENT_TYPES];

export const sportingEventSchema = z.object({
	date: z.iso
		.date()
		.or(z.date())
		.transform((val) => new Date(val)),
	title: z.string(),
	tournament: z.string().optional(),
	sport: z.enum(SPORTING_EVENT_TYPES),
	venue: z.string(),
	with: z.array(z.string()).optional(),
});

export type SportingEvent = z.output<typeof sportingEventSchema>;

export function isSportingEvent(event: unknown): event is SportingEvent {
	return (event as SportingEvent).sport !== undefined;
}
