// primitives
import colors from './colors'
import space from './space'
import { borders, radii } from './borders'
import { fonts, fontSizes, fontWeights, lineHeights } from './typography'
import sizes from './sizes'
// variants
import styles from './styles'
import variants from './variants'
import layout from './layout'
import text from './text'
import links from './links'
import buttons from './buttons'

const breakpoints = ['40em', '64em']

const theme = {
  //settings
  useColorSchemeMediaQuery: true,
  // primitives
  breakpoints,
  colors,
  space,
  borders,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  sizes,
  // variants
  styles,
  variants,
  layout,
  text,
  links,
  buttons,
}

export default theme
