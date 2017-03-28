import { queryString } from './_links'
import { fill, opacity, patterns, backgrounds } from './_hero-patterns'
import { set, setRandom, scroll } from './_pattern-set'
import Layzr from 'layzr.js'

// Initialize Layzr
const lazy = Layzr({
  normal: 'data-src'
})
document.addEventListener('DOMContentLoaded', event => {
  lazy
    .update()
    .check()
    .handlers(true)
})

// Add analytics strings to outbound links
let anchors = document.querySelectorAll('a')
let aQueryString = 'utm_source=lowmess'

for (let anchor of anchors) {
  anchor.addEventListener('click', event => {
    let href = anchor.href
    queryString(anchor, aQueryString)
    setTimeout(() => {
      anchor.href = href
    }, 0)
  })
}

// Hero patterns

patterns.forEach(function (item, index, array) {
  let name = item.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().split('$').shift()

  let els = document.querySelectorAll('[data-hero-pattern=' + name + ']')
  for (let el of els) {
    set(el, item(fill, opacity))
  }
})

let rand = document.querySelectorAll('[data-hero-pattern=random]')
for (let r of rand) {
  setRandom(r, backgrounds)
}

let scrolls = document.querySelectorAll('[data-hero-pattern=scroll]')
for (let s of scrolls) {
  scroll(s, backgrounds, 200)
}
