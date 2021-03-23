import * as React from 'react'
import { useColorMode, Button } from 'theme-ui'
import { VisuallyHidden } from '@reach/visually-hidden'
import { ButtonProps } from '@theme-ui/components'

// Icons courtesy of Feather
// @link https://feathericons.com/

const ColorModeToggle: React.FC<ButtonProps> = (props) => {
	const [colorMode, setColorMode] = useColorMode()

	return (
		<Button
			variant="color-mode-toggle"
			onClick={(): void => {
				setColorMode(colorMode === 'default' ? 'dark' : 'default')
			}}
			sx={{
				svg: { width: '1em', height: '1em', transform: 'translateY(-1px)' },
			}}
			{...props}
		>
			<VisuallyHidden>Toggle Color Mode</VisuallyHidden>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				{colorMode === 'default' ? (
					<React.Fragment>
						<circle cx="12" cy="12" r="5" />
						<line x1="12" y1="1" x2="12" y2="3" />
						<line x1="12" y1="21" x2="12" y2="23" />
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
						<line x1="1" y1="12" x2="3" y2="12" />
						<line x1="21" y1="12" x2="23" y2="12" />
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
					</React.Fragment>
				) : (
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				)}
			</svg>
		</Button>
	)
}

export default ColorModeToggle
