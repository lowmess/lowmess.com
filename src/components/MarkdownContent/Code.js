import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'rebass'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'lowmess-prism'
import { blockShape } from './markdownStyles'

const Code = ({ className: languageClass, children, ...props }) => {
  const languagePrefix = 'language-'
  const language = languageClass
    .split(' ')
    .find(c => c.indexOf(languagePrefix !== -1))
    .slice(languagePrefix.length)

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          className={className}
          style={style}
          sx={{
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
          }}
          {...props}
        >
          {tokens.map((line, i) => (
            // eslint-disable-next-line
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  )
}

Code.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

const InlineCode = ({ children }) => (
  <Text
    as="code"
    sx={{
      border: 1,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderRadius: 1,
      paddingX: 1,
      backgroundColor: 'grays.1',
      color: 'black',
      fontSize: [0, 1],
      fontFamily: 'monospace',
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </Text>
)

InlineCode.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Code, InlineCode }
