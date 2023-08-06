(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Alpha Century\Coding World\Workspaces\Forntend\angular-entertainment\src\main.ts */"zUnb");


/***/ }),

/***/ "348/":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _movies_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies/dialog/dialog.component */ "9NnM");
/* harmony import */ var _movies_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies/movies.service */ "Y/1c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");






class MoviesComponent {
    constructor(movieService, dialog) {
        this.movieService = movieService;
        this.dialog = dialog;
        this.toggle = "false";
    }
    ngOnInit() {
        this.getMovies();
    }
    openDialog() {
        this.dialog.open(_movies_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]);
    }
    flag() {
        this.toggle = "true";
    }
    getMovies() {
        this.movieService.getMovies()
            .subscribe((data) => {
            this.movies = data;
        });
    }
}
MoviesComponent.ɵfac = function MoviesComponent_Factory(t) { return new (t || MoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
MoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoviesComponent, selectors: [["app-movies"]], decls: 4, vars: 0, consts: [[1, "mat-elevation-z4"], [2, "margin-top", "46px"]], template: function MoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Coming soon!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: [".mat-card[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    height: 30%;\r\n    display: block;\r\n    margin-left:auto;\r\n    margin-right:auto;  \r\n    vertical-align:middle;\r\n    text-align: center;\r\n    margin-top: 75px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7S0FlSzs7RUFFSDtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibW92aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubW92aWUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxuICBcclxuLm1vdmllLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcclxuICAgIGJhY2tncm91bmQ6IGNvcm5zaWxrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xyXG4gIH0gKi9cclxuXHJcbiAgLm1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87ICBcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movies',
                templateUrl: './movies.component.html',
                styleUrls: ['./movies.component.css']
            }]
    }], function () { return [{ type: _movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "9NnM":
/*!***************************************************!*\
  !*** ./src/app/movies/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class DialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 6, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Here you can find the ratings of movies and series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Okk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9nqU":
/*!******************************************!*\
  !*** ./src/app/anime/anime.component.ts ***!
  \******************************************/
/*! exports provided: AnimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimeComponent", function() { return AnimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");



class AnimeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AnimeComponent.ɵfac = function AnimeComponent_Factory(t) { return new (t || AnimeComponent)(); };
AnimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnimeComponent, selectors: [["app-anime"]], decls: 4, vars: 0, consts: [[1, "mat-elevation-z4"], [2, "margin-top", "46px"]], template: function AnimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Coming soon!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".mat-card[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    height: 30%;\r\n    display: block;\r\n    margin-left:auto;\r\n    margin-right:auto;  \r\n    vertical-align:middle;\r\n    text-align: center;\r\n    margin-top: 75px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFuaW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmR7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bzsgIFxyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNzVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-anime',
                templateUrl: './anime.component.html',
                styleUrls: ['./anime.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "fECr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "fp1T");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");










function HomeComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", page_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleCentered", true)("matRippleDisabled", false)("matRippleUnbounded", false)("matRippleRadius", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx_r2.baseUrl + page_r3.value.substring(1), ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_div_2_Template, 5, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.pages));
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(router) {
        this.router = router;
        this.pages = new Map();
        this.baseUrl = "assets/home/";
    }
    ngOnInit() {
        this.pages.set("brush", "/art");
        this.pages.set("live_tv", "/entertainment");
        this.pages.set("games", "/gaming");
        this.pages.set("face", "/anime");
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.currentUrl = event.url;
            }
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 3, consts: [[1, "container"], [3, "currentUrl"], ["class", "content", 4, "ngIf"], [1, "content"], ["fxLayout", "row wrap"], ["fxFlex", "50%", "fxFlex.xs", "100%", "fxFlex.sm", "50%", 4, "ngFor", "ngForOf"], ["fxFlex", "50%", "fxFlex.xs", "100%", "fxFlex.sm", "50%"], [2, "transform", "scale3d(0.8,0.8,0.8)"], ["routerLinkActive", "active", "matRipple", "", 1, "custom-card", "mat-elevation-z4", 3, "routerLink", "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "matRippleRadius"], [1, "rippleHover"], ["mat-card-image", "", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentUrl", ctx.currentUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUrl == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUrl != "/");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: [".container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  .content[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    flex-shrink: 1;\r\n    flex-grow: 1;\r\n    \r\n    overflow-y: auto;\r\n  }\r\n  .art[_ngcontent-%COMP%]{\r\n    color: rgb(0, 0, 0);\r\n    }\r\n  .game[_ngcontent-%COMP%]{\r\n        color: rgb(0, 0, 0);\r\n    }\r\n  .movie[_ngcontent-%COMP%]{\r\n        color: rgb(0, 0, 0);\r\n    }\r\n  .anime[_ngcontent-%COMP%]{\r\n        color: rgb(0, 0, 0);\r\n    }\r\n  .custom-card[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  padding: 16px -1px;\r\n cursor: pointer;\r\n -webkit-user-select: none;\r\n         user-select: none;\r\n \r\n}\r\n  .customIcon[_ngcontent-%COMP%]{\r\n    \r\n    color: rgb(255, 255, 255);\r\n    \r\n     \r\n  }\r\n  .rippleHover[_ngcontent-%COMP%]:hover   .mat-card-image[_ngcontent-%COMP%]{\r\n    \r\n    transform: scale(1.2);\r\n  }\r\n  .mat-card-image[_ngcontent-%COMP%]{\r\n    margin-bottom: -21px;\r\n    transition: .8s ease;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZOztJQUVaLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CO0VBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7RUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtFQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0VBRUg7RUFDQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0NBQ25CLGVBQWU7Q0FDZix5QkFBaUI7U0FBakIsaUJBQWlCOztBQUVsQjtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBcUI7O0VBRXZCO0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0VBQ3RCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuIFxyXG4gIC5hcnR7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgLmdhbWV7XHJcbiAgICAgICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIC5tb3ZpZXtcclxuICAgICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgLmFuaW1le1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gLmN1c3RvbS1jYXJke1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDE2cHggLTFweDtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxuIHVzZXItc2VsZWN0OiBub25lO1xyXG4gXHJcbn1cclxuICAuY3VzdG9tSWNvbntcclxuICAgIC8qIGZvbnQtc2l6ZTogMjEwcHg7ICovXHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xyXG4gICAgIFxyXG4gIH1cclxuXHJcbiAgLnJpcHBsZUhvdmVyOmhvdmVyIC5tYXQtY2FyZC1pbWFnZXtcclxuICAgIC8qIG9wYWNpdHk6IDAuNTsgKi9cclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9XHJcbiAgLm1hdC1jYXJkLWltYWdle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "DPwC":
/*!********************************************************************!*\
  !*** ./src/app/art-gallery/art-category/art-category.component.ts ***!
  \********************************************************************/
/*! exports provided: ArtCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtCategoryComponent", function() { return ArtCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _art_dialog_art_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./art-dialog/art-dialog.component */ "zvdB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");









function ArtCategoryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtCategoryComponent_div_1_Template_mat_card_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const url_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openDialog(url_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleCentered", true)("matRippleDisabled", false)("matRippleUnbounded", false)("matRippleRadius", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", url_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ArtCategoryComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.currentImageUrl = [];
        this.artMap = new Map();
        this.automobileUrl = ["assets/car/car1.jpg", "assets/car/car2.jpg", "assets/car/car3.jpg",
            "assets/car/car4.jpg", "assets/car/car5.jpg"];
        this.caricaturesUrl = ["assets/caricatures/pup.jpg", "assets/caricatures/vote.jpg"];
        this.doodlesUrl = ["assets/doodles/do1.jpg", "assets/doodles/do2.jpg", "assets/doodles/do3.jpg"];
        this.portraitsUrl = ["assets/portraits/colorGirl.jpg", "assets/portraits/colorGirl1.jpg",
            "assets/portraits/colorGirl2.jpg", "assets/portraits/an1.jpg", "assets/portraits/dt1.jpg", "assets/portraits/dt2.jpg",
            "assets/portraits/dt3.jpg", "assets/portraits/dt4.jpg", "assets/portraits/dt5.jpg", "assets/portraits/hr1.jpg",
            "assets/portraits/hr2.jpg", "assets/portraits/ks.jpg", "assets/portraits/ni3.jpg", "assets/portraits/pa1.jpg",
            "assets/portraits/pa2.jpg", "assets/portraits/pa3.jpg", "assets/portraits/pa4.jpg", "assets/portraits/sj1.jpg",
            "assets/portraits/sredited.jpg", "assets/portraits/tr1.jpg", "assets/portraits/tr2.jpg", "assets/portraits/um1.jpg",
            "assets/portraits/um2.jpg", "assets/portraits/um3.jpg"];
        this.postersUrl = ["assets/posters/go1.jpg", "assets/posters/go2.jpg", "assets/posters/go3.jpg",
            "assets/posters/ra1.jpg", "assets/posters/raees.jpg"];
        this.abstractUrl = ["assets/random/juari.jpg", "assets/random/love.jpg", "assets/random/ma1.jpg",
            "assets/random/ma2.jpg", "assets/random/pa1.jpg", "assets/random/tower.jpg"];
        this.currentRoute = router.url.split('/')[2];
    }
    ngOnInit() {
        this.artMap.set("automobileUrl", this.automobileUrl);
        this.artMap.set("postersUrl", this.postersUrl);
        this.artMap.set("portraitsUrl", this.portraitsUrl);
        this.artMap.set("caricaturesUrl", this.caricaturesUrl);
        this.artMap.set("doodlesUrl", this.doodlesUrl);
        this.artMap.set("abstractUrl", this.abstractUrl);
        for (var key of this.artMap) {
            if (key[0].startsWith(this.currentRoute)) {
                this.currentImageUrl = key[1];
            }
        }
    }
    openDialog(currentUrl) {
        const dialogRef = this.dialog.open(_art_dialog_art_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ArtDialogComponent"], {
            data: { url: currentUrl }
        });
    }
}
ArtCategoryComponent.ɵfac = function ArtCategoryComponent_Factory(t) { return new (t || ArtCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
ArtCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtCategoryComponent, selectors: [["app-art-category"]], decls: 2, vars: 1, consts: [["fxLayout", "row wrap", 1, "content"], ["fxFlex", "33.3%", "fxFlex.xs", "100%", "fxFlex.sm", "50%", 4, "ngFor", "ngForOf"], ["fxFlex", "33.3%", "fxFlex.xs", "100%", "fxFlex.sm", "50%"], [2, "transform", "scale3d(0.8,0.8,0.8)"], ["matRipple", "", 1, "custom-card", "rippleHover", "mat-elevation-z4", 3, "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "matRippleRadius", "click"], [1, "rippleHover1"], ["mat-card-image", "", 3, "src"]], template: function ArtCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtCategoryComponent_div_1_Template, 5, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentImageUrl);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRipple"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"]], styles: [".custom-card[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  padding: 16px -1px;\r\n cursor: pointer;\r\n -webkit-user-select: none;\r\n         user-select: none;\r\n \r\n}\r\n.rippleHover1[_ngcontent-%COMP%]:hover   .mat-card-image[_ngcontent-%COMP%]{\r\n  transform: scale(1.2);\r\n \r\n \r\n}\r\n.mat-card-image[_ngcontent-%COMP%]{\r\n  margin-bottom: -21px;\r\n  transition: .8s ease;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1jYXRlZ29yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIsZUFBZTtDQUNmLHlCQUFpQjtTQUFqQixpQkFBaUI7O0FBRWxCO0FBQ0E7RUFDRSxxQkFBcUI7OztBQUd2QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJhcnQtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY3VzdG9tLWNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTZweCAtMXB4O1xyXG4gY3Vyc29yOiBwb2ludGVyO1xyXG4gdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiBcclxufVxyXG4ucmlwcGxlSG92ZXIxOmhvdmVyIC5tYXQtY2FyZC1pbWFnZXtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiBcclxuIFxyXG59XHJcbi5tYXQtY2FyZC1pbWFnZXtcclxuICBtYXJnaW4tYm90dG9tOiAtMjFweDtcclxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-art-category',
                templateUrl: './art-category.component.html',
                styleUrls: ['./art-category.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "KBEM":
/*!********************************************!*\
  !*** ./src/app/gaming/gaming.component.ts ***!
  \********************************************/
/*! exports provided: GamingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamingComponent", function() { return GamingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");





class GamingComponent {
    constructor(breakpointObserver) {
        this.isMobileLandscape = true;
        this.urls = new Map();
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait
        ]).subscribe(result => {
            this.isMobilePortrait = result.matches;
        });
        breakpointObserver.observe([
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape
        ]).subscribe(result => {
            this.isMobileLandscape = result.matches;
        });
    }
    ngOnInit() {
    }
}
GamingComponent.ɵfac = function GamingComponent_Factory(t) { return new (t || GamingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
GamingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamingComponent, selectors: [["app-gaming"]], decls: 19, vars: 1, consts: [[3, "cols"], ["width", "95%", "height", "70%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/QT56uIjvfjg")], ["width", "95%", "height", "70%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/e2WLZBlkzoA")], ["width", "95%", "height", "70%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/7N7qOF1JnNU")], ["width", "95%", "height", "70%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/xg-TL1PYIIM")], ["width", "95%", "height", "70%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/i6beOjIxgIk")], ["width", "95%", "height", "70%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/PiGjSX8T1ms")], ["width", "95%", "height", "70%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/457bxNIhZcI")], ["width", "95%", "height", "70%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/gyZCkbhMkk8")], ["width", "95%", "height", "70%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/g0qYO1gy_MQ")]], template: function GamingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "iframe", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "iframe", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "iframe", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.isMobilePortrait ? 1 : ctx.isMobileLandscape ? 2 : 2);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1pbmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gaming',
                templateUrl: './gaming.component.html',
                styleUrls: ['./gaming.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");



class AppComponent {
    constructor() {
        this.title = 'angular-entertainment';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
    } }, directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBNEVJIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnN3LXNpZGVuYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODgsIDg5LCA5MCk7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbmdzb25nO1xyXG59XHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45NzkpO1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gIH1cclxuLm1hdC1pY29ue1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG4uaGVhZGVydGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9ue1xyXG4gICAgbWluLXdpZHRoOiA1MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY3cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxufVxyXG4uaG9tZWljb257XHJcbiAgICBtYXJnaW4tbGVmdDogLThweDtcclxufVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgYm90dG9tOiAwO1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGhlaWdodDogNDVweDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICBtYXJnaW46IDBweDtcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gIH1cclxuICAuZm9vdGVydGl0bGV7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbmdzb25nO1xyXG59XHJcblxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuY29udGVudHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMS5qcGcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDgyJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDk5JTtcclxuICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG4gICAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TR+H":
/*!******************************************************!*\
  !*** ./src/app/art-gallery/art-gallery.component.ts ***!
  \******************************************************/
/*! exports provided: ArtGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtGalleryComponent", function() { return ArtGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function ArtGalleryComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", page_r3.key.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleCentered", true)("matRippleDisabled", false)("matRippleUnbounded", false)("matRippleRadius", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r3.key);
} }
function ArtGalleryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ArtGalleryComponent_div_0_div_2_Template, 8, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.pages));
} }
function ArtGalleryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ArtGalleryComponent {
    constructor(router) {
        this.router = router;
        this.pages = new Map();
    }
    ngOnInit() {
        this.pages.set("Automobile", "directions_car");
        this.pages.set("Caricatures", "sentiment_satisfied_alt");
        this.pages.set("Doodles", "adb");
        this.pages.set("Portraits", "face");
        this.pages.set("Posters", "movie");
        this.pages.set("Abstract", "extension");
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.currentUrl = event.url;
            }
        });
    }
}
ArtGalleryComponent.ɵfac = function ArtGalleryComponent_Factory(t) { return new (t || ArtGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ArtGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtGalleryComponent, selectors: [["app-art-gallery"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["fxLayout", "row wrap", 1, "content"], ["fxFlex", "33.3%", "fxFlex.xs", "100%", "fxFlex.sm", "50%", 4, "ngFor", "ngForOf"], ["fxFlex", "33.3%", "fxFlex.xs", "100%", "fxFlex.sm", "50%"], [2, "transform", "scale3d(0.8,0.8,0.8)"], ["routerLinkActive", "active", "matRipple", "", 1, "custom-card", "rippleHover", "mat-elevation-z4", 3, "routerLink", "matRippleCentered", "matRippleDisabled", "matRippleUnbounded", "matRippleRadius"], [2, "color", "white", "font-size", "18px"]], template: function ArtGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ArtGalleryComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ArtGalleryComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUrl == null || ctx.currentUrl == "/art");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUrl != "/art");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: [".mat-icon[_ngcontent-%COMP%]{\r\n    font-size: 205px;\r\n    color: white;\r\n    transform: translateX(-90px);\r\n   \r\n}\r\n\r\n\r\n  .custom-card[_ngcontent-%COMP%]{\r\n      background-color: rgb(0, 0, 0);\r\n      opacity: 0.5;\r\n      text-align: center;\r\n      cursor: pointer;\r\n  }\r\n\r\n\r\n  .rippleHover[_ngcontent-%COMP%]:hover{\r\n    opacity: 0.7;\r\n    background-color: black;\r\n   \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydC1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw0QkFBNEI7O0FBRWhDOzs7RUFHRTtNQUNJLDhCQUE4QjtNQUM5QixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGVBQWU7RUFDbkI7OztFQUNBO0lBQ0UsWUFBWTtJQUNaLHVCQUF1Qjs7RUFFekIiLCJmaWxlIjoiYXJ0LWdhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWF0LWljb257XHJcbiAgICBmb250LXNpemU6IDIwNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05MHB4KTtcclxuICAgXHJcbn1cclxuXHJcblxyXG4gIC5jdXN0b20tY2FyZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAucmlwcGxlSG92ZXI6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-art-gallery',
                templateUrl: './art-gallery.component.html',
                styleUrls: ['./art-gallery.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class ProfileComponent {
    constructor() {
        this.step = 0;
    }
    ngOnInit() {
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 28, vars: 1, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], [1, "example-card", "mat-elevation-z4"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "custom-card", "mat-elevation-z4"], ["href", "https://www.youtube.com/channel/UC9AxL4sncC1R4O8SysVdK8Q", 1, "fa", "fa-youtube"], ["href", "https://www.facebook.com/ARTarchives1/", 1, "fa", "fa-facebook"], ["href", "https://www.instagram.com/anamay_pandey11", 1, "fa", "fa-instagram"], ["mat-button", "", 1, "custombutton", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function ProfileComponent_Template_mat_expansion_panel_opened_1_listener() { return ctx.setStep(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Admin/Owner Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Anamay Pandey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Artist | Software Engineer | E-Gamer | Fitness Enthusiast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Social media handles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Connect to explore!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-action-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_26_listener() { return ctx.nextStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", ctx.step === 0);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\r\n  flex-basis: 0;\r\n  color: white;\r\n}\r\n.example-header-image[_ngcontent-%COMP%] {\r\n  background-image: url(\"/assets/logo/logoJpg.jpg\");\r\n  background-size: cover;\r\n}\r\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]{\r\n   background: rgba(0, 0, 0, 0.6);\r\n}\r\n.mat-expansion-panel[_ngcontent-%COMP%]{\r\n  background: rgba(0, 0, 0, 0.2);\r\n  \r\n}\r\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n.fa[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n}\r\n.fa[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  font-size: 30px;\r\n  width: 30px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  margin: 5px 2px;\r\n  border-radius: 50%;\r\n}\r\n.fa-instagram[_ngcontent-%COMP%] {\r\n  background: #df2270;\r\n  color: white;\r\n}\r\n.fa-youtube[_ngcontent-%COMP%] {\r\n  background: #f70f0f;\r\n  color: white;\r\n}\r\n.fa-facebook[_ngcontent-%COMP%] {\r\n  background: #3B5998;\r\n  color: white;\r\n}\r\n.example-card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  margin-top: 17px;\r\n}\r\n.custombutton[_ngcontent-%COMP%]{\r\n  color: white;\r\n  background: rgba(0, 0, 0, 0.5);\r\n}\r\n.custom-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n}\r\n.custom-card[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.1);\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxpREFBaUQ7RUFDakQsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7R0FDRyw4QkFBOEI7QUFDakM7QUFDQTtFQUNFLDhCQUE4Qjs7QUFFaEM7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFHQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDhCQUE4Qjs7QUFFaEMiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbG9nby9sb2dvSnBnLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0gICAgXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntcclxuICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuLmZhOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuLmZhIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB3aWR0aDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbjogNXB4IDJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmZhLWluc3RhZ3JhbSB7XHJcbiAgYmFja2dyb3VuZDogI2RmMjI3MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mYS15b3V0dWJlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjcwZjBmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZmEtZmFjZWJvb2sge1xyXG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTdweDtcclxufVxyXG5cclxuXHJcbi5jdXN0b21idXR0b257XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4uY3VzdG9tLWNhcmQgIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmN1c3RvbS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Y/1c":
/*!******************************************!*\
  !*** ./src/app/movies/movies.service.ts ***!
  \******************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MoviesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://spring-boot-entertainment.herokuapp.com";
    }
    getMovies() {
        return this.http.get(this.baseUrl + "/movies");
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies/movies.component */ "348/");
/* harmony import */ var _movies_movies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.service */ "Y/1c");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _movies_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movies/dialog/dialog.component */ "9NnM");
/* harmony import */ var _art_gallery_art_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./art-gallery/art-gallery.component */ "TR+H");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _app_art_gallery_art_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/art-gallery/art-service.service */ "pWbN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _gaming_gaming_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gaming/gaming.component */ "KBEM");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _anime_anime_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./anime/anime.component */ "9nqU");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./art-gallery/art-category/art-category.component */ "DPwC");
/* harmony import */ var _art_gallery_art_category_art_dialog_art_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./art-gallery/art-category/art-dialog/art-dialog.component */ "zvdB");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");




































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _movies_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"],
        _app_art_gallery_art_service_service__WEBPACK_IMPORTED_MODULE_16__["ArtServiceService"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"],
        _movies_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"],
        _art_gallery_art_gallery_component__WEBPACK_IMPORTED_MODULE_13__["ArtGalleryComponent"],
        _gaming_gaming_component__WEBPACK_IMPORTED_MODULE_21__["GamingComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
        _anime_anime_component__WEBPACK_IMPORTED_MODULE_26__["AnimeComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
        _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_32__["ArtCategoryComponent"],
        _art_gallery_art_category_art_dialog_art_dialog_component__WEBPACK_IMPORTED_MODULE_33__["ArtDialogComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _movies_movies_component__WEBPACK_IMPORTED_MODULE_4__["MoviesComponent"],
                    _movies_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_12__["DialogComponent"],
                    _art_gallery_art_gallery_component__WEBPACK_IMPORTED_MODULE_13__["ArtGalleryComponent"],
                    _gaming_gaming_component__WEBPACK_IMPORTED_MODULE_21__["GamingComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_23__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
                    _anime_anime_component__WEBPACK_IMPORTED_MODULE_26__["AnimeComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
                    _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_32__["ArtCategoryComponent"],
                    _art_gallery_art_category_art_dialog_art_dialog_component__WEBPACK_IMPORTED_MODULE_33__["ArtDialogComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__["FlexLayoutModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatRippleModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__["MatExpansionModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipsModule"]
                ],
                providers: [
                    _movies_movies_service__WEBPACK_IMPORTED_MODULE_5__["MoviesService"],
                    _app_art_gallery_art_service_service__WEBPACK_IMPORTED_MODULE_16__["ArtServiceService"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HeaderComponent_div_42_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Art Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_42_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Movies & Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_42_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Anime Zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_42_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gaming Zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_42_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_42_a_1_Template, 3, 1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_42_a_2_Template, 3, 1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_42_a_3_Template, 3, 1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_42_a_4_Template, 3, 1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_42_a_5_Template, 3, 1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentUrl == "/art" || ctx_r1.currentUrl == "/art/automobile" || ctx_r1.currentUrl == "/art/caricatures" || ctx_r1.currentUrl == "/art/doodles" || ctx_r1.currentUrl == "/art/portraits" || ctx_r1.currentUrl == "/art/abstract" || ctx_r1.currentUrl == "/art/posters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentUrl == "/entertainment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentUrl == "/anime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentUrl == "/gaming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.currentUrl == "/profile");
} }
function HeaderComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "AP Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_66_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Art Gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_66_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Movies & Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_66_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Anime Zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_66_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gaming Zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_66_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
} }
function HeaderComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_66_a_1_Template, 3, 1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_66_a_2_Template, 3, 1, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_66_a_3_Template, 3, 1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_66_a_4_Template, 3, 1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_66_a_5_Template, 3, 1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUrl == "/art" || ctx_r3.currentUrl == "/art/automobile" || ctx_r3.currentUrl == "/art/caricatures" || ctx_r3.currentUrl == "/art/doodles" || ctx_r3.currentUrl == "/art/portraits" || ctx_r3.currentUrl == "/art/abstract" || ctx_r3.currentUrl == "/art/posters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUrl == "/entertainment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUrl == "/anime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUrl == "/gaming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.currentUrl == "/profile");
} }
function HeaderComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
} }
function HeaderComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
} }
class HeaderComponent {
    constructor() {
        this.pages = new Map();
    }
    ngOnInit() {
        this.pages.set("/art", "Art Gallery:Go to art gallery home page");
        this.pages.set("/gaming", "Game Zone:Go to gaming home page");
        this.pages.set("/entertainment", "Movies & Shows:Go to movies home page");
        this.pages.set("/anime", "Anime Zone:Go to anime home page");
        this.pages.set("/profile", "Profile:Go to profile home page");
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { currentUrl: "currentUrl" }, decls: 71, vars: 14, consts: [[1, "mat-elevation-z4"], [1, "rippleHover"], ["mat-icon-button", "", "matTooltip", "Click to get Menu panel", 3, "matTooltipPosition", "matMenuTriggerFor"], ["menu", "matMenu"], ["routerLink", "/", "routerLinkActive", "active", "mat-menu-item", ""], [1, "home"], ["routerLink", "/art", "routerLinkActive", "active", "mat-menu-item", ""], [1, "art"], ["routerLink", "/entertainment", "routerLinkActive", "active", "mat-menu-item", ""], [1, "movie"], ["routerLink", "/gaming", "routerLinkActive", "active", "mat-menu-item", ""], [1, "game"], ["routerLink", "/anime", "routerLinkActive", "active", "mat-menu-item", ""], [1, "anime"], ["routerLink", "/profile", "routerLinkActive", "active", "mat-menu-item", ""], [1, "profile"], ["fxShow", "true", "fxHide.lt-md", "true", 1, "rippleHover"], ["mat-button", "", "matTooltip", "App home page", "routerLink", "/", "routerLinkActive", "active", 2, "margin", "25px", 3, "matTooltipPosition"], [1, "headertitle"], ["fxShow", "true", "fxHide.lt-md", "true"], ["class", "rippleHover", 4, "ngIf"], [1, "home-spacer"], ["mat-button", "", "matTooltip", "Go to app home page", "routerLink", "/", "routerLinkActive", "active", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to app home page", "routerLink", "/art", "routerLinkActive", "active", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to app home page", "routerLink", "/entertainment", "routerLinkActive", "active", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to app home page", "routerLink", "/anime", "routerLinkActive", "active", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to app home page", "routerLink", "/gaming", "routerLinkActive", "active", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Admin's profile", "routerLink", "/profile", "routerLinkActive", "active", 3, "matTooltipPosition"], ["fxShow", "false", "fxHide.lt-md", "false"], [4, "ngIf"], ["mat-button", "", "style", "transform: translateX(420px);", "matTooltip", "Go to art gallery home page", "routerLink", "/art", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "style", "transform: translateX(420px);", "matTooltip", "Go to movies home page", "routerLink", "/entertainment", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "style", "transform: translateX(420px);", "matTooltip", "Go to anime home page", "routerLink", "/anime", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "style", "transform: translateX(420px);", "matTooltip", "Go to gaming home page", "routerLink", "/gaming", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "style", "transform: translateX(420px);", "matTooltip", "Go to profile home page", "routerLink", "/profile", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "matTooltip", "Go to art gallery home page", "routerLink", "/art", "routerLinkActive", "active", 2, "transform", "translateX(420px)", 3, "matTooltipPosition"], [1, "headertitle", "page"], ["mat-button", "", "matTooltip", "Go to movies home page", "routerLink", "/entertainment", "routerLinkActive", "active", 2, "transform", "translateX(420px)", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to anime home page", "routerLink", "/anime", "routerLinkActive", "active", 2, "transform", "translateX(420px)", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to gaming home page", "routerLink", "/gaming", "routerLinkActive", "active", 2, "transform", "translateX(420px)", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to profile home page", "routerLink", "/profile", "routerLinkActive", "active", 2, "transform", "translateX(420px)", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "App home page", "routerLink", "/", "routerLinkActive", "active", 2, "transform", "translateX(-91px)", 3, "matTooltipPosition"], [1, "mobile_header", 2, "color", "rgb(255, 255, 255)"], ["mat-button", "", "style", "transform: translateX(-91px);", "matTooltip", "Go to art gallery home page", "routerLink", "/art", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "style", "transform: translateX(-91px);", "matTooltip", "Go to movies home page", "routerLink", "/entertainment", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "style", "transform: translateX(-91px);", "matTooltip", "Go to anime home page", "routerLink", "/anime", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "style", "transform: translateX(-91px);", "matTooltip", "Go to gaming home page", "routerLink", "/gaming", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "style", "transform: translateX(-91px);", "matTooltip", "Go to profile home page", "routerLink", "/profile", "routerLinkActive", "active", 3, "matTooltipPosition", 4, "ngIf"], ["mat-button", "", "matTooltip", "Go to art gallery home page", "routerLink", "/art", "routerLinkActive", "active", 2, "transform", "translateX(-91px)", 3, "matTooltipPosition"], [1, "mobile_header"], ["mat-button", "", "matTooltip", "Go to movies home page", "routerLink", "/entertainment", "routerLinkActive", "active", 2, "transform", "translateX(-91px)", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to anime home page", "routerLink", "/anime", "routerLinkActive", "active", 2, "transform", "translateX(-91px)", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to gaming home page", "routerLink", "/gaming", "routerLinkActive", "active", 2, "transform", "translateX(-91px)", 3, "matTooltipPosition"], ["mat-button", "", "matTooltip", "Go to profile home page", "routerLink", "/profile", "routerLinkActive", "active", 2, "transform", "translateX(-91px)", 3, "matTooltipPosition"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "brush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Art Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "live_tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Movies & TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Gaming Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Anime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "AP Archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HeaderComponent_div_42_Template, 6, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "brush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "live_tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "account_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, HeaderComponent_div_64_Template, 4, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, HeaderComponent_div_66_Template, 6, 5, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, HeaderComponent_div_69_Template, 4, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, HeaderComponent_div_70_Template, 4, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above")("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUrl != "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUrl == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUrl != "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUrl == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUrl != "/");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".home-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 0px;\r\n    background-color: rgba(0, 0, 0, 0.979);\r\n    height: 82px;\r\n  }\r\n.mat-icon[_ngcontent-%COMP%]{\r\n    color: rgb(255, 255, 255);\r\n}\r\n.headertitle[_ngcontent-%COMP%]{\r\n    color: rgb(255, 255, 255);\r\n    font-size: 30px;\r\n    font-family: fantasy;\r\n}\r\n.headertitle.page[_ngcontent-%COMP%]{\r\n    color: rgb(43, 121, 223);\r\n    font-size: 30px;\r\n    font-family: fantasy;\r\n}\r\n.mat-icon-button[_ngcontent-%COMP%] {\r\n    width: 70px;\r\n    height: 80px;\r\n    margin-left: -13px;\r\n    transition: .5s ease;\r\n}\r\n.mobile_header[_ngcontent-%COMP%]{\r\n    transform: translateX(-68px);\r\n    color:rgb(43, 121, 223);\r\n    font-size: 18px;\r\n    font-family: fantasy;\r\n}\r\n.mat-button[_ngcontent-%COMP%]{\r\n    min-width: 60px;\r\n    line-height: 67px;\r\n    padding: 7px 0px;\r\n    margin-left: -8px;\r\n    transition: .5s ease;\r\n}\r\n.homeicon[_ngcontent-%COMP%]{\r\n    margin-left: -8px;\r\n}\r\n.home[_ngcontent-%COMP%]{\r\n    color:black;\r\n}\r\n.profile[_ngcontent-%COMP%]{\r\n    color:rgb(42, 143, 184)\r\n}\r\n.art[_ngcontent-%COMP%]{\r\ncolor: rgb(216, 53, 12);\r\n}\r\n.game[_ngcontent-%COMP%]{\r\n    color: rgb(15, 12, 216);\r\n}\r\n.movie[_ngcontent-%COMP%]{\r\n    color: rgb(12, 216, 63);\r\n}\r\n.anime[_ngcontent-%COMP%]{\r\n    color: rgb(216, 12, 124);\r\n}\r\n.rippleHover[_ngcontent-%COMP%]:hover   .mat-button[_ngcontent-%COMP%]{\r\n   \r\n    transform: scale(1.2);\r\n  }\r\n.rippleHover[_ngcontent-%COMP%]:hover   .mat-icon-button[_ngcontent-%COMP%]{\r\n   \r\n    transform: scale(1.2);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixzQ0FBc0M7SUFDdEMsWUFBWTtFQUNkO0FBQ0Y7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTs7SUFFSSxxQkFBcUI7RUFDdkI7QUFDQTs7SUFFRSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTc5KTtcclxuICAgIGhlaWdodDogODJweDtcclxuICB9XHJcbi5tYXQtaWNvbntcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLmhlYWRlcnRpdGxle1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xyXG59XHJcbi5oZWFkZXJ0aXRsZS5wYWdle1xyXG4gICAgY29sb3I6IHJnYig0MywgMTIxLCAyMjMpO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbn1cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG59XHJcbi5tb2JpbGVfaGVhZGVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02OHB4KTtcclxuICAgIGNvbG9yOnJnYig0MywgMTIxLCAyMjMpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XHJcbn1cclxuLm1hdC1idXR0b257XHJcbiAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjdweDtcclxuICAgIHBhZGRpbmc6IDdweCAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG59XHJcbi5ob21laWNvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG59XHJcbi5ob21le1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLnByb2ZpbGV7XHJcbiAgICBjb2xvcjpyZ2IoNDIsIDE0MywgMTg0KVxyXG59XHJcbi5hcnR7XHJcbmNvbG9yOiByZ2IoMjE2LCA1MywgMTIpO1xyXG59XHJcbi5nYW1le1xyXG4gICAgY29sb3I6IHJnYigxNSwgMTIsIDIxNik7XHJcbn1cclxuLm1vdmlle1xyXG4gICAgY29sb3I6IHJnYigxMiwgMjE2LCA2Myk7XHJcbn1cclxuLmFuaW1le1xyXG4gICAgY29sb3I6IHJnYigyMTYsIDEyLCAxMjQpO1xyXG59XHJcbi5yaXBwbGVIb3Zlcjpob3ZlciAubWF0LWJ1dHRvbntcclxuICAgXHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgfVxyXG4gIC5yaXBwbGVIb3Zlcjpob3ZlciAubWF0LWljb24tYnV0dG9ue1xyXG4gICBcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, { currentUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.title = "Anamay Pandey";
        this.year = "2021";
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 2, consts: [[1, "home-spacer"], [1, "title"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.title, "\u00A0\u00A0|\u00A0\u00A0", ctx.year, "");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".home-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\r\n.mat-toolbar[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background-color: rgba(0, 0, 0, 0.979);\r\n    height: 20px;\r\n    bottom: 0px;\r\n    margin: 0;\r\n    opacity: 0.7;\r\n  }\r\n.mat-icon[_ngcontent-%COMP%]{\r\n    color: rgb(255, 255, 255);\r\n    height: 13px;\r\n    font-size: 15px;\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    color: rgb(255, 255, 255);\r\n    font-size: 13px;\r\n    font-family: fasgong;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7QUFDRjtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjk3OSk7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbi5tYXQtaWNvbntcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBmYXNnb25nO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pWbN":
/*!****************************************************!*\
  !*** ./src/app/art-gallery/art-service.service.ts ***!
  \****************************************************/
/*! exports provided: ArtServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtServiceService", function() { return ArtServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ArtServiceService {
    constructor() { }
}
ArtServiceService.ɵfac = function ArtServiceService_Factory(t) { return new (t || ArtServiceService)(); };
ArtServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArtServiceService, factory: ArtServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _anime_anime_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anime/anime.component */ "9nqU");
/* harmony import */ var _art_gallery_art_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./art-gallery/art-gallery.component */ "TR+H");
/* harmony import */ var _gaming_gaming_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gaming/gaming.component */ "KBEM");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies/movies.component */ "348/");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./art-gallery/art-category/art-category.component */ "DPwC");










const routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    {
        path: 'art', component: _art_gallery_art_gallery_component__WEBPACK_IMPORTED_MODULE_3__["ArtGalleryComponent"]
    },
    { path: 'entertainment', component: _movies_movies_component__WEBPACK_IMPORTED_MODULE_5__["MoviesComponent"] },
    { path: 'gaming', component: _gaming_gaming_component__WEBPACK_IMPORTED_MODULE_4__["GamingComponent"] },
    { path: 'anime', component: _anime_anime_component__WEBPACK_IMPORTED_MODULE_2__["AnimeComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'art/automobile', component: _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_7__["ArtCategoryComponent"] },
    { path: 'art/caricatures', component: _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_7__["ArtCategoryComponent"] },
    { path: 'art/doodles', component: _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_7__["ArtCategoryComponent"] },
    { path: 'art/abstract', component: _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_7__["ArtCategoryComponent"] },
    { path: 'art/posters', component: _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_7__["ArtCategoryComponent"] },
    { path: 'art/portraits', component: _art_gallery_art_category_art_category_component__WEBPACK_IMPORTED_MODULE_7__["ArtCategoryComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zvdB":
/*!*****************************************************************************!*\
  !*** ./src/app/art-gallery/art-category/art-dialog/art-dialog.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArtDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtDialogComponent", function() { return ArtDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class ArtDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
}
ArtDialogComponent.ɵfac = function ArtDialogComponent_Factory(t) { return new (t || ArtDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ArtDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtDialogComponent, selectors: [["app-art-dialog"]], decls: 6, vars: 1, consts: [["mat-dialog-title", ""], ["mat-card-image", "", 3, "src"], ["mat-button", "", "mat-dialog-close", ""]], template: function ArtDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-art-dialog',
                templateUrl: './art-dialog.component.html',
                styleUrls: ['./art-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map