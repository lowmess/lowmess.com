/* eslint-disable import/exports-last */

type Album = {
	name: string
	artist: string
}

export type Book = {
	name: string
	author: string
}

const randomNumberBetween = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min)

const favoriteAlbums: Array<Album> = [
	{
		name: 'Ants From Up There',
		artist: 'Black Country, New Road',
	},
	{
		name: 'Silent Alarm',
		artist: 'Bloc Party',
	},
	{
		name: 'Drunk Like Bible Times',
		artist: 'Dear and the Headlights',
	},
	{
		name: 'Put Your Ghost to Rest',
		artist: 'Kevin Devine',
	},
	{
		name: "A Hero's Death",
		artist: 'Fontaines D.C.',
	},
	{
		name: 'Dog Problems',
		artist: 'The Format',
	},
	{
		name: 'The Midnight Organ Fight',
		artist: 'Frightened Rabbit',
	},
	{
		name: 'Cooler Returns',
		artist: 'Kiwi Jr.',
	},
	{
		name: "I'm Like a Virgin Losing a Child",
		artist: 'Manchester Orchestra',
	},
	{
		name: 'The Lonesome Crowded West',
		artist: 'Modest Mouse',
	},
	{
		name: 'Singing Saw',
		artist: 'Kevin Morby',
	},
	{
		name: 'Power, Corruption & Lies',
		artist: 'New Order',
	},
	{
		name: 'Bless the Martyr and Kiss the Child',
		artist: 'Norma Jean',
	},
	{
		name: 'MY WOMAN',
		artist: 'Angel Olsen',
	},
	{
		name: 'Room Inside The World',
		artist: 'Ought',
	},
	{
		name: 'Cardinal',
		artist: 'Pinegrove',
	},
	{
		name: 'Censored Colors',
		artist: 'Portugal. The Man',
	},
	{
		name: "The Sun's Tirade",
		artist: 'Isaiah Rashad',
	},
	{
		name: 'WORRY.',
		artist: 'Jeff Rosenstock',
	},
	{
		name: 'Manipulator',
		artist: 'Ty Segall',
	},
	{
		name: 'The Party',
		artist: 'Andy Shauf',
	},
	{
		name: 'Lonerism',
		artist: 'Tame Impala',
	},
	{
		name: 'Marquee Moon',
		artist: 'Television',
	},
	{
		name: 'You & Me',
		artist: 'The Walkmen',
	},
	{
		name: 'Saint Cloud',
		artist: 'Waxahatchee',
	},
	{
		name: 'Yuck',
		artist: 'Yuck',
	},
]

const favoriteBooks: Array<Book> = [
	{
		name: "The Hitchhiker's Guide to the Galaxy",
		author: 'Douglas Adams',
	},
	{
		name: 'Stories of Your Life and Others',
		author: 'Ted Chiang',
	},
	{
		name: 'Health Justice Now',
		author: 'Timothy Faust',
	},
	{
		name: 'Art Dog',
		author: 'Thacher Hurd',
	},
	{
		name: 'Redwall',
		author: 'Brian Jacques',
	},
	{
		name: 'The Three-Body Problem',
		author: 'Cixin Liu',
	},
	{
		name: '1Q84',
		author: 'Haruki Murakami',
	},
	{
		name: 'Good Omens',
		author: 'Terry Pratchett and Neil Gaiman',
	},
	{
		name: 'There Are No Accidents',
		author: 'Jessie Singer',
	},
	{
		name: 'Walkable City',
		author: 'Jeff Speck',
	},
	{
		name: 'Cryptonomicon',
		author: 'Neal Stephenson',
	},
	{
		name: 'Annihilation',
		author: 'Jeff VanderMeer',
	},
]

export type Stats = {
	commits?: number
	tweets?: number
	places?: number
	steps?: number
	songs?: number
	album?: Album
	books?: Array<Book>
}

const getStats = (): Stats => {
	const commits = randomNumberBetween(0, 128)
	const tweets = randomNumberBetween(0, 69)
	const places = randomNumberBetween(0, 42)
	const steps = randomNumberBetween(150000, 315000)
	const songs = randomNumberBetween(666, 1969)
	const album =
		favoriteAlbums[randomNumberBetween(0, favoriteAlbums.length - 1)]

	const bookSet: Set<Book> = new Set()

	for (let i = 0; i < randomNumberBetween(1, 3); i++) {
		const book = favoriteBooks[randomNumberBetween(0, favoriteBooks.length - 1)]

		bookSet.add(book)
	}

	const books = Array.from(bookSet)

	return {
		commits,
		tweets,
		places,
		steps,
		songs,
		album,
		books,
	}
}

export default getStats
