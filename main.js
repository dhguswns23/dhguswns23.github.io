(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");




var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'me';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view main\">\n  <section class=\"main__head\">\n    <div class=\"main__head__strike\">\n      <h1>Oh HyeonJun</h1>\n      <p>Software Engineer</p>\n    </div>\n    <div class=\"main__head__sub\">\n      <p>e-mail: dhguswns23@gmail.com</p>\n      <p><a href=\"https://github.com/dhguswns23\" target=\"_blank\">Github</a></p>\n    </div>\n  </section>\n  <section class=\"main__body\">\n    <div class=\"paragraph\">\n      <h1 class=\"paragraph__head\">\n        <h1>Education</h1>\n      </h1>\n      <div class=\"paragraph__body\">\n        <div class=\"education\">\n          <div class=\"education__head\">\n            <h1>UNIST ECE</h1>\n            <p>2014 ~ 2022 (expect)</p>\n          </div>\n          <div class=\"education__body\">\n            I enrolled in 2014 and am currently preparing to graduate after solving military issues.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"paragraph\">\n      <h1 class=\"paragraph__head\">\n        <h1>Work experiences</h1>\n      </h1>\n      <div class=\"paragraph__body\">\n        <div class=\"experience\">\n          <div class=\"experience__head\">\n            <h1>Ably Corporation</h1>\n            <h2>2019.11 ~ 2022.01</h2>\n          </div>\n          <div class=\"experience__body\">\n            <p class=\"experience__body__description\">\n              A company that serves female fashion commerce which has over 900,000 traffic. And I have developed\n              service as a back-end engineer.\n            </p>\n            <div class=\"experience__body__development\">\n              <div class=\"experience__body__development__stacks\">\n                <h1>Development Stack</h1>\n                <div class=\"experience__body__development__stacks\">\n                  <span>AWS (EC2, RDS, EB, ECR...), </span>\n                  <span>Mysql, </span>\n                  <span>Django (python3), </span>\n                  <span>CircleCI, </span>\n                  <span>pytest.</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"experience\">\n          <div class=\"experience__head\">\n            <h1>ePapyrus Inc.</h1>\n            <h2>2018.06 ~ 2019.11</h2>\n          </div>\n          <div class=\"experience__body\">\n            <p class=\"experience__body__description\">\n              The parent company of Deepquest. I have moved after the end of the second project 'PeopleFirst'.\n            </p>\n            <div class=\"experience__body__development\">\n              <h1>Development Stack</h1>\n              <h2>- Project Motorsense</h2>\n              <div class=\"experience__body__development__stacks\">\n                <span>AWS (EC2, RDS, S3, ELB, Route53, Auto-Scaling, Lambda),</span>\n                <span>Nginx,</span>\n                <span>MariaDB,</span>\n                <span>Django (python3),</span>\n                <span><b>'unittest'</b> lib for unit test,</span>\n                <span>Angular 7, </span>\n                <span>SCSS,</span>\n                <span><b>Docker CE</b> for covering various development env,</span>\n                <span><b>Jenkins</b> CI for build docker image,</span>\n                <span>git.</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"experience\">\n          <div class=\"experience__head\">\n            <h1>Deepquest Inc.</h1>\n            <h2>2017.01 ~ 2018.06 <span>(18 months)</span></h2>\n          </div>\n          <div class=\"experience__body\">\n            <p class=\"experience__body__description\">\n              The Deepquest is a small venture created to make artificial intelligence solutions.\n              There were three developers and one researcher. We have developed a machine learning solution\n              using a desktop application framework called PyQt. After that project,\n              a new project called 'PeopleFirst', which is web service for reference check, was started.\n            </p>\n            <div class=\"experience__body__development\">\n              <h1>Development Stack</h1>\n              <h2>- Project DeepquestFramework</h2>\n              <div class=\"experience__body__development__stacks\">\n                <span>PyQt5.</span>\n              </div>\n              <h2>- Project PeopleFirst</h2>\n              <div class=\"experience__body__development__stacks\">\n                <span>AWS (EC2, RDS, S3, ELB, Route53, Auto-Scaling),</span>\n                <span>Nginx,</span>\n                <span>MariaDB,</span>\n                <span>Django (python3),</span>\n                <span><b>'unittest'</b> lib for unit test,</span>\n                <span><b>'boto3'</b> for deployment automation,</span>\n                <span>Vue 2.6 (SSR), </span>\n                <span>SCSS,</span>\n                <span>git.</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"experience\">\n          <div class=\"experience__head\">\n            <h1>Team Arfinity</h1>\n            <h2>2016.01 ~ 2017.01 <span>(12 months)</span></h2>\n          </div>\n          <div class=\"experience__body\">\n            <p class=\"experience__body__description\">\n              My second startup experience right after my first startup 'Humming'. I had worked in my school for first 6\n              months, and then moved to Hong-Dae Seoul.\n              The project 'musicianbox' is a web platform for indie musicians and worked there as a single developer.\n            </p>\n            <div class=\"experience__body__development\">\n              <h1>Development Stack</h1>\n              <h2>- Project musicianbox</h2>\n              <div class=\"experience__body__development__stacks\">\n                <span>AWS (EC2, RDS, S3, ELB, Route53).</span>\n                <span>Nginx,</span>\n                <span>MySQL,</span>\n                <span>Laravel (PHP),</span>\n                <span>JQuery,</span>\n                <span>Partially React which was used to build MPA not SPA (no react-router and redux.),</span>\n                <span>SCSS,</span>\n                <span>git.</span>\n\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"experience\">\n          <div class=\"experience__head\">\n            <h1>Team Humming</h1>\n            <h2>2015.06 ~ 2016.01 <span>(6 months)</span></h2>\n          </div>\n          <div class=\"experience__body\">\n            <p class=\"experience__body__description\">\n              The humming was a small team of four students, including three students at the school of business\n              administration, one designer and one developer. Over the period of 3 months with the team members, we had\n              developed music crowd funding platform and won the third prize in the school.\n            </p>\n            <div class=\"experience__body__development\">\n              <h1>Development Stack</h1>\n              <h2>- Project Humming</h2>\n              <div class=\"experience__body__development__stacks\">\n                <span>Code Igniter2 (PHP),</span>\n                <span>MySQL,</span>\n                <span>Javascript (VanillaJS),</span>\n                <span>CSS,</span>\n                <span>git.</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"paragraph\">\n      <div class=\"paragraph__head\">\n        <h1>Personal Projects</h1>\n      </div>\n      <div class=\"paragraph__body\">\n<!--        <div class=\"project\">-->\n<!--          <div class=\"project__head\">-->\n<!--            <h1>HeXA Bus</h1>-->\n<!--            <p>(<a href=\"http://bus.hexa.pro\" target=\"_blank\">link</a>)</p>-->\n<!--          </div>-->\n<!--          <div class=\"project__body\">-->\n<!--            <p class=\"project__body__description\">-->\n<!--              This application is a bus information service which was created for the purpose of serve convenient bus-->\n<!--              information for school students.-->\n<!--              One of the club members and me developed and my role is front-end and server management.-->\n<!--            </p>-->\n<!--            <div class=\"experience__body__development\">-->\n<!--              <h1>Development Stack</h1>-->\n<!--              <div class=\"experience__body__development__stacks\">-->\n<!--                <span>AWS (Lightsail),</span>-->\n<!--                <span>raw PHP,</span>-->\n<!--                <span>React,</span>-->\n<!--                <span>git.</span>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--        </div>-->\n\n<!--        <div class=\"project\">-->\n<!--          <div class=\"project__head\">-->\n<!--            <h1>HeXA BaB</h1>-->\n<!--            <p>(<a href=\"http://bab.hexa.pro\" target=\"_blank\">link</a>)</p>-->\n<!--          </div>-->\n<!--          <div class=\"project__body\">-->\n<!--            <p class=\"project__body__description\">-->\n<!--              This application is a service to solve the problem that inconvenience of information by many restaurants-->\n<!--              in school provided by school information.-->\n<!--              As with the Bus project, two people, including myself, were developing and my role is front-end-->\n<!--              development,-->\n<!--              porting back-end applications from PHP to python3, and server management.-->\n<!--            </p>-->\n<!--            <div class=\"experience__body__development\">-->\n<!--              <h1>Development Stack</h1>-->\n<!--              <div class=\"experience__body__development__stacks\">-->\n<!--                <span>AWS (Lightsail),</span>-->\n<!--                <span>Django(python3),</span>-->\n<!--                <span><b>'unittest'</b> lib for unit test,</span>-->\n<!--                <span>Angular 7,</span>-->\n<!--                <span>git.</span>-->\n<!--              </div>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--        </div>-->\n\n        <div class=\"project\">\n          <div class=\"project__head\">\n            <h1>Fizz</h1>\n            <p>(<a target=\"_blank\">link - fixing</a>)</p>\n            <p>(<a href=\"https://github.com/dhguswns23/ngx-fizz\" target=\"_blank\">Github</a>)</p>\n          </div>\n          <div class=\"project__body\">\n            <p class=\"project__body__description\">\n              This library is Angular library that provides icons with animation. I am actively developing this project\n              as a personal project.\n            </p>\n            <div class=\"experience__body__development\">\n              <h1>Development Stack</h1>\n              <div class=\"experience__body__development__stacks\">\n                <span>Angular 7,</span>\n                <span>git.</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"project\">\n          <div class=\"project__head\">\n            <h1>Dot files</h1>\n            <p>(<a href=\"https://github.com/dhguswns23/dotfiles\" target=\"_blank\">Github</a>)</p>\n          </div>\n          <div class=\"project__body\">\n            <p class=\"project__body__description\">\n              This source is my setting files, which includes vim and tmux, for command line interface.\n            </p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"paragraph\">\n      <div class=\"paragraph__head\">\n        <h1>Award</h1>\n      </div>\n      <div class=\"paragraph__body\">\n        <div class=\"award\">\n          - 2015 UNIST Global Startup Competition 3rd\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main__head {\n  margin-bottom: 30px; }\n  .main__head__strike {\n    padding-bottom: 15px;\n    margin-bottom: 10px;\n    border-bottom: 3px solid #444;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end; }\n  .main__head__strike h1 {\n      font-size: 55px;\n      font-weight: bold; }\n  .main__head__strike p {\n      font-size: 20px; }\n  .main__head__sub {\n    display: flex;\n    padding: 0 15px; }\n  .main__head__sub p {\n      font-size: 16px;\n      padding: 0 8px;\n      position: relative; }\n  .main__head__sub p:after {\n        background: #444;\n        content: '';\n        position: absolute;\n        right: 0;\n        top: 50%;\n        transform: translate(0, -50%);\n        width: 1px;\n        height: 10px; }\n  .main__head__sub p:last-child:after {\n        display: none; }\n  .main__body > * {\n  margin-bottom: 40px; }\n  .main__body > *:last-child {\n    margin-bottom: 0; }\n  .paragraph__head {\n  margin-bottom: 20px; }\n  .paragraph__head h1 {\n    font-size: 25px;\n    display: inline-block;\n    border-bottom: 2px solid #444;\n    padding-right: 15px; }\n  .paragraph__body > * {\n  margin-bottom: 25px; }\n  .paragraph__body > *:last-child {\n    margin-bottom: 0; }\n  .paragraph__body .bold {\n  font-weight: 700; }\n  .paragraph__body .big {\n  font-size: 28px; }\n  .paragraph__body .center {\n  text-align: center; }\n  .education__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n  .education__head h1 {\n    font-size: 22px; }\n  .education__head p {\n    font-size: 14px; }\n  .education__body {\n  font-size: 1; }\n  .experience__head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 5px; }\n  .experience__head span {\n    color: #909090; }\n  .experience__head h1 {\n    font-size: 22px;\n    margin-right: 10px; }\n  .experience__head h2 {\n    font-size: 14px;\n    font-weight: 800; }\n  .experience__body__description {\n  font-size: 16px;\n  font-weight: normal;\n  margin-bottom: 15px; }\n  .experience__body__development h1 {\n  font-size: 16px;\n  margin-bottom: 10px; }\n  .experience__body__development h2 {\n  font-size: 16px;\n  margin-bottom: 10px; }\n  .experience__body__development__stacks {\n  margin-bottom: 10px; }\n  .experience__body__development__stacks:last-child {\n    margin-bottom: 0; }\n  .experience__body__development__stacks span {\n    font-size: 15px;\n    margin-right: 10px; }\n  .experience__body__development__stacks span:last-child {\n      margin-right: 0; }\n  .project__head {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 10px; }\n  .project__head h1 {\n    font-size: 22px;\n    margin-right: 10px; }\n  .project__head p {\n    font-size: 14px;\n    margin-right: 5px; }\n  .project__body__description {\n  font-size: 16px;\n  margin-bottom: 10px; }\n  .project__body__development h1 {\n  font-size: 20px;\n  margin-bottom: 5px; }\n  .project__body__development h2 {\n  font-size: 18px;\n  margin-bottom: 10px; }\n  .project__body__development__stacks span {\n  font-size: 16px;\n  margin-right: 10px; }\n  .project__body__development__stacks span:last-child {\n    margin-right: 0; }\n  .award {\n  font-weight: bold;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zpei9tZS9zcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFLG1CQUFtQixFQUFBO0VBQ25CO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQiw2QkFWYTtJQVdiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIscUJBQXFCLEVBQUE7RUFOdEI7TUFRRyxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUFUcEI7TUFZRyxlQUFlLEVBQUE7RUFHbkI7SUFDRSxhQUFhO0lBQ2IsZUFBZSxFQUFBO0VBRmhCO01BSUcsZUFBZTtNQUNmLGNBQWM7TUFDZCxrQkFBa0IsRUFBQTtFQU5yQjtRQVFLLGdCQTlCUztRQStCVCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixRQUFRO1FBQ1IsNkJBQTZCO1FBQzdCLFVBQVU7UUFDVixZQUFZLEVBQUE7RUFmakI7UUFtQk8sYUFBYSxFQUFBO0VBTXRCO0VBRUcsbUJBQW1CLEVBQUE7RUFGdEI7SUFJSyxnQkFBZ0IsRUFBQTtFQU90QjtFQUNFLG1CQUFtQixFQUFBO0VBRHBCO0lBR0csZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiw2QkEvRGE7SUFnRWIsbUJBQW1CLEVBQUE7RUFHdEI7RUFFRyxtQkFBbUIsRUFBQTtFQUZ0QjtJQUlLLGdCQUFnQixFQUFBO0VBSnJCO0VBUUcsZ0JBQWdCLEVBQUE7RUFSbkI7RUFXRyxlQUFlLEVBQUE7RUFYbEI7RUFjRyxrQkFBa0IsRUFBQTtFQU10QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7RUFIL0I7SUFLRyxlQUFlLEVBQUE7RUFMbEI7SUFRRyxlQUFlLEVBQUE7RUFHbkI7RUFDRSxZQUNGLEVBQUE7RUFJQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBO0VBSm5CO0lBTUcsY0E3R29CLEVBQUE7RUF1R3ZCO0lBU0csZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBVnJCO0lBY0csZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBSWxCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTtFQUVwQjtFQUVHLGVBQWU7RUFDZixtQkFBbUIsRUFBQTtFQUh0QjtFQU1HLGVBQWU7RUFDZixtQkFBbUIsRUFBQTtFQUVyQjtFQUNFLG1CQUFtQixFQUFBO0VBRHBCO0lBR0csZ0JBQWdCLEVBQUE7RUFIbkI7SUFNRyxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7RUFQckI7TUFTSyxlQUFlLEVBQUE7RUFTekI7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBO0VBSHBCO0lBS0csZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBTnJCO0lBU0csZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBT25CO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0VBRXBCO0VBRUcsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBSHJCO0VBTUcsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0VBRXBCO0VBRUcsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0VBSHJCO0lBS0ssZUFBZSxFQUFBO0VBUTNCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib3JkZXItY29sb3I6ICM0NDQ7XG4kbGlnaHQtdGV4dC1jb2xvcjogIzkwOTA5MDtcblxuXG4ubWFpbiB7XG4gICZfX2hlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgJl9fc3RyaWtlIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICAgICZfX3N1YiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1jb2xvcjtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX2JvZHkge1xuICAgID4gKiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBhcmFncmFwaCB7XG4gICZfX2hlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgfVxuICAmX19ib2R5IHtcbiAgICA+ICoge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5ib2xkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICAgIC5iaWcge1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgICAuY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLmVkdWNhdGlvbiB7XG4gICZfX2hlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbiAgJl9fYm9keSB7XG4gICAgZm9udC1zaXplOiAxXG4gIH1cbn1cblxuLmV4cGVyaWVuY2Uge1xuICAmX19oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgICB9XG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG4gIH1cbiAgJl9fYm9keSB7XG4gICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgICZfX2RldmVsb3BtZW50IHtcbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAmX19zdGFja3Mge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucHJvamVjdCB7XG4gICZfX2hlYWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgICBhIHtcblxuICAgIH1cbiAgfVxuICAmX19ib2R5IHtcbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAmX19kZXZlbG9wbWVudCB7XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuICAgICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAmX19zdGFja3Mge1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hd2FyZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss"), __webpack_require__(/*! ./main.mobile.component.scss */ "./src/app/main/main.mobile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/main.mobile.component.scss":
/*!*************************************************!*\
  !*** ./src/app/main/main.mobile.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 630px) {\n  .main__head {\n    margin-bottom: 30px; }\n    .main__head__strike {\n      padding-bottom: 15px;\n      margin-bottom: 10px;\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-end; }\n      .main__head__strike h1 {\n        font-size: 20px;\n        font-weight: bold; }\n      .main__head__strike p {\n        font-size: 14px; }\n    .main__head__sub {\n      padding: 0 5px; }\n      .main__head__sub p {\n        font-size: 12px;\n        padding: 0 8px;\n        position: relative; }\n  .main__body > * {\n    margin-bottom: 40px; }\n    .main__body > *:last-child {\n      margin-bottom: 0; }\n  .paragraph__head {\n    margin-bottom: 10px; }\n    .paragraph__head h1 {\n      font-size: 20px;\n      display: inline-block;\n      padding-right: 15px; }\n  .paragraph__body > * {\n    margin-bottom: 25px; }\n    .paragraph__body > *:last-child {\n      margin-bottom: 0; }\n  .experience__head {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: 5px; }\n    .experience__head h1 {\n      font-size: 18px;\n      margin-right: 10px; }\n    .experience__head h2 {\n      font-size: 12px;\n      font-weight: 800; }\n  .experience__body__description {\n    font-size: 12px;\n    font-weight: normal;\n    margin-bottom: 10px; }\n  .experience__body__development h1 {\n    font-size: 16px;\n    margin-bottom: 5px; }\n  .experience__body__development h2 {\n    font-size: 14px;\n    margin-bottom: 5px; }\n  .experience__body__development__stacks span {\n    font-size: 12px;\n    margin-right: 5px; }\n    .experience__body__development__stacks span:last-child {\n      margin-right: 0; }\n  .project__head {\n    display: flex;\n    align-items: flex-end;\n    margin-bottom: 5px; }\n    .project__head h1 {\n      font-size: 18px;\n      margin-right: 5px; }\n    .project__head p {\n      font-size: 12px;\n      margin-right: 5px; }\n  .project__body__description {\n    font-size: 12px;\n    margin-bottom: 10px; }\n  .project__body__development h1 {\n    font-size: 16px;\n    margin-bottom: 5px; }\n  .project__body__development h2 {\n    font-size: 14px;\n    margin-bottom: 5px; }\n  .project__body__development__stacks span {\n    font-size: 12px;\n    margin-right: 5px; }\n    .project__body__development__stacks span:last-child {\n      margin-right: 0; }\n  .award {\n    font-size: 14px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Zpei9tZS9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsIi9ob21lL2Zpei9tZS9zcmMvYXBwL21haW4vbWFpbi5tb2JpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUNDQTtJQUNFLG1CQUFtQixFQUFBO0lBQ25CO01BQ0Usb0JBQW9CO01BQ3BCLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IsOEJBQThCO01BQzlCLHFCQUFxQixFQUFBO01BTHRCO1FBT0csZUFBZTtRQUNmLGlCQUFpQixFQUFBO01BUnBCO1FBV0csZUFBZSxFQUFBO0lBR25CO01BQ0UsY0FBYyxFQUFBO01BRGY7UUFHRyxlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQixFQUFBO0VBSXZCO0lBRUcsbUJBQW1CLEVBQUE7SUFGdEI7TUFJSyxnQkFBZ0IsRUFBQTtFQU90QjtJQUNFLG1CQUFtQixFQUFBO0lBRHBCO01BR0csZUFBZTtNQUNmLHFCQUFxQjtNQUNyQixtQkFBbUIsRUFBQTtFQUd0QjtJQUVHLG1CQUFtQixFQUFBO0lBRnRCO01BSUssZ0JBQWdCLEVBQUE7RUFXdEI7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixrQkFBa0IsRUFBQTtJQUpuQjtNQVFHLGVBQWU7TUFDZixrQkFBa0IsRUFBQTtJQVRyQjtNQWFHLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQUlsQjtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7RUFFcEI7SUFFRyxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7RUFIckI7SUFNRyxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7RUFFbkI7SUFFRyxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7SUFIcEI7TUFLSyxlQUFlLEVBQUE7RUFTekI7SUFDRSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFBO0lBSG5CO01BS0csZUFBZTtNQUNmLGlCQUFpQixFQUFBO0lBTnBCO01BU0csZUFBZTtNQUNmLGlCQUFpQixFQUFBO0VBT25CO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQixFQUFBO0VBRXBCO0lBRUcsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBSHJCO0lBTUcsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0VBRW5CO0lBRUcsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0lBSHBCO01BS0ssZUFBZSxFQUFBO0VBUTNCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLm1vYmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBSZXNwb25zZVRvKCR0YXJnZXQpIHtcbiAgQGlmICR0YXJnZXQgPT0gJ21vYmlsZScge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICR0YXJnZXQgPT0gJ3RhYmxldCcge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MzFweCkgYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJHRhcmdldCA9PSAnZGVza3RvcCcge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5ODFweCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdzcmMvc2Nzcy9taXhpbnMnO1xuQGluY2x1ZGUgUmVzcG9uc2VUbygnbW9iaWxlJykge1xuICAubWFpbiB7XG4gICAgJl9faGVhZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgJl9fc3RyaWtlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJl9fc3ViIHtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJl9fYm9keSB7XG4gICAgICA+ICoge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGFyYWdyYXBoIHtcbiAgICAmX19oZWFkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAmX19ib2R5IHtcbiAgICAgID4gKiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lZHVjYXRpb24ge1xuXG4gIH1cblxuICAuZXhwZXJpZW5jZSB7XG4gICAgJl9faGVhZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgc3BhbiB7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIH1cbiAgICB9XG4gICAgJl9fYm9keSB7XG4gICAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgICZfX2RldmVsb3BtZW50IHtcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJl9fc3RhY2tzIHtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wcm9qZWN0IHtcbiAgICAmX19oZWFkIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICAgIGEge1xuXG4gICAgICB9XG4gICAgfVxuICAgICZfX2JvZHkge1xuICAgICAgJl9fZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICAmX19kZXZlbG9wbWVudCB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgICZfX3N0YWNrcyB7XG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXdhcmQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG59XG4iXX0= */"

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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fiz/me/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map