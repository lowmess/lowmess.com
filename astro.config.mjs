import db from "@astrojs/db";
import sitemap from "@astrojs/sitemap";
import { transformerNotationDiff } from "@shikijs/transformers";
import { defineConfig } from "astro/config";

import { alabasterTheme, rubberTheme } from "./syntax-themes";

// https://astro.build/config
export default defineConfig({
	site: "https://lowmess.com",
	markdown: {
		shikiConfig: {
			defaultColor: false,
			themes: {
				light: alabasterTheme,
				dark: rubberTheme,
			},
			transformers: [transformerNotationDiff()],
		},
	},
	integrations: [
		sitemap({ filter: (page) => !page.includes("/blog/archive") }),
		db(),
	],
	redirects: {
		"/projects": "/work",
	},
});
