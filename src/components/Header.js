import React from 'react'
import PropTypes from 'prop-types'
import { Rule } from './Typography.js'

const Header = ({ children }) => (
  <header>
    {children}

    <Rule mt={4} mb={5} />
  </header>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
