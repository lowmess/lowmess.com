import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import system from 'system-components'
import ArrowLink from './ArrowLink'
import { Box, Flex, Text } from './Primitives'
import { List, ListItem } from './Typography'
import { themeHover } from '../utils/styles'

const SocialLink = system(
  {
    is: 'a',
    fontSize: [0, 1],
  },
  themeHover
)

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const post = data.allMarkdownRemark.edges[0].node

  return (
    <Flex
      is="footer"
      alignItems="center"
      justifyContent={['center', 'center', 'space-between']}
      mt="auto"
      mb={[3, 3, 4]}
      fontFamily="monospace"
    >
      <Box display={['none', 'none', 'block']}>
        <Text mr={2}>From the blog:</Text>

        <ArrowLink fontWeight={7} dest={post.fields.slug}>
          {post.frontmatter.title}
        </ArrowLink>
      </Box>

      <List>
        <ListItem display="inline-block" mr={3}>
          <SocialLink href="https://twitter.com/lowmess">Twitter</SocialLink>
        </ListItem>

        <ListItem display="inline-block" mr={3}>
          <SocialLink href="https://github.com/lowmess">GitHub</SocialLink>
        </ListItem>

        <ListItem display="inline-block">
          <SocialLink href="https://dribbble.com/lowmess">Dribbble</SocialLink>
        </ListItem>
      </List>
    </Flex>
  )
}

export default Footer
