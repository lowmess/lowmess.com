import throttle from 'lodash-es/throttle'

export const set = (el, pattern) => {
  el.style.backgroundImage = pattern
}

export const setRandom = (el, arr) => {
  const rand = Math.floor(Math.random() * arr.length)
  const background = arr[rand]
  set(el, background)
}

export const scroll = (el, arr, time = 250) => {
  setRandom(el, arr)
  window.addEventListener(
    'scroll',
    throttle(() => {
      setRandom(el, arr)
    }, time)
  )
}

export const rollover = (el, arr, time = 250) => {
  setRandom(el, arr)
  el.addEventListener(
    'mousemove',
    throttle(() => {
      setRandom(el, arr)
    }, time)
  )
}

export const rotate = (el, arr, time = 250) => {
  setRandom(el, arr)
  setInterval(() => {
    setRandom(el, arr)
  }, time)
}
