'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6cd7b5ea1f090827063447e3caba9a00",
"index.html": "30a8f4cecca77215fb48388d6716b43d",
"/": "30a8f4cecca77215fb48388d6716b43d",
"main.dart.js": "857100f55987c73bd9c04a693918d1d0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b6deb1f2deec82d4d0364c215bdff39",
".git/config": "7207744a5aab5772e84b1e73ab2b057b",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/56/091581ac7658e02c9fa24a2d65eabdce0e1d18": "8fe3a536736e95145d5cc7581c200f1d",
".git/objects/67/9b7cd87268767620cdc5f89d9f67dee43f8e03": "1ccae0296db7f81d2369ab12c5e3d02a",
".git/objects/0b/9ebf828445b56b2ed39c154becbe9bac256b07": "46c62a723adf9a482df939a6d6433d1a",
".git/objects/94/727b266d5174b0e2891deeaedab5e8f4091641": "6ae8e04f28697d249c56b0e3e76adbf9",
".git/objects/5a/bd66fbe81f6e3ed5e80c4dadd17faf54145ff2": "572685ce7a0b7a557029105678a3f104",
".git/objects/33/b7bac0a6020787ef735e81dda4588379357682": "d4bc662686dcbcced1c1497fb0bba083",
".git/objects/05/38ea06ff2fac7e9b5d66a0138de716b33dd458": "81f69925f76a294911175b922adef0d9",
".git/objects/a3/1fe131a62ba8a194cb84ab02b0e13932e46f3b": "4b1e5699d41a3d0926678974c8f06693",
".git/objects/b2/c8e95d6dbbb27a53dfab916dedeebddd3e6c86": "16a93f78d8d1ccc4955aaf9a425255b0",
".git/objects/d9/58a5709eb709976c34ff09a0967ccbf8dee82e": "06a06bb9f5be3de576c09129b7a66786",
".git/objects/bb/303be8e4560e0c43ebf648eacebe6a735619d9": "121581d1ddc500b19d44ff10965f5913",
".git/objects/bb/e3a9f4eec61aa758f8b1021dad117064291539": "3a6a81af8257ea4fd0065c85da7c03ab",
".git/objects/d7/de9e07572678d8e0a8fdff5638d2c9223ef70f": "c9511d631b22eeb033a88ae9d1d45f7e",
".git/objects/be/5baaa760d8bb72264c567de60e0003756a2e85": "cfd565ac5a027dd802362a8e4ed7518f",
".git/objects/da/8b773cdfd54f0ad1081b95a20cc0a0fcd13a17": "2e03a05a310ff45b471d4ee511e15b70",
".git/objects/da/6a7bde5b214cf0ac3a08f7dd6e53383e1c0ca6": "0dc906bcab42cb13aa4827dd54c4a73c",
".git/objects/a5/a4ba8f49d0a6e47b28221ea27b2277952f9489": "1d84ab02849c831eace61cf82290c7bf",
".git/objects/d1/2423adf98d811c464d8ccdc0eb547a1c954fec": "3879e4b878ffde7acab560639dc397d6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ca/ba855184f3b45d54e01e29ba820a5429fe313b": "83aa6b9e9f07454545ee225ba03fed73",
".git/objects/ed/6078bf333ff3da7cfb6a0a9f9c72f3eb473119": "06d3a015986bf3756ea3f8abf51433a5",
".git/objects/ec/d4129cdafdb9769a542b01f7edc622c6505e9a": "7e64a48f42ad1e637831c7aa97098e28",
".git/objects/ec/3ca081f608cd9397b3ee06bf96710ab3e4cddc": "6715dda118f86c23d928a863037d7019",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/cbe353b3edb9ed03c267c297a566cd060b244d": "efe4fbb89eae093a29ecf74995f7dc85",
".git/objects/16/d53111fe1c9f37535484bef49391e8de00a1b7": "617243f142524e7a7ddd1f15524256cf",
".git/objects/89/5d7fff9ad70c65b3a7007dcac1e76e74819a2d": "c2be7f4b8a4d821b3a6af311d9fb55c8",
".git/objects/73/d380bc167dd441ebe1e81bad8bb056352bd6f2": "9756a6c2f23686fc875e1d2bb5127cc7",
".git/objects/74/c2fafa31f4620e4cbb83cf966570332d9152d5": "566a33ee8b4014a4a9c36203fe23993a",
".git/objects/1a/e6883c668728df64028badfc7523fd2b675c00": "0e578813689bda840053ca182bea8340",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/f0df4c759cd9dc05dd61c75eb6cb013a48a675": "29bfff7d9997a9e1543fa419a9edb0c9",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/2f/584ecbdea641bcc6aee509a86f831c17f80dc6": "833f7341b5033d09fa551c2b18682c7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/09/62cc1ef8b52a95fbb8cf16aaf5eca46b618515": "88cd523ba55e78623e82b906ec8adbbe",
".git/objects/31/435858e403a5584a4dcbba59c612286c868538": "1eaf6435e01ed18f5ee51d1b33f21ab3",
".git/objects/3a/9678c849cbc7e9c2331bee53b73c606d9a2a74": "192a5bdbe9312338ebbd1b60f52f097e",
".git/objects/53/2e30ee95e4966e13c23abcad7babd148fdfcac": "19b73298e41c69b51f3d7c4029256c84",
".git/objects/39/b6786717b72a6d9aa19c18eae6ea6b7a6f1004": "f2d6f00a832cdafd04007855695e7627",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/a7/4b0d5092fda4288c792f37c4591360ead9f716": "f14820bbeb5e7d23f7f8e5c7f4f60ddd",
".git/objects/b8/9920c468b37c7957e8edc4109d326bc22711ec": "a8c7075b8ea7eec9440599732ce0ac27",
".git/objects/b6/f8a88f99df7631229d494eafaf10005ca9260a": "5ff158e6867e90da0c95d2b262a27c0d",
".git/objects/d5/5820d71eedb49ca1e345727de7de6901541c7c": "39f3d22ccc9241e231734b25ad7cb27d",
".git/objects/af/be33667508cb0f22cb8c5e0759e2d386028a4a": "05d1c3a9f4e1c537797c955e27842c06",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/286c7e93482415522338a9ea61b1bc42211a55": "0a15ef8b5c85038404003972b82e9cc1",
".git/objects/ea/78907dad5fc185b1cc7d5673db15d5cbeb5558": "203f387653b2f74581fdccf091220030",
".git/objects/e6/166fbdce975d69465b9c9d340a4863a60e9430": "84cbeb6956fdeb75b14dba99b3374432",
".git/objects/e7/959b1650fc2d5a863581bc549aff5ce87cfe5b": "6ced4015de1e6cf799d4d93171dd3b33",
".git/objects/46/08f90fb2d258e47162dc45bb5808c861e0d0e5": "ddd23d4341a486d422e37f45ff52cb4c",
".git/objects/2c/a899229a60a8b88af963db8ad8d797908c2feb": "94d66dd87224bb6a84558113160e140e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/e5c661c4375cce9ee802bdd77b3afcaf154612": "ccf663e49ba7161bc0cd4e19471d3a2a",
".git/objects/79/3fec8385aa184504dfea47f05329664af8247d": "36d39c01e93d191a93adc61375d5f72e",
".git/objects/1e/d7eee87d90aadd4c3ec2cf3d245a44a329be6f": "ba9a11f55380b5b38da1d06256d3562d",
".git/objects/23/2a21fb08a7549b27eacda0f1f364ca677b5b1c": "5b523898bf551a29bc6098a2626a7b30",
".git/objects/15/1981c54889452e5ed7c787bbfff01a1c4887a4": "d90c35a038f50ef92f4c2921fc3e275d",
".git/objects/71/97605917347d3bf842cfee70a2aff6aded94b7": "0c2b1d756b905b1248d1f0c2f1c0f1d8",
".git/objects/40/5d3e3e272b718aa8961b3ab6dfb566e36cf60d": "933c0bc0712848036508e6c7c39b5d1c",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/8e/356e5a3ccee2db9e39755347ebd6f636d522dd": "8b8f09191bf1dd519cf73c0ece2d99ba",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ebfcd0d01be6da70da02296b0da240ef",
".git/logs/refs/heads/master": "ebfcd0d01be6da70da02296b0da240ef",
".git/logs/refs/remotes/origin/master": "dbadfd1b2a3b1f9c88d92355eafcccb9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "9b94f2e7f59a99fd3125524dca18a1ac",
".git/refs/remotes/origin/master": "9b94f2e7f59a99fd3125524dca18a1ac",
".git/index": "2e0c2bd1e546924c526f18ff597659ca",
".git/COMMIT_EDITMSG": "add2bbbf59a1480c62dd4fee094c3530",
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
