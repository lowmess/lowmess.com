import React from 'react'
import { Box, Text } from './Primitives'
import { Paragraph } from './Typography'
import ArrowLink from './ArrowLink'

const ProjectPreview = ({ project, level, ...props }) => {
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
        <Text
          as={level}
          display="inline-block"
          fontSize={[2, 3]}
          fontWeight={7}
          lineHeight="title"
          my={0}
          color="darkGrey"
          hover={{ color: 'orange' }}
        >
          {project.title}
        </Text>
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
