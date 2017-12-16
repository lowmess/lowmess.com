import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { withComponent } from 'react-emotion'
import { Text } from '../components/Layout'
import { Title, Subtitle, Rule } from '../components/Typography'

const Haiku = Text.withComponent('pre')

const errorPage = () => (
  <article>
    <Helmet>
      <title>I goofed it.</title>
    </Helmet>
    <header>
      <Title fontSize={[4, 5]} fontWeight="7" lineHeight="title" mt={0} mb={3}>
        Error 404
      </Title>
      <Subtitle fontSize={[3, 4]} fontWeight="5" lineHeight="title" mt={3} mb={4}>
        Requested Page Not Found
      </Subtitle>
      <Rule mt={4} mb={5} />
    </header>
    <main>
      {/* have to ugily do this because somewhere whitespace gets removed */}
      <Haiku fontSize={[2, 3]} fontFamily="monospace">
        "
        <Link to="/">
          <Text color="black" hover={{ color: 'orange' }}>
            Click here to go home
          </Text>
        </Link>
        "
        <br />
        &nbsp;Is over-used and boring,<br />
        &nbsp;But at least it's clear.<br />
      </Haiku>
    </main>
  </article>
)

export default errorPage
