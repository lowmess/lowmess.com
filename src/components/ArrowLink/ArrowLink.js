import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Text } from 'rebass'
import ArrowIcon from './ArrowIcon'
import { themeHover } from '../../utils/styles'

const ArrowText = styled(Text).attrs({
  as: 'span',
  fontSize: [0, 1],
  fontFamily: 'monospace',
  fontWeight: 'normal',
})`
  display: inline-flex;
  align-items: center;
  ${themeHover};
`

const ArrowLink = ({ href, to, children, ...props }) => {
  if (href) {
    return (
      <a href={href}>
        <ArrowText {...props}>
          {children} <ArrowIcon />
        </ArrowText>
      </a>
    )
  }

  return (
    <Link to={to}>
      <ArrowText {...props}>
        {children} <ArrowIcon />
      </ArrowText>
    </Link>
  )
}

ArrowLink.propTypes = {
  href: PropTypes.string,
  to: (props, propName, componentName) => {
    if (!props.href && !props[propName]) {
      return new Error(`${componentName} expects an "href" or "to" prop`)
    }
  },
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
}

export default ArrowLink
