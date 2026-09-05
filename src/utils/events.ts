import { type CategorizedEvent, EVENT_TYPES } from "#schemas/event";
import { type Concert, isConcert } from "#schemas/concert";
import { type Screening, isScreening } from "#schemas/screening";
import { type SportingEvent, isSportingEvent } from "#schemas/sporting-event";

export function categorizeEvents(
	events: Array<Concert | Screening | SportingEvent>,
): Array<CategorizedEvent> {
	return events.map((event) => {
		if (isConcert(event)) {
			return { type: EVENT_TYPES.Concert, data: event };
		}

		if (isScreening(event)) {
			return { type: EVENT_TYPES.Screening, data: event };
		}

		if (isSportingEvent(event)) {
			return { type: EVENT_TYPES.SportingEvent, data: event };
		}

		throw new Error("unknown event type passed");
	});
}

type EventGroups = Array<{
	year: number;
	months: Array<{
		id: number;
		label: string;
		events: Array<CategorizedEvent>;
	}>;
}>;

export function groupEventsByMonth(
	events: Array<CategorizedEvent>,
): EventGroups {
	const years: EventGroups = [];

	const monthFormatter = new Intl.DateTimeFormat("en-us", {
		month: "long",
		timeZone: "UTC",
	});

	for (const event of events) {
		const date = event.data.date;

		const year = date.getUTCFullYear();
		const monthId = date.getUTCMonth() + 1;
		const month = monthFormatter.format(date);

		const yearContainer = years.find((yearObj) => yearObj.year === year);

		if (!yearContainer) {
			years.push({
				year,
				months: [{ id: monthId, label: month, events: [event] }],
			});
			continue;
		}

		const monthContainer = yearContainer.months.find(
			(monthObj) => monthObj.id === monthId,
		);

		if (!monthContainer) {
			yearContainer.months.push({ id: monthId, label: month, events: [event] });
			continue;
		}

		monthContainer.events.push(event);
	}

	// sort groups in reverse chronological order
	years
		.sort((a, b) => b.year - a.year)
		.forEach((year) => {
			year.months.sort((a, b) => b.id - a.id);

			year.months.forEach((month) => {
				month.events.sort((a, b) => {
					const time = b.data.date.getTime() - a.data.date.getTime();

					if (time !== 0) {
						return time;
					}

					return -1;
				});
			});
		});

	return years;
}
