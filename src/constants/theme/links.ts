const links = {
	nav: {
		borderBottom: 2,
		borderColor: 'transparent',
		padding: 2,
		fontSize: [1, 2],
		fontWeight: 'normal',
		color: 'text',

		'&:hover': {
			borderColor: 'border',
			color: 'text',
		},

		'&:focus': {
			color: 'text',
		},

		'&[aria-current]': {
			borderColor: 'primary',
		},
	},

	ui: {
		color: 'text',
		textDecoration: 'none',

		'&:hover': {
			color: 'primary',
		},
	},
}

export default links
