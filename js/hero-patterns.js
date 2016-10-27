const backgrounds = [
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

export function set (el) {
  let newBg = backgrounds[Math.floor(Math.random() * backgrounds.length)]
  el.classList.add(newBg)
}

export function remove (el) {
  let currentBg = el.className.split(' ').pop()
  let index = backgrounds.indexOf(currentBg)
  el.classList.remove(backgrounds[index])
}

/* Thanks Remy! 👍
 * author: @rem
 * link: https://remysharp.com/2010/07/21/throttling-function-calls
 */

export function throttle (fn, threshhold, scope) {
  threshhold || (threshhold = 250)
  let last
  let deferTimer
  return function () {
    let context = scope || this

    let now = +new Date()
    let args = arguments
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
