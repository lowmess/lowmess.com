---
title: Generating Open Graph Images With Astro & Satori
description: Open Graph images are a great way to make your post stand out on social media, and generating them has never been easier.
date: 2026-01-28
draft: false
---

Several eons ago, when I cared about these things, I wanted to update all of the headers across my various social media accounts to use the same design. Because each platform wanted slightly different sizes this was quite annoying to do manually in design software. Luckily I already knew a tool that could adapt to the various sizes each platform demanded: HTML & CSS. So I hacked together [a tool](https://github.com/lowmess/herohero) to abuse the then-new Puppeteer library to take screenshots of a given HTML page at the required sizes. And it worked great!

I'm far from the only person to think the flexibility of these technologies makes them perfect for dynamic imaging. When Vercel ran into similar issues generating Open Graph images at scale [they created a whole library about it](https://vercel.com/blog/introducing-vercel-og-image-generation-fast-dynamic-social-card-images). When I was looking to do the same for this site, combining Astro's [endpoints](https://docs.astro.build/en/guides/endpoints/) feature with [that library](https://github.com/vercel/satori) seemed like an ergonomic option. It turned out to be even better than I thought. (And, before we get too far, some folks do still go the [Puppeteer](https://www.emgoto.com/astro-social-card/) [route](https://cassidoo.co/post/og-image-gen-astro/)!)

## First Off, What's an Open Graph Image?

You know when you paste a link into some app and seems to magically pull in a description and image for that page? That's all powered by something called the [Open Graph protocol](https://ogp.me/). Originally developed by Meta to enhance links shared to (and from) Facebook, it has since become the defacto standard for displaying information in link previews.

## And We're Generating These Images How?

First things first, I am going to assume you already have an Astro site set up. Second things second, we need to install some dependencies to get this to work:

```bash
npm i satori react sharp
```

Satori renders JSX to SVG. React is needed for Satori's layout engine. Sharp is used to take the resulting SVG and transform it into a PNG. You could also use [`resvg-js`](https://github.com/thx/resvg-js) for this last part, but I already had Sharp installed, so that's what my examples will use. If you use [Astro's image components](https://docs.astro.build/en/guides/images/#astro-components-for-images) you very likely already have Sharp installed as well. Because this is Astro, unless you explicitly set out to make a React component that uses Satori and Sharp on the client for some reason, none of these dependencies will be shipped to the client.

### Making a Helper

On this site I have two templates for images I want to show. For blog posts, I want to include the title and date for the post. For every other page I want to include a generic image that has the same general vibe, but with the site's tagline. That being the case it makes sense to separate template rendering from template definitions.

```tsx
import { type ReactNode } from "react";
import satori from "satori";
import sharp from "sharp";

export async function generateOgImage(template: ReactNode) {
	const svg = await satori(template, {
		width: 1200,
		height: 630,
		fonts: [],
	});

	return await sharp(Buffer.from(svg)).png().toBuffer();
}
```

A few questions might pop out here.

#### Why 1200x630?

Very good question. I do not know. But it is [the most common recommendation](https://ogpreview.app/guides/og-image-sizes).

#### Why Return a `Buffer`?

Since we will be [returning these from an endpoint](#okay-but-how-do-i-put-these-on-my-website), we need to encode the information in a way that will fit into a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response).

#### Why is `fonts` Empty?

We actually need to add some stuff there, but it depends on whether you are using third-party or local fonts (or, I suppose, some combination of the two). If you are loading your fonts from Google or another third-party source, you should `fetch` the file and turn it into an `ArrayBuffer`.

<!-- prettier-ignore -->
```tsx
const myFetchedFont = await fetch("https://example.com/font-file.woff"); // [!code ++]
const myFetchedFontData = await myFetchedFont.arrayBuffer(); // [!code ++]

export async function generateOgImage(template: ReactNode) {
	const svg = await satori(template, {
		width: 1200,
		height: 630,
		fonts: [ // [!code ++]
			{ // [!code ++]
				name: "MyFetchedFont", // [!code ++]
				data: myFetchedFontData, // [!code ++]
			}, // [!code ++]
		], // [!code ++]
	});

	return await sharp(Buffer.from(svg)).png().toBuffer();
}
```

For local fonts, `fs.readFileSync` is your friend. Note that the path for the font file should be from the project root, not relative to the helper.

<!-- prettier-ignore -->
```tsx
import fs from "fs"; // [!code ++]

const myLocalFont = fs.readFileSync("./src/fonts/my-local-font.woff"); // [!code ++]

export async function generateOgImage(template: ReactNode) {
	const svg = await satori(template, {
		width: 1200,
		height: 630,
		fonts: [ // [!code ++]
			{ // [!code ++]
				name: "MyLocalFont", // [!code ++]
				data: myLocalFont, // [!code ++]
			}, // [!code ++]
		], // [!code ++]
	});

	return await sharp(Buffer.from(svg)).png().toBuffer();
}
```

### Cookie Cutting

With the helper in place, we need some templates to render. As I mentioned, I have two, but they share a layout so I actually have three components. This will vary site by site but the general idea is we're creating functions that return JSX for Satori to render.

```tsx
export function BlogPostOgImage({ post }: { post: BlogPost }) {
	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				height: "100%",
			}}
		>
			My post is called {post.title}
		</div>
	);
}
```

[Satori only supports a subset of CSS](https://github.com/vercel/satori#css) and even then only through inline style objects. It's not the best experience in the world, but it's also important to remember that these images can be rendered quite small. If it gets cumbersome to edit the template or you're having issues with your design, it's usually a sign to simplify.

## Okay But How Do I Put These On My Website?

Astro is most commonly used to generate HTML pages and their associated CSS and JavaScript. But you can use [endpoints](https://docs.astro.build/en/guides/endpoints/) to return any type of data we want. In this case, we want to create an image for each blog post. Let's create a new route at `pages/blog/[slug]/og-image.png.ts` to serve up these images.

```ts
import { type APIContext } from "astro";
import { generateOgImage, OgBlogPostImage } from "#utils/og-image.tsx";

const allPosts = await getAllPosts();

// Generate a path & return a `GET` endpoint for each post
export async function getStaticPaths() {
	return allPosts.map((post) => ({
		params: { slug: post.slug },
	}));
}

export async function GET({ params }: APIContext) {
	const { slug } = params;
	const post = allPosts.find((post) => post.slug === slug);

	// If we don't have a post, we don't have an image
	if (!post) {
		return new Response(null, {
			status: 404,
			statusText: "Not found",
		});
	}

	// React isn't in context, so call the template as a normal function
	const png = await generateOgImage(OgBlogPostImage({ post }));

	// Cast from `Buffer<ArrayBufferLike>` to `Uint8Array<ArrayBuffer>`
	return new Response(png as Uint8Array<ArrayBuffer>, {
		headers: { "Content-Type": "image/png" },
	});
}
```

Of course, this will change depending on how you get your posts into your site -- I use a [content collection](https://docs.astro.build/en/guides/content-collections/) -- but the core idea is the same. Fetch your posts and create a static `GET` endpoint for each one. And if you're in SSR mode, you can just remove the `getStaticPaths` and generate the image on the fly! You'd probably want to add some caching in that case, though.

### It's All In Your `<head>`

Once the the images are being generated, you have tell other sites where to find them. If you clicked on the Open Graph protocol link above you probably spotted the secret sauce. Even if you didn't I'll still tell you: we need to add a tag to the `<head>` of our pages. This probably means adding a prop to your layout component (with a default value if you have a generic image).

```astro
---
type Props = {
	ogImageUrl?: string;
};

const { ogImageUrl = `${Astro.url.origin}/og-image.png` } = Astro.props;
---

<!doctype html>
<html>
	<head>
		<meta property="og:image" content={ogImageUrl} />

		<!-- the rest of your site metadata, probably including other Open Graph tags -->
	</head>
	<body><!-- your site content --></body>
</html>
```

Then we update our blog post page:

```astro
---
import Layout from "#layouts/global.astro";
---

<Layout ogImageUrl={`${Astro.url}/og-image`}>
	<!-- blog stuff -->
</Layout>
```

Note that the links to the images are absolute links derived from `Astro.url`. Some sites will be able to pick up on relative links, but in general it's always safer to have absolute links.

## And Then What?

Then you post the link to the blog post you wrote about putting Open Graph images on your website! That's my plan, at least.
