---
title: Creating a Dark Mode Toggle in 2026
description: Some new(-ish) CSS features make building a system-aware color theme selector ridiculously easy.
date: 2026-01-19
draft: false
---

I recently added a system-aware color theme selector to this website. Like, an hour ago. It was preposterously easy; the hardest part was deciding how and where I wanted to display the toggle. If you don't believe me (or don't want to read this article), [here's an entire implementation](https://codepen.io/lowmess/pen/gbMgdRM) in about 50 lines of code. Let's break it down.

## An Introduction to `color-scheme` and `light-dark()`

The two features that (now) make this so easy are [`color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme) and [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark). Put simply -- or at least succinctly -- `color-scheme` allows us to tell the browser which color schemes an element supports and `light-dark()` allows us to assign `<color>`s by the combination of that value and the user's `prefers-color-scheme` setting. You could imagine a `light-dark()` implementation in JavaScript looking something like this:

```ts
function lightDark(lightValue: Color, darkValue: Color) {
	const colorScheme = getNearestColorSchemeRule();
	const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

	if (colorScheme === "light") {
		return lightValue;
	}

	if (colorScheme === "dark") {
		return darkValue;
	}

	return colorScheme.includes("dark") && userPrefersDark.matches
		? darkValue
		: lightValue;
}
```

This gets at the core of what makes creating system-aware toggles so easy now. We can just tell the browser we don't support a certain color scheme in some conditions! That's exactly how the color palette for this site works:

```css
:root {
	color-scheme: light dark;

	--some-color: light-dark(#f00, #b44);
}

:root[data-color-theme="light"] {
	color-scheme: light;
}

:root[data-color-theme="dark"] {
	color-scheme: dark;
}
```

This alone is about 90% of a working implementation. If you take nothing else from this article it should be this: [`light-dark()` is real, and strong, and it's my friend](https://knowyourmeme.com/memes/geodude-is-real-and-strong-and-hes-my-friend).

## Creating a Selector

While you could make a group of `<button>` or `<radio>`s to actually allow the user to update their preference, I went with the element that is named after the verb the user will be taking: `<select>`.

```html
<label for="color-theme-select">Select color theme</label>

<select id="color-theme-select">
	<option value="system">System</option>
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>
```

Once the markup is in place, updating the color scheme when the user changes the value of the `<select>` is simple:

```ts
const $colorThemeSelect = document.querySelector("#color-theme-select");

$colorThemeSelect?.addEventListener("change", (event) => {
	const nextValue = event.currentTarget.value;

	document.documentElement.dataset.colorTheme = nextValue;
});
```

Note that even though I have a `"system"` value in my `<select>`, I don't have to worry about it messing up any styles by setting the data attribute, since `:root` and `:root[data-color-theme="system"]` would function identically. If you wanted to clear the attribute instead, that's also a valid approach, though some of the rest of the code would need to be tweaked.

That's enough for a basic toggle, but now loading in new pages or refreshing will always revert to the default system color theme. To fix that, we'll want to store the result of each change somewhere. Since this is a static site, I'm doing so in `localStorage`, but a cookie or database entry may work better for dynamically rendered sites.

```ts
const $colorThemeSelect = document.querySelector("#color-theme-select");

$colorThemeSelect?.addEventListener("change", (event) => {
	const nextValue = event.currentTarget.value;

	document.documentElement.dataset.colorTheme = nextValue;
	localStorage.setItem("color-theme", nextValue); // [!code ++]
});
```

Now that we have the value stored, we need to update the document on page load:

```ts
const defaultTheme = "system";
const storedTheme = localStorage.getItem("color-theme");

document.documentElement.dataset.colorTheme = storedTheme ?? defaultTheme;
```

Be sure to put that script in your `<head>` to avoid any flashes of unwanted color. If you're dynamically rendering the page, this is where storing the value as a cookie/in your database comes in. You can read the value and apply the appropriate `data-color-theme` attribute to the root `<html>` element before the browser even gets the document.

We might as well also set the default value on our `<select>` so the correct option is checked. Unlike setting the color theme on the document, this can happen after the initial parse/paint since it's unlikely a user will be able to interact with the selector faster than the script parsing/execution. You can place it right next to your change handler.

<!-- prettier-ignore -->
```ts
const $colorThemeSelect = document.querySelector("#color-theme-select");

if ($colorThemeSelect) { // [!code ++]
	$colorThemeSelect.value = storedTheme ?? defaultTheme; // [!code ++]
} // [!code ++]

$colorThemeSelect?.addEventListener("change", (event) => {
	const nextValue = event.currentTarget.value;

	document.documentElement.dataset.colorTheme = nextValue;
	localStorage.setItem("color-theme", nextValue);
});
```

The last detail is to only display the select if the user can actually interact with it. Did you know they added a [`scripting` media query to CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/scripting)? Me neither until earlier today.

```css
@media (scripting: none), (scripting: initial-only), print {
	#color-theme-select,
	label[for="color-theme-select"] {
		display: none;
	}
}
```

## Wrapping Up

The first couple of times I built color toggles were painful. They relied on heavy and slow CSS-in-JS solutions and often resulted in a blinding version of [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) where the light theme would flash before correcting into the dark theme. By leaning into modern (and [well suppoorted](https://caniuse.com/wf-light-dark)) CSS features, we no longer have to make any trade-offs between user experience and developer experience. It's a reminder that the web is a constantly improving platform, and just how exciting that can be.
