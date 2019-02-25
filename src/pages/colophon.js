import React from 'react'
import Helmet from 'react-helmet'
import system from 'system-components'
import Header from '../components/Header'
import { Flex } from '../components/Primitives'
import { Title } from '../components/Typography'
import { useSiteMetadata } from '../utils/hooks'
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
  alignItems: 'baseline',
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

const ColophonPage = () => {
  const { title } = useSiteMetadata()

  const {
    react: { version: react },
    gatsby: { version: gatsby },
    'react-helmet': { version: helmet },
    'sanitize.css': { version: sanitize },
    'styled-components': { version: styledComponents },
    'system-components': { version: systemComponents },
    eslint: { version: eslint },
    prettier: { version: prettier },
  } = dependencies

  return (
    <>
      <Helmet>
        <title>Colophon • {title}</title>
      </Helmet>

      <article>
        <Header>
          <Title>Building Blocks</Title>
        </Header>

        <Flex is="main" flexDirection={['column', 'column', 'row']}>
          <Section mr={[0, 0, 6]}>
            <SectionTitle>Functionality</SectionTitle>

            <Dep mt={4}>
              <DepLink href="https://reactjs.org">React</DepLink>{' '}
              <DepVer>{react}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://gatsbyjs.org">Gatsby</DepLink>{' '}
              <DepVer>{gatsby}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://github.com/nfl/react-helmet">
                React Helmet
              </DepLink>{' '}
              <DepVer>{helmet}</DepVer>
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
              <DepLink href="https://github.com/jxnblk/styled-system/tree/d48e6dab7d70bd579546582209d4485b6207ad42/packages/system-components">
                system-components
              </DepLink>{' '}
              <DepVer>{systemComponents}</DepVer>
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
              <DepLink href="https://eslint.org/">ESLint</DepLink>{' '}
              <DepVer>{eslint}</DepVer>
            </Dep>

            <Dep>
              <DepLink href="https://prettier.io/">Prettier</DepLink>{' '}
              <DepVer>{prettier}</DepVer>
            </Dep>
          </Section>

          <Section mt={[5, 5, 0]}>
            <SectionTitle>Sanity</SectionTitle>

            <SanityCheck mt={4}>Music</SanityCheck>

            <SanityCheck>Coffee</SanityCheck>

            <SanityCheck>Beer</SanityCheck>

            <SanityCheck>Burritos</SanityCheck>

            <SanityCheck>Skateboarding</SanityCheck>

            <SanityCheck>Basketball</SanityCheck>
          </Section>
        </Flex>
      </article>
    </>
  )
}

export default ColophonPage
