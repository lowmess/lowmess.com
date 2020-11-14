import * as React from 'react'
import { Box, Container } from 'theme-ui'

const BlockQuote: React.FC = (props) => (
	<Container sx={{ maxWidth: 'mdx-measure' }}>
		<Box
			as="blockquote"
			sx={{
				position: 'relative',
				paddingLeft: [3, 0],

				'&::before': {
					content: 'open-quote',
					position: 'absolute',
					top: -3,
					right: (theme) => [`calc(100% - ${theme.space[3]})`, '100%'],
					marginRight: 2,
					color: 'muted-text',
					fontSize: 7,
				},

				div: {
					display: 'contents',
				},

				p: {
					fontSize: [4, 5],
					fontWeight: 'semi-bold',
					lineHeight: 'heading',
				},

				cite: {
					display: 'inline-block',
					marginTop: 2,
					fontStyle: 'italic',

					'&::before': {
						content: '"\u2015"',
						marginRight: 2,
					},
				},
			}}
			{...props}
		/>
	</Container>
)

export default BlockQuote
