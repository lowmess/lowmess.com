import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Flex, Box, Text } from '../components/Primitives'
import { Rule } from '../components/Typography'
import { dependencies } from '../../package-lock.json'

const DepLink = ({ children, ...props }) => (
  <Text
    color="darkGrey"
    hover={{ color: 'orange' }}
    fontSize={[2, 3]}
    fontWeight={6}
    {...props}
  >
    {children}
  </Text>
)

const DepVer = ({ children, ...props }) => (
  <Text font="monospace" {...props}>
    v{children}
  </Text>
)

const ColophonPage = ({ location, data }) => {
  const {
    gatsby: { version: gatsby },
    'react-helmet': { version: helmet },
    'date-fns': { version: dateFns },
    'sanitize.css': { version: sanitize },
    'styled-components': { version: styledComponents },
    'styled-system': { version: styledSystem },
    'hero-patterns': { version: heroPatterns },
    prettier: { version: prettier },
    husky: { version: husky },
    'lint-staged': { version: lintStaged },
  } = dependencies
  return (
    <Layout location={location}>
      <Helmet>
        <title>Colophon • {data.site.siteMetadata.title}</title>
      </Helmet>

      <article>
        <header>
          <Text
            as="h1"
            fontSize={[4, 5]}
            fontWeight="7"
            lineHeight="title"
            mt={0}
            mb={3}
          >
            Building Blocks
          </Text>

          <Rule mt={4} mb={5} />
        </header>

        <Flex as="main" flexDirection={['column', 'column', 'row']}>
          <Box as="section" mr={[0, 0, 6]} mb={[3, 3, 0]}>
            <Text as="h2" fontSize={[3, 4]} mt={0} mb={0}>
              Functionality
            </Text>

            <Flex as="p" alignItems="center" mt={4} mb={0}>
              <a href="https://gatsbyjs.org">
                <DepLink>GatsbyJS</DepLink>
              </a>{' '}
              <DepVer ml={3}>{gatsby}</DepVer>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://github.com/nfl/react-helmet">
                <DepLink>React Helmet</DepLink>
              </a>{' '}
              <DepVer ml={3}>{helmet}</DepVer>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://date-fns.org/">
                <DepLink>date-fns</DepLink>
              </a>{' '}
              <DepVer ml={3}>{dateFns}</DepVer>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://csstools.github.io/sanitize.css/">
                <DepLink>sanitize.css</DepLink>
              </a>{' '}
              <DepVer ml={3}>{sanitize}</DepVer>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://styled-components.com/">
                <DepLink>styled-components</DepLink>
              </a>{' '}
              <DepVer ml={3}>{styledComponents}</DepVer>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="http://jxnblk.com/styled-system/">
                <DepLink>styled-system</DepLink>
              </a>{' '}
              <DepVer ml={3}>{styledSystem}</DepVer>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://hero-patterns.lowmess.com">
                <DepLink>hero-patterns.js</DepLink>
              </a>{' '}
              <DepVer ml={3}>{heroPatterns}</DepVer>
            </Flex>
          </Box>

          <Box as="section" mt={[5, 5, 0]} mr={[0, 0, 6]}>
            <Text as="h2" fontSize={[3, 4]} mt={0} mb={0}>
              Infrastructure
            </Text>

            <Flex as="p" alignItems="center" mt={4} mb={0}>
              <a href="https://netlify.com">
                <DepLink>Netlify</DepLink>
              </a>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://github.com">
                <DepLink>GitHub</DepLink>
              </a>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://get.gaug.es">
                <DepLink>Gauges</DepLink>
              </a>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://prettier.io/">
                <DepLink>Prettier</DepLink>
              </a>{' '}
              <DepVer ml={3}>{prettier}</DepVer>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://github.com/typicode/husky">
                <DepLink>husky</DepLink>
              </a>{' '}
              <DepVer ml={3}>{husky}</DepVer>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <a href="https://github.com/okonet/lint-staged">
                <DepLink>lint-staged</DepLink>
              </a>{' '}
              <DepVer ml={3}>{lintStaged}</DepVer>
            </Flex>
          </Box>

          <Box as="section" mt={[5, 5, 0]}>
            <Text as="h2" fontSize={[3, 4]} mt={0} mb={0}>
              Sanity
            </Text>

            <Flex as="p" alignItems="center" mt={4} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Music
              </Text>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Podcasts
              </Text>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Coffee
              </Text>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Beer
              </Text>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Burritos
              </Text>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Air Conditioning
              </Text>
            </Flex>

            <Flex as="p" alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Skateboarding
              </Text>
            </Flex>
          </Box>
        </Flex>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ColophonQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ColophonPage
