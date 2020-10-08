import * as React from 'react'
import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Text, Container, Link } from 'theme-ui'
import { Header, HeaderName, HeaderTitle } from '../components/Header'
import titleSuffix from '../constants/titleSuffix'

const ErrorPage: React.FC = () => (
  <React.Fragment>
    <Head>
      <title key="title">I goofed it {titleSuffix}</title>
    </Head>

    <Header>
      <HeaderName>Error 404</HeaderName>
      <HeaderTitle>Page Not Found</HeaderTitle>
    </Header>

    <Container mt={[4, 5]}>
      <Text
        as="pre"
        sx={{
          fontSize: [4, 5],
          fontFamily: 'sans',
          lineHeight: 'heading',
        }}
      >
        &ldquo;
        <NextLink href="/">
          <Link as="span" variant="ui">
            Click here to go home
          </Link>
        </NextLink>
        &rdquo;
        <br />
        is over-used and boring,
        <br />
        but at least it&rsquo;s clear.
      </Text>
    </Container>
  </React.Fragment>
)

export default ErrorPage
