/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.b1565c41.css",
    "revision": "e61547f238d2617f769384effa195531"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.59f29d2e.js",
    "revision": "a583dde2f2c33b69482c51e0ab27b701"
  },
  {
    "url": "assets/js/11.b666b583.js",
    "revision": "bef0aa9cf8e6b044114ef36c2e35ba5c"
  },
  {
    "url": "assets/js/12.d05e02ec.js",
    "revision": "4cc2d3b4919b9f62dfcf700b3acc8faf"
  },
  {
    "url": "assets/js/13.e317422a.js",
    "revision": "f3c723c71bbf9d12dccc19931871a17b"
  },
  {
    "url": "assets/js/14.c2a98da9.js",
    "revision": "d285ceb5b9fc9ed11fdb2aca886c07dc"
  },
  {
    "url": "assets/js/15.4efb0aee.js",
    "revision": "8c37de437134a940d78c82e333c3e262"
  },
  {
    "url": "assets/js/16.93f95b1d.js",
    "revision": "8d7dfc165bebc583c51566ea96d47736"
  },
  {
    "url": "assets/js/17.dbc55a36.js",
    "revision": "1b17f7da5d20237f0425944d89e04da8"
  },
  {
    "url": "assets/js/18.fd581e01.js",
    "revision": "087f5cfe4cc23f71650c3594cfbcbd02"
  },
  {
    "url": "assets/js/19.96063a2c.js",
    "revision": "055fcfa03459173460f39bb069694332"
  },
  {
    "url": "assets/js/2.9d87224e.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/3.aa97e589.js",
    "revision": "b4a2dd5ee008fd9ef0c9261cea06c73a"
  },
  {
    "url": "assets/js/4.9c31ed8e.js",
    "revision": "a38d5a6bcaac3f16cbce303c0cd5ee73"
  },
  {
    "url": "assets/js/5.209351dc.js",
    "revision": "1a4bc2bdbcb9d08bf1ae4d7b1f9f0a1b"
  },
  {
    "url": "assets/js/6.d2e7f1e8.js",
    "revision": "265da8bac8ac446bce5b1be1e46932ee"
  },
  {
    "url": "assets/js/7.0a0277f6.js",
    "revision": "dd816df0af4f4a9ba573fdf048b78489"
  },
  {
    "url": "assets/js/8.f0c33517.js",
    "revision": "07797e58a076229af4d1ba373875194b"
  },
  {
    "url": "assets/js/9.18ce7bc8.js",
    "revision": "fd3200be558f6d35c863845b032489a3"
  },
  {
    "url": "assets/js/app.8a010c69.js",
    "revision": "bd895336da9428c50122dd34deee242c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "12424279f7136c750bdf2e00c34def96"
  },
  {
    "url": "en/index.html",
    "revision": "4f46b8be88172034b0135f43040ba88a"
  },
  {
    "url": "guide/about.html",
    "revision": "a36d61966e85ab11b365b72269a66a7b"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "cfc69e6f7324dc5121a890ab490af25f"
  },
  {
    "url": "guide/config.html",
    "revision": "e9157c16c80ec5af402f88f11494a7b7"
  },
  {
    "url": "guide/faq.html",
    "revision": "231c257c93b501a325792dd52dd4a2f3"
  },
  {
    "url": "guide/icon.html",
    "revision": "2494a3fcaac2d620933e4f3730d99cd4"
  },
  {
    "url": "guide/index.html",
    "revision": "135dae6fb19e4efeff51ec4531c62225"
  },
  {
    "url": "guide/page.html",
    "revision": "eb1ad15b2dc491d5c2b515df2f0c4514"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "82521bd550e8540ba254b86b53bddd54"
  },
  {
    "url": "guide/Todo.html",
    "revision": "79dab50918d4a13f5397436de7681f77"
  },
  {
    "url": "index.html",
    "revision": "bcf7e6758649e2bb7587aae70451ca47"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "logo.png",
    "revision": "bb35d0cf00948250fd08e4663c133e12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
