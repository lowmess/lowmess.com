import * as React from 'react'
import Head from 'next/head'
import { Text, Container, Heading, Link } from 'theme-ui'
import Stack from '../components/Stack'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import metadata from '../constants/metadata.json'

const Description: React.FC = (props) => (
  <Text as="p" sx={{ maxWidth: 'measure' }} {...props} />
)

const Tooling: React.FC = (props) => (
  <Text as="p" sx={{ fontSize: 1 }} {...props} />
)

const Archive: React.FC = () => (
  <React.Fragment>
    <Head>
      <title key="title">Archive {metadata.titleSuffix}</title>
    </Head>

    <Header>
      <HeaderName>Archive</HeaderName>

      <HeaderTitle>Visions of Websites Past</HeaderTitle>
    </Header>

    <Container mt={5}>
      <Stack gap={5}>
        <Stack gap={3}>
          <Heading>
            <Link href="https://v1.lowmess.com">Version 1</Link>
          </Heading>

          <Description>
            My very first portfolio site. Mostly it was a showcase for the
            design work I did as a student, though I did also write the code
            myself (I try not to think about the quality of the&nbsp;code).
          </Description>

          <Tooling>
            Built with <Link href="https://prepros.io">Prepros</Link>,{' '}
            <Link href="https://pugjs.org">Pug (née Jade)</Link>,{' '}
            <Link href="https://sass-lang.com">Sass</Link>, and{' '}
            <Link href="https://jquery.com">jQuery</Link>.
          </Tooling>
        </Stack>

        <Stack gap={3}>
          <Heading>
            <Link href="https://v2.lowmess.com">Version 2</Link>
          </Heading>

          <Description>
            The first portfolio I created for myself after focusing on
            development. I hated the design on this one basically as soon as I
            launched it, and I think it only lasted around 3 months before I
            scrapped it for&nbsp;v3.
          </Description>

          <Tooling>
            Built with <Link href="https://rollupjs.org">Rollup</Link>,{' '}
            <Link href="https://metalsmith.io">Metalsmith</Link>,{' '}
            <Link href="https://pugjs.org">Pug</Link>,{' '}
            <Link href="https://postcss.org">PostCSS</Link>, and{' '}
            <Link href="http://tachyons.io">Tachyons</Link>.
          </Tooling>
        </Stack>

        <Stack gap={3}>
          <Heading>
            <Link href="https://v3.lowmess.com">Version 3</Link>
          </Heading>

          <Description>
            This design proved popular, and several developers forked the repo
            and used it as a basis for their own sites. However it proved
            limiting when I wanted to implement dark mode. Also I got bored of
            it (the Designer&rsquo;s&nbsp;Curse&trade;).
          </Description>

          <Tooling>
            Built with <Link href="https://gatsbyjs.com">Gatsby</Link>,{' '}
            <Link href="https://preactjs.com">Preact</Link>,{' '}
            <Link href="https://mdxjs.com">MDX</Link>, and{' '}
            <Link href="https://rebassjs.org">Rebass</Link>.
          </Tooling>
        </Stack>

        <Stack gap={3}>
          <Heading>
            <Link href="https://v4.lowmess.com">Version 4</Link>
          </Heading>

          <Description>
            The exact same site as this site (v4.1), but implemented
            in&nbsp;Gatsby.
          </Description>

          <Tooling>
            Built with <Link href="https://gatsbyjs.com">Gatsby</Link>,{' '}
            <Link href="https://preactjs.com">Preact</Link>,{' '}
            <Link href="https://mdxjs.com">MDX</Link>, and{' '}
            <Link href="https://theme-ui.com">Theme UI</Link>.
          </Tooling>
        </Stack>
      </Stack>
    </Container>
  </React.Fragment>
)

export default Archive
