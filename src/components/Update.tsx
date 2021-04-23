import * as React from 'react'
import { Box, Heading, Container } from 'theme-ui'
import { BoxProps } from '@theme-ui/components'

interface Props extends BoxProps {
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

			{/* clears the spacing added by MDX components */}
			<Box mx={[-3, -4]}>{children}</Box>
		</Container>
	</Box>
)

export default Update
