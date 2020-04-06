import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Text, Link } from 'theme-ui'
import Inline from './Inline'

const ProjectPreview = ({ project, count, ...props }) => {
  const { title, description, website, repo } = project

  return (
    <Box sx={{ position: 'relative' }} {...props}>
      {count && (
        <Text
          aria-hidden
          sx={{
            position: 'absolute',
            top: '-0.2rem',
            right: '100%',
            marginRight: [2, null, 3],
            fontSize: [2, 3],
            color: 'project-count',
            fontWeight: 'black',
          }}
        >
          {count}
        </Text>
      )}

      <Heading>
        <Link variant="ui" href={website || repo}>
          {title}
        </Link>
      </Heading>

      {description && (
        <Text as="p" sx={{ maxWidth: 'measure', marginTop: 2 }}>
          {description}
        </Text>
      )}

      <Inline gap={2} mt={2}>
        {website && <Link href={website}>Website</Link>}

        {website && repo && '\u00B7'}

        {repo && <Link href={repo}>Repository</Link>}
      </Inline>
    </Box>
  )
}

const ProjectType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  repo: PropTypes.string,
  website: PropTypes.string,
})

ProjectPreview.propTypes = {
  project: ProjectType.isRequired,
  count: PropTypes.number,
}

export default ProjectPreview
