var backgrounds = [
  'bubbles',
  'cage',
  'connections',
  'current',
  'diagonal-stripes',
  'flipped-diamonds',
  'houndstooth',
  'lines-in-motion',
  'moroccan',
  'morphing-diamonds',
  'rails',
  'rain',
  'squares-in-squares',
  'stripes',
  'tic-tac-toe',
  'zig-zag',
  'bank-note',
  'boxes',
  'circles-squares',
  'circuit-board',
  'diagonal-lines',
  'endless-clouds',
  'eyes',
  'floor-tile',
  'intersecting-circles',
  'melt',
  'overlapping-diamonds',
  'parkay-floor',
  'polka-dots',
  'signal',
  'slanted-stars',
  'wallpaper'
]

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

/* Thanks Remy! 👍
 * author: @rem
 * link: https://remysharp.com/2010/07/21/throttling-function-calls
 */

function throttle (fn, threshhold, scope) {
  threshhold || (threshhold = 250)
  var last
  var deferTimer
  return function () {
    var context = scope || this

    var now = +new Date()
    var args = arguments
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold + last - now)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
