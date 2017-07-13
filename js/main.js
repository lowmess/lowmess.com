import { queryString } from './_links'
import { fill, opacity, patterns, backgrounds } from './_hero-patterns'
import { set, setRandom, scroll } from './_pattern-set'
import Layzr from 'layzr.js'

// Initialize Layzr
const lazy = Layzr({
  normal: 'data-src',
  threshold: 50,
})
document.addEventListener('DOMContentLoaded', event => {
  lazy.update().check().handlers(true)
})

// Add analytics strings to outbound links
const query = 'utm_source=lowmess'

for (const anchor of document.querySelectorAll('a')) {
  anchor.addEventListener('click', event => {
    const href = anchor.href
    queryString(anchor, query)
    setTimeout(() => {
      anchor.href = href
    }, 0)
  })
}

// Hero patterns
patterns.forEach((item, index, array) => {
  const name = item.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().split('$').shift()

  for (const named of document.querySelectorAll(`[data-hero-pattern=${name}]`)) {
    set(named, item(fill, opacity))
  }
})

for (const rando of document.querySelectorAll('[data-hero-pattern=random]')) {
  setRandom(rando, backgrounds)
}

for (const scroller of document.querySelectorAll('[data-hero-pattern=scroll]')) {
  scroll(scroller, backgrounds, 200)
}
