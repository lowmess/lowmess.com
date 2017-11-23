import React from 'react'
import styled, { withComponent } from 'react-emotion'
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
import { fontFamily, lineHeight } from '../utils/styled-system-extras'
import { Text } from './Layout'

const Title = Text.withComponent('h1')
const Subtitle = Text.withComponent('h2')

const Paragraph = styled.p`
  max-width: 33em;
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
  ${lineHeight};
`

const Rule = styled.hr`
  width: 100%;
  max-width: 8rem;
  margin-left: 0;
  margin-right: 0;
  border-style: solid;
  border-width: ${props => props.theme.borderWidths[2]};
  border-color: ${props => props.theme.colors.orange};
  ${space};
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  ${space};
  ${fontSize};
  ${color};
  ${fontWeight};
  ${textAlign};
  ${flex};
  ${alignSelf};
  ${fontFamily};
  ${lineHeight};
`
const ListItem = styled.li`
  display: ${props => props.display};
  ${space};
  ${fontSize};
  ${color};
  ${textAlign};
  ${fontWeight};
  ${flex};
  ${alignSelf};
  ${borderRadius};
  ${borderColor};
  ${borderWidth};
  ${fontFamily};
`

export { Title, Subtitle, Paragraph, Rule, List, ListItem }
