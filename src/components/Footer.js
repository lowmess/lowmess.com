import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, Text, Link } from 'rebass'
import ArrowLink from './ArrowLink'
import { List, ListItem } from './Typography'

const SocialLink = ({ href, children, ...props }) => (
  <ListItem sx={{ display: 'inline-block' }} {...props}>
    <Link href={href} variant="ui-link" fontSize={[0, 1]}>
      {children}
    </Link>
  </ListItem>
)

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
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

  const post = data.allMdx.edges[0].node

  return (
    <Text as="footer" fontFamily="monospace" mt="auto" mb={[3, 3, 4]}>
      <Flex
        alignItems="center"
        justifyContent={['center', 'center', 'space-between']}
      >
        <Box sx={{ display: ['none', 'none', 'block'] }}>
          <Text as="span" mr={2}>
            From the blog:
          </Text>

          <ArrowLink fontWeight="bold" to={post.fields.slug}>
            {post.frontmatter.title}
          </ArrowLink>
        </Box>

        <List>
          <SocialLink href="https://twitter.com/lowmess" mr={3}>
            Twitter
          </SocialLink>

          <SocialLink href="https://github.com/lowmess" mr={3}>
            GitHub
          </SocialLink>

          <SocialLink href="https://resume.lowmess.com">
            R&eacute;sum&eacute;
          </SocialLink>
        </List>
      </Flex>
    </Text>
  )
}

export default Footer
