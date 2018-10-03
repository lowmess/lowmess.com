import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Text } from '../components/Primitives'
import { Rule } from '../components/Typography'

const errorPage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>I goofed it.</title>
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
          Error 404
        </Text>

        <Text
          as="h2"
          fontSize={[3, 4]}
          fontWeight="5"
          lineHeight="title"
          mt={3}
          mb={4}
        >
          Requested Page Not Found
        </Text>

        <Rule mt={4} mb={5} />
      </header>

      <main>
        {/* have to ugily do this because somewhere whitespace gets removed */}
        <Text
          as="pre"
          fontSize={[2, 3]}
          fontFamily="monospace"
          lineHeight="title"
        >
          "
          <Link to="/">
            <Text color="darkGrey" hover={{ color: 'orange' }}>
              Click here to go home
            </Text>
          </Link>
          "<br />
          &nbsp;Is over-used and boring,
          <br />
          &nbsp;But at least it's clear.
          <br />
        </Text>
      </main>
    </article>
  </Layout>
)

export default errorPage
