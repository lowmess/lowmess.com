var backgrounds = [
  'bubbles',
  'cage',
  'connections',
  'current',
  'diagonal-stripes',
  'flipped-diamonds',
  'houndstooth',
  'lines-in-motion',
  'morphing-diamonds',
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
  'floor-tile',
  'intersecting-circles',
  'melt',
  'overlapping-diamonds',
  'parkay-floor',
  'polka-dots'
]

var landing = document.querySelector('.landing')

if (landing) {
  setBg()
  landing.addEventListener('mousemove', throttle(function () {
    removeBg()
    setBg()
  }, 250))
}

function setBg () {
  var newBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
  landing.classList.add(newBg)
}

function removeBg () {
  var currentBg = landing.className.split(' ').pop()
  var index = backgrounds.indexOf(currentBg)
  landing.classList.remove(backgrounds[index])
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
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
