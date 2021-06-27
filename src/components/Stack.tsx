import * as React from 'react'
import { Flex } from 'theme-ui'
import { ResponsiveStyleValue } from '@theme-ui/css'
import { BoxProps } from '@theme-ui/components'

type Direction = 'vertical' | 'horizontal'

interface StackProps extends BoxProps {
	direction?: Direction | Direction[]
	gap?: ResponsiveStyleValue<number>
}

export const Stack: React.FC<StackProps> = ({
	direction = 'vertical',
	gap = 0,
	sx,
	children,
	...props
}) => {
	const directionToFlow = (flowDirection: Direction): string =>
		flowDirection === 'vertical' ? 'column nowrap' : 'row wrap'

	const flexFlow = Array.isArray(direction)
		? direction.map(directionToFlow)
		: directionToFlow(direction)

	return (
		<Flex
			sx={{
				flexFlow,
				gap,
				...sx,
			}}
			{...props}
		>
			{children}
		</Flex>
	)
}

type DirectionalStackProps = Omit<StackProps, 'direction'>

export const VStack: React.FC<DirectionalStackProps> = (props) => (
	<Stack {...props} direction="vertical" />
)

export const HStack: React.FC<DirectionalStackProps> = (props) => (
	<Stack {...props} direction="horizontal" />
)
