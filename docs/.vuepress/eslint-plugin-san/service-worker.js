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
    "revision": "75c6d4653ed3f38c17b9b621ea43c442"
  },
  {
    "url": "assets/css/0.styles.aa722828.css",
    "revision": "7daebb0233bd3999b8c74e34827a974d"
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
    "url": "assets/js/10.12f3bb0a.js",
    "revision": "4e533221b34482ea82ffe45c149fd7a8"
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
    "url": "assets/js/15.44c3d1f1.js",
    "revision": "eea1e2ed90d8640fe87de882834f414d"
  },
  {
    "url": "assets/js/16.2b5e5626.js",
    "revision": "4591181a17ae5ab4126ed79badb575e4"
  },
  {
    "url": "assets/js/17.53c56bcd.js",
    "revision": "a42378335183117f94417a90df574bea"
  },
  {
    "url": "assets/js/18.da728251.js",
    "revision": "a5258ced59c52e18d5b420acb04f1fc8"
  },
  {
    "url": "assets/js/19.d579faad.js",
    "revision": "11a0280dd1169f903613284f4782cfab"
  },
  {
    "url": "assets/js/20.be52fd16.js",
    "revision": "50b403fd4509674dcb0c509540e08688"
  },
  {
    "url": "assets/js/21.de1da3fe.js",
    "revision": "c24bceeb03129a18ff3613f53fd47363"
  },
  {
    "url": "assets/js/22.c133a36f.js",
    "revision": "fd071fd48496b415bd6d6fa05f5755f8"
  },
  {
    "url": "assets/js/23.48166bd7.js",
    "revision": "123ca3b8e566c0a1182251ae9803cac9"
  },
  {
    "url": "assets/js/24.0a744c99.js",
    "revision": "d4a6de233bd4789d15f30fe333346032"
  },
  {
    "url": "assets/js/25.45d630a9.js",
    "revision": "577f270f99f34f40e253ad4920e1a7c6"
  },
  {
    "url": "assets/js/26.12a86212.js",
    "revision": "111125439f79ed870a583ad1034a3f2f"
  },
  {
    "url": "assets/js/27.c64c82c4.js",
    "revision": "0a8104089eff24e2311c134da96f29bc"
  },
  {
    "url": "assets/js/28.b9d1d772.js",
    "revision": "acf09ef2cb332068795a42b16f4946fc"
  },
  {
    "url": "assets/js/29.547a01c0.js",
    "revision": "bf3d7cf9ab07b3fa03a0150785a6a83b"
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
    "url": "assets/js/31.6b0f3c30.js",
    "revision": "1ef90e037743356c90bbda322001e1d9"
  },
  {
    "url": "assets/js/32.ebd16cfb.js",
    "revision": "6ab793af7931507fa1a1cacfa4354055"
  },
  {
    "url": "assets/js/33.3744dc2b.js",
    "revision": "390f8c823b3da90edd82af5e3cd4630a"
  },
  {
    "url": "assets/js/34.b19b6f91.js",
    "revision": "7125419950e65503bf6055806b40cda0"
  },
  {
    "url": "assets/js/35.dddddf52.js",
    "revision": "b1ae4ad881efe7102471969898fd3bf2"
  },
  {
    "url": "assets/js/36.f61dd2f7.js",
    "revision": "442e433c305d8a00b242c85fc98b1ee4"
  },
  {
    "url": "assets/js/37.edd51a89.js",
    "revision": "4339f5cf63bccce6ee90b0b2f92d7ae7"
  },
  {
    "url": "assets/js/38.ef9a394e.js",
    "revision": "b73054778394a6d9b50f3cff0f2490e1"
  },
  {
    "url": "assets/js/39.e5e02bfe.js",
    "revision": "1e68c0776ecdffaf4a4dfdd372d58bf4"
  },
  {
    "url": "assets/js/4.ed80d49d.js",
    "revision": "237243005318c1ac63c98b98b677b45b"
  },
  {
    "url": "assets/js/40.bd6fd372.js",
    "revision": "10cc47c341015ff872585d5a48de4aeb"
  },
  {
    "url": "assets/js/41.f89378b8.js",
    "revision": "8c2493dbaeffd9c47c9e056c27cf306a"
  },
  {
    "url": "assets/js/42.6d42eff9.js",
    "revision": "e125427622f152fa377d0698565d392d"
  },
  {
    "url": "assets/js/43.63535bbd.js",
    "revision": "263a1b36534d1a2ad3bf83c8f6110a4e"
  },
  {
    "url": "assets/js/44.f449a9fd.js",
    "revision": "ca913d82f3e9ca0333e2cdcc5c31499a"
  },
  {
    "url": "assets/js/45.4d7e36b9.js",
    "revision": "5bf3fe9150d003a3c96b09b0219b7e96"
  },
  {
    "url": "assets/js/46.018bc49d.js",
    "revision": "b1b5ca900b3a66d4d5b05bcdbbb6421a"
  },
  {
    "url": "assets/js/47.cd8478f7.js",
    "revision": "4a579a3de19ac82f1314b01aab2d181d"
  },
  {
    "url": "assets/js/48.f321754d.js",
    "revision": "96ff8bd4def31b80c2f2318ba8989273"
  },
  {
    "url": "assets/js/49.c4059eb5.js",
    "revision": "9629a4d8d415a6ff9e2ee0698a1f7796"
  },
  {
    "url": "assets/js/5.9325c5df.js",
    "revision": "b622b06e043313a47db563251ba4d411"
  },
  {
    "url": "assets/js/50.0a6cd9ef.js",
    "revision": "296aee3fd9beb986ac351d6aa1be5743"
  },
  {
    "url": "assets/js/51.50a116d7.js",
    "revision": "e46e02fb1211ce270d2eb22644f0f965"
  },
  {
    "url": "assets/js/52.0fb8a79d.js",
    "revision": "155db66e08510825ab9e81fe4ce18b5b"
  },
  {
    "url": "assets/js/53.f2b02ca6.js",
    "revision": "fc38236b5d9f33ce138df9b387f7c2ef"
  },
  {
    "url": "assets/js/54.e160a4dd.js",
    "revision": "35f5edd672c0a0b10a6a60190a423147"
  },
  {
    "url": "assets/js/55.2a616d02.js",
    "revision": "b269616b324e8f8ebac3b0de1acc9b0f"
  },
  {
    "url": "assets/js/56.e242fd59.js",
    "revision": "9758889ac6e3d5d209b775db86df224a"
  },
  {
    "url": "assets/js/57.e9c79e67.js",
    "revision": "1f85c17cb2af3bc214bede30236ebec1"
  },
  {
    "url": "assets/js/58.c176e7ca.js",
    "revision": "b90247206e9807f17ab5196b49f4716b"
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
    "url": "assets/js/61.6fff2c19.js",
    "revision": "ac6b5e9247730744cf9e803b3f527620"
  },
  {
    "url": "assets/js/62.f000b752.js",
    "revision": "2060b5593431610f8154f46643198052"
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
    "url": "assets/js/9.8f34ee0c.js",
    "revision": "71d4e987a45d5464b1a3dc2940f7ca6e"
  },
  {
    "url": "assets/js/app.a7856ec8.js",
    "revision": "77465ee741ef10ddcdd08a24a2bb8d47"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "589db1fed4e6e7fdc87725be0d707870"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "index.html",
    "revision": "b9c371dd9066b5a58a2490efc7e6e187"
  },
  {
    "url": "rules.html",
    "revision": "3bf3bb0f935a95b8d133c226253c7dc7"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "56340f03feb04e6a65e79fb710202407"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "29f01d21fd4dccfb874380b047bcf1b4"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "c7b25c0ad80eefbdeb76e65e89976d15"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "d6793c6a6c52bc52f298267a59c16921"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "f8fed446db9b7115aaf10f7b5e8e89ac"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "de0dab7135d78f2130c981e4b7233681"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "91100375f414eb62bb93b8b305aac8b4"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "f18ed1362fed4f630f7f2b3865a4b1bd"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "85b38329ff8f87b1c962c3b970b161a5"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "55de81f13a2ebbdd801e1b5b7480bdc6"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "1f5236f99f1dbe8b9fe2fd8c7a8fd746"
  },
  {
    "url": "rules/index.html",
    "revision": "0883ca38920777dd0551ff5b901ed721"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "09ccd507308559f3a16ae371a0c464cd"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "7887ed910456c34fd5a4bf5a1f1a3b6a"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "0bf31338aa2d1b8569c672f97b9f3193"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "a7bf0d5bbb0d0ac68cb31733b0117b49"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "95e98252a190d7fe852da768bb343d43"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "b0130fb5f04c5490ed34e08397edf579"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "61ff38e5695f55608cf1f297a02a1fba"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "1ce411c148a0cff4189c6ee2cf555af0"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "2bdf4715e3eb32717d076a1534b428a6"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "c3c93bebc038698598e90d0e376683c6"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "0ca7f6bbd5b959e2c9d02fb54dab8bcb"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "209ebee2c28b2eb34bc99f3ec33377a9"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "d34c97fc3fcfa7b87d0cbc1efd443b0e"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "276359569dfb10bf88f9b2195dbab983"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "041b798c4eccaf8d6d9ec9501530c987"
  },
  {
    "url": "rules/no-template-key.html",
    "revision": "0c69aca539415de427820744869505da"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "4ba562dba6c65ccb34ac487290ceaf59"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "2c17d2c76bbb07cb8ba5cbd9d61ea869"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "517e5ac31de5388a84ad56348731bf12"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "05e032066d9bb784a44384a84df77cb3"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "8e1bc6c3db91c2252fe30e58d4a1e689"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "69a95948ef59fbea2064d8c98f635d83"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "1e35bc8a102ee78493a28fda6e5d2762"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "5b6bd0909aea69462f8bedd52d12f37c"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "249bdc9feebe20602b50d267535b4465"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "f830d36b495f98656f95cb220a8960ee"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "eca78d065537c119d55bd593793a2c8d"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "be7504515c12fbf78902fddfa0244aba"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "f15e47d32f34b2132753946a272677d1"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "8b343d6f2e32664da121b6d880d30dd9"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "1a3850ffd736fd7e42ce1ec09a5360af"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "0ab970957d082c5ae5ab93189374d6b8"
  },
  {
    "url": "style-guide/index.html",
    "revision": "26091c0e4ac265285f6311668f79762e"
  },
  {
    "url": "user-guide/index.html",
    "revision": "beec0d43785a99770685845e240dc8cf"
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
