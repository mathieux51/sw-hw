importScripts("/sw-hw/precache-manifest.3f1fc7be7c76cea06d15271790eff0f7.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable no-restricted-globals */
workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp("https:.*min.(css|js)"),
  workbox.strategies.staleWhileRevalidate({
    cacheName: "cdn-cache"
  })
)

workbox.routing.registerRoute(
  new RegExp("http://.*:4567.*.json"),
  workbox.strategies.networkFirst()
)

workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

