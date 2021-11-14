'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6cd7b5ea1f090827063447e3caba9a00",
"index.html": "958b364629697db10a38adb9ecf42b02",
"/": "958b364629697db10a38adb9ecf42b02",
"main.dart.js": "eac2c0d4050ab69b4cfb423003d654c1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b6deb1f2deec82d4d0364c215bdff39",
"assets/images/test_portfo.jpeg": "7aeef6295d59c2b38fc849b6a604c125",
"assets/images/image1.jpeg": "e70eca47f0b1f9603b1905f4f42ffaab",
"assets/images/master_2.png": "5a83a94205b4f8698a141f770d422eb8",
"assets/images/mycareer_1.png": "9d6fd74436ebbe84ebccdb5c599250fd",
"assets/images/reza.png": "2e5ee877d93e353a39129dcbbc3dd238",
"assets/images/mycareer_2.png": "37d20ae39826de2aa2400b384207c86f",
"assets/images/publish_1.png": "5aea77516403ada555b10cdbac300a60",
"assets/images/publish_2.png": "08fdb132265e03b55b989d9af6576b83",
"assets/images/profile.jpeg": "add5f0a262c28d78c4de69a4460ba696",
"assets/images/xpense_1.png": "c625a14242a58c4e72dca0d47998e658",
"assets/images/xpense_2.png": "8e2ddd2fd72310da75df7b4536acc0b0",
"assets/images/about.png": "9429649222054411f8f8f84b37db44b3",
"assets/images/remote_2.png": "4ae73e9cd08d8edf11f53c365da9c8aa",
"assets/images/master_1.jpeg": "f6e07dbee6f2117471772f1100d0df7c",
"assets/images/remote_1.png": "9626cec876660bccf206abdc3a055083",
"assets/AssetManifest.json": "777cf6bfd390c2960c893b1a460be3d5",
"assets/NOTICES": "c2892abcfc3b690ffc3e1495f736ef27",
"assets/FontManifest.json": "614d4f857b044a7b420931e673ce1152",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/iconly/fonts/IconlyBold.ttf": "128714c5bf5b14842f735ecf709ca0d1",
"assets/packages/iconly/fonts/IconlyLight.ttf": "5f376412227e6f8450fe79aec1c2a800",
"assets/packages/iconly/fonts/IconlyBroken.ttf": "6fbd555150d4f77e91c345e125c4ecb6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/fonts/PoppinsLatin-Bold.ttf": "7c6adb8d3c5f6def31bad9a4a8adbb06",
"assets/assets/fonts/PoppinsLatin-Thin.ttf": "b49a23299dd7f7f318f2e91ad36a368a",
"assets/assets/fonts/PoppinsLatin-Medium.ttf": "95d4768d7ad7d421235f67bbdf74fc16",
"assets/assets/fonts/PoppinsLatin-ExtraBold.ttf": "e33532fff0408f079d84ccb2276605ab",
"assets/assets/fonts/PoppinsLatin-Light.ttf": "535b91d134a6182f1b4175eb3f4ca1fe",
"assets/assets/fonts/PoppinsLatin-ExtraLight.ttf": "ec4d74a04a398e59a078d816b328b3ce",
"assets/assets/fonts/PoppinsLatin-SemiBold.ttf": "f4b82cbd4ea156105a398d0ba7c8ab82",
"assets/assets/fonts/PoppinsLatin-Regular.ttf": "5c095686f4b3d3f6dd696a50e81016ed"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
