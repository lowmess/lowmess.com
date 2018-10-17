import React from 'react'
import { graphql } from 'gatsby'
import system from 'system-components'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Flex } from '../components/Primitives'
import { Title } from '../components/Typography'
import { themeHover } from '../utils/styles'
import { dependencies } from '../../package-lock.json'

const Section = system(
  {
    is: 'section',
  },
  'space'
)

const SectionTitle = system({
  is: 'h2',
  fontSize: [3, 4],
  my: 0,
})

const Dep = system({
  is: 'p',
  display: 'flex',
  alignItems: 'center',
  mt: 3,
  mb: 0,
})

const DepLink = system(
  {
    is: 'a',
    fontSize: [2, 3],
    fontWeight: 6,
  },
  themeHover
)

const DepVer = system({
  is: 'span',
  fontFamily: 'monospace',
  ml: 3,
})

const SanityCheck = system({
  is: 'p',
  mt: 3,
  mb: 0,
  fontSize: [2, 3],
  fontWeight: 6,
})

const ColophonPage = ({ location, data }) => {
  const {
    gatsby: { version: gatsby },
    'react-helmet': { version: helmet },
    'date-fns': { version: dateFns },
    'sanitize.css': { version: sanitize },
    'styled-components': { version: styledComponents },
    'system-components': { version: systemComponents },
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
        <Header>
          <Title>Building Blocks</Title>
        </Header>

        <Flex is="main" flexDirection={['column', 'column', 'row']}>
          <Section mr={[0, 0, 6]}>
            <SectionTitle>Functionality</SectionTitle>

            <Dep mt={4}>
              <DepLink href="https://gatsbyjs.org">GatsbyJS</DepLink>{' '}
              <DepVer>{gatsby}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://github.com/nfl/react-helmet">
                React Helmet
              </DepLink>{' '}
              <DepVer>{helmet}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://date-fns.org/">date-fns</DepLink>{' '}
              <DepVer>{dateFns}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://csstools.github.io/sanitize.css/">
                sanitize.css
              </DepLink>{' '}
              <DepVer>{sanitize}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://styled-components.com/">
                styled-components
              </DepLink>{' '}
              <DepVer>{styledComponents}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://github.com/jxnblk/styled-system/tree/master/system-components">
                system-components
              </DepLink>{' '}
              <DepVer>{systemComponents}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://hero-patterns.lowmess.com">
                hero-patterns.js
              </DepLink>{' '}
              <DepVer>{heroPatterns}</DepVer>
            </Dep>
          </Section>

          <Section mt={[5, 5, 0]} mr={[0, 0, 6]}>
            <SectionTitle>Infrastructure</SectionTitle>

            <Dep mt={4}>
              <DepLink href="https://netlify.com">Netlify</DepLink>
            </Dep>

            <Dep>
              <DepLink href="https://github.com">GitHub</DepLink>
            </Dep>

            <Dep>
              <DepLink href="https://get.gaug.es">Gauges</DepLink>
            </Dep>

            <Dep>
              <DepLink href="https://prettier.io/">Prettier</DepLink>{' '}
              <DepVer>{prettier}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://github.com/typicode/husky">husky</DepLink>{' '}
              <DepVer>{husky}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://github.com/okonet/lint-staged">
                lint-staged
              </DepLink>{' '}
              <DepVer>{lintStaged}</DepVer>
            </Dep>
          </Section>

          <Section mt={[5, 5, 0]}>
            <SectionTitle>Sanity</SectionTitle>

            <SanityCheck mt={4}>Music</SanityCheck>

            <SanityCheck>Podcasts</SanityCheck>

            <SanityCheck>Coffee</SanityCheck>

            <SanityCheck>Beer</SanityCheck>

            <SanityCheck>Burritos</SanityCheck>

            <SanityCheck>Air Conditioning</SanityCheck>

            <SanityCheck>Skateboarding</SanityCheck>
          </Section>
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
