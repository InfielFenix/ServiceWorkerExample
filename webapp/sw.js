// Laden des Workbox Toolkits von Google
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

// index.html und JavaScript Dateien
workbox.routing.registerRoute(
  new RegExp("(index\.html|.*\.js)"),
  // Primär vom Netzwerk holen, wenn offline dann vom Cache
  workbox.strategies.networkFirst()
);

// CSS, fonts, i18n
workbox.routing.registerRoute(
  /(.*\.css|.*\.properties|.*\.woff2)/,
  // Cache benutzen aber ASAP im Hintergrund laden
  workbox.strategies.staleWhileRevalidate({
    // Eigenen Cache Name vergeben
    cacheName: "asset-cache"
  })
);
