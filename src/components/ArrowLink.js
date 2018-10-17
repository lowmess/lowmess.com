import React from 'react'
import { Link } from 'gatsby'
import system from 'system-components'
import Icon from './Icon'
import { themeHover } from '../utils/styles'

const ArrowText = system(
  {
    is: 'span',
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'monospace',
    fontSize: [0, 1],
    fontWeight: 4,
  },
  themeHover
)

const ArrowLink = ({ dest, children, external, ...props }) => {
  return external ? (
    <a href={dest}>
      <ArrowText {...props}>
        {children} <Icon glyph="arrow" />
      </ArrowText>
    </a>
  ) : (
    <Link to={dest}>
      <ArrowText {...props}>
        {children} <Icon glyph="arrow" />
      </ArrowText>
    </Link>
  )
}

export default ArrowLink
