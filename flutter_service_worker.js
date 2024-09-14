'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8efb32b972ced8f5884bf3ee45fa5c94",
"assets/AssetManifest.bin.json": "80296cb462913f187a6e40eebf65c71e",
"assets/AssetManifest.json": "bba7c5cb6230672db620ad82746f765e",
"assets/assets/Android.png": "bd14d83d3e106bba6154553e18b8e863",
"assets/assets/Android_Studio.webp": "c5b30e6c7bd133fcb0788b26c6f3acb9",
"assets/assets/build.png": "6c1b0bd300dc7e8c8cb503239c996755",
"assets/assets/college.png": "07c84c0e0e9f802acad1f3e8b74a322e",
"assets/assets/Commingsoon.gif": "9cc6de10a5e3f81babe6edf0c4febe7f",
"assets/assets/computer.png": "671275b7751cef2b67eb7fbb84366299",
"assets/assets/Dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/elementary.jpg": "8448f9f2af7e92c368e79d51afdb020f",
"assets/assets/facebook.png": "ffd7b58de574b5e7862d056d6485ff1a",
"assets/assets/Flutt.png": "3b527b0f7559f4bb0786fe84bee20e68",
"assets/assets/Flutter.png": "c16cf999f3d6093820552ebc5b796674",
"assets/assets/github-sign.png": "1ff8926e98c31f13fa1d6eda7acc42e8",
"assets/assets/gmail-logo.png": "119120b844ca317dccc434d85616f239",
"assets/assets/highschool.jpg": "2cbc6c64eea17cdb7b19676044fa31db",
"assets/assets/instagram.png": "383db3f895471041d6ced4fa863c6c83",
"assets/assets/linkedin-logo.png": "fdebdaa3e42a546dfcaa9e3c4b1c5bcb",
"assets/assets/map_assistant.gif": "33513e89eab65d551df2c7652dda89a9",
"assets/assets/map_assistant.jpg": "3c22de2eba7513b55ec81f262c95ac93",
"assets/assets/moves.py": "0af2987fc0f0047704651a081e607401",
"assets/assets/P1.jpg": "2b09c3e343a56eb7c86a176c4584c4b8",
"assets/assets/P2.gif": "3df8634ffd88c3d850dc01e1a79f68ae",
"assets/assets/P2.png": "50c333f2c49c643b26c90b7e6410de20",
"assets/assets/pi.png": "dd6dc24b0cfbb55292c29982ac36f974",
"assets/assets/profile.jpg": "aec1c1c0c4e33e877ab813c5f5cad78b",
"assets/assets/Python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/Vid1.gif": "faa61dcc008fb593c2246826a7050133",
"assets/assets/web.png": "ef247263861261690ac6958d39695e08",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "e666a4d9c0714d975704209db1cc2d9e",
"assets/NOTICES": "78c531ff017778460507ceb49e8f6cdf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3baf6bf006e8927d4f8eefc4f57a25ab",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4558b4465444a51321048ab2692e40df",
"/": "4558b4465444a51321048ab2692e40df",
"main.dart.js": "1bb9ce6514bf0b85c96169c059bc7356",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "d654cf391a33d159fa5f375b40305627"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
