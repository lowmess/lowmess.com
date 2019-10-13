import React from 'react'
import PropTypes from 'prop-types'
import { Box, Link } from 'rebass'
import ArrowLink from './ArrowLink'
import { Heading, Paragraph } from './Typography'
import unwidow from '../utils/unwidow'

const ProjectTitle = ({ children, ...props }) => (
  <Heading sx={{ display: 'inline-block' }} {...props}>
    {children}
  </Heading>
)

ProjectTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

const InlineBox = ({ children, ...props }) => (
  <Box sx={{ display: 'inline-block' }} {...props}>
    {children}
  </Box>
)

InlineBox.propTypes = {
  children: PropTypes.node.isRequired,
}

const ProjectPreview = ({ project, level, ...props }) => (
  <Box {...props}>
    <Link
      href={project.website ? project.website : project.repo}
      variant="ui-link"
    >
      <ProjectTitle
        as={level}
        my={0}
        fontSize={[2, 3]}
        fontWeight="bold"
        lineHeight="title"
      >
        {unwidow(project.title)}
      </ProjectTitle>
    </Link>

    <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={2}>
      {unwidow(project.description)}
    </Paragraph>

    {project.website && (
      <InlineBox {...(project.website && project.repo ? { mr: 4 } : {})}>
        <ArrowLink href={project.website}>Website</ArrowLink>
      </InlineBox>
    )}

    {project.repo && (
      <InlineBox>
        <ArrowLink href={project.repo}>Repository</ArrowLink>
      </InlineBox>
    )}
  </Box>
)

export const projectPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  repo: PropTypes.string,
  website: PropTypes.string,
})

ProjectPreview.propTypes = {
  project: projectPropType.isRequired,
  level: PropTypes.string.isRequired,
}

export default ProjectPreview
