import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Link as ThemeUILink } from 'theme-ui'
import { LinkProps as ThemeLinkProps } from '@theme-ui/components'

interface LinkProps extends ThemeLinkProps {
	href: string
}

const Link: React.FC<LinkProps> = ({ href, ...props }) => (
	<NextLink href={href} passHref>
		<ThemeUILink {...props} />
	</NextLink>
)

export default Link
