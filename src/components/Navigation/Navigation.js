import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from 'styled-components'
import { Flex, Text } from 'rebass'
import SkipNavLink from './SkipNavLink'
import Logo from './Logo'
import { List, ListItem } from '../Typography'
import { themeHover } from '../../utils/styles'

const LinkText = ({ children, ...props }) => {
  const styles = css`
    .active & {
      border-bottom: ${({ theme }) => theme.borders[2]};
      border-color: ${({ theme }) => theme.colors.orange};
    }

    ${themeHover};
  `
  return (
    <Text
      as="span"
      px={1}
      pb={1}
      fontSize={[0, 1]}
      fontFamily="monospace"
      css={styles}
      {...props}
    >
      {children}
    </Text>
  )
}

LinkText.propTypes = {
  children: PropTypes.string.isRequired,
}

const isActive = ({ location, href, isPartiallyCurrent }) => {
  if (location.pathname === '/' && href === '/') {
    return { className: 'active' }
  } else if (isPartiallyCurrent && href !== '/') {
    return { className: 'active' }
  }

  return null
}

const NavLink = ({ children, to, ...props }) => (
  <Link to={to} getProps={isActive}>
    <LinkText {...props}>{children}</LinkText>
  </Link>
)

NavLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

const Navigation = ({ location }) => (
  <Flex
    as="nav"
    alignItems="center"
    justifyContent="space-between"
    mt={[0, 2, 3]}
    mb={[5, 6]}
    css="position: relative"
  >
    <SkipNavLink />

    <Flex alignItems="center">
      <Logo />
    </Flex>

    <List fontFamily="monospace">
      <ListItem css="display: inline-block">
        <NavLink to="/" mr={2}>
          Home
        </NavLink>
      </ListItem>

      <ListItem css="display: inline-block">
        <NavLink to="/projects/" mr={2}>
          Projects
        </NavLink>
      </ListItem>

      <ListItem css="display: inline-block">
        <NavLink to="/blog/" mr={2}>
          Blog
        </NavLink>
      </ListItem>

      <ListItem css="display: inline-block">
        <NavLink to="/about/">About</NavLink>
      </ListItem>
    </List>
  </Flex>
)

Navigation.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Navigation
