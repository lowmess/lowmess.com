/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { InitializeColorMode } from 'theme-ui'
import metadata from '../constants/metadata.json'
import colors from '../constants/theme/colors'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />

					{/* theming */}
					<meta name="theme-color" content={colors.muted} />
					<meta name="apple-mobile-web-app-title" content={metadata.title} />
					<meta name="application-name" content={metadata.title} />
					<meta name="msapplication-TileColor" content={colors.primary} />

					{/* icons */}
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/favicon-32x32.png"
						sizes="32x32"
					/>
					<link
						rel="icon"
						type="image/png"
						href="/favicon-16x16.png"
						sizes="16x16"
					/>
					<link
						rel="mask-icon"
						href="/safari-pinned-tab.svg"
						color={colors.primary}
					/>
				</Head>

				<body>
					<InitializeColorMode />

					<Main />

					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
