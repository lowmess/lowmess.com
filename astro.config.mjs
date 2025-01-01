import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://lowmess.com",
	integrations: [
		mdx({
			syntaxHighlight: "shiki",
			shikiConfig: { theme: "plastic" },
		}),
		sitemap({ filter: (page) => !page.includes("/blog/archive") }),
	],
	redirects: {
		"/projects": "/work",
	},
});
