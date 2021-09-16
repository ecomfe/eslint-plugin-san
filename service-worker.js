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
    "revision": "537a1362533c453cbf0a15048c67adb1"
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
    "url": "assets/js/10.3c1ebb76.js",
    "revision": "9b0f30c191ccc6b78f8f2215dcccdc91"
  },
  {
    "url": "assets/js/12.22271fdd.js",
    "revision": "22c61e2354ace03afc0fd8027b980e28"
  },
  {
    "url": "assets/js/13.c5e61847.js",
    "revision": "c508e1e8ec4f0302fa1f63a7a6c1a447"
  },
  {
    "url": "assets/js/14.bf16407f.js",
    "revision": "b186481b4ed4a7d362d28816cf4a7c32"
  },
  {
    "url": "assets/js/15.807033fe.js",
    "revision": "e44169071e2bc0284bfe86457fc7fdf2"
  },
  {
    "url": "assets/js/16.742ba4b8.js",
    "revision": "1e5fa9c6ce9087df4ab50b8c6dc37ead"
  },
  {
    "url": "assets/js/17.5a17e4e4.js",
    "revision": "d0b83ae38ce8b2cbfacdf49594efcbbc"
  },
  {
    "url": "assets/js/18.fcdfc48e.js",
    "revision": "df221243322b625a6cb211927ce02b48"
  },
  {
    "url": "assets/js/19.a84df056.js",
    "revision": "be4e5561b77b0465fef5f01a7efb18a6"
  },
  {
    "url": "assets/js/20.80cb0a73.js",
    "revision": "d0425da481cfe83ca02acc7b118ddf46"
  },
  {
    "url": "assets/js/21.53702c32.js",
    "revision": "78d9a815a7548a082981ca73c200e542"
  },
  {
    "url": "assets/js/22.35aca26c.js",
    "revision": "5a0b3dd95a92f2615004318f01b094ab"
  },
  {
    "url": "assets/js/23.18a3e1e7.js",
    "revision": "f1f36793399e10a992f7583660fc60f9"
  },
  {
    "url": "assets/js/24.866e99ea.js",
    "revision": "233ee4e9e0dbbbd0fe19f7ceef28e95a"
  },
  {
    "url": "assets/js/25.56a6f42f.js",
    "revision": "ab34143ac862cae9847781036fb37c25"
  },
  {
    "url": "assets/js/26.38c8e9ca.js",
    "revision": "ada604d13aac2d94f93c57bb43d90ad1"
  },
  {
    "url": "assets/js/27.1c2db764.js",
    "revision": "d5e218ff4af1a6073e7d6a31f2573b3f"
  },
  {
    "url": "assets/js/28.39d0010a.js",
    "revision": "5027c02424b57e10902d3c2408d009d7"
  },
  {
    "url": "assets/js/29.0f6ba22f.js",
    "revision": "816ebd689efbba07df30b063607c7597"
  },
  {
    "url": "assets/js/3.8d0660b4.js",
    "revision": "b8f2733df8de56f502c82ce2e2c8b255"
  },
  {
    "url": "assets/js/30.3e926b73.js",
    "revision": "edc5f204c36d69dca60e7c6504e1719a"
  },
  {
    "url": "assets/js/31.b46efcec.js",
    "revision": "4a3f5a926ac65bc0ea358e5188ab1f0c"
  },
  {
    "url": "assets/js/32.5be08332.js",
    "revision": "f343a7f7f127a189244059f9280dc3b1"
  },
  {
    "url": "assets/js/33.e7720a1f.js",
    "revision": "697018b0d0f4c1e5947ea6c895ac7988"
  },
  {
    "url": "assets/js/34.dd1422cb.js",
    "revision": "5f6dd3a455d77b2da1f7a09feebd13a0"
  },
  {
    "url": "assets/js/35.ac5ba560.js",
    "revision": "b40ca9532d5fa15d7ddce37247dece72"
  },
  {
    "url": "assets/js/36.4991d544.js",
    "revision": "ec33cfc3cc62b15735477fa5d6c29377"
  },
  {
    "url": "assets/js/37.61107fcb.js",
    "revision": "2f27042efda492e412e49d1aff6eb92d"
  },
  {
    "url": "assets/js/38.a8792cd8.js",
    "revision": "2a2d160fdc683775879c5542bf2bb75a"
  },
  {
    "url": "assets/js/39.fe4e9f5f.js",
    "revision": "324c0e3a121fa36e16e891164a356277"
  },
  {
    "url": "assets/js/4.bd71937f.js",
    "revision": "66b0b92bf6c7aa445a654db1b814d2ba"
  },
  {
    "url": "assets/js/40.766a09cf.js",
    "revision": "cea91012eb85bbc2f038c19fd9805fcc"
  },
  {
    "url": "assets/js/41.6e8ed884.js",
    "revision": "70bd7534191653e079bb1977a3af1809"
  },
  {
    "url": "assets/js/42.3121027f.js",
    "revision": "2ff7d5041f15e02aaaead304434420d1"
  },
  {
    "url": "assets/js/43.0433be74.js",
    "revision": "f5a1dc5aff8e8a7407c86c4a6d553ac5"
  },
  {
    "url": "assets/js/44.9c40d4e9.js",
    "revision": "e24c3bf9d88be51dd81008df405fc349"
  },
  {
    "url": "assets/js/45.6f9085c9.js",
    "revision": "b63cda7718cda8b2f5dd4b508fe31381"
  },
  {
    "url": "assets/js/46.6a095235.js",
    "revision": "a9377ed8a132b90ee9a3e1d4efd4e8d7"
  },
  {
    "url": "assets/js/47.8370a240.js",
    "revision": "1d1a555470e7297ab22ae658f52b0a08"
  },
  {
    "url": "assets/js/48.aad1a08f.js",
    "revision": "b6e5e9dbbcaadd10edf4b025e78cd108"
  },
  {
    "url": "assets/js/49.c0bfe820.js",
    "revision": "07a58fe91a7aa7fff9fe65f8ee883bfc"
  },
  {
    "url": "assets/js/5.23dac7ec.js",
    "revision": "967eb5014f08eb8b2c2a92fa4bb7b7a8"
  },
  {
    "url": "assets/js/50.c8242206.js",
    "revision": "53eadc6a0d22acd5316ca35d418e3592"
  },
  {
    "url": "assets/js/51.5027db82.js",
    "revision": "83b01feb399f561fc46911e48a629863"
  },
  {
    "url": "assets/js/52.8b873355.js",
    "revision": "21396a116e0ee53720830b3b601d7f08"
  },
  {
    "url": "assets/js/53.47bfddc8.js",
    "revision": "2f272ab9e3822343f8738b80101c0ad3"
  },
  {
    "url": "assets/js/54.38d29709.js",
    "revision": "3c7eb28e4f5502da87f33f041ef601f9"
  },
  {
    "url": "assets/js/55.5dcf908a.js",
    "revision": "4b6f7149026e11a5aa7a2d80855c7182"
  },
  {
    "url": "assets/js/56.a1663ab6.js",
    "revision": "bd8843b550fec1b90c561515f6d2e3ce"
  },
  {
    "url": "assets/js/57.6780afed.js",
    "revision": "f0612ab8cf25238b1f09e77eedf32cca"
  },
  {
    "url": "assets/js/58.1f2c5ab9.js",
    "revision": "4c8a36f1b301244969ec6eab1703fd0c"
  },
  {
    "url": "assets/js/59.83a220d5.js",
    "revision": "4888794c54a4ed4b5e0cd86fb49be263"
  },
  {
    "url": "assets/js/6.f119cea1.js",
    "revision": "730065566952add23316c9d0e37ae7e9"
  },
  {
    "url": "assets/js/60.2884c468.js",
    "revision": "480979bfc70060cdfc989b893d017c5a"
  },
  {
    "url": "assets/js/61.45dcefd8.js",
    "revision": "a4452b23592b4327e70663d1efc62192"
  },
  {
    "url": "assets/js/62.f3a386b6.js",
    "revision": "440f588178bc0add35e732a750143eef"
  },
  {
    "url": "assets/js/63.eb8d2f88.js",
    "revision": "639e459e219362cf4ea2c6ad8d20a4f3"
  },
  {
    "url": "assets/js/64.89942e35.js",
    "revision": "fb2ccee9a0588abc25e32c791d4391e3"
  },
  {
    "url": "assets/js/65.cfcbb7e8.js",
    "revision": "4268370b25a99c43fe5d1fefd3d8b6ef"
  },
  {
    "url": "assets/js/66.55a4a709.js",
    "revision": "fd746d41267534745fa57f17959200b9"
  },
  {
    "url": "assets/js/67.11e6b219.js",
    "revision": "765e53561521bc6efcd6b8cba6eae53e"
  },
  {
    "url": "assets/js/68.8f20be20.js",
    "revision": "3e44b49366eb88dab7a322e308a85b71"
  },
  {
    "url": "assets/js/69.95252051.js",
    "revision": "f9ff62230e5647faa319c703da0be50e"
  },
  {
    "url": "assets/js/7.cf76eafc.js",
    "revision": "58c9f148bd62a77df72c341839beb0d6"
  },
  {
    "url": "assets/js/70.c4e90c31.js",
    "revision": "dfd44a9a9e6bb9726b6f7274675072d3"
  },
  {
    "url": "assets/js/71.c45ca823.js",
    "revision": "2a6d7ff580a8ddcd370f9ef3f380fcf5"
  },
  {
    "url": "assets/js/72.49154ee1.js",
    "revision": "e475baa89c622c4986dbecc8810ef9f1"
  },
  {
    "url": "assets/js/73.784cf8e6.js",
    "revision": "a997334df6b7c0eae5cfc8840911dd03"
  },
  {
    "url": "assets/js/74.e6b54aba.js",
    "revision": "a9e02cdde6059e99536a6548b8c92ee6"
  },
  {
    "url": "assets/js/75.b285d1ca.js",
    "revision": "ee9ef002bb33ba77ebb5ef7c0503e9d2"
  },
  {
    "url": "assets/js/76.09c296e0.js",
    "revision": "443fb1d69369b01bf2bd0d0e53bbe1cf"
  },
  {
    "url": "assets/js/78.77c99637.js",
    "revision": "5da6a3b8599741a9ba1baf30de09d331"
  },
  {
    "url": "assets/js/79.40a45e0e.js",
    "revision": "ed193159d2dcae7401f58f661c33e908"
  },
  {
    "url": "assets/js/8.90394974.js",
    "revision": "d2a5e0fa6bef0643ba0ca42a3870f7ce"
  },
  {
    "url": "assets/js/9.57dcc02c.js",
    "revision": "150b382fa8780efc07376ded07ac0856"
  },
  {
    "url": "assets/js/app.a2676ecd.js",
    "revision": "82ff44ea583a5c995f12fdcfd91e7e9b"
  },
  {
    "url": "assets/js/vendors~docsearch.46847213.js",
    "revision": "a6820c3d138967298b71c556309df6a4"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "7a6e9faf6dddfccdfc1570505a99ac32"
  },
  {
    "url": "index.html",
    "revision": "64e7edf5d786a6c25158d6ce9126a03d"
  },
  {
    "url": "rules.html",
    "revision": "25802782def1679f683cd34ec316a054"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "905973d5755ab0f78f38899edc04fcb3"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "29671de96c8d0698f9a76b272e56ab0c"
  },
  {
    "url": "rules/boolean-value.html",
    "revision": "247ea3c1b21c45dc369a59c69f2e1041"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "daf35894369bf72e08216d5e474d8ce2"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "8df7f77cbc536f9e493c8821c0ef302f"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "2337aa2bb971b0fcb2b027f0450ef4b3"
  },
  {
    "url": "rules/data-name-casing.html",
    "revision": "ef0977511ba1065a2b8576d7405b1fb8"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "07494085614c0033d4cb50ce81ca8fdd"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "5ce5e980f405937552a56bab721ff160"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "39ea1d278158db559574c4bd796a9536"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "eccd7f7f5f8c690bc83e5a132809bd42"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "df30ddc64de7d078ba12f245ba59acc9"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "ccf8d9e24fddca1aaa37d8e6ccf54f19"
  },
  {
    "url": "rules/index.html",
    "revision": "d7a2b61081556beddd9fb192025784fb"
  },
  {
    "url": "rules/initdata-in-component.html",
    "revision": "46dbc1cb8039f01a11766e3f753ba54e"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "0126d712e74f9c964e37692aad4fa79e"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "21f93d06f0050998581a3e03bc3282d9"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "7f4e729c0d3992f5a9c0ceb2f75564bd"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "ba91e4a15de3a4a1ef1568672020ecfb"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "814c58f5ff8c0b74c599f6b1c13d98ee"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "4f8a052daf035fd264693222a48c3ad6"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "5f7549e5ebb05748e1c506e5da45ace0"
  },
  {
    "url": "rules/no-empty-attributes.html",
    "revision": "da2a13f602210f12d5325ca3fdc59ed7"
  },
  {
    "url": "rules/no-expression-in-template-literals.html",
    "revision": "4cfcff830618f35630ca14987a4d0d04"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "41090537ff4deba81e8fc96e4f2efbdc"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "ef6c677daa9bfabe46a18590947d39c0"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "00212951c24340264d5046eae2ddae9c"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "1ccfe649e86d2c17b08c90031d13e905"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "d3ed70fdde5e9e520dd14c668828420d"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "48b47d5d306cb1ec11a721cbfd090f0f"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "25e24035f5364658ed20366b76c5e863"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "73558b0127633a068e5f5918be11d332"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "430405d06c97e29bf4c174c2c81f13e5"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "739dc3697f0767cb0b913321776ea4a6"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "0f13879ad34913ec818b1f23a983f4a7"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "466f2cebb756a3755b21389ac59308cc"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "c5e71d41536956012f69705009c63a1c"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "8fb8b72b479381ac3fb9331bb7c53a5f"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "5fb27fbc46d3152f8bfb692a8514b90c"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "ae87e529c09debb096464846eb815b06"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "f7cb58f56a9fd41bb3e1a894f99c7d76"
  },
  {
    "url": "rules/valid-components-name.html",
    "revision": "3144d7ba7641b784bc77342a175754ec"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "3de45431bc99e9238363774771d9d7cd"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "eecf6ff8c678e4a04ac3d58955c50b65"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "f701c7de65d25bf24cb7ac25bcdb0db1"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "ed0289843d33695b9662019af2e8f493"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "f55562cd66c4234bfda602aa37487d16"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "3473150dc745113b90b11d4655c0d5f5"
  },
  {
    "url": "style-guide/index.html",
    "revision": "40a329466ac32757822d7c83244ddaed"
  },
  {
    "url": "user-guide/index.html",
    "revision": "0d2671486863f8055cd68d8dfb33d34a"
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
