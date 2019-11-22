import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'rebass'

const HeaderTitle = ({ children, ...props }) => (
  <Heading as="h1" mb={3} fontSize={[4, 5]} letterSpacing="-0.02em" {...props}>
    {children}
  </Heading>
)

HeaderTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

const HeaderSubtitle = ({ children, ...props }) => (
  <Heading mb={4} fontWeight="medium" letterSpacing="-0.015em" {...props}>
    {children}
  </Heading>
)

HeaderSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
}

const Header = ({ children }) => (
  <header>
    {children}

    <Box
      as="hr"
      sx={{
        maxWidth: theme => theme.space[6],
        height: theme => theme.space[2],
        marginTop: 4,
        marginX: 0,
        marginBottom: 5,
        border: 0,
        backgroundColor: 'orange',
      }}
    />
  </header>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

Header.Title = HeaderTitle
Header.Subtitle = HeaderSubtitle

export default Header
