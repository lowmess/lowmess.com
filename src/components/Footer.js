import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled, { withComponent } from 'react-emotion'
import { Box, Flex, Text } from './Layout'
import { List, ListItem } from './Typography'
import Icon from './Icon'

const Foot = Flex.withComponent('footer')

const Footer = ({ post }) => (
  <Foot mt="auto" mb={[3, 3, 4]} align="center" justify={['center', 'center', 'space-between']} fontFamily="monospace">
    <Box display={['none', 'none', 'block']}>
      <Text mr={2}>From the blog:</Text>
      <Link to={post.fields.slug}>
        <Text color="black" hover={{ color: 'orange' }} fontWeight="7" display="inline-flex">
          {post.frontmatter.title} <Icon glyph="arrow" />
        </Text>
      </Link>
    </Box>
    <List>
      <ListItem display="inline-block" mr={3}>
        <a href="https://twitter.com/lowmess">
          <Text color="black" hover={{ color: 'orange' }}>
            Twitter
          </Text>
        </a>
      </ListItem>
      <ListItem display="inline-block" mr={3}>
        <a href="https://github.com/lowmess">
          <Text color="black" hover={{ color: 'orange' }}>
            GitHub
          </Text>
        </a>
      </ListItem>
      <ListItem display="inline-block">
        <a href="https://dribbble.com/lowmess">
          <Text color="black" hover={{ color: 'orange' }}>
            Dribbble
          </Text>
        </a>
      </ListItem>
    </List>
  </Foot>
)

export default Footer
