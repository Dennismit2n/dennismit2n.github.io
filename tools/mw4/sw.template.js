/* MW4 Rüstkammer: Service Worker (wird von tools/mw4/build.py erzeugt – hier nicht von Hand ändern)
   Seite, Manifest und Daten: zuerst Netz (bei jedem Start frisch), offline aus dem Cache.
   Bilder: sofort aus dem Cache, im Hintergrund aktualisiert. Neue Version = neue Datei, wird sofort aktiv. */
const VERSION = "__BUILD__";
const CORE = "mw4-core-" + VERSION;
const IMG = "mw4-img";
/* Schriften liegen seit dem 30.10.2026 in fonts/ (vorher Google Fonts, Cache "mw4-font") */
const FONT = "mw4-schrift";
const SCOPE = self.registration.scope;
const CORE_FILES = __CORE_FILES__;
const FONT_FILES = __FONT_FILES__;

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CORE)
      .then(c => c.addAll(CORE_FILES.map(u => new Request(new URL(u, SCOPE), {cache: "reload"}))))
      .then(() => caches.open(FONT))
      .then(c => c.addAll(FONT_FILES.map(u => new URL(u, SCOPE).href)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => (k.startsWith("mw4-core-") && k !== CORE) || k === "mw4-font").map(k => caches.delete(k)));
    if (self.registration.navigationPreload) { try { await self.registration.navigationPreload.disable(); } catch (e) {} }
    await self.clients.claim();
    const cs = await self.clients.matchAll({type: "window"});
    cs.forEach(c => c.postMessage({type: "mw4-updated", version: VERSION}));
  })());
});

function keyFor(req) {
  const u = new URL(req.url);
  if (req.mode === "navigate" || u.pathname.endsWith("/index.html")) return SCOPE;
  u.search = ""; u.hash = "";
  return u.href;
}

function networkFirst(event) {
  const req = event.request, key = keyFor(req);
  const net = fetch(new Request(key, {cache: "no-cache", credentials: "same-origin"})).then(async res => {
    if (res && res.ok) { const c = await caches.open(CORE); await c.put(key, res.clone()); }
    return res;
  });
  event.waitUntil(net.then(() => {}, () => {}));
  const fromCache = () => caches.open(CORE).then(c => c.match(key, {ignoreSearch: true}));
  /* Langsames Netz: nach 4,5 s den Cache zeigen, die frische Version landet trotzdem im Cache */
  const slow = new Promise(r => setTimeout(r, 4500)).then(fromCache).then(hit => hit || net);
  return Promise.race([net.catch(fromCache), slow]).then(r => r || fromCache()).then(r => r || Response.error());
}

async function staleWhileRevalidate(event, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(event.request);
  const net = fetch(event.request).then(res => {
    if (res && (res.ok || res.type === "opaque")) cache.put(event.request, res.clone());
    return res;
  }).catch(() => null);
  if (hit) { event.waitUntil(net); return hit; }
  return (await net) || Response.error();
}

async function cacheFirst(event, cacheName) {
  const cache = await caches.open(cacheName);
  const hit = await cache.match(event.request);
  if (hit) return hit;
  const res = await fetch(event.request);
  if (res && (res.ok || res.type === "opaque")) cache.put(event.request, res.clone());
  return res;
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (!url.href.startsWith(SCOPE)) return;
    if (req.mode === "navigate" || /\.(html|json|webmanifest)$/.test(url.pathname) || url.href === SCOPE) {
      event.respondWith(networkFirst(event));
    } else if (/\.(webp|png|jpe?g|avif|svg|ico)$/.test(url.pathname)) {
      event.respondWith(staleWhileRevalidate(event, IMG));
    } else if (/\.woff2$/.test(url.pathname)) {
      event.respondWith(cacheFirst(event, FONT));
    }
  }
});
