import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Link as ThemeUILink } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

interface LinkProps extends ThemeUIProps {
  href: string
}

const Link: React.FC<LinkProps> = ({ href, ...props }) => (
  <NextLink href={href} passHref>
    <ThemeUILink {...props} />
  </NextLink>
)

export default Link
