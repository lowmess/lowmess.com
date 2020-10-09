import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Link as ThemeLink } from 'theme-ui'
import { ThemeUIProps } from '../types/ThemeUIComponent'

interface LinkProps extends ThemeUIProps {
  href: string
}

const Link: React.FC<LinkProps> = ({ href, ...props }) => (
  <NextLink href={href} passHref>
    <ThemeLink {...props} />
  </NextLink>
)

export default Link
