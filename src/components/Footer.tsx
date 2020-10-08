import * as React from 'react'
import { default as NextLink } from 'next/link'
import { Box, Grid, Text, Container, Link } from 'theme-ui'
import posts from '../utils/getAllPosts'
import { ThemeUIProps } from '../types/ThemeUIComponent'

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
                <NextLink href="/" passHref>
                  <Link variant="ui">Home</Link>
                </NextLink>
              </li>

              <li>
                <NextLink href="/projects" passHref>
                  <Link variant="ui">Projects</Link>
                </NextLink>
              </li>

              <li>
                <NextLink href="/blog" passHref>
                  <Link variant="ui">Blog</Link>
                </NextLink>
              </li>

              <li>
                <NextLink href="/colophon" passHref>
                  <Link variant="ui">Colophon</Link>
                </NextLink>
              </li>

              <li>
                <NextLink href="/uses" passHref>
                  <Link variant="ui">Uses</Link>
                </NextLink>
              </li>
            </Box>
          </Box>

          <Box>
            <Text variant="section-heading" mb={3}>
              Links
            </Text>

            <Box as="ul" variant="list" sx={{ lineHeight: 1.75 }}>
              <li>
                <Link variant="ui" href="https://github.com/lowmess">
                  GitHub
                </Link>
              </li>

              <li>
                <Link variant="ui" href="https://twitter.com/lowmess">
                  Twitter
                </Link>
              </li>

              <li>
                <Link variant="ui" href="https://dribbble.com/lowmess">
                  Dribbble
                </Link>
              </li>

              <li>
                <Link variant="ui" href="https://linkedin.com/in/lowmess">
                  LinkedIn
                </Link>
              </li>

              <li>
                <Link variant="ui" href="https://resume.lowmess.com">
                  Résumé
                </Link>
              </li>
            </Box>
          </Box>

          <Box sx={{ display: ['none', 'block'] }}>
            <Text variant="section-heading" mb={3}>
              Latest Blog Post
            </Text>

            <NextLink href={post.link} passHref>
              <Link
                variant="ui"
                sx={{
                  fontSize: 5,
                  fontWeight: 'bold',
                  lineHeight: 'heading',
                  textDecoration: 'none',
                }}
              >
                {post.module.meta.title}
              </Link>
            </NextLink>

            <Text as="p" sx={{ maxWidth: 'measure', marginTop: 1 }}>
              {post.module.meta.description}
            </Text>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
