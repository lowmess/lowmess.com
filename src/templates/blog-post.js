import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import format from 'date-fns/format'
import addDays from 'date-fns/add_days'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Title, Subtitle } from '../components/Typography'
import MarkdownContent from '../components/MarkdownContent'

import 'lowmess-prism'

const BlogPostTemplate = ({ location, data }) => {
  const post = data.markdownRemark
  // have to add a day because of timezone wonkiness
  const date = addDays(new Date(post.frontmatter.date), 1)

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          {post.frontmatter.title} • {data.site.siteMetadata.title}
        </title>

        <meta name="description" content={post.frontmatter.description} />

        <meta name="twitter:site" content="@lowmess" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta
          property="og:title"
          name="twitter:title"
          content={post.frontmatter.title}
        />
        <meta
          property="og:url"
          content={`${data.site.siteMetadata.siteUrl}${post.fields.slug}`}
        />
        <meta
          property="og:description"
          name="twitter:description"
          content={post.frontmatter.description}
        />
      </Helmet>

      <article>
        <Header>
          <Title>{post.frontmatter.title}</Title>

          <Subtitle is="p">
            <time dateTime={date}>{format(date, 'MMMM D, YYYY')}</time>
          </Subtitle>
        </Header>

        <MarkdownContent
          is="main"
          lineHeight="copy"
          fontSize={[1, 2]}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        title
        date
        description
      }
      fields {
        slug
      }
    }
  }
`

export default BlogPostTemplate
