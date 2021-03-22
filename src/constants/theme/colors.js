const baseOrange = `35, 90%`
const baseGray = `35, 10%`

const generatePalette = (hs) =>
	[...Array(9).keys()].map((l) => `hsl(${hs}, ${l + 1}0%)`).reverse()

const palette = {
	orange: `hsl(${baseOrange}, 50%)`,
	oranges: generatePalette(baseOrange),

	black: `hsl(${baseGray}, 15%)`,
	white: `hsl(${baseGray}, 100%)`,
	offWhite: `hsl(${baseGray}, 95%)`,
	grays: generatePalette(baseGray),
}

export default {
	black: palette.black,
	white: palette.white,

	text: palette.grays[7],
	background: palette.white,
	primary: palette.orange,
	secondary: palette.oranges[5],
	accent: palette.orange,
	highlight: palette.orange,
	muted: palette.grays[0],
	'muted-text': palette.grays[5],
	border: palette.grays[2],

	modes: {
		dark: {
			text: palette.offWhite,
			background: palette.grays[7],
			primary: palette.orange,
			secondary: palette.oranges[3],
			accent: palette.orange,
			highlight: palette.orange,
			muted: palette.black,
			'muted-text': palette.grays[3],
			border: palette.grays[5],
		},
	},
}
