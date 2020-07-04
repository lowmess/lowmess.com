import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Box, Container } from 'theme-ui'
import { useSiteMetadata } from '../utils/hooks'
import Stack from '../components/Stack'
import Layout from '../components/Layout'
import { HeaderName, HeaderTitle } from '../components/Header'

type Frontmatter = {
  title: string
  description?: string
  date?: string
  datetime?: string
}

type Node = {
  frontmatter: Frontmatter
}

type Edge = {
  node: Node
}

interface Props {
  pageContext: {
    frontmatter: Frontmatter
  }
}

const BlogPostTemplate: React.FC<Props> = ({ pageContext, children }) => {
  const { title, siteUrl } = useSiteMetadata()

  // So this bit is a tad gross. I have to get all MDX nodes, then filter them
  // down to get the actual node the template is rendering. The reason for this
  // is thricefold:
  //
  // 1. If I don't do this, I have to format dates on the frontend and deal
  //    with all that wonky timezone bullshit, and
  // 2. This template can't run Gatsby queries for whatever reason, but mostly
  //    it's because
  // 3. I can't pass variables to `useStaticQuery`
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              datetime: date(formatString: "YYYY-MM-DD")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { node } = edges.find(
    (edge: Edge) =>
      edge.node.frontmatter.title === pageContext.frontmatter.title
  )

  const post = {
    frontmatter: {
      ...pageContext.frontmatter,
      ...node.frontmatter,
    },
    fields: node.fields,
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>

        <meta name="description" content={post.frontmatter.description} />

        <meta name="twitter:site" content="@lowmess" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content={title} />
        <meta
          property="og:title"
          name="twitter:title"
          content={post.frontmatter.title}
        />
        <meta property="og:url" content={`${siteUrl}${post.fields.slug}`} />
        <meta
          property="og:description"
          name="twitter:description"
          content={post.frontmatter.description}
        />
      </Helmet>

      <Box as="header">
        <Container sx={{ maxWidth: 'mdx-measure', fontSize: [null, null, 3] }}>
          <HeaderName as="span">
            <time dateTime={post.frontmatter.datetime}>
              {post.frontmatter.date}
            </time>
          </HeaderName>

          <HeaderTitle as="h1" aria-hidden="false">
            {post.frontmatter.title}
          </HeaderTitle>
        </Container>
      </Box>

      <Stack gap={4} mt={[4, 5]}>
        {children}
      </Stack>
    </Layout>
  )
}

export default BlogPostTemplate
