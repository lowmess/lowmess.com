import * as React from 'react'
import { Box, Text, Container } from 'theme-ui'
import pluralize from '../lib/pluralize'

const ExampleCounter: React.FC = () => {
	const [count, setCount] = React.useState(0)

	return (
		<Container sx={{ maxWidth: 'mdx-measure' }}>
			<Box
				sx={{
					padding: [3, 4],
					border: 1,
					borderColor: 'border',
					backgroundColor: 'muted',
				}}
				onClick={(): void => {
					setCount(count + 1)
				}}
			>
				<Text sx={{ fontSize: [4, 5] }}>
					You&rsquo;ve clicked this box {count}{' '}
					{pluralize(count, 'time', 'times')}.
				</Text>
			</Box>
		</Container>
	)
}

export default ExampleCounter
