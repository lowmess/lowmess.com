import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Flex, Text } from './Primitives'
import { List, ListItem } from './Typography'
import ArrowLink from './ArrowLink'

const Footer = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const post = data.allMarkdownRemark.edges[0].node
      return (
        <Flex
          as="footer"
          mt="auto"
          mb={[3, 3, 4]}
          align="center"
          justify={['center', 'center', 'space-between']}
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
              <a href="https://twitter.com/lowmess">
                <Text
                  color="darkGrey"
                  hover={{ color: 'orange' }}
                  fontSize={[0, 1]}
                >
                  Twitter
                </Text>
              </a>
            </ListItem>
            <ListItem display="inline-block" mr={3}>
              <a href="https://github.com/lowmess">
                <Text
                  color="darkGrey"
                  hover={{ color: 'orange' }}
                  fontSize={[0, 1]}
                >
                  GitHub
                </Text>
              </a>
            </ListItem>
            <ListItem display="inline-block">
              <a href="https://dribbble.com/lowmess">
                <Text
                  color="darkGrey"
                  hover={{ color: 'orange' }}
                  fontSize={[0, 1]}
                >
                  Dribbble
                </Text>
              </a>
            </ListItem>
          </List>
        </Flex>
      )
    }}
  />
)

export default Footer
