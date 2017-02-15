import throttle from './_throttle'

export function set (el, pattern) {
  el.style.backgroundImage = pattern
  el.style.backgroundPosition = 'center'
}

export function setRandom (el, arr) {
  let rand = Math.floor(Math.random() * arr.length)
  let background = arr[rand]
  set(el, background)
}

export function scroll (el, arr, time = 250) {
  setRandom(el, arr)
  window.addEventListener('scroll', throttle(function () {
    setRandom(el, arr)
  }, time))
}

export function rollover (el, arr, time = 250) {
  setRandom(el, arr)
  el.addEventListener('mousemove', throttle(function () {
    setRandom(el, arr)
  }, time))
}

export function rotate (el, arr, time = 250) {
  setRandom(el, arr)
  window.setInterval(function () {
    setRandom(el, arr)
  }, time)
}
