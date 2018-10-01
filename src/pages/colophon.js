import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Flex, Box, Text } from '../components/Primitives'
import { Title, Rule } from '../components/Typography'
import { dependencies } from '../../package-lock.json'

const Columns = Flex.withComponent('main')
const Column = Box.withComponent('section')

const SectionTitle = Text.withComponent('h2')

const Dep = Flex.withComponent('p')
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
    emotion: { version: emotion },
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
          <Title
            fontSize={[4, 5]}
            fontWeight="7"
            lineHeight="title"
            mt={0}
            mb={3}
          >
            Building Blocks
          </Title>

          <Rule mt={4} mb={5} />
        </header>

        <Columns flexDirection={['column', 'column', 'row']}>
          <Column mr={[0, 0, 6]} mb={[3, 3, 0]}>
            <SectionTitle fontSize={[3, 4]} mt={0} mb={0}>
              Functionality
            </SectionTitle>

            <Dep alignItems="center" mt={4} mb={0}>
              <a href="https://gatsbyjs.org">
                <DepLink>GatsbyJS</DepLink>
              </a>{' '}
              <DepVer ml={3}>{gatsby}</DepVer>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://github.com/nfl/react-helmet">
                <DepLink>React Helmet</DepLink>
              </a>{' '}
              <DepVer ml={3}>{helmet}</DepVer>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://date-fns.org/">
                <DepLink>date-fns</DepLink>
              </a>{' '}
              <DepVer ml={3}>{dateFns}</DepVer>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://csstools.github.io/sanitize.css/">
                <DepLink>sanitize.css</DepLink>
              </a>{' '}
              <DepVer ml={3}>{sanitize}</DepVer>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://emotion.sh/">
                <DepLink>emotion</DepLink>
              </a>{' '}
              <DepVer ml={3}>{emotion}</DepVer>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="http://jxnblk.com/styled-system/">
                <DepLink>styled-system</DepLink>
              </a>{' '}
              <DepVer ml={3}>{styledSystem}</DepVer>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://hero-patterns.lowmess.com">
                <DepLink>hero-patterns.js</DepLink>
              </a>{' '}
              <DepVer ml={3}>{heroPatterns}</DepVer>
            </Dep>
          </Column>

          <Column mt={[5, 5, 0]} mr={[0, 0, 6]}>
            <SectionTitle fontSize={[3, 4]} mt={0} mb={0}>
              Infrastructure
            </SectionTitle>

            <Dep alignItems="center" mt={4} mb={0}>
              <a href="https://netlify.com">
                <DepLink>Netlify</DepLink>
              </a>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://github.com">
                <DepLink>GitHub</DepLink>
              </a>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://get.gaug.es">
                <DepLink>Gauges</DepLink>
              </a>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://prettier.io/">
                <DepLink>Prettier</DepLink>
              </a>{' '}
              <DepVer ml={3}>{prettier}</DepVer>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://github.com/typicode/husky">
                <DepLink>husky</DepLink>
              </a>{' '}
              <DepVer ml={3}>{husky}</DepVer>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <a href="https://github.com/okonet/lint-staged">
                <DepLink>lint-staged</DepLink>
              </a>{' '}
              <DepVer ml={3}>{lintStaged}</DepVer>
            </Dep>
          </Column>

          <Column mt={[5, 5, 0]}>
            <SectionTitle fontSize={[3, 4]} mt={0} mb={0}>
              Sanity
            </SectionTitle>

            <Dep alignItems="center" mt={4} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Music
              </Text>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Podcasts
              </Text>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Coffee
              </Text>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Beer
              </Text>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Burritos
              </Text>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Air Conditioning
              </Text>
            </Dep>

            <Dep alignItems="center" mt={3} mb={0}>
              <Text fontSize={[2, 3]} fontWeight={6}>
                Skateboarding
              </Text>
            </Dep>
          </Column>
        </Columns>
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
