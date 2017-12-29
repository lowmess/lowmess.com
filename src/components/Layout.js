import React from 'react'
import styled from 'react-emotion'
import {
  space,
  width,
  fontSize,
  color,
  fontWeight,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  borderRadius,
  borderColor,
  borderWidth,
  hover,
  focus,
  active,
} from 'styled-system'
import { display, fontFamily, lineHeight, textDecoration, textDecorationColor } from '../utils/styled-system-extras'

const Box = styled.div`
  ${display};
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${borderRadius};
  ${borderColor};
  ${borderWidth};
  ${hover};
  ${fontFamily};
  ${lineHeight};
`

const Flex = styled.div`
  display: flex;
  ${display};
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${alignItems};
  ${justifyContent};
  ${flexWrap};
  ${flexDirection};
  ${borderRadius};
  ${borderColor};
  ${borderWidth};
  ${hover};
  ${fontFamily};
  ${lineHeight};
`

const Text = styled.span`
  ${display};
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${borderRadius};
  ${borderColor};
  ${borderWidth};
  ${hover};
  ${focus};
  ${active};
  ${fontFamily};
  ${lineHeight};
  ${textDecoration};
  ${textDecorationColor};
`

export { Box, Flex, Text }
