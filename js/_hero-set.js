import {patterns} from 'hero-patterns'

export function set (el, pattern) {
  el.style.backgroundImage = pattern
  el.style.backgroundPosition = 'center'
}

export function setRandom (el, arr = patterns) {
  let rand = Math.floor(Math.random() * arr.length)
  let background = arr[rand]
  set(el, background)
}
