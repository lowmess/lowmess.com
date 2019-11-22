import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Helmet from 'react-helmet'
import { Text, Heading, Link } from 'rebass'
import Header from '../components/Header'

const errorPage = () => (
  <>
    <Helmet>
      <title>I goofed it.</title>
    </Helmet>

    <article>
      <Header>
        <Heading variant="title" as="h1">
          Error 404
        </Heading>

        <Heading variant="subtitle">Requested Page Not&nbsp;Found</Heading>
      </Header>

      <main>
        {/* have to ugily do this because somewhere whitespace gets removed */}
        <Text
          as="pre"
          fontSize={[2, 3]}
          fontFamily="monospace"
          lineHeight="title"
        >
          &ldquo;
          <Link variant="ui-link" as={GatsbyLink} to="/">
            Click here to go home
          </Link>
          &rdquo;
          <br />
          &nbsp;is over-used and boring,
          <br />
          &nbsp;but at least it&rsquo;s clear.
          <br />
        </Text>
      </main>
    </article>
  </>
)

export default errorPage
