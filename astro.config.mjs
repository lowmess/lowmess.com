import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { transformerNotationDiff } from "@shikijs/transformers";
import embeds from "astro-embed/integration";
import { defineConfig } from "astro/config";

import { alabasterTheme, rubberTheme } from "./syntax-themes";

// https://astro.build/config
export default defineConfig({
	site: "https://lowmess.com",
	integrations: [
		embeds(),
		mdx({
			syntaxHighlight: "shiki",
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
	redirects: {
		"/projects": "/work",
	},
});
