'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "86aa9aaf1301f29fcd745a382a84a817",
".git/config": "62ccef321272f54ab36f53cef9c2721f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "077c4873e38df4a09969706d7de87abd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e636a51eb44c6c9bddbd37366371885d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1e7eb81e8bec7faf4e7846f085ef3d62",
".git/logs/refs/heads/main": "1e7eb81e8bec7faf4e7846f085ef3d62",
".git/logs/refs/remotes/origin/HEAD": "4dd0fc9203128f6f82552c3931d944c9",
".git/logs/refs/remotes/origin/main": "048c6272982586f0db8dd36a94d8ab0d",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/05/cb3474931505e59257b8caf0992166df56541a": "ac7e5e4461a2162205d861115e11f57e",
".git/objects/2d/8888ffc0663dfc3dcee79ba7bae8a37b8fa0f6": "9eff786a1032e4189c24b3c1257947fc",
".git/objects/31/996d3a1f67969a7224419ff2d5854d8dfdacda": "187d10cd58c80dd113faf3243a7c8046",
".git/objects/38/4db4372302a82ed1edcde2f5c6560b89fbaa9c": "6be1ae442fb7596e9e45cd5c9a8e8093",
".git/objects/46/91fbc0484fa4f924598c90973c9c94364cc25c": "ce3ab6953cb5c1c6a23443483635ccd3",
".git/objects/52/c649d8dbcbc40eab586d5f2de10ac49a3e8526": "37aa371a8ad2084ee119398b2d386139",
".git/objects/60/5a5f2526b76ae0d7bf159dfb591eb97ae8ace5": "70fd7ddf2376b932589d7cbe23e626c5",
".git/objects/63/67c85eda98710b3f223f80c4e61ec3eadcfa01": "bd2529745ef07c06e5725e91a343be8a",
".git/objects/7f/ca9798bf165693999f3946a13af5bc2ce706b4": "0659e90cb7fb6d167381e9ebab6662da",
".git/objects/8a/92a77965a84003e66f89cbcedca83f60f96b60": "31da597cf649c91454e8d99f7fa5a398",
".git/objects/9b/bcae5cbf3e6e6bc57e22cff14613909d41ee25": "18d9faebb2b8a2c93d4661805eb9f376",
".git/objects/a2/483db7ae1bda74e84085625fb0304d6b5ed294": "ba00ad29f6c2dbd26c858b33f41161f4",
".git/objects/a2/fa65f64b2dbd5aac0e08e96f014297486e8824": "352ff4852a63bf3683a7586c437b2ae4",
".git/objects/ac/c275df6042438255c992d05c682b4262fa45c0": "aa4903fdce228de6c19ed5bc94093259",
".git/objects/ad/9ecb7cb1919f4aeb999aaf3bec8808a49df3a5": "caf24413b1d2e60a3760a4b21f015859",
".git/objects/ae/385ebc7396e9804de93e201050ec6c57fece48": "0cb6e8c3cfd7da8d31838370baa4abca",
".git/objects/b6/90ab9f078124c3078366fd0afe96b1699dc871": "dba39c7cbb2de13db2380d04287ebcca",
".git/objects/be/2091696837c051062ecd24cea1aa3a4e663570": "23bbb9883d7f0879d684aaa236ef0ed7",
".git/objects/c2/b49e6064cdda8ba3c6978942938a57cc00f91d": "c719bb72139fe0c1b77ae35aa351cbe8",
".git/objects/c7/ad11fca62b81a66a45232aeeaa0bb43d0d8a2e": "5c30a922c869b36a744f07d825e02439",
".git/objects/d7/aefc7fd7c746d9158be6c53ecb07a232c863ce": "fbb232146b7363d66f95a0b30de13f21",
".git/objects/df/aa3838b57027818201201774d006dd9390d407": "ce3051f9a7992ddfd0577051752f99ed",
".git/objects/e5/0532789d78eb36bcbfe2fd49da44efa10e6f85": "50c10d12dcca19ff1f12376e9c623b22",
".git/objects/e6/76da601e099eddb43badb4501bc71e6459f8c1": "f54312a90619aaf195688441dd1d3bae",
".git/objects/e8/f08d0e9eb92bea35fe611a202080a00d0b71d1": "c1f630e89d935ddfb17b8a6eb2e7c100",
".git/objects/ee/80a3483d7ffaf4b550f95e151aadb25cec680a": "862d9625837ddffb3282f7ae3848c4eb",
".git/objects/pack/pack-c8db122a8c22bf1956fdc3cc262f7728245f3ade.idx": "859cf345f503448367b4050790027f83",
".git/objects/pack/pack-c8db122a8c22bf1956fdc3cc262f7728245f3ade.pack": "babfffc6e0e40e50886b2f3ad69c4128",
".git/packed-refs": "3c5da0b215571707a39435804f88b8f4",
".git/refs/heads/main": "3d2e877827b0f6db67f311e761bd484e",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3d2e877827b0f6db67f311e761bd484e",
"assets/AssetManifest.json": "a80b3b7b5773dc7698b3ca21194c86ed",
"assets/assets/0.png": "cbb7b673453b5f78259d4854f75cabfc",
"assets/assets/1.png": "7c6f4faf61090299becce988a2c62164",
"assets/assets/10.png": "0b4a844cc22ad25325f839c017c484f9",
"assets/assets/11.png": "beb9ccc64804e4a523acdc2a4dea04ad",
"assets/assets/12.png": "4ac95bbe6f304c72596ae9f2f98aa733",
"assets/assets/13.png": "2e7f8aac6755d5f438484cd5a72aef9d",
"assets/assets/14.png": "bf0103c95537f7fef1f715bb35c6b3bc",
"assets/assets/15.png": "2ee26afb7a0d159b4b9a92ea522741c1",
"assets/assets/2.png": "ed5d9b43b30fa6a7382ca5c640d1a28b",
"assets/assets/3.png": "0f6c5849ecc8f1949421c7967de269b3",
"assets/assets/4.png": "5b101a24a8df8645d2c639c15fcd4321",
"assets/assets/5.png": "e3600f7d59cae30ba5fe6f6dd8372408",
"assets/assets/6.png": "322e3a9a65f8dada2412dbe03c0626fa",
"assets/assets/7.png": "02e857c2b05dac06dad355b2ef402c12",
"assets/assets/8.png": "934e8cc51d7fe7077f79def4c9013156",
"assets/assets/9.png": "2c56071468e0f3f583a9e57bb40772f7",
"assets/assets/manufacturing.svg": "f01e358668fbbe7c381f1a998589da4e",
"assets/assets/materials.svg": "4f78f3345ef90999070f7283c4a59cc1",
"assets/assets/mining.svg": "86195fd72402c1c243a030bb390f382a",
"assets/assets/power.svg": "928d9a5e46cb33f7bae398507e8d1014",
"assets/assets/scientific.svg": "6e2fc15892bd1031d7693cb19d97cf00",
"assets/assets/technology.svg": "0560a932f78a52b11d3fe5eca781c395",
"assets/assets/trading.svg": "ccc76296a18375cf850c14a01c1c9165",
"assets/FontManifest.json": "03a0d8b7075346b0de0d16396c3292ea",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/NMS-Glyphs-Mono.ttf": "6675f175e3518382c13268fdddcb2595",
"assets/fonts/NMS-Glyphs-Tight.ttf": "5adfd2a2785706286e0323f942db32e4",
"assets/NOTICES": "85bccc8b468e671934b1fa9cec982f5a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f916451a1f92b11ff8e28c4f8286d327",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3043ce0c7d9c28affad31b15ed32df5d",
"/": "3043ce0c7d9c28affad31b15ed32df5d",
"main.dart.js": "286ddb8f9aa043e67c1c16bb332d666f",
"manifest.json": "d2b53cbcea474d3d51117e585b2a5ecc",
"version.json": "8abe51157eb8d845f02e78e7d99644ed"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
