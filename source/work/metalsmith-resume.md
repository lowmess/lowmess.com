---
title: Metalsmith Resume
description: "Writing resumes is the <em>worst</em>. So, when it came time for me to create a new one, I used the best content editing & layout engines I could find: Markdown &amp; CSS. Then I re-made it all over, just for you."
date: 2016-07-13
preview: https://res.cloudinary.com/lowmess/image/upload/ar_8:5,c_fill,g_north/c_scale,w_auto,dpr_auto/v1476154336/work.metalsmith-resume.preview_fknpg2.png
background: connections
tags:
  - Open Source
  - Metalsmith
  - Tachyons
---

this is some `inline code`, inside a paragraph. cool, huh?

```js
var rollover = document.querySelector('.rollover')
var rotate = document.querySelector('.rotate')
var random = document.querySelector('.random')

if (rollover || rotate || random) {
  setBg(rollover || rotate || random)
}

if (rollover) {
  rollover.addEventListener('mousemove', throttle(function () {
    removeBg(rollover)
    setBg(rollover)
  }, 250))
}

if (rotate) {
  window.setInterval(function () {
    removeBg(rotate)
    setBg(rotate)
  }, 200)
}

function setBg (el) {
  var newBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
  el.classList.add(newBg)
}

function removeBg (el) {
  var currentBg = el.className.split(' ').pop()
  var index = backgrounds.indexOf(currentBg)
  el.classList.remove(backgrounds[index])
}
```

```css
.selector {
  boo: yah;
}
```

```html
<p>hmmm</p>
```
