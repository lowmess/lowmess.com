import * as React from 'react'
import { Text, Container } from 'theme-ui'

const Paragraph: React.FC = (props) => (
	<Container sx={{ maxWidth: 'mdx-measure' }}>
		<Text as="p" sx={{ fontSize: [null, null, 3] }} {...props} />
	</Container>
)

export default Paragraph
