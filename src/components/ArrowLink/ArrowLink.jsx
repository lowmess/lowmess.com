import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Text, Link } from 'rebass'
import ArrowIcon from './ArrowIcon'

const ArrowText = ({ children, ...props }) => (
  <Text
    as="span"
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: [0, 1],
      fontFamily: 'monospace',
    }}
    {...props}
  >
    {children}
  </Text>
)

ArrowText.propTypes = {
  children: PropTypes.node.isRequired,
}

const ArrowLink = ({ href, to, children, ...props }) => {
  if (href) {
    return (
      <Link variant="ui-link" href={href}>
        <ArrowText {...props}>
          {children} <ArrowIcon />
        </ArrowText>
      </Link>
    )
  }

  return (
    <Link variant="ui-link" as={GatsbyLink} to={to}>
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
