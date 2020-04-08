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

const HeaderName = (props) => (
  <Heading as="h1" variant="section-heading" mb={1} {...props} />
)

const HeaderTitle = (props) => (
  <Text variant="header-title" aria-hidden {...props} />
)

export { Header, HeaderName, HeaderTitle }
