import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import ArrowLink from './ArrowLink'

storiesOf('Interaction|ArrowLink', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ArrowLink dest="#">{text('Text', 'Hello Storybook')}</ArrowLink>
  ))
  .add('External Link', () => (
    <ArrowLink dest="https://www.lowmess.com" external>
      This link points to the main site
    </ArrowLink>
  ))
