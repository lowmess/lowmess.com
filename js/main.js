import {queryString} from './_links.js'
import * as patterns from './_hero-patterns.js'

let anchors = document.querySelectorAll('a')
let aQueryString = 'utm_source=lowmess'

for (let i = anchors.length; i--;) queryString(anchors[i], aQueryString)

let random = document.querySelector('.random')
if (random) patterns.set(random)

let rollover = document.querySelector('.rollover')
if (rollover) patterns.marble(rollover, 250)
