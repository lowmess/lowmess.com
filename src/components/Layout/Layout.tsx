import * as React from 'react'
import Head from 'next/head'
import { useThemeUI, Box, Flex } from 'theme-ui'
import Nav from '../Nav'
import Footer from '../Footer'
import GlobalStyles from './GlobalStyles'

const Layout: React.FC = ({ children }) => {
  const { theme } = useThemeUI()

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        <title key="title">lowmess</title>

        <meta
          name="description"
          content="My name is Alec Lomas, and I make websites"
        />

        {/* theming */}
        <meta name="theme-color" content={theme.colors.muted} />
        <meta name="apple-mobile-web-app-title" content="lowmess" />
        <meta name="application-name" content="lowmess" />
        <meta name="msapplication-TileColor" content={theme.colors.primary} />

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
          color={theme.colors.primary}
        />
      </Head>

      <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
        <GlobalStyles />

        <Nav mb={5} />

        <Box id="main-content" sx={{ flex: 1, paddingY: [null, 3, 4] }}>
          {children}
        </Box>

        <Footer mt={5} />
      </Flex>
    </React.Fragment>
  )
}

export default Layout
