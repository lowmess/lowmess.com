---
title: Declarative Styling on the Web
date: 2019-07-01
description: A short introduction to styling your website or app declaratively.
---

There are many philosophies and methodologies to styling documents and applications on the web. You may have even heard of some of them: OOCSS, BEM, SUIT CSS, "just, like, letting it ride, man", and so on and so forth.

But there's a sort of meta-methodology that's discussed less than those. When you're creating a `padding` rule inside of your BEM class, how do you determine what value goes on the right side of the colon? How about when you're creating a `background-color` rule in OOCSS? `font-size` in SUIT CSS?

You see, consistency is very important in design. It reduces the end user's cognitive load, it looks better, and, most importantly, it can drastically reduce the amount of work designers & developers have to do. Making sure that all of the values that go on the righthand side of that colon come from a reduced set of options can help to enforce this consistency.

I call this concept "Declarative Styling"™©®, and luckily for us, there are a number of existing technologies and methodologies to help us apply it to our codebases.

## What Do You Mean, _Declarative_?

The term "declarative styling" comes from the computer science term [Declarative Programming](https://en.wikipedia.org/wiki/Declarative_programming): essentially, we want to tell the computer the rules for drawing our interface, and let it follow those rules for us. We want to reduce those right-hand-side options to a set that matches our system, describe them once (if at all), and show the computer where to find them. We don't want to write `padding: 1rem` anymore, we want to write `padding: 3` and have the computer replace the `3` with the 3rd value in our spacing rule.

This accomplishes two major things for us: it ensures consistency across our design, and it reduces the cognitive load of designers and developers (while also providing a common language for them to communicate in, without worrying about strange redline discrepencies).

## Techniques

As hinted at above, most techniques revolve around scales. We'd provide our given solution with a group of scales for `spacing`, `fontSize`, `colors`, and so on, and the system will pluck our values straight out of those scales.

### Variables. Variables Everywhere.

This is probably the most common solution, and the one you're likely to be most familiar with. The idea is simple: when you write, for example, a `padding` declaration, you use a variable for the value. In Sass and LESS (or with custom PostCSS plugins), it's even possible to create helper functions that provide more semantics around using these values.

The downside to this approach is the same as it's biggest draw: the low barrier to entry. There are no guardrails to stop you from writing `padding: 24px` instead of using your variable.

```css
.box {
  padding: var(--spacing-3);
}
```

```scss
.box {
  padding: space(3);
}
```

### Atomic CSS

Atomic CSS (aka Functional CSS, aka Utility-first CSS) libraries like BassCSS, Tachyons, and Tailwind are declarative by definition. Classes like `p3` automatically follow our `padding` rule from above: we're telling the engine to apply equal an padding (the `p`) using the third step from our spacing scale (the `3`).

The downside to this approach is the relatively steep learning curve, and the repitition of class names. The latter can be managed with a component-based architecture through a tool like React or a templating language like Handlebars, but the former can only be solved through time.

```html
<div class="p3">Hi</div>
```

### `styled-system`

The closest thing to a purpose-built declarative styling library are Brent Jackson's [`styled-system`](https://styled-system.com) and [Rebass](https://rebassjs.org). They take the fundamentals of Atomic CSS and apply them straight to React: you're declarations are passed as props, with your scale keys as the values.

Of course, this approach also has the same learning curve problem as Atomic CSS. However, there's a benefit this approach has that the others lack: portability.

```jsx
<Box p="3">Hi</Box>
```
