import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import ProjectPreview from './ProjectPreview'

storiesOf('Content|ProjectPreview', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const project = {
      title: text('Title', 'My Badass Project'),
      description: text(
        'Description',
        'A short description of my super badass project, typically two sentences long. Also usually with a joke of some sort.'
      ),
      repo: text('Repository Link', 'https://github.com/lowmess/lowmess'),
      website: text('Website Link', 'https://www.lowmess.com'),
    }

    return <ProjectPreview project={project} />
  })
