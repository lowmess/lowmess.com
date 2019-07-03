---
title: On Declarative Styling
date: 2019-07-10
description: By limiting the amount of CSS we <em>can</em> write, we improve the quality of the CSS we <em>do</em> write.
---

There is a problem at the heart of CSS. It's not the cascade, or specificity, or inconsistencies between rendering engines, though these things can be annoying. No, it's much simpler than that: the problem is that we can write too much of it.

I am not talking about [append-only stylesheets](https://css-tricks.com/oh-no-stylesheet-grows-grows-grows-append-stylesheet-problem/), though that too causes problems. Even if we're extremely disciplined about refactoring our CSS, and we only add new rules when absolutely needed, there is still a problem. The problem is the flexibility of the language itself. That there are nearly unlimited values that can be used for a `padding` declaration is extremely freeing, but also introduces surface area for inconsistencies in our designs. And consistency is key to good design! Not only does it reduce the end user's cognitive load, it (generally) looks better and it can drastically reduce the workload for designers & developers.

The key to avoiding this type of inconsistency is to artificially limit the number of values that we can use in those declarations that aren't already limited by the language. We want a declaration like `padding` to act a little more like `float`, in that we should only be able to set a value that's been predetermined by our governing system. There are a number of techniques and technologies that can help us accomplish this (or at least get us close). I call the overarching concept that these tools encompass "declarative styling".

## What Do You Mean, _Declarative_?

This term -- declarative styling -- is related to the computer science concept [declarative programming](https://en.wikipedia.org/wiki/Declarative_programming); it means we want to tell the computer the rules for drawing our interface, and let it follow those rules for us. In essence, we want to do for `padding` what the CSS engine does for `float`: limit the number of possible values that we can use in our CSS to a predefined set of options. We no longer want to write `padding: 1rem`, we want to write something like `padding: 3` and have the computer replace the `3` with the 3rd value in our spacing scale.

This accomplishes several things for us. Firstly, it ensures consistency across our design by allowing us to use a reference rather than a specific value. It also reduces the cognitive load for stakeholders by providing a common language to communicate in. These factors can make designing and iterating faster, and all but eliminate the inherent friction in designer-developer handoff.

## Design Tokens

Those familiar with the concept of [design tokens](https://css-tricks.com/what-are-design-tokens/) may find a lot of conceptual overlap here. Design tokens are an essential part of declarative styling: they are how we define our custom subset of styling options. If a rule in our stylesheet declares a `background-color`, that swatch should be found in our tokens.

There are many teqniques for storing and parsing design tokens. I'm partial to the JSON-based [System UI Theme Specification](https://system-ui.com/theme), which organizes our tokens into a variety of scales. Several of the tools discussed below rely on this or a similar technique, but the concept remains the same: there should be a source of truth for these values, and it should not be the CSS rule itself.

## Techniques

Much like there are a multitude of ways to store our tokens, there are many, many ways to apply them to our styles.

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

- custom properties, the cascade, and what this means for theming
- how to introduce guardrails (conceptually)

### Atomic CSS

Atomic CSS (aka Functional CSS, aka Utility-first CSS) libraries like BassCSS, Tachyons, and Tailwind CSS are declarative by definition. Classes like `p3` automatically follow our `padding` rule from above: we're telling the engine to apply equal padding to all sides (the `p`) using the third step from our spacing scale (the `3`).

The downside to this approach is the relatively steep learning curve, and the repitition of class names. The latter can be managed with a component-based architecture through a tool like React or a templating language like Handlebars, but the former can only be solved through time.

```html
<div class="p3">Hi</div>
```

- customizing libraries can be tough
- tailwind lets us customize tokens by default

### React & CSS-in-JS

The closest thing to a purpose-built declarative styling library are Brent Jackson's [`styled-system`](https://styled-system.com) and [Rebass](https://rebassjs.org). They take the fundamentals of Atomic CSS and apply them straight to React: you're declarations are passed as props, with your scale keys as the values.

```jsx
<Box p="3">Hi</Box>
```

Of course, this approach also has the same learning curve problem as Atomic CSS. However, there's a benefit this approach has that the others lack: portability.

The component-based model that React follow means that we can use tools to capture our consistently-applied component styles at definition time, while deferring context-specific styles to consumption time. For example: vertical spacing is very often applied differently depending on the elements surrounding the component when it's actually called into a view. Even when creating a component-style system with a templating language, this problem requires us to create wrapper divs.

```pug
main
  .mb3
    +my-pug-mixin
  footer ...
```

With a react model, and specifically one built on top of `styled-system`/`rebass`, we can spread our props onto our component and apply them directly to the component.

```jsx
// Defining our component
const MyRebassComponent = props => (
  <div p={3} {...props}>
    {children}
  </div>
)

// Elsewhere in our codebase
const MyReactView = () => (
  <main>
    <MyRebassComponent mb="3" />
    <footer>...</footer>
  </main>
)
```

- unfortunately didn't find a solution for vue/angluar/ember
- react context allows us to create components that automatically adapt to new themes (tokens)

---

This is a conclusion, that I still need to write.
