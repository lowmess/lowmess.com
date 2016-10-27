export function queryString (el, string) {
  // Check if el is a link
  if (!el.href || (el.protocol !== 'http:' && el.protocol !== 'https:')) {
    return
  }

  // Check if link host does not match current window host
  if (el.host !== window.location.host) {
    // If link already has a query string add to it, else create one
    if (el.search) {
      el.search += '&' + string
    } else {
      el.search = string
    }
  }
}
