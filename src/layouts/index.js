import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { css, withTheme } from 'styled-components'
import { Box, Flex, Card } from 'rebass'
import GlobalStyles from '../components/GlobalStyles'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useSiteMetadata } from '../utils/hooks'

import 'sanitize.css'

const Layout = ({ children, theme }) => {
  const { title, description } = useSiteMetadata()

  // some of these could be moved into the component's props, but in order to
  // support retina media queries they need to be outside of rebass. it just
  // feels weird to separate related styles.
  const borderStyles = css`
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

    @media (min-width: ${theme.breakpoints[0]}) {
      background-image: url(/topography_1200x1200.png);
      background-size: 1200px;
    }

    @media (min-width: ${theme.breakpoints[0]}) and (min-resolution: 192dpi) {
      background-image: url(/topography_2400x2400.png);
    }

    @media print {
      display: block;
      min-height: 0;
      border: 0;
      background: none;
    }
  `

  return (
    <>
      <GlobalStyles />

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

      <Card border={[3, 4]} bg="transparent" css={borderStyles}>
        <Card
          flex="1"
          borderRadius={2}
          py={3}
          px={[3, 4]}
          bg="white"
          css="max-width: 100%"
        >
          <Flex
            flexDirection="column"
            mx="auto"
            css="max-width: 64rem; height: 100%"
          >
            <Navigation />

            <Box as="main" id="main-content" mb={[5, 6]}>
              {children}
            </Box>

            <Footer />
          </Flex>
        </Card>
      </Card>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export { GlobalStyles }

export default withTheme(Layout)
