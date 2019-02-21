import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled, { createGlobalStyle, withTheme } from 'styled-components'
import { Box, Flex } from '../components/Primitives'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

import 'sanitize.css'

const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.colors.orange};
    scroll-behavior: smooth;

    @media (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    @media print {
      background: none;
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.orange} !important;
    color: ${({ theme }) => theme.colors.darkGrey} !important;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-decoration-skip: ink;
    text-decoration-skip-ink: auto;
  }

  @media print {
    nav, footer {
      display: none !important;
    }

    #main-content {
      margin-bottom: 0 !important;
    }
  }
`

const Border = styled(Flex)`
  min-height: 100vh;

  @media print {
    display: block;
    min-height: 0;
    background: transparent;
  }
`

const Content = styled(Box)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`

const Constraint = styled(Flex)`
  flex-flow: column nowrap;
  max-width: 64rem;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
`

const Layout = ({ children, location, theme }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
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

      <GlobalStyles />

      <Border border={3} borderColor="transparent">
        <Content
          borderRadius={2}
          py={3}
          px={[3, 4]}
          fontFamily="sans-serif"
          color="darkGrey"
        >
          <Constraint>
            <Navigation location={location} />

            <Box is="main" id="main-content" mb={[5, 6]}>
              {children}
            </Box>

            <Footer />
          </Constraint>
        </Content>
      </Border>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withTheme(Layout)
