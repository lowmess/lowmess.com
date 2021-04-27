import * as React from 'react'
import { Flex } from 'theme-ui'
import { ResponsiveStyleValue } from '@theme-ui/css'
import { BoxProps } from '@theme-ui/components'

interface Props extends BoxProps {
	gap?: ResponsiveStyleValue<number>
}

const Stack: React.FC<Props> = ({ gap = 0, sx, children, ...props }) => (
	<Flex
		sx={{
			flexFlow: 'column nowrap',
			gap,
			...sx,
		}}
		{...props}
	>
		{children}
	</Flex>
)

export default Stack
