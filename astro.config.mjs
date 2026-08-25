import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { transformerNotationDiff } from "@shikijs/transformers";
import { defineConfig, envField, fontProviders } from "astro/config";

import { alabasterTheme, rubberTheme } from "./syntax-themes";

// https://astro.build/config
export default defineConfig({
	site: "https://lowmess.com",
	redirects: {
		"/projects": "/work",
	},
	integrations: [
		mdx({
			shikiConfig: {
				defaultColor: false,
				themes: {
					light: alabasterTheme,
					dark: rubberTheme,
				},
				transformers: [transformerNotationDiff()],
			},
		}),
		sitemap({ filter: (page) => !page.includes("/blog/archive") }),
	],
	env: {
		schema: {
			LASTFM_API_KEY: envField.string({ context: "client", access: "public" }),
			LASTFM_USER_NAME: envField.string({
				context: "client",
				access: "public",
			}),
		},
	},
	fonts: [
		{
			name: "Framboisier",
			cssVariable: "--typeface-framboisier",
			provider: fontProviders.local(),
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/framboisier-bold.woff"],
						weight: "400 700",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/framboisier-bolditalic.woff"],
						weight: "400 700",
						style: "italic",
					},
				],
			},
			fallbacks: ["Georgia", "ui-serif", "serif"],
		},
		{
			name: "Hanken Grotesk",
			cssVariable: "--typeface-hanken-grotesk",
			provider: fontProviders.fontsource(),
			styles: ["normal", "italic"],
			weights: ["400 700"],
			subsets: ["latin"],
			fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
		},
		{
			name: "Fira Code",
			cssVariable: "--typeface-fira-code",
			provider: fontProviders.fontsource(),
			styles: ["normal"],
			weights: ["400 700"],
			subsets: ["latin"],
			fallbacks: ["Menlo", "ui-monospace", "monospace"],
		},
	],
});
