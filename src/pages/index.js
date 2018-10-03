import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Text } from '../components/Primitives'
import { Paragraph, Rule } from '../components/Typography'
import ProjectPreview from '../components/ProjectPreview'

const indexPage = ({ location, data }) => {
  return (
    <Layout location={location}>
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
            Hi! I&rsquo;m Alec&nbsp;Lomas.
          </Text>

          <Text
            as="h2"
            fontSize={[3, 4]}
            fontWeight="5"
            lineHeight="title"
            my={3}
          >
            I&rsquo;m a frontend developer &amp; designer at{' '}
            <a href="https://fuelmade.com">
              <Text color="darkGrey" hover={{ color: 'orange' }}>
                Fuel&nbsp;Made
              </Text>
            </a>
            .
          </Text>

          <Paragraph fontSize={[2, 3]} lineHeight="copy" mt={3} mb={4}>
            My goal is to combine the principles of classic graphic design with
            the flexible and forward-thinking tenets of the internet. I care
            deeply about legibility, performance, and the open web.
            And&nbsp;burritos.
          </Paragraph>

          <Rule mt={4} mb={5} />
        </header>

        <main>
          <Text
            as="h2"
            fontSize={[3, 4]}
            fontWeight="7"
            lineHeight="title"
            mt={5}
            mb={4}
          >
            Latest Project
          </Text>

          <ProjectPreview
            project={data.allProjectsJson.edges[0].node}
            level="h3"
          />
        </main>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allProjectsJson(limit: 1) {
      edges {
        node {
          title
          description
          website
          repo
        }
      }
    }
  }
`

export default indexPage
