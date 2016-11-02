import * as hero from 'hero-patterns'
import rollover from './_rollover.js'

const backgrounds = [
  hero.bubbles,
  hero.cage,
  hero.connections,
  hero.current,
  hero.diagonalStripes,
  hero.flippedDiamonds,
  hero.houndstooth,
  hero.linesInMotion,
  hero.moroccan,
  hero.morphingDiamonds,
  hero.rails,
  hero.rain,
  hero.squaresInSquares,
  hero.stripes,
  hero.ticTacToe,
  hero.zigZag,
  hero.bankNote,
  hero.boxes,
  hero.circlesAndSquares,
  hero.circuitBoard,
  hero.diagonalLines,
  hero.endlessClouds,
  hero.eyes,
  hero.floorTile,
  hero.intersectingCircles,
  hero.melt,
  hero.overlappingDiamonds,
  hero.parkayFloor,
  hero.polkaDots,
  hero.signal,
  hero.slantedStars,
  hero.wallpaper
]

hero.patterns.forEach(function (item, index, array) {
  // get function name
  // convert camelCase to dashes-case
  // find elements with [data-hero-pattern] that matches the string
  // set styles on those elements
  let name = item.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

  let els = document.querySelectorAll('[data-hero-pattern=' + name + ']')
  for (let i = els.length; i--;) {
    hero.set(els[i], item, '333333', '0.7')
  }
})

let rand = document.querySelectorAll('[data-hero-pattern=random]')
for (let i = rand.length; i--;) {
  hero.setRandom(rand[i], '333333', '0.7')
}

let marbles = document.querySelectorAll('[data-hero-pattern=rollover]')
for (let i = marbles.length; i--;) {
  rollover(marbles[i], '333333', '0.7', 250, backgrounds)
}
