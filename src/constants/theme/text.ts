import { NestedThemeUICSSObject } from './'

const text: NestedThemeUICSSObject = {
	heading: {
		fontSize: [4, 5],
		fontWeight: 'semi-bold',
		lineHeight: 'heading',
		letterSpacing: '-0.02em',
	},

	'site-intro': {
		display: 'inline',
		fontSize: [5, 6],
		fontWeight: 'normal',
		lineHeight: 'copy',
		letterSpacing: '-0.02em',
	},

	'section-heading': {
		color: 'muted-text',
		fontSize: 0,
		fontWeight: 'bold',
		lineHeight: 'heading',
		textTransform: 'uppercase',
		letterSpacing: '0.2em',
	},

	'header-title': {
		fontSize: [5, 6],
		fontWeight: 'bold',
		lineHeight: 'heading',
		letterSpacing: '-0.02em',
	},

	list: {
		p: 0,
		listStyleType: 'none',
	},
}

export default text
