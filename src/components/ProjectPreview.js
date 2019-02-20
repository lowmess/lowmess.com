import React from 'react'
import PropTypes from 'prop-types'
import system from 'system-components'
import ArrowLink from './ArrowLink'
import { Box, Text } from './Primitives'
import { Paragraph } from './Typography'
import { themeHover } from '../utils/styles'

const ProjectTitle = system(
  {
    is: Text,
    display: 'inline-block',
    my: 0,
    fontSize: [2, 3],
    fontWeight: 7,
    lineHeight: 'title',
  },
  themeHover
)

const ProjectPreview = ({ project, level, ...props }) => (
  <Box {...props}>
    <a href={project.website ? project.website : project.repo}>
      <ProjectTitle is={level}>{project.title}</ProjectTitle>
    </a>

    <Paragraph fontSize={[1, 2]} lineHeight="copy" mt={3} mb={2}>
      {project.description}
    </Paragraph>

    {project.website && (
      <Box
        {...(project.website && project.repo ? { mr: 4 } : {})}
        display="inline-block"
      >
        <ArrowLink dest={project.website} external={true}>
          Website
        </ArrowLink>
      </Box>
    )}

    {project.repo && (
      <Box display="inline-block">
        <ArrowLink dest={project.repo} external={true}>
          Repository
        </ArrowLink>
      </Box>
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
