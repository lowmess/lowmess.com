import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text, Container, Heading } from 'theme-ui'

const Header = ({ children, ...props }) => (
  <Box as="header" {...props}>
    <Container>{children}</Container>
  </Box>
)

Header.propTypes = {
  children: PropTypes.node,
}

const HeaderName = (props) => <Text variant="section-heading" {...props} />

const HeaderTitle = (props) => (
  <Heading as="h1" variant="header-title" {...props} />
)

export { Header, HeaderName, HeaderTitle }
