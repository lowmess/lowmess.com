import system from 'system-components'

const Box = system(
  'display',
  'space',
  'width',
  'fontSize',
  'color',
  'fontWeight',
  'fontFamily',
  'lineHeight',
  'borders',
  'borderColor',
  'borderRadius'
)

const Flex = system(
  {
    display: 'flex',
  },
  'alignItems',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'space',
  'width',
  'fontSize',
  'color',
  'fontWeight',
  'fontFamily',
  'lineHeight',
  'borders',
  'borderColor',
  'borderRadius'
)

const Text = system(
  {
    is: 'span',
  },
  'display',
  'alignItems',
  'space',
  'width',
  'fontSize',
  'color',
  'fontWeight',
  'fontFamily',
  'lineHeight',
  'borders',
  'borderColor',
  'borderRadius'
)

export { Box, Flex, Text }
