import React from 'react'
import { Link } from 'gatsby'
import system from 'system-components'
import { Flex, Text } from './Primitives'
import { List, ListItem } from './Typography'
import Icon from './Icon'
import { textHover } from '../utils/styles'

const NavLink = system(
  {
    is: Link,
    px: 1,
    pb: 1,
    fontSize: [0, 1],
    fontFamily: 'monospace',
  },
  'space',
  'borders',
  'borderColor',
  textHover
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
        <NavLink
          to="/"
          mr={2}
          {...(location.pathname === '/'
            ? { borderBottom: 2, borderColor: 'orange' }
            : {})}
        >
          Home
        </NavLink>
      </ListItem>

      <ListItem display="inline-block">
        <NavLink
          to="/projects/"
          mr={2}
          {...(location.pathname.indexOf('/projects') === 0
            ? { borderBottom: 2, borderColor: 'orange' }
            : {})}
        >
          Projects
        </NavLink>
      </ListItem>

      <ListItem display="inline-block">
        <NavLink
          to="/blog/"
          mr={2}
          {...(location.pathname.indexOf('/blog') === 0
            ? { borderBottom: 2, borderColor: 'orange' }
            : {})}
        >
          Blog
        </NavLink>
      </ListItem>

      <ListItem display="inline-block">
        <NavLink
          to="/about/"
          {...(location.pathname.indexOf('/about') === 0
            ? { borderBottom: 2, borderColor: 'orange' }
            : {})}
        >
          About
        </NavLink>
      </ListItem>
    </List>
  </Flex>
)

export default Navigation
