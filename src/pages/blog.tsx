import * as React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Grid, Text, Container, Heading, Link } from 'theme-ui'
import Layout from '../components/Layout'
import { Header, HeaderName, HeaderTitle } from '../components/Header'

type Frontmatter = {
  title: string
  description?: string
  year: string
}

type Fields = {
  slug: string
}

type Post = {
  frontmatter: Frontmatter
  fields: Fields
}

const BlogPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              title
              description
              year: date(formatString: "YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.allMdx.edges
  let year = '0'

  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <Header>
        <HeaderName>Blog</HeaderName>

        <HeaderTitle>Eloquent Writings About Stuff</HeaderTitle>
      </Header>

      <Container as="main" mt={[4, 5]}>
        <Grid columns={[1, '8rem 1fr']} gap={[4, 5]}>
          {posts.map(({ node }: { node: Post }) => {
            const { fields, frontmatter } = node

            const thisYear = frontmatter.year

            const YearComponent =
              thisYear === year ? (
                <Box sx={{ display: ['none', 'block'] }} />
              ) : (
                <Heading color="muted-text" mt={[4, 0]}>
                  {thisYear}
                </Heading>
              )

            year = thisYear

            return (
              <React.Fragment key={fields.slug}>
                {YearComponent}

                <div>
                  <Heading as="h3" sx={{ display: 'inline-block' }}>
                    <GatsbyLink to={fields.slug}>
                      <Link as="span" variant="ui">
                        {frontmatter.title}
                      </Link>
                    </GatsbyLink>
                  </Heading>

                  <Text as="p" sx={{ maxWidth: 'measure', marginTop: 1 }}>
                    {frontmatter.description}
                  </Text>
                </div>
              </React.Fragment>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default BlogPage
