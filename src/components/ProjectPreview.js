import React from 'react'
import { withComponent } from 'react-emotion'
import { Box, Text } from './Layout'
import { Paragraph } from './Typography'
import ArrowLink from './ArrowLink'

const ProjectPreview = ({ project, level, ...props }) => {
  const ProjectTitle = Text.withComponent(level)
  const WebsiteComponent = project.website ? (
    <ArrowLink dest={project.website} external={true}>
      Website
    </ArrowLink>
  ) : (
    ''
  )
  const RepoComponent = project.repo ? (
    <ArrowLink dest={project.repo} external={true}>
      Repository
    </ArrowLink>
  ) : (
    ''
  )
  return (
    <Box {...props}>
      <a href={project.website ? project.website : project.repo}>
        <ProjectTitle
          display="inline-block"
          fontSize={[2, 3]}
          fontWeight={7}
          lineHeight="title"
          my={0}
          color="black"
          hover={{ color: 'orange' }}
        >
          {project.title}
        </ProjectTitle>
      </a>
      <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={2}>
        {project.description}
      </Paragraph>
      <Box
        {...(WebsiteComponent && RepoComponent ? { mr: 4 } : {})}
        display="inline-block"
      >
        {WebsiteComponent}
      </Box>
      <Box display="inline-block">{RepoComponent}</Box>
    </Box>
  )
}

export default ProjectPreview
