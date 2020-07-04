import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Text, Container, Link } from 'theme-ui'
import Layout from '../components/Layout'
import { Header, HeaderName, HeaderTitle } from '../components/Header'

const ErrorPage: React.FC = () => (
  <Layout>
    <Helmet>
      <title>I goofed it</title>
    </Helmet>

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
        <GatsbyLink to="/">
          <Link as="span" variant="ui">
            Click here to go home
          </Link>
        </GatsbyLink>
        &rdquo;
        <br />
        is over-used and boring,
        <br />
        but at least it&rsquo;s clear.
      </Text>
    </Container>
  </Layout>
)

export default ErrorPage
