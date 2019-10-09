import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import ArrowLink from './ArrowLink'
import { Heading, Paragraph } from './Typography'
import { themeHover } from '../utils/styles'
import unwidow from '../utils/unwidow'

const ProjectTitle = styled(Heading)`
  display: inline-block;

  ${themeHover};
`

const InlineBox = styled(Box)`
  display: inline-block;
`

const ProjectPreview = ({ project, level, ...props }) => (
  <Box {...props}>
    <a href={project.website ? project.website : project.repo}>
      <ProjectTitle
        as={level}
        my={0}
        fontSize={[2, 3]}
        fontWeight="bold"
        lineHeight="title"
      >
        {unwidow(project.title)}
      </ProjectTitle>
    </a>

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
