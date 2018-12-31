import React from 'react'
import { Link } from 'gatsby'
import { css } from 'styled-components'
import system from 'system-components'
import { Flex, Text } from './Primitives'
import { List, ListItem } from './Typography'
import Icon from './Icon'
import { themeHover } from '../utils/styles'

const activeBorder = css`
  .active & {
    border-bottom: ${({ theme }) => theme.borders[2]};
    border-color: ${({ theme }) => theme.colors.orange};
  }
`

const LinkText = system(
  {
    is: 'span',
    px: 1,
    pb: 1,
    fontSize: [0, 1],
    fontFamily: 'monospace',
  },
  'space',
  themeHover,
  activeBorder
)

const isActive = ({ location, href, isPartiallyCurrent }) => {
  if (location.pathname === '/' && href === '/') {
    return { className: 'active' }
  } else if (isPartiallyCurrent && href !== '/') {
    return { className: 'active' }
  }

  return null
}

const NavLink = ({ children, to, ...props }) => (
  <Link to={to} getProps={isActive}>
    <LinkText {...props}>{children}</LinkText>
  </Link>
)

const Navigation = ({ location }) => (
  <Flex
    is="nav"
    alignItems="center"
    justifyContent="space-between"
    mt={[0, 2, 3]}
    mb={[5, 6]}
  >
    <Flex alignItems="center">
      <Link to="/">
        <Text color="orange">
          <Icon glyph="logo" />
        </Text>
      </Link>

      <Link to="/" tabIndex="-1">
        <Text color="darkGrey" display={['none', 'inline']}>
          <Icon glyph="wordmark" />
        </Text>
      </Link>
    </Flex>

    <List fontFamily="monospace">
      <ListItem display="inline-block">
        <NavLink to="/" mr={2}>
          Home
        </NavLink>
      </ListItem>

      <ListItem display="inline-block">
        <NavLink to="/projects" mr={2}>
          Projects
        </NavLink>
      </ListItem>

      <ListItem display="inline-block">
        <NavLink to="/blog" mr={2}>
          Blog
        </NavLink>
      </ListItem>

      <ListItem display="inline-block">
        <NavLink to="/about">About</NavLink>
      </ListItem>
    </List>
  </Flex>
)

export default Navigation
