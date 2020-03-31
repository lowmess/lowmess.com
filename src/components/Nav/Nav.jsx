import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { useLocation } from '@reach/router'
import { Box, Flex, Container, NavLink } from 'theme-ui'
import SkipNavLink from './SkipNavLink'
import Logo from './Logo'

const Nav = ({ sx, ...props }) => {
  const location = useLocation()

  return (
    <Box
      as="nav"
      sx={{
        borderTop: [null, null, 4],
        borderColor: [null, null, 'primary'],
        paddingTop: [null, null, 5],
        ...sx,
      }}
      {...props}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <SkipNavLink />

        <Logo />

        <Flex as="ul">
          <li>
            <NavLink
              as={GatsbyLink}
              to="/"
              data-active={location.pathname === '/' ? true : null}
              mr={2}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              as={GatsbyLink}
              to="/projects"
              data-active={location.pathname === '/projects' ? true : null}
              mr={2}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              as={GatsbyLink}
              to="/blog"
              data-active={location.pathname.includes('/blog') ? true : null}
            >
              Blog
            </NavLink>
          </li>
        </Flex>
      </Container>
    </Box>
  )
}

Nav.propTypes = {
  sx: PropTypes.object,
}

export default Nav
