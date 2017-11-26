import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled, { withComponent } from 'react-emotion'
import { Box, Flex, Text } from './Layout'
import { List, ListItem } from './Typography'
import ArrowLink from './ArrowLink'

const Foot = Flex.withComponent('footer')

const Footer = ({ post }) => (
  <Foot mt="auto" mb={[3, 3, 4]} align="center" justify={['center', 'center', 'space-between']} fontFamily="monospace">
    <Box display={['none', 'none', 'block']}>
      <Text mr={2}>From the blog:</Text>
      <ArrowLink fontWeight={7} dest={post.fields.slug} text={post.frontmatter.title} />
    </Box>
    <List>
      <ListItem display="inline-block" mr={3}>
        <a href="https://twitter.com/lowmess">
          <Text color="black" hover={{ color: 'orange' }} fontSize={[0, 1]}>
            Twitter
          </Text>
        </a>
      </ListItem>
      <ListItem display="inline-block" mr={3}>
        <a href="https://github.com/lowmess">
          <Text color="black" hover={{ color: 'orange' }} fontSize={[0, 1]}>
            GitHub
          </Text>
        </a>
      </ListItem>
      <ListItem display="inline-block">
        <a href="https://dribbble.com/lowmess">
          <Text color="black" hover={{ color: 'orange' }} fontSize={[0, 1]}>
            Dribbble
          </Text>
        </a>
      </ListItem>
    </List>
  </Foot>
)

export default Footer
