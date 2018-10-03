import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { topography } from 'hero-patterns'
import theme from '../utils/theme'
import { Box, Flex } from './Primitives'
import Navigation from './Navigation'
import Footer from './Footer'

import 'sanitize.css'

const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.colors.orange};
    background-image: ${({ theme }) => topography(theme.colors.white)};
    background-position: center top;
    background-size: 900px;
    background-repeat: repeat;

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      background-size: 1200px;
    }

    @media print {
      background: none;
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.orange} !important;
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

const Border = styled(Box)`
  display: grid;
  grid-template-areas:
    'border-top border-top border-top'
    'border-left content border-right'
    'border-bottom border-bottom border-bottom';
  grid-template-rows:
    ${({ theme }) => theme.space[2]}
    1fr
    ${({ theme }) => theme.space[2]};
  grid-template-columns:
    ${({ theme }) => theme.space[2]}
    minmax(0, 1fr)
    ${({ theme }) => theme.space[2]};
  min-height: 100vh;

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    grid-template-rows:
      ${({ theme }) => theme.space[3]}
      1fr
      ${({ theme }) => theme.space[3]};
    grid-template-columns:
      ${({ theme }) => theme.space[3]}
      minmax(0, 1fr)
      ${({ theme }) => theme.space[3]};
    background-size: 1200px;
  }

  @media print {
    display: block;
    min-height: 0;
    background: transparent;
  }
`

const Content = styled(Box)`
  grid-area: content;
  background-color: ${({ theme }) => theme.colors.white};
`

const Constraint = styled(Flex)`
  flex-flow: column nowrap;
  max-width: 64rem;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>

            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />

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

          <Border>
            <Content
              color="darkGrey"
              py={3}
              px={[3, 4]}
              borderRadius={2}
              fontFamily="sans-serif"
            >
              <Constraint>
                <Navigation location={location} />

                <Box is="main" mb={[5, 6]}>
                  {children}
                </Box>

                <Footer />
              </Constraint>
            </Content>
          </Border>
        </>
      </ThemeProvider>
    )}
  />
)

export default Layout
