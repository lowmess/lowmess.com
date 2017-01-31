import {queryString} from './_links.js'
import {fill, opacity, patterns, backgrounds} from './_hero-patterns.js'
import {set, setRandom} from './_hero-set.js'
import {scroll} from './_hero-effects.js'
import lazy from './_images.js'

// Initialize Layzr
document.addEventListener('DOMContentLoaded', event => {
  lazy
    .update()
    .check()
    .handlers(true)
})

// Add analytics strings to outbound links
let anchors = document.querySelectorAll('a')
let aQueryString = 'utm_source=lowmess'

for (let i = anchors.length; i--;) {
  anchors[i].addEventListener('click', function (event) {
    var href = anchors[i].href
    queryString(anchors[i], aQueryString)
    window.setTimeout(function () {
      anchors[i].href = href
    }, 300)
  })
}

// Hero patterns

patterns.forEach(function (item, index, array) {
  let name = item.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().split('$').shift()

  let els = document.querySelectorAll('[data-hero-pattern=' + name + ']')
  for (let i = els.length; i--;) {
    set(els[i], item(fill, opacity))
  }
})

let rand = document.querySelectorAll('[data-hero-pattern=random]')
for (let i = rand.length; i--;) {
  setRandom(rand[i], backgrounds)
}

let scrolls = document.querySelectorAll('[data-hero-pattern=scroll]')
for (let i = scrolls.length; i--;) {
  scroll(scrolls[i], backgrounds, 200)
}
