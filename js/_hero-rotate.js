import {patterns} from 'hero-patterns'
import {setRandom} from './_hero-set.js'

export default function rotate (el, arr = patterns, time = 250) {
  setRandom(el, arr)
  window.setInterval(function () {
    setRandom(el, arr)
  }, time)
}
