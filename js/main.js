import {queryString} from './_links.js'
import * as hero from 'hero-patterns'
import {set, setRandom} from './_hero-set.js'
import {scroll} from './_hero-effects.js'

let anchors = document.querySelectorAll('a')
let aQueryString = 'utm_source=lowmess'

for (let i = anchors.length; i--;) queryString(anchors[i], aQueryString)

let fill = '333333'
let opacity = 0.7

let backgrounds = [
  hero.fancyRectangles(fill, opacity),
  hero.overlappingCircles(fill, opacity),
  hero.plus(fill, opacity),
  hero.volcanoLamp(fill, opacity),
  hero.wiggle(fill, opacity),
  hero.bubbles(fill, opacity),
  hero.cage(fill, opacity),
  hero.current(fill, opacity),
  hero.diagonalStripes(fill, opacity),
  hero.flippedDiamonds(fill, opacity),
  hero.houndstooth(fill, opacity),
  hero.linesInMotion(fill, opacity),
  hero.morphingDiamonds(fill, opacity),
  hero.rain(fill, opacity),
  hero.stripes(fill, opacity),
  hero.ticTacToe(fill, opacity),
  hero.zigZag(fill, opacity),
  hero.bankNote(fill, opacity),
  hero.boxes(fill, opacity),
  hero.circuitBoard(fill, opacity),
  hero.diagonalLines(fill, opacity),
  hero.floorTile(fill, opacity),
  hero.melt(fill, opacity),
  hero.overlappingDiamonds(fill, opacity),
  hero.parkayFloor(fill, opacity),
  hero.polkaDots(fill, opacity)
]

hero.patterns.forEach(function (item, index, array) {
  // get function name
  // convert camelCase to dashes-case
  // find elements with [data-hero-pattern] that matches the string
  // set styles on those elements
  let name = item.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

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
