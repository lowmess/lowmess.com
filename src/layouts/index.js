import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'
import { Box, Flex, Card } from 'rebass'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useSiteMetadata } from '../utils/hooks'
import ThemeProvider from './ThemeProvider'
import GlobalStyles from './GlobalStyles'

// making this a `styled` component because of the combo media queries
const Border = styled(Card)`
  display: flex;
  min-height: 100vh;
  border-color: transparent !important;
  background-image: url(/topography_900x900.png);
  background-repeat: repeat;
  background-position: top center;
  background-size: 900px;

  @media (min-resolution: 192dpi) {
    background-image: url(/topography_1800x1800.png);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    background-image: url(/topography_1200x1200.png);
    background-size: 1200px;
  }

  @media (min-width: ${({ theme }) =>
      theme.breakpoints[0]}) and (min-resolution: 192dpi) {
    background-image: url(/topography_2400x2400.png);
  }

  @media print {
    display: block;
    min-height: 0;
    border: 0;
    background: none;
  }
`

const Head = () => {
  const { title, description } = useSiteMetadata()
  const theme = useTheme()

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{title}</title>

      <meta name="description" content={description} />
      {/* theming */}
      <meta name="theme-color" content={theme.colors.grays[1]} />
      <meta name="apple-mobile-web-app-title" content="lowmess" />
      <meta name="application-name" content="lowmess" />
      <meta name="msapplication-TileColor" content="{theme.colors.orange}" />
      {/* icons */}
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
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color={theme.colors.orange}
      />
    </Helmet>
  )
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Head />

      <GlobalStyles />

      <Border
        sx={{
          border: [3, 4],
          backgroundColor: 'transparent',
        }}
      >
        <Card
          sx={{
            flex: 1,
            maxWidth: '100%',
            borderRadius: 2,
            paddingY: 3,
            paddingX: [3, 4],
            color: 'black',
            backgroundColor: 'white',
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              maxWidth: '64rem',
              height: '100%',
              marginX: 'auto',
            }}
          >
            <Navigation />

            <Box as="main" id="main-content" mb={[5, 6]}>
              {children}
            </Box>

            <Footer />
          </Flex>
        </Card>
      </Border>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout
