(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_truyen_truyen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/truyen/truyen.component */ "./src/app/components/truyen/truyen.component.ts");
/* harmony import */ var _components_thongtin_thongtin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/thongtin/thongtin.component */ "./src/app/components/thongtin/thongtin.component.ts");
/* harmony import */ var _components_gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gioithieu/gioithieu.component */ "./src/app/components/gioithieu/gioithieu.component.ts");
/* harmony import */ var _components_tintuc_tintuc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tintuc/tintuc.component */ "./src/app/components/tintuc/tintuc.component.ts");
/* harmony import */ var _components_tacgia_tacgia_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tacgia/tacgia.component */ "./src/app/components/tacgia/tacgia.component.ts");
/* harmony import */ var _components_lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/lienhe/lienhe.component */ "./src/app/components/lienhe/lienhe.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
















const routes = [
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "home/:id", component: _components_truyen_truyen_component__WEBPACK_IMPORTED_MODULE_7__["TruyenComponent"] },
    { path: "posts", component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: "signup", component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: "thongtin", component: _components_thongtin_thongtin_component__WEBPACK_IMPORTED_MODULE_8__["ThongtinComponent"] },
    { path: "gioithieu", component: _components_gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_9__["GioithieuComponent"] },
    { path: "tintuc", component: _components_tintuc_tintuc_component__WEBPACK_IMPORTED_MODULE_10__["TintucComponent"] },
    { path: "lienhe", component: _components_lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_12__["LienheComponent"] },
    { path: "tacgia", component: _components_tacgia_tacgia_component__WEBPACK_IMPORTED_MODULE_11__["TacgiaComponent"] },
    { path: "**", component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_13__["Page404Component"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'posts';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "navs"], [1, "container-fluid", "p-0", "xx"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".xx[_ngcontent-%COMP%] {\n  margin-top: 102px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNU0lcXERlc2t0b3BcXE9LLUFOR1xcZnJvbnRlbmQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi54eHtcbiAgbWFyZ2luLXRvcDogMTAycHg7XG59XG4iLCIueHgge1xuICBtYXJnaW4tdG9wOiAxMDJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/posts/posts.component */ "./src/app/components/posts/posts.component.ts");
/* harmony import */ var _components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/create-post/create-post.component */ "./src/app/components/create-post/create-post.component.ts");
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth-interceptor.service */ "./src/app/services/auth-interceptor.service.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_truyen_truyen_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/truyen/truyen.component */ "./src/app/components/truyen/truyen.component.ts");
/* harmony import */ var _components_thongtin_thongtin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/thongtin/thongtin.component */ "./src/app/components/thongtin/thongtin.component.ts");
/* harmony import */ var _components_gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/gioithieu/gioithieu.component */ "./src/app/components/gioithieu/gioithieu.component.ts");
/* harmony import */ var _components_tintuc_tintuc_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/tintuc/tintuc.component */ "./src/app/components/tintuc/tintuc.component.ts");
/* harmony import */ var _components_lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/lienhe/lienhe.component */ "./src/app/components/lienhe/lienhe.component.ts");
/* harmony import */ var _components_tacgia_tacgia_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/tacgia/tacgia.component */ "./src/app/components/tacgia/tacgia.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptorService"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
        _components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_18__["CreatePostComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
        _components_truyen_truyen_component__WEBPACK_IMPORTED_MODULE_21__["TruyenComponent"],
        _components_thongtin_thongtin_component__WEBPACK_IMPORTED_MODULE_22__["ThongtinComponent"],
        _components_gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_23__["GioithieuComponent"],
        _components_tintuc_tintuc_component__WEBPACK_IMPORTED_MODULE_24__["TintucComponent"],
        _components_lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_25__["LienheComponent"],
        _components_tacgia_tacgia_component__WEBPACK_IMPORTED_MODULE_26__["TacgiaComponent"],
        _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_27__["Page404Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_13__["NavigationComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                    _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_17__["PostsComponent"],
                    _components_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_18__["CreatePostComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                    _components_truyen_truyen_component__WEBPACK_IMPORTED_MODULE_21__["TruyenComponent"],
                    _components_thongtin_thongtin_component__WEBPACK_IMPORTED_MODULE_22__["ThongtinComponent"],
                    _components_gioithieu_gioithieu_component__WEBPACK_IMPORTED_MODULE_23__["GioithieuComponent"],
                    _components_tintuc_tintuc_component__WEBPACK_IMPORTED_MODULE_24__["TintucComponent"],
                    _components_lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_25__["LienheComponent"],
                    _components_tacgia_tacgia_component__WEBPACK_IMPORTED_MODULE_26__["TacgiaComponent"],
                    _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_27__["Page404Component"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptorService"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/create-post/create-post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/create-post/create-post.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");












const _c0 = ["formDirective"];
function CreatePostComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreatePostComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onSubmit(ctx_r18.form.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Post Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r16.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r16.form.valid);
} }
class CreatePostComponent {
    constructor(authService, postService) {
        this.authService = authService;
        this.postService = postService;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isOpen = false;
    }
    ngOnInit() {
        this.form = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
            ]),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
            ]),
        });
    }
    onSubmit(formData) {
        this.postService
            .createPost(formData, this.authService.userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
            .subscribe(() => {
            this.create.emit(null);
        });
        this.form.reset();
        this.formDirective.resetForm();
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"])); };
CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], viewQuery: function CreatePostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.formDirective = _t.first);
    } }, outputs: { create: "create" }, decls: 5, vars: 1, consts: [["mat-stroked-button", "", "color", "#333", 3, "click"], ["novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["formDirective", "ngForm"], ["matInput", "", "formControlName", "title"], ["matInput", "", "formControlName", "body"], ["color", "#A73B01", "mat-stroked-button", "", "type", "submit", 3, "disabled"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_0_listener() { return ctx.isOpen = !ctx.isOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create post\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreatePostComponent_form_4_Template, 13, 2, "form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["mat-form-field[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jcmVhdGUtcG9zdC9DOlxcVXNlcnNcXE1TSVxcRGVza3RvcFxcT0stQU5HXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3JlYXRlLXBvc3RcXGNyZWF0ZS1wb3N0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQsXG5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cbiIsIm1hdC1mb3JtLWZpZWxkLFxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-create-post",
                templateUrl: "./create-post.component.html",
                styleUrls: ["./create-post.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }]; }, { formDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["formDirective"]
        }], create: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 108, vars: 0, consts: [[1, "container-fluid"], [1, "container"], [1, "row", "pt-3"], [1, "col-3", "ml-0"], [1, "row"], [1, "col-12"], [1, "col-3"], [1, "fa", "fa-location-arrow"], [1, "fas", "fa-mail-bulk"], [1, "fas", "fa-phone-alt"], [1, "col-3", "mxh"], [1, "row", "pl-4"], [1, "fab", "fa-facebook"], [1, "fab", "fa-youtube"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google-plus-g"], [1, "row", 2, "border-top", "1px solid rgb(139, 139, 139)", "color", "rgb(165, 165, 165)"], [1, "col-12", "text-center", 2, "font-size", "smaller", "background-color", "rgb(52, 55, 58)"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "TRUY\u1EC6N TH\u1ECANH H\u00C0NH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Doanh Doanh t\u1EDB y\u00EAu c\u1EADu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Thanh xu\u00E2n c\u1EE7a ch\u00FAng ta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Long Nh\u1EADt Nh\u1EA5t \u0111\u1EA1i thi\u1EBFu gia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ch\u1ECDc ph\u1EA3i \u0111i\u1EC7n h\u1EA1 l\u1EA1nh l\u00F9ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Th\u1EBF gi\u1EDBi c\u1EE7a tu\u1ED5i tr\u1EBB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "T\u00C1C GI\u1EA2 HOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Thanh H\u1EADu boy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Qu\u00E1ch Tu\u1EA5n Th\u1EA7n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Nguy\u1EC7t Phu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "L\u00E3o gi\u00E0 Doc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "A t\u0169n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "TH\u00D4NG TIN C\u00D4NG TY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "TR\u01AF\u1EDCNG \u0110\u1EA0I H\u1ECCC NGUY\u1EC4N T\u1EA4T TH\u00C0NH - KHOA CNTT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "300A Nguy\u1EC5n T\u1EA5t Th\u00E0nh, Ph\u01B0\u1EDDng 13, Qu\u1EADn 4, Tp.HCM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Email: tuanvo1905tav@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Phone: 039 452 2293");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "M\u1EA0NG X\u00C3 H\u1ED8I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Copyright \u00A9 2021 V\u00F5 C\u00F4ng Tu\u1EA5n - 1800004716 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-fluid[_ngcontent-%COMP%] {\n  background-color: #34373a !important;\n  color: #b2b7bb;\n}\n\nh5[_ngcontent-%COMP%] {\n  border-left: 4px solid #fc770a;\n  padding-left: 15px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: smaller;\n  padding-left: 20px;\n}\n\n.mxh[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #fc770a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxNU0lcXERlc2t0b3BcXE9LLUFOR1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUyLCA1NSwgNTgpIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMTc4LCAxODMsIDE4Nyk7XHJcbn1cclxuaDV7XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJnYigyNTIsIDExOSwgMTApO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLm14aCBpe1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHJnYigyNTIsIDExOSwgMTApO1xyXG59XHJcbiIsIi5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNzNhICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjYjJiN2JiO1xufVxuXG5oNSB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZjNzcwYTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5teGggaSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNmYzc3MGE7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/gioithieu/gioithieu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/gioithieu/gioithieu.component.ts ***!
  \*************************************************************/
/*! exports provided: GioithieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioithieuComponent", function() { return GioithieuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class GioithieuComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GioithieuComponent.ɵfac = function GioithieuComponent_Factory(t) { return new (t || GioithieuComponent)(); };
GioithieuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GioithieuComponent, selectors: [["app-gioithieu"]], decls: 68, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-12", "mt-5"], ["routerLink", "", 2, "color", "black"], ["routerLink", "gioithieu", 2, "color", "rgb(6, 151, 187)"], [1, "row", "mt-3"], [1, "container", "text-justify", 2, "border-bottom", "1px solid rgb(238, 238, 238)"], [2, "border-bottom", "1px solid rgb(224, 224, 224)"], [2, "border-bottom", "3px solid rgb(6, 151, 187)"], [1, "hinhAnh", "mt-5"], [2, "text-align", "center", "font-weight", "400"], [1, "col-3"], ["src", "../../../assets/imgTT/img1.jpg", "alt", ""], [1, "col-9", "text-justify", "pt-2"], [2, "font-size", "50px", "font-weight", "200"], [1, "mt-2", 2, "color", "rgb(6, 98, 134)"], [1, "row", "mt-5", "text-justify"], [1, "col-8"], ["src", "../../../assets/imgTT/img2.jpg", "alt", "", "width", "350"], [1, "row", "mt-5", "mb-5"], [1, "col-4"], ["src", "../../../assets/imgTT/img4.png", "alt", "", "width", "350"], [1, "col-8", "text-justify", "pt-2"]], template: function GioithieuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TRANG CH\u1EE6/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GI\u1EDAI THI\u1EC6U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "V\u1EC0 CH\u00DANG T\u00D4I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0110\u1ECDc truy\u1EC7n online, \u0111\u1ECDc truy\u1EC7n ch\u1EEF, truy\u1EC7n hay. Website lu\u00F4n c\u1EADp nh\u1EADt nh\u1EEFng b\u1ED9 truy\u1EC7n m\u1EDBi thu\u1ED9c c\u00E1c th\u1EC3 lo\u1EA1i \u0111\u1EB7c s\u1EAFc nh\u01B0 truy\u1EC7n ti\u00EAn hi\u1EC7p, truy\u1EC7n ki\u1EBFm hi\u1EC7p, hay truy\u1EC7n ng\u00F4n t\u00ECnh m\u1ED9t c\u00E1ch nhanh nh\u1EA5t.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "V\u1EDBi ti\u1EC1m l\u1EF1c m\u1EA1nh v\u1EC1 c\u00E1c t\u00E1c ph\u1EA9m, v\u1EEFng v\u00E0ng v\u1EC1 kinh nghi\u1EC7m, c\u00F9ng r\u1EA5t nhi\u1EC1u t\u00E1c gi\u1EA3 t\u00E0i n\u0103ng, nhi\u1EC7t t\u00ECnh, n\u0103ng \u0111\u1ED9ng, s\u00E1ng t\u1EA1o. Webtruyen n\u1ED7 l\u1EF1c kh\u00F4ng ng\u1EEBng trong \u0111\u1EC3 h\u1ED7 tr\u1EE3 c\u00E1c t\u00E1c gi\u1EA3 \u0111\u0103ng nh\u1EEFng t\u00E1c ph\u1EA9m hay nh\u1EA5t, m\u1EDBi nh\u1EA5t, gi\u00FAp truy\u1EC1n t\u1EA3i nh\u1EEFng t\u00E1c ph\u1EA9m \u0111\u1EBFn b\u1EA1n \u0111\u1ECDc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "N\u1EBFu b\u1EA1n th\u1EF1c s\u1EF1 mu\u1ED1n tr\u1EDF th\u00E0nh m\u1ED9t t\u00E1c gi\u1EA3 th\u00EC b\u1EA1n ph\u1EA3i chu\u1EA9n b\u1ECB d\u00E0nh r\u1EA5t nhi\u1EC1u gi\u1EDD trong ng\u00E0y c\u1ED1 g\u1EAFng ngh\u0129 ra nh\u1EEFng \u00FD t\u01B0\u1EDFng \u0111\u1ED9c \u0111\u00E1o v\u00E0 th\u00FA v\u1ECB. B\u1EA1n c\u00F3 th\u1EC3 ph\u1EA3i d\u1EADy tr\u01B0\u1EDBc khi b\u00ECnh minh l\u00F3 r\u1EA1ng \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u c\u00F4ng vi\u1EC7c \"th\u1EF1c s\u1EF1\" c\u1EE7a m\u00ECnh. B\u1EA1n c\u00F3 th\u1EC3 ph\u1EA3i ghi v\u1ED9i nh\u1EEFng \u00FD t\u01B0\u1EDFng tr\u00EAn chuy\u1EBFn t\u00E0u v\u1EC1 nh\u00E0. S\u1EBD c\u00F3 nh\u1EEFng l\u00FAc b\u1EF1c b\u1ED9i, nh\u01B0ng nh\u1EEFng l\u00FAc kh\u00E1c s\u1EBD th\u1ECFa m\u00E3n h\u01A1n b\u1EA1n c\u00F3 th\u1EC3 t\u01B0\u1EDFng t\u01B0\u1EE3ng. V\u00E0 c\u1EA3m gi\u00E1c vi\u1EBFt m\u1ED9t cu\u1ED1n s\u00E1ch r\u1ED3i tr\u00ECnh l\u00E0ng c\u00F3 th\u1EC3 l\u00E0 m\u1ED9t trong nh\u1EEFng \u0111i\u1EC1u tuy\u1EC7t v\u1EDDi nh\u1EA5t tr\u00EAn th\u1EBF gi\u1EDBi. B\u1EA1n c\u00F3 ngh\u0129 b\u1EA1n c\u00F3 nh\u1EEFng ph\u1EA9m ch\u1EA5t \u0111\u1EC3 th\u1EF1c s\u1EF1 tr\u1EDF th\u00E0nh m\u1ED9t t\u00E1c gi\u1EA3 kh\u00F4ng? \u0110\u1EC3 t\u00ECm ra, h\u00E3y ti\u1EBFn h\u00E0nh nh\u1EEFng b\u01B0\u1EDBc sau.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "N\u1EBFu b\u1EA1n \u0111\u00E3 c\u00F3 \u00FD t\u01B0\u1EDFng v\u1EC1 th\u1EC3 lo\u1EA1i m\u00ECnh mu\u1ED1n vi\u1EBFt, cho d\u00F9 \u0111\u00F3 l\u00E0 khoa h\u1ECDc gi\u1EA3 t\u01B0\u1EDFng hay phi h\u01B0 c\u1EA5u, b\u1EA1n n\u00EAn t\u1EADp trung \u0111\u1ECDc nh\u1EEFng quy\u1EC3n s\u00E1ch thu\u1ED9c d\u00F2ng n\u00E0y. Tuy nhi\u00EAn, \u0111\u1EC3 tr\u1EDF n\u00EAn hay ch\u1EEF n\u00F3i chung, b\u1EA1n n\u00EAn \u0111\u1ECDc c\u00E0ng nhi\u1EC1u c\u00E0ng t\u1ED1t. C\u00E0ng \u0111\u1ECDc, b\u1EA1n c\u00E0ng tr\u1EDF n\u00EAn quen v\u1EDBi nh\u1EEFng c\u00F4ng th\u1EE9c s\u00E1o m\u00F2n ph\u1ED5 bi\u1EBFn. B\u1EA1n mu\u1ED1n cu\u1ED1n s\u00E1ch c\u1EE7a m\u00ECnh n\u1ED5i b\u1EADt, do v\u1EADy, n\u1EBFu b\u1EA1n th\u1EA5y c\u00F3 t\u1EDBi m\u01B0\u1EDDi cu\u1ED1n s\u00E1ch qu\u00E1 gi\u1ED1ng v\u1EDBi n\u00F3, b\u1EA1n c\u00F3 th\u1EC3 ph\u1EA3i t\u00ECm m\u1ED9t g\u00F3c nh\u00ECn kh\u00E1c. Khi b\u1EA1n t\u00ECm \u0111\u01B0\u1EE3c m\u1ED9t cu\u1ED1n s\u00E1ch b\u1EA1n th\u1EF1c s\u1EF1 th\u00EDch, h\u00E3y h\u1ECFi b\u1EA3n th\u00E2n \u0111i\u1EC1u g\u00EC khi\u1EBFn n\u00F3 \u0111\u1EB7c bi\u1EC7t v\u1EDBi b\u1EA1n \u0111\u1EBFn v\u1EADy. C\u00F3 ph\u1EA3i l\u00E0 nh\u00E2n v\u1EADt ch\u00EDnh l\u1ED1 b\u1ECBch kh\u00F4ng? Nh\u1EEFng \u00E1ng v\u0103n \u0111\u1EB9p \u0111\u1EBD? C\u1EA3m nh\u1EADn v\u1EC1 n\u01A1i ch\u1ED1n? B\u1EA1n c\u00E0ng x\u00E1c \u0111\u1ECBnh \u0111\u01B0\u1EE3c t\u1EA1i sao b\u1EA1n l\u1EA1i th\u00EDch m\u1ED9t quy\u1EC3n s\u00E1ch, b\u1EA1n s\u1EBD c\u00E0ng s\u1EAFc s\u1EA3o h\u01A1n trong n\u1ED7 l\u1EF1c khi\u1EBFn cu\u1ED1n s\u00E1ch c\u1EE7a m\u00ECnh thu h\u00FAt \u0111\u00F4ng \u0111\u1EA3o \u0111\u1ED9c gi\u1EA3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Vi\u1EC7c \u0111\u1EA7u ti\u00EAn c\u1EA7n l\u00E0m l\u00E0 n\u1EA3y ra m\u1ED9t \u00FD t\u01B0\u1EDFng l\u00F4i cu\u1ED1n v\u00E0 k\u00EDch th\u00EDch m\u1ECDi ng\u01B0\u1EDDi. B\u1EA1n c\u00F3 th\u1EC3 ph\u1EA3i b\u1EAFt \u0111\u1EA7u vi\u1EBFt tr\u01B0\u1EDBc khi t\u00ECm ra \u00FD t\u01B0\u1EDFng -- b\u1EA1n c\u00F3 th\u1EC3 th\u1EADm ch\u00ED ph\u1EA3i vi\u1EBFt ba tr\u0103m trang tr\u01B0\u1EDBc khi nh\u1EADn ra quy\u1EC3n s\u00E1ch c\u1EE7a b\u1EA1n \"th\u1EF1c s\u1EF1\" n\u00F3i v\u1EC1 \u0111i\u1EC1u g\u00EC. Tuy nhi\u00EAn, h\u00E3y b\u1EAFt \u0111\u1EA7u v\u1EDBi m\u1ED9t lu\u1EADn \u0111\u1EC1 chung chung -- c\u00E2u chuy\u1EC7n v\u1EC1 m\u1ED9t c\u00F4 g\u00E1i l\u1EDBn l\u00EAn \u1EDF Ukraine trong th\u1EDDi c\u00E1ch m\u1EA1ng Bolshevik, m\u1ED9t t\u00E1c ph\u1EA9m phi h\u01B0 c\u1EA5u v\u1EC1 t\u1EA7m quan tr\u1ECDng ng\u00E0y c\u00E0ng t\u0103ng c\u1EE7a c\u00E1c tr\u01B0\u1EDDng c\u00F4ng \u0111\u1EB7c c\u00E1ch \u1EDF M\u1EF9 -- v\u00E0 xem b\u1EA1n c\u00F3 th\u1EC3 ph\u00E1t tri\u1EC3n n\u00F3 t\u1EDBi \u0111\u00E2u.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "M\u1ED8T S\u1ED0 T\u00C1C PH\u1EA8M S\u1EAEP RA M\u1EAET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u1EBFu b\u1EA1n mu\u1ED1n t\u00ECm ki\u1EBFm nh\u1EEFng chi ti\u1EBFt nh\u1EB9 nh\u00E0ng, d\u1EC5 th\u01B0\u01A1ng, c\u00E2u chuy\u1EC7n n\u00E0y kh\u00F4ng d\u00E0nh cho b\u1EA1n! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " N\u1EBFu b\u1EA1n mu\u1ED1n t\u00ECm ki\u1EBFm nh\u1EEFng t\u00ECnh y\u00EAu m\u00F2n m\u1ECFi ch\u1EDD \u0111\u1EE3i kh\u00F4ng thay \u0111\u1ED5i, c\u00E2u chuy\u1EC7n n\u00E0y c\u0169ng ch\u1EB3ng th\u1EC3 th\u1ECFa m\u00E3n b\u1EA1n! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Nh\u01B0ng n\u1EBFu b\u1EA1n mu\u1ED1n t\u00ECm ki\u1EBFm nh\u1EEFng m\u1EA3ng gai g\u00F3c c\u1EE7a cu\u1ED9c s\u1ED1ng, t\u00ECm ki\u1EBFm nh\u1EEFngcon ng\u01B0\u1EDDi \u0111ang c\u1ED1 g\u1EAFng m\u1ED7i ng\u00E0y \u0111\u1EBFn g\u1EA7n h\u1EA1nh ph\u00FAc, v\u1EADy h\u00E3y ng\u1ED3i l\u1EA1i nghe t\u00F4i k\u1EC3m\u1ED9t c\u00E2u chuy\u1EC7n, m\u1ED9t c\u00E2u chuy\u1EC7n c\u00F3 cay \u0111\u1EAFng m\u1EB7n ch\u00E1t nh\u1EEFng d\u01B0 v\u1ECB cu\u1ED9c \u0111\u1EDDi, nh\u01B0ngc\u00F3 l\u1EBD \u0111\u00E1ng gi\u00E1 khi \u0111\u1ECDng l\u1EA1i cu\u1ED1i c\u00F9ng l\u00E0 v\u1ECB ng\u1ECDt thanh tao.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " C\u00F4 b\u00E9 quen c\u1EADu b\u00E9 khi h\u1ECD m\u01B0\u1EDDi ba tu\u1ED5i, trong c\u00E2u chuy\u1EC7n tr\u1EBB th\u01A1, m\u1ED9t v\u00E0i l\u1EDDi khenng\u00E2y th\u01A1 c\u1EE7a c\u00F4 b\u00E9 \u0111\u00E3 tr\u1EDF th\u00E0nh \u0111\u1ED9ng l\u1EF1c cho \u01B0\u1EDBc m\u01A1 h\u1ECDc m\u00FAa c\u1EE7a c\u1EADu b\u00E9. Nh\u01B0ng cu\u1ED9c \u0111\u1EDDi \u0111\u1ED5i thay, nh\u1EEFng \u0111\u1EE9a tr\u1EBB \u0111i theo nh\u1EEFng ng\u00E3 r\u1EBD kh\u00E1c nhau, xa nhau r\u1ED3i l\u1EA1c nhau. C\u00F4 b\u00E9 t\u00EAn l\u00E0 Thu\u1EA5n Nh\u00E2n, c\u00F2n c\u1EADu b\u00E9 t\u00EAn l\u00E0 T\u1EED Ch\u1EA5n. Gi\u1ED1ng nh\u01B0 khi chi\u1EBFc b\u00E1nh xe \u0111\u1ECBnh m\u1EC7nh b\u1ECB \u0111\u1EA9y \u0111i, c\u00E2u chuy\u1EC7n cu\u1ED9c \u0111\u1EDDi h\u1ECD c\u1EE9 ti\u1EBFp di\u1EC5n ch\u1EB3ng th\u1EC3 n\u00E0o d\u1EEBng l\u1EA1i. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "T\u00E1c gi\u1EA3: Nguy\u00EAn Ng\u1ED9 Kh\u00F4ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Th\u1EC3 lo\u1EA1i: Ng\u00F4n t\u00ECnh, hi\u1EC7n \u0111\u1EA1i, h\u00E0i h\u01B0\u1EDBc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " C\u00F2n g\u00EC \u00E9o le h\u01A1n vi\u1EC7c \"th\u1EB3ng\" n\u1EEF l\u1EA1i b\u1ECB hi\u1EC3u nh\u1EA7m th\u00E0nh ng\u01B0\u1EDDi \u0111\u1ED3ng t\u00EDnh, b\u1ECB c\u00F4ng ty sa th\u1EA3i, l\u1EA1i c\u00F2n \u0111\u1EE5ng ph\u1EA3i m\u1ED9t t\u00EAn \"v\u00F4 l\u1EA1i\". V\u1EEBa th\u1EA5t nghi\u1EC7p, \u0111\u01B0\u1EDDng t\u00ECnh tr\u1EAFc tr\u1EDF v\u00EC v\u1ED9i v\u00E0ng t\u00ECm b\u1EA1n trai \u0111\u1EC3 ch\u1EE9ng minh m\u00ECnh trong s\u1EA1ch, cu\u1ED9c s\u1ED1ng c\u1EE7a c\u00F4 d\u01B0\u1EDDng nh\u01B0 tr\u1EDF n\u00EAn b\u1EBF t\u1EAFc. Nh\u01B0ng r\u1ED3i m\u1ED9t ng\u00E0y c\u00F4 nh\u1EADn th\u1EA5y d\u01B0\u1EDDng nh\u01B0 t\u00EAn \"v\u00F4 l\u1EA1i\" \u0111\u00F3 l\u00FAc n\u00E0o c\u0169ng xu\u1EA5t hi\u1EC7n trong th\u1EBF gi\u1EDBi c\u1EE7a c\u00F4, c\u00F4 c\u1EA3m gi\u00E1c nh\u01B0 m\u00ECnh c\u00F3 c\u1EA3m t\u00ECnh v\u1EDBi anh ta m\u1EA5t r\u1ED3i. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "L\u1EDDi t\u1EF1 b\u1EA1ch c\u1EE7a Minh Nguy\u1EC7t Th\u00EDnh Phong:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Th\u1EC3 lo\u1EA1i: ti\u1EC3u thuy\u1EBFt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " M\u1ED7i ng\u00E0y, cu\u1ED9c s\u1ED1ng ban t\u1EB7ng cho ch\u00FAng ta h\u00E0ng tr\u0103m s\u1EF1 l\u1EF1a ch\u1ECDn. Nh\u01B0ng c\u00F3 m\u1ED9t s\u1ED1 ch\u1ECDn l\u1EF1a kh\u00F4ng bao gi\u1EDD n\u00EAn th\u1EF1c hi\u1EC7n. Th\u00F4ng qua c\u00E2u chuy\u1EC7n n\u00E0y, b\u1EA1n s\u1EBD kh\u00E1m ph\u00E1 ngh\u00E8o \u0111\u00F3i v\u00E0 thi\u1EBFu c\u01A1 h\u1ED9i c\u00F3 th\u1EC3 \u00E9p bu\u1ED9c ng\u01B0\u1EDDi ta ph\u1EA3i \u0111\u01B0a ra nh\u1EEFng quy\u1EBFt \u0111\u1ECBnh kh\u00F3 kh\u0103n \u2013 th\u1EADm tr\u00ED ngo\u00E0i s\u1EE9c t\u01B0\u1EDFng t\u01B0\u1EE3ng nh\u01B0 th\u1EBF n\u00E0o \u2013 ch\u1EC9 \u0111\u1EC3 \u0111\u01B0\u1EE3c t\u1ED3n t\u1EA1i. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " C\u0169ng qua c\u00E2u chuy\u1EC7n n\u00E0y, b\u1EA1n s\u1EBD tr\u1EA3i nghi\u1EC7m nh\u1EEFng k\u1EBFt qu\u1EA3 h\u1EE7y ho\u1EA1i ti\u1EC1m t\u00E0ng c\u00F3 th\u1EC3 x\u1EA3y ra. B\u1EB1ng vi\u1EC7c chia s\u1EBB c\u0169ng nh\u01B0 th\u1EA3o lu\u1EADn c\u00E1c ch\u1EE7 \u0111\u1EC1 c\u1EE7a cu\u1ED1n s\u00E1ch n\u00E0y, b\u1EA1n c\u00F3 th\u1EC3 gi\u00FAp nh\u1EEFng ng\u01B0\u1EDDi kh\u00E1c trong c\u1ED9ng \u0111\u1ED3ng c\u1EE7a m\u00ECnh bi\u1EBFt v\u1EC1 nh\u1EEFng nguy hi\u1EC3m c\u1EE7a vi\u1EC7c di c\u01B0 kh\u00F4ng an to\u00E0n, mua b\u00E1n ng\u01B0\u1EDDi, v\u00E0 th\u00FAc \u0111\u1EA9y h\u1ECD h\u00E0nh \u0111\u1ED9ng t\u1EA1o ra s\u1EF1 thay \u0111\u1ED5i cho nh\u1EEFng ng\u01B0\u1EDDi kh\u00E1c trong th\u1EBF gi\u1EDBi c\u1EE7a ch\u00FAng ta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Trong c\u00E2u chuy\u1EC7n n\u00E0y, b\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c y\u00EAu c\u1EA7u v\u00E0o vai m\u1ED9t nh\u00E2n v\u1EADt n\u1EEF s\u1ED1ng \u1EDF v\u00F9ng \u0110\u00F4ng \u00C1. Nh\u1EEFng th\u00E1ch th\u1EE9c m\u00E0 b\u1EA1n s\u1EBD \u0111\u1ED1i m\u1EB7t \u0111\u1EA1i di\u1EC7n cho nh\u1EEFng tr\u1EA3i nghi\u1EC7m m\u00E0 nhi\u1EC1u ng\u01B0\u1EDDi tr\u1EBB tu\u1ED5i trong khu v\u1EF1c \u0111\u00E3 v\u00E0 \u0111ang ph\u1EA3i \u0111\u1ED1i m\u1EB7t. B\u1EB1ng vi\u1EC7c b\u01B0\u1EDBc v\u00E0o cu\u1ED9c s\u1ED1ng c\u1EE7a nh\u00E2n v\u1EADt, b\u1EA1n s\u1EBD t\u1EF1 nh\u1EADn th\u1EA5y r\u1EB1ng, th\u1EADm tr\u00ED m\u1ED9t quy\u1EBFt \u0111\u1ECBnh nh\u1ECF th\u00F4i c\u00F3 th\u1EC3 t\u1EA1o ra \u1EA3nh h\u01B0\u1EDFng l\u1EDBn nh\u01B0 th\u1EBF n\u00E0o t\u1EDBi \u0111\u01B0\u1EDDng \u0111i c\u1EE7a cu\u1ED9c \u0111\u1EDDi b\u1EA1n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " C\u1EA7n nh\u1EADn th\u1EE9c r\u1EB1ng m\u1ED9t s\u1ED1 k\u1ECBch b\u1EA3n kh\u00F4ng c\u00F3 nh\u1EEFng k\u1EBFt th\u00FAc c\u00F3 h\u1EADu v\u00E0 b\u1EA1n c\u00F3 th\u1EC3 ph\u1EA3i tho\u00E1t ra kh\u1ECFi c\u1EA3m gi\u00E1c tr\u1EA3i nghi\u1EC7m v\u1EDBi m\u1ED9t ch\u00FAt th\u1EA5t v\u1ECDng. H\u00E3y d\u00E0nh th\u1EDDi gian \u0111\u1EC3 suy ngh\u0129 v\u1EC1 nh\u1EEFng c\u1EA3m x\u00FAc \u0111\u00F3 b\u1EB1ng vi\u1EC7c \u0111\u1ECDc nh\u1EEFng c\u00E2u h\u1ECFi t\u1EF1 v\u1EA5n t\u1EA1i cu\u1ED1i c\u00E2u chuy\u1EC7n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "T\u00E1c gi\u1EA3: Lan Pugh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2lvaXRoaWV1L2dpb2l0aGlldS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GioithieuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gioithieu',
                templateUrl: './gioithieu.component.html',
                styleUrls: ['./gioithieu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function HomeComponent_mat_card_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Th\u1EDDi gian \u0111\u0103ng:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "N\u1ED9i dung:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "XEM TH\u00CAM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.created, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1.body, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/home/", list_r1.id, "");
} }
class HomeComponent {
    constructor(homeService) {
        this.homeService = homeService;
    }
    ngOnInit() {
        this.posts$ = this.getAllPosts();
    }
    getAllPosts() {
        return this.homeService.getAllPosts();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 39, vars: 3, consts: [[1, "container-fluid", "bg-warning", "pl-0", "pr-0"], [1, "row"], [1, "col-12"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "3"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "4"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/banner1.jpg", "alt", "First slide", "height", "860px", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "../../../assets/banner3.jpg", "alt", "Second slide", "height", "860px", 1, "d-block", "w-100"], ["src", "../../../assets/banner4.jpg", "alt", "Third slide", "height", "860px", 1, "d-block", "w-100"], ["src", "../../../assets/banner5.jpg", "alt", "Third slide", "height", "860px", 1, "d-block", "w-100"], ["src", "../../../assets/banner6.jpeg", "alt", "Third slide", "height", "860px", 1, "d-block", "w-100"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container"], [1, "text-center", "pt-5", "pb-3", "tieude"], ["style", "float: left;", 4, "ngFor", "ngForOf"], [2, "float", "left"], [1, "post-title", 2, "color", "red", "text-align", "center"], [1, "post-meta"], [2, "color", "rgb(0, 118, 197)"], [1, "post-body"], [1, "btn", "btn-warning", "yy", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "DANH S\u00C1CH TI\u1EC2U THUY\u1EBET HOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HomeComponent_mat_card_37_Template, 17, 4, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 1, ctx.posts$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 300px;\n  margin: 2em;\n}\n\n.yy[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 30px;\n  padding-bottom: 30px;\n  margin: 15px 0px 0px 25px;\n}\n\n.post-title[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 25px;\n  -webkit-line-clamp: 3;\n  height: 50px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n\n.post-meta[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.post-body[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 25px;\n  -webkit-line-clamp: 3;\n  height: 75px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n\n.tieude[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcTVNJXFxEZXNrdG9wXFxPSy1BTkdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRElBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDREY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0FDQUY7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQ0VGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XHJcbiAgd2lkdGg6IDIxMHB4IDtcclxuICBoZWlnaHQ6IDMwMHB4IDtcclxuICBtYXJnaW46IDJlbTtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnl5e1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDMwcHg7IFxyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4OyBcclxuICBtYXJnaW46MTVweCAwcHggMHB4IDI1cHg7XHJcbn1cclxuLnBvc3QtdGl0bGV7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuLnBvc3QtbWV0YXtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5wb3N0LWJvZHl7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbn1cclxuLnRpZXVkZXtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcbiIsIm1hdC1jYXJkIHtcbiAgd2lkdGg6IDIxMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW46IDJlbTtcbn1cblxuLnl5IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBtYXJnaW46IDE1cHggMHB4IDBweCAyNXB4O1xufVxuXG4ucG9zdC10aXRsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4ucG9zdC1tZXRhIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnBvc3QtYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICBoZWlnaHQ6IDc1cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4udGlldWRlIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/lienhe/lienhe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/lienhe/lienhe.component.ts ***!
  \*******************************************************/
/*! exports provided: LienheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienheComponent", function() { return LienheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







class LienheComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.signupForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7),
            ]),
        });
    }
    signup() {
        this.authService.signup(this.signupForm.value).subscribe((msg) => {
            console.log(msg);
            this.router.navigate(["login"]);
        });
    }
}
LienheComponent.ɵfac = function LienheComponent_Factory(t) { return new (t || LienheComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LienheComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LienheComponent, selectors: [["app-lienhe"]], decls: 68, vars: 2, consts: [[1, "container"], [1, "row", "mb-5"], [1, "col-12", "mt-5"], ["routerLink", "", 2, "color", "black"], [2, "color", "rgb(6, 151, 187)"], [1, "row"], [1, "col-4"], ["src", "../../../assets/logo1.jpg", "alt", "", "height", "70"], [1, "col-8"], [1, "col-12"], [1, "fa", "fa-location-arrow"], ["href", "https://www.google.com/maps/place/300a+Nguy%E1%BB%85n+T%E1%BA%A5t+Th%C3%A0nh,+Ph%C6%B0%E1%BB%9Dng+13,+Qu%E1%BA%ADn+4,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7610408,106.7083065,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f6f4be30cd7:0x3933aef250264252!8m2!3d10.7610355!4d106.7104952?hl=vi-VN"], [1, "fas", "fa-phone-alt"], [1, "fas", "fa-phone-alt", 2, "color", "red"], [1, "fas", "fa-mail-bulk", 2, "color", "rgb(0, 124, 196)"], ["href", "mailto:tuanvo1905tav@gmail.com"], [1, "fab", "fa-facebook", 2, "color", "rgb(0, 162, 255)"], ["href", "https://www.facebook.com/profile.php?id=100007923618095"], [1, "row", "mt-5", "mb-5"], [1, "col-6"], [2, "text-align", "center", "font-weight", "300", "font-style", "italic"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-group", "input-group"], ["type", "text", "placeholder", "Example: V\u00F5 C\u00F4ng Tu\u1EA5n", "formControlName", "name", "required", "", 1, "form-control", "ng-pristine", "ng-untouched", "ng-invalid", "ng-invalid-required"], ["type", "text", "placeholder", "Example: test@gmail.com", "formControlName", "email", "required", "", 1, "form-control", "ng-pristine", "ng-untouched", "ng-invalid", "ng-invalid-required"], ["type", "password", "placeholder", "Example: !dsfds656214dsdfs$", "formControlName", "password", "required", "", 1, "form-control", "ng-pristine", "ng-untouched", "ng-invalid", "ng-invalid-required"], ["color", "basic", "mat-stroked-button", "", "type", "submit", 3, "disabled"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6551178781033!2d106.70830651535631!3d10.761040762418764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6f4be30cd7%3A0x3933aef250264252!2zMzAwYSBOZ3V54buFbiBU4bqldCBUaMOgbmgsIFBoxrDhu51uZyAxMywgUXXhuq1uIDQsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1620584050519!5m2!1svi!2s", "width", "600", "height", "355", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"]], template: function LienheComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TRANG CH\u1EE6/ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "LI\u00CAN H\u1EC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TR\u01AF\u1EDCNG \u0110\u1EA0I H\u1ECCC NGUY\u1EC4N T\u1EA4T TH\u00C0NH - KHOA CNTT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0110\u1ECBa ch\u1EC9: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "300A Nguy\u1EC5n T\u1EA5t Th\u00E0nh, Ph\u01B0\u1EDDng 13, Qu\u1EADn 4, Tp.HCM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone: 039 452 2293");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hotline: 18008198");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " tuanvo1905tav@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Facebook: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "https://www.facebook.com/profile.php?id=100007923618095");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "SINGUP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LienheComponent_Template_form_ngSubmit_56_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "iframe", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGllbmhlL2xpZW5oZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LienheComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lienhe',
                templateUrl: './lienhe.component.html',
                styleUrls: ['./lienhe.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");








class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        //=================
        this.mess = '';
        this.ismess = false;
    }
    ngOnInit() {
        this.loginForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7),
            ]),
        });
    }
    login() {
        this.authService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe((err) => {
            this.mess = 'Sai Email hoặc Password!';
            this.ismess = true;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-4", "mx-auto", "text-center", "mt-5"], ["src", "../../../assets/logo1.jpg", "alt", ""], [1, "row", "mt-5", "mb-5"], [1, "col-6", "mx-auto"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["matInput", "", "placeholder", "Example: test@gmail.com", "formControlName", "email"], ["matInput", "", "type", "password", "placeholder", "Example: T7q6s5rd5@dcg!#$aa", "formControlName", "password"], ["color", "basic", "mat-stroked-button", "", "type", "submit", 3, "disabled"], ["ngif", "ismess", 2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mess);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  float: right;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXE1TSVxcRGVza3RvcFxcT0stQU5HXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyMDBweDtcbn1cbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NavigationComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_a_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavigationComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.authService.isUserLoggedIn$.subscribe((isLoggedIn) => {
            this.isAuthenticated = isLoggedIn;
        });
    }
    logout() {
        localStorage.removeItem("token");
        this.authService.isUserLoggedIn$.next(false);
        this.router.navigate(["login"]);
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 26, vars: 4, consts: [[1, "container-fluid", "navs"], [1, "row", "navt"], [1, "col-4", "text-center"], ["routerLink", ""], ["src", "../../../assets/logo1.jpg", "alt", "logo", 1, "pt-1", "pb-1"], [1, "col-6", "text-center", "canle"], ["routerLink", "/", 1, "mr-3"], ["routerLink", "thongtin", 1, "mr-3"], ["routerLink", "gioithieu", 1, "mr-3"], ["routerLink", "tintuc", 1, "mr-3"], ["routerLink", "lienhe", 1, "mr-3"], ["routerLink", "tacgia", 1, "mr-3"], [1, "col-2", "text-right", "canle", "pr-5"], ["routerLinkActive", "active-link", "routerLink", "/posts", 4, "ngIf"], ["routerLinkActive", "active-link", "routerLink", "/login", 4, "ngIf"], ["routerLinkActive", "active-link", "routerLink", "/login", 3, "click", 4, "ngIf"], ["routerLinkActive", "active-link", "routerLink", "/signup", 4, "ngIf"], ["routerLinkActive", "active-link", "routerLink", "/posts"], ["routerLinkActive", "active-link", "routerLink", "/login"], ["routerLinkActive", "active-link", "routerLink", "/login", 3, "click"], ["routerLinkActive", "active-link", "routerLink", "/signup"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "TRANG CH\u1EE6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "TH\u00D4NG TIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "GI\u1EDAI THI\u1EC6U");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TIN T\u1EE8C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LI\u00CAN H\u1EC6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "T\u00C1C GI\u1EA2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavigationComponent_a_22_Template, 3, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavigationComponent_a_23_Template, 3, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavigationComponent_a_24_Template, 3, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavigationComponent_a_25_Template, 3, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".navs[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  z-index: 100000;\n  margin-bottom: 250px;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-right: 35px;\n}\n\n.canle[_ngcontent-%COMP%] {\n  padding-top: 35px;\n}\n\n.navt[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  box-shadow: 0px 0px 10px black;\n}\n\na[_ngcontent-%COMP%] {\n  color: #949494;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #A73B01;\n  transition: 0.2s;\n  text-shadow: 0px 0px 2px #A73B01;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcTVNJXFxEZXNrdG9wXFxPSy1BTkdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDQUY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBRElBO0VBQ0UsaUJBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9NZW51IMSR4bupbmcgaW0gdHLDqm4gdG9wXG4ubmF2c3tcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjUwcHg7XG59XG4vLz09PT09PT09PT09PT09PT09PT09PVxuXG5cbnNwYW57XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cbi5jYW5sZXtcbiAgcGFkZGluZy10b3A6IDM1cHg7XG59XG4ubmF2dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICByZ2JhKDAsMCwwKTtcbn1cbmF7XG4gIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXJ7XG4gIGNvbG9yOiAjQTczQjAxO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggI0E3M0IwMTtcbn0iLCIubmF2cyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xufVxuXG5zcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuXG4uY2FubGUge1xuICBwYWRkaW5nLXRvcDogMzVweDtcbn1cblxuLm5hdnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XG59XG5cbmEge1xuICBjb2xvcjogIzk0OTQ5NDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNBNzNCMDE7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjQTczQjAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navigation",
                templateUrl: "./navigation.component.html",
                styleUrls: ["./navigation.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Page404Component {
    constructor() {
    }
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 10, vars: 0, consts: [[1, "container-fluid", "bgg"], [1, "row"], [1, "col-12", "text-center"], ["src", "../../../assets/mat-buon-icon.png", "alt", ""]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "KH\u00D4NG T\u00CCM TH\u1EA4Y TRANG B\u1EA0N Y\u00CAU C\u1EA6U!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "NOT FOUND!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bgg[_ngcontent-%COMP%] {\n  background-image: url('banner.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 1000px;\n  color: #fff;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 55px;\n  color: #910000;\n  margin-top: 100px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 150px;\n  color: #fff;\n  margin-top: 50px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 55px;\n  font-weight: 200;\n  margin-top: 150px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlNDA0L0M6XFxVc2Vyc1xcTVNJXFxEZXNrdG9wXFxPSy1BTkdcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlNDA0XFxwYWdlNDA0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QUREQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2U0MDQvcGFnZTQwNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2d7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Jhbm5lci5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiA1NXB4O1xyXG4gICAgY29sb3I6IHJnYigxNDUsIDAsIDApO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuaDJ7XHJcbiAgICBmb250LXNpemU6IDE1MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTo1NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn0iLCIuYmdnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYW5uZXIuanBnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgY29sb3I6ICM5MTAwMDA7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMTUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLXRvcDogMTUwcHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/posts/posts.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-post/create-post.component */ "./src/app/components/create-post/create-post.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function PostsComponent_mat_card_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_mat_card_5_button_1_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const post_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delete(post_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostsComponent_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_mat_card_5_button_1_Template, 3, 0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r3.user === ctx_r2.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r3.created, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r3.body, " ");
} }
class PostsComponent {
    constructor(postService, authService) {
        this.postService = postService;
        this.authService = authService;
    }
    ngOnInit() {
        this.posts$ = this.fetchAll();
        this.userId = this.authService.userId;
    }
    fetchAll() {
        return this.postService.fetchAll();
    }
    createPost() {
        this.posts$ = this.fetchAll();
    }
    delete(postId) {
        this.postService
            .deletePost(postId)
            .subscribe(() => (this.posts$ = this.fetchAll()));
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 8, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-2"], [1, "col-8", "mt-5", "mb-5"], [3, "create"], [4, "ngFor", "ngForOf"], ["mat-icon-button", "", 4, "ngIf"], [1, "post-title"], [1, "post-meta"], [1, "post-body"], ["mat-icon-button", ""], ["color", "warn", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-create-post", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("create", function PostsComponent_Template_app_create_post_create_4_listener() { return ctx.createPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostsComponent_mat_card_5_Template, 8, 4, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.posts$));
    } }, directives: [_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_3__["CreatePostComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n  font-size: 24px;\n}\nmat-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: right;\n}\nmat-card[_ngcontent-%COMP%]   .post-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nmat-card[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%] {\n  margin-top: 3em;\n  font-size: 16px;\n  font-style: italic;\n}\nmat-card[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 25px;\n  -webkit-line-clamp: 3;\n  height: 75px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9DOlxcVXNlcnNcXE1TSVxcRGVza3RvcFxcT0stQU5HXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9zdHNcXHBvc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7QUNFSjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBREFFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5wb3N0LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAucG9zdC1tZXRhIHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICAucG9zdC1ib2R5IHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIH1cbn1cbiIsIm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5tYXQtY2FyZCBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5tYXQtY2FyZCAucG9zdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxubWF0LWNhcmQgLnBvc3QtbWV0YSB7XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5tYXQtY2FyZCAucG9zdC1ib2R5IHtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgaGVpZ2h0OiA3NXB4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-posts",
                templateUrl: "./posts.component.html",
                styleUrls: ["./posts.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.signupForm = this.createFormGroup();
    }
    createFormGroup() {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7),
            ]),
        });
    }
    signup() {
        this.authService.signup(this.signupForm.value).subscribe((msg) => {
            console.log(msg);
            this.router.navigate(["login"]);
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 22, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-4", "mx-auto", "text-center", "mt-5"], ["src", "../../../assets/logo1.jpg", "alt", ""], [1, "row", "mt-5", "mb-5"], [1, "col-6", "mx-auto"], ["novalidate", "", 3, "formGroup", "ngSubmit"], ["matInput", "", "placeholder", "V\u00F5 C\u00F4ng Tu\u1EA5n - 1800004716", "formControlName", "name"], ["matInput", "", "placeholder", "Example: tuanvo1905tav@gmail.com", "formControlName", "email"], ["matInput", "", "type", "password", "placeholder", "Example: !dsfds656214dsdfs$", "formControlName", "password"], ["color", "basic", "mat-stroked-button", "", "type", "submit", 3, "disabled"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_6_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signupForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  float: right;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvQzpcXFVzZXJzXFxNU0lcXERlc2t0b3BcXE9LLUFOR1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMjAwcHg7XG59XG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-signup",
                templateUrl: "./signup.component.html",
                styleUrls: ["./signup.component.scss"],
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tacgia/tacgia.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tacgia/tacgia.component.ts ***!
  \*******************************************************/
/*! exports provided: TacgiaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TacgiaComponent", function() { return TacgiaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TacgiaComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TacgiaComponent.ɵfac = function TacgiaComponent_Factory(t) { return new (t || TacgiaComponent)(); };
TacgiaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TacgiaComponent, selectors: [["app-tacgia"]], decls: 102, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-12"], [2, "text-align", "center", "font-weight", "200", "padding-top", "50px"], [1, "container-fluid"], [1, "col-4"], ["src", "../../../assets/TacGia/tg1.jpg", "alt", "", "width", "350"], [1, "col-8"], [1, "col-8", "mt-5"], ["src", "../../../assets/TacGia/tg4n.jpg", "alt", "", "width", "350"], ["src", "../../../assets/TacGia/tg2.jpg", "alt", "", "width", "350"], ["src", "../../../assets/TacGia/tg5n.jpg", "alt", "", "width", "350"], ["src", "../../../assets/TacGia/tg3.jpg", "alt", "", "width", "350"], [1, "row", "mb-5"], ["src", "../../../assets/TacGia/tg6n.jpg", "alt", "", "width", "350"]], template: function TacgiaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DANH S\u00C1CH C\u00C1C T\u00C1C GI\u1EA2 M\u1EDAI \u0110\u01AF\u1EE2C Y\u00CAU TH\u00CDCH NH\u1EA4T 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "T\u00E1c gi\u1EA3: C\u1ED1 M\u1EA1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ng\u00E0y sinh: 21/10/1981");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "B\u00ED danh: R\u00F9a M\u1EA1n, C\u1ED1 M\u1EA1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Qu\u00EA qu\u00E1n: Giang T\u00F4 - Trung Qu\u1ED1c ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " S\u1EF1 nghi\u1EC7p: T\u1ED1t nghi\u1EC7p \u0110H Ki\u1EC3m To\u00E1n Nam Kinh, t\u1EEBng l\u00E0 bi\u00EAn t\u1EADp c\u1EE7a t\u1EA1p ch\u00ED \"Ti\u00EAn \u0111\u1ED9 th\u1EE5y l\u1EA1c\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " T\u00E1c ph\u1EA9m: B\u00EAn nhau tr\u1ECDn \u0111\u1EDDi, Y\u00EAu em t\u1EEB c\u00E1i nh\u00ECn \u0111\u1EA7u ti\u00EAn, Sam Sam \u0111\u1EBFn r\u1ED3i, T\u00F4i nh\u01B0 \u00E1nh d\u01B0\u01A1ng, ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "T\u00E1c gi\u1EA3: H\u1ED3 Thanh Nh\u00E2n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ng\u00E0y sinh: 19/09/2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "B\u00ED danh: L\u00E3ng t\u1EED v\u0169 tr\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Qu\u00EA qu\u00E1n: T\u1EE9 Xuy\u00EAn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " S\u1EF1 nghi\u1EC7p: T\u1ED1t nghi\u1EC7p \u0110H Chi\u1EBFt Giang , t\u1EEBng l\u00E0 ph\u00E1t thanh vi\u00EAn c\u1EE7a \u0111\u00E0i truy\u1EC1n h\u00ECnh trung \u01B0\u01A1ng ABC-Relax. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " T\u00E1c ph\u1EA9m: B\u00ED m\u1EADt b\u1ECB th\u1EDDi gian v\u00F9i l\u1EA5p, Anh v\u00E0 em hai th\u1EBF gi\u1EDBi, T\u00ECnh y\u00EAu tu\u1ED5i h\u1ECDc tr\u00F2, ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "T\u00E1c gi\u1EA3: \u0110\u1ED3ng Hoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ng\u00E0y sinh: 18/10/1982");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "B\u00ED danh: \u0110\u1ED3ng Hoa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Qu\u00EA qu\u00E1n: \u0111ang c\u1EADp nh\u1EADt...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " S\u1EF1 nghi\u1EC7p: T\u1ED1t nghi\u1EC7p \u0110H B\u1EAFc Kinh, h\u1ECDc th\u1EA1c s\u0129 v\u1EC1 kinh t\u1EBF - t\u00E0i ch\u00EDnh \u1EDF M\u1EF9. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " T\u00E1c ph\u1EA9m: B\u1ED9 B\u1ED9 Kinh T\u00E2m, \u0110\u1EA1i m\u1EA1c dao, V\u00E2n trung ca, Th\u1EDDi ni\u00EAn thi\u1EBFu kh\u00F4ng th\u1EC3 quay l\u1EA1i \u1EA5y, ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "T\u00E1c gi\u1EA3: T\u1EEB Thi\u00EAn Trung");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Ng\u00E0y sinh: 01/01/1992");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "B\u00ED danh: Thi\u00EAn M\u00E3 Giao");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Qu\u00EA qu\u00E1n: B\u0103c Kinh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " S\u1EF1 nghi\u1EC7p: T\u1ED1t nghi\u1EC7p \u0110H B\u1EAFc Kinh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " T\u00E1c ph\u1EA9m: 7 ng\u00E0y th\u00E2n \u00E1i, H\u00E0o m\u00F4n kinh m\u1ED9ng, D\u1EE5 t\u00ECnh, Tr\u00F2 ch\u01A1i nguy hi\u1EC3m, T\u1EE9 \u0111\u1EA1i t\u00E0i phi\u1EC7t, 7 n\u0103m v\u1EABn ngo\u1EA3nh l\u1EA1i, Anh v\u1EDBi em l\u00E0 phu thu\u00EA... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "T\u00E1c gi\u1EA3: \u00C2n T\u1EA7m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Ng\u00E0y sinh: 15/4/1982");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "B\u00ED danh: C\u1ED5 Th\u00E1p, H\u1ED3ng T\u1EE5 Th\u00EAm H\u01B0\u01A1ng - Trung Qu\u1ED1c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Qu\u00EA qu\u00E1n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " S\u1EF1 nghi\u1EC7p: T\u1ED1t nghi\u1EC7p \u0110H ch\u00EDnh tr\u1ECB Ph\u00E1p lu\u1EADt Trung Qu\u1ED1c. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " T\u00E1c ph\u1EA9m: All in love, V\u00EC sao \u0111\u00F4ng \u1EA5m h\u1EA1 m\u00E1t, ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "T\u00E1c gi\u1EA3: Hu\u1EF3nh Nam Th\u1EA7n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Ng\u00E0y sinh: 22/5/2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "B\u00ED danh: \u0110\u1EA1i \u0110\u1EA1i Th\u1EA7n Th\u00E1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Qu\u00EA qu\u00E1n: T\u1EE9 Xuy\u00EAn - Trung Qu\u1ED1c");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "S\u1EF1 nghi\u1EC7p: T\u1ED1t nghi\u1EC7p \u0110H v\u0103n h\u00F3a B\u1EAFc Kinh, t\u1ED1t nghi\u1EC7p \u0110H Kinh T\u1EBF \u0110\u1EA1i Nam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " T\u00E1c ph\u1EA9m: Archimedes th\u00E2n y\u00EAu, Ti\u1EC3u nam phong, V\u00EC gi\u00F3 \u1EDF n\u01A1i \u0111\u1EA5y, Anh bi\u1EBFt gi\u00F3 t\u1EEB \u0111\u00E2u \u0111\u1EBFn, B\u1EAFc Kinh n\u00E0o \u0111\u1EB9p b\u1EB1ng em, ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWNnaWEvQzpcXFVzZXJzXFxNU0lcXERlc2t0b3BcXE9LLUFOR1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRhY2dpYVxcdGFjZ2lhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RhY2dpYS90YWNnaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWNnaWEvdGFjZ2lhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn0iLCIucm93IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TacgiaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tacgia',
                templateUrl: './tacgia.component.html',
                styleUrls: ['./tacgia.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/thongtin/thongtin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/thongtin/thongtin.component.ts ***!
  \***********************************************************/
/*! exports provided: ThongtinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThongtinComponent", function() { return ThongtinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ThongtinComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ThongtinComponent.ɵfac = function ThongtinComponent_Factory(t) { return new (t || ThongtinComponent)(); };
ThongtinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThongtinComponent, selectors: [["app-thongtin"]], decls: 9, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "bgg"], [1, "hinhTron"], [1, "pl-4"], ["src", "../../../assets/bgLa.png", "alt", "", "width", "40%", 2, "margin-left", "120px"]], template: function ThongtinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "H\u00C3Y H\u00D2A M\u00CCNH V\u00C0O NH\u1EEENG C\u00C2U CHUY\u1EC6N TH\u00DA V\u1ECA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nh\u1EEFng c\u00E2u chuy\u1EC7n \u0111\u01B0\u1EE3c c\u00E1c t\u00E1c gi\u1EA3 ch\u1ECDn l\u1ECDc, suy ngh\u0129 \u0111\u1EC3 vi\u1EBFt v\u00E0 chia se \u0111\u1EBFn c\u00E1c b\u1EA1n \u0111\u1ECDc!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".hinhTron[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 800px;\n  border-radius: 50%;\n  background-color: #e0dfdf;\n  float: right;\n  margin-top: -180px;\n  margin-right: -80px;\n  opacity: 0.5;\n}\n\n.hinhTron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 300px;\n  padding-left: 25px;\n}\n\n.bgg[_ngcontent-%COMP%] {\n  background-image: url('bg-cafe.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 1000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aG9uZ3Rpbi9DOlxcVXNlcnNcXE1TSVxcRGVza3RvcFxcT0stQU5HXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGhvbmd0aW5cXHRob25ndGluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rob25ndGluL3Rob25ndGluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rob25ndGluL3Rob25ndGluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpbmhUcm9ue1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyMywgMjIzKTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0xODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLmhpbmhUcm9uIGgxe1xyXG4gICAgbWFyZ2luLXRvcDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuLmJnZ3tcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmctY2FmZS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxufSIsIi5oaW5oVHJvbiB7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA4MDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBkZmRmO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0xODBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtODBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaGluaFRyb24gaDEge1xuICBtYXJnaW4tdG9wOiAzMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uYmdnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iZy1jYWZlLmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThongtinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thongtin',
                templateUrl: './thongtin.component.html',
                styleUrls: ['./thongtin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/tintuc/tintuc.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/tintuc/tintuc.component.ts ***!
  \*******************************************************/
/*! exports provided: TintucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TintucComponent", function() { return TintucComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TintucComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TintucComponent.ɵfac = function TintucComponent_Factory(t) { return new (t || TintucComponent)(); };
TintucComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TintucComponent, selectors: [["app-tintuc"]], decls: 68, vars: 0, consts: [["id", "hero"], ["id", "heroVideoBg", "autoplay", "", "loop", "", "muted", ""], ["type", "video/mp4", "src", "../../../assets/videos/video1.mp4"], ["id", "heroImgBg", "src", "https://tinyurl.com/y5gkrvxm", "alt", "storm"], ["id", "heroContent"], [2, "color", "#fff", "font-weight", "200"], [1, "container-fluid"], [1, "row", "xx"], [1, "col-12"], [1, "row", "pt-5"], [1, "col-6", "text-center"], [1, "ndLeft"], ["src", "../../../assets/imgTT/co-kiem-ky-dam-02_rtdj.jpg", "alt", "", "width", "100%", 1, "mb-2"], [1, "ndRight"], ["src", "../../../assets/imgTT/cokiemkydam.jpg", "alt", "", "width", "100%", 1, "mb-2"], [1, "text-justify", "p-2"], [1, "container", "mx-auto", "text-justify", "mt-2", "mb-5"], [1, "row", "yy"]], template: function TintucComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "T I E U T H U Y E T C O K I E M K Y D A M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CH\u00DAC LONG TH\u01AF\u1EE2NG H\u1EA2I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TI\u1EC2U THUY\u1EBET C\u1ED4 KI\u1EBEM K\u1EF2 \u0110\u00C0M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ti\u1EC3u thuy\u1EBFt C\u1ED5 Ki\u1EBFm K\u1EF3 \u0110\u00E0m d\u1EF1a v\u00E0o c\u1ED1t truy\u1EC7n c\u1EE7a game offline c\u00F9ng t\u00EAn \u0111\u01B0\u1EE3c ph\u00E1t h\u00E0nh n\u0103m 2010 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " l\u00E0 s\u1EA3n ph\u1EA9m ti\u1EC3u thuy\u1EBFt ch\u00EDnh th\u1EE9c c\u1EE7a ph\u00EDa Ch\u00FAc Long Th\u01B0\u1EE3ng H\u1EA3i.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "T\u00E1c gi\u1EA3: M\u1ED7 Th\u1EE5, Ninh Tr\u00FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Th\u1EC3 lo\u1EA1i: Huy\u1EC1n huy\u1EC5n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "S\u1ED1 trang: 320 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nh\u00E0 xu\u1EA5t b\u1EA3n H\u1ED3 Nam v\u0103n ngh\u1EC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Th\u1EDDi gian xu\u1EA5t b\u1EA3n: th\u00E1ng 8 n\u0103m 2012 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ti\u1EC3u thuy\u1EBFt d\u00F9ng ng\u00F4n ng\u1EEF tinh t\u1EBF, l\u1EDDi v\u0103n c\u00F4 \u0111\u1ECDng, \u0111\u1EADm phong c\u00E1ch c\u1ED5 v\u1EADn, h\u1EA7u nh\u01B0 \u0111\u01B0a to\u00E0n b\u1ED9 phong c\u00E1ch thanh l\u1EC7 c\u1EE7a tr\u00F2 ch\u01A1i v\u00E0o ti\u1EC3u thuy\u1EBFt. \u0110\u1ED3ng th\u1EDDi, d\u1EF1a tr\u00EAn nguy\u00EAn t\u00E1c game, ti\u1EC3u thuy\u1EBFt c\u00F2n b\u1ED5 sung th\u00EAm nhi\u1EC1u n\u1ED9i dung ho\u1EB7c \u0111o\u1EA1n ng\u1EAFn kh\u00F4ng c\u00F3 trong tr\u00F2 ch\u01A1i, l\u00E0m ti\u1EC3u thuy\u1EBFt c\u00E0ng th\u00EAm \u0111\u1EA7y \u0111\u1EE7 v\u1EC1 n\u1ED9i dung, c\u0169ng khi\u1EBFn c\u00E2u chuy\u1EC7n c\u1EE7a C\u1ED5 Ki\u1EBFm K\u1EF3 \u0110\u00E0m c\u00E0ng th\u00EAm ho\u00E0n m\u1EF9.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "C\u1ED4 KI\u1EBEM K\u1EF2 \u0110\u00C0M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " C\u00E1c s\u1EA3n ph\u1EA9m c\u1EE7a C\u1ED5 Ki\u1EBFm K\u1EF3 \u0110\u00E0m bao g\u1ED3m Nguy\u00EAn t\u00E1c game C\u1ED5 Ki\u1EBFm K\u1EF3 \u0110\u00E0m \u2013 C\u1EA7m t\u00E2m ki\u1EBFm ph\u00E1ch kim h\u00E0 t\u1EA1i (2010); ti\u1EC3u thuy\u1EBFt C\u1ED5 Ki\u1EBFm K\u1EF3 \u0110\u00E0m- C\u1EA7m T\u00E2m Ki\u1EBFm Ph\u00E1ch (2012), b\u1EA3n phim truy\u1EC1n h\u00ECnh (2014). Ch\u00FAng ta \u0111\u00E3 qu\u00E1 quen thu\u1ED9c v\u1EDBi b\u1EA3n truy\u1EC1n h\u00ECnh, v\u00E0 \u0111ang ti\u1EBFp c\u1EADn d\u1EA7n b\u1EA3n game, nh\u01B0ng b\u1EA3n ti\u1EC3u thuy\u1EBFt th\u00EC ch\u01B0a th\u1EA5y ai l\u00E0m v\u00E0 h\u00ECnh nh\u01B0 c\u0169ng \u00EDt ai \u0111\u1EC3 \u00FD. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Ti\u1EC3u thuy\u1EBFt C\u1ED5 Ki\u1EBFm K\u1EF3 \u0110\u00E0m d\u1EF1a v\u00E0o c\u1ED1t truy\u1EC7n c\u1EE7a game offline c\u00F9ng t\u00EAn \u0111\u01B0\u1EE3c ph\u00E1t h\u00E0nh n\u0103m 2010, l\u00E0 s\u1EA3n ph\u1EA9m ti\u1EC3u thuy\u1EBFt ch\u00EDnh th\u1EE9c c\u1EE7a ph\u00EDa Ch\u00FAc Long Th\u01B0\u1EE3ng H\u1EA3i. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Ti\u1EC3u thuy\u1EBFt d\u00F9ng ng\u00F4n ng\u1EEF tinh t\u1EBF, l\u1EDDi v\u0103n c\u00F4 \u0111\u1ECDng, \u0111\u1EADm phong c\u00E1ch c\u1ED5 v\u1EADn, h\u1EA7u nh\u01B0 \u0111\u01B0a to\u00E0n b\u1ED9 phong c\u00E1ch thanh l\u1EC7 c\u1EE7a tr\u00F2 ch\u01A1i v\u00E0o ti\u1EC3u thuy\u1EBFt. \u0110\u1ED3ng th\u1EDDi, d\u1EF1a tr\u00EAn nguy\u00EAn t\u00E1c game, ti\u1EC3u thuy\u1EBFt c\u00F2n b\u1ED5 sung th\u00EAm nhi\u1EC1u n\u1ED9i dung ho\u1EB7c \u0111o\u1EA1n ng\u1EAFn kh\u00F4ng c\u00F3 trong tr\u00F2 ch\u01A1i, l\u00E0m ti\u1EC3u thuy\u1EBFt c\u00E0ng th\u00EAm \u0111\u1EA7y \u0111\u1EE7 v\u1EC1 n\u1ED9i dung, c\u0169ng khi\u1EBFn c\u00E2u chuy\u1EC7n c\u1EE7a C\u1ED5 Ki\u1EBFm K\u1EF3 \u0110\u00E0m c\u00E0ng th\u00EAm ho\u00E0n m\u1EF9. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "T\u00E1c gi\u1EA3: M\u1ED7 Th\u1EE5, Ninh Tr\u00FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Th\u1EC3 lo\u1EA1i: Huy\u1EC1n huy\u1EC5n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "S\u1ED1 trang: 320 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nh\u00E0 xu\u1EA5t b\u1EA3n H\u1ED3 Nam v\u0103n ngh\u1EC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Th\u1EDDi gian xu\u1EA5t b\u1EA3n: th\u00E1ng 8 n\u0103m 2012 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#hero[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 100vh;\n}\n\n#hero[_ngcontent-%COMP%]   #heroVideoBg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -1;\n  display: none;\n}\n\n@media (min-width: 768px) {\n  #hero[_ngcontent-%COMP%]   #heroVideoBg[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n\n#hero[_ngcontent-%COMP%]   #heroImgBg[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  z-index: -1;\n}\n\n@media (min-width: 768px) {\n  #hero[_ngcontent-%COMP%]   #heroImgBg[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n#hero[_ngcontent-%COMP%]   #heroContent[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 200px;\n}\n\n.xx[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 50px;\n  font-weight: 200;\n}\n\n.xx[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 200;\n}\n\n.ndLeft[_ngcontent-%COMP%] {\n  background-color: #1f1f1f;\n  width: 500px;\n  height: 450px;\n  margin: 0 auto;\n  float: right;\n  color: #cccccc;\n  text-align: left;\n}\n\n.ndRight[_ngcontent-%COMP%] {\n  background-color: #999999;\n  width: 500px;\n  height: 400px;\n  margin-top: 150px;\n  margin-left: -100px;\n  float: left;\n  opacity: 0.9;\n  text-align: left;\n}\n\n.xx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  font-weight: 200;\n}\n\n.yy[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  border-bottom: 5px solid #0076a5;\n}\n\n.yy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #929292;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aW50dWMvQzpcXFVzZXJzXFxNU0lcXERlc2t0b3BcXE9LLUFOR1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRpbnR1Y1xcdGludHVjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RpbnR1Yy90aW50dWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDRU47O0FERE07RUFURjtJQVVJLHFCQUFBO0VDSU47QUFDRjs7QURGSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7QUNJTjs7QURITTtFQVRGO0lBVUksYUFBQTtFQ01OO0FBQ0Y7O0FESkk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDTU47O0FERkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEU7RUFDRSxnQ0FBQTtBQ1VKOztBRFJFO0VBQ0UsZ0NBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGludHVjL3RpbnR1Yy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gICNoZXJvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBcclxuICAgICNoZXJvVmlkZW9CZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2hlcm9JbWdCZyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2hlcm9Db250ZW50IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAueHggaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICB9XHJcbiAgLnh4IHB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gIH1cclxuICAubmRMZWZ0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAzMSwgMzEpO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6cmdiKDIwNCwgMjA0LCAyMDQpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLm5kUmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1Myk7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICAueHggc3BhbntcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgfVxyXG4gIC55eSBie1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYigwLCAxMTgsIDE2NSk7XHJcbiAgfVxyXG4gIC55eSBoMntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTQ2LCAxNDYsIDE0Nik7XHJcbiAgfSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNoZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4jaGVybyAjaGVyb1ZpZGVvQmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNoZXJvICNoZXJvVmlkZW9CZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG4jaGVybyAjaGVyb0ltZ0JnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHotaW5kZXg6IC0xO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNoZXJvICNoZXJvSW1nQmcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiNoZXJvICNoZXJvQ29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDIwMHB4O1xufVxuXG4ueHggaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi54eCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4ubmRMZWZ0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMWYxZjtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2NjY2NjYztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLm5kUmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgb3BhY2l0eTogMC45O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ueHggc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLnl5IGIge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzAwNzZhNTtcbn1cblxuLnl5IGgyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5MjkyOTI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TintucComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tintuc',
                templateUrl: './tintuc.component.html',
                styleUrls: ['./tintuc.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/truyen/truyen.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/truyen/truyen.component.ts ***!
  \*******************************************************/
/*! exports provided: TruyenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruyenComponent", function() { return TruyenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");






function TruyenComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "H\u1EBET");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const get_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", get_r9.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Th\u1EDDi gian \u0111\u0103ng truy\u1EC7n: ", get_r9.created, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", get_r9.body, " ");
} }
class TruyenComponent {
    constructor(postService, route) {
        this.postService = postService;
        this.route = route;
    }
    ngOnInit() {
        this.posts$ = this.getByID(this.route.snapshot.params.id);
    }
    getByID(postId) {
        return this.postService.getByID(postId);
    }
}
TruyenComponent.ɵfac = function TruyenComponent_Factory(t) { return new (t || TruyenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
TruyenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TruyenComponent, selectors: [["app-truyen"]], decls: 13, vars: 3, consts: [[1, "container-fluid"], [1, "row"], [1, "col-2"], ["src", "../../../assets/in-poster-quan-go-vap.jpg", "alt", "", "width", "300"], ["src", "../../../assets/poster2.jpg", "alt", "", "width", "300"], [1, "col-8", "mt-5", "mb-5"], [4, "ngFor", "ngForOf"], ["src", "../../../assets/poster1.jpg", "alt", "", "width", "300"], ["src", "../../../assets/poster3.png", "alt", "", "width", "300"], ["id", "1f", 1, "title"], [1, "time"], [1, "body"], [1, "end"]], template: function TruyenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TruyenComponent_mat_card_7_Template, 10, 3, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.posts$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 35px;\n  font-weight: 200;\n  margin-bottom: 2em;\n}\n\n.time[_ngcontent-%COMP%] {\n  color: rgba(165, 165, 165, 0.74);\n  margin-bottom: 1em;\n}\n\n.body[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.end[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 200;\n  font-size: 25px;\n  margin-top: 30px;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-top: 5em;\n  margin-right: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cnV5ZW4vQzpcXFVzZXJzXFxNU0lcXERlc2t0b3BcXE9LLUFOR1xcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRydXllblxcdHJ1eWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RydXllbi90cnV5ZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RydXllbi90cnV5ZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcbi50aW1le1xyXG4gICAgY29sb3I6IHJnYmEoMTY1LCAxNjUsIDE2NSwgMC43NCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuLmJvZHl7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5lbmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNWVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4iLCIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiByZ2JhKDE2NSwgMTY1LCAxNjUsIDAuNzQpO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5ib2R5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmVuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG5pbWcge1xuICBtYXJnaW4tdG9wOiA1ZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruyenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-truyen',
                templateUrl: './truyen.component.html',
                styleUrls: ['./truyen.component.scss']
            }]
    }], function () { return [{ type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (!this.authService.isUserLoggedIn$.value) {
            this.router.navigate(["signup"]);
        }
        return this.authService.isUserLoggedIn$;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthInterceptorService {
    intercept(req, next) {
        const token = localStorage.getItem("token");
        if (token) {
            const clonedRequest = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token),
            });
            return next.handle(clonedRequest);
        }
        else {
            return next.handle(req);
        }
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/services/error-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AuthService {
    constructor(http, errorHandlerService, router) {
        this.http = http;
        this.errorHandlerService = errorHandlerService;
        this.router = router;
        this.url = "http://localhost:8080/auth";
        this.isUserLoggedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" }),
        };
    }
    signup(user) {
        return this.http
            .post(`${this.url}/signup`, user, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandlerService.handleError("signup")));
    }
    login(email, password) {
        return this.http
            .post(`${this.url}/login`, { email, password }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((tokenObject) => {
            this.userId = tokenObject.userId;
            localStorage.setItem("token", tokenObject.token);
            this.isUserLoggedIn$.next(true);
            this.router.navigate(["posts"]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandlerService.handleError("login")));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/error-handler.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/error-handler.service.ts ***!
  \***************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class ErrorHandlerService {
    handleError(operation = "operation", result) {
        return (error) => {
            console.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/services/error-handler.service.ts");






class HomeService {
    constructor(http, errorHandlerService) {
        this.http = http;
        this.errorHandlerService = errorHandlerService;
        this.url = "http://localhost:8080/post";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" }),
        };
    }
    getAllPosts() {
        return this.http
            .get(this.url, { responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => console.log("GET Posts")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandlerService.handleError("getAllPosts", [])));
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handler.service */ "./src/app/services/error-handler.service.ts");






class PostService {
    constructor(http, errorHandlerService) {
        this.http = http;
        this.errorHandlerService = errorHandlerService;
        this.url = "http://localhost:8080/post";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json" }),
        };
    }
    //Lấy tất cả dữ liệu
    getAllPosts() {
        return this.http
            .get(this.url, { responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => console.log("GET Posts")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandlerService.handleError("getAllPosts", [])));
    }
    //Hàm lấy tất cả dữ liệu
    fetchAll() {
        return this.http
            .get(this.url, { responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandlerService.handleError("fetchAll", [])));
    }
    //Đăng truyện
    createPost(formData, userId) {
        return this.http
            .post(this.url, { title: formData.title, body: formData.body, user: userId }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandlerService.handleError("createPost")));
    }
    //Xóa truyện
    deletePost(postId) {
        return this.http
            .delete(`${this.url}/${postId}`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandlerService.handleError("deletePost")));
    }
    //Xem truyện theo id
    getByID(postId) {
        return this.http
            .get(`${this.url}/${postId}`, { responseType: "json" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((_) => console.log("GET Posts")), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.errorHandlerService.handleError("getByID", [])));
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _error_handler_service__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MSI\Desktop\OK-ANG\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map