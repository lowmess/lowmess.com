const sans =
	'Inter, "Inter UI", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Oxygen, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
const mono =
	'"Dank Mono", Dank, dm, Menlo, Consolas, Roboto Mono, Ubuntu Monospace, Oxygen Mono, Liberation Mono, monospace'

const fonts = {
	sans,
	mono,
	heading: sans,
}

const fontSizes = [
	'0.75rem',
	'0.875rem',
	'1rem',
	'1.125rem',
	'1.25rem',
	'1.5rem',
	'2rem',
	'3rem',
]

const fontWeights = {
	thin: 100,
	'extra-light': 200,
	light: 300,
	normal: 400,
	medium: 500,
	'semi-bold': 600,
	bold: 700,
	'extra-bold': 800,
	black: 900,

	heading: 700,
}

const lineHeights = {
	solid: 1,
	heading: 1.25,
	copy: 1.5,
}

export { fonts, fontSizes, fontWeights, lineHeights }
