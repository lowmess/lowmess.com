import * as React from 'react'
import { Box, Heading, Container } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

interface Props extends ThemeUIProps {
	date?: string
	inline?: boolean
}

const Update: React.FC<Props> = ({
	date,
	inline = false,
	sx,
	children,
	...props
}) => (
	<Box
		bg="muted"
		sx={{
			marginY: inline ? null : 5,
			paddingY: 4,
		}}
	>
		<Container sx={{ maxWidth: 'mdx-measure', ...sx }} {...props}>
			<Heading as="h2" variant="section-heading" mb={3}>
				Update {date && <span>({date})</span>}
			</Heading>

			{/* inline font-size taken from `Paragraph.tsx` */}
			<Box as="p" sx={{ fontSize: inline ? [null, null, 3] : [3, null, 4] }}>
				{children}
			</Box>
		</Container>
	</Box>
)

export default Update
