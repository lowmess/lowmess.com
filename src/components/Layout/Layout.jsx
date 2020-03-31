import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'theme-ui'
import Nav from '../Nav'
import Footer from '../Footer'
import GlobalStyles from './GlobalStyles'

const Layout = ({ children }) => (
  <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
    <GlobalStyles />

    <Nav mb={5} />

    <Box id="main-content" sx={{ flex: 1 }}>
      {children}
    </Box>

    <Footer mt={5} />
  </Flex>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
