import * as React from 'react'
import { useRouter } from 'next/router'
import { default as NextLink } from 'next/link'
import { Box, Flex, Container, NavLink } from 'theme-ui'
import { ThemeUIProps } from '../../types/ThemeUIComponent'
import SkipNavLink from './SkipNavLink'
import Logo from './Logo'
import ColorModeToggle from './ColorModeToggle'

const Nav: React.FC<ThemeUIProps> = ({ sx, ...props }) => {
  const { pathname } = useRouter()

  return (
    <Box
      as="nav"
      sx={{
        borderTop: 4,
        borderColor: 'primary',
        paddingTop: [4, null, 5],
        ...sx,
      }}
      {...props}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SkipNavLink />

        <Logo />

        <Flex sx={{ alignItems: 'center' }}>
          <Flex as="ul">
            <li>
              <NextLink href="/" passHref>
                <NavLink
                  data-active={pathname === '/' ? true : null}
                  mr={[1, 2]}
                >
                  Home
                </NavLink>
              </NextLink>
            </li>

            <li>
              <NextLink href="/projects" passHref>
                <NavLink
                  data-active={pathname.includes('/projects') ? true : null}
                  mr={[1, 2]}
                >
                  Projects
                </NavLink>
              </NextLink>
            </li>

            <li>
              <NextLink href="/blog" passHref>
                <NavLink data-active={pathname.includes('/blog') ? true : null}>
                  Blog
                </NavLink>
              </NextLink>
            </li>
          </Flex>

          <ColorModeToggle ml={[2, 3]} />
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
