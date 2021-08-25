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
    "revision": "3025ede04909c673c182338c4c9e52d6"
  },
  {
    "url": "assets/css/0.styles.9ffef2d1.css",
    "revision": "beeafca2965fcf5c1fd1605779747820"
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
    "url": "assets/js/23.42345b3c.js",
    "revision": "c3b060731b4b4703427018b4a6122aff"
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
    "url": "assets/js/30.3d42b6cd.js",
    "revision": "950e06d2b50f697b08edf7be58fc6f42"
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
    "url": "assets/js/35.8ac2709c.js",
    "revision": "26236e1509ed9a76ddc971820d4396c2"
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
    "url": "assets/js/39.ec6be220.js",
    "revision": "62ee7bc16a8c89b5c8f91e09ee293a24"
  },
  {
    "url": "assets/js/4.bd672547.js",
    "revision": "fc783d1b47c09d8c9c01f710f020a81e"
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
    "url": "assets/js/42.918a453c.js",
    "revision": "5645c31fdf3bbc49ede9464c4426f51a"
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
    "url": "assets/js/5.99186918.js",
    "revision": "ae88a6cc2c04672f30c956485eff48f5"
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
    "url": "assets/js/56.3e5b5d69.js",
    "revision": "af1f5fcbb228aa6435ed02e0b0edd532"
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
    "url": "assets/js/61.c2418aab.js",
    "revision": "6767c8ad3e9c641f663323958401671b"
  },
  {
    "url": "assets/js/62.d1a9f315.js",
    "revision": "0a981e2f873f1dde0e3cb2ea410ffc92"
  },
  {
    "url": "assets/js/63.faf654f5.js",
    "revision": "44c5e9bdad57020ff7131cbffaa7047d"
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
    "url": "assets/js/app.cb6a0e53.js",
    "revision": "e9c795ee6546bfb1af3a8955814b2bd2"
  },
  {
    "url": "assets/js/vendors~docsearch.6cb0424f.js",
    "revision": "f17c04b1a1bf5bb9d33ef04fc7ce56cf"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "e283ed8c6ec83b035a316b34a7787aae"
  },
  {
    "url": "index.html",
    "revision": "fed86882c3e1e3d4db443425c5572d71"
  },
  {
    "url": "rules.html",
    "revision": "9085ae627032998d7750fa1c7b74b395"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "c5b9a4246559c58195907b574eba2910"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "12881becd3669e4c2d96c90efd2674af"
  },
  {
    "url": "rules/boolean-value.html",
    "revision": "a3f33e9828e9f24d0403db172ee01087"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "44255be92aac6ff07b5e14ca922ac44d"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "70335f6759eb020fa20ef6678a1eb327"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "13a5cfa4f55cb1bd9a3c11bdbda33757"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "d2b42e2c399d69b4587e77f79111da60"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "110340458859fdcae5aabd81ff2b966a"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "9067f81fc11a3c43d8302210906f67a9"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "cce9fc6f034506b666fc82e67dabf004"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "bcd1dd4df9eafae4c148833bd2848197"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "28f982449ccb196f1b16d754eafc0feb"
  },
  {
    "url": "rules/index.html",
    "revision": "7f187359b642527af8f6afe80cbe0371"
  },
  {
    "url": "rules/initdata-in-component.html",
    "revision": "f9ede409fb7caa44bbce7973f3b37085"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "b8fcc317b09ab270faf59eb7da307ddf"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "11483a1bd7e00da9fc7ba33d374defdc"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "5e34be7b6b6fecdbb413283242228517"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "e2138479f84b42125134a27a3092d536"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "1ba5fa0030babaee5b8ea27e54ca7d7f"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "6230bd1efa854c5921775f1a5f82d97c"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "77d837905287447fa022c60e56990ee0"
  },
  {
    "url": "rules/no-expression-in-template-literals.html",
    "revision": "fd202f1989f9927c2a677fbb35450525"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "8c4b7c1025c5a743567df51f3c494f8b"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "3128a26a640e67b63f2c375705155b7c"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "331a9998691f094e222f895958de5f7a"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "25815b9a6de363fa50f0229636563b80"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "ee8d26aea445ef5c56f28d635fffd031"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "db61eac40da09d277d7fcb4a2865edc7"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "663278aa26efedf0e815b1672c461f17"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "5a902f08ad99c5e2f83fb95addbd5965"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "cd83dacc609d941e3f56c7b270ff877b"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "d7f31ef03588474d2e6dbc007ad640dd"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "59d166f126b77d15706e0539b3afb750"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "5eee97848ce112d6a419b3a281d4322c"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "d919ec63615a0de4ac3ee84f3fd4d851"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "2225c68c5cc6edc29d6117716754a48d"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "adff4938574228f16874714a3c69fa76"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "c82c15c1bed2270f537ba1cb00d31019"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "92bcbd7343bbf901567ec771dd8f4012"
  },
  {
    "url": "rules/valid-components-name.html",
    "revision": "38d3cc7d0ee3a64b7d1e41f0bac28771"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "a107ba412489b8e1b5592cc6d78670ec"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "e8b522359d8c74c38dcd5f6e4a7a871a"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "84ac36658066d6cc9333a2996df5972c"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "0d0334092555b8339a41b842c56eaef5"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "31201ee6b1e7b64b1e8b51ab42e220c4"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "a9105dd7a1383d4767a4044a53e0e41c"
  },
  {
    "url": "style-guide/index.html",
    "revision": "97b384ea7666a72f1d06d13394e78e05"
  },
  {
    "url": "user-guide/index.html",
    "revision": "b6370cd79695a020775c3290f36a5ea2"
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
