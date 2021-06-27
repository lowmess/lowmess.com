export type Meta = {
	title: string
	description: string
	date: Date
	datetime?: string
	displayDate?: string
	year?: number
	slug?: string
	url?: string
}

export type Post = {
	meta: Meta
	content: string
}
