import * as React from 'react'
import { Container } from 'theme-ui'

const Break: React.FC = () => (
	<Container
		as="hr"
		sx={{
			height: '0.125rem',
			marginY: 5,
			border: 0,
			backgroundColor: 'muted',
		}}
	/>
)

export default Break
