import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal, withComponent } from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'
import { topography, floatingCogs } from 'hero-patterns'
import { space, color, borderRadius } from 'styled-system'
import { fontFamily } from '../utils/styled-system-extras'
import theme from '../utils/theme'
import { Box, Flex, Text } from '../components/Layout'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import normalize from 'normalize.css'
injectGlobal`
  html {
    box-sizing: border-box;
    background-color: ${theme.colors.orange};
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  svg {
    fill: currentColor;
  }
  a {
    text-decoration: none;
  }
`

const Backdrop = styled(Box)`
  background-image: ${props =>
    props.location.pathname === '/404' ? floatingCogs(props.theme.colors.white) : topography(props.theme.colors.white)};
  background-position: center top;
`
// the min-height stuff here is kind of gross,
// but I'm not sure of a way of accessing these values inside styled-system like this
// just gotta update the step on the scale here if it's updated in <Layout />
const Content = styled(Box)`
  min-height: calc(100vh - ${props => props.theme.space[2]} * 2);
  @media (min-width: ${props => props.theme.breakpoints[0]}em) {
    min-height: calc(100vh - ${props => props.theme.space[3]} * 2);
  }
`
// have to set min-height here too
// because otherwise the flex container isn't as tall as the content container
// preventing the auto footer stuff from happening.
const Constraint = styled(Flex)`
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - ${props => props.theme.space[2]} * 4);
  @media (min-width: ${props => props.theme.breakpoints[0]}em) {
    min-height: calc(100vh - ${props => props.theme.space[3]} * 4);
  }
`

const Main = Box.withComponent('main')

const Layout = ({ children, location, data }) => (
  <ThemeProvider theme={theme}>
    <Backdrop p={[2, 3]} bg="orange" location={location}>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#F2930D" />
        <meta name="theme-color" content="#F2930D" />
      </Helmet>
      <Content color="black" bg="white" py={3} px={[3, 4]} borderRadius={2} fontFamily="sansSerif">
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
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
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
