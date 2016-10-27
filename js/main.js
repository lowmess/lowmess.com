import {queryString} from './links.js'
import * as patterns from './hero-patterns.js'

let anchors = document.querySelectorAll('a')
let aQueryString = 'utm_source=lowmess'

for (let i = anchors.length; i--;) queryString(anchors[i], aQueryString)

let rollover = document.querySelector('.rollover')
let rotate = document.querySelector('.rotate')
let random = document.querySelector('.random')

if (random) patterns.set(random)

if (rollover) patterns.marble(rollover, 250)

if (rotate) patterns.flash(rotate, 250)
