import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text, Grid, Container } from 'theme-ui'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'lowmess-prism'

const LineNumber = ({ children }) => (
  <Text
    as="span"
    sx={{
      display: ['none', 'inline-block'],
      textAlign: 'right',
      color: '#938776', // Comment color taken from `lowmess-prism`
      userSelect: 'none',
    }}
    aria-hidden
  >
    {children}
  </Text>
)

LineNumber.propTypes = {
  children: PropTypes.node.isRequired,
}

const Code = ({ className: languageClass, children, ...props }) => {
  const languagePrefix = 'language-'
  const language = languageClass
    .split(' ')
    .find((c) => c.indexOf(languagePrefix !== -1))
    .slice(languagePrefix.length)

  return (
    <Box
      sx={{
        backgroundColor: 'black',

        '.prism-code': {
          backgroundColor: 'transparent !important',
        },
      }}
    >
      <Container
        sx={{
          fontFamily: 'mono',
          maxWidth: (t) => `calc(${t.sizes['mdx-measure']} + ${t.space[5]})`,
        }}
      >
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
                width: '100%',
                overflowX: 'scroll',
                paddingY: 3,
                backgroundColor: 'transparent',
                fontFamily: 'mono',
                fontSize: 1,
                color: 'white',
                whiteSpace: 'pre',

                '@media print': {
                  backgroundColor: 'transparent',
                  color: 'black',
                },

                '.token-line': {
                  overflow: 'visible !important',
                },

                '.token.comment': {
                  fontStyle: 'italic',
                },
              }}
              {...props}
            >
              {tokens.map((line, index) => (
                // eslint-disable-next-line
                <Grid
                  columns={[1, '2ch 1fr']}
                  sx={{ display: ['block', 'grid'], columnGap: 3, rowGap: 0 }}
                  {...getLineProps({
                    line,
                    key: index,
                    style: { backgroundColor: 'transparent' },
                  })}
                >
                  <LineNumber>{index + 1}</LineNumber>

                  <div>
                    {line.map((token, key) => (
                      // eslint-disable-next-line
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                </Grid>
              ))}
            </Box>
          )}
        </Highlight>
      </Container>
    </Box>
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
      borderRadius: 1,
      paddingX: 1,
      backgroundColor: 'inline-code-background',
      color: 'inherit',
      fontFamily: 'mono',
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
