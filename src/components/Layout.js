import React from 'react'
import styled from 'react-emotion'
import {
  space,
  width,
  fontSize,
  color,
  textAlign,
  fontWeight,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf,
  borderRadius,
  borderColor,
  borderWidth,
  boxShadow,
  hover,
  focus,
  active,
} from 'styled-system'
import { display, fontFamily, lineHeight, textDecoration } from '../utils/styled-system-extras'

const Box = styled.div`
  ${display};
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${textAlign};
  ${flex};
  ${alignSelf};
  ${borderRadius};
  ${borderColor};
  ${borderWidth};
  ${boxShadow};
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
  ${flex};
  ${alignSelf};
  ${borderRadius};
  ${borderColor};
  ${borderWidth};
  ${boxShadow};
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
  ${textAlign};
  ${fontWeight};
  ${flex};
  ${alignSelf};
  ${borderRadius};
  ${borderColor};
  ${borderWidth};
  ${hover};
  ${focus};
  ${active};
  ${fontFamily};
  ${textDecoration};
`

export { Box, Flex, Text }
