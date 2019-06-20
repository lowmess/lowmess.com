import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import theme from '../src/layouts/theme'
import GlobalStyles from '../src/components/GlobalStyles'

import 'sanitize.css'

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />

      <div
        style={{
          minWidth: '100vw',
          minHeight: '100vh',
          padding: '2rem',
          backgroundColor: '#ffffff',
        }}
      >
        {storyFn()}
      </div>
    </>
  </ThemeProvider>
))

addDecorator(withA11y)

const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook

window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

configure(loadStories, module)
