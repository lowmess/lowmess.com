const orange = (l = 50) => `hsl(35, 90%, ${l}%)`
const gray = (l = 50) => `hsl(35, 10%, ${l}%)`

const colors = {
	black: gray(15),
	white: gray(100),

	text: gray(25),
	background: gray(100),
	primary: orange(),
	secondary: orange(60),
	accent: orange(),
	highlight: orange(),
	muted: gray(90),
	'muted-text': gray(39), // 40 is just under contrast, this gets the same look
	border: gray(80),

	modes: {
		dark: {
			text: gray(95),
			background: gray(20),
			primary: orange(),
			secondary: orange(40),
			accent: orange(),
			highlight: orange(),
			muted: gray(15),
			'muted-text': gray(61), // 60 is just under contrast, this gets the same look
			border: gray(40),
		},
	},
}

export default colors
