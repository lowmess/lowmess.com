import React from 'react'
import styled, { withComponent } from 'react-emotion'
import { space } from 'styled-system'
import { Box, Text } from '../components/Layout'
import { Title, Subtitle, Paragraph, Rule } from '../components/Typography'
import ProjectPreview from '../components/ProjectPreview'

const SectionTitle = Text.withComponent('h3')

const indexPage = ({ data }) => {
  return (
    <article>
      <header>
        <Title fontSize={[4, 5]} fontWeight="7" lineHeight="title" mt={0} mb={3}>
          Hi! I&rsquo;m Alec&nbsp;Lomas.
        </Title>
        <Subtitle fontSize={[3, 4]} fontWeight="5" lineHeight="title" my={3}>
          I&rsquo;m a frontend developer &amp; designer in Tempe,&nbsp;AZ.
        </Subtitle>
        <Paragraph fontSize={[2, 3]} lineHeight="copy" mt={3} mb={4}>
          My goal is to combine the principles of classic graphic design with the flexible and forward-thinking tenets
          of the internet. I care deeply about legibility, performance, and the open web. And&nbsp;burritos.
        </Paragraph>
        <Rule mt={4} mb={5} />
      </header>
      <main>
        <SectionTitle fontSize={[3, 4]} fontWeight="7" lineHeight="title" mt={5} mb={4}>
          Latest Project
        </SectionTitle>
        <ProjectPreview project={data.allProjectsJson.edges[0].node} level="h4" />
      </main>
    </article>
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
