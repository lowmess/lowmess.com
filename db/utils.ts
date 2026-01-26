export function isTuple<T>(array: T[]): array is [T, ...T[]] {
	return array.length > 0;
}

export function hasValue<T>(value: T | null | undefined): value is T {
	return value !== null && value !== undefined;
}

export function getDefaultTimePeriod() {
	// 25 hours ago, to account for action queuing and whatnot
	return Date.now() - 25 * 60 * 60 * 1000;
}
