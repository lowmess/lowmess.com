import { Theme, ColorOrNestedColorScale } from '@theme-ui/css'
import { NestedThemeUICSSObject } from './'

const styles: NestedThemeUICSSObject = {
	root: {
		fontSize: 2,
		fontFamily: 'sans',
		lineHeight: 'copy',
		textRendering: 'optimizeLegibility',
		// Not picked up by autoprefixer for some reason?
		WebkitFontSmoothing: 'antialiased',
	},

	a: {
		color: 'text',
		textDecoration: 'underline',
		textDecorationColor: (theme: Theme): ColorOrNestedColorScale =>
			theme.colors.primary,

		'&:hover': {
			color: 'primary',
		},
	},
}

export default styles
