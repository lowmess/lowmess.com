import React from 'react'
import Link from 'gatsby-link'
import styled, { withComponent } from 'react-emotion'
import { color } from 'styled-system'
import { display } from '../utils/styled-system-extras'
import { Flex, Text } from './Layout'
import { List, ListItem } from './Typography'
import Icon from './Icon'

// I'm sure there's a cleaner way to do this, but
const NavElement = Flex.withComponent('nav')
const Nav = styled(NavElement)`
  height: 2rem;
`
// logo stuff
const LogoContainer = styled(Flex)`
  height: 100%;
`
const LogoLink = styled(Link)`
  height: 100%;
  ${display};
  ${color};
`
const NavIcon = styled(Icon)`
  height: 100%;
`

const Navigation = ({ location }) => (
  <Nav align="center" justify="space-between" mt={[0, 2, 3]} mb={[5, 6]}>
    <LogoContainer align="center">
      <LogoLink to="/" color="orange" display="inline-block">
        <NavIcon height="100%" glyph="logo" />
      </LogoLink>
      <LogoLink to="/" color="black" display={['none', 'inline-block']}>
        <NavIcon height="100%" glyph="wordmark" />
      </LogoLink>
    </LogoContainer>
    <List fontFamily="monospace">
      <ListItem display="inline-block">
        <Link to="/">
          <Text
            {...(location.pathname.length === 1 ? { borderBottom: 'true' } : { style: { border: 'none' } })}
            borderWidth={2}
            borderColor="orange"
            color="black"
            hover={{ color: 'orange' }}
            textDecoration="none"
            px={1}
            pb={1}
            mr={2}
          >
            Home
          </Text>
        </Link>
      </ListItem>
      <ListItem display="inline-block">
        <Link to="/blog">
          <Text
            {...(location.pathname.indexOf('/blog') === 0 ? { borderBottom: 'true' } : { style: { border: 'none' } })}
            borderWidth={2}
            borderColor="orange"
            color="black"
            hover={{ color: 'orange' }}
            textDecoration="none"
            px={1}
            pb={1}
            mr={2}
          >
            Blog
          </Text>
        </Link>
      </ListItem>
      <ListItem display="inline-block">
        <Link to="/about">
          <Text
            {...(location.pathname.indexOf('/about') === 0 ? { borderBottom: 'true' } : { style: { border: 'none' } })}
            borderWidth={2}
            borderColor="orange"
            color="black"
            hover={{ color: 'orange' }}
            textDecoration="none"
            px={1}
            pb={1}
          >
            About
          </Text>
        </Link>
      </ListItem>
    </List>
  </Nav>
)

export default Navigation
