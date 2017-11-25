import React from 'react'
import Link from 'gatsby-link'
import styled, { withComponent } from 'react-emotion'
import { color } from 'styled-system'
import { display } from '../utils/styled-system-extras'
import { Flex, Text } from './Layout'
import { List, ListItem } from './Typography'
import Icon from './Icon'

const Nav = Flex.withComponent('nav')

const Navigation = ({ location }) => (
  <Nav align="center" justify="space-between" mt={[0, 2, 3]} mb={[5, 6]}>
    <Flex align="center">
      <Link to="/">
        <Text color="orange">
          <Icon glyph="logo" />
        </Text>
      </Link>
      <Link to="/">
        <Text color="black" display={['none', 'inline']}>
          <Icon glyph="wordmark" />
        </Text>
      </Link>
    </Flex>
    <List fontFamily="monospace">
      <ListItem display={['none', 'inline-block']}>
        <Link to="/">
          <Text
            {...(location.pathname.length === 1 ? { borderBottom: 'true', borderWidth: 2, borderColor: 'orange' } : {})}
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
        <Link to="/projects">
          <Text
            {...(location.pathname.indexOf('/projects') === 0
              ? { borderBottom: 'true', borderWidth: 2, borderColor: 'orange' }
              : {})}
            color="black"
            hover={{ color: 'orange' }}
            textDecoration="none"
            px={1}
            pb={1}
            mr={2}
          >
            Projects
          </Text>
        </Link>
      </ListItem>
      <ListItem display="inline-block">
        <Link to="/blog">
          <Text
            {...(location.pathname.indexOf('/blog') === 0
              ? { borderBottom: 'true', borderWidth: 2, borderColor: 'orange' }
              : {})}
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
            {...(location.pathname.indexOf('/about') === 0
              ? { borderBottom: 'true', borderWidth: 2, borderColor: 'orange' }
              : {})}
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
