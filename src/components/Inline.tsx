import * as React from 'react'
import { Box, Flex } from 'theme-ui'
import { ResponsiveStyleValue } from '@theme-ui/css'
import { BoxProps } from '@theme-ui/components'

interface Props extends BoxProps {
	gap?: ResponsiveStyleValue<number>
}

const Inline: React.FC<Props> = ({ gap = 0, sx, children, ...props }) => {
	const items = React.Children.toArray(children)

	return (
		<Flex
			sx={{
				flexWrap: 'wrap',
				marginRight: -gap,
				marginBottom: -gap,
				...sx,
			}}
			{...props}
		>
			{items.map((child, index) => (
				<Box
					key={index}
					sx={{
						display: 'inline-block',
						marginRight: gap,
						marginBottom: gap,
					}}
				>
					{child}
				</Box>
			))}
		</Flex>
	)
}

export default Inline
