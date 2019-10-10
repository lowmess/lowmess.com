import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'
import { themeHover, themeUnderline } from '../../utils/styles'

// this component basically exists as a giant stylesheet that inherits from the
// theme. it's for markdown content (hence the name). it's kind of a b
const blockShape = {
  borderLeft: 3,
  borderColor: 'orange',
  borderRadius: 1,
  padding: 3,
}

const MarkdownContent = ({ children, ...props }) => (
  <Text
    sx={{
      // Vertical rhythm
      '& > *': {
        // reset all margins
        marginY: 0,

        // margin top to all child elements
        '& + *': {
          marginTop: 3,
        },

        // bigger margin top on headers
        '& + h1, & + h2': {
          marginTop: 5,
        },
        '& + h3, & + h4': {
          marginTop: 4,
        },
      },

      // Measure
      'p, ul, ol, dl, address': {
        maxWidth: '33em',
      },

      // Headings
      'h1, h2, h3, h4, h5, h6': {
        lineHeight: 'title',
      },

      h1: {
        fontSize: [3, 4],
        fontWeight: 'semi-bold',
      },

      h2: {
        fontSize: [2, 3],
        fontWeight: 'semi-bold',
      },

      h3: {
        fontSize: [1, 2],
        fontWeight: 'semi-bold',
      },

      'h4, h5, h6': {
        fontSize: [1, 2],
        fontWeight: 'medium',
      },

      'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
        backgroundColor: 'transparent',
        color: 'inherit',
      },

      // Typographic elements
      hr: {
        maxWidth: '4rem',
        height: '0.25rem',
        marginY: 4,
        marginX: 0,
        border: 0,
        backgroundColor: 'orange',
      },

      'ul, ol, dl': {
        paddingLeft: 4,
      },

      'ul ul, ol ol, ul ol, ol ul': {
        marginY: 0,
      },

      'b, strong, em, small, code': {
        lineHeight: 'solid',
      },

      'sup, sub': {
        verticalAlign: 'baseline',
        position: 'relative',
        top: '-0.4em',
      },

      sub: {
        top: '0.4em',
      },

      'blockquote, details': {
        ...blockShape,
        marginY: 4,
        marginX: 0,
        backgroundColor: 'grays.1',

        p: {
          maxWidth: '30em',
        },

        '> :first-child': {
          marginTop: 0,
        },
        '> :last-child': {
          marginBottom: 0,
        },
      },

      // Links
      a: {
        ...themeUnderline,
        ...themeHover,

        '&:hover code': {
          color: 'orange',
        },

        '@media print': {
          '&:after': {
            content: `' (' attr(href) ')'`,
            fontSize: '0.875em',
          },
          "&[href^='/']:after": {
            content: `' (https://lowmess.com' attr(href) ')'`,
          },
          "&[href^='#']": {
            textDecoration: 'none',

            '&:after': {
              content: `''`,
            },
          },
        },
      },

      // Code blocks
      code: {
        fontFamily: 'monospace',
      },

      'p code, li code': {
        border: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 1,
        paddingX: 1,
        backgroundColor: 'grays.1',
        color: 'black',
        fontSize: [0, 1],
        whiteSpace: 'nowrap',
      },

      pre: {
        ...blockShape,
        width: '100%',
        overflowX: 'scroll',
        marginY: 4,
        backgroundColor: 'grays.11',
        color: 'grays.1',
        fontSize: [0, 1],
        fontFamily: 'monospace',
        whiteSpace: 'pre',

        '@media print': {
          backgroundColor: 'transparent',
          color: 'black',
        },
      },

      // Embeds
      img: {
        display: 'block',
        width: '100%',
        maxWidth: '48rem',
        marginY: 4,
        borderRadius: 1,
      },

      iframe: {
        marginY: 4,
        border: 1,
        borderColor: 'grays.2',
      },
    }}
    {...props}
  >
    {children}
  </Text>
)

MarkdownContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MarkdownContent
