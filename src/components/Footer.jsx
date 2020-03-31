import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
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

const Footer = (props) => (
  <Box as="footer" bg="footer" py={5} {...props}>
    <Container>
      <Grid gap={3} columns="1fr 1fr 2fr">
        <Box>
          <Text variant="footer-header">Site</Text>

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
          <Text variant="footer-header">Links</Text>

          <Box as="ul" variant="list">
            <li>
              <FooterLink href="https://github.com/lowmess">GitHub</FooterLink>
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
              <FooterLink href="https://codepen.io/lowmess">CodePen</FooterLink>
            </li>

            <li>
              <FooterLink href="https://linkedin.com/in/lowmess">
                LinkedIn
              </FooterLink>
            </li>

            <li>
              <FooterLink href="https://resume.lowmess.com">Résumé</FooterLink>
            </li>
          </Box>
        </Box>

        <Box>
          <Text variant="footer-header">Latest Blog Post</Text>
        </Box>
      </Grid>
    </Container>
  </Box>
)

export default Footer
