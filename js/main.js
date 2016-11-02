import {queryString} from './_links.js'
import './_hero-patterns.js'

let anchors = document.querySelectorAll('a')
let aQueryString = 'utm_source=lowmess'

for (let i = anchors.length; i--;) queryString(anchors[i], aQueryString)
