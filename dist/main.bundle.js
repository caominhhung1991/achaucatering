webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header1></app-header1>\r\n\r\n<app-gioi-thieu1></app-gioi-thieu1>\r\n\r\n<app-healthy-food></app-healthy-food>\r\n\r\n<app-dich-vu></app-dich-vu>\r\n\r\n<app-gioi-thieu3></app-gioi-thieu3>\r\n\r\n<app-gioi-thieu2></app-gioi-thieu2>\r\n\r\n<app-slider1></app-slider1>\r\n\r\n<app-footer></app-footer> "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nav1_nav1_component__ = __webpack_require__("../../../../../src/app/components/nav1/nav1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header1_header1_component__ = __webpack_require__("../../../../../src/app/components/header1/header1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_head_video1_head_video1_component__ = __webpack_require__("../../../../../src/app/components/head-video1/head-video1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_slider1_slider1_component__ = __webpack_require__("../../../../../src/app/components/slider1/slider1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dich_vu_dich_vu_component__ = __webpack_require__("../../../../../src/app/components/dich-vu/dich-vu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_gioi_thieu1_gioi_thieu1_component__ = __webpack_require__("../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_gioi_thieu2_gioi_thieu2_component__ = __webpack_require__("../../../../../src/app/components/gioi-thieu2/gioi-thieu2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_healthy_food_healthy_food_component__ = __webpack_require__("../../../../../src/app/components/healthy-food/healthy-food.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_map1_map1_component__ = __webpack_require__("../../../../../src/app/components/map1/map1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_gioi_thieu3_gioi_thieu3_component__ = __webpack_require__("../../../../../src/app/components/gioi-thieu3/gioi-thieu3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_nav1_nav1_component__["a" /* Nav1Component */],
            __WEBPACK_IMPORTED_MODULE_4__components_header1_header1_component__["a" /* Header1Component */],
            __WEBPACK_IMPORTED_MODULE_5__components_head_video1_head_video1_component__["a" /* HeadVideo1Component */],
            __WEBPACK_IMPORTED_MODULE_6__components_slider1_slider1_component__["a" /* Slider1Component */],
            __WEBPACK_IMPORTED_MODULE_7__components_dich_vu_dich_vu_component__["a" /* DichVuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_gioi_thieu1_gioi_thieu1_component__["a" /* GioiThieu1Component */],
            __WEBPACK_IMPORTED_MODULE_9__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_gioi_thieu2_gioi_thieu2_component__["a" /* GioiThieu2Component */],
            __WEBPACK_IMPORTED_MODULE_11__components_healthy_food_healthy_food_component__["a" /* HealthyFoodComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_map1_map1_component__["a" /* Map1Component */],
            __WEBPACK_IMPORTED_MODULE_13__components_gioi_thieu3_gioi_thieu3_component__["a" /* GioiThieu3Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dich-vu/dich-vu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Cac dich vu*/\r\n.dich-vu {\r\n    /* display: flex;\r\n    flex-flow: row nowrap;\r\n    align-content: center;\r\n    justify-content: center; */\r\n    /* background: #ddd; */\r\n    background: url(" + __webpack_require__("../../../../../src/assets/gioi-thieu7.jpg") + ") no-repeat center center;\r\n    background-size: cover;\r\n    padding: 9%;\r\n}\r\n\r\n\r\n.the-border-bottom {\r\n    width: 60px;\r\n    height: 8px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    border-top: 2px solid #333;\r\n    border-bottom: 2px solid #333;\r\n}\r\n\r\n.see-more {\r\n    position: relative;\r\n    border-radius: 0;\r\n    bottom: -50px;\r\n    background: red;\r\n    color: white !important;\r\n    text-shadow: -1px -1px 1 gray;\r\n}\r\n\r\n.xem-them {\r\n    background: white;\r\n    border: 2px solid #333;\r\n    border-radius: 4px;\r\n    color: #333;\r\n    transition: 0.3s ease-in;\r\n    padding: 5px;\r\n}\r\n\r\n.xem-them:hover {\r\n    background: #333;\r\n    color: white !important;\r\n}\r\n\r\n.card-group {\r\n    /* flex-flow: row wrap; */\r\n}\r\n.card {\r\n    text-align: center;\r\n}\r\n.card-img-top {\r\n    position: relative;\r\n    top: 3%;\r\n    left: 18%;\r\n    width: 65%;\r\n}\r\n/* \r\n.card-title {\r\n    text-align: center;\r\n} */\r\n\r\n.dich-vu .card:first-child {\r\n    margin-right: 50px;\r\n}\r\n\r\n.dich-vu .card:last-child {\r\n    margin-left: 50px;\r\n}\r\n\r\n.card-footer {\r\n    border: none;\r\n    text-align: center;\r\n    padding-bottom: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dich-vu/dich-vu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dich-vu card-group\">\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"../../../assets/the1.webp\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Quầy Dịch Vụ</h4>\n      <div class=\"the-border-bottom\"></div>\n      <p class=\"card-text\">Cung cấp quầy dịch vụ bán nước, bánh, đồ ăn nhẹ cho khách hàng</p>\n    </div>\n    <div class=\"card-footer bg-transparent\"><a class=\"xem-them\" href=\"#\">Xem thêm</a></div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"../../../assets/the2.webp\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Suất Ăn Công Nghiệp</h4>\n      <div class=\"the-border-bottom\"></div>\n      <p class=\"card-text\">Các phần ăn cho công ty, nhà máy với mục tiêu chất lượng, tươi sạch và giá cả hợp lý</p>\n    </div>\n    <div class=\"card-footer bg-transparent\"><a class=\"xem-them\" href=\"#\">Xem thêm</a></div>\n  </div>\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"../../../assets/the3.webp\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Chuỗi Nhà Thuốc</h4>\n      <div class=\"the-border-bottom\"></div>\n      <p class=\"card-text\">Chuỗi nhà thuốc cung cấp thuốc và các dịch vụ về sức khoẻ</p>\n    </div>\n    <div class=\"card-footer bg-transparent\"><a class=\"xem-them\" href=\"#\">Xem thêm</a></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dich-vu/dich-vu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DichVuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DichVuComponent = (function () {
    function DichVuComponent() {
    }
    DichVuComponent.prototype.ngOnInit = function () {
    };
    return DichVuComponent;
}());
DichVuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-dich-vu',
        template: __webpack_require__("../../../../../src/app/components/dich-vu/dich-vu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dich-vu/dich-vu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DichVuComponent);

//# sourceMappingURL=dich-vu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\r\n    height: 100%;\r\n    background: rgb(241, 241, 241);\r\n    padding: 30px 0 30px 0;\r\n}\r\n\r\nfooter h1 {\r\n    font-family: \"Lobster\";\r\n    color: #333;\r\n    font-size: 60px;\r\n}\r\n\r\nfooter h4 {\r\n    color: #333;\r\n    font-size: 18px;\r\n    font-family: \"Lobster\";\r\n}\r\n\r\ni {\r\n    transition: 0.4s ease;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nh3 {\r\n    font-weight: bold;\r\n}\r\n\r\n.back-to-top p {\r\n    font-size: 13px;\r\n    color: #333;\r\n    font-weight: bold;\r\n}\r\n\r\n.fa {\r\n    font-size: 18px;\r\n}\r\n\r\n.fa-chevron-up {\r\n    font-size: 22px;\r\n    color: #333;\r\n}\r\n\r\n.fa-chevron-up:hover {\r\n    color: gray;\r\n}\r\n\r\n#map {\r\n    /* width: 90%; */\r\n    height: 600px;\r\n    margin: auto;\r\n    border: 7px solid #fff;\r\n    background: #fff;\r\n}\r\n\r\n.info {\r\n    position: relative;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    color: #333;\r\n    margin-bottom: 5px;\r\n    font-size: 14px;\r\n}\r\n\r\n.website {\r\n    font-family: 'Satisfy';\r\n}\r\n\r\n.gallary {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 300px;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n}\r\n\r\n.sm-img {\r\n    width: 90px;\r\n    height: 70px;\r\n    padding: 0 4px 4px 0;\r\n}\r\n\r\n.col-md-3, .col-sm-6 {\r\n    margin-bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"\">\n    <div class=\"container\">\n        <h1>Á Châu Catering</h1>\n        <h3 class=\"website\">www.AChauCatering.com</h3>\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-6\">\n                <h4>Liên hệ</h4>\n                <ul>\n                    <li>\n                        <i class=\"fa fa-address-book\"></i> số 54-56, đường 44, quận Hoà Phú, Thủ Dầu Một, Bình Dương</li>\n                    <li>\n                        <i class=\"fa fa-phone\"></i> 0901.47.40.48</li>\n                    <li>\n                        <i class=\"fa fa-envelope\"></i> tinhnq@achaucatering.com</li>\n                    <li>\n                        <i class=\"fa fa-tv\"></i> www.achaucatering.com</li>\n                </ul>\n            </div>\n            <!-- <p class=\"mt-5\">Tel: 0901.47.40.48 | Email: </p> -->\n\n            <div class=\"col-md-3 col-sm-6\">\n                <h4>Các Dịch Vụ</h4>\n                <ul>\n                    <li>Quầy dịch vụ</li>\n                    <li>Suất ăn công nghiệp</li>\n                    <li>Chuỗi nhà thuốc</li>\n                    <li>Tổ chức sự kiện</li>\n                </ul>\n            </div>\n\n            <div class=\"col-md-3 col-sm-6\">\n                <h4>Mạng xã hội</h4>\n                <ul>\n                    <li>Facebook</li>\n                    <li>Zalo</li>\n                    <li>Instagram</li>\n                </ul>\n            </div>\n\n            <div class=\"col-md-3 col-sm-6\">\n                <h4>Gallary</h4>\n                <div class=\"gallary\">\n                    <img class=\"sm-img\" src=\"../../../assets/img/gallary/anh1.jpg\">\n                    <img class=\"sm-img\" src=\"../../../assets/img/gallary/anh2.jpg\">\n                    <img class=\"sm-img\" src=\"../../../assets/img/gallary/anh3.jpg\">\n                    <img class=\"sm-img\" src=\"../../../assets/img/gallary/anh4.jpg\">\n                    <img class=\"sm-img\" src=\"../../../assets/img/gallary/anh5.jpg\">\n                    <img class=\"sm-img\" src=\"../../../assets/img/gallary/anh5.jpg\">\n                </div>\n            </div>\n        </div>\n\n        <!-- <div class=\"info\"> -->\n        <!-- <h3 class=\"mt-4\">\n                <a href=\"#\"><i class=\"fa fa-facebook mr-2\"></i></a>\n                <a href=\"\"><i class=\"fa fa-instagram mr-5\"></i></a> Á Châu Catering\n            </h3>\n    \n            <p>Tel: 0901.47.40.48 | Email:tinhnq@achaucatering.com</p> -->\n\n        <!-- <div class=\"back-to-top\">\n                <a href=\"#\"><i class=\"fa fa-chevron-up\"></i><p class=\"mt-1 mb-5\">Back to Top</p></a>\n            </div> -->\n        <!-- </div> -->\n\n        <div id=\"map\"></div>\n    </div>\n\n    <!-- <div class=\"suat-an\"></div> -->\n    <!-- <img class=\"suat-an\" src=\"../../../assets/footer-suatan.png\" alt=\"suat an\"> -->\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gioi-thieu {\r\n    /* display: flex;\r\n    flex-flow: row wrap; */\r\n}\r\n\r\n.gioi-thieu h2 {\r\n    font-family: 'Lobster';\r\n    text-align: center;\r\n    font-size: 45px;\r\n    color: white;\r\n}\r\n\r\n.gioi-thieu p {\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n}\r\n\r\n.ss::first-letter{\r\n    color: white;\r\n    font-size: 25px;\r\n}\r\n\r\n.left {\r\n    height: 560px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/a-chau-food.jpg") + ") center center;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n.right {\r\n    padding-top: 100px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/wood_1.png") + ");\r\n    color: #a99c92;\r\n}\r\n\r\n.col-lg-6 {\r\n    padding-right: 0;\r\n}\r\n\r\n.the-border-bottom {\r\n    width: 60px;\r\n    height: 8px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    border-top: 2px solid white;\r\n    border-bottom: 2px solid white;\r\n}\r\n.info {\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n\r\n.row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row gioi-thieu\">\n  <div class=\"col-lg-6 left\">\n  </div>\n  <div class=\"col-lg-6 right introduce-company\">\n    <h2>Á Châu Catering</h2>\n    <div class=\"the-border-bottom\">\n    </div>\n    <div class=\"info\">\n      <p class=\"ss\">Á Châu Catering chuyên cung cấp Suất ăn công nghiệp tại TPHCM cho các nhà máy, xí nghiệp, các sự kiện, với nhiều năm hoạt động trong ngành. chúng tôi tự hào với đội ngũ nhân viên làm việc chuyên nghiệp, công hiến hết mình để được sự hài lòng của khách hàng.</p>\n\n      <p class=\"mt-5\">Tel: 0901.47.40.48 | Email: tinhnq@achaucatering.com</p>\n\n    </div>\n\n    <!-- Với mục tiêu chất lượng dịch vụ lên hàng đầu -->\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GioiThieu1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GioiThieu1Component = (function () {
    function GioiThieu1Component() {
    }
    GioiThieu1Component.prototype.ngOnInit = function () {
    };
    return GioiThieu1Component;
}());
GioiThieu1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-gioi-thieu1',
        template: __webpack_require__("../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gioi-thieu1/gioi-thieu1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GioiThieu1Component);

//# sourceMappingURL=gioi-thieu1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu2/gioi-thieu2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Cac dich vu*/\r\n.gioi-thieu-2 {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/gioi-thieu2.jpg") + ") no-repeat center center;\r\n    background-size: cover;\r\n    padding: 100px 0;\r\n}\r\n.card {\r\n    width: 70%;\r\n}\r\n.gioi-thieu-2 h2, .gioi-thieu-2 h4, .gioi-thieu-2 h6 {\r\n    font-family: 'Lobster';\r\n    text-align: center;\r\n}\r\n\r\n.gioi-thieu-2 h2 {\r\n    font-size: 45px;\r\n}\r\n\r\n.the-border-bottom {\r\n    width: 60px;\r\n    height: 8px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n    border-top: 2px solid #333;\r\n    border-bottom: 2px solid #333;\r\n}\r\n\r\n.card-footer {\r\n    border: none;\r\n    text-align: center;\r\n}\r\n.xem-menu {\r\n    background: white;\r\n    border: 2px solid #333;\r\n    color: #333;\r\n    transition: 0.3s ease-in;\r\n}\r\n\r\n.xem-menu:hover {\r\n    background: #333;\r\n    color: white;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu2/gioi-thieu2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gioi-thieu-2\">\n  <!-- <div class=\"the suat-an\">\n    <h2 class=\"mt-1\">Các Món Ăn Trong Menu</h2>\n    <h4>A Sneak Peak of the <br>New Spring Menu</h4>\n    <div class=\"the-border-bottom\"></div>\n    <p>Cung cấp quầy dịch vụ bán nước, bánh, đồ ăn nhẹ</p>\n    <p>Peas with Mint and Rose Petals</p>\n    <p>Grilled Corn with Herb Butter</p>\n    <p>Falafel-Spiced Tomatoes on Whole Wheat Flatbread</p>\n    <p>Primavera Risotto</p>\n    <p>Farmer’s Market Quinoa Salad</p>\n    <p>Sparkling Wine with Ginger Ale and Cherries</p>\n    <a class=\"btn btn-info xem-menu mt-4\" href=\"#\">Xem Menu</a>\n  </div> -->\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h2 class=\"card-title\">Các Món Ăn Trong Menu</h2>\n      <h6 class=\"card-subtitle mb-2 text-muted\">A Sneak Peak of the New Spring Menu</h6>\n      <div class=\"the-border-bottom\"></div>\n      <p class=\"card-text\">Cung cấp quầy dịch vụ bán nước, bánh, đồ ăn nhẹ. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut asperiores exercitationem optio adipisci consequuntur commodi sed! Quia dolor accusantium corporis quod recusandae ipsum beatae ipsa unde illo, nisi aspernatur nemo.</p>\n    </div>\n    <div class=\"card-footer bg-transparent mb-2\">\n      <a class=\"btn btn-info xem-menu\" href=\"#\">Xem Menu</a>\n    </div>\n  </div>\n</div> \n\n"

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu2/gioi-thieu2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GioiThieu2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GioiThieu2Component = (function () {
    function GioiThieu2Component() {
    }
    GioiThieu2Component.prototype.ngOnInit = function () {
    };
    return GioiThieu2Component;
}());
GioiThieu2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-gioi-thieu2',
        template: __webpack_require__("../../../../../src/app/components/gioi-thieu2/gioi-thieu2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gioi-thieu2/gioi-thieu2.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GioiThieu2Component);

//# sourceMappingURL=gioi-thieu2.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu3/gioi-thieu3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .gioi-thieu3 {\r\n    background: rgb(250, 248, 248);\r\n    background: url(\"../../../assets/gioi-thieu6.jpg\");\r\n    background-size: cover;\r\n    height: 480px;\r\n} */\r\n\r\n.bcg-parallax {\r\n    padding: 200px 0;\r\n    color: #fff;\r\n    background-color: #000;\r\n    position: relative;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.bcg {\r\n    background: url(" + __webpack_require__("../../../../../src/assets/gioi-thieu6.jpg") + ") no-repeat center center;\r\n    background-size: cover;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 140%;\r\n    top: 0;\r\n    z-index: 1;\r\n    opacity: 0.7;\r\n}\r\n\r\n.content-wrapper {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    max-width: 1140px;\r\n    position: relative;\r\n    z-index: 2;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu3/gioi-thieu3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bcg-parallax\">\n    <div class=\"bcg\"></div>\n    <div class=\"content-wrapper\">\n        <h1>Section With Paralax Effect</h1>\n        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, corporis, blanditiis explicabo.</p>\n      </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/gioi-thieu3/gioi-thieu3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GioiThieu3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GioiThieu3Component = (function () {
    function GioiThieu3Component() {
    }
    GioiThieu3Component.prototype.ngOnInit = function () {
    };
    return GioiThieu3Component;
}());
GioiThieu3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-gioi-thieu3',
        template: __webpack_require__("../../../../../src/app/components/gioi-thieu3/gioi-thieu3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/gioi-thieu3/gioi-thieu3.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GioiThieu3Component);

//# sourceMappingURL=gioi-thieu3.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/head-video1/head-video1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/head-video1/head-video1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  head-video1 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/head-video1/head-video1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadVideo1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadVideo1Component = (function () {
    function HeadVideo1Component() {
    }
    HeadVideo1Component.prototype.ngOnInit = function () {
    };
    return HeadVideo1Component;
}());
HeadVideo1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-head-video1',
        template: __webpack_require__("../../../../../src/app/components/head-video1/head-video1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/head-video1/head-video1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeadVideo1Component);

//# sourceMappingURL=head-video1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header1/header1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cantin-1 {\r\n    height: 400px;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/hoa-qua-1.jpg") + ") no-repeat center center;\r\n    background-size: cover;\r\n    color: white;\r\n    text-align: center;\r\n    padding-top: 60px;\r\n}\r\n\r\n.cantin-1 h1 {\r\n    width: 600px;\r\n    margin: auto;\r\n    line-height: 49px;\r\n    /* font-family: 'lobster'; */\r\n}\r\n\r\n.cantin-1 .border-bottom {\r\n    width: 60px;\r\n    height: 8px;\r\n    margin: auto;\r\n    border-top: 2px solid white;\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header1/header1.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav1></app-nav1>\n<div class=\"cantin cantin-1\">\n  <h1 class=\"display-5\">LUÔN SỬ DỤNG SẢN PHẨM TƯƠI SẠCH VÀ CHẤT LƯỢNG</h1>\n  <div class=\"border-bottom mt-4\"></div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/header1/header1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Header1Component = (function () {
    function Header1Component() {
    }
    Header1Component.prototype.ngOnInit = function () {
    };
    return Header1Component;
}());
Header1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header1',
        template: __webpack_require__("../../../../../src/app/components/header1/header1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header1/header1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Header1Component);

//# sourceMappingURL=header1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/healthy-food/healthy-food.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".healthy-food {\r\n    padding: 50px 0 0px 0;\r\n    background: rgb(250, 248, 248);\r\n}\r\n\r\n.healthy-food h1 {\r\n    text-align: center;\r\n    font-family: 'Lobster';\r\n}\r\n\r\n.healthy-food h3{\r\n    font-family: 'Lobster';\r\n}\r\n\r\n.healthy-food .anh1 {\r\n    \r\n}\r\n\r\n.row {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n\r\n.anh1 {\r\n    width: 650px;\r\n    margin-left:-100px;\r\n}\r\n\r\n.info {\r\n    text-align: center;\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.info img {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.center {\r\n    position: relative;\r\n}\r\n\r\n.center-info {\r\n    position: absolute;\r\n    top: 225px;\r\n    left: 185px;\r\n    text-align: center;\r\n    font-size: 40px;\r\n    color: #60B457;\r\n    text-shadow: 1px 1px 3px lightgray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/healthy-food/healthy-food.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"healthy-food\">\n  <h1>Chất Lượng Là Sự Quan Tâm Hàng Đầu</h1>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <div class=\"info\">\n        <img src=\"../../../assets/icon1.png\" alt=\"natural\">\n        <h3>100% nguyên liệu sạch</h3>\n        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est nemo eveniet architecto aliquid vitae.</p>\n      </div>\n\n      <div class=\"info\">\n        <img src=\"../../../assets/icon2.png\" alt=\"natural\">\n        <h3>Thực phẩm tươi sống</h3>\n        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est nemo eveniet architecto aliquid vitae.</p>\n      </div>\n\n    </div>\n    <div class=\"col-md-4 center\">\n      <img class=\"anh1\" src=\"../../../assets/healthy-food.png\" alt=\"healthy food\" width=\"110%\">\n      <h3 class=\"center-info\">Ngon <br>Bổ - Rẻ <br>An toàn</h3>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"info\">\n        <img src=\"../../../assets/icon4.png\" alt=\"natural\">\n        <h3>Có nguồn gốc rõ ràng</h3>\n        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est nemo eveniet architecto aliquid vitae.</p>\n      </div>\n\n      <div class=\"info\">\n        <img src=\"../../../assets/icon3.png\" alt=\"natural\">\n        <h3>Chất lượng tốt nhất</h3>\n        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus est nemo eveniet architecto aliquid vitae.</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/healthy-food/healthy-food.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthyFoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HealthyFoodComponent = (function () {
    function HealthyFoodComponent() {
    }
    HealthyFoodComponent.prototype.ngOnInit = function () {
    };
    return HealthyFoodComponent;
}());
HealthyFoodComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-healthy-food',
        template: __webpack_require__("../../../../../src/app/components/healthy-food/healthy-food.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/healthy-food/healthy-food.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HealthyFoodComponent);

//# sourceMappingURL=healthy-food.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/map1/map1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/map1/map1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  map1 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/map1/map1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Map1Component = (function () {
    function Map1Component() {
    }
    Map1Component.prototype.ngOnInit = function () {
    };
    return Map1Component;
}());
Map1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-map1',
        template: __webpack_require__("../../../../../src/app/components/map1/map1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/map1/map1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Map1Component);

//# sourceMappingURL=map1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav1/nav1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nnav {\r\n\t/* height: 90px; */\r\n\tfont-family: 'Roboto'; \r\n\tbackground-color: white;\r\n}\r\n.navbar-brand {\r\n\twidth: 20%;\r\n}\r\n.navbar-brand img {\r\n\twidth: 100%;\r\n\t/* height: 50%; */\r\n}\r\n.navbar-toggler-icon {\r\n\tcolor: white !important;\r\n}\r\n\r\n.nav-link {\r\n\tfont-weight: 500;\r\n}\r\n\r\n.nav-link:hover {\r\n}\r\n\r\n.social-icon i {\r\n\tfont-size: 20px;\r\n\tcolor: lightgray;\r\n}\r\n\r\n.social-icon i:hover {\r\n\tcolor: gray;\r\n}\r\n\r\n@media only screen and (max-width: 760px) {\r\n\tnav {\r\n\t\theight: auto;\r\n\t}\r\n}\r\n\r\n.active {\r\n\t/* background: #136C37;\r\n\tcolor: white !important; */\r\n}\r\n\r\n.nav-link {\r\n\ttransition: 0.1s ease-in;\r\n\tmargin-right: 2px;\r\n\tfont-weight: bold;\r\n}\r\n\r\n.nav-link:hover {\r\n\tbackground: #3CAF6A;\r\n\tcolor: white !important;\r\n\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav1/nav1.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light\">\n\t<a class=\"navbar-brand\" href=\"#\"><img src=\"../../../assets/logo_cantin.gif\" alt=\"\"></a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav1\" aria-controls=\"nav1\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse ml-3\" id=\"nav1\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Trang chủ</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Quầy dịch vụ</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Suất ăn</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Chuỗi nhà thuốc</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Liên hệ</a>\n      </li>\n    </ul>\n\n    <div class=\"social-icon\">\n    \t<a href=\"#\"><i class=\"fa fa-facebook mr-2\"></i></a>\n    \t<a href=\"\"><i class=\"fa fa-instagram\"></i></a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/nav1/nav1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nav1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Nav1Component = (function () {
    function Nav1Component() {
    }
    Nav1Component.prototype.ngOnInit = function () {
    };
    return Nav1Component;
}());
Nav1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav1',
        template: __webpack_require__("../../../../../src/app/components/nav1/nav1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav1/nav1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Nav1Component);

//# sourceMappingURL=nav1.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/slider1/slider1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slider {\r\n    padding: 50px 0 50px 0;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/gioi-thieu6.jpg") + ");\r\n    background-size: cover;\r\n}\r\n\r\n.slider h1 {\r\n    font-family: 'Lobster';\r\n}\r\n\r\n.carousel {\r\n    background: rgba(255, 255, 255, 0.8);\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n\r\n.slider-info {\r\n    text-align: center;\r\n}\r\n\r\n.xem-them {\r\n    text-decoration: none;\r\n    background: white;\r\n    border: 2px solid #333;\r\n    border-radius: 4px;\r\n    color: #333;\r\n    transition: 0.3s ease-in;\r\n    padding: 5px;\r\n}\r\n\r\n.xem-them:hover {\r\n    background: #333;\r\n    color: white !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slider1/slider1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider\">\n  <div class=\"container\">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide p-4\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src=\"../../../assets/slider/slider1.jpg\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../../../assets/slider/slider2.jpg\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../../../assets/slider/slider3.jpg\" alt=\"Third slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../../../assets/slider/slider4.jpg\" alt=\"Third slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../../../assets/slider/slider5.jpg\" alt=\"Third slide\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    <div class=\"slider-info mt-3\">\n      <h1>Business Casual</h1>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere dicta consequuntur consectetur Incidunt ut quis odit doloremque voluptates fugiat molestias dicta. </p>\n\n    </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/slider1/slider1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Slider1Component = (function () {
    function Slider1Component() {
    }
    Slider1Component.prototype.ngOnInit = function () {
    };
    return Slider1Component;
}());
Slider1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-slider1',
        template: __webpack_require__("../../../../../src/app/components/slider1/slider1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/slider1/slider1.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Slider1Component);

//# sourceMappingURL=slider1.component.js.map

/***/ }),

/***/ "../../../../../src/assets/a-chau-food.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a-chau-food.54ae61ac139566d6592a.jpg";

/***/ }),

/***/ "../../../../../src/assets/gioi-thieu2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gioi-thieu2.05b72f28fc1ca2cb4003.jpg";

/***/ }),

/***/ "../../../../../src/assets/gioi-thieu6.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gioi-thieu6.8d44ba6b5838e6e7d566.jpg";

/***/ }),

/***/ "../../../../../src/assets/gioi-thieu7.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "gioi-thieu7.36bf2964de2a6cd5c876.jpg";

/***/ }),

/***/ "../../../../../src/assets/hoa-qua-1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hoa-qua-1.9ba034c95f4690b5247c.jpg";

/***/ }),

/***/ "../../../../../src/assets/wood_1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "wood_1.6d4a7c482a4d03d18017.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map