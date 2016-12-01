import {queryString} from './_links.js'
import * as hero from 'hero-patterns'
import {patterns} from './_hero-patterns.js'
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

for (let i = anchors.length; i--;) queryString(anchors[i], aQueryString)

// Hero patterns
let fill = '#333333'
let opacity = 0.7

let backgrounds = [
  hero.fourPointStars(fill, opacity),
  hero.bamboo(fill, opacity),
  hero.bathroomFloor(fill, opacity),
  hero.happyIntersection(fill, opacity),
  hero.lips(fill, opacity),
  hero.randomShapes(fill, opacity),
  hero.tinyCheckers(fill, opacity),
  hero.fancyRectangles(fill, opacity),
  hero.overlappingCircles(fill, opacity),
  hero.plus(fill, opacity),
  hero.volcanoLamp(fill, opacity),
  hero.wiggle(fill, opacity),
  hero.bubbles(fill, opacity),
  hero.cage(fill, opacity),
  hero.current(fill, opacity),
  hero.diagonalStripes(fill, opacity),
  hero.houndstooth(fill, opacity),
  hero.linesInMotion(fill, opacity),
  hero.morphingDiamonds(fill, opacity),
  hero.rain(fill, opacity),
  hero.stripes(fill, opacity),
  hero.ticTacToe(fill, opacity),
  hero.zigZag(fill, opacity),
  hero.bankNote(fill, opacity),
  hero.circuitBoard(fill, opacity),
  hero.diagonalLines(fill, opacity),
  hero.floorTile(fill, opacity),
  hero.melt(fill, opacity),
  hero.overlappingDiamonds(fill, opacity),
  hero.parkayFloor(fill, opacity),
  hero.polkaDots(fill, opacity)
]

let randBackgrounds = []

patterns.forEach(function (item, index, array) {
  randBackgrounds.push(item(fill, opacity))

  let name = item.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().split('$').shift()

  let els = document.querySelectorAll('[data-hero-pattern=' + name + ']')
  for (let i = els.length; i--;) {
    set(els[i], item(fill, opacity))
  }
})

let rand = document.querySelectorAll('[data-hero-pattern=random]')
for (let i = rand.length; i--;) {
  setRandom(rand[i], randBackgrounds)
}

let scrolls = document.querySelectorAll('[data-hero-pattern=scroll]')
for (let i = scrolls.length; i--;) {
  scroll(scrolls[i], backgrounds, 200)
}

let errors = document.querySelectorAll('[data-hero-pattern=error]')
for (let i = errors.length; i--;) {
  set(errors[i], hero.floatingCogs(fill, opacity))
}
