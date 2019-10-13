import * as Heading from './Headings'
import Paragraph from './Paragraph'
import { UnorderedList, OrderedList } from './Lists'
import BlockQuote from './BlockQuote'
import { Code, InlineCode } from './Code'
import { Image } from './Image'
import HorizontalRule from './HorizontalRule'

const components = {
  h1: Heading.One,
  h2: Heading.Two,
  h3: Heading.Three,
  h4: Heading.Four,
  h5: Heading.Five,
  h6: Heading.Six,
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  blockquote: BlockQuote,
  code: Code,
  inlineCode: InlineCode,
  img: Image,
  hr: HorizontalRule,
}

export default components
