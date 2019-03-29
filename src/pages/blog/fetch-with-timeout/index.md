---
title: Request Timeouts with the Fetch API
date: 2019-03-29
description: The Fetch API is great, but didn't ship with the ability to timeout requests. There's a new API to help with that.
---

I'm a big fan of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). I use it regularly in all sorts of projects, including this site and the API that powers the stats on the [about page](/about/). However it isn't always as clear how to do things like error handling and request timeouts as it is in libraries like [Axios](https://github.com/axios/axios).

If you're not familiar with `fetch`, it's a native API that massively simplifies making AJAX requests compared to the older [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHTTPRequest) method, and [it's supported in all modern browsers](https://caniuse.com/#feat=fetch). When it initally landed, however, there was no easy way to handle request timeouts. You could fake it with [`Promise.race`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) or by [wrapping your `fetch` in another Promise](https://github.com/github/fetch/issues/175#issuecomment-216791333), but these solutions don't actually cancel the request. This is where [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) comes in.

`AbortController` is an API that, much like its name and my previous sentence suggests, allows us to abort (cancel) requests. Though [browser support isn't _wonderful_ at time of writing](https://caniuse.com/#feat=abortcontroller), it can be used in most modern browsers and [polyfills are available](https://github.com/mo/abortcontroller-polyfill). The API itself has a very small surface area: a `signal` property to attach to request objects, and an `abort` method to actually cancel the request. Because the API is so simple, it's very flexible -- Jake Archibald has [a fairly in-depth article on the Google Developers blog](https://developers.google.com/web/updates/2017/09/abortable-fetch) going over various cancellation scenarios, as well as the history behind the API, and I highly recommend giving it a read.

With `AbortController`, it becomes trivial to cancel a request if it doesn't resolve before a given period of time: if the `abort` method is called before the request resolves (or before the response `Body` is consumed), the request is cancelled; if it's called after, the browser just ignores the call. To put it all together, we need to:

1. Create an instance of `AbortController`
1. Create a `setTimeout` function that calls the controller's `abort` method
1. Pass the controller's `signal` to `fetch`'s options object

## Putting It All Together

First, a disclaimer: there may very well be a more ergonomic way of accomplishing this. Callbacks, generally speaking, aren't much fun to work with. However, since we're catching request timeouts, we need a way to stick our data-handling logic between the `Promise` chains. A callback is the best way I could think of handling this.

With that out of the way, here is my generic `fetchWithTimeout` function. It should work in any environment that supports `fetch` and `AbortController`.

```js
const fetchWithTimeout = (uri, options, callback, time = 5000) => {
  // Lets set up our `AbortController`, and create a request options object
  // that includes the controller's `signal` to pass to `fetch`.
  const controller = new AbortController()
  const config = { ...options, signal: controller.signal }

  // Set a timeout limit for the request using `setTimeout`. If the body of this
  // timeout is reached before the request is completed, it will be cancelled.
  const timeout = setTimeout(() => {
    controller.abort()
  }, time)

  return fetch(uri, config)
    .then(response => {
      // Because _any_ response is considered a success to `fetch`,
      // we need to manually check that the response is in the 200 range.
      // This is typically how I handle that.
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`)
      }

      // Hey, look! It's our callback!
      return callback(response)
    })
    .catch(error => {
      // When we abort our `fetch`, the controller conveniently throws a named
      // error, allowing us to handle them seperately from other errors.
      if (error.name === 'AbortError') {
        throw new Error('Response timed out')
      }

      throw new Error(error.message)
    })
}
```

Using the function is fairly straightforward. Because the callbacks can be slightly unweildy, I tend to define them outside of the function parameters, but you could absolutely define them inline if desired.

```js
const doStuffWithResponse = response =>
  // Since we're returning the response, you can do anything you want to the
  // response object. For the purposes of this example, we'll pretend it's JSON.
  response.json().then(json => {
    // Do stuff with JSON
  })

// In reality we'd want to append a `.catch` or wrap this in a `try...catch`
// and properly handle any errors that might spit out at us.
// I trust you to be more responsible than I am in this example.
fetchWithTimeout(
  'https://example.com',
  { headers: { Accept: 'application/json' } },
  doStuffWithResponse,
  2500
)
```

---

That's it. That's the whole post. Though the snippet is ultimately pretty simple (it's 20 lines without whitespace and comments) writing this provided me with three major benefits: it forced me to abstract the function to the most reusable version I could, it gave me an opportunity to research `AbortController` to make sure I knew exactly how it behaved, and it provided a place where I can come find this snippet in the future instead of rooting through old projects.
