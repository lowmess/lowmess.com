import React from 'react'
import Link from 'gatsby-link'
import { withComponent } from 'react-emotion'
import { format } from 'date-fns'
import { Box, Flex, Text } from '../components/Layout'
import { Title, Paragraph, Rule } from '../components/Typography'
import Icon from '../components/Icon'

const ArrowLink = ({ dest, text }) => (
  <Link to={dest}>
    <Text fontFamily="monospace" display="inline-flex" color="black" hover={{ color: 'orange' }}>
      {text} <Icon glyph="arrow" />
    </Text>
  </Link>
)

const Year = Text.withComponent('h2')
const PostTitle = Text.withComponent('h3')

const YearTitle = ({ date }) => {
  const cleanDate = new Date(date)
  return (
    <Year fontSize={[2, 3]} fontWeight="5" mt={0}>
      <time dateTime={cleanDate}>{format(cleanDate, 'YYYY')}</time>
    </Year>
  )
}

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  let year = '0'
  return (
    <article>
      <header>
        <Title fontSize={[4, 5]} fontWeight="7" lineHeight="title" mt={0} mb={3}>
          Eloquent Writings About Stuff
        </Title>
        <Rule mt={4} mb={5} />
      </header>
      <main>
        {posts.map(({ node }, index) => {
          const { fields, frontmatter } = node
          const thisYear = format(new Date(frontmatter.date), 'YYYY')
          let YearComponent
          if (thisYear !== year) {
            YearComponent = <YearTitle date={frontmatter.date} />
            console.log(year, thisYear)
            year = thisYear
          }
          return (
            <Flex flexDirection="row" align="start" {...(index + 1 === posts.length ? {} : { mb: [4, 5] })}>
              <Box display={['none', 'block']} width={1 / 5}>
                {YearComponent}
              </Box>
              <Box width={4 / 5}>
                <Link to={fields.slug}>
                  <PostTitle
                    display="inline-block"
                    fontSize={[2, 3]}
                    fontWeight="7"
                    lineHeight="title"
                    color="black"
                    hover={{ color: 'orange}}' }}
                    my={0}
                  >
                    {frontmatter.title}
                  </PostTitle>
                </Link>
                <Paragraph fontSize={[1, 2]} lineHeight="copy" my={3}>
                  {frontmatter.description}
                </Paragraph>
                <Link to={fields.slug}>
                  <Text
                    display="inline-flex"
                    fontSize={[0, 1]}
                    fontFamily="monospace"
                    color="black"
                    hover={{ color: 'orange' }}
                  >
                    Read More <Icon glyph="arrow" />
                  </Text>
                </Link>
              </Box>
            </Flex>
          )
        }, this)}
      </main>
    </article>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogPage
