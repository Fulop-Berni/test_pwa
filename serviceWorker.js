const staticDevCoffee = "dev-pasta-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/pasta1.jpg",
  "/images/pasta2.jpg",
  "/images/pasta3.jpg",
  "/images/pasta4.jpg",
  "/images/pasta5.jpg",
  "/images/pasta6.jpg",
  "/images/pasta7.jpg",
  "/images/pasta8.jpg",
  "/images/pasta9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })