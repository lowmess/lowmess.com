import React from 'react'
import { Link } from 'gatsby'
import { Flex, Text } from './Primitives'
import { List, ListItem } from './Typography'
import Icon from './Icon'

const Navigation = ({ location }) => (
  <Flex
    as="nav"
    align="center"
    justify="space-between"
    mt={[0, 2, 3]}
    mb={[5, 6]}
  >
    <Flex align="center">
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
        <Link to="/">
          <Text
            {...(location.pathname.length === 1
              ? { borderBottom: 2, borderColor: 'orange' }
              : {})}
            fontSize={[0, 1]}
            color="darkGrey"
            hover={{ color: 'orange' }}
            px={1}
            pb={1}
            mr={2}
          >
            Home
          </Text>
        </Link>
      </ListItem>
      <ListItem display="inline-block">
        <Link to="/projects/">
          <Text
            {...(location.pathname.indexOf('/projects') === 0
              ? { borderBottom: 2, borderColor: 'orange' }
              : {})}
            fontSize={[0, 1]}
            color="darkGrey"
            hover={{ color: 'orange' }}
            px={1}
            pb={1}
            mr={2}
          >
            Projects
          </Text>
        </Link>
      </ListItem>
      <ListItem display="inline-block">
        <Link to="/blog/">
          <Text
            {...(location.pathname.indexOf('/blog') === 0
              ? { borderBottom: 2, borderColor: 'orange' }
              : {})}
            fontSize={[0, 1]}
            color="darkGrey"
            hover={{ color: 'orange' }}
            px={1}
            pb={1}
            mr={2}
          >
            Blog
          </Text>
        </Link>
      </ListItem>
      <ListItem display="inline-block">
        <Link to="/about/">
          <Text
            {...(location.pathname.indexOf('/about') === 0
              ? { borderBottom: 2, borderColor: 'orange' }
              : {})}
            fontSize={[0, 1]}
            color="darkGrey"
            hover={{ color: 'orange' }}
            px={1}
            pb={1}
          >
            About
          </Text>
        </Link>
      </ListItem>
    </List>
  </Flex>
)

export default Navigation
