import React from 'react'
import { graphql } from 'gatsby'
import system from 'system-components'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { Title, Paragraph } from '../components/Typography'
import Stats from '../components/Stats'
import { themeHover, themeUnderline } from '../utils/styles'

const AboutLink = system({ is: 'a' }, themeHover, themeUnderline)

const AboutPage = ({ data }) => (
  <>
    <Helmet>
      <title>About • {data.site.siteMetadata.title}</title>
    </Helmet>

    <article>
      <Header>
        <Title>Self-Doxxing</Title>
      </Header>

      <main>
        <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={5} mb={3}>
          &ldquo;I&rsquo;m a frontend developer &amp; designer, with a passion
          for legibility, performance, and the open web. A quick learner with a
          thirst for knowledge. Enthusiastic and hard-working, I pride myself on
          my attention to detail.&rdquo;
        </Paragraph>

        <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={3}>
          That&rsquo;s what the intro on{' '}
          <AboutLink href="https://resume.lowmess.com">my résumé</AboutLink>{' '}
          says. Kind of boring, huh? Well, it&rsquo;s a résumé. They&rsquo;re
          supposed to be boring. (Don&rsquo;t be such a nitpicker.)
        </Paragraph>

        <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={0}>
          Here&rsquo;s the fun stuff: my name technically isn&rsquo;t Alec
          (don&rsquo;t worry about it), my favorite beer is all of them, and
          I&rsquo;m a staunch believer in the Oxford comma. If you have any
          questions, I&rsquo;m happy to send you a non sequitur and/or
          fully-serious response if you{' '}
          <AboutLink href="mailto:alec@lowmess.com">email me</AboutLink>.
        </Paragraph>

        <Stats mt={5} />
      </main>
    </article>
  </>
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
