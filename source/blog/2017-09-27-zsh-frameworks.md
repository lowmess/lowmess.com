---
title: A Form-fitted zshell
displayTitle: A Form-fitted <code>zshell</code>
date: 2017-09-27
description: I made my <code>zshell</code> work for me, and managed to hurt absolutely no one else in the process.
background: zig-zag
tags:
  - Tooling
---

I was scared of the terminal for a long time. And for a while, I got by; there are plenty of apps to compile your Sass files, after all. But as I grew frustrated with the limitations of GUI solutions, I took the time to familiarize myself with the command line. And, as with any other tool, I eventually went through [several obsessive rounds](https://twitter.com/lowmess/status/903714807022469120) of tweaking and updating the terminal to my liking, and now it's at a place where I haven't needed to touch it for awhile. Here's the dirty deets.

## The Result

Here's what, after going through all of this, my terminal looks like. I prefer a minimal setup, but there's a lot of features hidden underneath the simple exterior.

![My Hyper terminal, showing some configuration](/images/blog.2017-09-27-zsh-frameworks.result.png)

## A Note on Frameworks

Frameworks like [`oh-my-zsh`](http://ohmyz.sh/) and [`prezto`](https://github.com/sorin-ionescu/prezto) are awesome, and originally what sent me down this crazy path. However, over time I became dissatisfied with them. The problem--which, really, says much more about me than the frameworks--was that they're simply too... _big_. There are too many functions and aliases and configuration options for me to easily wrap my mind around. So, rather than do the logical thing (read some docs and root around in the repo), I decided to, well, do the thing we're talking about.

## Don't Reinvent the Wheel

Fortunately, developer tooling is a realm where open source truly shines. As such, there are plenty of FOSS solutions to help me whip my shell into shape. Chief among these is [Homebrew](https://brew.sh/), which helps me install [these other libraries](https://github.com/unixorn/awesome-zsh-plugins#plugins) with just a few keystrokes. Here are a few of my favorites.

### [`zsh-git-prompt`](https://github.com/olivierverdier/zsh-git-prompt)

The first thing that caused me to switch from `bash` to `zsh` and to use frameworks like `oh-my-zsh` was the ability to see my `git` status right in my prompt (not that doing either of those was strictly necessary). This library helps make that easy, and after [some quick configuration](https://github.com/lowmess/dotfiles/blob/e7bc15f22ba756a0106285229e0c930ee4f6dd0a/.zshrc#L24-L41), I was able to get my prompt looking just as I like it.

### [`zsh-syntax-highlighting`](https://github.com/zsh-users/zsh-syntax-highlighting)

Another convenient thing the frameworks bring is syntax highlighting. I can't count the amount of times highlighting has prevented me from mistyping a function or alias, and this little library makes it easy to use. Just source it at the end of your `.zshrc` and you're good to go!

### [`hub`](https://hub.github.com)

I am working in [GitHub](https://github.com) repos basically all day. And while those repos work just fine with vanilla `git`, GitHub has a helper library to make working with repos on their service a little easier. `hub` allows you to do basically anything you can do on the GitHub webapp right from your terminal -- opening pull requests, creating & forking repos, etc. -- but my favorite feature is `browse`, which allows you to quickly open up a repo's GitHub page.

### [`autojump`](https://github.com/wting/autojump)

One of the first things I did when I started customizing my terminal was to set up custom aliases to jump into directories from anywhere. Judging by some of my coworkers setups, this is far from uncommon. Luckily, `autojump` makes that irrelevant. Instead of setting up new aliases for every directory, just `cd` into it one time, and then you can `j [name of dir]` into it from anywhere.

## Like a Glove

Now that we have all of the libraries we want installed, we can begin to do the _real_ work. And by that I mean the fun stuff! One of the major benefits I've found over using frameworks is that any additional feature or effeciency in my shell is one that _I_ introduced, which means that I actually know about it and will use it.

These can be simple:

```bash
alias r="yarn run"
```

These can be fun:

```bash
function weather () {
  curl "http://wttr.in/$1"
}
```

But the most important factor is that they're _mine_ (or, in your case, _yours_).