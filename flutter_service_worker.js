'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/config": "f2ee0562ab25b3ab052e015af4396988",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dec39c3684d6f7f4da706d1ddf709b37",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a6d8be5fbadc25db003450f19620ea38",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "109d9994ab340fdd2b5137fe86e80436",
".git/logs/refs/heads/main": "cb16becf9df1896cd3225231a12fe635",
".git/logs/refs/remotes/origin/main": "2506ec71c43bb8dde99c701eeb4c355d",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/2bd362601155df84d2bbea28977275338cdda6": "fad922efd3d89ee5f5638c398cd0b9f7",
".git/objects/0a/041e77847f1758f9465ce1fb271ce47d19e74c": "560bf5f9d1ee69f65fdefa27b3b5b052",
".git/objects/0c/9c3cf8e23c6d802ae33c38f397676d827780e0": "70f89bd413d0c4460ea40358a1f74b25",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/bd741d7bb98e4e02d50f2f4637a35450f85c52": "91b14c1099307cc133ca7e82d6606a0c",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/9d7a8d482b21a8d893024d33623009a85eca5b": "1e521c4b7eb225ee767b78347a59d58a",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/1d/0447e6b85b89e10c02c43a165df1c0d7427031": "f974ecaa4cf15a684e289cc80b30741d",
".git/objects/1d/9d0b0f7696614dc1fe129210fcbf00b06b8649": "18d0dafc0b557250be927f8b8949cb2f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/a756443835b18c46590487d3cc40748d2a1bd0": "55e2cc84dd207593b981c3ff48ffb976",
".git/objects/21/3a04df1c149437415fb93425f481548d0de5e6": "0403fe62df61c180353672a53e1d99ad",
".git/objects/28/6b583725be3c2525b7c06d5f9f7f6b7024b8d9": "b625c75915e4f69f5f2c069215249b5b",
".git/objects/28/dd2b752cfcfc8e82e6a756c1a65e31f66d714e": "4465b862c53069e240b15f6d3da0c9e0",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/35/408d32957ff609e5c70b1627d4a2f53013f232": "f2e5d6124327bc25aef609695dbe4fe7",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/5642f7371ff85e97cded74303c40ab2bdd0756": "3b84866ade8109ccb1c042488a09ce17",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/66/f77c42f0996a21163d1926724f37c75f1ffd2c": "350ddee1187bff503eeb44a480ad043a",
".git/objects/68/422c2900a41a95a0bb0067a7ff6403d18367be": "11f844fcfbd97213472423b8863e11de",
".git/objects/69/c2a0f27691644c31ddd400b22c78f8f20be7fb": "8979beaafbc020c316dbf859c01bf8c6",
".git/objects/6a/4af600d9479a07b17f911e9f98c90e5079499e": "781c0367f91585370140974089fbde76",
".git/objects/70/5c58f5f87feed2351827fcdd57ac3592506baf": "514fbb005f1025355da60e4340b42120",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/72/cac9d016c1ba922a66a8166d2ab8231f2e5be9": "859221e8a1120726b8d6a4b8522f46ea",
".git/objects/82/3f148ff3a83c803c3a757316d929753d3f3f00": "7e9b3bafb32fd446324a3b0ff38fefaf",
".git/objects/83/e5e123679a47a1c116e3da1b294fe6e1b81d78": "a664ba38513d31988634aee985ee7163",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/a7/801c48565239b0e04e12a1f3712548e6b395d1": "3f7672f150f0a8ef43f890021fe3bdaa",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/b4/1b61e7b57d217b35d3ecfe60789e193c9143a6": "6d5c9c53acc937690d70b5da3f4b317e",
".git/objects/b5/30aa170b7d90925d418b3edaba4f139bcc89d7": "c152325eadb9a7f0c4dee646cced660a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/146273d143f931fa66b2dd319fdc3064db44f6": "16aad2243d79e7e01ef20fb357494741",
".git/objects/b8/cdef556027276b7290158b8a1496f6f1eca413": "9e31de35262e8fa97a5f09de9cad1ca7",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e42a2ca69ac129353876134614f99d7e59ac23": "faaea0d68ca68cab817cc86b6448e715",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bf/3248260487f500dd62342aa76e6f1f70138b0e": "92df33ff41820a3052140526c7256452",
".git/objects/c2/efbfb748b15b0c1734b3344e42424281161973": "d0a8b65201f1999c1978854e4ccf3961",
".git/objects/c7/1497cec5bd098d2cf21a054902805c68355541": "deb9cd407c2884404b8ee66e56058335",
".git/objects/ca/aa62a6f13d498a8d09041b537cb7ed9d8e0e2f": "5bb1fe3ebbb9e036e05fa0f3a3992204",
".git/objects/cd/0ccb62872af52d934714b282dd4698f47e063e": "dc9bed1c9cf6935a0faf32d6a46dfae5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/fdd03aa7cea96d14169e846aabacf7371a8355": "78b415873469a74cb7b9cef54fb1c034",
".git/objects/e3/110d6b96276ebf93f5710d3fc3590a38bb3204": "03926d79b8c61b9869a55337928a821f",
".git/objects/e4/7ebb325e0c5f18efe14acc6c2dd6ddf5e077ca": "c5ceb854ea08c9d9336b7d6a8adcf9f1",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e9/a168218185a5417d82d1e5691c6e0528ffcfd9": "128686a2b6a8a4d6acda7b5a38f6114e",
".git/objects/ea/542a94cd664c1e775a94cf417ed43a4274316c": "1422f232d035c4d859f943aaf47bd0a0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/66ddf8c0dcf9979e5b74c3d7ec99c142069ad0": "babe45e12a5a1a023d7f792ddbb53c64",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fd/30b0ee93b851db3069007c84f0e4d4818b8e04": "bc25879413d05d2ac1a39ca75d2f6220",
".git/objects/ff/63d23bebdd7d072d4bb5cec86fd009fb211ed0": "015377e422ad29b02caf6c3aaa8dbd17",
".git/objects/pack/pack-16011e58243e30574edee34a27e8b6d799ce4626.idx": "182e5ddd2c9a00943749a56e1f96f7c8",
".git/objects/pack/pack-16011e58243e30574edee34a27e8b6d799ce4626.pack": "d58e6298986d36fff0fb7d9a89a8c51d",
".git/objects/pack/pack-16011e58243e30574edee34a27e8b6d799ce4626.rev": "90736d945c494db77dcd306bd2ebeff0",
".git/ORIG_HEAD": "3a2a498069298f49a93df324d577605c",
".git/refs/heads/main": "3a2a498069298f49a93df324d577605c",
".git/refs/remotes/origin/main": "1bc8c8b270ce14118fe38bf15b98d606",
"assets/AssetManifest.bin": "c4ffe649c3fc3efaafa7c58bd91d3336",
"assets/AssetManifest.bin.json": "38b8b44e46871d6a23860095c7046455",
"assets/AssetManifest.json": "9ecabd5e1ededa8131b86ae6fab3c148",
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
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "391012ffa60be053f85576c61977f44d",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
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
"index.html": "b4d9c79ed67c82fb1495418a9ae072da",
"/": "b4d9c79ed67c82fb1495418a9ae072da",
"main.dart.js": "3983eba89565075df798c1bcd45e22b4",
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
