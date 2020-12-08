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
    "revision": "230fd8e115e87ed89c9992b482f49da5"
  },
  {
    "url": "assets/css/0.styles.8a01b31f.css",
    "revision": "1f002396b9855d7fdfa85625d3ed5cc3"
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
    "url": "assets/js/10.933bffcc.js",
    "revision": "a986cd3cf5454310c3ae2148170d1f47"
  },
  {
    "url": "assets/js/12.84d06b61.js",
    "revision": "b8192e6b3a9185c3c288bc7311cfebef"
  },
  {
    "url": "assets/js/13.4133758d.js",
    "revision": "15fd733af627e2022af8f643e014b9d6"
  },
  {
    "url": "assets/js/14.b8cdcf84.js",
    "revision": "30f1ec2f4d9d12b7938a2067f7657bb9"
  },
  {
    "url": "assets/js/15.d7485d0b.js",
    "revision": "ba6332a15ed17091a0e8a111e835c1d2"
  },
  {
    "url": "assets/js/16.fb0ec86e.js",
    "revision": "f676cea2fece2a8470fb44a56623ebd9"
  },
  {
    "url": "assets/js/17.53c56bcd.js",
    "revision": "a42378335183117f94417a90df574bea"
  },
  {
    "url": "assets/js/18.d1ca097b.js",
    "revision": "4a0e32c1090e8e45c3d5a421e590afef"
  },
  {
    "url": "assets/js/19.85fd2bb7.js",
    "revision": "ed53b636b040ac4246b2469f62315f7a"
  },
  {
    "url": "assets/js/20.3394d1bf.js",
    "revision": "97ea1131743d7399e6d76c91443ab6d0"
  },
  {
    "url": "assets/js/21.de1da3fe.js",
    "revision": "c24bceeb03129a18ff3613f53fd47363"
  },
  {
    "url": "assets/js/22.85fe4bfb.js",
    "revision": "6b5ed34a13288eb528b70948e7880f8b"
  },
  {
    "url": "assets/js/23.8473b6a6.js",
    "revision": "13d67f1ff4bd830ce437d36fac6bf776"
  },
  {
    "url": "assets/js/24.6cfb18a0.js",
    "revision": "a96f5ff265e314f3ccbdff46003a839e"
  },
  {
    "url": "assets/js/25.48bfef10.js",
    "revision": "a0a369c6fd152f8ac2c4a71c6cc3c75b"
  },
  {
    "url": "assets/js/26.c9b00f15.js",
    "revision": "057de3efc775edc309422875fbfab45a"
  },
  {
    "url": "assets/js/27.8f909505.js",
    "revision": "1bd5f98189d24732564e004d83ceeee9"
  },
  {
    "url": "assets/js/28.8b861308.js",
    "revision": "e0ec7b6f9687a256a4f2d99869e7c287"
  },
  {
    "url": "assets/js/29.3ab0e0a8.js",
    "revision": "1577f8d5631d7c3abf3b7ba86b005718"
  },
  {
    "url": "assets/js/3.5570798b.js",
    "revision": "3f77f92ca8c1b876b80193de64049d19"
  },
  {
    "url": "assets/js/30.bff87f80.js",
    "revision": "fd6764b5ee73a37574b436dd62a3215e"
  },
  {
    "url": "assets/js/31.aa6b1cac.js",
    "revision": "9e1563b6b4894acc52fbf3fc728f9344"
  },
  {
    "url": "assets/js/32.befa6f4d.js",
    "revision": "69c5f145eb31e402c5f9a9ccd03797e0"
  },
  {
    "url": "assets/js/33.59a266df.js",
    "revision": "340b068f29874189c7517fa67fba9934"
  },
  {
    "url": "assets/js/34.8dfad6f3.js",
    "revision": "ef5cc4fef45cc6dfaad557b2ac838b11"
  },
  {
    "url": "assets/js/35.dddddf52.js",
    "revision": "b1ae4ad881efe7102471969898fd3bf2"
  },
  {
    "url": "assets/js/36.517a646e.js",
    "revision": "295ca1f96ada8e7becf961878d6a26d7"
  },
  {
    "url": "assets/js/37.10e7af57.js",
    "revision": "31c5a4d5cdf78f0d6ab23d45e53adf5f"
  },
  {
    "url": "assets/js/38.85b11dd9.js",
    "revision": "1e6ec2b3817f3b2e08852aecee633971"
  },
  {
    "url": "assets/js/39.56b5520e.js",
    "revision": "3d87b41bf659f58603dfcf561a231ce5"
  },
  {
    "url": "assets/js/4.88148bf7.js",
    "revision": "68d7cd4113e75bde897deb6a6403bea4"
  },
  {
    "url": "assets/js/40.cab5407d.js",
    "revision": "4ad881f5b6166675f89dc2521b05cffd"
  },
  {
    "url": "assets/js/41.4b0f3945.js",
    "revision": "06b84f72d8e20f193ca232524abff45d"
  },
  {
    "url": "assets/js/42.6d42eff9.js",
    "revision": "e125427622f152fa377d0698565d392d"
  },
  {
    "url": "assets/js/43.f758e73b.js",
    "revision": "7ca55610e94cbad03c26cba5f8539c04"
  },
  {
    "url": "assets/js/44.32f92dde.js",
    "revision": "c9f3d4140d2755686249a369250b2d53"
  },
  {
    "url": "assets/js/45.8c1a0f78.js",
    "revision": "3a85472e42dae3b394d3eb4bef17ef09"
  },
  {
    "url": "assets/js/46.a5ffc6b9.js",
    "revision": "9f339b28387a1c82e39e84e13cc5e91d"
  },
  {
    "url": "assets/js/47.cd8478f7.js",
    "revision": "4a579a3de19ac82f1314b01aab2d181d"
  },
  {
    "url": "assets/js/48.8d44c801.js",
    "revision": "76aa36413ff13128dcfbe74c2fe8dd8d"
  },
  {
    "url": "assets/js/49.14fb2d24.js",
    "revision": "e6d7bc1c1963391daab61727b12bf478"
  },
  {
    "url": "assets/js/5.9325c5df.js",
    "revision": "b622b06e043313a47db563251ba4d411"
  },
  {
    "url": "assets/js/50.8f015175.js",
    "revision": "d35a493c0d87979bf161049ac8e7fc0d"
  },
  {
    "url": "assets/js/51.86f42787.js",
    "revision": "05c46378da138704671e935c3eb0629a"
  },
  {
    "url": "assets/js/52.991d0c8f.js",
    "revision": "83ccdcf23c55d4afa2945fa70e1f4e6d"
  },
  {
    "url": "assets/js/53.4c5f1e8e.js",
    "revision": "854821612c5c63b83a5b6b6174692031"
  },
  {
    "url": "assets/js/54.eccd34f7.js",
    "revision": "b357e8ebf8051b1ff5e97480f9771cf7"
  },
  {
    "url": "assets/js/55.49d4fc33.js",
    "revision": "dcb5945b69c43c4b559612e1884093e1"
  },
  {
    "url": "assets/js/56.4f8500b0.js",
    "revision": "76391363d46658eb73cbcbbd0129edc4"
  },
  {
    "url": "assets/js/57.5c5b92ca.js",
    "revision": "6e64fceebbfa8af5f932e0de68da689e"
  },
  {
    "url": "assets/js/58.e95d1f17.js",
    "revision": "a945682b38977de21b153a26143e6040"
  },
  {
    "url": "assets/js/59.162ca375.js",
    "revision": "e5c89004d780b646073b5fc34442eb6f"
  },
  {
    "url": "assets/js/6.0c748eda.js",
    "revision": "2923022236a1b2622b3c7ebfcf43cd12"
  },
  {
    "url": "assets/js/60.f5f77be5.js",
    "revision": "01c94aee31e85c4a62e3f06acf0842ec"
  },
  {
    "url": "assets/js/61.8ddb9afc.js",
    "revision": "5fd66af95cac6643c5b062d9e24bb0d0"
  },
  {
    "url": "assets/js/62.8679a585.js",
    "revision": "881a48fa10a9c29ff6ed582dfb3fb1b4"
  },
  {
    "url": "assets/js/63.f58b0129.js",
    "revision": "0fa2b29ef9f91dfc0a8989fca6de0870"
  },
  {
    "url": "assets/js/64.e68ba087.js",
    "revision": "e85880d6deb616e29289a20b9aa96487"
  },
  {
    "url": "assets/js/65.e57cac70.js",
    "revision": "9588c7f868b9ea277e48f2e696cbc9cc"
  },
  {
    "url": "assets/js/66.e3027b96.js",
    "revision": "4c414db18ee29c0da48c3a4644829951"
  },
  {
    "url": "assets/js/67.760f81ff.js",
    "revision": "05a1f4ffc48b926193ff740666784f01"
  },
  {
    "url": "assets/js/68.75ba70b4.js",
    "revision": "98c517548deb52d25749b1394ccf5b43"
  },
  {
    "url": "assets/js/69.1a450c7b.js",
    "revision": "c3f01b709aff2fbcc23a316f3ee74f42"
  },
  {
    "url": "assets/js/7.7bfff686.js",
    "revision": "4b4c832218521ed1e8693c9aa9bf432c"
  },
  {
    "url": "assets/js/70.3bad33f7.js",
    "revision": "72b59d444862318294ae175163e1259f"
  },
  {
    "url": "assets/js/71.8db9880b.js",
    "revision": "e64e6163497658a999049cd7ea24a395"
  },
  {
    "url": "assets/js/72.091e0625.js",
    "revision": "21896065224aad0ee21d51f23f9a1ff3"
  },
  {
    "url": "assets/js/74.96bb092f.js",
    "revision": "03ec646c3606c803eeaa4fa97feecf53"
  },
  {
    "url": "assets/js/75.772a0d62.js",
    "revision": "6a1a13b0bfaabcb698a73a3bbe20137b"
  },
  {
    "url": "assets/js/8.5e6ea160.js",
    "revision": "2546378778e39dbc46e6f8b3fc6c4595"
  },
  {
    "url": "assets/js/9.5fac5c2d.js",
    "revision": "99baa20100e7d55ca3052afcb899bb94"
  },
  {
    "url": "assets/js/app.8af090a8.js",
    "revision": "b885246424bd178490bace031769b3b6"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "dbc43127cbadb32600e70f597fce8b0e"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "index.html",
    "revision": "ed05bc119ec0da589254479ca7994fbc"
  },
  {
    "url": "rules.html",
    "revision": "6bb68485f64ad3cabfec7bb0672a933c"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "2d8402a4431932f392d5da2ae6f6cc92"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "7182382c9d1e9b9402a910e2cac81229"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "0b4f66a52202f60924863b187bcf91ff"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "002f3258e79b81ac712c3505029c82b5"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "5e2bae795a24a114c6b854f7755c44fc"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "041ab4299e5041e08611bb7bb7944443"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "d865dab9fde760a17a513a40931c0d8a"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "fd39715d3f70b1d278b5b10f8f26d2c6"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "5d376cdc3ac7c7eb508ef124e68d841c"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "04f1e9c1674e8b0a7d7e0ea7dc7861fe"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "99b88578b511d276034453cbeb5a53f2"
  },
  {
    "url": "rules/index.html",
    "revision": "7593f073c3750684d44e7ed87aaebda0"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "36d82064a12c95afaab6efb3096632dd"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "1e0541e49948913222adb6d6aa5d68d7"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "b2a73327af770f36ddd4cd8e63fae1cd"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "a45d91712310d91f3bf259d916e779b0"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "50aca82f611ef0b382230439f5b383bd"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "b85b012ba3c8755537d9b5feafb31b0f"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "82317a291fc90aa9ff7b61f69b119d8b"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "dcdea3e2098557c8445b991ab9d6b99c"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "e6f763e7438ae166def9975871e3ece0"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "d08ed2ca3a16040e96d9a6b89271279d"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "9a57a3e25acaefbaa4b8b5893b39f3ba"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "2c193c9dff029ba064601d11ecfe648a"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "b56a9f6031764024c65bbd31ffd8747b"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "846b660c6eb2de7f49299e486945cf5d"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "33a273b172a7d80d4f11b461040bfc31"
  },
  {
    "url": "rules/no-template-key.html",
    "revision": "33c8fd1bd8a7fc6010254f5754419f1f"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "0aac3bf5bed304407a63795f3225a99c"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "a9bb6eeb2cc5fca0d6609399b19b2426"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "3c8d5ed70a71af77a93b8d5c5634b702"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "91d13d07019cec9f93df053a71c21597"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "878b1b4ba3276157a668aa1ab2a64c3d"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "33d78c6963ff88c5769481d0580de13a"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "1bb6716317f34d3fc612dfb001f5c491"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "a87bfa71a0efda82109cff2cb2fc5804"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "05b954edfabf1f48296dc447e962e0e3"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "ef248e8f9102e8b7c2b8f181b4e47b96"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "3c9949d308f60a1bd77c81ef5b77183d"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "cc5b56812de5e3747d77ac730cbddc45"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "5e9f7544686aa7e3108a4914b92a4f97"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "e0c08ff5f36462a7dc7550fdb82a5cf6"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "259ad1f08639b28b18bdfaa6f4d41959"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "be7aea70c01dde372b32e627f8b49f7a"
  },
  {
    "url": "style-guide/index.html",
    "revision": "e3816daf2c2bf42a047c3c9b5c93ba2b"
  },
  {
    "url": "user-guide/index.html",
    "revision": "e3982fa6fe5e82a67118dca286e553aa"
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
