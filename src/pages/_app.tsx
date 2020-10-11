import * as React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../constants/theme'
import components from '../components/MDXComponents'
import Layout from '../components/Layout'

// Import fonts
import '../assets/fonts/Webfonts/Inter/inter.css'
import '../assets/fonts/Webfonts/Dank/dank-mono.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  // I know for a fact `ThemeProvider` supports components, but the types don't reflect this
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore-next-line
  <ThemeProvider theme={theme} components={components}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default App
