import styled from 'styled-components'
import {
  display,
  space,
  width,
  fontSize,
  color,
  fontWeight,
  fontFamily,
  lineHeight,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderRadius,
  hover,
  focus,
  active,
} from 'styled-system'
import {
  textDecoration,
  textDecorationColor,
} from '../utils/styled-system-extras'

const Box = styled.div`
  ${display};
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${fontFamily};
  ${lineHeight};
  ${border};
  ${borderTop};
  ${borderRight};
  ${borderBottom};
  ${borderLeft};
  ${borderColor};
  ${borderRadius};
  ${hover};
`

const Flex = styled.div`
  display: flex;
  ${display};
  ${alignItems};
  ${justifyContent};
  ${flexWrap};
  ${flexDirection};
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${fontFamily};
  ${lineHeight};
  ${border};
  ${borderTop};
  ${borderRight};
  ${borderBottom};
  ${borderLeft};
  ${borderColor};
  ${borderRadius};
  ${hover};
`

const Text = styled.span`
  ${display};
  ${alignItems};
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${fontFamily};
  ${lineHeight};
  ${textDecoration};
  ${textDecorationColor};
  ${border};
  ${borderTop};
  ${borderRight};
  ${borderBottom};
  ${borderLeft};
  ${borderColor};
  ${borderRadius};
  ${hover};
  ${focus};
  ${active};
`

export { Box, Flex, Text }
