import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal, withComponent } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import { topography } from 'hero-patterns'
import theme from '../utils/theme'
import { Box, Flex, Text } from '../components/Layout'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import normalize from 'normalize.css'
injectGlobal`
  html {
    box-sizing: border-box;
    background-color: ${theme.colors.orange};

    @media print {
      background-color: transparent;
    }
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ::selection {
    background-color: ${theme.colors.orange};
  }
  svg {
    fill: currentColor;
  }
  a {
    text-decoration: none;
    text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
  }

  @media print {
    nav, footer {
      display: none !important;
    }
  }
`

const Backdrop = styled(Box)`
  background-image: ${({ theme }) => topography(theme.colors.white)};
  background-position: center top;
  background-size: 900px;
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    background-size: 1200px;
  }
  @media print {
    background: transparent;
    padding: 0;
  }
`
// the min-height stuff here is kind of gross,
// but I'm not sure of a way of accessing these values inside styled-system like this
// just gotta update the step on the scale here if it's updated in <Layout />
const Content = styled(Box)`
  min-height: calc(100vh - ${({ theme }) => theme.space[4]});
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    min-height: calc(100vh - ${({ theme }) => theme.space[5]});
  }
  @media print {
    min-height: 0;
  }
`
// have to set min-height here too
// because otherwise the flex container isn't as tall as the content container
// preventing the auto footer stuff from happening.
const Constraint = styled(Flex)`
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - ${({ theme }) => theme.space[5]});
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    min-height: calc(100vh - ${({ theme }) => theme.space[6]});
  }
`

const Main = Box.withComponent('main')

const Layout = ({ children, location, data }) => (
  <ThemeProvider theme={theme}>
    <Backdrop p={[2, 3]} bg="orange">
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="theme-color" content={theme.colors.nearWhite} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color={theme.colors.orange}
        />
      </Helmet>
      <Content
        color="darkGrey"
        bg="white"
        py={3}
        px={[3, 4]}
        borderRadius={2}
        fontFamily="sans-serif"
      >
        <Constraint flexDirection="column">
          <Navigation location={location} />
          <Main mb={[5, 6]}>{children()}</Main>
          <Footer post={data.allMarkdownRemark.edges[0].node} />
        </Constraint>
      </Content>
    </Backdrop>
  </ThemeProvider>
)

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Layout
