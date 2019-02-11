import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Text } from '../components/Primitives'
import { Title, Subtitle } from '../components/Typography'
import { themeHover } from '../utils/styles'

const HaikuLink = styled(Link)`
  ${themeHover};
`

const errorPage = ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>I goofed it.</title>
    </Helmet>

    <article>
      <Header>
        <Title>Error 404</Title>

        <Subtitle>Requested Page Not Found</Subtitle>
      </Header>

      <main>
        {/* have to ugily do this because somewhere whitespace gets removed */}
        <Text
          is="pre"
          fontSize={[2, 3]}
          fontFamily="monospace"
          lineHeight="title"
        >
          "<HaikuLink to="/">Click here to go home</HaikuLink>"<br />
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
