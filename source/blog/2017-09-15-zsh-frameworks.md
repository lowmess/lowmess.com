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

I was scared of the terminal for a long time. But as I grew frustrated with my limitations, I took the time to familiarize myself. And, as with any other tool, I've gone through [several obsessive rounds](https://twitter.com/lowmess/status/903714807022469120) of tweaking and updating and form-fitting the terminal to my liking. The first round was switching to `zsh` and [`oh-my-zsh`](http://ohmyz.sh/) (mostly for the `git` prompt, if I'm being honest); the second was switching to [`prezto`](https://github.com/sorin-ionescu/prezto) (for, largely, no reason at all); and the third was to ditch the framework altogether and roll my own solution.

Unlike many other tools I have been dissatisfied with, my issues with `oh-my-zsh` & `prezto`  were not related to limitations. The problem--which, really, says much more about me than the frameworks--was that they're simply too... _big_. There are too many functions and aliases and configuration options for me to easily wrap my mind around. So, rather than do the logical thing (read some docs and root around in the repo), I decided to, well, do the thing we're talking about.

## Disclaimer

If you're happy with `oh-my-zsh` or `prezto` or `your-zsh-framework-here`, use it! Just because you (probably) don't _need_ the framework, doesn't mean you need to spend a few hours replicating the feature set you _do_ use.

## The Result

Here's what, after going through all of this, my terminal looks like.

![My Hyper terminal, showing some configuration](/images/blog.zsh-frameworks.result.png)

I prefer a minimal setup, but there's a lot of features hidden underneath the simple exterior. But first, let's get everything looking right.

## Let's Paint This Bikeshed

[`zsh-git-prompt`](https://github.com/olivierverdier/zsh-git-prompt).

```bash
# source the library
source /usr/local/opt/zsh-git-prompt/zshrc.sh
# configure the git prompt
ZSH_THEME_GIT_PROMPT_PREFIX="$reset_color at "
ZSH_THEME_GIT_PROMPT_SUFFIX=")"
ZSH_THEME_GIT_PROMPT_SEPARATOR="("
ZSH_THEME_GIT_PROMPT_BRANCH="%{$fg_bold[white]%}"
ZSH_THEME_GIT_PROMPT_STAGED="%{$fg[red]%}%{●%G%}"
ZSH_THEME_GIT_PROMPT_CONFLICTS="%{$fg[red]%}%{✖%G%}"
ZSH_THEME_GIT_PROMPT_CHANGED="%{$fg[white]%}%{✚%G%}"
ZSH_THEME_GIT_PROMPT_BEHIND="%{↓%G%}"
ZSH_THEME_GIT_PROMPT_AHEAD="%{↑%G%}"
ZSH_THEME_GIT_PROMPT_UNTRACKED="%{…%G%}"
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg_bold[white]%}%{✔%G%}"
# style the directory listing
local dir="%{$fg_bold[white]%}%1~$resetColor"
# export the combined prompt
export PS1='$dir$(git_super_status) ► '
```
