import type { APIRoute } from "astro";

function getRobotsTxt(sitemapURL: URL) {
	if (!import.meta.env.PROD) {
		return `
User-agent: *
Disallow: /
		`;
	}

	return `
User-Agent: *
Allow: /
Disallow: /blog/archive

# Stole these from The Verge. Thanks The Verge
User-agent: Google-Extended
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: ImagesiftBot
Disallow: /

User-agent: Omgilibot
Disallow: /

User-agent: Omgili
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: YouBot
Disallow: /

Sitemap: ${sitemapURL.href}
	`;
}

export const GET: APIRoute = ({ site }) => {
	const sitemapURL = new URL("sitemap-index.xml", site);

	return new Response(getRobotsTxt(sitemapURL));
};
