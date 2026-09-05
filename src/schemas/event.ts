import { z } from "astro/zod";

import { concertSchema } from "#schemas/concert";
import { screeningSchema } from "#schemas/screening";
import { sportingEventSchema } from "#schemas/sporting-event";

export const EVENT_TYPES = Object.freeze({
	All: "all",
	Concert: "concert",
	Screening: "screening",
	SportingEvent: "sporting-event",
} as const);

export type EventType = (typeof EVENT_TYPES)[keyof typeof EVENT_TYPES];

export const categorizedEventSchema = z.discriminatedUnion("type", [
	z.object({ type: z.literal(EVENT_TYPES.Concert), data: concertSchema }),
	z.object({ type: z.literal(EVENT_TYPES.Screening), data: screeningSchema }),
	z.object({
		type: z.literal(EVENT_TYPES.SportingEvent),
		data: sportingEventSchema,
	}),
]);

export type CategorizedEvent = z.output<typeof categorizedEventSchema>;
