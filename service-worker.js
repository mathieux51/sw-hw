importScripts("/precache-manifest.fa431785f701fa2aaea5cb6e784eb91f.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable no-restricted-globals */

console.log("Hi sw.js")

// workbox.skipWaiting()
// workbox.clientsClaim()

// workbox.routing.registerRoute(
//   new RegExp("https:.*min.(css|js)"),
//   workbox.strategies.staleWhileRevalidate({
//     cacheName: "cdn-cache"
//   })
// )

// workbox.routing.registerRoute(
//   new RegExp("http://.*:4567.*.json"),
//   workbox.strategies.networkFirst()
// )

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

