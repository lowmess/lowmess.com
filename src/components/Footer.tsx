import * as React from 'react'
import { Box, Grid, Text, Container, Link as ThemeLink } from 'theme-ui'
import Link from '../components/Link'
import posts from '../utils/getAllPosts'
import { ThemeUIProps } from '../types/ThemeUIComponent'

interface FooterLinkProps {
  href: string
  external?: boolean
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, external, ...props }) =>
  external ? (
    <ThemeLink variant="ui" href={href} {...props} />
  ) : (
    <Link variant="ui" href={href} {...props} />
  )

const Footer: React.FC<ThemeUIProps> = (props) => {
  const post = posts[0]

  return (
    <Box as="footer" bg="muted" py={5} {...props}>
      <Container>
        <Grid
          gap={[4, 3]}
          columns={['repeat(2, minmax(max-content, 8rem))', '1fr 1fr 3fr']}
          sx={{ justifyContent: ['center', 'start'] }}
        >
          <Box>
            <Text variant="section-heading" mb={3}>
              Site
            </Text>

            <Box as="ul" variant="list" sx={{ lineHeight: 1.75 }}>
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>

              <li>
                <FooterLink href="/projects">Projects</FooterLink>
              </li>

              <li>
                <FooterLink href="/blog">Blog</FooterLink>
              </li>

              <li>
                <FooterLink href="/colophon">Colophon</FooterLink>
              </li>

              <li>
                <FooterLink href="/uses">Uses</FooterLink>
              </li>

              <li>
                <FooterLink href="/rss.xml" external>
                  RSS
                </FooterLink>
              </li>
            </Box>
          </Box>

          <Box>
            <Text variant="section-heading" mb={3}>
              Links
            </Text>

            <Box as="ul" variant="list" sx={{ lineHeight: 1.75 }}>
              <li>
                <FooterLink href="https://github.com/lowmess" external>
                  GitHub
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://twitter.com/lowmess" external>
                  Twitter
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://dribbble.com/lowmess" external>
                  Dribbble
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://linkedin.com/in/lowmess" external>
                  LinkedIn
                </FooterLink>
              </li>

              <li>
                <FooterLink href="https://resume.lowmess.com" external>
                  Résumé
                </FooterLink>
              </li>
            </Box>
          </Box>

          <Box sx={{ display: ['none', 'block'] }}>
            <Text variant="section-heading" mb={3}>
              Latest Blog Post
            </Text>

            <FooterLink
              href={post.link}
              sx={{
                fontSize: 5,
                fontWeight: 'bold',
                lineHeight: 'heading',
                textDecoration: 'none',
              }}
            >
              {post.meta.title}
            </FooterLink>

            <Text as="p" sx={{ maxWidth: 'measure', marginTop: 1 }}>
              {post.meta.description}
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
