---
title: You (Probably) Don't Need a ZSH Framework
displayTitle: You (Probably) Don&rsquo;t Need a ZSH Framework
date: 2017-09-15
description: They&rsquo;re handy, yes. But they&rsquo;re also overkill.
background: zig-zag
tags:
  - Open Source
  - Tooling
draft: true
---

As a designer, I was scared of the terminal for a long time. But as I became frustrated with the limitations of GUI options, and became more comfortable with programming in general, I began to familiarize myself with it. The first time I saw someone with their `git` status in their prompt, I immediately began to search for how I have it in mine. The answer was, resoundingly and repeatedly, `oh-my-zsh`.

Soon enough, though, I came to be dissatisfied with the solution. Unlike many other tools I have been dissatisfied with, my issues with `oh-my-zsh` were not related to its limitations. The problem--which, really, says much more about me than the framework--was that it was simply too... _big_. There were too many functions and aliases and configuration options for me to easily wrap my mind around. So, rather than do the logical thing (read some docs and root around in the repo), I decided to uninstall `oh-my-zsh` and roll my own, much more minimal, system.

## Disclaimer

If you're happy with `oh-my-zsh` or `prezto` or `your-zsh-framework-here`, use it! Just because you (probably) don't _need_ the framework, doesn't mean you need to spend a few hours replicating the feature set you _do_ use.

## Don't Reinvent the Wheel

Just because I'm not using a `zsh` framework, does not mean I am not using any existing tools. I just want a more simple toolset that I know all the pieces of. If the problem is solved, why solve it again?

### The `git` Prompt

The first thing I wanted to recreate was the first thing that made me want something like `oh-my-zsh` in the first place. I wanted to see my `git` status in my prompt. Luckily, there's an aptly-named project that accomplishes exactly that: [`zsh-git-prompt`](https://github.com/olivierverdier/zsh-git-prompt).
