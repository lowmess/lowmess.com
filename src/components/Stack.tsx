import * as React from 'react'
import { Box } from 'theme-ui'
import { ResponsiveStyleValue } from '@theme-ui/css'
import { BoxProps } from '@theme-ui/components'

interface Props extends BoxProps {
	gap?: ResponsiveStyleValue<number>
	dividers?: boolean
	dividerColor?: ResponsiveStyleValue<string>
}

const Stack: React.FC<Props> = ({
	gap = 0,
	dividers,
	dividerColor = 'border',
	children,
	...props
}) => {
	const items = React.Children.toArray(children)

	return (
		<Box {...props}>
			{items.map((child, index) => (
				<Box
					key={index}
					sx={{
						'& + &': {
							marginTop: gap,
							borderTop: dividers ? 1 : 0,
							borderColor: dividerColor,
							paddingTop: dividers ? gap : 0,
						},
					}}
				>
					{child}
				</Box>
			))}
		</Box>
	)
}

export default Stack
