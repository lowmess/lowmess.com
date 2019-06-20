import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Header from './Header'
import { Title, Subtitle } from '../Typography'

storiesOf('Content|Header', module)
  .addDecorator(withKnobs({ escapeHTML: false }))
  .add('Default', () => {
    const title = text('Title', 'Hello Storybook')
    const subtitle = text('Subtitle', "This is my header. It's mad cool.")

    return (
      <Header>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
    )
  })
