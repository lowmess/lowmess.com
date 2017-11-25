import React from 'react'
import Helmet from 'react-helmet'
import { withComponent } from 'react-emotion'
import format from 'date-fns/format'
import addDays from 'date-fns/add_days'
import { Title, Subtitle, Rule } from '../components/Typography'
import MarkdownContent from '../components/MarkdownContent'

import 'lowmess-prism'

const Content = MarkdownContent.withComponent('main')

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  // have to add a day because of timezone wonkiness
  const date = addDays(new Date(post.frontmatter.date), 1)

  return (
    <article>
      <Helmet>
        <title>
          {post.frontmatter.title} • {data.site.siteMetadata.title}
        </title>
        <meta name="description" content={post.frontmatter.description} />
        <meta name="twitter:site" content="@lowmess" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta property="og:title" name="twitter:title" content={post.frontmatter.title} />
        <meta property="og:url" content={`${data.site.siteMetadata.siteUrl}${post.fields.slug}`} />
        <meta property="og:description" name="twitter:description" content={post.frontmatter.description} />
      </Helmet>
      <header>
        <Title fontSize={[4, 5]} fontWeight="7" lineHeight="title" mt={0} mb={3}>
          {post.frontmatter.title}
        </Title>
        <Subtitle fontSize={[3, 4]} fontWeight="5" lineHeight="title" mt={3} mb={4}>
          <time dateTime={date}>{format(date, 'MMMM DD, YYYY')}</time>
        </Subtitle>
        <Rule mt={4} mb={5} />
      </header>
      <Content lineHeight="copy" fontSize={[1, 2]} dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
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
