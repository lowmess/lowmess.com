import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'

const Header = ({ children }) => (
  <header>
    {children}

    <Box variant="rule" as="hr" mt={4} mb={5} />
  </header>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
