import { h1, h2, h3, h4, h5, h6 } from './Headings'
import p from './Paragraph'
import a from './Link'
import { UnorderedList as ul, OrderedList as ol } from './Lists'
import { Code as code, InlineCode as inlineCode } from './Code'
import blockquote from './BlockQuote'
import { default as hr } from './Break'
// import img from './Image'

const components = {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	a,
	ul,
	ol,
	code,
	inlineCode,
	blockquote,
	hr,
	// img,
}

export default components
