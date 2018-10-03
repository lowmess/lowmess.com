import system from 'system-components'

const Title = system(
  {
    is: 'h1',
    mt: 0,
    mb: 3,
    fontSize: [4, 5],
    fontWeight: 7,
    lineHeight: 'title',
  },
  'space'
)

const Subtitle = system(
  {
    is: 'h2',
    mt: 3,
    mb: 4,
    fontSize: [3, 4],
    fontWeight: 5,
    lineHeight: 'title',
  },
  'space'
)

const Paragraph = system(
  {
    is: 'p',
    fontSize: [1, 2],
    lineHeight: 'copy',
  },
  'space',
  'color',
  'max-width: 33em'
)

const Rule = system(
  {
    is: 'hr',
    border: 2,
    borderColor: 'orange',
  },
  `width: 100%;
  max-width: 8rem;
  margin-left: 0;
  margin-right: 0;`,
  'space'
)

const List = system(
  {
    is: 'ul',
    m: 0,
    p: 0,
  },
  `list-style-type: none`,
  'display',
  'space',
  'fontSize',
  'fontFamily',
  'textAlign',
  'lineHeight'
)

const ListItem = system(
  {
    is: 'li',
  },
  'display',
  'space'
)

export { Title, Subtitle, Paragraph, Rule, List, ListItem }
