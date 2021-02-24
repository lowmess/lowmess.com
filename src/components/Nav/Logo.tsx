import * as React from 'react'
import Link from 'next/link'
import { Text } from 'theme-ui'

const Logo: React.FC = () => (
	<Link href="/" passHref>
		<Text
			as="a"
			tabIndex={-1}
			sx={{
				display: 'inline',
				color: 'primary',
				textDecoration: 'none',

				// ordinarily, this would be a big no-no, but since this can't be
				// accessed with a keyboard anyhow, it should be fine.
				'&:focus': {
					outline: 0,
				},
			}}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 281 241"
				width="25"
				height="21"
				preserveAspectRatio="xMinYMid"
			>
				<title>Go to homepage</title>
				<path d="M280 120v120c-46.795 0-93.59.148-140.385-.001-24.624-.235-48.379-16.914-56.455-40.76-2.093-6.18-3.139-12.726-3.16-19.207V40H40v200H0V0h120c0 60.088-.568 120.178.002 180.263.164 10.317 9.135 19.703 20.03 19.737H240v-40h-80V0h40v120h80z" />
			</svg>
		</Text>
	</Link>
)

export default Logo
