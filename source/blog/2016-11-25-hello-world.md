---
title: Hello World
displayTitle: 👋 🌎
date: 2016-11-25
description: My new site (the one you're on right now), and how it came to be.
background: circuit-board
tags:
  - Open Source
---

Almost as soon as I finished [the previous version of this site](http://576f15a6d6865d23c5338933--lowmess.netlify.com/), I wanted to rebuild. I grew a lot as a developer in the few months after publishing the site, and having a difficult-to-update (and thus often out-of-date) and not-terribly-performant site was as embarrassing as it was impractical. Over the course of the last 18 months, I've renovated [my personal branding](https://dribbble.com/shots/2587747-Geoline), landed a sweet new gig, created a few new [projects](/projects), and, finally, re-launched this site.

#### The Build System

The old site used [Prepros](https://prepros.io/) to turn my [Jade (now Pug)](https://pugjs.org/api/getting-started.html) & [Sass](http://sass-lang.com/) files into HTML & CSS, and to minify and bundle everything. This left me with a site that, while perfectly buildable, was far from portable. The first thing I did when setting up this new site was to leverage npm and git to build and version the site, respectively. This meant that setting up the dev process on another computer was as simple as cloning the repo and installing my dependencies. During the process of creating the site, [Yarn](https://yarnpkg.com) was released into the wild, and I quickly switched to using it for dependency management.
