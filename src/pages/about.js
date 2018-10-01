import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import { Text } from '../components/Primitives'
import { Title, Paragraph, Rule } from '../components/Typography'
import Stats from '../components/Stats'

const LinkStyle = ({ children }) => (
  <Text
    color="darkGrey"
    textDecoration="underline"
    textDecorationColor="orange"
    hover={{ color: 'orange' }}
  >
    {children}
  </Text>
)

const AboutPage = ({ location, data }) => (
  <Layout location={location}>
    <Helmet>
      <title>About • {data.site.siteMetadata.title}</title>
    </Helmet>

    <article>
      <header>
        <Title
          fontSize={[4, 5]}
          fontWeight="7"
          lineHeight="title"
          mt={0}
          mb={3}
        >
          Self-Doxxing
        </Title>

        <Rule mt={4} mb={5} />
      </header>

      <main>
        <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={5} mb={3}>
          &ldquo;I&rsquo;m a frontend developer &amp; designer, with a passion
          for legibility, performance, and the open web. A quick learner with a
          thirst for knowledge. Enthusiastic and hard-working, I pride myself on
          my attention to detail.&rdquo;
        </Paragraph>

        <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={3}>
          That&rsquo;s what the intro on{' '}
          <a href="https://resume.lowmess.com">
            <LinkStyle>my résumé</LinkStyle>
          </a>{' '}
          says. Kind of boring, huh? Well, it&rsquo;s a résumé. They&rsquo;re
          supposed to be boring. (Don&rsquo;t be such a nitpicker.)
        </Paragraph>

        <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={0}>
          Here&rsquo;s the fun stuff: my name technically isn&rsquo;t Alec
          (don&rsquo;t worry about it), my favorite beer is all of them, and
          I&rsquo;m a staunch believer in the Oxford comma. If you have any
          questions, I&rsquo;m happy to send you a non sequitur and/or
          fully-serious response if you{' '}
          <a href="mailto:alec@lowmess.com">
            <LinkStyle>email me</LinkStyle>
          </a>
          .
        </Paragraph>

        <Stats mt={5} />
      </main>
    </article>
  </Layout>
)

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default AboutPage
