import React from 'react'
import { Rule } from './Typography.js'

const Header = ({ children }) => (
  <header>
    {children}

    <Rule mt={4} mb={5} />
  </header>
)

export default Header
