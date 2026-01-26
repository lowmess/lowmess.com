import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { transformerNotationDiff } from "@shikijs/transformers";
import embeds from "astro-embed/integration";
import { defineConfig } from "astro/config";
import fs from "fs";

import { alabasterTheme, rubberTheme } from "./syntax-themes";

/**
 * allow local fonts to be imported. used in og image generation
 *
 * @link https://blog.okaryo.studio/en/20250115-load-local-fonts-in-astro/
 */
const rawFontsPlugin = (ext) => {
	return {
		name: "vite-plugin-raw-fonts",
		transform(_, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return {
					code: `export default ${JSON.stringify(buffer)}`,
					map: null,
				};
			}
		},
	};
};

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
		db(),
	],
	vite: {
		plugins: [rawFontsPlugin([".woff"])],
	},
	redirects: {
		"/projects": "/work",
	},
});
