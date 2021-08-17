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
    "revision": "41de7437225a53a99ff44271d342518b"
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
    "url": "assets/js/27.fac74bd6.js",
    "revision": "90aa1df90581eb2238886aa4690b6006"
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
    "url": "assets/js/4.50ddf03b.js",
    "revision": "0a25cfd99d78b337ce8cfed83e23d9af"
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
    "url": "assets/js/42.8326ff84.js",
    "revision": "59b3a85691ae59955751a27a3ea6c4f4"
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
    "url": "assets/js/5.e63824bc.js",
    "revision": "c3c651b03368d8897db882186c05341a"
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
    "url": "assets/js/app.d0cb06b9.js",
    "revision": "0b6d41da4115efef8e9d3ad29167c7f6"
  },
  {
    "url": "assets/js/vendors~docsearch.6cb0424f.js",
    "revision": "f17c04b1a1bf5bb9d33ef04fc7ce56cf"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "acd4f0b33c78b534996b6c164d314d00"
  },
  {
    "url": "index.html",
    "revision": "524cd339072906036502bf468aca7a81"
  },
  {
    "url": "rules.html",
    "revision": "0b8e301ad0d448f3d395031ae878fd06"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "1944ba759426ae4a27924d83c1a39393"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "aedbb903872aa47364e853a0dd26da83"
  },
  {
    "url": "rules/boolean-value.html",
    "revision": "9fcda893e4d387b44a5050838012b158"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "e6d289984ef30abf6b42f77e8c056e3c"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "6f61e9bd213425da21ddcfb35e6387bd"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "4ede903bc46015420f96d763b15f2d96"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "00ea72f45c0a3ab3595ff79768ebdac8"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "e7d404d218c3f10a80728fa9090b4b1f"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "de38fee7af691b843102f7233a3c2dd2"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "2d46e0f93f545fea5fb894981f4a1dae"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "ce045ed1fa87828705bddf1e4aecc196"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "37e996e40234ec5c8184985079c48635"
  },
  {
    "url": "rules/index.html",
    "revision": "5c68e2bc5a31b272170ae8ad7ccd79e8"
  },
  {
    "url": "rules/initdata-in-component.html",
    "revision": "31a740e17f37d602ead93425069ec329"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "536ff5460a8aac142f99106a6111a117"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "a67975fee4aee4fd6ca51ad5f060ea78"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "5a9763365e0ac7279c77156f3bc94249"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "076b45c9a98bec45422258065abd5e1e"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "7100ca3df11be40de844a9ff8547403d"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "3325265134e53a4802dc6e49d7a543fc"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "7f9c39566f152eef675dd61f98f5ade7"
  },
  {
    "url": "rules/no-expression-in-template-literals.html",
    "revision": "d6d05c2f4b2228471776bb3bebc22c9e"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "a0385e7814ed9219774fc5a9ddb73ee0"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "147317d0bcf7f6dd1529955266fc7ad9"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "dbe9a8bdcc41a73437256aecfda67679"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "1fdb1395258d2ff9c37cf094a0f047a9"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "81179273c4d58a04ccdcc09c8416d1a4"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "5d13f12eca1b4ef1e54a2436ebca0651"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "02a9805e81dc24cfe9b9f53dc7a1dd19"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "d0d9f2372e57cdc25c9a19cade3e87fd"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "b66efd8a2dd5460cf4ab45d16a874281"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "d7973a5526613c2708048cdf9a4fa7e6"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "2120627686c4bc3cec4b460021c8a5fe"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "a40ff33122efa773634f7153a7f8404d"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "7a6008a1f779178e44d29b7b6d21017b"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "c9bfb31b9a2b4afcad71613a661706d3"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "9d04283caad8267cea787734194df70c"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "2801c021c32faf307f86abc4e7254e36"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "f515a5559ba3494a8df61b1c936f17d8"
  },
  {
    "url": "rules/valid-components-name.html",
    "revision": "5b867587edbaee1b9924ee822f28f061"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "f01d3455bd00a980eef5a07173b3e042"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "6cb876102e00af1564bff89cce4fc65b"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "b4b2bf23ed243526debc7cd3a416061c"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "d3bef8ff7cd1d37837652acb6207e24c"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "506d8d9e92048a8ba03bf49d67d8d8ba"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "fe1151387152a0150dbb4b9b5bf82555"
  },
  {
    "url": "style-guide/index.html",
    "revision": "6ebb69a96f110319e4f140e25c4b5460"
  },
  {
    "url": "user-guide/index.html",
    "revision": "a0808f4694b7a969f46c437e2038e2d8"
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
