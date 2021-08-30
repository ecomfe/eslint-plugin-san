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
    "url": "404.html",
    "revision": "72c9922212d21044ef2163cb6838478e"
  },
  {
    "url": "assets/css/0.styles.7db71813.css",
    "revision": "9d86dc5e662a152603c3299613dc12ff"
  },
  {
    "url": "assets/fonts/codicon.a609dc0f.ttf",
    "revision": "a609dc0f334a7d4e64205247c4e8b97c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ec7a4584.js",
    "revision": "510bf9663c7d320c0f759c1dbda58577"
  },
  {
    "url": "assets/js/12.1ce796a1.js",
    "revision": "58969019eb74c8327de526ca5d785a1b"
  },
  {
    "url": "assets/js/13.4a61fc63.js",
    "revision": "181cffbdf7265f6221cd400bb6ba544a"
  },
  {
    "url": "assets/js/14.4e09adf0.js",
    "revision": "90437ed723a82d703515314719e596f4"
  },
  {
    "url": "assets/js/15.9d3929ae.js",
    "revision": "097e056439a0da970d37b71d8fcbd7be"
  },
  {
    "url": "assets/js/16.932809b2.js",
    "revision": "e40b651fda9384ec4b1253c945da314a"
  },
  {
    "url": "assets/js/17.b6c7033c.js",
    "revision": "599e18a89e899604d957fb9df1bb2166"
  },
  {
    "url": "assets/js/18.3d0c3f89.js",
    "revision": "a021077d4fd84eacc8abcc91c763a6fc"
  },
  {
    "url": "assets/js/19.89607805.js",
    "revision": "dfc392afaa7a1dbe475444a01d534380"
  },
  {
    "url": "assets/js/20.57ac6b43.js",
    "revision": "c9d211044d04f1c1b52d002b36be057f"
  },
  {
    "url": "assets/js/21.3fa221a9.js",
    "revision": "79ceb38215effcf2e6e1d1ff2ffc6455"
  },
  {
    "url": "assets/js/22.5cfcb9c6.js",
    "revision": "230e1f60e4cf8d4c2f363a7b34dbf7f7"
  },
  {
    "url": "assets/js/23.de02a54e.js",
    "revision": "68b2b839463b56f228d6e02a1d68763f"
  },
  {
    "url": "assets/js/24.efcb1dbc.js",
    "revision": "7be744426d4952a4c07043b48b8b0fe6"
  },
  {
    "url": "assets/js/25.02248afc.js",
    "revision": "6c87bbec0d3f2bce34ec63f14250cce7"
  },
  {
    "url": "assets/js/26.30b0936c.js",
    "revision": "7228ae445533e500d80df3194291fa4e"
  },
  {
    "url": "assets/js/27.7138a5a5.js",
    "revision": "b27cc3e3ff175a9b2e451898ae858375"
  },
  {
    "url": "assets/js/28.5d83f309.js",
    "revision": "7354edfb26077d217bb9ffdcd84fa3f6"
  },
  {
    "url": "assets/js/29.b08808d6.js",
    "revision": "92f6bf0b1e7939aca1c5e3557a9e804b"
  },
  {
    "url": "assets/js/3.0a972a6f.js",
    "revision": "10b81bc238a8848ed451183aec42b543"
  },
  {
    "url": "assets/js/30.4a6b6646.js",
    "revision": "9c07df4c6d3862f9af250896d8325851"
  },
  {
    "url": "assets/js/31.f05197ba.js",
    "revision": "71ac787fddb97ba51348358db5c359b6"
  },
  {
    "url": "assets/js/32.64bb6ae2.js",
    "revision": "cb52a6526fe8f58be25c7d3d2269261a"
  },
  {
    "url": "assets/js/33.a4879ae9.js",
    "revision": "516feeb67a9d26691e4733b1541dc37c"
  },
  {
    "url": "assets/js/34.48237727.js",
    "revision": "e023fd68aa5b0200eec8d9ff5088c276"
  },
  {
    "url": "assets/js/35.5b418d6c.js",
    "revision": "fcb959a8034bb39758b511b99e7f0d89"
  },
  {
    "url": "assets/js/36.aa559970.js",
    "revision": "f7d497d1747e7a77e85b21696cf70d59"
  },
  {
    "url": "assets/js/37.aff4fb3d.js",
    "revision": "81e03359bc760c87d08a3270ffa9f5a1"
  },
  {
    "url": "assets/js/38.931fcf15.js",
    "revision": "fbb43125f6b582258202d6ab539569ea"
  },
  {
    "url": "assets/js/39.3b151df7.js",
    "revision": "ac9cb4bbed2ec23f06858cd52eb2d958"
  },
  {
    "url": "assets/js/4.ac18a0b9.js",
    "revision": "2eeeffd9d958c0b23a6872918354f1e8"
  },
  {
    "url": "assets/js/40.95152153.js",
    "revision": "7c6e28505919ab7cfc3206f741dcba71"
  },
  {
    "url": "assets/js/41.968edbd5.js",
    "revision": "8cc9782217db97dec1d3e4cbe2f12fdd"
  },
  {
    "url": "assets/js/42.78a1c453.js",
    "revision": "42aa0822a2967461193cf65f9e0fbc70"
  },
  {
    "url": "assets/js/43.3aff6d80.js",
    "revision": "da717c5a02ada20245de0bd494585818"
  },
  {
    "url": "assets/js/44.ae8eb6e6.js",
    "revision": "53837908cb46fe8bebb311c980b5af45"
  },
  {
    "url": "assets/js/45.3dc8412a.js",
    "revision": "d358a96e516c211ebb2c5f4f7f912c7c"
  },
  {
    "url": "assets/js/46.2f318b08.js",
    "revision": "3f1f423ff36d8bc829f5bf6bcdde02ea"
  },
  {
    "url": "assets/js/47.6b8bca1c.js",
    "revision": "9ffc75284078712c300de0ad113414b5"
  },
  {
    "url": "assets/js/48.3644dfef.js",
    "revision": "56f40f1356f6f3e93469511e634d9eda"
  },
  {
    "url": "assets/js/49.299c814a.js",
    "revision": "da5ee8dd102942ad9fa453e06ef50ad2"
  },
  {
    "url": "assets/js/5.90eaeaa9.js",
    "revision": "e0bf1b58aab57db8e8eb1558dce6c96d"
  },
  {
    "url": "assets/js/50.cefb00a4.js",
    "revision": "d594babfb1d69cc033e0a909f333e015"
  },
  {
    "url": "assets/js/51.f6bae965.js",
    "revision": "1a5142342826e018d050854533501a95"
  },
  {
    "url": "assets/js/52.b0fa95ed.js",
    "revision": "5e51868df4bd4a0616cb7d3fe3591422"
  },
  {
    "url": "assets/js/53.854057b0.js",
    "revision": "b9f2ef842252454b3e9a15d0e8dec146"
  },
  {
    "url": "assets/js/54.d6ebba85.js",
    "revision": "fcf206fe2fb74cc7b43e1ce36af1079e"
  },
  {
    "url": "assets/js/55.3b660f6f.js",
    "revision": "0484708e38217a78e1eda0c1ee91f68d"
  },
  {
    "url": "assets/js/56.1c2999a6.js",
    "revision": "5ba0956b8d9faa10c28be3c45b3c54d5"
  },
  {
    "url": "assets/js/57.3471db6d.js",
    "revision": "51893c70396474d2ef978176a65f5dfd"
  },
  {
    "url": "assets/js/58.386c9d57.js",
    "revision": "cd6ca9aaedb23954ff37c02667bb76fd"
  },
  {
    "url": "assets/js/59.6fcca813.js",
    "revision": "1c5fddfce5b52af85f7a85262cc3ecc5"
  },
  {
    "url": "assets/js/6.0714b504.js",
    "revision": "ea3f9889ee8a07f63eb909d12abf19d9"
  },
  {
    "url": "assets/js/60.c2b90065.js",
    "revision": "5f987af6e6634eea4e230e01e2c1629f"
  },
  {
    "url": "assets/js/61.b42ee6b7.js",
    "revision": "fcc1143628ffb2849b54e011eaaa017d"
  },
  {
    "url": "assets/js/62.d1a9f315.js",
    "revision": "0a981e2f873f1dde0e3cb2ea410ffc92"
  },
  {
    "url": "assets/js/63.5fa0fff1.js",
    "revision": "8fbf165c3eeeb7ded48b11da15e6525e"
  },
  {
    "url": "assets/js/64.b6dcae20.js",
    "revision": "00ec9bc83a8d966f54b8b53c01381896"
  },
  {
    "url": "assets/js/65.4581c6fe.js",
    "revision": "ef27660e2cd44a3557ec8645cfe16c31"
  },
  {
    "url": "assets/js/66.ce57f0aa.js",
    "revision": "1c870cf5608a0774f8561cd313e7a448"
  },
  {
    "url": "assets/js/67.be2da643.js",
    "revision": "594be14d08fec4f4a8b8c08d00dc6600"
  },
  {
    "url": "assets/js/68.f25f0cc6.js",
    "revision": "94d2375f9c12b8c2d90445b333d1a02f"
  },
  {
    "url": "assets/js/69.5ea2f70e.js",
    "revision": "2c3b651e5a0a3a6281b88fedbdba5188"
  },
  {
    "url": "assets/js/7.82593fff.js",
    "revision": "55f02c2bd095c6101c0c0084eaabdc30"
  },
  {
    "url": "assets/js/70.99b55cf1.js",
    "revision": "dc0d2aa6a3cf8b670e576de7370dd1a7"
  },
  {
    "url": "assets/js/71.1dbc3e3b.js",
    "revision": "59f61bc702cc942093b452d2e89d1b7c"
  },
  {
    "url": "assets/js/72.b7354073.js",
    "revision": "fb4aa1089ce5cd33dc207dcffdb599a0"
  },
  {
    "url": "assets/js/73.45469822.js",
    "revision": "af2708ca513f2f6913a7a58a3d870624"
  },
  {
    "url": "assets/js/74.1954e39c.js",
    "revision": "23f727d1c353062991565702f086ba8e"
  },
  {
    "url": "assets/js/76.d4675abb.js",
    "revision": "a13ee16ffdc06ce477bc0f9f5c0a20fc"
  },
  {
    "url": "assets/js/77.dd760b9f.js",
    "revision": "9aa791f9d02064cb8bdc09eaf41e03fb"
  },
  {
    "url": "assets/js/8.9879ac55.js",
    "revision": "9b038aa4776de435582606b48803e75e"
  },
  {
    "url": "assets/js/9.62b2d86f.js",
    "revision": "0995777db852f55952bbd11d6c0d0e96"
  },
  {
    "url": "assets/js/app.adcfe821.js",
    "revision": "709088ee5a33d79972a4b6a118a82452"
  },
  {
    "url": "assets/js/vendors~docsearch.6cb0424f.js",
    "revision": "f17c04b1a1bf5bb9d33ef04fc7ce56cf"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "ea8d10777b250d23a3d8f50fcf51a3b6"
  },
  {
    "url": "index.html",
    "revision": "eee82448e8338c21f6ef9d0153095120"
  },
  {
    "url": "rules.html",
    "revision": "55a7d7cfb05ab215816ddc13654a75a7"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "c8755fcaa1863b062d9798f3dbb4dd04"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "26eb9d6681d861e213012fdf4b141180"
  },
  {
    "url": "rules/boolean-value.html",
    "revision": "7076ce2ff377ae9755ec746ef0bd85e5"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "4667a46d09a8e37bc0231843bb9ad74f"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "6445eb30fc2dbc5fb9b11e07cb368a1a"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "0ca4e2c452c8abe3a17a3945494c6cd1"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "d14f0dcf29ecc59ef2173bab2ba4997b"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "ae3b1280c4f23a5f5a3a21449890220a"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "2281809eb9023ef673dec46e5d28b1f7"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "d7949df2b02744a5c312d9d7f91ec212"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "91e37fb5a34e57c18e2a7754d109a733"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "861b69da174ce7bc93fdddb52c294680"
  },
  {
    "url": "rules/index.html",
    "revision": "b5bcf63571c612dd1889af7dd4b7a86d"
  },
  {
    "url": "rules/initdata-in-component.html",
    "revision": "07dca8cbf834b4ed170f9acfcdaacf05"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "37fd6493cfac8a29b3fe562d1f09a912"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "a5b041ce59a5c17f7c25b445ab84f633"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "fb0816016ca0e8a4666e2fa7178763f0"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "2a8b9183635abb04bf58855469b17790"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "1d38e71b30d60ec865effabf5cff2f49"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "fb68265952a98fd57f63dd27e3fb3610"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "2c05a0679bf816921ad4e6f2280e9573"
  },
  {
    "url": "rules/no-expression-in-template-literals.html",
    "revision": "513189ad37cbd8258941339bc22df9f8"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "c647d55ec3f706e38df8978f4147fd76"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "18e7db7686c37b23425e1933e13d9b3d"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "a1ddb3c1a0f5874a47d7c475a6fe89c1"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "19edc77b55743cd91194c85f2449c4eb"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "2025604f60c805fc000d3fc5faf06406"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "de9b25b85436b23916953f11f6d93c5a"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "aa3258eaf2cb8b59c1445e3028104ddf"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "ea725a982ec12111febe4f517d94d7c8"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "c9d0846fd7a43fdfd20b4dd4216f22fe"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "d2b8d562334d69d2b8ef83287483dbed"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "db46c2ea536b4a13d3a57266ac41cc71"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "14235a38984a23dae3de1efd68bdb858"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "789faf670f906bb711780b0766e83134"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "f68f81f9b57e4ad8a2f762ff37336992"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "9d9b9c97e87dc58093904736a9f1bdb6"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "de966260cde58d1a52a026155fa9a453"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "f8d63bd9eecdc9536323a81e3c09f4a5"
  },
  {
    "url": "rules/valid-components-name.html",
    "revision": "23185c3194f4a260ba3ec9c5c3ab0457"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "84f79df533b6015446b81ea7c515934a"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "48ea91abef05df539d181429f82f37ea"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "101514d94c486abd9a64e03b3b1e6a15"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "38bf2c84df01173e0cff4ff1156bbc61"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "50284d9e8d5bbaeae614a2dd78a04279"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "8aa4af231bee1292ebcec6ea98f6645a"
  },
  {
    "url": "style-guide/index.html",
    "revision": "99e05619b0eec4877ae9a90b63f2c5c7"
  },
  {
    "url": "user-guide/index.html",
    "revision": "f672fc1d083eb9360032912606fa7612"
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
