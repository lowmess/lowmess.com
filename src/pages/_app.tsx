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
	<ThemeProvider theme={theme} components={components}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</ThemeProvider>
)

export default App
