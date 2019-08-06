(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/search/search"],{

/***/ "../../../../../../DEV/HBuilder/fangqiubai/pages/search/search.vue":
/*!**********************************************************!*\
  !*** E:/DEV/HBuilder/fangqiubai/pages/search/search.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_1924873a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=1924873a& */ "../../../../../../DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=template&id=1924873a&");
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ "../../../../../../DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../smartdot-work/software/HBuilderX.2.0.1.20190614/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_1924873a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_1924873a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "DEV/HBuilder/fangqiubai/pages/search/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../../DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** E:/DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../smartdot-work/software/HBuilderX.2.0.1.20190614/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../smartdot-work/software/HBuilderX.2.0.1.20190614/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../smartdot-work/software/HBuilderX.2.0.1.20190614/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../smartdot-work/software/HBuilderX.2.0.1.20190614/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=script&lang=js&");
/* harmony import */ var _smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../../DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=template&id=1924873a&":
/*!*****************************************************************************************!*\
  !*** E:/DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=template&id=1924873a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_1924873a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../smartdot-work/software/HBuilderX.2.0.1.20190614/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../smartdot-work/software/HBuilderX.2.0.1.20190614/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../smartdot-work/software/HBuilderX.2.0.1.20190614/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../smartdot-work/software/HBuilderX.2.0.1.20190614/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./search.vue?vue&type=template&id=1924873a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=template&id=1924873a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_1924873a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_smartdot_work_software_HBuilderX_2_0_1_20190614_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_1924873a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../../DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!E:/DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var indexList = function indexList() {return __webpack_require__.e(/*! import() | components/index/index-list */ "components/index/index-list").then(__webpack_require__.bind(null, /*! ../../components/index/index-list.vue */ "../../../../../../DEV/HBuilder/fangqiubai/components/index/index-list.vue"));};var noThing = function noThing() {return __webpack_require__.e(/*! import() | components/common/no-thing */ "components/common/no-thing").then(__webpack_require__.bind(null, /*! ../../components/common/no-thing.vue */ "../../../../../../DEV/HBuilder/fangqiubai/components/common/no-thing.vue"));};var loadMore = function loadMore() {return __webpack_require__.e(/*! import() | components/common/load-more */ "components/common/load-more").then(__webpack_require__.bind(null, /*! ../../components/common/load-more.vue */ "../../../../../../DEV/HBuilder/fangqiubai/components/common/load-more.vue"));};var _default =


















{
  components: {
    indexList: indexList,
    noThing: noThing,
    loadMore: loadMore },

  data: function data() {
    return {
      issearch: false,
      loadtext: "上拉加载更多",
      list: [],
      searchText: "" };

  },
  // 监听页面触底事件
  onReachBottom: function onReachBottom() {
    this.loadmore();
  },
  // 监听下拉刷新事件
  onPullDownRefresh: function onPullDownRefresh() {
    this.getData();
    uni.stopPullDownRefresh();
  },
  methods: {
    getData: function getData() {var _this = this;
      // 后台请求传参 this.searchText
      uni.showLoading();
      setTimeout(function () {
        var arr = [
        {
          userpic: "../../static/demo/userpic/12.jpg",
          username: "昵称",
          isguanzhu: false,
          title: "我是标题",
          type: "img", // img:图文,video:视频
          titlepic: "../../static/demo/datapic/11.jpg",
          infonum: {
            index: 0, //0:没有操作，1:顶,2:踩；
            dingnum: 11,
            cainum: 11 },

          commentnum: 10,
          sharenum: 10 },

        {
          userpic: "../../static/demo/userpic/12.jpg",
          username: "昵称",
          isguanzhu: true,
          title: "我是标题",
          type: "video", // img:图文,video:视频
          titlepic: "../../static/demo/datapic/11.jpg",
          playnum: "20w",
          long: "2:47",
          infonum: {
            index: 1, //0:没有操作，1:顶,2:踩；
            dingnum: 11,
            cainum: 11 },

          commentnum: 10,
          sharenum: 10 }];


        _this.list = arr;
        uni.hideLoading();
        _this.issearch = true;
      }, 1000);
    },
    // 上拉加载
    loadmore: function loadmore() {var _this2 = this;
      if (this.loadtext != "上拉加载更多") {return;}
      // 修改状态
      this.loadtext = "加载中...";
      // 获取数据
      setTimeout(function () {
        //获取完成
        var obj = {
          userpic: "../../static/demo/userpic/12.jpg",
          username: "昵称",
          isguanzhu: false,
          title: "我是标题",
          type: "img", // img:图文,video:视频
          titlepic: "../../static/demo/datapic/11.jpg",
          infonum: {
            index: 0, //0:没有操作，1:顶,2:踩；
            dingnum: 11,
            cainum: 11 },

          commentnum: 10,
          sharenum: 10 };

        _this2.list.push(obj);
        _this2.loadtext = "上拉加载更多";
      }, 1000);
      // this.loadtext="没有更多数据了";
    } },

  //监听原生标题导航按钮点击事件
  onNavigationBarButtonTap: function onNavigationBarButtonTap(e) {
    if (e.index == 0) {
      uni.navigateBack({
        delta: 1 });

    }
  },
  //监听导航栏输入框文本变化
  onNavigationBarSearchInputChanged: function onNavigationBarSearchInputChanged(e) {
    console.log(e.text);
    if (e.text) {
      this.searchText = e.text;
      this.getData();
    }

  },
  //监听导航栏文本框用软键盘输入的搜索按钮点击事件
  onNavigationBarSearchInputConfirmed: function onNavigationBarSearchInputConfirmed(e) {
    console.log(e.text);
    if (e.text) {
      this.getData();
    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../../DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=template&id=1924873a&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!E:/DEV/HBuilder/fangqiubai/pages/search/search.vue?vue&type=template&id=1924873a& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["../../../../../../DEV/HBuilder/fangqiubai/main.js?{\"page\":\"pages%2Fsearch%2Fsearch\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search.js.map