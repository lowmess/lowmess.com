import React from 'react'
import { storiesOf } from '@storybook/react'
import Navigation from './Navigation'

// To-do: create & add router decorator
// @link https://github.com/gvaldambrini/storybook-router/issues/26#issuecomment-484714790
storiesOf('Layout|Navigation', module).add('Default', () => <Navigation />)
