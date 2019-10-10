import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'rebass'
import Header from '../components/Header'
import ProjectPreview from '../components/ProjectPreview'
import { Heading, Title, Subtitle, Paragraph } from '../components/Typography'
import { themeHover } from '../utils/styles'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
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
  `)

  return (
    <article>
      <Header>
        <Title>Hi! I&rsquo;m Alec&nbsp;Lomas.</Title>

        <Subtitle my={3}>
          I&rsquo;m a frontend developer at{' '}
          <Link href="https://hiringsolved.com/" sx={themeHover}>
            HiringSolved
          </Link>
          .
        </Subtitle>

        <Paragraph fontSize={[2, 3]} mt={3} mb={4}>
          My goal is to create beautiful websites and rich interactions without
          sacrificing usability. I care deeply about legibility, performance,
          and the open web. And&nbsp;burritos.
        </Paragraph>
      </Header>

      <main>
        <Heading fontSize={[3, 4]} lineHeight="title" mt={5} mb={4}>
          Latest Project
        </Heading>

        <ProjectPreview
          project={data.allProjectsJson.edges[0].node}
          level="h3"
        />
      </main>
    </article>
  )
}

export default IndexPage
