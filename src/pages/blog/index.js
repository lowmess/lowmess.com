import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import format from 'date-fns/format'
import addDays from 'date-fns/add_days'
import Layout from '../../components/Layout'
import { Box, Flex, Text } from '../../components/Primitives'
import { Paragraph, Rule } from '../../components/Typography'
import ArrowLink from '../../components/ArrowLink'

const YearTitle = ({ date }) => {
  const cleanDate = addDays(new Date(date), 1)
  return (
    <Text as="h2" fontSize={[2, 3]} fontWeight="5" mt={0}>
      {format(cleanDate, 'YYYY')}
    </Text>
  )
}

const BlogPage = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges
  let year = '0'
  return (
    <Layout location={location}>
      <Helmet>
        <title>Blog • {data.site.siteMetadata.title}</title>
      </Helmet>

      <article>
        <header>
          <Text
            as="h1"
            fontSize={[4, 5]}
            fontWeight="7"
            lineHeight="title"
            mt={0}
            mb={3}
          >
            Eloquent Writings About Stuff
          </Text>

          <Rule mt={4} mb={5} />
        </header>

        <main>
          {posts.map(({ node }, index) => {
            const { fields, frontmatter } = node
            const thisYear = format(
              addDays(new Date(frontmatter.date), 1),
              'YYYY'
            )
            let YearComponent
            if (thisYear !== year) {
              YearComponent = <YearTitle date={frontmatter.date} />
              year = thisYear
            }
            return (
              <Flex
                key={node.fields.slug}
                flexDirection="row"
                align="start"
                {...(index + 1 === posts.length ? {} : { mb: [4, 5] })}
              >
                <Box display={['none', 'block']} width={1 / 5}>
                  {YearComponent}
                </Box>

                <Box width={[1, 4 / 5]}>
                  <Link to={fields.slug}>
                    <Text
                      as="h3"
                      display="inline-block"
                      fontSize={[2, 3]}
                      fontWeight="7"
                      lineHeight="title"
                      color="darkGrey"
                      hover={{ color: 'orange}}' }}
                      my={0}
                    >
                      {frontmatter.title}
                    </Text>
                  </Link>

                  <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={2}>
                    {frontmatter.description}
                  </Paragraph>

                  <ArrowLink dest={fields.slug}>Read More</ArrowLink>
                </Box>
              </Flex>
            )
          }, this)}
        </main>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
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
