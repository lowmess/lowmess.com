import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { Box, Grid, Text, Container, Link } from 'theme-ui'

const FooterLink = ({ to, children, ...props }) => (
  <Link as={to ? GatsbyLink : 'a'} variant="ui" to={to} {...props}>
    {children}
  </Link>
)

FooterLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

const Footer = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
        edges {
          node {
            frontmatter {
              title
              description
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
    <Box as="footer" bg="footer" py={5} {...props}>
      <Container>
        <Grid
          gap={[4, 3]}
          columns={['repeat(2, minmax(max-content, 8rem))', '1fr 1fr 3fr']}
          sx={{ justifyContent: ['center', 'start'] }}
        >
          <Box>
            <Text variant="section-heading">Site</Text>

            <Box as="ul" variant="list">
              <li>
                <FooterLink to="/">Home</FooterLink>
              </li>

              <li>
                <FooterLink to="/projects">Projects</FooterLink>
              </li>

              <li>
                <FooterLink to="/blog">Blog</FooterLink>
              </li>

              <li>
                <FooterLink to="/colophon">Colophon</FooterLink>
              </li>

              <li>
                <FooterLink to="/uses">Uses</FooterLink>
              </li>
            </Box>
          </Box>

          <Box>
            <Text variant="section-heading">Links</Text>

            <Box as="ul" variant="list">
              <li>
                <FooterLink href="https://github.com/lowmess">
                  GitHub
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://twitter.com/lowmess">
                  Twitter
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://dribbble.com/lowmess">
                  Dribbble
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://codepen.io/lowmess">
                  CodePen
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://linkedin.com/in/lowmess">
                  LinkedIn
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://resume.lowmess.com">
                  Résumé
                </FooterLink>
              </li>
            </Box>
          </Box>

          <Box sx={{ display: ['none', 'block'] }}>
            <Text variant="section-heading">Latest Blog Post</Text>

            <Link
              variant="ui"
              as={GatsbyLink}
              to={post.fields.slug}
              sx={{ fontSize: 3, fontWeight: 'bold', lineHeight: 'heading' }}
            >
              {post.frontmatter.title}
            </Link>

            <Text as="p" mt={3} sx={{ maxWidth: 'measure' }}>
              {post.frontmatter.description}
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
