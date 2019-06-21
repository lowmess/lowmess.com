import React from 'react'
import { storiesOf } from '@storybook/react'
import Stats from './Stats'

storiesOf('Content|Stats', module).add('Default', () => (
  <div style={{ marginTop: '-4rem' }}>
    <Stats mt={5} />
  </div>
))
