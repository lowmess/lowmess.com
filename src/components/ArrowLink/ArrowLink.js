import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from 'styled-components'
import { Text } from 'rebass'
import ArrowIcon from './ArrowIcon'
import { themeHover } from '../../utils/styles'

const arrowStyles = css`
  display: inline-flex;
  ${themeHover};
`

const ArrowText = ({ children, ...props }) => (
  <Text
    as="span"
    css={arrowStyles}
    alignItems="center"
    fontFamily="monospace"
    fontSize={[0, 1]}
    fontWeight="normal"
    {...props}
  >
    {children}
  </Text>
)

ArrowText.propTypes = {
  children: PropTypes.node.isRequired,
}

const ArrowLink = ({ dest, children, external, ...props }) => {
  return external ? (
    <a href={dest}>
      <ArrowText {...props}>
        {children} <ArrowIcon />
      </ArrowText>
    </a>
  ) : (
    <Link to={dest}>
      <ArrowText {...props}>
        {children} <ArrowIcon />
      </ArrowText>
    </Link>
  )
}

ArrowLink.propTypes = {
  dest: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
}

export default ArrowLink
