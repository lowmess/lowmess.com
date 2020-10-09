import * as React from 'react'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { Box, Grid, Text, Container, Heading, Link } from 'theme-ui'
import Stack from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import { dependencies } from '../../package-lock.json'
import titleSuffix from '../constants/titleSuffix'

interface DependencyProps {
  version?: string
  href?: string
}

const Dependency: React.FC<DependencyProps> = ({ version, href, children }) => (
  <Text sx={{ display: 'inline-flex', alignItems: 'baseline' }}>
    <Link variant="ui" href={href} sx={{ fontSize: [2, 4] }}>
      {children}
    </Link>

    {version && (
      <Text as="span" sx={{ marginLeft: 2, fontFamily: 'mono', fontSize: 0 }}>
        v{version}
      </Text>
    )}
  </Text>
)

interface ColophonProps {
  versions: {
    [dependency: string]: string
  }
}

const ColophonPage: React.FC<ColophonProps> = ({ versions }) => {
  const {
    preact,
    next,
    mdx,
    themeUI,
    prismjs,
    typescript,
    eslint,
    prettier,
  } = versions

  return (
    <React.Fragment>
      <Head>
        <title key="title">Colophon {titleSuffix}</title>
      </Head>

      <Header>
        <HeaderName>Colophon</HeaderName>

        <HeaderTitle>Building Blocks</HeaderTitle>
      </Header>

      <Container mt={5}>
        <Grid columns={[1, 3]} gap={4}>
          <Box>
            <Heading color="muted-text">Functionality</Heading>

            <Stack gap={2} mt={3}>
              <Dependency version={preact} href="https://preactjs.com">
                Preact
              </Dependency>

              <Dependency version={next} href="https://nextjs.org">
                Next.js
              </Dependency>

              <Dependency version={mdx} href="https://mdxjs.com">
                MDX
              </Dependency>
            </Stack>
          </Box>

          <Box>
            <Heading color="muted-text" mt={[4, 0]}>
              Design
            </Heading>

            <Stack gap={2} mt={3}>
              <Dependency version={themeUI} href="https://theme-ui.com">
                Theme UI
              </Dependency>

              <Dependency version={prismjs} href="https://prismjs.com/">
                Prism
              </Dependency>

              <Dependency version="3.21" href="https://rsms.me/inter">
                Inter
              </Dependency>

              <Dependency version="1.000" href="https://dank.sh">
                Dank Mono
              </Dependency>
            </Stack>
          </Box>

          <Box>
            <Heading color="muted-text" mt={[4, 0]}>
              Infrastructure
            </Heading>

            <Stack gap={2} mt={3}>
              <Dependency href="https://github.com">GitHub</Dependency>

              <Dependency href="https://netlify.com">Netlify</Dependency>

              <Dependency
                version={typescript}
                href="https://typescriptlang.org/"
              >
                TypeScript
              </Dependency>

              <Dependency version={eslint} href="https://eslint.org">
                ESLint
              </Dependency>

              <Dependency version={prettier} href="https://prettier.io">
                Prettier
              </Dependency>
            </Stack>
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

// `getStaticProps` must be async, but I don't need to wait on jack
// eslint-disable-next-line require-await
export const getStaticProps: GetStaticProps = async () => {
  const {
    preact: { version: preact },
    next: { version: next },
    '@mdx-js/mdx': { version: mdx },
    'theme-ui': { version: themeUI },
    prismjs: { version: prismjs },
    typescript: { version: typescript },
    eslint: { version: eslint },
    prettier: { version: prettier },
  } = dependencies

  const versions = {
    preact,
    next,
    mdx,
    themeUI,
    prismjs,
    typescript,
    eslint,
    prettier,
  }

  return {
    props: {
      versions,
    },
  }
}

export default ColophonPage
