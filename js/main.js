import * as links from './links.js'
import * as patterns from './hero-patterns.js'

let anchors = document.querySelectorAll('a')
let aQueryString = 'utm_source=lowmess'

for (let i = anchors.length; i--;) links.queryString(anchors[i], aQueryString)

let rollover = document.querySelector('.rollover')
let rotate = document.querySelector('.rotate')
let random = document.querySelector('.random')

if (rollover || rotate || random) {
  patterns.set(rollover || rotate || random)
}

if (rollover) {
  rollover.addEventListener('mousemove', patterns.throttle(function () {
    patterns.remove(rollover)
    patterns.set(rollover)
  }, 250))
}

if (rotate) {
  window.setInterval(function () {
    patterns.remove(rotate)
    patterns.set(rotate)
  }, 250)
}
