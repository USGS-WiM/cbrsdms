webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app.component.html":
/***/ (function(module, exports) {

module.exports = "<br /><br />\r\n<span class=\"app-header\">\r\n    CBRS Determinations Management\r\n</span>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { if (!__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* APP_SETTINGS */].IS_LOGGEDIN) {
            _this.router.navigateByUrl('login');
        } }, 500);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cases_case_service__ = __webpack_require__("../../../../../src/cases/case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__casefiles_casefile_service__ = __webpack_require__("../../../../../src/casefiles/casefile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__casetags_casetag_service__ = __webpack_require__("../../../../../src/casetags/casetag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__comments_comment_service__ = __webpack_require__("../../../../../src/comments/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__determinations_determination_service__ = __webpack_require__("../../../../../src/determinations/determination.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fieldoffices_fieldoffice_service__ = __webpack_require__("../../../../../src/fieldoffices/fieldoffice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__prohibitiondates_prohibitiondate_service__ = __webpack_require__("../../../../../src/prohibitiondates/prohibitiondate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__systemmaps_systemmap_service__ = __webpack_require__("../../../../../src/systemmaps/systemmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__systemunitmaps_systemunitmap_service__ = __webpack_require__("../../../../../src/systemunitmaps/systemunitmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__systemunits_systemunit_service__ = __webpack_require__("../../../../../src/systemunits/systemunit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tags_tag_service__ = __webpack_require__("../../../../../src/tags/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users_user_service__ = __webpack_require__("../../../../../src/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__properties_property_service__ = __webpack_require__("../../../../../src/properties/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__requesters_requester_service__ = __webpack_require__("../../../../../src/requesters/requester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__authentication_authentication_service__ = __webpack_require__("../../../../../src/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__workbench_workbench_filter_service__ = __webpack_require__("../../../../../src/workbench/workbench-filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reports_report_case_service__ = __webpack_require__("../../../../../src/reports/report-case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reports_report_case_count_service__ = __webpack_require__("../../../../../src/reports/report-case-count.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__("../../../../../src/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__grid_grid__ = __webpack_require__("../../../../../src/grid/grid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__navbar_component__ = __webpack_require__("../../../../../src/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__authentication_login_component__ = __webpack_require__("../../../../../src/authentication/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tags_tag_list_component__ = __webpack_require__("../../../../../src/tags/tag-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tags_tag_detail_component__ = __webpack_require__("../../../../../src/tags/tag-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__workbench_workbench_component__ = __webpack_require__("../../../../../src/workbench/workbench.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__workbench_workbench_list_component__ = __webpack_require__("../../../../../src/workbench/workbench-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__workbench_workbench_grid_component__ = __webpack_require__("../../../../../src/workbench/workbench-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__workbench_workbench_filter_component__ = __webpack_require__("../../../../../src/workbench/workbench-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__workbench_workbench_detail_component__ = __webpack_require__("../../../../../src/workbench/workbench-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__mapdata_mapdata_component__ = __webpack_require__("../../../../../src/mapdata/mapdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__mapdata_mapdata_list_component__ = __webpack_require__("../../../../../src/mapdata/mapdata-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__mapdata_systemmap_grid_component__ = __webpack_require__("../../../../../src/mapdata/systemmap-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__mapdata_systemunit_grid_component__ = __webpack_require__("../../../../../src/mapdata/systemunit-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__mapdata_prohibitiondate_grid_component__ = __webpack_require__("../../../../../src/mapdata/prohibitiondate-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__reports_report_component__ = __webpack_require__("../../../../../src/reports/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__reports_report_list_component__ = __webpack_require__("../../../../../src/reports/report-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__reports_report_grid_component__ = __webpack_require__("../../../../../src/reports/report-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__reports_report_cases_by_unit_component__ = __webpack_require__("../../../../../src/reports/report-cases-by-unit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__reports_report_filter_component__ = __webpack_require__("../../../../../src/reports/report-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__reports_report_days_to_resolution_component__ = __webpack_require__("../../../../../src/reports/report-days-to-resolution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__reports_report_days_to_each_status_component__ = __webpack_require__("../../../../../src/reports/report-days-to-each-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__reports_report_count_cases_by_status_component__ = __webpack_require__("../../../../../src/reports/report-count-cases-by-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__display_value_pipe__ = __webpack_require__("../../../../../src/display-value.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__modal_service__ = __webpack_require__("../../../../../src/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__modal_component__ = __webpack_require__("../../../../../src/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__app_routing__ = __webpack_require__("../../../../../src/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_mydatepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_52_mydatepicker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_50__app_routing__["b" /* routing */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_51_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */], __WEBPACK_IMPORTED_MODULE_52_mydatepicker__["MyDatePickerModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_49__modal_component__["a" /* ModalComponent */], __WEBPACK_IMPORTED_MODULE_24__grid_grid__["a" /* Grid */], __WEBPACK_IMPORTED_MODULE_25__navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_26__authentication_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_27__tags_tag_list_component__["a" /* TagListComponent */], __WEBPACK_IMPORTED_MODULE_28__tags_tag_detail_component__["a" /* TagDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_29__workbench_workbench_component__["a" /* WorkbenchComponent */], __WEBPACK_IMPORTED_MODULE_30__workbench_workbench_list_component__["a" /* WorkbenchListComponent */], __WEBPACK_IMPORTED_MODULE_31__workbench_workbench_grid_component__["a" /* WorkbenchGridComponent */], __WEBPACK_IMPORTED_MODULE_32__workbench_workbench_filter_component__["a" /* WorkbenchFilterComponent */], __WEBPACK_IMPORTED_MODULE_33__workbench_workbench_detail_component__["a" /* WorkbenchDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_34__mapdata_mapdata_component__["a" /* MapdataComponent */], __WEBPACK_IMPORTED_MODULE_35__mapdata_mapdata_list_component__["a" /* MapdataListComponent */], __WEBPACK_IMPORTED_MODULE_36__mapdata_systemmap_grid_component__["a" /* SystemmapGridComponent */], __WEBPACK_IMPORTED_MODULE_37__mapdata_systemunit_grid_component__["a" /* SystemunitGridComponent */], __WEBPACK_IMPORTED_MODULE_38__mapdata_prohibitiondate_grid_component__["a" /* ProhibitiondateGridComponent */],
                __WEBPACK_IMPORTED_MODULE_39__reports_report_component__["a" /* ReportComponent */], __WEBPACK_IMPORTED_MODULE_40__reports_report_list_component__["a" /* ReportListComponent */], __WEBPACK_IMPORTED_MODULE_41__reports_report_grid_component__["a" /* ReportGridComponent */], __WEBPACK_IMPORTED_MODULE_43__reports_report_filter_component__["a" /* ReportFilterComponent */], __WEBPACK_IMPORTED_MODULE_42__reports_report_cases_by_unit_component__["a" /* ReportCasesByUnitComponent */],
                __WEBPACK_IMPORTED_MODULE_44__reports_report_days_to_resolution_component__["a" /* ReportDaysToResolutionComponent */], __WEBPACK_IMPORTED_MODULE_45__reports_report_days_to_each_status_component__["a" /* ReportDaysToEachStatusComponent */], __WEBPACK_IMPORTED_MODULE_46__reports_report_count_cases_by_status_component__["a" /* ReportCountCasesByStatusComponent */], __WEBPACK_IMPORTED_MODULE_47__display_value_pipe__["a" /* DisplayValuePipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_50__app_routing__["a" /* appRoutingProviders */], __WEBPACK_IMPORTED_MODULE_5__cases_case_service__["a" /* CaseService */], __WEBPACK_IMPORTED_MODULE_6__casefiles_casefile_service__["a" /* CasefileService */], __WEBPACK_IMPORTED_MODULE_7__casetags_casetag_service__["a" /* CasetagService */], __WEBPACK_IMPORTED_MODULE_17__properties_property_service__["a" /* PropertyService */], __WEBPACK_IMPORTED_MODULE_18__requesters_requester_service__["a" /* RequesterService */], __WEBPACK_IMPORTED_MODULE_19__authentication_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_8__comments_comment_service__["a" /* CommentService */], __WEBPACK_IMPORTED_MODULE_9__determinations_determination_service__["a" /* DeterminationService */], __WEBPACK_IMPORTED_MODULE_10__fieldoffices_fieldoffice_service__["a" /* FieldofficeService */], __WEBPACK_IMPORTED_MODULE_11__prohibitiondates_prohibitiondate_service__["a" /* ProhibitiondateService */], __WEBPACK_IMPORTED_MODULE_12__systemmaps_systemmap_service__["a" /* SystemmapService */], __WEBPACK_IMPORTED_MODULE_13__systemunitmaps_systemunitmap_service__["a" /* SystemunitmapService */],
                __WEBPACK_IMPORTED_MODULE_14__systemunits_systemunit_service__["a" /* SystemunitService */], __WEBPACK_IMPORTED_MODULE_15__tags_tag_service__["a" /* TagService */], __WEBPACK_IMPORTED_MODULE_16__users_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_20__workbench_workbench_filter_service__["a" /* WorkbenchFilterService */], __WEBPACK_IMPORTED_MODULE_21__reports_report_case_service__["a" /* ReportCaseService */], __WEBPACK_IMPORTED_MODULE_22__reports_report_case_count_service__["a" /* ReportCaseCountService */], __WEBPACK_IMPORTED_MODULE_48__modal_service__["a" /* ModalService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_guard__ = __webpack_require__("../../../../../src/authentication/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_routes__ = __webpack_require__("../../../../../src/authentication/authentication.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workbench_workbench_routes__ = __webpack_require__("../../../../../src/workbench/workbench.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapdata_mapdata_routes__ = __webpack_require__("../../../../../src/mapdata/mapdata.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports_report_routes__ = __webpack_require__("../../../../../src/reports/report.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tags_tag_routes__ = __webpack_require__("../../../../../src/tags/tag.routes.ts");







var routes = __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_routes__["a" /* AuthenticationRoutes */].concat(__WEBPACK_IMPORTED_MODULE_3__workbench_workbench_routes__["a" /* WorkbenchRoutes */], __WEBPACK_IMPORTED_MODULE_4__mapdata_mapdata_routes__["a" /* MapdataRoutes */], __WEBPACK_IMPORTED_MODULE_5__reports_report_routes__["a" /* ReportRoutes */], __WEBPACK_IMPORTED_MODULE_6__tags_tag_routes__["a" /* TagRoutes */]);
var appRoutingProviders = [
    __WEBPACK_IMPORTED_MODULE_1__authentication_authentication_guard__["a" /* AuthenticationGuard */]
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app.settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_SETTINGS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var APP_SETTINGS = /** @class */ (function () {
    function APP_SETTINGS() {
    }
    Object.defineProperty(APP_SETTINGS, "environment", {
        set: function (env) { this._environment = env; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "IS_LOGGEDIN", {
        get: function () { return (!!sessionStorage.getItem('username') && !!sessionStorage.getItem('password')); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "AUTH_URL", {
        get: function () { return this._API_ENDPOINT + 'auth/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "CASES_URL", {
        get: function () { return this._API_ENDPOINT + 'cases/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "PROPERTIES_URL", {
        get: function () { return this._API_ENDPOINT + 'properties/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "REQUESTERS_URL", {
        get: function () { return this._API_ENDPOINT + 'requesters/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "CASEFILES_URL", {
        get: function () { return this._API_ENDPOINT + 'casefiles/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "COMMENTS_URL", {
        get: function () { return this._API_ENDPOINT + 'comments/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "TAGS_URL", {
        get: function () { return this._API_ENDPOINT + 'tags/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "CASETAGS_URL", {
        get: function () { return this._API_ENDPOINT + 'casetags/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "SYSTEMUNITS_URL", {
        get: function () { return this._API_ENDPOINT + 'systemunits/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "FIELDOFFICES_URL", {
        get: function () { return this._API_ENDPOINT + 'fieldoffices/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "SYSTEMMAPS_URL", {
        get: function () { return this._API_ENDPOINT + 'systemmaps/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "SYSTEMUNITMAPS_URL", {
        get: function () { return this._API_ENDPOINT + 'systemunitmaps/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "USERS_URL", {
        get: function () { return this._API_ENDPOINT + 'users/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "DETERMINATIONS_URL", {
        get: function () { return this._API_ENDPOINT + 'determinations/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "SYSTEMUNITPROHIBITIONDATES_URL", {
        get: function () { return this._API_ENDPOINT + 'systemunitprohibitiondates/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "REPORTCASES_URL", {
        get: function () { return this._API_ENDPOINT + 'reportcases/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "REPORTCASECOUNTS_URL", {
        get: function () { return this._API_ENDPOINT + 'reportcasecounts/'; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "MIN_JSON_HEADERS", {
        get: function () { return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "JSON_HEADERS", {
        get: function () { return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json', 'Content-Type': 'application/json' }); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "AUTH_HEADERS", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Basic ' +
                    btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "MIN_AUTH_JSON_HEADERS", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Authorization': 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')),
                'Accept': 'application/json'
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "AUTH_JSON_HEADERS", {
        get: function () {
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Authorization': 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')),
                'Accept': 'application/json', 'Content-Type': 'application/json'
            });
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "STATUSES", {
        get: function () {
            return ['Closed with no Final Letter', 'Final', 'Awaiting Final Letter', 'Awaiting QC', 'Received'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APP_SETTINGS, "SALUTATIONS", {
        get: function () { return ['Mr.', 'Ms.', 'Dr.']; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "US_STATES", {
        get: function () {
            return ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
                'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
                'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "CONTENT_TYPES", {
        get: function () {
            return ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'application/pdf', 'text/plain', 'image/jpeg', 'image/png', 'image/gif', 'image/tiff', 'image/bmp',
                'application/zip', 'application/x-bzip', 'application/x-bzip2'];
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(APP_SETTINGS, "MAX_UPLOAD_SIZE", {
        get: function () { return 10485760; },
        enumerable: true,
        configurable: true
    });
    ;
    APP_SETTINGS._environment = 'production';
    // private static _API_ENDPOINT = 'http://localhost:8000/cbrsservices/';
    // private static _API_ENDPOINT = 'http://cbrsdev.wim.usgs.gov/cbrsservices/';
    APP_SETTINGS._API_ENDPOINT = 'https://' + window.location.hostname + '/cbrsservices/';
    APP_SETTINGS = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], APP_SETTINGS);
    return APP_SETTINGS;
}());

//# sourceMappingURL=app.settings.js.map

/***/ }),

/***/ "../../../../../src/app.utilities.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_UTILITIES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var APP_UTILITIES = /** @class */ (function () {
    function APP_UTILITIES() {
    }
    Object.defineProperty(APP_UTILITIES, "TODAY", {
        get: function () { return new Date().toISOString().substr(0, 10); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(APP_UTILITIES, "TIME", {
        get: function () { return new Date().toISOString().substr(14, 22); },
        enumerable: true,
        configurable: true
    });
    APP_UTILITIES.showToast = function (message, timeout) {
        var toast = document.querySelector('#cbrs_toast');
        toast.className = 'cbrsToast toastVisible';
        toast.innerHTML = message;
        setTimeout(function () {
            toast.className = 'cbrsToast';
        }, (timeout ? timeout : 5000));
    };
    APP_UTILITIES.convertDateToISOString = function (datePickerObject) {
        return ('0000' + datePickerObject.date.year).slice(-4)
            + '-' + ('00' + datePickerObject.date.month).slice(-2)
            + '-' + ('00' + datePickerObject.date.day).slice(-2);
    };
    APP_UTILITIES.convertArrayOfObjectsToCSV = function (args) {
        var result, counter, keys, columnDelimiter, lineDelimiter, data, headers;
        headers = [];
        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }
        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';
        keys = Object.keys(data[0]);
        // put the headers array in the same order as the data keys
        keys.forEach(function (item) {
            var obj = args.headers.filter(function (o) {
                return o.name === item;
            })[0];
            headers.push(obj.descr);
        });
        // remove keys that aren't in the headers array, ensuring those data columns won't be exported
        // keys.forEach(function(item){
        //     if (headers.indexOf(item) < 0) {
        //         let ndx = keys.indexOf(item);
        //         keys.splice(ndx, 1);
        //     }
        // });
        result = '';
        result += (args.headers) ? headers.join(columnDelimiter) : keys.join(columnDelimiter);
        result += lineDelimiter;
        data.forEach(function (item) {
            counter = 0;
            keys.forEach(function (key) {
                if (counter > 0) {
                    result += columnDelimiter;
                }
                if (item[key] == null) {
                    result += '';
                }
                else if (typeof item[key] === 'string' && item[key].includes(',')) {
                    result += '"' + item[key] + '"';
                }
                else {
                    result += item[key];
                }
                counter++;
            });
            result += lineDelimiter;
        });
        return result;
    };
    APP_UTILITIES.downloadCSV = function (args) {
        var data, filename, link;
        var csv = this.convertArrayOfObjectsToCSV({
            data: args.data,
            headers: args.headers
        });
        if (csv == null) {
            return;
        }
        filename = args.filename || 'export.csv';
        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }
        data = encodeURI(csv);
        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    };
    // the following functions found here:
    // http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript/4760279#4760279
    APP_UTILITIES.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    APP_UTILITIES.dynamicSortMultiple = function (args) {
        function dynamicSort(property) {
            var sortOrder = 1;
            if (property[0] === '-') {
                sortOrder = -1;
                property = property.substr(1);
            }
            return function (a, b) {
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
            };
        }
        /*
         * save the arguments object as it will be overwritten
         * note that arguments object is an array-like object
         * consisting of the names of the properties to sort by
         */
        // let props = arguments;
        var props = args;
        return function (obj1, obj2) {
            var i = 0, result = 0;
            var numberOfProperties = props.length;
            /* try getting a different result from 0 (equal)
             * as long as we have extra properties to compare
             */
            while (result === 0 && i < numberOfProperties) {
                result = dynamicSort(props[i])(obj1, obj2);
                i++;
            }
            return result;
        };
    };
    APP_UTILITIES = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], APP_UTILITIES);
    return APP_UTILITIES;
}());

//# sourceMappingURL=app.utilities.js.map

/***/ }),

/***/ "../../../../../src/authentication/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");

var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard() {
    }
    AuthenticationGuard.prototype.canActivate = function () {
        return __WEBPACK_IMPORTED_MODULE_0__app_settings__["a" /* APP_SETTINGS */].IS_LOGGEDIN;
    };
    return AuthenticationGuard;
}());

//# sourceMappingURL=authentication.guard.js.map

/***/ }),

/***/ "../../../../../src/authentication/authentication.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/authentication/login.component.ts");

var AuthenticationRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__login_component__["a" /* LoginComponent */]
    }
];
//# sourceMappingURL=authentication.routes.js.map

/***/ }),

/***/ "../../../../../src/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_http, _router) {
        this._http = _http;
        this._router = _router;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Authorization': 'Basic ' + btoa(username + ':' + password), 'Accept': 'application/json' })
        });
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].AUTH_URL, null, options)
            .map(function (res) {
            var u = res.json();
            if (u.is_active) {
                u.password = password;
                _this.user = u;
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('password', password);
                sessionStorage.setItem('first_name', _this.user.first_name);
                sessionStorage.setItem('last_name', _this.user.last_name);
                return u;
            }
            else {
                // TODO: do something more professional here
                alert('This user is not authorized!');
                return false;
            }
        });
    };
    AuthenticationService.prototype.getUser = function () {
        console.log('Auth.getUser: ' + this.user.first_name);
        return this.user;
    };
    AuthenticationService.prototype.logout = function () {
        this._router.navigate(['/login']);
        this.user = undefined;
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        sessionStorage.removeItem('first_name');
        sessionStorage.removeItem('last_name');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of(true);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a, _b;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/authentication/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"login-form\">\r\n    <div *ngIf=\"error\">Username/Password combination invalid.</div>\r\n    <div>\r\n        <label for=\"username\">Username</label>\r\n        <input id=\"username\" type=\"text\" formControlName=\"username\">\r\n    </div>\r\n    <div>\r\n        <label for=\"password\">Password</label>\r\n        <input id=\"password\" type=\"password\" formControlName=\"password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <button type=\"submit\" [disabled]=\"!form.valid\">Login</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/authentication/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _authenticationService, router) {
        this._authenticationService = _authenticationService;
        this.router = router;
        this.error = false;
        this.form = fb.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required]
        });
    }
    LoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (sessionStorage.getItem('username')) {
            this._authenticationService.logout();
        }
        this._authenticationService.login(value.username, value.password)
            .subscribe(function (user) { _this.router.navigateByUrl('workbench'); }, function () { _this.error = true; });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/authentication/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/casefiles/casefile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasefileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CasefileService = /** @class */ (function () {
    function CasefileService(http, _authenticationService) {
        this.http = http;
        this._authenticationService = _authenticationService;
    }
    CasefileService.prototype.getCasefiles = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].CASEFILES_URL, options)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CasefileService.prototype.createCasefiles = function (caseid, files, final_letter) {
        return new Promise(function (resolve, reject) {
            var _loop_1 = function (i) {
                var formData = new FormData();
                formData.append('case', caseid);
                formData.append('file', files[i]);
                if (final_letter) {
                    formData.append('final_letter', final_letter);
                }
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 201) {
                            resolve(JSON.parse(xhr.response));
                        }
                        else {
                            reject(xhr.response);
                        }
                    }
                };
                xhr.open('POST', __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].CASEFILES_URL, true);
                xhr.setRequestHeader('Authorization', 'Basic '
                    + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')));
                xhr.send(formData);
            };
            for (var i = 0; i < files.length; i++) {
                _loop_1(i);
            }
        });
    };
    CasefileService.prototype.deleteCasefile = function (casefileid) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].CASEFILES_URL + casefileid + '/', options);
    };
    CasefileService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.message || error.json().error || 'Server error via Casefile Service');
    };
    CasefileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], CasefileService);
    return CasefileService;
    var _a, _b;
}());

//# sourceMappingURL=casefile.service.js.map

/***/ }),

/***/ "../../../../../src/cases/case.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CaseService = /** @class */ (function () {
    function CaseService(http, _authenticationService) {
        this.http = http;
        this._authenticationService = _authenticationService;
    }
    CaseService.prototype.getCase = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].CASES_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CaseService.prototype.getCases = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].CASES_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CaseService.prototype.createCase = function (acase) {
        var body = JSON.stringify(acase);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].CASES_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CaseService.prototype.updateCase = function (acase) {
        // pull out the ID
        var id = acase.id;
        delete acase['id'];
        var body = JSON.stringify(acase);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].CASES_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CaseService.prototype.createFinalLeter = function (caseid) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var filename = '';
                        var disposition = xhr.getResponseHeader('Content-Disposition');
                        if (disposition && disposition.indexOf('attachment') !== -1) {
                            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                            var matches = filenameRegex.exec(disposition);
                            if (matches != null && matches[1]) {
                                filename = matches[1].replace(/['"]/g, '');
                            }
                        }
                        resolve([xhr.response, filename]);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.responseType = 'blob';
            xhr.open('GET', __WEBPACK_IMPORTED_MODULE_6__app_settings__["a" /* APP_SETTINGS */].CASES_URL + '?case_number=' + caseid + '&format=docx', true);
            xhr.setRequestHeader('Authorization', 'Basic '
                + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')));
            xhr.send();
        });
    };
    CaseService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    CaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
    ], CaseService);
    return CaseService;
    var _a, _b;
}());

//# sourceMappingURL=case.service.js.map

/***/ }),

/***/ "../../../../../src/cases/case.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Case; });
var Case = /** @class */ (function () {
    function Case(requester, property, property_string, case_number, case_reference, duplicate, status, request_date, casefiles, cbrs_unit, cbrs_unit_string, map_number, map_number_string, cbrs_map_date, determination, determination_string, prohibition_date, prohibition_date_mdy, distance, fws_fo_received_date, fws_hq_received_date, final_letter_date, close_date, final_letter_recipient, analyst, analyst_string, analyst_signoff_date, qc_reviewer, qc_reviewer_string, qc_reviewer_signoff_date, priority, on_hold, invalid, comments, tags, id) {
        this.requester = requester;
        this.property = property;
        this.property_string = property_string;
        this.case_number = case_number;
        this.case_reference = case_reference;
        this.duplicate = duplicate;
        this.status = status;
        this.request_date = request_date;
        this.casefiles = casefiles;
        this.cbrs_unit = cbrs_unit;
        this.cbrs_unit_string = cbrs_unit_string;
        this.map_number = map_number;
        this.map_number_string = map_number_string;
        this.cbrs_map_date = cbrs_map_date;
        this.determination = determination;
        this.determination_string = determination_string;
        this.prohibition_date = prohibition_date;
        this.prohibition_date_mdy = prohibition_date_mdy;
        this.distance = distance;
        this.fws_fo_received_date = fws_fo_received_date;
        this.fws_hq_received_date = fws_hq_received_date;
        this.final_letter_date = final_letter_date;
        this.close_date = close_date;
        this.final_letter_recipient = final_letter_recipient;
        this.analyst = analyst;
        this.analyst_string = analyst_string;
        this.analyst_signoff_date = analyst_signoff_date;
        this.qc_reviewer = qc_reviewer;
        this.qc_reviewer_string = qc_reviewer_string;
        this.qc_reviewer_signoff_date = qc_reviewer_signoff_date;
        this.priority = priority;
        this.on_hold = on_hold;
        this.invalid = invalid;
        this.comments = comments;
        this.tags = tags;
        this.id = id;
    }
    return Case;
}());

//# sourceMappingURL=case.js.map

/***/ }),

/***/ "../../../../../src/casetags/casetag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasetagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CasetagService = /** @class */ (function () {
    function CasetagService(http) {
        this.http = http;
    }
    CasetagService.prototype.getCasetag = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].CASETAGS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CasetagService.prototype.getCasetags = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].CASETAGS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CasetagService.prototype.createCasetag = function (casetag) {
        var acasetag = { 'case': casetag.caseid, 'tag': casetag.tag };
        var body = JSON.stringify(acasetag);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].CASETAGS_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CasetagService.prototype.updateCasetag = function (casetag) {
        // pull out the ID
        var id = casetag.id;
        delete casetag['id'];
        var body = JSON.stringify(casetag);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].CASETAGS_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CasetagService.prototype.deleteCasetag = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].CASETAGS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CasetagService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    CasetagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CasetagService);
    return CasetagService;
    var _a;
}());

//# sourceMappingURL=casetag.service.js.map

/***/ }),

/***/ "../../../../../src/casetags/casetag.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Casetag; });
var Casetag = /** @class */ (function () {
    function Casetag(caseid, tag, tagname, id) {
        this.caseid = caseid;
        this.tag = tag;
        this.tagname = tagname;
        this.id = id;
    }
    return Casetag;
}());

//# sourceMappingURL=casetag.js.map

/***/ }),

/***/ "../../../../../src/comments/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.getComment = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].COMMENTS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommentService.prototype.getComments = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].COMMENTS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommentService.prototype.createComment = function (comment) {
        var acomment = { 'acase': comment.acase, 'comment': comment.comment };
        var body = JSON.stringify(acomment);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].COMMENTS_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommentService.prototype.updateComment = function (comment) {
        // pull out the ID
        var id = comment.id;
        delete comment['id'];
        var acomment = { 'acase': comment.acase, 'comment': comment.comment, 'created_by': comment.created_by };
        var body = JSON.stringify(acomment);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].COMMENTS_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CommentService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CommentService);
    return CommentService;
    var _a;
}());

//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/comments/comment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(acase, comment, created_by, created_by_string, created_date, id) {
        this.acase = acase;
        this.comment = comment;
        this.created_by = created_by;
        this.created_by_string = created_by_string;
        this.created_date = created_date;
        this.id = id;
    }
    return Comment;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ "../../../../../src/determinations/determination.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeterminationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeterminationService = /** @class */ (function () {
    function DeterminationService(http) {
        this.http = http;
    }
    DeterminationService.prototype.getDetermination = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].DETERMINATIONS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DeterminationService.prototype.getDeterminations = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].DETERMINATIONS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DeterminationService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    DeterminationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], DeterminationService);
    return DeterminationService;
    var _a;
}());

//# sourceMappingURL=determination.service.js.map

/***/ }),

/***/ "../../../../../src/display-value.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayValuePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DisplayValuePipe = /** @class */ (function () {
    function DisplayValuePipe() {
    }
    DisplayValuePipe.prototype.transform = function (value, displayProperty, sourceArray) {
        var displayValue;
        if (Array.isArray(value)) {
            displayValue = [];
            for (var i = 0, j = value.length; i < j; i++) {
                for (var k = 0, l = sourceArray.length; k < l; k++) {
                    if (sourceArray[k].id === value[i]) {
                        displayValue.push(sourceArray[k][displayProperty]);
                    }
                }
            }
        }
        else {
            for (var i = 0, j = sourceArray.length; i < j; i++) {
                if (sourceArray[i].id === value) {
                    displayValue = sourceArray[i][displayProperty];
                    break;
                }
            }
        }
        return displayValue;
    };
    DisplayValuePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'displayValue' })
    ], DisplayValuePipe);
    return DisplayValuePipe;
}());

//# sourceMappingURL=display-value.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/fieldoffices/fieldoffice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldofficeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FieldofficeService = /** @class */ (function () {
    function FieldofficeService(http) {
        this.http = http;
    }
    FieldofficeService.prototype.getFieldoffice = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].FIELDOFFICES_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FieldofficeService.prototype.getFieldoffices = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].FIELDOFFICES_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FieldofficeService.prototype.createFieldoffice = function (fieldoffice) {
        var body = JSON.stringify(fieldoffice);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].FIELDOFFICES_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FieldofficeService.prototype.updateFieldoffice = function (fieldoffice) {
        // pull out the ID
        var id = fieldoffice.id;
        delete fieldoffice['id'];
        var body = JSON.stringify(fieldoffice);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].FIELDOFFICES_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    FieldofficeService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    FieldofficeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], FieldofficeService);
    return FieldofficeService;
    var _a;
}());

//# sourceMappingURL=fieldoffice.service.js.map

/***/ }),

/***/ "../../../../../src/grid/column.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Column; });
var Column = /** @class */ (function () {
    function Column(name, descr) {
        this.name = name;
        this.descr = descr;
    }
    return Column;
}());

//# sourceMappingURL=column.js.map

/***/ }),

/***/ "../../../../../src/grid/grid.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"dms-table table table-striped table-bordered table-hover table-condensed\">\r\n    <thead>\r\n        <tr>\r\n            <th *ngFor=\"let col of columns\"><a (click)=\"sort(col.name)\">{{col.descr}}</a></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let row of rows\">\r\n            <td *ngFor=\"let col of columns\">{{row[col.name]}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/grid/grid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sorter__ = __webpack_require__("../../../../../src/grid/sorter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Grid = /** @class */ (function () {
    function Grid() {
        this.sorter = new __WEBPACK_IMPORTED_MODULE_1__sorter__["a" /* Sorter */]();
    }
    Grid.prototype.sort = function (key) {
        this.sorter.sort(key, this.rows);
    };
    Grid = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'grid',
            inputs: ['rows: rows', 'columns: columns'],
            template: __webpack_require__("../../../../../src/grid/grid.html")
        }),
        __metadata("design:paramtypes", [])
    ], Grid);
    return Grid;
}());

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ "../../../../../src/grid/sorter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sorter; });
var Sorter = /** @class */ (function () {
    function Sorter() {
        this.direction = 1;
    }
    Sorter.prototype.sort = function (key, data) {
        var _this = this;
        if (this.key === key) {
            this.direction = -this.direction;
        }
        else {
            this.direction = 1;
        }
        this.key = key;
        data.sort(function (a, b) {
            if (a[key] === b[key]) {
                return 0;
            }
            else if (a[key] > b[key]) {
                return _this.direction;
            }
            else {
                return -_this.direction;
            }
        });
    };
    return Sorter;
}());

//# sourceMappingURL=sorter.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_module__ = __webpack_require__("../../../../../src/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");






if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_23" /* enableProdMode */])();
    __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].environment = 'production';
}
else {
    __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].environment = 'development';
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/mapdata/mapdata-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <table class=\"dms-table table table-bordered\">\n        <thead>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    <a (click)=\"sort(col.name)\" class=\"gridHeader\">{{col.descr}} <i class=\"fa fa-sort\"></i></a>\n                </th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let row of rows\" (click)=\"onClick(row)\">\n                <td *ngFor=\"let col of columns\">\n                    <!--<span>{{row[col.name]}}</span>-->\n                    <span *ngIf=\"col.name !== 'system_units' && col.name !== 'system_unit' && !(col.name.includes('date'))\">{{row[col.name]}}</span>\n                    <span *ngIf=\"col.name.includes('date')\">{{row[col.name] | date:'shortDate'}}</span>\n                    <span *ngIf=\"col.name === 'system_units' || col.name === 'system_unit'\">{{row[col.name] | displayValue:'system_unit_number':displayLookup}}</span>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/mapdata/mapdata-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngIf=\"notready\" align=\"center\" id=\"loading-spinner\">\n        <i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i>\n    </div>\n    <div *ngIf=\"!notready\" style=\"display: flex; justify-content: center;\">\n        <!--<div *ngIf=\"noSystemmapsFound\" style=\"display:inline;\" align=\"center\"><br /><br />No maps found.</div>-->\n        <div *ngIf=\"!noSystemmapsFound\" class=\"mapData-filter\">\n            <div align=\"center\">\n                <label for=\"systemmap-filter\">Maps</label><br />\n                <button type=\"button\" (click)=\"openModal('modalMap')\" class=\"btn btn-default btn-save-all\">Add Map</button><br />\n                <input id=\"systemmap-filter\" placeholder=\"Filter\" (keyup)=\"filterGrid(systemmap.id, systemmap.value)\" #systemmap>\n            </div>\n            <systemmap-grid *ngIf=\"systemunits\" [rows]=\"systemmaps\" [columns]=\"systemmapColumns\" [displayLookup]=\"systemunits\" (edit)=\"openModal('modalMap', $event)\" class=\"multi-table\"></systemmap-grid>\n        </div>\n        <!--<div *ngIf=\"noSystemunitsFound\" style=\"display:inline;\" align=\"center\"><br /><br />No units found.</div>-->\n        <div *ngIf=\"!noSystemunitsFound\" class=\"mapData-filter\">\n            <div align=\"center\">\n                <label for=\"systemunit-filter\">Units</label><br />\n                <button type=\"button\" (click)=\"openModal('modalUnit')\" class=\"btn btn-default btn-save-all\">Add Unit</button><br />\n                <input id=\"systemunit-filter\" placeholder=\"Filter\" (keyup)=\"filterGrid(systemunit.id, systemunit.value)\" #systemunit>\n            </div>\n            <systemunit-grid [rows]=\"systemunits\" [columns]=\"systemunitColumns\" (edit)=\"openModal('modalUnit', $event)\" class=\"multi-table\"></systemunit-grid>\n        </div>\n        <!--<div *ngIf=\"noProhibitiondatesFound\" style=\"display:inline;\" align=\"center\"><br /><br />No prohibition dates found.</div>-->\n        <div *ngIf=\"!noProhibitiondatesFound\" class=\"mapData-filter\">\n            <div align=\"center\">\n                <label for=\"prohibitiondates-filter\">Prohibition Dates</label><br />\n                <button type=\"button\" (click)=\"openModal('modalDate')\" class=\"btn btn-default btn-save-all\">Add Date</button><br />\n                <input id=\"prohibitiondates-filter\" placeholder=\"Filter\" (keyup)=\"filterGrid(prohibitiondate.id, prohibitiondate.value)\" #prohibitiondate>\n            </div>\n            <prohibitiondate-grid *ngIf=\"systemunits\" [rows]=\"prohibitiondates\" [columns]=\"prohibitiondateColumns\" [displayLookup]=\"systemunits\" (edit)=\"openModal('modalDate', $event)\" class=\"multi-table\"></prohibitiondate-grid>\n        </div>\n    </div>\n</div>\n\n<modal id=\"modalMap\">\n    <div class=\"modal\">\n        <div class=\"modal-body\">\n            <div class=\"container cbrs-form\">\n                <h3 *ngIf=\"!row\">Add Map</h3><h3 *ngIf=\"row\">Edit Map {{row?.id}}</h3>\n                <form [formGroup]=\"mapForm\" (ngSubmit)=\"onSubmit(mapForm, 'modalMap')\">\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"map_number\">Map Number</label>\n                            <input id=\"map_number\" type=\"text\" formControlName=\"map_number\">\n                        </div>\n                    </div>\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"map_title\">Map Title</label>\n                            <input id=\"map_title\" type=\"text\" formControlName=\"map_title\">\n                        </div>\n                    </div>\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"map_date\">Map Date</label>\n                            <!--<input id=\"map_date\" formControlName=\"map_date\">-->\n                            <my-date-picker id=\"map_date\" formControlName=\"map_date\" [options]=\"myDatePickerOptions\"></my-date-picker>\n                        </div>\n                    </div>\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"system_units\">System Units</label>\n                            <!--<input id=\"system_units\" formControlName=\"system_units\">-->\n                            <ss-multiselect-dropdown *ngIf=\"systemunits\" id=\"system_units\" formControlName=\"system_units\" [options]=\"systemunitoptions\" [settings]=\"systemunitsettings\"></ss-multiselect-dropdown>\n                        </div>\n                    </div>\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\" style=\"display: inline;\">\n                            <label for=\"effective\" style=\"display: inline-block;\">Effective</label>\n                            <input id=\"effective\" name=\"effective\" type=\"checkbox\" [checked]=\"row?.effective\" value=\"true\" formControlName=\"effective\" style=\"display: inline-block;\">\n                        </div>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-default btn-primary btn-group\" [disabled]=\"!mapForm.valid\">Save</button>\n                    <button type=\"button\" class=\"btn btn-default btn-danger btn-group\" (click)=\"deleteRow('modalMap', row?.id)\">Delete</button>\n                    <button type=\"button\" class=\"btn btn-default btn-group\" (click)=\"closeModal('modalMap')\">Cancel</button>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-background\"></div>\n</modal>\n<modal id=\"modalUnit\">\n    <div class=\"modal\">\n        <div class=\"modal-body\">\n            <div class=\"container cbrs-form\">\n                <h3 *ngIf=\"!row\">Add Unit</h3><h3 *ngIf=\"row\">Edit Unit {{row?.id}}</h3>\n                <form [formGroup]=\"unitForm\" (ngSubmit)=\"onSubmit(unitForm, 'modalUnit')\">\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"system_unit_number\">Unit Number</label>\n                            <input id=\"system_unit_number\" type=\"text\" formControlName=\"system_unit_number\">\n                        </div>\n                    </div>\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"system_unit_name\">Unit Name</label>\n                            <input id=\"system_unit_name\" type=\"text\" formControlName=\"system_unit_name\">\n                        </div>\n                    </div>\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"field_office\">Field Office</label>\n                            <input id=\"field_office\" type=\"text\" formControlName=\"field_office\">\n                        </div>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-default btn-primary btn-group\" [disabled]=\"!unitForm.valid\">Save</button>\n                    <button type=\"button\" class=\"btn btn-default btn-danger btn-group\" (click)=\"deleteRow('modalUnit', row?.id)\">Delete</button>\n                    <button type=\"button\" class=\"btn btn-default btn-group\" (click)=\"closeModal('modalUnit')\">Cancel</button>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-background\"></div>\n</modal>\n<modal id=\"modalDate\">\n    <div class=\"modal\">\n        <div class=\"modal-body\">\n            <div class=\"container cbrs-form\">\n                <h3 *ngIf=\"!row\">Add Prohibition Date</h3><h3 *ngIf=\"row\">Edit Prohib. Date {{row?.id}}</h3>\n                <form [formGroup]=\"dateForm\" (ngSubmit)=\"onSubmit(dateForm, 'modalDate')\">\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"system_unit\">Unit Number</label>\n                            <select id=\"system_unit\" formControlName=\"system_unit\">\n                                <option value=\"\"></option>\n                                <option *ngFor=\"let unit of systemunits\" [value]=\"unit.id\" [selected]=\"unit.id == myProhibitiondate.system_unit_number\">{{unit.system_unit_number}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"dms-group\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"prohibition_date\">Prohibition Date</label>\n                            <my-date-picker id=\"prohibition_date\" formControlName=\"prohibition_date\" [options]=\"myDatePickerOptions\"></my-date-picker>\n                        </div>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-default btn-primary btn-group\" style=\"display:inline;\" [disabled]=\"!dateForm.valid\">Save</button>\n                    <button type=\"button\" class=\"btn btn-default btn-danger btn-group\" (click)=\"deleteRow('modalDate', row?.id)\">Delete</button>\n                    <button type=\"button\" class=\"btn btn-default\" style=\"display:inline;\" (click)=\"closeModal('modalDate')\">Cancel</button>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-background\"></div>\n</modal>\n"

/***/ }),

/***/ "../../../../../src/mapdata/mapdata-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapdataListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systemmaps_systemmap__ = __webpack_require__("../../../../../src/systemmaps/systemmap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__systemmaps_systemmap_service__ = __webpack_require__("../../../../../src/systemmaps/systemmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systemunitmaps_systemunitmap__ = __webpack_require__("../../../../../src/systemunitmaps/systemunitmap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__systemunitmaps_systemunitmap_service__ = __webpack_require__("../../../../../src/systemunitmaps/systemunitmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__systemunits_systemunit__ = __webpack_require__("../../../../../src/systemunits/systemunit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__systemunits_systemunit_service__ = __webpack_require__("../../../../../src/systemunits/systemunit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__prohibitiondates_prohibitiondate__ = __webpack_require__("../../../../../src/prohibitiondates/prohibitiondate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__prohibitiondates_prohibitiondate_service__ = __webpack_require__("../../../../../src/prohibitiondates/prohibitiondate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__grid_column__ = __webpack_require__("../../../../../src/grid/column.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_service__ = __webpack_require__("../../../../../src/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MapdataListComponent = /** @class */ (function () {
    function MapdataListComponent(_systemmapService, _systemunitmapService, _systemunitService, _prohibitiondateService, _modalService) {
        this._systemmapService = _systemmapService;
        this._systemunitmapService = _systemunitmapService;
        this._systemunitService = _systemunitService;
        this._prohibitiondateService = _prohibitiondateService;
        this._modalService = _modalService;
        this.systemunitoptions = [];
        this.systemunitsettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        this.mySystemmap = new __WEBPACK_IMPORTED_MODULE_2__systemmaps_systemmap__["a" /* Systemmap */]();
        this.mySystemunit = new __WEBPACK_IMPORTED_MODULE_6__systemunits_systemunit__["a" /* Systemunit */]();
        this.myProhibitiondate = new __WEBPACK_IMPORTED_MODULE_8__prohibitiondates_prohibitiondate__["a" /* Prohibitiondate */]();
        this._requiredFields = ['map_number', ' map_date', 'system_unit_number', 'prohibition_date', 'system_unit'];
        this._currentMapSystemUnits = [];
        this.notready = true;
        this.noSystemmapsFound = true;
        this.noSystemunitsFound = true;
        this.noProhibitiondatesFound = true;
        this._today = new Date();
        this.myDatePickerOptions = {
            dateFormat: 'mm/dd/yyyy',
            disableSince: { year: this._today.getFullYear(), month: this._today.getMonth() + 1, day: this._today.getDate() + 1 }
        };
        // get the fields for each object type
        this._mapFields = Object.keys(this.mySystemmap);
        this._unitFields = Object.keys(this.mySystemunit);
        this._dateFields = Object.keys(this.myProhibitiondate);
        // make the controls for each control group
        this._mapControls = this._makeControls(this._mapFields);
        this._unitControls = this._makeControls(this._unitFields);
        this._dateControls = this._makeControls(this._dateFields);
        // populate the forms with the controls
        this.mapForm = new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* FormGroup */](this._mapControls);
        this.unitForm = new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* FormGroup */](this._unitControls);
        this.dateForm = new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* FormGroup */](this._dateControls);
    }
    MapdataListComponent.prototype._makeControls = function (fields) {
        var controls = {};
        for (var i = 0, j = fields.length; i < j; i++) {
            // add a validator for required fields
            if (this._requiredFields.indexOf(fields) > -1) {
                controls[fields[i]] = new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormControl */]({ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_11__angular_forms__["h" /* Validators */].required);
            }
            else if (['system_units'].indexOf(fields[i]) > -1) {
                // special case for Multiselect field
                controls[fields[i]] = new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormControl */]({ value: [], disabled: false });
            }
            else {
                controls[fields[i]] = new __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormControl */]({ value: '', disabled: false });
            }
        }
        return controls;
    };
    MapdataListComponent.prototype._updateControls = function (fields, controls, values) {
        for (var i = 0, j = fields.length; i < j; i++) {
            var field = fields[i];
            if (field.slice(-4) === 'date') {
                if (values[field] !== undefined && values[field] !== null) {
                    var thisDate = new Date(values[field]);
                    thisDate = new Date(thisDate.getTime() + Math.abs(thisDate.getTimezoneOffset() * 60000));
                    controls[field].setValue({ date: { year: thisDate.getFullYear(), month: thisDate.getMonth() + 1, day: thisDate.getDate() } });
                }
                else {
                    controls[field].setValue('');
                }
            }
            else {
                controls[field].setValue(values[field]);
            }
        }
    };
    MapdataListComponent.prototype.ngOnInit = function () {
        this._getSystemmaps();
        this._getSystemunits();
        this._getProhibitiondates();
        this._getColumns();
        // this.mapForm.controls['system_units'].valueChanges
        //     .subscribe((selectedOptions) => {
        //         console.log(selectedOptions);
        //     });
    };
    MapdataListComponent.prototype._getSystemmaps = function (urlSearchParams) {
        var _this = this;
        this._systemmapService.getSystemmaps(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */](urlSearchParams))
            .subscribe(function (res) {
            _this.systemmaps = res;
            if (_this.systemmaps.length > 0) {
                _this.noSystemmapsFound = false;
                _this.notready = false;
            }
            else {
                _this.noSystemmapsFound = true;
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    MapdataListComponent.prototype._createSystemmap = function (map) {
        var _this = this;
        this.notready = true;
        var system_units = map.system_units;
        this._systemmapService.createSystemmap(map)
            .subscribe(function (result) {
            if (system_units) {
                _this._updateSystemunitmap(result.id, system_units);
            }
            _this._getSystemmaps();
            _this.row = result;
            _this._updateControls(_this._mapFields, _this._mapControls, result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_12__app_utilities__["a" /* APP_UTILITIES */].showToast('ERROR: Could not create System Map' + ':\n'
            + error['non_field_errors'][0], 10000); });
    };
    MapdataListComponent.prototype._updateSystemmap = function (map) {
        var _this = this;
        this.notready = true;
        var system_units = map.system_units;
        this._systemmapService.updateSystemmap(map)
            .subscribe(function (result) {
            if (system_units) {
                _this._updateSystemunitmap(result.id, system_units);
            }
            _this._getSystemmaps();
            _this.row = result;
            _this._updateControls(_this._mapFields, _this._mapControls, result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_12__app_utilities__["a" /* APP_UTILITIES */].showToast('ERROR: Could not update System Map' + ':\n'
            + error['non_field_errors'][0], 10000); });
    };
    MapdataListComponent.prototype._updateSystemunitmap = function (mapID, unitIDs) {
        var _this = this;
        this.notready = true;
        //let currentSet = new Set(this._currentMapSystemUnits);
        //let newSet = new Set(unitIDs);
        //let deleteSet = new Set([...currentSet].filter(x => !newSet.has(x)));
        //let createSet = new Set([...newSet].filter(x => !currentSet.has(x)));
        //let deleteSetCount = deleteSet.size;
        //let createSetCount = createSet.size;
        var deleteArray = this._currentMapSystemUnits.filter(function (x) { return unitIDs.indexOf(x) < 0; });
        var createArray = unitIDs.filter(function (x) { return _this._currentMapSystemUnits.indexOf(x) < 0; });
        var deleteArrayCount = deleteArray.length;
        var createArrayCount = createArray.length;
        var deleteCount = 0;
        var createCount = 0;
        var getSystemMapsCalled = false;
        // delete any units that have been removed from this map
        if (deleteArrayCount > 0) {
            for (var _i = 0, deleteArray_1 = deleteArray; _i < deleteArray_1.length; _i++) {
                var unitID = deleteArray_1[_i];
                this._systemunitmapService.getSystemunitmaps(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]('unit=' + unitID.toString() + '&map=' + mapID.toString()))
                    .subscribe(function (res) {
                    if (res.length != 0) {
                        _this._systemunitmapService.deleteSystemunitmap(res[0].id)
                            .subscribe((function (result) {
                            deleteCount++;
                            if (deleteCount == deleteArrayCount && createCount == createArrayCount && !getSystemMapsCalled) {
                                getSystemMapsCalled = true;
                                _this._getSystemmaps();
                            }
                        }), function (error) { _this._errorMessage = error; _this.notready = true; });
                    }
                }, function (error) { return _this._errorMessage = error; });
            }
        }
        // create any new additions to the set of units for this map
        if (createArrayCount > 0) {
            var _loop_1 = function (unitID) {
                this_1._systemunitmapService.getSystemunitmaps(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]('unit=' + unitID.toString() + '&map=' + mapID.toString()))
                    .subscribe(function (res) {
                    if (res.length === 0) {
                        _this._systemunitmapService.createSystemunitmap(new __WEBPACK_IMPORTED_MODULE_4__systemunitmaps_systemunitmap__["a" /* Systemunitmap */](unitID, mapID))
                            .subscribe((function (result) {
                            deleteCount++;
                            if (deleteCount == deleteArrayCount && createCount == createArrayCount && !getSystemMapsCalled) {
                                getSystemMapsCalled = true;
                                _this._getSystemmaps();
                            }
                        }), function (error) { _this._errorMessage = error; _this.notready = true; });
                    }
                }, function (error) { return _this._errorMessage = error; });
            };
            var this_1 = this;
            for (var _a = 0, createArray_1 = createArray; _a < createArray_1.length; _a++) {
                var unitID = createArray_1[_a];
                _loop_1(unitID);
            }
        }
    };
    MapdataListComponent.prototype._getSystemunits = function (urlSearchParams) {
        var _this = this;
        this._systemunitService.getSystemunits(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */](urlSearchParams))
            .subscribe(function (res) {
            _this.systemunits = res;
            if (_this.systemunits.length > 0) {
                for (var i = 0, j = _this.systemunits.length; i < j; i++) {
                    _this.systemunitoptions.push({ id: _this.systemunits[i].id, name: _this.systemunits[i].system_unit_number });
                }
                _this.noSystemunitsFound = false;
                _this.notready = false;
            }
            else {
                _this.noSystemunitsFound = true;
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    MapdataListComponent.prototype._createSystemunit = function (unit) {
        var _this = this;
        this.notready = true;
        this._systemunitService.createSystemunit(unit)
            .subscribe(function (result) {
            _this._getSystemunits();
            _this.row = result;
            _this._updateControls(_this._unitFields, _this._unitControls, result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_12__app_utilities__["a" /* APP_UTILITIES */].showToast('ERROR: Could not create System Unit' + ':\n'
            + error['non_field_errors'][0], 10000); });
    };
    MapdataListComponent.prototype._updateSystemunit = function (unit) {
        var _this = this;
        this.notready = true;
        this._systemunitService.updateSystemunit(unit)
            .subscribe(function (result) {
            _this._getSystemunits();
            _this.row = result;
            _this._updateControls(_this._unitFields, _this._unitControls, result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_12__app_utilities__["a" /* APP_UTILITIES */].showToast('ERROR: Could not update System Unit' + ':\n'
            + error['non_field_errors'][0], 10000); });
    };
    MapdataListComponent.prototype._getProhibitiondates = function (urlSearchParams) {
        var _this = this;
        this._prohibitiondateService.getProhibitiondates(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */](urlSearchParams))
            .subscribe(function (res) {
            _this.prohibitiondates = res;
            if (_this.prohibitiondates.length > 0) {
                _this.noProhibitiondatesFound = false;
                _this.notready = false;
            }
            else {
                _this.noProhibitiondatesFound = true;
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    MapdataListComponent.prototype._createProhibitiondate = function (date) {
        var _this = this;
        this.notready = true;
        this._prohibitiondateService.createProhibitiondate(date)
            .subscribe(function (result) {
            _this._getProhibitiondates();
            _this.row = result;
            _this._updateControls(_this._dateFields, _this._dateControls, result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_12__app_utilities__["a" /* APP_UTILITIES */].showToast('ERROR: Could not create Prohibition Date' + ':\n'
            + error['non_field_errors'][0], 10000); });
    };
    MapdataListComponent.prototype._updateProhibitiondate = function (date) {
        var _this = this;
        this.notready = true;
        this._prohibitiondateService.updateProhibitiondate(date)
            .subscribe(function (result) {
            _this._getProhibitiondates();
            _this.row = result;
            _this._updateControls(_this._dateFields, _this._dateControls, result);
        }, function (error) { return __WEBPACK_IMPORTED_MODULE_12__app_utilities__["a" /* APP_UTILITIES */].showToast('ERROR: Could not update Prohibition Date' + ':\n'
            + error['non_field_errors'][0], 10000); });
    };
    MapdataListComponent.prototype.deleteRow = function (modalID, recordID) {
        var _this = this;
        this.notready = true;
        if (confirm('Are you certain you want to delete this record?')) {
            switch (modalID) {
                case 'modalMap':
                    this._systemmapService.deleteSystemmap(recordID)
                        .subscribe(function (res) {
                        _this._getSystemmaps();
                    }, function (err) { return console.log(err); });
                    this.closeModal(modalID);
                    break;
                case 'modalUnit':
                    this._systemunitService.deleteSystemunit(recordID)
                        .subscribe(function (res) {
                        _this._getSystemunits();
                    }, function (err) { return console.log(err); });
                    this.closeModal(modalID);
                    break;
                case 'modalDate':
                    this._prohibitiondateService.deleteProhibitiondate(recordID)
                        .subscribe(function (res) {
                        _this._getProhibitiondates();
                    }, function (err) { return console.log(err); });
                    this.closeModal(modalID);
                    break;
                default:
                    this.notready = false;
                    break;
            }
        }
    };
    MapdataListComponent.prototype._getColumns = function () {
        this.systemmapColumns = [
            new __WEBPACK_IMPORTED_MODULE_10__grid_column__["a" /* Column */]('map_number', 'Map Number'),
            new __WEBPACK_IMPORTED_MODULE_10__grid_column__["a" /* Column */]('map_title', 'Map Title'),
            new __WEBPACK_IMPORTED_MODULE_10__grid_column__["a" /* Column */]('map_date', 'Map Date'),
            new __WEBPACK_IMPORTED_MODULE_10__grid_column__["a" /* Column */]('system_units', 'Unit ID'),
            new __WEBPACK_IMPORTED_MODULE_10__grid_column__["a" /* Column */]('effective', 'Effective'),
        ];
        this.systemunitColumns = [
            new __WEBPACK_IMPORTED_MODULE_10__grid_column__["a" /* Column */]('system_unit_number', 'Unit Number'),
            new __WEBPACK_IMPORTED_MODULE_10__grid_column__["a" /* Column */]('system_unit_name', 'Unit Name'),
        ];
        this.prohibitiondateColumns = [
            new __WEBPACK_IMPORTED_MODULE_10__grid_column__["a" /* Column */]('system_unit', 'Unit ID'),
            new __WEBPACK_IMPORTED_MODULE_10__grid_column__["a" /* Column */]('prohibition_date', 'Prohibition Date'),
        ];
    };
    MapdataListComponent.prototype.filterGrid = function (filterID, filterValue) {
        var filterClass = filterID.slice(0, -7);
        switch (filterClass) {
            case 'systemmap':
                filterValue ? this._getSystemmaps('freetext=' + filterValue) : this._getSystemmaps();
                break;
            case 'systemunit':
                filterValue ? this._getSystemunits('freetext=' + filterValue) : this._getSystemunits();
                break;
            case 'prohibitiondate':
                filterValue ? this._getProhibitiondates('freetext=' + filterValue) : this._getProhibitiondates();
                break;
        }
    };
    MapdataListComponent.prototype.openModal = function (modalID, row) {
        if (row) {
            switch (modalID) {
                case 'modalMap':
                    this.row = row;
                    this._currentMapSystemUnits = JSON.parse(JSON.stringify(this.row.system_units));
                    this._updateControls(this._mapFields, this._mapControls, row);
                    break;
                case 'modalUnit':
                    this.row = row;
                    this._updateControls(this._unitFields, this._unitControls, row);
                    break;
                case 'modalDate':
                    this.row = row;
                    this._updateControls(this._dateFields, this._dateControls, row);
                    break;
                default:
                    this.row = row;
            }
        }
        else {
            this._clearModalControls();
        }
        this._modalService.open(modalID);
    };
    MapdataListComponent.prototype.closeModal = function (modalID) {
        this._modalService.close(modalID);
        this._clearModalControls();
        this.row = undefined;
    };
    MapdataListComponent.prototype._clearModalControls = function () {
        this._updateControls(this._mapFields, this._mapControls, new __WEBPACK_IMPORTED_MODULE_2__systemmaps_systemmap__["a" /* Systemmap */]());
        this._updateControls(this._unitFields, this._unitControls, new __WEBPACK_IMPORTED_MODULE_6__systemunits_systemunit__["a" /* Systemunit */]());
        this._updateControls(this._dateFields, this._dateControls, new __WEBPACK_IMPORTED_MODULE_8__prohibitiondates_prohibitiondate__["a" /* Prohibitiondate */]());
    };
    MapdataListComponent.prototype.onSubmit = function (form, modalID) {
        this.notready = true;
        if (form.dirty) {
            switch (modalID) {
                case 'modalMap':
                    var map = form.value;
                    // validate that required fields have values
                    if (!map.map_number || !map.map_date) {
                        __WEBPACK_IMPORTED_MODULE_12__app_utilities__["a" /* APP_UTILITIES */].showToast('System Map NOT saved:\n'
                            + 'Map Number and Map Date must both have a value!');
                    }
                    else {
                        var thisDate = map.map_date;
                        if (thisDate === '') {
                            map.map_date = null;
                        }
                        if (thisDate !== null) {
                            thisDate = ('0000' + thisDate.date.year).slice(-4)
                                + '-' + ('00' + thisDate.date.month).slice(-2)
                                + '-' + ('00' + thisDate.date.day).slice(-2);
                            map.map_date = thisDate;
                        }
                        if (map.id) {
                            this._updateSystemmap(map);
                        }
                        else {
                            this._createSystemmap(map);
                        }
                    }
                    break;
                case 'modalUnit':
                    var unit = form.value;
                    // validate that required fields have values
                    if (!unit.system_unit_number) {
                        __WEBPACK_IMPORTED_MODULE_12__app_utilities__["a" /* APP_UTILITIES */].showToast('System Unit NOT saved:\nUnit Number must have a value!');
                    }
                    else {
                        if (unit.id) {
                            this._updateSystemunit(unit);
                        }
                        else {
                            this._createSystemunit(unit);
                        }
                    }
                    break;
                case 'modalDate':
                    var date = form.value;
                    // validate that required fields have values
                    if (!date.prohibition_date || !date.system_unit) {
                        __WEBPACK_IMPORTED_MODULE_12__app_utilities__["a" /* APP_UTILITIES */].showToast('Prohibition Date NOT saved:\n'
                            + 'Unit Number and Prohibition Date must both have a value!');
                    }
                    else {
                        if (date.id) {
                            this._updateProhibitiondate(date);
                        }
                        else {
                            this._createProhibitiondate(date);
                        }
                    }
                    break;
                default:
                    break;
            }
        }
        this.closeModal(modalID);
        this.notready = false;
    };
    MapdataListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/mapdata/mapdata-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__systemmaps_systemmap_service__["a" /* SystemmapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__systemmaps_systemmap_service__["a" /* SystemmapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__systemunitmaps_systemunitmap_service__["a" /* SystemunitmapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__systemunitmaps_systemunitmap_service__["a" /* SystemunitmapService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__systemunits_systemunit_service__["a" /* SystemunitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__systemunits_systemunit_service__["a" /* SystemunitService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__prohibitiondates_prohibitiondate_service__["a" /* ProhibitiondateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__prohibitiondates_prohibitiondate_service__["a" /* ProhibitiondateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_13__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__modal_service__["a" /* ModalService */]) === "function" && _e || Object])
    ], MapdataListComponent);
    return MapdataListComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=mapdata-list.component.js.map

/***/ }),

/***/ "../../../../../src/mapdata/mapdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapdataComponent = /** @class */ (function () {
    function MapdataComponent() {
    }
    MapdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "<navbar></navbar><router-outlet></router-outlet>",
        })
    ], MapdataComponent);
    return MapdataComponent;
}());

//# sourceMappingURL=mapdata.component.js.map

/***/ }),

/***/ "../../../../../src/mapdata/mapdata.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapdataRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__ = __webpack_require__("../../../../../src/authentication/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapdata_component__ = __webpack_require__("../../../../../src/mapdata/mapdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapdata_list_component__ = __webpack_require__("../../../../../src/mapdata/mapdata-list.component.ts");



var MapdataRoutes = [
    {
        path: '',
        redirectTo: '/mapdata',
        pathMatch: 'full'
    },
    {
        path: 'mapdata',
        component: __WEBPACK_IMPORTED_MODULE_1__mapdata_component__["a" /* MapdataComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__mapdata_list_component__["a" /* MapdataListComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
            }
        ]
    }
];
//# sourceMappingURL=mapdata.routes.js.map

/***/ }),

/***/ "../../../../../src/mapdata/prohibitiondate-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProhibitiondateGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid__ = __webpack_require__("../../../../../src/grid/grid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProhibitiondateGridComponent = /** @class */ (function (_super) {
    __extends(ProhibitiondateGridComponent, _super);
    function ProhibitiondateGridComponent(_router) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        return _this;
    }
    ProhibitiondateGridComponent.prototype.onClick = function (row) {
        this.edit.emit(row);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], ProhibitiondateGridComponent.prototype, "edit", void 0);
    ProhibitiondateGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'prohibitiondate-grid',
            inputs: ['rows: rows', 'columns: columns', 'displayLookup: displayLookup'],
            template: __webpack_require__("../../../../../src/mapdata/mapdata-grid.component.html"),
            styles: ['.gridHeader {cursor:pointer;}']
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], ProhibitiondateGridComponent);
    return ProhibitiondateGridComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__grid_grid__["a" /* Grid */]));

//# sourceMappingURL=prohibitiondate-grid.component.js.map

/***/ }),

/***/ "../../../../../src/mapdata/systemmap-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemmapGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid__ = __webpack_require__("../../../../../src/grid/grid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemmapGridComponent = /** @class */ (function (_super) {
    __extends(SystemmapGridComponent, _super);
    function SystemmapGridComponent(_router) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        return _this;
    }
    SystemmapGridComponent.prototype.onClick = function (row) {
        this.edit.emit(row);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], SystemmapGridComponent.prototype, "edit", void 0);
    SystemmapGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'systemmap-grid',
            inputs: ['rows: rows', 'columns: columns', 'displayLookup: displayLookup'],
            template: __webpack_require__("../../../../../src/mapdata/mapdata-grid.component.html"),
            styles: ['.gridHeader {cursor:pointer;}']
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], SystemmapGridComponent);
    return SystemmapGridComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__grid_grid__["a" /* Grid */]));

//# sourceMappingURL=systemmap-grid.component.js.map

/***/ }),

/***/ "../../../../../src/mapdata/systemunit-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemunitGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid__ = __webpack_require__("../../../../../src/grid/grid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemunitGridComponent = /** @class */ (function (_super) {
    __extends(SystemunitGridComponent, _super);
    function SystemunitGridComponent(_router) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        _this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        return _this;
    }
    SystemunitGridComponent.prototype.onClick = function (row) {
        this.edit.emit(row);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
    ], SystemunitGridComponent.prototype, "edit", void 0);
    SystemunitGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'systemunit-grid',
            inputs: ['rows: rows', 'columns: columns'],
            template: __webpack_require__("../../../../../src/mapdata/mapdata-grid.component.html"),
            styles: ['.gridHeader {cursor:pointer;}']
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], SystemunitGridComponent);
    return SystemunitGridComponent;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__grid_grid__["a" /* Grid */]));

//# sourceMappingURL=systemunit-grid.component.js.map

/***/ }),

/***/ "../../../../../src/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_service__ = __webpack_require__("../../../../../src/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el, document) {
        this.modalService = modalService;
        this.el = el;
        this.document = document;
        this.className = 'modal-open';
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.document.body.appendChild(this.element);
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        this.document.body.className ?
            this.document.body.className += ' ' + this.className :
            this.document.body.className += this.className;
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        this.document.body.className = this.document.body.className.replace(this.className, '');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'modal',
            template: '<ng-content></ng-content>'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modal_service__["a" /* ModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, Object])
    ], ModalComponent);
    return ModalComponent;
    var _a, _b;
}());

//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        var modalToRemove = this.modals.find(function (o) { return o.id === id; });
        this.modals = this.modals.filter(function (val) { return val !== modalToRemove; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.find(function (o) { return o.id === id; });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.find(function (o) { return o.id === id; });
        modal.close();
    };
    return ModalService;
}());

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ "../../../../../src/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav [hidden]=\"hideNavbar\">\n    <div style=\"float: left;\">\n        <a routerLink=\"/workbench\" [queryParams]=\"{home: true}\">Workbench</a>\n        <!-- <a href=\"../../cbrsrequests/\">Create Case</a> -->\n        <a routerLink=\"/workbench/new\">Create Case</a>\n        <a routerLink=\"/mapdata\">Map Data</a>\n        <a routerLink=\"/reports\">Reports</a>\n        <a routerLink=\"/tags\">Tags</a>\n    </div>\n    <div style=\"float: right;\">\n        <b class=\"nav-user\">User: {{ first_name }} {{ last_name }}</b>\n        <a (click)=\"onLogout()\">Logout <i class=\"fa fa-sign-out\"></i></a>\n    </div>\n</nav>\n<div id=\"cbrs_toast\" class=\"cbrsToast\"></div>\n"

/***/ }),

/***/ "../../../../../src/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.hideNavbar = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.hideNavbar = !__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* APP_SETTINGS */].IS_LOGGEDIN;
        this.first_name = sessionStorage.getItem('first_name');
        this.last_name = sessionStorage.getItem('last_name');
    };
    NavbarComponent.prototype.onLogout = function () {
        this._authenticationService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/navbar.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ "../../../../../src/prohibitiondates/prohibitiondate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProhibitiondateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProhibitiondateService = /** @class */ (function () {
    function ProhibitiondateService(http) {
        this.http = http;
    }
    ProhibitiondateService.prototype.getProhibitiondate = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITPROHIBITIONDATES_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProhibitiondateService.prototype.getProhibitiondates = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITPROHIBITIONDATES_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProhibitiondateService.prototype.createProhibitiondate = function (systemmap) {
        var body = JSON.stringify(systemmap);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITPROHIBITIONDATES_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProhibitiondateService.prototype.updateProhibitiondate = function (prohibitiondate) {
        // pull out the ID
        var id = prohibitiondate.id;
        delete prohibitiondate['id'];
        var body = JSON.stringify(prohibitiondate);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITPROHIBITIONDATES_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProhibitiondateService.prototype.deleteProhibitiondate = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITPROHIBITIONDATES_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ProhibitiondateService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    ProhibitiondateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ProhibitiondateService);
    return ProhibitiondateService;
    var _a;
}());

//# sourceMappingURL=prohibitiondate.service.js.map

/***/ }),

/***/ "../../../../../src/prohibitiondates/prohibitiondate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prohibitiondate; });
var Prohibitiondate = /** @class */ (function () {
    function Prohibitiondate(system_unit, prohibition_date, id) {
        this.system_unit = system_unit;
        this.prohibition_date = prohibition_date;
        this.id = id;
    }
    return Prohibitiondate;
}());

//# sourceMappingURL=prohibitiondate.js.map

/***/ }),

/***/ "../../../../../src/properties/property.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
    }
    PropertyService.prototype.getProperty = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].PROPERTIES_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PropertyService.prototype.getProperties = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].PROPERTIES_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PropertyService.prototype.createProperty = function (property) {
        var body = JSON.stringify(property);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].PROPERTIES_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PropertyService.prototype.updateProperty = function (property) {
        // pull out the ID
        var id = property.id;
        delete property['id'];
        var body = JSON.stringify(property);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].PROPERTIES_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    PropertyService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    PropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], PropertyService);
    return PropertyService;
    var _a;
}());

//# sourceMappingURL=property.service.js.map

/***/ }),

/***/ "../../../../../src/properties/property.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Property; });
var Property = /** @class */ (function () {
    function Property(street, city, state, zipcode, unit, legal_description, subdivision, policy_number, id) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.unit = unit;
        this.legal_description = legal_description;
        this.subdivision = subdivision;
        this.policy_number = policy_number;
        this.id = id;
    }
    return Property;
}());

//# sourceMappingURL=property.js.map

/***/ }),

/***/ "../../../../../src/reports/report-case-count.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCaseCountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportCaseCountService = /** @class */ (function () {
    function ReportCaseCountService(http) {
        this.http = http;
    }
    ReportCaseCountService.prototype.getReportCaseCounts = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].REPORTCASECOUNTS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ReportCaseCountService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    ReportCaseCountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ReportCaseCountService);
    return ReportCaseCountService;
    var _a;
}());

//# sourceMappingURL=report-case-count.service.js.map

/***/ }),

/***/ "../../../../../src/reports/report-case.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportCaseService = /** @class */ (function () {
    function ReportCaseService(http) {
        this.http = http;
    }
    ReportCaseService.prototype.getReportCases = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].REPORTCASES_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ReportCaseService.prototype.getReportCasesCSV = function (urlSearchParams) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        var filename = '';
                        var disposition = xhr.getResponseHeader('Content-Disposition');
                        if (disposition && disposition.indexOf('attachment') !== -1) {
                            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                            var matches = filenameRegex.exec(disposition);
                            if (matches != null && matches[1]) {
                                filename = matches[1].replace(/['"]/g, '');
                            }
                        }
                        resolve([xhr.response, filename]);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.responseType = 'blob';
            xhr.open('GET', __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].REPORTCASES_URL + '?' + urlSearchParams, true);
            xhr.setRequestHeader('Authorization', 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')));
            xhr.send();
        });
    };
    ReportCaseService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    ReportCaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], ReportCaseService);
    return ReportCaseService;
    var _a;
}());

//# sourceMappingURL=report-case.service.js.map

/***/ }),

/***/ "../../../../../src/reports/report-cases-by-unit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!notready\" align=\"center\" id=\"loading-spinner\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i></div>\n<div [hidden]=\"notready\">\n    <div align=\"center\">\n        <label for=\"cbrs_unit_top\">CBRS Unit</label>\n        <select id=\"cbrs_unit_top\" (change)=\"onFilter(newUnitTop.value)\" #newUnitTop>\n            <option value=\"\"></option>\n            <option *ngFor=\"let unit of systemunits\" [value]=\"unit.id\" [selected]=\"unit.id == selected_unit\">{{unit.system_unit_number}}</option>\n        </select>\n        <br/><br/>\n        <!-- <button class=\"btn btn-default btn-save-all\" (click)=\"clearFilter()\">Clear</button> -->\n        <button type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"prevPage(newUnitTop.value)\"><i class=\"fa fa-arrow-left\"></i> Prev Page</button>\n        <button type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"exportToCSV(newUnitTop.value)\"><i class=\"fa fa-download\"></i> Export CSV</button>\n        <button type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"nextPage(newUnitTop.value)\">Next Page <i class=\"fa fa-arrow-right\"></i></button>\n    </div>\n    <report-grid [rows]=\"cases_properties\" [columns]=\"columns\"></report-grid>\n    <div align=\"center\">\n        <label for=\"cbrs_unit_bottom\">CBRS Unit</label>\n        <select id=\"cbrs_unit_bottom\" (change)=\"onFilter(newUnitBottom.value)\" #newUnitBottom>\n            <option value=\"\"></option>\n            <option *ngFor=\"let unit of systemunits\" [value]=\"unit.id\" [selected]=\"unit.id == selected_unit\">{{unit.system_unit_number}}</option>\n        </select>\n        <br/><br/>\n        <!-- <button class=\"btn btn-default btn-save-all\" (click)=\"clearFilter()\">Clear</button> -->\n        <button type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"prevPage(newUnitBottom.value)\"><i class=\"fa fa-arrow-left\"></i> Prev Page</button>\n        <button type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"exportToCSV(newUnitBottom.value)\"><i class=\"fa fa-download\"></i> Export CSV</button>\n        <button type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"nextPage(newUnitBottom.value)\">Next Page <i class=\"fa fa-arrow-right\"></i></button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/reports/report-cases-by-unit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCasesByUnitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_case_service__ = __webpack_require__("../../../../../src/reports/report-case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__systemunits_systemunit_service__ = __webpack_require__("../../../../../src/systemunits/systemunit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_column__ = __webpack_require__("../../../../../src/grid/column.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportCasesByUnitComponent = /** @class */ (function () {
    function ReportCasesByUnitComponent(_route, _reportCaseService, _systemunitService) {
        this._route = _route;
        this._reportCaseService = _reportCaseService;
        this._systemunitService = _systemunitService;
        this.page_size = 100;
        this._reportcases = [];
        this.cases_properties = [];
        this.notready = true;
    }
    ReportCasesByUnitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._route.queryParams
            .subscribe(function (params) {
            if (params['units']) {
                var urlSearchParams = 'report=casesbyunit&cbrs_unit=' + params['units'];
                _this.selected_unit = Number(params['units']);
                _this._getReportCases(urlSearchParams);
                _this._getSystemunits();
                _this._getColumns();
            }
            else {
                _this._getReportCases();
                _this._getSystemunits();
                _this._getColumns();
            }
        });
    };
    ReportCasesByUnitComponent.prototype.ngOnDestroy = function () {
        if (this._params) {
            this._params.unsubscribe();
        }
    };
    ReportCasesByUnitComponent.prototype.prevPage = function (unit) {
        if (this._prevPage == null) {
            __WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].showToast('This is the first page.');
        }
        else {
            this.notready = true;
            var prevPageNum = void 0;
            var ndxStart = this._prevPage.indexOf('page=');
            if (ndxStart === -1) {
                var urlSearchParams = (unit.toString() === '') ? null : 'report=casesbyunit&cbrs_unit=' + unit.toString();
                this._getReportCases(urlSearchParams);
            }
            else {
                ndxStart += 5;
                var ndxEnd = this._prevPage.indexOf('&', ndxStart);
                ndxEnd === -1 ? prevPageNum = this._prevPage.slice(ndxStart) : prevPageNum = this._prevPage.slice(ndxStart, ndxEnd);
                var urlSearchParams = (unit.toString() === '') ?
                    'page=' + prevPageNum + '&report=casesbyunit' : 'page=' + prevPageNum + '&report=casesbyunit';
                this._getReportCases(urlSearchParams);
            }
        }
    };
    ReportCasesByUnitComponent.prototype.nextPage = function (unit) {
        if (this._nextPage == null) {
            __WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].showToast('This is the last page.');
        }
        else {
            this.notready = true;
            var nextPageNum = void 0;
            var ndxStart = this._nextPage.indexOf('page=') + 5;
            var ndxEnd = this._nextPage.indexOf('&', ndxStart);
            ndxEnd === -1 ? nextPageNum = this._nextPage.slice(ndxStart) : nextPageNum = this._nextPage.slice(ndxStart, ndxEnd);
            var urlSearchParams = (unit.toString() === '') ?
                'page=' + nextPageNum + '&report=casesbyunit' :
                'page=' + nextPageNum + '&report=casesbyunit' + '&cbrs_unit=' + unit.toString();
            this._getReportCases(urlSearchParams);
        }
    };
    ReportCasesByUnitComponent.prototype.onFilter = function (unit) {
        this.notready = true;
        this.selected_unit = unit;
        var urlSearchParams = (unit.toString() === '') ? null : 'report=casesbyunit&cbrs_unit=' + unit.toString();
        this._getReportCases(urlSearchParams);
    };
    ReportCasesByUnitComponent.prototype.clearFilter = function () {
        this.notready = true;
        this.selected_unit = null;
        this._getReportCases();
    };
    ReportCasesByUnitComponent.prototype.exportToCSV = function (unit) {
        this.notready = true;
        var urlSearchParams = (unit.toString() === '') ?
            'report=casesbyunit&format=csv&page_size=' + this.page_size :
            'report=casesbyunit&format=csv&page_size=' + this.page_size + '&cbrs_unit=' + unit.toString();
        this._getReportCasesCSV(urlSearchParams);
    };
    ReportCasesByUnitComponent.prototype._getReportCasesCSV = function (urlSearchParams) {
        this._reportCaseService.getReportCasesCSV(urlSearchParams)
            .then(function (data) {
            var blob = new Blob([data[0]], { type: 'text/csv' });
            __WEBPACK_IMPORTED_MODULE_7_file_saver__["saveAs"](blob, data[1]);
        });
    };
    ReportCasesByUnitComponent.prototype._getReportCases = function (newUrlSearchParams) {
        var _this = this;
        var urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'report=casesbyunit';
        this._reportCaseService.getReportCases(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](urlSearchParams))
            .subscribe(function (reportcases) {
            if (Number(reportcases.count) > 0) {
                __WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].showToast(reportcases.count + ' cases found.');
                var max_records = Math.ceil(Number(reportcases.count) / 100) * 100;
                _this.page_size < 100 ? _this.page_size = 100 : _this.page_size = max_records;
                _this._prevPage = reportcases.previous;
                _this._nextPage = reportcases.next;
                _this._reportcases.length = 0;
                _this._reportcases = reportcases.results;
                _this.cases_properties.length = 0;
                for (var i = 0, j = _this._reportcases.length; i < j; i++) {
                    var case_property = _this._reportcases[i];
                    var address = case_property.property_string.split(',');
                    case_property.street_address = address[0];
                    delete case_property['property_string'];
                    _this.cases_properties.push(case_property);
                    // if (this._reportcases.length == this.cases_properties.length - 1) {
                    //     this._sortAndShow();
                    // }
                }
                setTimeout(function () {
                    _this._sortAndShow();
                }, 500);
            }
            else {
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    ReportCasesByUnitComponent.prototype._getSystemunits = function () {
        var _this = this;
        this._systemunitService.getSystemunits()
            .subscribe(function (systemunits) {
            _this.systemunits = systemunits.sort(__WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].dynamicSort('system_unit_number'));
        }, function (error) { return _this._errorMessage = error; });
    };
    ReportCasesByUnitComponent.prototype._getColumns = function () {
        this.columns = [
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('id', 'Case ID'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('status', 'Status'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('prohibition_date', 'Prohibition Date'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('cbrs_unit_string', 'CBRS Unit'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('request_date', 'Request Date'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('final_letter_date', 'Final Letter Date'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('determination_string', 'Determination'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('street_address', 'Street Address'),
        ];
    };
    ReportCasesByUnitComponent.prototype._sortAndShow = function () {
        this.cases_properties.sort(__WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].dynamicSort('id'));
        this.notready = false;
    };
    ReportCasesByUnitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/reports/report-cases-by-unit.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__report_case_service__["a" /* ReportCaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__report_case_service__["a" /* ReportCaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__systemunits_systemunit_service__["a" /* SystemunitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__systemunits_systemunit_service__["a" /* SystemunitService */]) === "function" && _c || Object])
    ], ReportCasesByUnitComponent);
    return ReportCasesByUnitComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=report-cases-by-unit.component.js.map

/***/ }),

/***/ "../../../../../src/reports/report-count-cases-by-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCountCasesByStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_case_count_service__ = __webpack_require__("../../../../../src/reports/report-case-count.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid_column__ = __webpack_require__("../../../../../src/grid/column.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportCountCasesByStatusComponent = /** @class */ (function () {
    function ReportCountCasesByStatusComponent(_route, _reportCaseCountService) {
        this._route = _route;
        this._reportCaseCountService = _reportCaseCountService;
        this.paginated = false;
        this.allow_filter = false;
        this.notready = true;
    }
    ReportCountCasesByStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._route.queryParams
            .subscribe(function (params) {
            _this._getCaseCounts();
            _this._getColumns();
        });
    };
    ReportCountCasesByStatusComponent.prototype.exportToCSV = function () {
        var filename = 'Report_CountCasesByStatus_' + __WEBPACK_IMPORTED_MODULE_4__app_utilities__["a" /* APP_UTILITIES */].TODAY + '.csv';
        __WEBPACK_IMPORTED_MODULE_4__app_utilities__["a" /* APP_UTILITIES */].downloadCSV({ filename: filename, data: this.reportcases, headers: this.columns });
    };
    ReportCountCasesByStatusComponent.prototype._getCaseCounts = function () {
        var _this = this;
        this._reportCaseCountService.getReportCaseCounts()
            .subscribe(function (reportcases) {
            _this.reportcases = reportcases;
            _this._show();
        }, function (error) { return _this._errorMessage = error; });
    };
    ReportCountCasesByStatusComponent.prototype._getColumns = function () {
        this.columns = [
            new __WEBPACK_IMPORTED_MODULE_3__grid_column__["a" /* Column */]('count_received', 'Count Received'),
            new __WEBPACK_IMPORTED_MODULE_3__grid_column__["a" /* Column */]('count_awaiting_level_1_qc', 'Count Awaiting Level 1 QC'),
            new __WEBPACK_IMPORTED_MODULE_3__grid_column__["a" /* Column */]('count_awaiting_level_2_qc', 'Count Awaiting Level 2 QC'),
            new __WEBPACK_IMPORTED_MODULE_3__grid_column__["a" /* Column */]('count_awaiting_final_letter', 'Count Awaiting Final Letter'),
            new __WEBPACK_IMPORTED_MODULE_3__grid_column__["a" /* Column */]('count_closed', 'Count Closed'),
            new __WEBPACK_IMPORTED_MODULE_3__grid_column__["a" /* Column */]('count_closed_no_final_letter', 'Count Closed with No Final Letter'),
        ];
    };
    ReportCountCasesByStatusComponent.prototype._show = function () {
        this.notready = false;
    };
    ReportCountCasesByStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/reports/report-detail.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__report_case_count_service__["a" /* ReportCaseCountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__report_case_count_service__["a" /* ReportCaseCountService */]) === "function" && _b || Object])
    ], ReportCountCasesByStatusComponent);
    return ReportCountCasesByStatusComponent;
    var _a, _b;
}());

//# sourceMappingURL=report-count-cases-by-status.component.js.map

/***/ }),

/***/ "../../../../../src/reports/report-days-to-each-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDaysToEachStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_case_service__ = __webpack_require__("../../../../../src/reports/report-case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_filter_component__ = __webpack_require__("../../../../../src/reports/report-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_column__ = __webpack_require__("../../../../../src/grid/column.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportDaysToEachStatusComponent = /** @class */ (function () {
    function ReportDaysToEachStatusComponent(_route, _reportCaseService) {
        this._route = _route;
        this._reportCaseService = _reportCaseService;
        this.paginated = true;
        this.allow_filter = true;
        this.page_size = 100;
        this.notready = true;
        this.hideFilter = true;
    }
    ReportDaysToEachStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._route.queryParams
            .subscribe(function (params) {
            _this._getReportCases();
            _this._getColumns();
        });
    };
    ReportDaysToEachStatusComponent.prototype.prevPage = function () {
        if (this._prevPage == null) {
            __WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].showToast('This is the first page.');
        }
        else {
            this.notready = true;
            var prevPageNum = void 0;
            var ndxStart = this._prevPage.indexOf('page=');
            if (ndxStart === -1) {
                var urlSearchParams = 'report=daystoeachstatus';
                this._getReportCases(urlSearchParams);
            }
            else {
                ndxStart += 5;
                var ndxEnd = this._prevPage.indexOf('&', ndxStart);
                ndxEnd === -1 ? prevPageNum = this._prevPage.slice(ndxStart) : prevPageNum = this._prevPage.slice(ndxStart, ndxEnd);
                var urlSearchParams = 'page=' + prevPageNum + '&report=daystoeachstatus';
                this._getReportCases(urlSearchParams);
            }
        }
    };
    ReportDaysToEachStatusComponent.prototype.nextPage = function () {
        if (this._nextPage == null) {
            __WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].showToast('This is the last page.');
        }
        else {
            this.notready = true;
            var nextPageNum = void 0;
            var ndxStart = this._nextPage.indexOf('page=') + 5;
            var ndxEnd = this._nextPage.indexOf('&', ndxStart);
            ndxEnd === -1 ? nextPageNum = this._nextPage.slice(ndxStart) : nextPageNum = this._nextPage.slice(ndxStart, ndxEnd);
            var urlSearchParams = 'page=' + nextPageNum + '&report=daystoeachstatus';
            this._getReportCases(urlSearchParams);
        }
    };
    ReportDaysToEachStatusComponent.prototype.exportToCSV = function (unit) {
        var urlSearchParams = 'report=daystoeachstatus&format=csv&page_size=' + this.page_size;
        this._getReportCasesCSV(urlSearchParams);
    };
    ReportDaysToEachStatusComponent.prototype._getReportCasesCSV = function (urlSearchParams) {
        this._reportCaseService.getReportCasesCSV(urlSearchParams)
            .then(function (data) {
            var blob = new Blob([data[0]], { type: 'text/csv' });
            __WEBPACK_IMPORTED_MODULE_7_file_saver__["saveAs"](blob, data[1]);
        });
    };
    ReportDaysToEachStatusComponent.prototype.toggleFilter = function () {
        this.hideFilter ? this.hideFilter = false : this.hideFilter = true;
    };
    ReportDaysToEachStatusComponent.prototype.onFilter = function (urlSearchParams) {
        this._getReportCases(urlSearchParams);
    };
    ReportDaysToEachStatusComponent.prototype._getReportCases = function (newUrlSearchParams) {
        var _this = this;
        var urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'report=daystoeachstatus';
        this._reportCaseService.getReportCases(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](urlSearchParams))
            .subscribe(function (reportcases) {
            if (Number(reportcases.count) > 0) {
                __WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].showToast(reportcases.count + ' cases found.');
                var max_records = Math.ceil(Number(reportcases.count) / 100) * 100;
                _this.page_size < 100 ? _this.page_size = 100 : _this.page_size = max_records;
                _this._prevPage = reportcases.previous;
                _this._nextPage = reportcases.next;
                _this.reportcases = reportcases.results;
                _this._sortAndShow();
            }
            else {
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    ReportDaysToEachStatusComponent.prototype._getColumns = function () {
        this.columns = [
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('id', 'Case ID'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('case_reference', 'Case Reference'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('request_date', 'Request Date'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('analyst_signoff_date', 'Awaiting QC'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('analyst_days', 'Days to QC'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('qc_reviewer_signoff_date', 'Awaiting Final Letter Date'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('qc_reviewer_days', 'Days to Awaiting Final Letter'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('final_letter_date', 'Final Letter Date'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('final_letter_days', 'Days to Final Letter'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('close_date', 'Close Date'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('close_days', 'Days to Close'),
        ];
    };
    ReportDaysToEachStatusComponent.prototype._sortAndShow = function () {
        this.reportcases.sort(__WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].dynamicSort('-close_days'));
        this.notready = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__report_filter_component__["a" /* ReportFilterComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__report_filter_component__["a" /* ReportFilterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__report_filter_component__["a" /* ReportFilterComponent */]) === "function" && _a || Object)
    ], ReportDaysToEachStatusComponent.prototype, "reportComponent", void 0);
    ReportDaysToEachStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/reports/report-detail.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__report_case_service__["a" /* ReportCaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__report_case_service__["a" /* ReportCaseService */]) === "function" && _c || Object])
    ], ReportDaysToEachStatusComponent);
    return ReportDaysToEachStatusComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=report-days-to-each-status.component.js.map

/***/ }),

/***/ "../../../../../src/reports/report-days-to-resolution.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDaysToResolutionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_case_service__ = __webpack_require__("../../../../../src/reports/report-case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__grid_column__ = __webpack_require__("../../../../../src/grid/column.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportDaysToResolutionComponent = /** @class */ (function () {
    function ReportDaysToResolutionComponent(_route, _reportCaseService) {
        this._route = _route;
        this._reportCaseService = _reportCaseService;
        this.paginated = true;
        this.allow_filter = false;
        this.page_size = 100;
        this.notready = true;
    }
    ReportDaysToResolutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._route.queryParams
            .subscribe(function (params) {
            _this._getReportCases();
            _this._getColumns();
        });
    };
    ReportDaysToResolutionComponent.prototype.prevPage = function () {
        if (this._prevPage == null) {
            __WEBPACK_IMPORTED_MODULE_5__app_utilities__["a" /* APP_UTILITIES */].showToast('This is the first page.');
        }
        else {
            this.notready = true;
            var prevPageNum = void 0;
            var ndxStart = this._prevPage.indexOf('page=');
            if (ndxStart === -1) {
                var urlSearchParams = 'report=daystoresolution';
                this._getReportCases(urlSearchParams);
            }
            else {
                ndxStart += 5;
                var ndxEnd = this._prevPage.indexOf('&', ndxStart);
                ndxEnd === -1 ? prevPageNum = this._prevPage.slice(ndxStart) : prevPageNum = this._prevPage.slice(ndxStart, ndxEnd);
                var urlSearchParams = 'page=' + prevPageNum + '&report=daystoresolution';
                this._getReportCases(urlSearchParams);
            }
        }
    };
    ReportDaysToResolutionComponent.prototype.nextPage = function () {
        if (this._nextPage == null) {
            __WEBPACK_IMPORTED_MODULE_5__app_utilities__["a" /* APP_UTILITIES */].showToast('This is the last page.');
        }
        else {
            this.notready = true;
            var nextPageNum = void 0;
            var ndxStart = this._nextPage.indexOf('page=') + 5;
            var ndxEnd = this._nextPage.indexOf('&', ndxStart);
            ndxEnd === -1 ? nextPageNum = this._nextPage.slice(ndxStart) : nextPageNum = this._nextPage.slice(ndxStart, ndxEnd);
            var urlSearchParams = 'page=' + nextPageNum + '&report=daystoresolution';
            this._getReportCases(urlSearchParams);
        }
    };
    ReportDaysToResolutionComponent.prototype.exportToCSV = function (unit) {
        var urlSearchParams = 'report=daystoresolution&format=csv&page_size=' + this.page_size;
        this._getReportCasesCSV(urlSearchParams);
    };
    ReportDaysToResolutionComponent.prototype._getReportCasesCSV = function (urlSearchParams) {
        this._reportCaseService.getReportCasesCSV(urlSearchParams)
            .then(function (data) {
            var blob = new Blob([data[0]], { type: 'text/csv' });
            __WEBPACK_IMPORTED_MODULE_6_file_saver__["saveAs"](blob, data[1]);
        });
    };
    ReportDaysToResolutionComponent.prototype._getReportCases = function (newUrlSearchParams) {
        var _this = this;
        var urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'report=daystoresolution';
        this._reportCaseService.getReportCases(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](urlSearchParams))
            .subscribe(function (reportcases) {
            if (Number(reportcases.count) > 0) {
                __WEBPACK_IMPORTED_MODULE_5__app_utilities__["a" /* APP_UTILITIES */].showToast(reportcases.count + ' cases found.');
                var max_records = Math.ceil(Number(reportcases.count) / 100) * 100;
                _this.page_size < 100 ? _this.page_size = 100 : _this.page_size = max_records;
                _this._prevPage = reportcases.previous;
                _this._nextPage = reportcases.next;
                _this.reportcases = reportcases.results;
                _this._sortAndShow();
            }
            else {
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    ReportDaysToResolutionComponent.prototype._getColumns = function () {
        this.columns = [
            new __WEBPACK_IMPORTED_MODULE_4__grid_column__["a" /* Column */]('id', 'Case ID'),
            new __WEBPACK_IMPORTED_MODULE_4__grid_column__["a" /* Column */]('case_reference', 'Case Reference'),
            new __WEBPACK_IMPORTED_MODULE_4__grid_column__["a" /* Column */]('request_date', 'Request Date'),
            new __WEBPACK_IMPORTED_MODULE_4__grid_column__["a" /* Column */]('close_date', 'Close Date'),
            new __WEBPACK_IMPORTED_MODULE_4__grid_column__["a" /* Column */]('close_days', 'Days to Close'),
        ];
    };
    ReportDaysToResolutionComponent.prototype._sortAndShow = function () {
        this.reportcases.sort(__WEBPACK_IMPORTED_MODULE_5__app_utilities__["a" /* APP_UTILITIES */].dynamicSort('-close_days'));
        this.notready = false;
    };
    ReportDaysToResolutionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/reports/report-detail.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__report_case_service__["a" /* ReportCaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__report_case_service__["a" /* ReportCaseService */]) === "function" && _b || Object])
    ], ReportDaysToResolutionComponent);
    return ReportDaysToResolutionComponent;
    var _a, _b;
}());

//# sourceMappingURL=report-days-to-resolution.component.js.map

/***/ }),

/***/ "../../../../../src/reports/report-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!notready\" align=\"center\" id=\"loading-spinner\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i></div>\n<div [hidden]=\"notready\">\n    <button *ngIf=\"allow_filter\" class=\"filter-cases-btn\" (click)=\"toggleFilter()\"><i class=\"fa fa-filter\"></i> Filter Cases</button>\n    <report-filter *ngIf=\"allow_filter\" [hidden]=\"hideFilter\" (onFilter)=\"onFilter($event)\"></report-filter>\n    <div align=\"center\">\n        <button *ngIf=\"paginated\" type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"prevPage()\"><i class=\"fa fa-arrow-left\"></i> Prev Page</button>\n        <button type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"exportToCSV()\"><i class=\"fa fa-download\"></i> Export CSV</button>\n        <button *ngIf=\"paginated\" type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"nextPage()\">Next Page <i class=\"fa fa-arrow-right\"></i></button>\n    </div>\n    <report-grid [rows]=\"reportcases\" [columns]=\"columns\"></report-grid>\n    <div align=\"center\">\n        <button *ngIf=\"paginated\" type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"prevPage()\"><i class=\"fa fa-arrow-left\"></i> Prev Page</button>\n        <button type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"exportToCSV()\"><i class=\"fa fa-download\"></i> Export CSV</button>\n        <button *ngIf=\"paginated\" type=\"button\" class=\"btn btn-default reports-export-btn\" style=\"display:inline;\" (click)=\"nextPage()\">Next Page <i class=\"fa fa-arrow-right\"></i></button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/reports/report-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container cbrs-form\">\n\n    <div *ngIf=\"filternotready\" align=\"center\" id=\"loading-spinner\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i><img src=\"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif\"></div>\n    <div *ngIf=\"!filternotready\">\n\n        <form [formGroup]=\"form\" *ngIf=\"active\" (ngSubmit)=\"onSubmit(form)\">\n\n            <div class=\"dms-group noheader\">\n\n                <div class=\"row\">\n\n                    <div class=\"col-md-3\"></div>\n\n                    <div class=\"col-md-2 dms-form-group bb br\">\n                        <label for=\"date_field\">Date Field</label>\n                        <select id=\"date_field\" formControlName=\"date_field\">\n                            <option value=\"\"></option>\n                            <option *ngFor=\"let dateField of myDateFields\" [value]=\"dateField.name\">{{dateField.label}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"col-md-2 dms-form-group bb br\">\n                        <label for=\"from_date\">From Date</label>\n                        <my-date-picker id=\"from_date\" [options]=\"myDatePickerOptions\" formControlName=\"from_date\"></my-date-picker>\n                    </div>\n\n                    <div class=\"col-md-2 dms-form-group bb br\">\n                        <label for=\"to_date\">To Date</label>\n                        <my-date-picker id=\"to_date\" [options]=\"myDatePickerOptions\" formControlName=\"to_date\"></my-date-picker>\n                    </div>\n\n                    <button type=\"submit\" class=\"btn btn-default btn-save-all-inline col-md-1\" [disabled]=\"!form.valid\">Search</button>\n\n                    <div class=\"col-md-3\"></div>\n\n                </div> <!-- /row -->\n\n            </div> <!-- /dms-group noheaders -->\n\n        </form>\n\n    </div> <!-- /filternotready -->\n\n</div> <!-- /container cbrs-form -->\n"

/***/ }),

/***/ "../../../../../src/reports/report-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportFilterComponent = /** @class */ (function () {
    function ReportFilterComponent(fb) {
        this.onFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.myDateFields = [
            { name: 'request_date', label: 'Request Date' },
            { name: 'fws_fo_received_date', label: 'Field Office Received Date' },
            { name: 'fws_hq_received_date', label: 'Headquarters Received Date' },
            { name: 'analyst_signoff_date', label: 'Analyst Signoff Date' },
            { name: 'qc_reviewer_signoff_date', label: 'QC Reviewer Signoff Date' },
            { name: 'final_letter_date', label: 'Final Letter Date' },
            { name: 'close_date', label: 'Close Date' }
        ];
        this.active = true;
        this.filternotready = true;
        this.myDatePickerOptions = {
            dateFormat: 'mm/dd/yyyy',
        };
        this.form = fb.group({
            date_field: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            from_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            to_date: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.filternotready = false;
    }
    ReportFilterComponent.prototype.onSubmit = function (form) {
        // check each FormControl for changes
        if (form.dirty) {
            this.filternotready = true;
            var urlSearchParams = 'report=daystoeachstatus';
            var date_field_val = form.controls['date_field'].value;
            var from_date_val = form.controls['from_date'].value;
            console.log(from_date_val);
            var to_date_val = form.controls['to_date'].value;
            console.log(to_date_val);
            if (date_field_val) {
                urlSearchParams += '&date_field=' + date_field_val;
            }
            if (from_date_val) {
                urlSearchParams += '&from_date=' + __WEBPACK_IMPORTED_MODULE_2__app_utilities__["a" /* APP_UTILITIES */].convertDateToISOString(from_date_val);
            }
            if (to_date_val) {
                urlSearchParams += '&to_date=' + __WEBPACK_IMPORTED_MODULE_2__app_utilities__["a" /* APP_UTILITIES */].convertDateToISOString(to_date_val);
            }
            if (!date_field_val) {
                __WEBPACK_IMPORTED_MODULE_2__app_utilities__["a" /* APP_UTILITIES */].showToast('You cannot filter without a date field selected.');
                this.filternotready = false;
            }
            else if (!from_date_val && !to_date_val) {
                __WEBPACK_IMPORTED_MODULE_2__app_utilities__["a" /* APP_UTILITIES */].showToast('You cannot filter without at least one date value (from or to) selected.');
                this.filternotready = false;
            }
            else {
                this.filternotready = false;
                this.onFilter.emit(urlSearchParams);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], ReportFilterComponent.prototype, "onFilter", void 0);
    ReportFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'report-filter',
            template: __webpack_require__("../../../../../src/reports/report-filter.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object])
    ], ReportFilterComponent);
    return ReportFilterComponent;
    var _a;
}());

//# sourceMappingURL=report-filter.component.js.map

/***/ }),

/***/ "../../../../../src/reports/report-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <table class=\"dms-table table table-bordered\">\r\n        <thead>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\"><a (click)=\"sort(col.name)\" class=\"gridHeader\">{{col.descr}} <i class=\"fa fa-sort\"></i></a></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let row of rows\" (click)=\"onClick(row)\">\r\n                <td *ngFor=\"let col of columns\">{{row[col.name]}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/reports/report-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid__ = __webpack_require__("../../../../../src/grid/grid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportGridComponent = /** @class */ (function (_super) {
    __extends(ReportGridComponent, _super);
    function ReportGridComponent(_router) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        return _this;
    }
    ReportGridComponent.prototype.onClick = function (row) {
        this._router.navigate(['/workbench', row.id]);
    };
    ReportGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'report-grid',
            inputs: ['rows: rows', 'columns: columns'],
            template: __webpack_require__("../../../../../src/reports/report-grid.component.html"),
            styles: ['.gridHeader {cursor:pointer;}']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], ReportGridComponent);
    return ReportGridComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__grid_grid__["a" /* Grid */]));

//# sourceMappingURL=report-grid.component.js.map

/***/ }),

/***/ "../../../../../src/reports/report-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3 class=\"subheader\"><b>Reports</b></h3>\r\n    <div [hidden]=\"!notready\" align=\"center\" id=\"loading-spinner\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i></div>\r\n    <div [hidden]=\"notready\">\r\n        <ul class=\"reports-ul\">\r\n            <li>\r\n                <a [routerLink]=\"['/reports/casesbyunit']\">Cases by Unit</a>\r\n                <label for=\"cbrs_unit\">CBRS Unit</label>\r\n                <select id=\"cbrs_unit\" (change)=\"goToCasesByUnit(newUnit.value)\" #newUnit>\r\n                    <option value=\"\"></option>\r\n                    <option *ngFor=\"let unit of systemunits\" [value]=\"unit.id\">{{unit.system_unit_number}}</option>\r\n                </select>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/reports/daystoresolution']\">Days to Resolution</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/reports/daystoeachstatus']\">Days to Each Status Complete</a>\r\n            </li>\r\n            <li>\r\n                <a [routerLink]=\"['/reports/countcasesbystatus']\">Count of Cases by Status</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/reports/report-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__systemunits_systemunit_service__ = __webpack_require__("../../../../../src/systemunits/systemunit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportListComponent = /** @class */ (function () {
    function ReportListComponent(_router, _systemunitService) {
        this._router = _router;
        this._systemunitService = _systemunitService;
        this.notready = true;
        this._getSystemunits();
    }
    ReportListComponent.prototype._getSystemunits = function () {
        var _this = this;
        this._systemunitService.getSystemunits()
            .subscribe(function (systemunits) {
            _this.systemunits = systemunits.sort(__WEBPACK_IMPORTED_MODULE_3__app_utilities__["a" /* APP_UTILITIES */].dynamicSort('system_unit_number'));
            _this.notready = false;
        }, function (error) { return _this._errorMessage = error; });
    };
    ReportListComponent.prototype.goToCasesByUnit = function (unit) {
        this._router.navigate(['/reports/casesbyunit'], { queryParams: { 'units': unit } });
    };
    ReportListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/reports/report-list.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__systemunits_systemunit_service__["a" /* SystemunitService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__systemunits_systemunit_service__["a" /* SystemunitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__systemunits_systemunit_service__["a" /* SystemunitService */]) === "function" && _b || Object])
    ], ReportListComponent);
    return ReportListComponent;
    var _a, _b;
}());

//# sourceMappingURL=report-list.component.js.map

/***/ }),

/***/ "../../../../../src/reports/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "<navbar></navbar><router-outlet></router-outlet>"
        })
    ], ReportComponent);
    return ReportComponent;
}());

//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ "../../../../../src/reports/report.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__ = __webpack_require__("../../../../../src/authentication/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_component__ = __webpack_require__("../../../../../src/reports/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_list_component__ = __webpack_require__("../../../../../src/reports/report-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_cases_by_unit_component__ = __webpack_require__("../../../../../src/reports/report-cases-by-unit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_days_to_resolution_component__ = __webpack_require__("../../../../../src/reports/report-days-to-resolution.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_days_to_each_status_component__ = __webpack_require__("../../../../../src/reports/report-days-to-each-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_count_cases_by_status_component__ = __webpack_require__("../../../../../src/reports/report-count-cases-by-status.component.ts");







var ReportRoutes = [
    {
        path: '',
        redirectTo: 'reports',
        pathMatch: 'full'
    },
    {
        path: 'reports',
        component: __WEBPACK_IMPORTED_MODULE_1__report_component__["a" /* ReportComponent */],
        children: [
            {
                path: 'casesbyunit',
                component: __WEBPACK_IMPORTED_MODULE_3__report_cases_by_unit_component__["a" /* ReportCasesByUnitComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
            },
            {
                path: 'daystoresolution',
                component: __WEBPACK_IMPORTED_MODULE_4__report_days_to_resolution_component__["a" /* ReportDaysToResolutionComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
            },
            {
                path: 'daystoeachstatus',
                component: __WEBPACK_IMPORTED_MODULE_5__report_days_to_each_status_component__["a" /* ReportDaysToEachStatusComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
            },
            {
                path: 'countcasesbystatus',
                component: __WEBPACK_IMPORTED_MODULE_6__report_count_cases_by_status_component__["a" /* ReportCountCasesByStatusComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__report_list_component__["a" /* ReportListComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
            }
        ]
    }
];
//# sourceMappingURL=report.routes.js.map

/***/ }),

/***/ "../../../../../src/requesters/requester.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequesterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequesterService = /** @class */ (function () {
    function RequesterService(http) {
        this.http = http;
    }
    RequesterService.prototype.getRequester = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].REQUESTERS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RequesterService.prototype.getRequesters = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].REQUESTERS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RequesterService.prototype.createRequester = function (requester) {
        var body = JSON.stringify(requester);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].REQUESTERS_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RequesterService.prototype.updateRequester = function (requester) {
        // pull out the ID
        var id = requester.id;
        delete requester['id'];
        var body = JSON.stringify(requester);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].REQUESTERS_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    RequesterService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    RequesterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], RequesterService);
    return RequesterService;
    var _a;
}());

//# sourceMappingURL=requester.service.js.map

/***/ }),

/***/ "../../../../../src/requesters/requester.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Requester; });
var Requester = /** @class */ (function () {
    function Requester(first_name, last_name, salutation, organization, email, street, unit, city, state, zipcode, id) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.salutation = salutation;
        this.organization = organization;
        this.email = email;
        this.street = street;
        this.unit = unit;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.id = id;
    }
    return Requester;
}());

//# sourceMappingURL=requester.js.map

/***/ }),

/***/ "../../../../../src/systemmaps/systemmap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemmapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SystemmapService = /** @class */ (function () {
    function SystemmapService(http) {
        this.http = http;
    }
    SystemmapService.prototype.getSystemmap = function (id) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMMAPS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    SystemmapService.prototype.getSystemmaps = function (searchArgs) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMMAPS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    SystemmapService.prototype.createSystemmap = function (systemmap) {
        var _this = this;
        var body = JSON.stringify(systemmap);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMMAPS_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    SystemmapService.prototype.updateSystemmap = function (systemmap) {
        var _this = this;
        // pull out the ID
        var id = systemmap.id;
        delete systemmap['id'];
        var body = JSON.stringify(systemmap);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMMAPS_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    SystemmapService.prototype.deleteSystemmap = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMMAPS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemmapService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json() || 'Server error');
    };
    SystemmapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], SystemmapService);
    return SystemmapService;
    var _a;
}());

//# sourceMappingURL=systemmap.service.js.map

/***/ }),

/***/ "../../../../../src/systemmaps/systemmap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Systemmap; });
var Systemmap = /** @class */ (function () {
    function Systemmap(map_number, map_title, map_date, system_units, effective, id) {
        this.map_number = map_number;
        this.map_title = map_title;
        this.map_date = map_date;
        this.system_units = system_units;
        this.effective = effective;
        this.id = id;
    }
    return Systemmap;
}());

//# sourceMappingURL=systemmap.js.map

/***/ }),

/***/ "../../../../../src/systemunitmaps/systemunitmap.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemunitmapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SystemunitmapService = /** @class */ (function () {
    function SystemunitmapService(http) {
        this.http = http;
    }
    SystemunitmapService.prototype.getSystemunitmap = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITMAPS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitmapService.prototype.getSystemunitmaps = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITMAPS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitmapService.prototype.createSystemunitmap = function (systemunitmap) {
        var body = JSON.stringify(systemunitmap);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITMAPS_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitmapService.prototype.updateSystemunitmap = function (systemunitmap) {
        // pull out the ID
        var id = systemunitmap.id;
        delete systemunitmap['id'];
        var body = JSON.stringify(systemunitmap);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITMAPS_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitmapService.prototype.deleteSystemunitmap = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITMAPS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitmapService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    SystemunitmapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], SystemunitmapService);
    return SystemunitmapService;
    var _a;
}());

//# sourceMappingURL=systemunitmap.service.js.map

/***/ }),

/***/ "../../../../../src/systemunitmaps/systemunitmap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Systemunitmap; });
var Systemunitmap = /** @class */ (function () {
    function Systemunitmap(system_unit, system_map, id) {
        this.system_unit = system_unit;
        this.system_map = system_map;
        this.id = id;
    }
    return Systemunitmap;
}());

//# sourceMappingURL=systemunitmap.js.map

/***/ }),

/***/ "../../../../../src/systemunits/systemunit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemunitService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SystemunitService = /** @class */ (function () {
    function SystemunitService(http) {
        this.http = http;
    }
    SystemunitService.prototype.getSystemunit = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitService.prototype.getSystemunits = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitService.prototype.createSystemunit = function (systemunit) {
        var body = JSON.stringify(systemunit);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITS_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitService.prototype.updateSystemunit = function (systemunit) {
        // pull out the ID
        var id = systemunit.id;
        delete systemunit['id'];
        var body = JSON.stringify(systemunit);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITS_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitService.prototype.deleteSystemunit = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].SYSTEMUNITS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SystemunitService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    SystemunitService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], SystemunitService);
    return SystemunitService;
    var _a;
}());

//# sourceMappingURL=systemunit.service.js.map

/***/ }),

/***/ "../../../../../src/systemunits/systemunit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Systemunit; });
var Systemunit = /** @class */ (function () {
    function Systemunit(system_unit_number, system_unit_name, field_office, id) {
        this.system_unit_number = system_unit_number;
        this.system_unit_name = system_unit_name;
        this.field_office = field_office;
        this.id = id;
    }
    return Systemunit;
}());

//# sourceMappingURL=systemunit.js.map

/***/ }),

/***/ "../../../../../src/tags/tag-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<div class=\"container\">\r\n    <h3>Tag #{{tag_ID}}</h3>\r\n    <div [hidden]=\"!notready\" align=\"center\" id=\"loading-spinner\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i></div>\r\n    <div [hidden]=\"notready\">\r\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n            <div *ngIf=\"error\" class=\"alert alert-danger\">That tag name already exists</div>\r\n            <table>\r\n                <tr>\r\n                    <td><label for=\"name\">Name</label></td>\r\n                    <td><label for=\"description\">Description</label></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><input type=\"text\" id=\"name\" formControlName=\"name\"></td>\r\n                    <td><input type=\"text\" id=\"description\" formControlName=\"description\"></td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" [disabled]=\"!form.valid\">Save</button>\r\n                <button (click)=\"cancel()\">Cancel</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/tags/tag-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cases_case_service__ = __webpack_require__("../../../../../src/cases/case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_service__ = __webpack_require__("../../../../../src/tags/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tag__ = __webpack_require__("../../../../../src/tags/tag.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TagDetailComponent = /** @class */ (function () {
    function TagDetailComponent(fb, _route, _router, _caseService, _tagService) {
        this._route = _route;
        this._router = _router;
        this._caseService = _caseService;
        this._tagService = _tagService;
        this.error = false;
        this.cases_properties = [];
        this.notready = true;
        this.editName = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required);
        this.editDescription = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]('');
        this.form = fb.group({
            'name': this.editName,
            'description': this.editDescription
        });
    }
    TagDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._route.params
            .subscribe(function (params) {
            _this.tag_ID = +params['id'];
            _this._getTag(_this.tag_ID);
        });
    };
    TagDetailComponent.prototype.ngOnDestroy = function () {
        if (this._params) {
            this._params.unsubscribe();
        }
    };
    TagDetailComponent.prototype.cancel = function () {
        this.goToTags();
    };
    TagDetailComponent.prototype.onSubmit = function (value) {
        this.notready = true;
        var newtag = new __WEBPACK_IMPORTED_MODULE_6__tag__["a" /* Tag */](value.name, value.description);
        this._validateTag(newtag);
    };
    TagDetailComponent.prototype.goToTags = function () {
        this._router.navigate(['/tags']);
    };
    TagDetailComponent.prototype._getTag = function (tagID) {
        var _this = this;
        this._tagService.getTag(tagID)
            .subscribe(function (tag) {
            _this.myTag = tag;
            _this.editName.setValue(_this.myTag.name);
            _this.editDescription.setValue(_this.myTag.description);
            _this.notready = false;
        }, function (error) { return _this._errorMessage = error; });
    };
    TagDetailComponent.prototype._validateTag = function (tag) {
        var _this = this;
        this._tagService.getTags(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('name=' + tag.name))
            .subscribe(function (tags) {
            if (tag.name !== _this.myTag.name && tags.length !== 0) {
                _this.error = true;
                _this.notready = false;
            }
            else {
                _this.myTag.name = tag.name;
                _this.myTag.description = tag.description;
                _this._updateTag(_this.myTag);
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    TagDetailComponent.prototype._updateTag = function (tag) {
        var _this = this;
        this._tagService.updateTag(tag)
            .subscribe(function (res) {
            _this.goToTags();
        }, function (error) { return _this._errorMessage = error; });
    };
    TagDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */]],
            template: __webpack_require__("../../../../../src/tags/tag-detail.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__cases_case_service__["a" /* CaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cases_case_service__["a" /* CaseService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */]) === "function" && _e || Object])
    ], TagDetailComponent);
    return TagDetailComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=tag-detail.component.js.map

/***/ }),

/***/ "../../../../../src/tags/tag-list.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n        <div [hidden]=\"!notready\" align=\"center\" id=\"loading-spinner\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i></div>\n        <div [hidden]=\"notready\">\n            <div class=\"container\">\n                <h3 class=\"subheader\"><b>Tags</b></h3>\n                <div align=\"center\">\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"toggleCreateTagForm()\">Create a Tag</button><br /><br />\n                    <div [hidden]=\"nottoggled\">\n                        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"add-tag-form\">\n                            <div *ngIf=\"error\" class=\"alert alert-danger\">That tag name already exists</div>\n                            <div class=\"form-group\">\n                                <label for=\"name\">Name</label>\n                                <input type=\"text\" id=\"name\" formControlName=\"name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"description\">Description</label>\n                                <input type=\"text\" id=\"description\" formControlName=\"description\">\n                            </div>\n                            <div class=\"form-group\">\n                                <button type=\"submit\" [disabled]=\"!form.valid\">Submit</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                <table class=\"table table-striped table-bordered table-hover table-condensed tags-table\">\n                    <tbody>\n                        <tr class=\"head\">\n                            <td>Tag</td>\n                            <td>Description</td>\n                            <td>Delete</td>\n                            <td>Cases</td>\n                        </tr>\n                        <tr *ngFor=\"let tag of tags\">\n                            <td (click)=\"goToTag(tag.id)\">{{tag.name}}</td>\n                            <td>{{tag.description}}</td>\n                            <td><button class=\"btn-tags delete\" type=\"button\" (click)=\"deleteTag(tag.id)\">Delete <i class=\"fa fa-remove\"></i></button></td>\n                            <td><button class=\"btn-tags\" type=\"button\" (click)=\"goToCases(tag.id)\">Open <i class=\"fa fa-arrow-right\"></i></button></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n"

/***/ }),

/***/ "../../../../../src/tags/tag-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tag_service__ = __webpack_require__("../../../../../src/tags/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag__ = __webpack_require__("../../../../../src/tags/tag.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cases_case_service__ = __webpack_require__("../../../../../src/cases/case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TagListComponent = /** @class */ (function () {
    function TagListComponent(fb, _tagService, _caseService, _router) {
        this._tagService = _tagService;
        this._caseService = _caseService;
        this._router = _router;
        this.error = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required);
        this.description = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('');
        this.notready = true;
        this.nottoggled = true;
        this.form = fb.group({
            'name': this.name,
            'description': this.description
        });
        this._getTags();
    }
    TagListComponent.prototype._getTags = function () {
        var _this = this;
        this.error = false;
        this._tagService.getTags()
            .subscribe(function (tags) {
            _this.tags = tags;
            _this.notready = false;
        }, function (error) { return _this._errorMessage = error; });
    };
    TagListComponent.prototype.deleteTag = function (tag) {
        var _this = this;
        this.error = false;
        if (window.confirm('Are you sure you want to delete this tag?')) {
            this._caseService.getCases(new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* URLSearchParams */]('tags=' + tag))
                .subscribe(function (cases) {
                if (cases.length > 0) {
                    __WEBPACK_IMPORTED_MODULE_7__app_utilities__["a" /* APP_UTILITIES */].showToast('This tag cannot be removed because it is assigned to one or more determination cases.');
                }
                else {
                    _this._tagService.deleteTag(tag)
                        .subscribe(function (res) { return _this._getTags(); }, function (error) { return _this._errorMessage = error; });
                }
            }, function (error) { return _this._errorMessage = error; });
        }
    };
    TagListComponent.prototype.goToTag = function (tag) {
        this._router.navigate(['/tag', tag]);
    };
    TagListComponent.prototype.goToCases = function (tag) {
        this._router.navigate(['/workbench'], { queryParams: { 'tags': tag } });
    };
    TagListComponent.prototype.toggleCreateTagForm = function () {
        this.nottoggled = !this.nottoggled;
    };
    TagListComponent.prototype.onSubmit = function (value) {
        this.error = false;
        var newtag = new __WEBPACK_IMPORTED_MODULE_5__tag__["a" /* Tag */](value.name, value.description);
        this._validateTag(newtag);
    };
    TagListComponent.prototype._validateTag = function (tag) {
        var _this = this;
        this._tagService.getTags(new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* URLSearchParams */]('name=' + tag.name))
            .subscribe(function (tags) {
            if (tags.length !== 0) {
                _this.error = true;
                _this.notready = false;
            }
            else {
                _this._createTag(tag);
                _this.toggleCreateTagForm();
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    TagListComponent.prototype._createTag = function (tag) {
        var _this = this;
        this._tagService.createTag(tag)
            .subscribe(function (res) {
            _this._getTags();
            // reset the form
            _this.name.setValue(null);
            _this.description.setValue(null);
        }, function (error) { return _this._errorMessage = error; });
    };
    TagListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_4__tag_service__["a" /* TagService */], __WEBPACK_IMPORTED_MODULE_6__cases_case_service__["a" /* CaseService */]],
            template: __webpack_require__("../../../../../src/tags/tag-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tag_service__["a" /* TagService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__cases_case_service__["a" /* CaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__cases_case_service__["a" /* CaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], TagListComponent);
    return TagListComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=tag-list.component.js.map

/***/ }),

/***/ "../../../../../src/tags/tag.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__ = __webpack_require__("../../../../../src/authentication/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_detail_component__ = __webpack_require__("../../../../../src/tags/tag-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_list_component__ = __webpack_require__("../../../../../src/tags/tag-list.component.ts");



var TagRoutes = [
    {
        path: 'tag/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__tag_detail_component__["a" /* TagDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: 'tags',
        component: __WEBPACK_IMPORTED_MODULE_2__tag_list_component__["a" /* TagListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
    }
];
//# sourceMappingURL=tag.routes.js.map

/***/ }),

/***/ "../../../../../src/tags/tag.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TagService = /** @class */ (function () {
    function TagService(http) {
        this.http = http;
    }
    TagService.prototype.getTag = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].TAGS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getTags = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].TAGS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.createTag = function (tag) {
        var body = JSON.stringify(tag);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].TAGS_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.updateTag = function (tag) {
        // pull out the ID
        var id = tag.id;
        delete tag['id'];
        var body = JSON.stringify(tag);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].AUTH_JSON_HEADERS });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].TAGS_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.deleteTag = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].TAGS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    TagService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], TagService);
    return TagService;
    var _a;
}());

//# sourceMappingURL=tag.service.js.map

/***/ }),

/***/ "../../../../../src/tags/tag.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tag; });
var Tag = /** @class */ (function () {
    function Tag(name, description, id) {
        this.name = name;
        this.description = description;
        this.id = id;
    }
    return Tag;
}());

//# sourceMappingURL=tag.js.map

/***/ }),

/***/ "../../../../../src/users/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (id) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].USERS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUsers = function (searchArgs) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: __WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].MIN_AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_settings__["a" /* APP_SETTINGS */].USERS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/workbench/workbench-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container cbrs-form\">\n\n    <div [hidden]=\"!notready\" align=\"center\" id=\"loading-spinner\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i></div>\n    <div [hidden]=\"notready\">\n\n        <div id=\"main-header\" align=\"center\" *ngIf=\"myCase.case_number || case_ID\">\n            <div class=\"row\">\n                <div class=\"form-main-header\" style=\"font-size:20px;\">\n                    <div class=\"col-md-3\"></div><div class=\"col-md-2\">Case ID</div><div class=\"col-md-2\">Case Reference</div><div class=\"col-md-2\">Current Status</div><div class=\"col-md-3\"></div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"form-main-header\" style=\"font-size:24px; font-weight: bold;\">\n                    <div class=\"col-md-3\"></div><div class=\"col-md-2\">{{ myCase.case_number || case_ID }}</div><div class=\"col-md-2\">{{ myCase.case_reference || \"None\" }}</div><div class=\"col-md-2\">{{ myCase.status }}</div><div class=\"col-md-3\"></div>\n                </div>\n            </div>\n        </div><br /><br />\n\n        <form [formGroup]=\"form\" *ngIf=\"active\" (ngSubmit)=\"onSubmit(form)\">\n\n            <button type=\"submit\" class=\"btn btn-default btn-save-all\" [disabled]=\"!form.valid\">Save</button><br /><br />\n\n            <div formGroupName=\"casegroup\">\n\n                <div class=\"dms-group noheader\" *ngIf=\"!case_ID\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"file-group\">\n                                <label class=\"half-label fifty\" for=\"casefiles\">Case Files</label><!--\n                                --><label class=\"bb\" style=\"width:25%\"></label><!--\n                                --><label class=\"file-upload-label\" for=\"casefileSelect\">Upload Files</label>\n                                <div class=\"col-md-12\" *ngIf=\"!noxhr\">\n                                    <div id=\"casefiledrag\" class=\"filedropzone\" (dragover)=\"fileDragHover($event)\" (dragleave)=\"fileDragHover($event)\" (drop)=\"casefileSelectHandler($event)\">or drop files here <br/><br/></div>\n                                </div>\n\n                                <div class=\"col-md-12\">\n                                    <div id=\"casefilesToUpload\">\n                                        <p *ngFor=\"let fileDetails of filesToUploadDetails; let i=index\">\n                                            <span>{{ fileDetails.name }}: </span><span>{{ fileDetails.size }} MBs</span>\n                                            <button type=\"button\" (click)=\"removeCasefile(i)\" class=\"removeCaseFileButton\">-</button>\n                                        </p>\n                                    </div>\n                                </div>\n                                <input class=\"custom-file-input\" id=\"casefileSelect\" type=\"file\" multiple (change)=\"casefileSelectHandler($event)\" formControlName=\"casefiles\" />\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"dms-group noheader\" *ngIf=\"case_ID\">\n\n                    <div class=\"row\">\n\n                        <div class=\"col-xs-12 nopadd\">\n                            <div class=\"row nopadd\">\n                                <div class=\"col-md-3 chx-group\">\n                                    <label for=\"priority\">Priority</label><!--\n                                    --><div class=\"chx\">\n                                        <input id=\"priority\" type=\"checkbox\" formControlName=\"priority\">\n                                    </div>\n                                </div><!--\n                                    --><div class=\"col-md-3 chx-group\">\n                                    <label for=\"on_hold\">On Hold</label><!--\n                                    --><div class=\"chx\">\n                                        <input id=\"on_hold\" type=\"checkbox\" (change)=\"toggleOnHold();\" formControlName=\"on_hold\">\n                                    </div>\n                                </div><!--\n                                    --><div class=\"col-md-3 chx-group\">\n                                    <label for=\"invalid\">Invalid</label><!--\n                                    --><div class=\"chx\">\n                                        <input id=\"invalid\" type=\"checkbox\" formControlName=\"invalid\">\n                                    </div>\n                                </div><!--\n                                    --><div class=\"col-md-3 chx-group\">\n                                    <label for=\"duplicate\">Duplicate of</label><!--\n                                    --><div class=\"slct\">\n                                        <select id=\"duplicate\" formControlName=\"duplicate\" style=\"width:120px\">\n                                            <option value=\"\"></option>\n                                            <option *ngFor=\"let caseID of myCaseIDs\" [value]=\"caseID.id\" [selected]=\"caseID.id == myCase.duplicate\">{{caseID.id}}</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-12\">\n                            <div class=\"col-md-2 dms-form-group bb br\">\n                                <label for=\"cbrs_unit\">CBRS Unit</label>\n                                <select id=\"cbrs_unit\" formControlName=\"cbrs_unit\" (change)=\"getSystemmaps(newUnit.value); getProhibitiondates(newUnit.value); updateCaseControlValue(newUnit.id, newUnit.value)\" #newUnit>\n                                    <option value=\"\"></option>\n                                    <option *ngFor=\"let unit of mySystemunits\" [value]=\"unit.id\" [selected]=\"unit.id == myCase.cbrs_unit\">{{unit.system_unit_number}}</option>\n                                </select>\n                            </div>\n                            <div class=\"col-md-2 dms-form-group bb br\">\n                                <label for=\"map_number\">Map Number</label>\n                                <select id=\"map_number\" formControlName=\"map_number\" (change)=\"getSystemmapdate(newMap.value); updateCaseControlValue(newMap.id, newMap.value)\" #newMap>\n                                    <option value=\"\"></option>\n                                    <option *ngFor=\"let map of mySystemmaps\" [style.background-color]=\"map.effective ? '' : 'gray'\" [value]=\"map.id\" [selected]=\"map.id == selectedMap\">{{map.effective? map.map_number : map.map_number + \" (superseded)\"}}</option>\n                                </select>\n                            </div>\n                            <div class=\"col-md-2 dms-form-group bb br\">\n                                <label for=\"cbrs_map_date\">Map Date</label>\n                                <input id=\"cbrs_map_date\" formControlName=\"cbrs_map_date\" readonly>\n                            </div>\n                            <div class=\"col-md-2 dms-form-group bb br\">\n                                <label for=\"determination\">Determination</label>\n                                <select id=\"determination\" formControlName=\"determination\" (change)=\"toggleReadOnlyProhibitionDate(newDetermination.value); updateCaseControlValue(newDetermination.id, newDetermination.value)\" #newDetermination>\n                                    <option value=\"\"></option>\n                                    <option *ngFor=\"let determination of myDeterminations\" [value]=\"determination.id\" [selected]=\"determination.id == myCase.determination\">{{determination.determination}}</option>\n                                </select>\n                            </div>\n                            <div class=\"col-md-2 dms-form-group bb br\" [style.background-color]=\"isreadonly_prohibitiondate ? 'lightgray' : ''\">\n                                <label for=\"prohibition_date\">Prohibition Date</label>\n                                <select *ngIf=\"!isreadonly_prohibitiondate\" id=\"prohibition_date\" formControlName=\"prohibition_date\" (change)=\"updateCaseControlValue(newProhibitionDate.id, newProhibitionDate.value)\" #newProhibitionDate>\n                                    <option value=\"\"></option>\n                                    <option *ngFor=\"let prohibitiondate of myProhibitiondates\" [value]=\"prohibitiondate.prohibition_date\" [selected]=\"prohibitiondate.prohibition_date == myCase.prohibition_date\">{{prohibitiondate.prohibition_date_mdy}}</option>\n                                </select>\n                                <!-- <select *ngIf=\"isreadonly_prohibitiondate\" [style.background-color]=\"isreadonly_prohibitiondate ? 'black' : 'gray'\"></select> -->\n                            </div>\n                            <div class=\"col-md-2 dms-form-group bb\">\n                                <label for=\"distance\">Distance</label>\n                                <input id=\"distance\" type=\"number\" formControlName=\"distance\">\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"col-md-12 nopadd\">\n\n                            <div *ngIf=\"!noxhr\" style=\"background-color: white\" id=\"casefiledrag\" (dragover)=\"fileDragHover($event)\" (dragleave)=\"fileDragHover($event)\" (drop)=\"casefileSelectHandler($event)\">\n                                <div class=\"file-group\">\n                                    <label class=\"half-label fifty\" for=\"casefiles\">Case Files</label><!--\n                                    --><label class=\"bb\" style=\"width:25%\"></label><!--\n                                    --><label class=\"file-upload-label\" for=\"casefileSelect\">Upload</label>\n\n                                    <div class=\"filedropzone\" (dragover)=\"fileDragHover($event)\" (dragleave)=\"fileDragHover($event)\">or drop files here <br/><br/></div>\n\n                                    <div class=\"col-xs-12 col-md-6 filepad\">\n                                        <ul id=\"casefiles\" *ngIf=\"myCasefiles.length > 0\">\n                                            <div *ngFor=\"let casefile of myCasefiles\">\n                                                <li *ngIf=\"!casefile.final_letter\">\n                                                    <a target=\"_blank\" [href]=\"casefile.file\" >{{ casefile.name }}</a>&nbsp;&nbsp;\n                                                    <button type=\"button\" (click)=\"deleteCasefile(casefile.id)\" class=\"removeCaseFileButton\">x</button>\n                                                </li>\n                                            </div>\n                                        </ul>\n                                    </div>\n\n                                    <div class=\"col-xs-12 col-md-6 filepad\">\n                                        <div id=\"casefilesToUpload\">\n                                            <p *ngFor=\"let fileDetails of filesToUploadDetails; let i=index\">\n                                                <span>{{ fileDetails.name }}: </span><span>{{ fileDetails.size }}</span>\n                                                <button type=\"button\" (click)=\"removeCasefile(i)\" class=\"removeCaseFileButton\">-</button>\n                                            </p>\n                                        </div>\n                                    </div>\n\n                                    <input class=\"custom-file-input\" id=\"casefileSelect\" type=\"file\" multiple (change)=\"casefileSelectHandler($event)\" formControlName=\"casefiles\" />\n                                </div>\n                            </div>\n\n                            <div *ngIf=\"noxhr\" style=\"background-color: white\">\n                                <div class=\"file-group\">\n                                    <label class=\"half-label fifty\" for=\"casefiles\">Case Files</label><!--\n                                    --><label class=\"bb\" style=\"width:25%\"></label><!--\n                                    --><label class=\"file-upload-label\" for=\"casefileSelect\">Upload</label>\n\n                                    <div class=\"filedropzone\" (dragover)=\"fileDragHover($event)\" (dragleave)=\"fileDragHover($event)\">or drop files here <br/><br/></div>\n\n                                    <div class=\"col-xs-12 col-md-6 filepad\">\n                                        <ul id=\"casefiles\" *ngIf=\"myCasefiles.length > 0\">\n                                            <div *ngFor=\"let casefile of myCasefiles\">\n                                                <li *ngIf=\"!casefile.final_letter\">\n                                                    <a target=\"_blank\" [href]=\"casefile.file\">{{ casefile.name }}</a>&nbsp;&nbsp;\n                                                    <button type=\"button\" *ngIf=\"!casefile.final_letter\" (click)=\"deleteCasefile(casefile.id)\" class=\"removeCaseFileButton\">x</button>\n                                                </li>\n                                            </div>\n                                        </ul>\n                                    </div>\n\n                                    <div class=\"col-xs-12 col-md-6 filepad\">\n                                        <div id=\"casefilesToUpload\">\n                                            <p *ngFor=\"let fileDetails of filesToUploadDetails; let i=index\">\n                                                <span>{{ fileDetails.name }}: </span><span>{{ fileDetails.size }}</span>\n                                                <button type=\"button\" (click)=\"removeCasefile(i)\" class=\"removeCaseFileButton\">-</button>\n                                            </p>\n                                        </div>\n                                    </div>\n\n                                    <input class=\"custom-file-input\" id=\"casefileSelect\" type=\"file\" multiple (change)=\"casefileSelectHandler($event)\" formControlName=\"casefiles\" />\n                                </div>\n                            </div>\n\n                        </div>\n\n\n\n                        <div *ngIf=\"!noxhr\" class=\"col-xs-12 nopadd\" style=\"background-color: white\" id=\"finalletterfiledrag\" (dragover)=\"fileDragHover($event)\" (dragleave)=\"fileDragHover($event)\" (drop)=\"finalletterSelectHandler($event)\">\n                            <div class=\"file-group\">\n                                <label class=\"label fifty\" style=\"border-top: 1px solid #E8E8E8;\" for=\"finalletter\">Final Letter</label><!--\n                                --><label class=\"file-upload-label\" style=\"width:25%; border-top: 1px solid #E8E8E8;\" for=\"finalLetterSelect\">Upload</label><!--\n                                --><label class=\"file-upload-label\" style=\"width:25%; border-top: 1px solid #E8E8E8;\" for=\"draftletter\">Draft</label>\n\n                                    <div class=\"filedropzone\" (dragover)=\"fileDragHover($event)\" (dragleave)=\"fileDragHover($event)\">or drop files here <br/><br/></div>\n\n                                <div class=\"col-xs-12 col-md-6 filepad\">\n                                    <ul id=\"finalletter\" *ngIf=\"myCasefiles.length > 0\">\n                                        <div *ngFor=\"let casefile of myCasefiles\">\n                                            <li *ngIf=\"casefile.final_letter\">\n                                                <a target=\"_blank\" [href]=\"casefile.file\" *ngIf=\"casefile.final_letter\">{{ casefile.name }}</a>&nbsp;&nbsp;\n                                                <button type=\"button\" *ngIf=\"casefile.final_letter\" (click)=\"deleteCasefile(casefile.id)\" class=\"removeCaseFileButton\">x</button>\n                                            </li>\n                                        </div>\n                                    </ul>\n                                </div>\n\n                                <div class=\"col-xs-12 col-md-6 filepad\">\n                                    <div id=\"finalletterToUpload\" *ngIf=\"finalletterToUploadDetails\">\n                                        <span>{{ finalletterToUploadDetails.name }}: </span><span>{{ finalletterToUploadDetails.size }}</span>\n                                        <button type=\"button\" (click)=\"removeFinalLetter()\" class=\"removeCaseFileButton\">-</button>\n                                    </div>\n\n                                    <input class=\"custom-file-input\" id=\"finalLetterSelect\" type=\"file\" (change)=\"finalletterSelectHandler($event)\" formControlName=\"final_letter\" />\n                                    <input class=\"custom-file-input\" id=\"draftletter\" type=\"button\" (click)=\"generateLetter()\" />\n                                </div>\n\n                            </div>\n                        </div>\n\n\n\n                        <div *ngIf=\"noxhr\" class=\"col-xs-12\" style=\"background-color: white\">\n                            <div class=\"file-group\">\n                                <label class=\"label fifty\" style=\"border-top: 1px solid #E8E8E8;\" for=\"finalletter\">Final Letter</label><!--\n                                --><label class=\"file-upload-label\" style=\"width:25%; border-top: 1px solid #E8E8E8;\" for=\"finalLetterSelect\">Upload Letter</label><!--\n                                --><label class=\"file-upload-label\" style=\"width:25%; border-top: 1px solid #E8E8E8;\" for=\"draftletter\">Draft Letter</label>\n\n                                    <div class=\"filedropzone\" (dragover)=\"fileDragHover($event)\" (dragleave)=\"fileDragHover($event)\">or drop files here <br/><br/></div>\n\n                                <div class=\"col-md-6 col-xs-12 filepad\">\n                                    <ul id=\"finalletter\" *ngIf=\"myCasefiles.length > 0\">\n                                        <div *ngFor=\"let casefile of myCasefiles\">\n                                            <li *ngIf=\"casefile.final_letter\">\n                                                <a target=\"_blank\" [href]=\"casefile.file\" *ngIf=\"casefile.final_letter\">{{ casefile.name }}</a>&nbsp;&nbsp;\n                                                <button type=\"button\" *ngIf=\"casefile.final_letter\" (click)=\"deleteCasefile(casefile.id)\" class=\"removeCaseFileButton\">x</button>\n                                            </li>\n                                        </div>\n                                    </ul>\n                                </div>\n\n                                <div class=\"col-md-6 col-xs-12 filepad\">\n                                    <div id=\"finalletterToUpload\" *ngIf=\"finalletterToUploadDetails\">\n                                        <span>{{ finalletterToUploadDetails.name }}: </span><span>{{ finalletterToUploadDetails.size }}</span>\n                                        <button type=\"button\" (click)=\"removeFinalLetter()\" class=\"removeCaseFileButton\">-</button>\n                                    </div>\n\n                                    <input class=\"custom-file-input\" id=\"finalLetterSelect\" type=\"file\" (change)=\"finalletterSelectHandler($event)\" formControlName=\"final_letter\" />\n                                    <input class=\"custom-file-input\" id=\"draftletter\" type=\"button\" (click)=\"generateLetter()\" />\n                                </div>\n\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\" id=\"case_messages\" *ngIf=\"!mapsfound\"><pre>No maps found for this unit.</pre></div>\n                </div>\n\n                <div class=\"dms-group\" *ngIf=\"case_ID\">\n                    <h2 class=\"dms-group-header\">Important Dates</h2>\n\n                    <div class=\"row\" id=\"dates\">\n                        <div class=\"col-md-2\">\n                            <div class=\"dms-form-group br\">\n                                <label for=\"request_date\">Request Date</label>\n                                <my-date-picker id=\"request_date\" formControlName=\"request_date\" [options]=\"myDatePickerOptions\" (inputFieldChanged)=\"validateDate(newRequestDate.elem.nativeElement.id, newRequestDate.selectedDate)\" #newRequestDate></my-date-picker>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <div class=\"dms-form-group br\">\n                                <label for=\"fws_fo_received_date\">Field Office Received Date</label>\n                                <my-date-picker id=\"fws_fo_received_date\" formControlName=\"fws_fo_received_date\" [options]=\"myDatePickerOptions\" (inputFieldChanged)=\"validateDate(newFODate.elem.nativeElement.id, newFODate.selectedDate)\" #newFODate></my-date-picker>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <div class=\"dms-form-group br\">\n                                <label for=\"fws_hq_received_date\">Headquarters Received Date</label>\n                                <my-date-picker id=\"fws_hq_received_date\" formControlName=\"fws_hq_received_date\" [options]=\"myDatePickerOptions\" (inputFieldChanged)=\"validateDate(newHQDate.elem.nativeElement.id, newHQDate.selectedDate)\" #newHQDate></my-date-picker>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                            <div class=\"dms-form-group br\" [style.background-color]=\"isOnHold ? 'lightgray' : ''\">\n                                <label for=\"final_letter_date\">Final Letter Date</label>\n                                <my-date-picker *ngIf=\"!isOnHold\" id=\"final_letter_date\" formControlName=\"final_letter_date\" [options]=\"myDatePickerOptions\" (inputFieldChanged)=\"validateDate(newFinalLetterDate.elem.nativeElement.id, newFinalLetterDate.selectedDate)\" #newFinalLetterDate></my-date-picker>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                            <div class=\"dms-form-group br\" [style.background-color]=\"isOnHold ? 'lightgray' : ''\">\n                                <label for=\"close_date\">Close Date</label>\n                                <my-date-picker *ngIf=\"!isOnHold\" id=\"close_date\" formControlName=\"close_date\" [options]=\"myDatePickerOptions\" (inputFieldChanged)=\"validateDate(newCloseDate.elem.nativeElement.id, newCloseDate.selectedDate)\" #newCloseDate></my-date-picker>\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n\n                <div class=\"dms-group\" *ngIf=\"case_ID\">\n                    <h2 class=\"dms-group-header\">CASE ASSIGNMENT & SIGNOFF</h2>\n\n                    <div class=\"row\" id=\"signoff\">\n                        <div class=\"col-md-3\">\n                            <div class=\"dms-form-group br\">\n                                <label for=\"analyst\">Analyst</label>\n                                <select id=\"analyst\" formControlName=\"analyst\" (change)=\"updateCaseControlValue(newAnalyst.id, newAnalyst.value)\" #newAnalyst>\n                                    <option value=\"\"></option>\n                                    <option *ngFor=\"let analyst of availableAnalysts\" [value]=\"analyst.id\" [selected]=\"analyst.id == selectedAnalyst\">{{analyst.username}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"dms-form-group br\" [style.background-color]=\"isOnHold ? 'lightgray' : ''\">\n                                <label for=\"analyst_signoff_date\">Analyst Signoff Date</label>\n                                <my-date-picker *ngIf=\"!isOnHold\" id=\"analyst_signoff_date\" formControlName=\"analyst_signoff_date\" [options]=\"myDatePickerOptions\" (inputFieldChanged)=\"validateDate(newAnalystDate.elem.nativeElement.id, newAnalystDate.selectedDate)\" #newAnalystDate></my-date-picker>\n                            </div>\n                        </div>\n\n                        <div class=\"col-md-3\">\n                            <div class=\"dms-form-group br\">\n                                <label for=\"qc_reviewer\">QC Reviewer</label>\n                                <select id=\"qc_reviewer\" formControlName=\"qc_reviewer\" (change)=\"updateCaseControlValue(newQCReviewer.id, newQCReviewer.value)\" #newQCReviewer>\n                                    <option value=\"\"></option>\n                                    <option *ngFor=\"let qc_reviewer of availableQCReviewers\" [value]=\"qc_reviewer.id\" [selected]=\"qc_reviewer.id == selectedQCReviewer\">{{qc_reviewer.username}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"dms-form-group br\" [style.background-color]=\"isOnHold ? 'lightgray' : ''\">\n                                <label for=\"qc_reviewer_signoff_date\">QC Reviewer Signoff Date</label>\n                                <my-date-picker *ngIf=\"!isOnHold\" id=\"qc_reviewer_signoff_date\" formControlName=\"qc_reviewer_signoff_date\" [options]=\"myDatePickerOptions\" (inputFieldChanged)=\"validateDate(newQC1Date.elem.nativeElement.id, newQC1Date.selectedDate)\" #newQC1Date></my-date-picker>\n                            </div>\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class=\"dms-group\">\n                <h2 class=\"dms-group-header\">Property Information</h2>\n                <div class=\"row\" formGroupName=\"propertygroup\">\n\n                    <div class=\"col-md-3\">\n                        <div class=\"dms-form-group br bb\">\n                            <label for=\"street\">Street</label>\n                            <input id=\"street\" type=\"text\" formControlName=\"street\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"dms-form-group br bb\">\n                            <label for=\"unit\">Suite/Apt #</label>\n                            <input id=\"unit\" type=\"text\" formControlName=\"unit\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"dms-form-group br bb\">\n                            <label for=\"city\">City</label>\n                            <input id=\"city\" type=\"text\" formControlName=\"city\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"dms-form-group br bb\">\n                            <label for=\"state\">State</label>\n                            <select id=\"state\" formControlName=\"state\" (change)=\"updatePropertyControlValue(newPState.id, newPState.value)\" #newPState>\n                                <option value=\"\"></option>\n                                <option *ngFor=\"let state of states\" [value]=\"state\" [selected]=\"state == myProperty.state\">{{state}}</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-2\">\n                        <div class=\"dms-form-group bb\">\n                            <label for=\"zipcode\">Zipcode</label>\n                            <input id=\"zipcode\" type=\"text\" formControlName=\"zipcode\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"dms-form-group br\">\n                            <label for=\"legal_description\">Legal Description</label>\n                            <input id=\"legal_description\" type=\"text\" formControlName=\"legal_description\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"dms-form-group br\">\n                            <label for=\"subdivision\">Subdivision</label>\n                            <input id=\"subdivision\" type=\"text\" formControlName=\"subdivision\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"policy_number\">Policy Number</label>\n                            <input id=\"policy_number\" type=\"text\" formControlName=\"policy_number\">\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n\n\n            <div class=\"dms-group\">\n                <h2 class=\"dms-group-header\">Requester Information</h2>\n                <div class=\"row\" formGroupName=\"requestergroup\">\n\n                    <div class=\"col-md-2\">\n                        <div class=\"dms-form-group br bb\">\n                            <label for=\"salutation\">Salutation</label>\n                            <select id=\"salutation\" formControlName=\"salutation\" (change)=\"updateRequesterControlValue(newSalutation.id, newSalutation.value)\" #newSalutation>\n                                <option value=\"\"></option>\n                                <option *ngFor=\"let salutation of salutations\" [value]=\"salutation\" [selected]=\"salutation == myRequester.salutation\">{{salutation}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"dms-form-group br bb\">\n                            <label for=\"first_name\">First Name</label>\n                            <input id=\"first_name\" type=\"text\" formControlName=\"first_name\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"dms-form-group br bb\">\n                            <label for=\"last_name\">Last Name</label>\n                            <input id=\"last_name\" type=\"text\" formControlName=\"last_name\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"dms-form-group br bb\">\n                            <label for=\"organization\">Organization</label>\n                            <input id=\"organization\" type=\"text\" formControlName=\"organization\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"dms-form-group bb\">\n                            <label for=\"email\">Email</label>\n                            <input id=\"email\" type=\"email\" formControlName=\"email\">\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                        <div class=\"dms-form-group br\">\n                            <label for=\"street\">Street</label>\n                            <input id=\"street\" type=\"text\" formControlName=\"street\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"dms-form-group br\">\n                            <label for=\"unit\">Suite/Apt #</label>\n                            <input id=\"unit\" type=\"text\" formControlName=\"unit\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"dms-form-group br\">\n                            <label for=\"city\">City</label>\n                            <input id=\"city\" type=\"text\" formControlName=\"city\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\">\n                        <div class=\"dms-form-group br\">\n                            <label for=\"state\">State</label>\n                            <select id=\"state\" formControlName=\"state\" (change)=\"updateRequesterControlValue(newRState.id, newRState.value)\" #newRState>\n                                <option value=\"\"></option>\n                                <option *ngFor=\"let state of states\" [value]=\"state\" [selected]=\"state == myRequester.state\">{{state}}</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-2\">\n                        <div class=\"dms-form-group\">\n                            <label for=\"zipcode\">Zipcode</label>\n                            <input id=\"zipcode\" type=\"text\" formControlName=\"zipcode\">\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class=\"dms-group noheader\" *ngIf=\"case_ID\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\" style=\"border-right: 1px solid #E8E8E8\">\n                        <h2 class=\"dms-group-header\">Comments</h2>\n\n                        <div class=\"add-comment-wrap\">\n                            <input type=\"text\" placeholder=\"Add New Comment\" class=\"new-comment-input\" #newComment><!--\n                            --><button class=\"btn-add-comment\" type=\"button\" (click)=\"addComment(newComment.value); newComment.value='';\">Add a comment</button>\n                            <span *ngIf=\"!commentUnique\" style=\"position:relative;top:20px;\" class=\"alert alert-danger\">That comment already exists for this case.</span>\n                        </div>\n\n                        <span *ngIf=\"!commentOwner\" class=\"alert alert-danger\">You do not have permission edit this comment since you did not create it.</span>\n\n                        <ul class=\"comment-ul\">\n                            <div *ngFor=\"let comment of myComments\">\n                                <div *ngIf=\"!editingComment || editCommentID != comment.id\" (click)=\"editComment(comment.id)\">{{ comment.comment }} ({{ comment.created_by_string}} at {{ comment.created_date }})</div>\n                                <br /><br />\n                                <div *ngIf=\"editingComment && editCommentID == comment.id\">\n                                    <div class=\"add-comment-wrap\">\n                                        <input type=\"text\" class=\"new-comment-input\" style=\"width:50%\" value={{comment.comment}} #editedComment><!--\n                                        --><button class=\"btn-add-comment\" style=\"width:20%\" type=\"button\" (click)=\"updateComment(editedComment.value);\">Update comment</button>\n                                        <button class=\"btn-add-comment\" style=\"width:10%; background-color: burlywood\" type=\"button\" (click)=\"cancelEditComment();\">Cancel</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </ul>\n\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h2 class=\"dms-group-header\">Tags</h2>\n\n                        <div class=\"add-comment-wrap\">\n                            <select class=\"new-comment-input new-comment-select\" #newTag>\n                                <option value=\"\"></option>\n                                <option *ngFor=\"let tag of availableTags\" [value]=\"tag.id\">{{tag.name}}</option>\n                            </select><!--\n                            --><button class=\"btn-add-comment\" type=\"button\" (click)=\"addCasetag(newTag.value)\">Add a tag</button>\n                        </div>\n\n                        <ul class=\"tag-ul\">\n                            <li *ngFor=\"let casetag of myCasetags\">{{ casetag.tagname }} <button class=\"btn-remove\" type=\"button\" (click)=\"removeCasetag(casetag.id)\"><i class=\"fa fa-remove\"></i></button></li>\n                        </ul>\n                    </div>\n                </div>\n\n            </div>\n\n            <br/>\n\n            <button type=\"submit\" class=\"btn btn-default btn-save-all\" [disabled]=\"!form.valid\">Save</button>\n\n        </form>\n\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/workbench/workbench-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cases_case__ = __webpack_require__("../../../../../src/cases/case.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__properties_property__ = __webpack_require__("../../../../../src/properties/property.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__requesters_requester__ = __webpack_require__("../../../../../src/requesters/requester.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments_comment__ = __webpack_require__("../../../../../src/comments/comment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tags_tag__ = __webpack_require__("../../../../../src/tags/tag.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__casetags_casetag__ = __webpack_require__("../../../../../src/casetags/casetag.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cases_case_service__ = __webpack_require__("../../../../../src/cases/case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__casefiles_casefile_service__ = __webpack_require__("../../../../../src/casefiles/casefile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__properties_property_service__ = __webpack_require__("../../../../../src/properties/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__requesters_requester_service__ = __webpack_require__("../../../../../src/requesters/requester.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__comments_comment_service__ = __webpack_require__("../../../../../src/comments/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tags_tag_service__ = __webpack_require__("../../../../../src/tags/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__casetags_casetag_service__ = __webpack_require__("../../../../../src/casetags/casetag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__systemunits_systemunit_service__ = __webpack_require__("../../../../../src/systemunits/systemunit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__systemmaps_systemmap_service__ = __webpack_require__("../../../../../src/systemmaps/systemmap.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__fieldoffices_fieldoffice_service__ = __webpack_require__("../../../../../src/fieldoffices/fieldoffice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_user_service__ = __webpack_require__("../../../../../src/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__determinations_determination_service__ = __webpack_require__("../../../../../src/determinations/determination.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__prohibitiondates_prohibitiondate_service__ = __webpack_require__("../../../../../src/prohibitiondates/prohibitiondate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__authentication_authentication_service__ = __webpack_require__("../../../../../src/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























var WorkbenchDetailComponent = /** @class */ (function () {
    function WorkbenchDetailComponent(fb, _route, _router, _caseService, _casefileService, _propertyService, _requesterService, _commentService, _tagService, _casetagService, _systemunitService, _systemmapService, _fieldofficeService, _userService, _determinationService, _prohibitiondateService, _authenticationService) {
        var _this = this;
        this._route = _route;
        this._router = _router;
        this._caseService = _caseService;
        this._casefileService = _casefileService;
        this._propertyService = _propertyService;
        this._requesterService = _requesterService;
        this._commentService = _commentService;
        this._tagService = _tagService;
        this._casetagService = _casetagService;
        this._systemunitService = _systemunitService;
        this._systemmapService = _systemmapService;
        this._fieldofficeService = _fieldofficeService;
        this._userService = _userService;
        this._determinationService = _determinationService;
        this._prohibitiondateService = _prohibitiondateService;
        this._authenticationService = _authenticationService;
        this._filesToUpload = [];
        this.filesToUploadDetails = [];
        this.caseFileClass = 'col-md-4';
        this.inInit = true;
        this.mapsfound = true;
        this.active = true;
        this.notready = true;
        this.noxhr = true;
        this.isOnHold = false;
        this.isreadonly_prohibitiondate = false;
        this.commentUnique = true;
        this.commentOwner = true;
        this.editingComment = false;
        this._isNewCase = false;
        this._today = new Date();
        this._userFields = ['analyst', 'qc_reviewer'];
        this._debug = false;
        this.myCase = new __WEBPACK_IMPORTED_MODULE_3__cases_case__["a" /* Case */]();
        this.myProperty = new __WEBPACK_IMPORTED_MODULE_4__properties_property__["a" /* Property */]();
        this.myRequester = new __WEBPACK_IMPORTED_MODULE_5__requesters_requester__["a" /* Requester */]();
        this.myComment = new __WEBPACK_IMPORTED_MODULE_6__comments_comment__["a" /* Comment */]();
        this.myCasetag = new __WEBPACK_IMPORTED_MODULE_8__casetags_casetag__["a" /* Casetag */]();
        this.myTag = new __WEBPACK_IMPORTED_MODULE_7__tags_tag__["a" /* Tag */]();
        this.myCaseIDs = [];
        this.availableTags = [];
        this.availableSystemmapdates = [];
        this.availableAnalysts = [];
        this.availableQCReviewers = [];
        this.salutations = __WEBPACK_IMPORTED_MODULE_24__app_settings__["a" /* APP_SETTINGS */].SALUTATIONS;
        this.states = __WEBPACK_IMPORTED_MODULE_24__app_settings__["a" /* APP_SETTINGS */].US_STATES;
        this.myCasefiles = [];
        this._commentsControls = [];
        this._casetagsControls = [];
        this.myDatePickerOptions = {
            dateFormat: 'mm/dd/yyyy',
            disableSince: { year: this._today.getFullYear(), month: this._today.getMonth() + 1, day: this._today.getDate() + 1 }
        };
        if (this._debug) {
            console.log('0: ' + __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].TIME + ': ' + this.myCase.map_number + ' : ' + this.selectedMap);
        }
        // append a temporary 'final_letter' field to a case object so that it can be a control in the form
        var case_with_final_letter = this.myCase;
        case_with_final_letter.final_letter = null;
        // get the fields for each object type
        this._myCase_fields = Object.keys(case_with_final_letter);
        this._myProperty_fields = Object.keys(this.myProperty);
        this._myRequester_fields = Object.keys(this.myRequester);
        // make the controls for each control group
        this._caseControls = this._makeControls(this._myCase_fields);
        this._propertyControls = this._makeControls(this._myProperty_fields);
        this._requesterControls = this._makeControls(this._myRequester_fields);
        // populate the control groups with the controls
        this.casegroup = new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["d" /* FormGroup */](this._caseControls);
        this.propertygroup = new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["d" /* FormGroup */](this._propertyControls);
        this.requestergroup = new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["d" /* FormGroup */](this._requesterControls);
        this.commentgroup = new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["a" /* FormArray */](this._commentsControls);
        this.taggroup = new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["a" /* FormArray */](this._casetagsControls);
        // build the form
        this.form = fb.group({
            casegroup: this.casegroup,
            propertygroup: this.propertygroup,
            requestergroup: this.requestergroup,
            commentgroup: this.commentgroup,
            taggroup: this.taggroup
        });
        // get the Case ID from the route
        this._route.params.subscribe(function (params) { return _this.case_ID = +params['id']; });
        if (this.case_ID) {
            // if the Case ID exists, get the case details
            this._isNewCase = false;
            this._getCase(this.case_ID);
            this._getCasefiles(this.case_ID);
            this._getProperties(this.case_ID);
            this._getRequesters(this.case_ID);
            this._getComments(this.case_ID);
            this._getCasetags(this.case_ID);
        }
        else {
            // otherwise this is a new case, so get user values for the select inputs
            this._isNewCase = true;
            this._getUsers();
            this._getSystemunits();
        }
        // get values for the select inputs
        this._getCaseIDs();
        this._getFieldoffices();
        this._getDeterminations();
        // check if the browser supports XHR2, which allows file drag and drop
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
            this.noxhr = false;
        }
    }
    WorkbenchDetailComponent.prototype._makeControls = function (fields) {
        var controls = {};
        for (var i = 0, j = fields.length; i < j; i++) {
            // add a validator for zipcode fields
            if (fields[i] === 'zipcode') {
                controls[fields[i]] = new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["c" /* FormControl */]({ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_23__angular_forms__["h" /* Validators */].maxLength(5));
            }
            if (['legal_description'].indexOf(fields) > -1) {
                // add validator for property control required fields: street, city, state)
                // although we don't know the source of the submitted fields,
                // we can determine if they are from a property object by testing if a uniquely property field is present
                if (['street', 'city', 'state'].indexOf(fields[i]) > -1) {
                    controls[fields[i]] = new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["c" /* FormControl */]({ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_23__angular_forms__["h" /* Validators */].required);
                }
            }
            else if (['email'].indexOf(fields) > -1) {
                // add validator for requester control required fields: first_name, last_name, email
                // although we don't know the source of the submitted fields,
                // we can determine if they are from a requester object by testing if a uniquely requester field is present
                if (['first_name', 'last_name', 'email'].indexOf(fields[i]) > -1) {
                    controls[fields[i]] = new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["c" /* FormControl */]({ value: '', disabled: false }, __WEBPACK_IMPORTED_MODULE_23__angular_forms__["h" /* Validators */].required);
                }
            }
            else {
                // otherwise don't impose any validators
                controls[fields[i]] = new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["c" /* FormControl */]({ value: '', disabled: false });
            }
        }
        return controls;
    };
    WorkbenchDetailComponent.prototype._updateControls = function (fields, controls, values) {
        for (var i = 0, j = fields.length; i < j; i++) {
            var field = fields[i];
            if (field.slice(-4) === 'date' && values[field] !== null && field !== 'cbrs_map_date' && field !== 'prohibition_date') {
                var thisDate = new Date(values[field]);
                thisDate = new Date(thisDate.getTime() + Math.abs(thisDate.getTimezoneOffset() * 60000));
                controls[field].setValue({ date: { year: thisDate.getFullYear(), month: thisDate.getMonth() + 1, day: thisDate.getDate() } });
            }
            else if (field === 'casefiles') {
                // do nothing with casefiles, these will be loaded separately
                break;
            }
            else {
                controls[field].setValue(values[field]);
            }
        }
    };
    WorkbenchDetailComponent.prototype._updateControl = function (field, fields, controls, values) {
        var i = fields.indexOf(field);
        controls[fields[i]].setValue(values[fields[i]]);
    };
    // private _updateValues(fields, controls, values): void {
    //     for (let i = 0, j = fields.length; i < j; i++) {
    //         // console.log(fields[i] + ' : ' + values[fields[i]] + ' : ' + controls[fields[i]].value);
    //         // values[fields[i]] = controls[fields[i]].value;
    //     }
    // }
    WorkbenchDetailComponent.prototype.updateCaseControlValue = function (formControl, value) {
        this._caseControls[formControl].setValue(value);
        if (this._userFields.indexOf(formControl) > -1) {
            this._buildUserOptions(formControl, value);
        }
    };
    WorkbenchDetailComponent.prototype.updatePropertyControlValue = function (formControl, value) {
        this._propertyControls[formControl].setValue(value);
    };
    WorkbenchDetailComponent.prototype.updateRequesterControlValue = function (formControl, value) {
        this._requesterControls[formControl].setValue(value);
    };
    WorkbenchDetailComponent.prototype._addCommentControl = function (value) {
        this._commentsControls.push(new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["c" /* FormControl */](value));
    };
    WorkbenchDetailComponent.prototype._addCasetagControl = function (value) {
        this._casetagsControls.push(new __WEBPACK_IMPORTED_MODULE_23__angular_forms__["c" /* FormControl */](value));
    };
    WorkbenchDetailComponent.prototype.ngOnInit = function () {
        this.inInit = true;
    };
    WorkbenchDetailComponent.prototype.ngAfterViewInit = function () {
        this.inInit = false;
    };
    WorkbenchDetailComponent.prototype._getCase = function (caseID) {
        var _this = this;
        this._caseService.getCase(caseID)
            .subscribe(function (acase) {
            _this.myCase = acase;
            if (_this._debug) {
                console.log('1: ' + __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].TIME + ': ' + _this.myCase.map_number + ' : ' + _this.selectedMap);
            }
            _this.selectedAnalyst = acase.analyst;
            _this.selectedQCReviewer = acase.qc_reviewer;
            _this.selectedMap = _this.myCase.map_number;
            _this._updateControls(_this._myCase_fields, _this._caseControls, _this.myCase);
            _this._getSystemunits();
            _this._getUsers();
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._getCasefiles = function (caseID) {
        var _this = this;
        this._casefileService.getCasefiles(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('case=' + caseID))
            .then(function (casefiles) {
            _this.myCasefiles = casefiles;
            // this.updateControls(this.myCase_fields, this.caseControls, this.myCase);
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._getCaseIDs = function () {
        var _this = this;
        this._caseService.getCases(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('view=caseid'))
            .subscribe(function (cases) {
            _this.myCaseIDs.length = 0;
            for (var i = 0, j = cases.length; i < j; i++) {
                _this.myCaseIDs.push(cases[i]);
            }
            _this.myCaseIDs.sort(__WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].dynamicSort('id'));
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._getProperties = function (caseID) {
        var _this = this;
        this._propertyService.getProperties(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('case=' + caseID))
            .subscribe(function (properties) {
            _this.myProperty = properties[0];
            _this._updateControls(_this._myProperty_fields, _this._propertyControls, _this.myProperty);
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._getRequesters = function (caseID) {
        var _this = this;
        this._requesterService.getRequesters(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('case=' + caseID))
            .subscribe(function (requesters) {
            _this.myRequester = requesters[0];
            _this._updateControls(_this._myRequester_fields, _this._requesterControls, _this.myRequester);
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._getComments = function (caseID) {
        var _this = this;
        this._commentService.getComments(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('case=' + caseID))
            .subscribe(function (comments) {
            _this.myComments = comments;
            for (var i = 0, j = comments.length; i < j; i++) {
                _this._addCommentControl(comments[i].comment);
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._getCasetags = function (caseID) {
        var _this = this;
        this._casetagService.getCasetags(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('case=' + caseID))
            .subscribe(function (casetags) {
            _this.myCasetags = casetags;
            for (var i = 0, j = casetags.length; i < j; i++) {
                _this._addCasetagControl(casetags[i].tagname);
            }
            _this._getTags();
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._getTags = function () {
        var _this = this;
        this._tagService.getTags()
            .subscribe(function (tags) {
            _this.myTags = tags;
            _this._buildTagOptions();
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._buildTagOptions = function () {
        this.availableTags.length = 0;
        var usedTagIDs = [];
        for (var i = 0, j = this.myCasetags.length; i < j; i++) {
            usedTagIDs.push(this.myCasetags[i].tag);
        }
        for (var i = 0, j = this.myTags.length; i < j; i++) {
            if (usedTagIDs.indexOf(this.myTags[i].id) < 0) {
                this.availableTags.push(this.myTags[i]);
            }
        }
    };
    WorkbenchDetailComponent.prototype._getSystemunits = function () {
        var _this = this;
        this._systemunitService.getSystemunits()
            .subscribe(function (systemunits) {
            _this.mySystemunits = systemunits.sort(__WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].dynamicSort('system_unit_number'));
            if (_this._debug) {
                console.log('2: ' + __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].TIME + ': ' + _this.myCase.map_number + ' : ' + _this.selectedMap);
            }
            if (_this.myCase.cbrs_unit) {
                _this.getSystemmaps(_this.myCase.cbrs_unit);
                _this.getProhibitiondates(_this.myCase.cbrs_unit);
            }
            else {
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype.getSystemmaps = function (unitID) {
        var _this = this;
        this._systemmapService.getSystemmaps(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('unit=' + unitID))
            .subscribe(function (systemmaps) {
            _this.mySystemmaps = systemmaps.sort(__WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].dynamicSortMultiple(['-effective', 'map_number']));
            if (_this.mySystemmaps.length === 0) {
                _this.mapsfound = false;
                _this.notready = false;
            }
            else {
                _this.mapsfound = true;
                if (_this._debug) {
                    console.log('3: ' + __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].TIME + ': ' + _this.myCase.map_number + ' : ' + _this.selectedMap);
                }
                _this._updateControl('map_number', _this._myCase_fields, _this._caseControls, _this.mySystemmaps);
                if (_this._debug) {
                    console.log('4: ' + __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].TIME + ': ' + _this.myCase.map_number + ' : ' + _this.selectedMap);
                }
                if (_this.myCase.map_number) {
                    _this.selectedMap = _this.myCase.map_number;
                    _this.updateCaseControlValue('map_number', _this.myCase.map_number);
                    _this.getSystemmapdate(_this.myCase.map_number);
                }
                else {
                    _this.notready = false;
                }
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype.getSystemmapdate = function (mapID) {
        if (!mapID) {
            this._caseControls['cbrs_map_date'].setValue('');
            this.notready = false;
        }
        else {
            var maps = this.mySystemmaps.filter(function (map) { return map.id == mapID; });
            // map_date comes in yyyy-mm-dd format
            var date_parts = maps[0].map_date.split('-');
            var mdy = date_parts[1] + '/' + date_parts[2] + '/' + date_parts[0];
            this._caseControls['cbrs_map_date'].setValue(mdy);
            if (this._debug) {
                console.log('5: ' + __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].TIME + ': ' + this.myCase.map_number + ' : ' + this.selectedMap);
            }
            this.notready = false;
        }
    };
    WorkbenchDetailComponent.prototype.toggleReadOnlyProhibitionDate = function (determination) {
        (determination === 2 || determination === 4) ?
            this.isreadonly_prohibitiondate = true : this.isreadonly_prohibitiondate = false;
    };
    WorkbenchDetailComponent.prototype.toggleOnHold = function () {
        this.isOnHold = !this.isOnHold;
    };
    WorkbenchDetailComponent.prototype.validateDate = function (thisDateControl, thisDate) {
        var thisDateMDY = ('00' + thisDate.month).slice(-2)
            + '/' + ('00' + thisDate.day).slice(-2)
            + '/' + ('0000' + thisDate.year).slice(-4);
        if (this.inInit) {
            return false;
        }
        if (this.notready) {
            return false;
        }
        if (typeof thisDate === 'undefined' || thisDate === null || thisDate === '') {
            return false;
        }
        if (typeof thisDate === 'object' && thisDate.year === 0) {
            return false;
        }
        else {
            thisDate = ('0000' + thisDate.year).slice(-4)
                + '-' + ('00' + thisDate.month).slice(-2)
                + '-' + ('00' + thisDate.day).slice(-2);
        }
        // ensure the date value is a valid date by converting it to a date object and testing the constituent date values
        var thisDateAsDate = new Date(thisDate);
        thisDateAsDate = new Date(thisDateAsDate.getTime() + Math.abs(thisDateAsDate.getTimezoneOffset() * 60000));
        if (thisDateAsDate.getFullYear() < 1000 || thisDateAsDate.getFullYear() > 9999 || thisDateAsDate.getMonth() < 0
            || thisDateAsDate.getMonth() > 11 || thisDateAsDate.getDate() < 1 || thisDateAsDate.getDate() > 31) {
            __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(thisDateMDY
                + ' (' + thisDateAsDate.toISOString().substr(0, 10) + ') is not a valid date. Please enter a valid date.');
            return false;
        }
        // establish two parallel arrays of the date controls and their labels
        var dateControls = ['request_date', 'fws_fo_received_date', 'fws_hq_received_date', 'analyst_signoff_date',
            'qc_reviewer_signoff_date', 'final_letter_date', 'close_date'];
        var dateControlLabels = ['Request Date', 'Field Office Received Date', 'Headquarters Received Date',
            'Analyst Signoff Date', 'QC Signoff Date', 'Final Letter Date', 'Close Date'];
        // determine the index of the current date control within the date control array
        var thisDateControlIndex = dateControls.indexOf(thisDateControl);
        // declare variables for potential use
        var prevDateControl, prevDate, nextDateControl, nextDate;
        // if this date control is the last or a middle date control in the array (i.e., not the first)
        if (thisDateControlIndex !== 0) {
            // determine the previous date control and its value
            // if the previous date has not been entered, the user should not be allowed to enter a value in the current date control,
            // except for Close Date (Final Letter Date can be null),
            // and Headquarters Received Date (Field Office Received Date seems to be null in a majority of cases)
            if (thisDateControl === 'close_date') {
                prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 1];
                prevDate = this._caseControls[prevDateControl].value;
                if (!prevDate) {
                    prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 2];
                    prevDate = this._caseControls[prevDateControl].value;
                    if (!prevDate) {
                        // warn the user of the invalid date selection
                        __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(dateControlLabels[thisDateControlIndex] + ' should not be entered until '
                            + dateControlLabels[thisDateControlIndex - 3] + ' has been entered!');
                        // clear the current date control value
                        // this.updateCaseControlValue(thisDateControl, null);
                        // short circuit this validation function and exit
                        return false;
                    }
                }
            }
            else if (thisDateControl === 'fws_hq_received_date') {
                prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 1];
                prevDate = this._caseControls[prevDateControl].value;
                if (!prevDate) {
                    prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 2];
                    prevDate = this._caseControls[prevDateControl].value;
                    if (!prevDate) {
                        // warn the user of the invalid date selection
                        __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(dateControlLabels[thisDateControlIndex] + ' should not be entered until '
                            + dateControlLabels[thisDateControlIndex - 2] + ' has been entered!');
                        // clear the current date control value
                        // this.updateCaseControlValue(thisDateControl, null);
                        // short circuit this validation function and exit
                        return false;
                    }
                }
            }
            else {
                prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 1];
                prevDate = this._caseControls[prevDateControl].value;
                if (!prevDate) {
                    // warn the user of the invalid date selection
                    __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(dateControlLabels[thisDateControlIndex] + ' should not be entered until '
                        + dateControlLabels[thisDateControlIndex - 1] + ' has been entered!');
                    // clear the current date control value
                    // this.updateCaseControlValue(thisDateControl, null);
                    // short circuit this validation function and exit
                    return false;
                }
            }
        }
        // if this date control is the first or a middle date control in the array (i.e., not the last)
        if (thisDateControlIndex !== dateControls.length - 1) {
            // determine the next date control and its value
            if (thisDateControl === 'analyst_signoff_date') {
                nextDateControl = dateControls[dateControls.indexOf(thisDateControl) + 1];
                nextDate = this._caseControls[nextDateControl].value;
                if (!nextDate) {
                    nextDateControl = dateControls[dateControls.indexOf(thisDateControl) + 2];
                    nextDate = this._caseControls[nextDateControl].value;
                }
            }
            else if (thisDateControl === 'final_letter_date') {
                nextDateControl = dateControls[dateControls.indexOf(thisDateControl) + 1];
                nextDate = this._caseControls[nextDateControl].value;
                // if close_date is not already set, then set it equal to final_letter_date
                if (!nextDate) {
                    var thisDateObj = new Date(thisDate);
                    thisDateObj = new Date(thisDateObj.getTime() + Math.abs(thisDateObj.getTimezoneOffset() * 60000));
                    this.updateCaseControlValue('close_date', { date: { year: thisDateObj.getFullYear(), month: thisDateObj.getMonth() + 1, day: thisDateObj.getDate() } });
                    nextDate = thisDate;
                }
            }
            else {
                nextDateControl = dateControls[dateControls.indexOf(thisDateControl) + 1];
                nextDate = this._caseControls[nextDateControl].value;
            }
            // note that it is possible (and expected, in a normal workflow)
            // that the next date does not yet exist, which is perfectly valid
        }
        // finally, validate the chronology of the entered dates
        // convert thisDate, prevDate, and nextDate to actual date values in order to properly compare them
        if (typeof thisDate !== 'undefined' && thisDate !== null && thisDate !== '' && typeof thisDate === 'object') {
            if (thisDate.date.year === 0) {
                return false;
            }
            else {
                thisDate = ('0000' + thisDate.date.year).slice(-4) + '-'
                    + ('00' + thisDate.date.month).slice(-2)
                    + '-' + ('00' + thisDate.date.day).slice(-2);
            }
        }
        if (typeof prevDate !== 'undefined' && prevDate !== null && prevDate !== '' && typeof prevDate === 'object') {
            if (prevDate.date.year === 0) {
                return false;
            }
            else {
                prevDate = ('0000' + prevDate.date.year).slice(-4)
                    + '-' + ('00' + prevDate.date.month).slice(-2)
                    + '-' + ('00' + prevDate.date.day).slice(-2);
            }
        }
        if (typeof nextDate !== 'undefined' && nextDate !== null && nextDate !== '' && typeof nextDate === 'object') {
            if (nextDate.date.year === 0) {
                return false;
            }
            else {
                nextDate = ('0000' + nextDate.date.year).slice(-4)
                    + '-' + ('00' + nextDate.date.month).slice(-2)
                    + '-' + ('00' + nextDate.date.day).slice(-2);
            }
        }
        // if this date control is the last date control in the array,
        // check if the current date is not null and predates the previous date (which is invalid)
        // (note that the previous date MUST exist (although it could be Final Letter Date, or QC Signoff Date))
        if (thisDate && thisDateControlIndex === dateControls.length - 1 && (thisDate < prevDate)) {
            // warn the user of the invalid date selection
            if (prevDateControl === 'final_letter_date') {
                __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(dateControlLabels[thisDateControlIndex]
                    + ' can not be earlier than ' + dateControlLabels[thisDateControlIndex - 2] + '!');
            }
            else {
                __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(dateControlLabels[thisDateControlIndex]
                    + ' can not be earlier than ' + dateControlLabels[thisDateControlIndex - 1] + '!');
            }
            // clear the current date control value
            // this.updateCaseControlValue(thisDateControl, null);
        }
        else if (thisDateControlIndex === 0 && nextDate && (thisDate > nextDate)) {
            // if this date control is the first date control in the array
            // check if the current date postdates the next date (which is invalid)
            // (note that the next date MAY OR MAY NOT exist)
            // warn the user of the invalid date selection
            __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(dateControlLabels[thisDateControlIndex]
                + ' can not be later than ' + dateControlLabels[thisDateControlIndex + 1] + '!');
            // clear the current date control value
            // this.updateCaseControlValue(thisDateControl, null);
        }
        else {
            // else it is a middle date control in the array
            // (note that the next date MAY OR MAY NOT exist)
            // if the next date does not yet exist, which is perfectly valid,
            // check if the current date is not null and predates the previous date (which is invalid)
            if (!nextDate && thisDate && (thisDate < prevDate)) {
                // warn the user of the invalid date selection
                __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(dateControlLabels[thisDateControlIndex]
                    + ' can not be earlier than ' + dateControlLabels[thisDateControlIndex - 1] + '!');
                // clear the current date control value
                // this.updateCaseControlValue(thisDateControl, null);
            }
            else if ((thisDate && (thisDate < prevDate)) || (nextDate && (thisDate > nextDate))) {
                // else check if the current date is not null and predates the previous date,
                // or postdates the next date (both of which are invalid)
                // warn the user of the invalid date selection
                if (thisDateControl === 'qc_reviewer_signoff_date' && nextDateControl === 'close_date') {
                    __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(dateControlLabels[thisDateControlIndex]
                        + ' must be between ' + dateControlLabels[thisDateControlIndex - 1]
                        + ' and ' + dateControlLabels[thisDateControlIndex + 2] + '!');
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(dateControlLabels[thisDateControlIndex]
                        + ' must be between ' + dateControlLabels[thisDateControlIndex - 1]
                        + ' and ' + dateControlLabels[thisDateControlIndex + 1] + '!');
                }
                // clear the current date control value
                // this.updateCaseControlValue(thisDateControl, null);
            }
            else {
                // else all is well!
                // // if this date control is Final Letter Date, then also close the case by setting the Close Date to the same date
                // if (thisDateControl === 'final_letter_date') {
                //     this.updateCaseControlValue('close_date', thisDate);
                // }
                return false;
            }
        }
    };
    WorkbenchDetailComponent.prototype._getUsers = function () {
        var _this = this;
        this._userService.getUsers(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('used_users=True'))
            .subscribe(function (users) {
            _this.myUsers = users;
            _this._buildUserOptions();
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._buildUserOptions = function (formControl, userID) {
        var usedUserIDs = [];
        var availableUserIDs = [];
        // clear out the select lists for every user field in order to rebuild them with the latest application state information
        this.availableAnalysts.length = 0;
        this.availableQCReviewers.length = 0;
        // make a list of user IDs that are already in use ('usedUserIDs')
        // the content of this list depends on whether a formControl has just been updated (one of the switch cases) or not (default)
        switch (formControl) {
            case 'analyst':
                if (this.myCase.qc_reviewer) {
                    usedUserIDs.push(this.myCase.qc_reviewer);
                }
                if (userID && usedUserIDs.indexOf(userID) < 0) {
                    usedUserIDs.push(Number(userID));
                }
                break;
            case 'qc_reviewer':
                if (this.myCase.analyst) {
                    usedUserIDs.push(this.myCase.analyst);
                }
                if (userID && usedUserIDs.indexOf(userID) < 0) {
                    usedUserIDs.push(Number(userID));
                }
                break;
            default:
                if (this.myCase.analyst) {
                    usedUserIDs.push(this.myCase.analyst);
                }
                if (this.myCase.qc_reviewer) {
                    usedUserIDs.push(this.myCase.qc_reviewer);
                }
                if (userID && usedUserIDs.indexOf(userID) < 0) {
                    usedUserIDs.push(Number(userID));
                }
                break;
        }
        // allow each select list to contain any unused users who are current (active) employees
        for (var i = 0, j = this.myUsers.length; i < j; i++) {
            if (usedUserIDs.indexOf(this.myUsers[i].id) < 0 && this.myUsers[i].is_active) {
                this.availableAnalysts.push(this.myUsers[i]);
                this.availableQCReviewers.push(this.myUsers[i]);
                // also store these unused/available user IDs ('availableUserIDs') for later comparison to avoid duplicates
                availableUserIDs.push(this.myUsers[i].id);
            }
        }
        // for the analyst select list only, add back the analyst assigned from the database and/or a user-selected analyst
        var addAnalystUserIDs = [];
        var caseAnalystUserID = this.myCase.analyst;
        // if the analyst formControl was changed, add the selected value to the analyst select list
        if (formControl === 'analyst') {
            addAnalystUserIDs.push(Number(userID));
            this.selectedAnalyst = userID;
        }
        else if (caseAnalystUserID) {
            // otherwise, if the analyst formControl was not changed, add back the analyst assigned from the database
            addAnalystUserIDs.push(caseAnalystUserID);
            this.selectedAnalyst = caseAnalystUserID;
        }
        // if the analyst formControl was changed, but the selected value was not a user (i.e., null),
        // and the analyst assigned from the database has not been re-assigned already,
        // add back the analyst assigned from the database
        if (formControl === 'analyst' && !userID) {
            if (caseAnalystUserID && availableUserIDs.indexOf(caseAnalystUserID) < 0) {
                addAnalystUserIDs.push(caseAnalystUserID);
            }
        }
        for (var i = 0, j = this.myUsers.length; i < j; i++) {
            if (addAnalystUserIDs.indexOf(this.myUsers[i].id) > -1) {
                this.availableAnalysts.push(this.myUsers[i]);
            }
        }
        // for the qc_reviewer select list only, add back the qc_reviewer assigned from the database and/or a user-selected qc_reviewer
        var addQCReviewerUserIDs = [];
        var caseQCReviewerUserID = this.myCase.qc_reviewer;
        // if the qc_reviewer formControl was changed, add the selected value to the qc_reviewer select list
        if (formControl === 'qc_reviewer') {
            addQCReviewerUserIDs.push(Number(userID));
            this.selectedQCReviewer = userID;
        }
        else if (caseQCReviewerUserID) {
            // otherwise, if the qc_reviewer formControl was not changed, add back the qc_reviewer assigned from the database
            addQCReviewerUserIDs.push(caseQCReviewerUserID);
            this.selectedQCReviewer = caseQCReviewerUserID;
        }
        // if the qc_reviewer formControl was changed, but the selected value was not a user (i.e., null),
        // and the qc_reviewer assigned from the database has not been re-assigned already,
        // add back the qc_reviewer assigned from the database
        if (formControl === 'qc_reviewer' && !userID) {
            if (caseQCReviewerUserID && availableUserIDs.indexOf(caseQCReviewerUserID) < 0) {
                addQCReviewerUserIDs.push(caseQCReviewerUserID);
            }
        }
        for (var i = 0, j = this.myUsers.length; i < j; i++) {
            if (addQCReviewerUserIDs.indexOf(this.myUsers[i].id) > -1) {
                this.availableQCReviewers.push(this.myUsers[i]);
            }
        }
    };
    WorkbenchDetailComponent.prototype._getDeterminations = function () {
        var _this = this;
        this._determinationService.getDeterminations()
            .subscribe(function (determinations) {
            _this.myDeterminations = determinations;
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype.getProhibitiondates = function (unitID) {
        var _this = this;
        this._prohibitiondateService.getProhibitiondates(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('unit=' + unitID))
            .subscribe(function (prohibitiondates) {
            _this.myProhibitiondates = prohibitiondates;
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._getFieldoffices = function () {
        var _this = this;
        this._fieldofficeService.getFieldoffices()
            .subscribe(function (fieldoffices) {
            _this.myFieldoffices = fieldoffices;
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype.addComment = function (newcomment) {
        var _this = this;
        if (!newcomment) {
            return;
        }
        var matchingComment = this.myComments.filter(function (comment) { return comment.comment === newcomment; });
        if (matchingComment[0]) {
            this.commentUnique = false;
            return;
        }
        else {
            this.commentUnique = true;
            this._commentService.createComment(new __WEBPACK_IMPORTED_MODULE_6__comments_comment__["a" /* Comment */](this.case_ID, newcomment))
                .subscribe(function (comment) {
                _this.myComments.push(comment);
                _this._addCommentControl(comment.comment);
            }, function (error) { return _this._errorMessage = error; });
        }
    };
    WorkbenchDetailComponent.prototype.editComment = function (commentID) {
        var _this = this;
        var oldcomment = this.myComments.filter(function (comment) { return comment.id === commentID; })[0];
        if (oldcomment.created_by_string === this._authenticationService.user.username) {
            this.commentOwner = true;
            this.editingComment = true;
            this.editCommentID = commentID;
        }
        else {
            this.commentOwner = false;
            setTimeout(function () {
                _this.commentOwner = true;
            }, 5000);
        }
    };
    WorkbenchDetailComponent.prototype.cancelEditComment = function () {
        this.editingComment = false;
    };
    WorkbenchDetailComponent.prototype.updateComment = function (newcomment) {
        var _this = this;
        if (!this.editCommentID || !newcomment) {
            return;
        }
        var commentID = this.editCommentID;
        var matchingComment = this.myComments.filter(function (comment) { return comment.comment === newcomment; });
        if (matchingComment[0]) {
            this.commentUnique = false;
            return;
        }
        else {
            this.commentUnique = true;
            var oldcomment_1 = this.myComments.filter(function (comment) { return comment.id === commentID; })[0];
            // let me = this.myUsers.filter(function(user) {return user.username === newcomment.created_by_string})[0];
            this._commentService.updateComment(new __WEBPACK_IMPORTED_MODULE_6__comments_comment__["a" /* Comment */](oldcomment_1.acase, newcomment, oldcomment_1.created_by, oldcomment_1.created_by_string, oldcomment_1.created_date, oldcomment_1.id))
                .subscribe(function (comment) {
                var ndx = _this.myComments.indexOf(oldcomment_1);
                _this.myComments.splice(ndx, 1, comment);
                _this._addCommentControl(comment.comment);
                _this.editingComment = false;
            }, function (error) { return _this._errorMessage = error; });
        }
    };
    WorkbenchDetailComponent.prototype.addCasetag = function (newtag) {
        var _this = this;
        if (!newtag) {
            return;
        }
        this._casetagService.createCasetag(new __WEBPACK_IMPORTED_MODULE_8__casetags_casetag__["a" /* Casetag */](this.case_ID, newtag))
            .subscribe(function (casetag) {
            _this.myCasetags.push(casetag);
            _this._buildTagOptions();
            _this._addCasetagControl(casetag.tagname);
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype.removeCasetag = function (oldtag) {
        var _this = this;
        this._casetagService.deleteCasetag(oldtag)
            .subscribe(function (casetag) {
            _this._getCasetags(_this.case_ID);
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype.setSignoffDateToday = function (field) {
        var controlName = field + '_signoff_date';
        if (this.casegroup.contains(controlName)) {
            this._caseControls[controlName].setValue(__WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].TODAY);
        }
    };
    WorkbenchDetailComponent.prototype.setFinalLetterDate = function (checked) {
        if (checked) {
            this._caseControls['final_letter_date'].setValue(__WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].TODAY);
            var close_case = confirm('Do you also want to close this case?');
            if (close_case) {
                this._caseControls['close_date'].setValue(__WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].TODAY);
            }
            else {
                this._caseControls['close_date'].setValue('');
            }
        }
        else {
            this._caseControls['final_letter_date'].setValue('');
        }
    };
    WorkbenchDetailComponent.prototype.fileDragHover = function (fileInput) {
        fileInput.stopPropagation();
        fileInput.preventDefault();
    };
    WorkbenchDetailComponent.prototype.casefileSelectHandler = function (fileInput) {
        this.fileDragHover(fileInput);
        var selectedFiles = fileInput.target.files || fileInput.dataTransfer.files;
        for (var i = 0, j = selectedFiles.length; i < j; i++) {
            var f = selectedFiles[i];
            this._filesToUpload.push(f);
            var fileDetails = { 'name': f.name };
            this.filesToUploadDetails.push(fileDetails);
        }
    };
    WorkbenchDetailComponent.prototype.finalletterSelectHandler = function (fileInput) {
        this.fileDragHover(fileInput);
        // if (this._finalletterToUpload) {
        //     let message = 'There is already a final leader ready for upload.\n';
        //     message += 'If you want to upload a different final letter, remove the current final letter.';
        //     APP_UTILITIES.showToast(message);
        // } else if (this.myCasefiles) {
        //     for (const casefile of this.myCasefiles) {
        //         if (casefile.final_letter) {
        //             let message = 'There is already a final leader that has been uploaded.\n';
        //             message += 'If you want to upload a different final letter, remove the current final letter.';
        //             APP_UTILITIES.showToast(message);
        //         }
        //     }
        // } else {
        var selectedFiles = fileInput.target.files || fileInput.dataTransfer.files;
        this._finalletterToUpload = selectedFiles[0];
        this.finalletterToUploadDetails = { 'name': this._finalletterToUpload.name };
        // }
    };
    WorkbenchDetailComponent.prototype.removeCasefile = function (index) {
        this._filesToUpload.splice(index, 1);
        this.filesToUploadDetails.splice(index, 1);
    };
    WorkbenchDetailComponent.prototype.removeFinalLetter = function () {
        this._finalletterToUpload = undefined;
        this.finalletterToUploadDetails = undefined;
    };
    WorkbenchDetailComponent.prototype.deleteCasefile = function (casefileid) {
        var _this = this;
        this._casefileService.deleteCasefile(casefileid)
            .subscribe(function (response) { _this._getCasefiles(_this.myCase.id); }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchDetailComponent.prototype._callCreateCasefiles = function () {
        var _this = this;
        // create the new casefiles
        this._casefileService.createCasefiles(this.myCase.id, this._filesToUpload)
            .then(function (result) {
            _this._getCasefiles(_this.myCase.id);
            _this._filesToUpload.length = 0;
            _this.filesToUploadDetails.length = 0;
            if (_this._finalletterToUpload) {
                _this._callCreateFinalLetter();
            }
            else if (_this._isNewCase) {
                _this._isNewCase = false;
                _this._router.navigate(['/workbench/' + _this.case_ID]);
            }
        }, function (error) {
            // console.error(error);
            __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(error);
        });
    };
    WorkbenchDetailComponent.prototype._callCreateFinalLetter = function () {
        var _this = this;
        // create the new final letter
        var uploadFiles = [this._finalletterToUpload];
        this._casefileService.createCasefiles(this.myCase.id, uploadFiles, true)
            .then(function (result) {
            _this._getCasefiles(_this.myCase.id);
            _this.removeFinalLetter();
            if (_this._isNewCase) {
                _this._isNewCase = false;
                _this._router.navigate(['/workbench/' + _this.case_ID]);
            }
        }, function (error) {
            // console.error(error);
            __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast(error);
        });
    };
    WorkbenchDetailComponent.prototype.generateLetter = function () {
        this._caseService.createFinalLeter(this.case_ID)
            .then(function (data) {
            var blob = new Blob([data[0]], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            __WEBPACK_IMPORTED_MODULE_26_file_saver__["saveAs"](blob, data[1]);
        });
    };
    WorkbenchDetailComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.notready = true;
        // check each formControl group for changes, then send the changed objects to their respective services
        if (form.dirty || this._filesToUpload || this._finalletterToUpload) {
            var changedCaseGroup_1 = form.controls.casegroup;
            var changedPropertyGroup = form.controls.propertygroup;
            var changedRequesterGroup = form.controls.requestergroup;
            // check if this is a create or update (case_number will only exist if this is an update)
            if (this.myCase.case_number) {
                if (changedCaseGroup_1.dirty) {
                    // for each date field, replace empty string with null (Django Date fields don't allow empty strings)
                    // and for all date fields with values, reformat from mm/dd/yyyy to yyyy-mm-dd
                    // note that cbrs_map_date and prohibition_date are slightly different,
                    // since they're plain text and not mydatepicker objects
                    var thisDate = changedCaseGroup_1.controls.request_date.value;
                    if (thisDate === '') {
                        changedCaseGroup_1.controls.request_date.setValue(null);
                    }
                    else if (thisDate !== null) {
                        thisDate = __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].convertDateToISOString(thisDate);
                        changedCaseGroup_1.controls.request_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup_1.controls.cbrs_map_date.value;
                    if (thisDate === '') {
                        changedCaseGroup_1.controls.cbrs_map_date.setValue(null);
                    }
                    else if (thisDate !== null) {
                        // map_date comes in mm/dd/yyyy format
                        var date_parts = thisDate.split('/');
                        var ymd = date_parts[2] + '-' + date_parts[0] + '-' + date_parts[1];
                        changedCaseGroup_1.controls.cbrs_map_date.setValue(ymd);
                    }
                    thisDate = changedCaseGroup_1.controls.prohibition_date.value;
                    if (thisDate === '') {
                        changedCaseGroup_1.controls.prohibition_date.setValue(null);
                    }
                    thisDate = changedCaseGroup_1.controls.fws_fo_received_date.value;
                    if (thisDate === '') {
                        changedCaseGroup_1.controls.fws_fo_received_date.setValue(null);
                    }
                    else if (thisDate !== null) {
                        thisDate = __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].convertDateToISOString(thisDate);
                        changedCaseGroup_1.controls.fws_fo_received_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup_1.controls.fws_hq_received_date.value;
                    if (thisDate === '') {
                        changedCaseGroup_1.controls.fws_hq_received_date.setValue(null);
                    }
                    else if (thisDate !== null) {
                        thisDate = __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].convertDateToISOString(thisDate);
                        changedCaseGroup_1.controls.fws_hq_received_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup_1.controls.final_letter_date.value;
                    if (thisDate === '') {
                        changedCaseGroup_1.controls.final_letter_date.setValue(null);
                    }
                    else if (thisDate !== null) {
                        thisDate = __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].convertDateToISOString(thisDate);
                        changedCaseGroup_1.controls.final_letter_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup_1.controls.close_date.value;
                    if (thisDate === '') {
                        changedCaseGroup_1.controls.close_date.setValue(null);
                    }
                    else if (thisDate !== null) {
                        // it is possible that close_date has already been set to be equal to final_letter_date,
                        // in which case it will be a string, otherwise it will be a mydatepicker object
                        if (typeof thisDate !== 'string') {
                            thisDate = __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].convertDateToISOString(thisDate);
                            changedCaseGroup_1.controls.close_date.setValue(thisDate);
                        }
                    }
                    thisDate = changedCaseGroup_1.controls.analyst_signoff_date.value;
                    if (thisDate === '') {
                        changedCaseGroup_1.controls.analyst_signoff_date.setValue(null);
                    }
                    else if (thisDate !== null) {
                        thisDate = __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].convertDateToISOString(thisDate);
                        changedCaseGroup_1.controls.analyst_signoff_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup_1.controls.qc_reviewer_signoff_date.value;
                    if (thisDate === '') {
                        changedCaseGroup_1.controls.qc_reviewer_signoff_date.setValue(null);
                    }
                    else if (thisDate !== null) {
                        thisDate = __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].convertDateToISOString(thisDate);
                        changedCaseGroup_1.controls.qc_reviewer_signoff_date.setValue(thisDate);
                    }
                    this._caseService.updateCase(changedCaseGroup_1.value)
                        .subscribe(function (acase) {
                        _this.myCase = acase;
                        _this._updateControls(_this._myCase_fields, _this._caseControls, _this.myCase);
                        // map_date comes in yyyy-mm-dd format
                        if (_this.myCase.cbrs_map_date) {
                            var date_parts = changedCaseGroup_1.controls.cbrs_map_date.value.split('-');
                            var mdy = date_parts[1] + '/' + date_parts[2] + '/' + date_parts[0];
                            _this._caseControls['cbrs_map_date'].setValue(mdy);
                        }
                    }, function (error) { return _this._errorMessage = error; });
                }
                if (changedPropertyGroup.dirty) {
                    this._propertyService.updateProperty(changedPropertyGroup.value)
                        .subscribe(function (property) {
                        _this.myProperty = property;
                        _this._updateControls(_this._myProperty_fields, _this._propertyControls, _this.myProperty);
                    }, function (error) { return _this._errorMessage = error; });
                }
                if (changedRequesterGroup.dirty) {
                    this._requesterService.updateRequester(changedRequesterGroup.value)
                        .subscribe(function (requester) {
                        _this.myRequester = requester;
                        _this._updateControls(_this._myRequester_fields, _this._requesterControls, _this.myRequester);
                    }, function (error) { return _this._errorMessage = error; });
                }
                if (this._filesToUpload) {
                    this._callCreateCasefiles();
                }
                if (this._finalletterToUpload) {
                    this._callCreateFinalLetter();
                }
            }
            else {
                this._createCase(form);
            }
        }
        else if (this._filesToUpload) {
            this._callCreateCasefiles();
        }
        else if (this._finalletterToUpload) {
            this._callCreateFinalLetter();
        }
        // reset the form
        this.active = false;
        setTimeout(function () { _this.notready = false; _this.active = true; }, 5000);
    };
    WorkbenchDetailComponent.prototype._createCase = function (form) {
        // adapted from cbrarequests: https://github.com/USGS-WiM/CBRARequests/blob/master/src/app.component.ts
        var changedPropertyGroup = form.controls.propertygroup;
        var changedRequesterGroup = form.controls.requestergroup;
        // ensure required fields have values
        var hasRequiredValues = true;
        if (!changedPropertyGroup.controls.street && !changedPropertyGroup.controls.city && !changedPropertyGroup.controls.state) {
            __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast('Could not find the property street and/or city and/or state. Some address value is required.');
            hasRequiredValues = false;
        }
        if (!changedRequesterGroup.controls.first_name && !changedRequesterGroup.controls.last_name
            && !changedRequesterGroup.controls.email) {
            __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast('Could not find the requester first name and/or last name and/or email. Some name is required.');
            hasRequiredValues = false;
        }
        if (!hasRequiredValues) {
            return;
        }
        // ensure no property fields are null (use empty strings if null)
        for (var _i = 0, changedPropertyGroup_1 = changedPropertyGroup; _i < changedPropertyGroup_1.length; _i++) {
            var group = changedPropertyGroup_1[_i];
            for (var _a = 0, group_1 = group; _a < group_1.length; _a++) {
                var key = group_1[_a];
                if (!changedPropertyGroup[key]) {
                    changedPropertyGroup[key] = '';
                }
            }
        }
        // ensure no requester fields are null (use empty strings if null)
        for (var _b = 0, changedRequesterGroup_1 = changedRequesterGroup; _b < changedRequesterGroup_1.length; _b++) {
            var group = changedRequesterGroup_1[_b];
            for (var _c = 0, group_2 = group; _c < group_2.length; _c++) {
                var key = group_2[_c];
                if (!changedRequesterGroup[key]) {
                    changedRequesterGroup[key] = '';
                }
            }
        }
        // create the local models
        this._newCase = new __WEBPACK_IMPORTED_MODULE_3__cases_case__["a" /* Case */]();
        this._newProperty = new __WEBPACK_IMPORTED_MODULE_4__properties_property__["a" /* Property */](changedPropertyGroup.controls.street.value, changedPropertyGroup.controls.city.value, changedPropertyGroup.controls.state.value, changedPropertyGroup.controls.zipcode.value, changedPropertyGroup.controls.unit.value, changedPropertyGroup.controls.legal_description.value, changedPropertyGroup.controls.subdivision.value, changedPropertyGroup.controls.policy_number.value);
        this._newRequester = new __WEBPACK_IMPORTED_MODULE_5__requesters_requester__["a" /* Requester */](changedRequesterGroup.controls.first_name.value, changedRequesterGroup.controls.last_name.value, changedRequesterGroup.controls.salutation.value, changedRequesterGroup.controls.organization.value, changedRequesterGroup.controls.email.value, changedRequesterGroup.controls.street.value, changedRequesterGroup.controls.unit.value, changedRequesterGroup.controls.city.value, changedRequesterGroup.controls.state.value, changedRequesterGroup.controls.zipcode.value);
        // check if the property, requester, or case already exist, and create them as necessary
        this.__getProperties(this._newProperty);
    };
    //////
    //
    // _createCase functions
    //
    //////
    WorkbenchDetailComponent.prototype.__getCases = function (propertyID, requesterID) {
        var _this = this;
        this._caseService.getCases(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('property=' + propertyID + '&requester=' + requesterID))
            .subscribe(function (cases) {
            if (cases.length > 0) {
                // inform the user that the request already exists and show the summary
                _this._newCase.id = cases[0].id;
                // TODO: replace this alert with a better UX, like a modal
                __WEBPACK_IMPORTED_MODULE_25__app_utilities__["a" /* APP_UTILITIES */].showToast('That case already exists! Loading the case details...');
                setTimeout(function () {
                    _this.notready = false;
                    _this.__goToCase(_this._newCase.id);
                }, 5000);
            }
            else {
                // send the new request to the DB
                _this.__createRequest();
            }
        }, function (error) { return console.error(error); });
    };
    WorkbenchDetailComponent.prototype.__getProperties = function (property) {
        var _this = this;
        this._propertyService.getProperties(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('street=' + property.street
            + '&unit=' + property.unit
            + '&city=' + property.city
            + '&state=' + property.state
            + '&zipcode=' + property.zipcode
        // + '&legal_description=' +property.legal_description
        ))
            .subscribe(function (properties) {
            if (properties.length > 0) {
                _this._newProperty.id = properties[0].id;
            }
            _this.__getRequesters(_this._newRequester);
        }, function (error) { return console.error(error); });
    };
    WorkbenchDetailComponent.prototype.__getRequesters = function (requester) {
        var _this = this;
        this._requesterService.getRequesters(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('salutation=' + requester.salutation
            + '&first_name=' + requester.first_name
            + '&last_name=' + requester.last_name
            + '&organization=' + requester.organization
            + '&email=' + requester.email
            + '&street=' + requester.street
            + '&unit=' + requester.unit
            + '&city=' + requester.city
            + '&state=' + requester.state
            + '&zipcode=' + requester.zipcode))
            .subscribe(function (requesters) {
            if (requesters.length > 0) {
                _this._newRequester.id = requesters[0].id;
            }
            if (_this._newProperty.id && _this._newRequester.id) {
                _this.__getCases(_this._newProperty.id, _this._newRequester.id);
            }
            else {
                // send the new request to the DB
                _this.__createRequest();
            }
        }, function (error) { return console.error(error); });
    };
    WorkbenchDetailComponent.prototype.__createRequest = function () {
        if (this._newRequester.id && this._newProperty.id) {
            this.__assignRequesterID();
            this.__assignPropertyID();
            this.__callCreateCase();
        }
        else if (this._newRequester.id && !this._newProperty.id) {
            this.__assignRequesterID();
            this.__callCreatePropertyAndCase();
        }
        else if (!this._newRequester.id && this._newProperty.id) {
            this.__assignPropertyID();
            this.__callCreateRequestAndCase();
        }
        else {
            this.__callCreateRequesterAndPropertyAndCase();
        }
    };
    WorkbenchDetailComponent.prototype.__assignRequesterID = function () {
        this._newCase.requester = this._newRequester.id;
    };
    WorkbenchDetailComponent.prototype.__assignPropertyID = function () {
        this._newCase.property = this._newProperty.id;
    };
    WorkbenchDetailComponent.prototype.__callCreateRequesterAndPropertyAndCase = function () {
        var _this = this;
        // create the requester object, then grab its ID for the relation to the case
        this._requesterService.createRequester(this._newRequester)
            .subscribe(function (newrequester) {
            _this._newRequester = newrequester;
            _this.__assignRequesterID();
            // create the property object, then grab its ID for the relation to the case
            _this.__callCreatePropertyAndCase();
        }, function (error) { return console.error(error); });
    };
    WorkbenchDetailComponent.prototype.__callCreateRequestAndCase = function () {
        var _this = this;
        // create the request object, then grab its ID for the relation to the case
        this._requesterService.createRequester(this._newRequester)
            .subscribe(function (newrequester) {
            _this._newRequester = newrequester;
            _this.__assignRequesterID();
            // create the new case
            _this.__callCreateCase();
        }, function (error) { return console.error(error); });
    };
    WorkbenchDetailComponent.prototype.__callCreatePropertyAndCase = function () {
        var _this = this;
        // create the property object, then grab its ID for the relation to the case
        this._propertyService.createProperty(this._newProperty)
            .subscribe(function (newproperty) {
            _this._newProperty = newproperty;
            _this.__assignPropertyID();
            // create the new case
            _this.__callCreateCase();
        }, function (error) { return console.error(error); });
    };
    WorkbenchDetailComponent.prototype.__callCreateCase = function () {
        var _this = this;
        // create the new case
        this._caseService.createCase(this._newCase)
            .subscribe(function (newcase) {
            _this._newCase = newcase;
            if (_this._filesToUpload) {
                _this._callCreateCasefiles();
            }
            if (_this._finalletterToUpload) {
                _this._callCreateFinalLetter();
            }
            else {
                _this.__goToCase(_this._newCase.id);
                _this.notready = false;
            }
        }, function (error) { return console.error(error); });
    };
    WorkbenchDetailComponent.prototype.__goToCase = function (caseID) {
        this._router.navigate(['/workbench/' + caseID]);
    };
    WorkbenchDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/workbench/workbench-detail.component.html"),
            styles: ['.error {color:red;}']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_23__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_23__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__cases_case_service__["a" /* CaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__cases_case_service__["a" /* CaseService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__casefiles_casefile_service__["a" /* CasefileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__casefiles_casefile_service__["a" /* CasefileService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__properties_property_service__["a" /* PropertyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__properties_property_service__["a" /* PropertyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_12__requesters_requester_service__["a" /* RequesterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__requesters_requester_service__["a" /* RequesterService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_13__comments_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__comments_comment_service__["a" /* CommentService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_14__tags_tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__tags_tag_service__["a" /* TagService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_15__casetags_casetag_service__["a" /* CasetagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__casetags_casetag_service__["a" /* CasetagService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_16__systemunits_systemunit_service__["a" /* SystemunitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__systemunits_systemunit_service__["a" /* SystemunitService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_17__systemmaps_systemmap_service__["a" /* SystemmapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__systemmaps_systemmap_service__["a" /* SystemmapService */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_18__fieldoffices_fieldoffice_service__["a" /* FieldofficeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__fieldoffices_fieldoffice_service__["a" /* FieldofficeService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_19__users_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_19__users_user_service__["a" /* UserService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_20__determinations_determination_service__["a" /* DeterminationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_20__determinations_determination_service__["a" /* DeterminationService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_21__prohibitiondates_prohibitiondate_service__["a" /* ProhibitiondateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_21__prohibitiondates_prohibitiondate_service__["a" /* ProhibitiondateService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_22__authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_22__authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _s || Object])
    ], WorkbenchDetailComponent);
    return WorkbenchDetailComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
}());

//# sourceMappingURL=workbench-detail.component.js.map

/***/ }),

/***/ "../../../../../src/workbench/workbench-filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container cbrs-form\">\n\n    <div *ngIf=\"filternotready\" align=\"center\" id=\"loading-spinner\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i><img src=\"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif\"></div>\n    <div *ngIf=\"!filternotready\">\n\n        <form [formGroup]=\"form\" *ngIf=\"active\" (ngSubmit)=\"onSubmit(form)\">\n\n            <div class=\"dms-group noheader\">\n\n                <div class=\"row\">\n\n                    <div formGroupName=\"workbenchfiltergroup\">\n\n                        <div class=\"col-md-10\">\n\n                            <div class=\"row\">\n\n                                <div class=\"col-md-2 dms-form-group bb br\">\n                                    <label for=\"status\">Status</label>\n                                    <select id=\"status\" formControlName=\"status\">\n                                        <option value=\"\"></option>\n                                        <option *ngFor=\"let status of myStatuses\" [value]=\"status\" [selected]=\"status == myWorkbenchFilter.status\">{{status}}</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col-md-2 dms-form-group bb br\">\n                                    <label for=\"case_number\">Case ID</label>\n                                    <input id=\"case_number\" type=\"text\" formControlName=\"case_number\">\n                                </div>\n\n                                <div class=\"col-md-2 dms-form-group bb br\">\n                                    <label for=\"case_reference\">Case Reference</label>\n                                    <input id=\"case_reference\" type=\"text\" formControlName=\"case_reference\">\n                                </div>\n\n                                <div class=\"col-md-2 dms-form-group bb br\">\n                                    <label for=\"request_date_after\">Request Date After</label>\n                                    <my-date-picker id=\"request_date_after\" [options]=\"myDatePickerOptions\" formControlName=\"request_date_after\"></my-date-picker>\n                                </div>\n\n                                <div class=\"col-md-2 dms-form-group bb br\">\n                                    <label for=\"request_date_before\">Request Date Before</label>\n                                    <my-date-picker id=\"request_date_before\" [options]=\"myDatePickerOptions\" formControlName=\"request_date_before\"></my-date-picker>\n                                </div>\n\n                                <div class=\"col-md-1 dms-form-group bb br\">\n                                    <label for=\"distance_from\">Distance From</label>\n                                    <input id=\"distance_from\" type=\"text\" formControlName=\"distance_from\">\n                                </div>\n\n                                <div class=\"col-md-1 dms-form-group bb br\">\n                                    <label for=\"distance_to\">Distance To</label>\n                                    <input id=\"distance_to\" type=\"text\" formControlName=\"distance_to\">\n                                </div>\n\n                            </div> <!-- /row -->\n\n                            <div class=\"row\">\n\n                                <div class=\"col-md-2 dms-form-group br\">\n                                    <label for=\"analyst\">Analyst</label>\n                                    <select id=\"analyst\" formControlName=\"analyst\">\n                                        <option value=\"\"></option>\n                                        <option *ngFor=\"let analyst of myUsers\" [value]=\"analyst.id\" [selected]=\"analyst.id == myWorkbenchFilter.analyst\">{{analyst.username}}</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col-md-2 dms-form-group br\">\n                                    <label for=\"qc_reviewer\">QC Reviewer</label>\n                                    <select id=\"qc_reviewer\" formControlName=\"qc_reviewer\">\n                                        <option value=\"\"></option>\n                                        <option *ngFor=\"let qc_reviewer of myUsers\" [value]=\"qc_reviewer.id\" [selected]=\"qc_reviewer.id == myWorkbenchFilter.qc_reviewer\">{{qc_reviewer.username}}</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col-md-2 dms-form-group br\">\n                                    <label for=\"cbrs_unit\">CBRS Unit</label>\n                                    <select id=\"cbrs_unit\" formControlName=\"cbrs_unit\">\n                                        <option value=\"\"></option>\n                                        <option *ngFor=\"let unit of mySystemunits\" [value]=\"unit.id\" [selected]=\"unit.id == myWorkbenchFilter.cbrs_unit\">{{unit.system_unit_number}}</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col-md-2 dms-form-group br\">\n                                    <label for=\"tags\">Tag</label>\n                                    <select id=\"tags\" formControlName=\"tags\">\n                                        <option value=\"\"></option>\n                                        <option *ngFor=\"let tag of myTags\" [value]=\"tag.id\" [selected]=\"tag.id == myWorkbenchFilter.tags[0]\">{{tag.name}}</option>\n                                    </select>\n                                </div>\n\n                                <div class=\"col-md-2 dms-form-group br\">\n                                    <label for=\"street\">Street</label>\n                                    <input id=\"street\" type=\"text\" formControlName=\"street\">\n                                </div>\n\n                                <div class=\"col-md-2 dms-form-group br\">\n                                    <label for=\"city\">City</label>\n                                    <input id=\"city\" type=\"text\" formControlName=\"city\">\n                                </div>\n\n                            </div> <!-- /row -->\n\n                        </div> <!-- /col-md-10 -->\n\n                        <div class=\"col-md-2\">\n                            <div class=\"chx-group\">\n                                <label for=\"priority\">Priority</label><!--\n                                --><div class=\"chx\">\n                                    <input id=\"priority\" type=\"checkbox\" formControlName=\"priority\">\n                                </div>\n                            </div><!--\n                                --><div class=\"chx-group\">\n                                <label for=\"on_hold\">On Hold</label><!--\n                                --><div class=\"chx\">\n                                    <input id=\"on_hold\" type=\"checkbox\" formControlName=\"on_hold\">\n                                </div>\n                            </div><!--\n                                --><div class=\"chx-group\">\n                                <label for=\"invalid\">Invalid</label><!--\n                                --><div class=\"chx\">\n                                    <input id=\"invalid\" type=\"checkbox\" formControlName=\"invalid\">\n                                </div>\n                            </div><!--\n                                --><div class=\"chx-group\">\n                                <label for=\"duplicate\">Duplicate</label><!--\n                                --><div class=\"slct\">\n                                    <select id=\"duplicate\" formControlName=\"duplicate\" style=\"width:120px\">\n                                        <option value=\"\"></option>\n                                        <option value=\"none\">None</option>\n                                        <option *ngFor=\"let caseID of myCaseIDs\" [value]=\"caseID.id\" [selected]=\"caseID.id == myWorkbenchFilter.case_number\">{{caseID.id}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div> <!-- /col-md-2 -->\n\n                    </div> <!-- /workbenchfiltergroup -->\n\n                </div> <!-- /row -->\n\n            </div> <!-- /dms-group noheaders -->\n\n            <div class=\"dms-group noheader\">\n\n                <div class=\"row\">\n\n                    <div formGroupName=\"workbenchfreetextgroup\" class=\"col-md-10\">\n\n\n                        <div class=\"col-md-2 dms-form-group br\">\n                            <label for=\"fiscal_year\">Fiscal Year</label>\n                            <input id=\"fiscal_year\" type=\"text\" formControlName=\"fiscal_year\">\n                        </div><!--\n\n                        --><div class=\"col-md-10 dms-form-group br\">\n                            <label for=\"freetext\">Freetext</label>\n                            <input id=\"freetext\" id=\"freetext\" type=\"text\" formControlName=\"freetext\">\n                        </div>\n\n\n                    </div> <!-- /workbenchfreetextgroup -->\n\n                    <button type=\"submit\" class=\"btn btn-default btn-save-all-inline col-md-1\" [disabled]=\"!form.valid\">Search</button>\n                    <button type=\"button\" class=\"btn btn-default btn-save-all-inline col-md-1\" (click)=\"clearFilter()\">Clear</button>\n\n                </div> <!-- /row -->\n            </div> <!-- /dms-group noheaders -->\n        </form>\n\n    </div> <!-- /filternotready -->\n\n</div> <!-- /container cbrs-form -->\n"

/***/ }),

/***/ "../../../../../src/workbench/workbench-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workbench_filter__ = __webpack_require__("../../../../../src/workbench/workbench-filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workbench_filter_service__ = __webpack_require__("../../../../../src/workbench/workbench-filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cases_case_service__ = __webpack_require__("../../../../../src/cases/case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tags_tag_service__ = __webpack_require__("../../../../../src/tags/tag.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__systemunits_systemunit_service__ = __webpack_require__("../../../../../src/systemunits/systemunit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_user_service__ = __webpack_require__("../../../../../src/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_settings__ = __webpack_require__("../../../../../src/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var WorkbenchFilterComponent = /** @class */ (function () {
    function WorkbenchFilterComponent(fb, _workbenchFilterService, _caseService, _tagService, _systemunitService, _userService) {
        this._workbenchFilterService = _workbenchFilterService;
        this._caseService = _caseService;
        this._tagService = _tagService;
        this._systemunitService = _systemunitService;
        this._userService = _userService;
        this.onFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.myWorkbenchFilter = new __WEBPACK_IMPORTED_MODULE_1__workbench_filter__["a" /* WorkbenchFilter */]();
        this.myWorkbenchFreeText = { fiscal_year: undefined, freetext: undefined };
        this.myStatuses = __WEBPACK_IMPORTED_MODULE_9__app_settings__["a" /* APP_SETTINGS */].STATUSES;
        this.myCaseIDs = [];
        this.myUsers = [];
        this._myWorkbenchFilter_fields = Object.keys(this.myWorkbenchFilter);
        this._workbenchFreeText_fields = Object.keys(this.myWorkbenchFreeText);
        this.cleared = false;
        this.active = true;
        this.filternotready = true;
        this.myDatePickerOptions = {
            dateFormat: 'mm/dd/yyyy',
        };
        this._workbenchFilterControls = this._makeControls(this._myWorkbenchFilter_fields);
        this.workbenchfiltergroup = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormGroup */](this._workbenchFilterControls);
        this._workbenchFreeTextControls = this._makeControls(this._workbenchFreeText_fields);
        this.workbenchfreetextgroup = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormGroup */](this._workbenchFreeTextControls);
        this.form = fb.group({
            workbenchfiltergroup: this.workbenchfiltergroup,
            workbenchfreetextgroup: this.workbenchfreetextgroup
        });
        // get values for the select inputs
        this._getCaseIDs();
        this._getUsers();
        this._getSystemunits();
        this._getTags();
        this.myStatuses.push('Open');
    }
    WorkbenchFilterComponent.prototype._makeControls = function (fields) {
        var controls = {};
        for (var i = 0, j = fields.length; i < j; i++) {
            controls[fields[i]] = new __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormControl */]('');
        }
        return controls;
    };
    WorkbenchFilterComponent.prototype._updateControls = function (fields, controls, values) {
        for (var i = 0, j = fields.length; i < j; i++) {
            var field = fields[i];
            if (field.slice(-4) === 'date' && values[field] != null) {
                var thisDate = new Date(values[field]);
                controls[field].setValue({ date: { year: thisDate.getFullYear(), month: thisDate.getMonth() + 1, day: thisDate.getDate() } });
            }
            else {
                controls[field].setValue(values[field]);
            }
        }
    };
    WorkbenchFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage.getItem('filterUrlSearchParams')) {
            for (var prop in this.myWorkbenchFilter) {
                if (sessionStorage.getItem(prop)) {
                    this.myWorkbenchFilter[prop] = sessionStorage.getItem(prop);
                }
            }
        }
        if (!this.myWorkbenchFilter.status) {
            this.myWorkbenchFilter.status = 'Open';
        }
        this.selectedTag =
            typeof this.myWorkbenchFilter.tags !== 'undefined' && this.myWorkbenchFilter.tags.length > 0 ?
                this.myWorkbenchFilter.tags[0] : null;
        setTimeout(function () { return _this._updateControls(_this._myWorkbenchFilter_fields, _this._workbenchFilterControls, _this.myWorkbenchFilter); }, 0);
        this.filternotready = false;
    };
    WorkbenchFilterComponent.prototype._getCaseIDs = function () {
        var _this = this;
        this._caseService.getCases(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('view=caseid'))
            .subscribe(function (cases) {
            _this.myCaseIDs.length = 0;
            for (var i = 0, j = cases.length; i < j; i++) {
                if (cases[i].duplicate) {
                    _this.myCaseIDs.push(cases[i]);
                }
            }
            _this.myCaseIDs.sort(__WEBPACK_IMPORTED_MODULE_10__app_utilities__["a" /* APP_UTILITIES */].dynamicSort('id'));
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchFilterComponent.prototype._getTags = function () {
        var _this = this;
        this._tagService.getTags()
            .subscribe(function (tags) {
            _this.myTags = tags;
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchFilterComponent.prototype._getSystemunits = function () {
        var _this = this;
        this._systemunitService.getSystemunits()
            .subscribe(function (systemunits) {
            _this.mySystemunits = systemunits.sort(__WEBPACK_IMPORTED_MODULE_10__app_utilities__["a" /* APP_UTILITIES */].dynamicSort('system_unit_number'));
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchFilterComponent.prototype._getUsers = function () {
        var _this = this;
        this._userService.getUsers(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]('used_users=True'))
            .subscribe(function (users) {
            _this.myUsers = users;
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchFilterComponent.prototype.defaultFilter = function () {
        this.myWorkbenchFilter = new __WEBPACK_IMPORTED_MODULE_1__workbench_filter__["a" /* WorkbenchFilter */]();
        this._updateControls(this._myWorkbenchFilter_fields, this._workbenchFilterControls, this.myWorkbenchFilter);
        this._updateControls(this._workbenchFreeText_fields, this._workbenchFreeTextControls, this.myWorkbenchFreeText);
        this._workbenchFilterService.deleteFilter();
        this._workbenchFilterService.deleteUrlSearchParams();
    };
    WorkbenchFilterComponent.prototype.clearFilter = function () {
        this.cleared = true;
        this.filternotready = true;
        var wbf = new __WEBPACK_IMPORTED_MODULE_1__workbench_filter__["a" /* WorkbenchFilter */]();
        this._updateControls(this._myWorkbenchFilter_fields, this._workbenchFilterControls, wbf);
        this._updateControls(this._workbenchFreeText_fields, this._workbenchFreeTextControls, this.myWorkbenchFreeText);
        this._workbenchFilterService.deleteFilter();
        this._workbenchFilterService.deleteUrlSearchParams();
        this.filternotready = false;
    };
    WorkbenchFilterComponent.prototype.onSubmit = function (form) {
        // check each FormControl for changes
        if (form.dirty || this.cleared) {
            this.filternotready = true;
            var wbf = {};
            var urlSearchParams = 'view=workbench';
            // the following check is a hack because the Status field is set to Open by default,
            // meaning it doesn't make the form dirty because the field may not have changed value
            if (form.controls.workbenchfiltergroup.controls['status'].value === 'Open') {
                urlSearchParams += '&status=Open';
            }
            for (var i = 0, j = this._myWorkbenchFilter_fields.length; i < j; i++) {
                var field = form.controls.workbenchfiltergroup.controls[this._myWorkbenchFilter_fields[i]];
                if (field.dirty && field.value != null && field.value !== '') {
                    if (this._myWorkbenchFilter_fields[i] === 'request_date_after' ||
                        this._myWorkbenchFilter_fields[i] === 'request_date_before') {
                        var newval = ('0' + field.value.year).slice(-4)
                            + '-' + ('0' + field.value.month).slice(-2)
                            + '-' + ('0' + field.value.day).slice(-2);
                        wbf[this._myWorkbenchFilter_fields[i]] = newval;
                        urlSearchParams += '&' + this._myWorkbenchFilter_fields[i] + '=' + newval;
                    }
                    else {
                        wbf[this._myWorkbenchFilter_fields[i]] = field.value;
                        urlSearchParams += '&' + this._myWorkbenchFilter_fields[i] + '=' + field.value;
                    }
                }
            }
            for (var i = 0, j = this._workbenchFreeText_fields.length; i < j; i++) {
                var field = form.controls.workbenchfreetextgroup.controls[this._workbenchFreeText_fields[i]];
                if (field.dirty && field.value != null && field.value !== '') {
                    wbf[this._workbenchFreeText_fields[i]] = field.value;
                    urlSearchParams += '&' + this._workbenchFreeText_fields[i] + '=' + field.value;
                }
            }
            this.filternotready = false;
            this._workbenchFilterService.setFilter(wbf);
            this._workbenchFilterService.setUrlSearchParams(urlSearchParams);
            this.onFilter.emit(urlSearchParams);
        }
        this.cleared = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], WorkbenchFilterComponent.prototype, "onFilter", void 0);
    WorkbenchFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'workbench-filter',
            template: __webpack_require__("../../../../../src/workbench/workbench-filter.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__workbench_filter_service__["a" /* WorkbenchFilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__workbench_filter_service__["a" /* WorkbenchFilterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__cases_case_service__["a" /* CaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cases_case_service__["a" /* CaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__tags_tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tags_tag_service__["a" /* TagService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__systemunits_systemunit_service__["a" /* SystemunitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__systemunits_systemunit_service__["a" /* SystemunitService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__users_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__users_user_service__["a" /* UserService */]) === "function" && _f || Object])
    ], WorkbenchFilterComponent);
    return WorkbenchFilterComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=workbench-filter.component.js.map

/***/ }),

/***/ "../../../../../src/workbench/workbench-filter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchFilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workbench_filter__ = __webpack_require__("../../../../../src/workbench/workbench-filter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkbenchFilterService = /** @class */ (function () {
    function WorkbenchFilterService() {
        this._myWorkbenchFilter = new __WEBPACK_IMPORTED_MODULE_1__workbench_filter__["a" /* WorkbenchFilter */]();
        this._myWorkbenchFilterUrlSearchParams = '';
    }
    WorkbenchFilterService.prototype.getFilter = function () {
        return this._myWorkbenchFilter;
    };
    WorkbenchFilterService.prototype.getUrlSearchParams = function () {
        return this._myWorkbenchFilterUrlSearchParams;
    };
    WorkbenchFilterService.prototype.setFilter = function (newWorkbenchFilterValues) {
        for (var prop in newWorkbenchFilterValues) {
            this._myWorkbenchFilter[prop] = newWorkbenchFilterValues[prop];
            sessionStorage.setItem(prop, newWorkbenchFilterValues[prop]);
        }
    };
    WorkbenchFilterService.prototype.setUrlSearchParams = function (newUrlSearchParams) {
        this._myWorkbenchFilterUrlSearchParams = newUrlSearchParams;
        sessionStorage.setItem('filterUrlSearchParams', newUrlSearchParams);
    };
    WorkbenchFilterService.prototype.deleteFilter = function () {
        for (var prop in this._myWorkbenchFilter) {
            sessionStorage.removeItem(prop);
        }
    };
    WorkbenchFilterService.prototype.deleteUrlSearchParams = function () {
        sessionStorage.removeItem('filterUrlSearchParams');
    };
    WorkbenchFilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WorkbenchFilterService);
    return WorkbenchFilterService;
}());

//# sourceMappingURL=workbench-filter.service.js.map

/***/ }),

/***/ "../../../../../src/workbench/workbench-filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchFilter; });
var WorkbenchFilter = /** @class */ (function () {
    function WorkbenchFilter(status, case_number, case_reference, request_date_after, request_date_before, distance_from, distance_to, analyst, qc_reviewer, cbrs_unit, tags, street, city, priority, on_hold, invalid, duplicate, id) {
        this.status = status;
        this.case_number = case_number;
        this.case_reference = case_reference;
        this.request_date_after = request_date_after;
        this.request_date_before = request_date_before;
        this.distance_from = distance_from;
        this.distance_to = distance_to;
        this.analyst = analyst;
        this.qc_reviewer = qc_reviewer;
        this.cbrs_unit = cbrs_unit;
        this.tags = tags;
        this.street = street;
        this.city = city;
        this.priority = priority;
        this.on_hold = on_hold;
        this.invalid = invalid;
        this.duplicate = duplicate;
        this.id = id;
    }
    return WorkbenchFilter;
}());

//# sourceMappingURL=workbench-filter.js.map

/***/ }),

/***/ "../../../../../src/workbench/workbench-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <table class=\"dms-table table table-bordered\">\r\n        <thead>\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    <a (click)=\"sort(col.name)\" class=\"gridHeader\">{{col.descr}} <i class=\"fa fa-sort\"></i></a>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let row of rows\" (click)=\"onClick(row)\">\r\n                <td *ngFor=\"let col of columns\">\r\n                    <span *ngIf=\"row[col.name] !== true && row[col.name] !== false\">{{row[col.name]}}</span>\r\n                    <span *ngIf=\"row[col.name] === true\"><i class=\"fa fa-check true-false-icon\"></i></span>\r\n                    <span *ngIf=\"row[col.name] === false\"><i class=\"fa fa-close true-false-icon\"></i></span>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/workbench/workbench-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_grid__ = __webpack_require__("../../../../../src/grid/grid.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkbenchGridComponent = /** @class */ (function (_super) {
    __extends(WorkbenchGridComponent, _super);
    function WorkbenchGridComponent(_router) {
        var _this = _super.call(this) || this;
        _this._router = _router;
        return _this;
    }
    WorkbenchGridComponent.prototype.onClick = function (row) {
        this._router.navigate(['/workbench', row.id]);
    };
    WorkbenchGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'workbench-grid',
            inputs: ['rows: rows', 'columns: columns'],
            template: __webpack_require__("../../../../../src/workbench/workbench-grid.component.html"),
            styles: ['.gridHeader {cursor:pointer;}']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], WorkbenchGridComponent);
    return WorkbenchGridComponent;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__grid_grid__["a" /* Grid */]));

//# sourceMappingURL=workbench-grid.component.js.map

/***/ }),

/***/ "../../../../../src/workbench/workbench-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!notready\" align=\"center\" id=\"loading-spinner\"><i class=\"fa fa-circle-o-notch fa-spin fa-3x fa-fw\"></i></div>\r\n<div [hidden]=\"notready\">\r\n    <button class=\"filter-cases-btn\" (click)=\"toggleFilter()\"><i class=\"fa fa-filter\"></i> Filter Cases</button>\r\n    <workbench-filter [hidden]=\"hideFilter\" (onFilter)=\"onFilter($event)\"></workbench-filter>\r\n    <div *ngIf=\"noCasesFound\" align=\"center\"><br /><br />No cases found.</div>\r\n    <div *ngIf=\"!noCasesFound\"><workbench-grid [rows]=\"cases_properties\" [columns]=\"columns\"></workbench-grid></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/workbench/workbench-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cases_case_service__ = __webpack_require__("../../../../../src/cases/case.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workbench_filter_component__ = __webpack_require__("../../../../../src/workbench/workbench-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_column__ = __webpack_require__("../../../../../src/grid/column.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_utilities__ = __webpack_require__("../../../../../src/app.utilities.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WorkbenchListComponent = /** @class */ (function () {
    function WorkbenchListComponent(_route, _router, _caseService) {
        this._route = _route;
        this._router = _router;
        this._caseService = _caseService;
        this.cases_properties = [];
        this.notready = true;
        this.hideFilter = true;
        this.noCasesFound = false;
    }
    WorkbenchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._route.queryParams
            .subscribe(function (params) {
            if (params['tags']) {
                _this.tag_ID = params['tags'];
                var urlSearchParams = 'view=workbench&tags=' + params['tags'];
                _this._getCases(urlSearchParams);
                _this._getColumns();
            }
            else if (sessionStorage.getItem('filterUrlSearchParams')) {
                _this._getCases(sessionStorage.getItem('filterUrlSearchParams'));
                _this._getColumns();
            }
            else {
                _this._getCases();
                _this._getColumns();
            }
        });
    };
    WorkbenchListComponent.prototype.ngOnDestroy = function () {
        if (this._params) {
            this._params.unsubscribe();
        }
    };
    WorkbenchListComponent.prototype.ngAfterViewInit = function () {
        this.filterComponent.myWorkbenchFilter.tags = [+this.tag_ID];
    };
    WorkbenchListComponent.prototype.toggleFilter = function () {
        this.hideFilter ? this.hideFilter = false : this.hideFilter = true;
    };
    WorkbenchListComponent.prototype.onFilter = function (urlSearchParams) {
        this._getCases(urlSearchParams);
    };
    WorkbenchListComponent.prototype._getCases = function (newUrlSearchParams) {
        var _this = this;
        var urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'view=workbench&status=Open';
        this._caseService.getCases(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */](urlSearchParams))
            .subscribe(function (cases) {
            _this._cases = cases;
            if (_this._cases.length > 0) {
                _this.cases_properties.length = 0;
                for (var i = 0, j = _this._cases.length; i < j; i++) {
                    var case_property = _this._cases[i];
                    var address = case_property.property_string.split(',');
                    case_property.street = address[0];
                    case_property.city = address[2];
                    _this.cases_properties.push(case_property);
                    if (_this._cases.length === _this.cases_properties.length) {
                        if (!newUrlSearchParams) {
                            _this._router.navigate(['/workbench']);
                        }
                    }
                }
                _this.noCasesFound = false;
            }
            else {
                _this.noCasesFound = true;
            }
            _this._sortAndShow();
        }, function (error) { return _this._errorMessage = error; });
    };
    WorkbenchListComponent.prototype._getColumns = function () {
        this.columns = [
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('status', 'Status'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('request_date', 'Request Date'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('id', 'Case ID'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('case_reference', 'Case Reference'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('distance', 'Distance'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('analyst_string', 'Analyst'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('qc_reviewer_string', 'QC Review'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('cbrs_unit_string', 'CBRS Unit'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('street', 'Street Address'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('city', 'City'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('priority', 'Priority'),
            new __WEBPACK_IMPORTED_MODULE_5__grid_column__["a" /* Column */]('duplicate', 'Duplicate of'),
        ];
    };
    WorkbenchListComponent.prototype._sortAndShow = function () {
        this.cases_properties.sort(__WEBPACK_IMPORTED_MODULE_6__app_utilities__["a" /* APP_UTILITIES */].dynamicSortMultiple(['-priority', 'id']));
        this.notready = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__workbench_filter_component__["a" /* WorkbenchFilterComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__workbench_filter_component__["a" /* WorkbenchFilterComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__workbench_filter_component__["a" /* WorkbenchFilterComponent */]) === "function" && _a || Object)
    ], WorkbenchListComponent.prototype, "filterComponent", void 0);
    WorkbenchListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/workbench/workbench-list.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormBuilder */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__cases_case_service__["a" /* CaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cases_case_service__["a" /* CaseService */]) === "function" && _d || Object])
    ], WorkbenchListComponent);
    return WorkbenchListComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=workbench-list.component.js.map

/***/ }),

/***/ "../../../../../src/workbench/workbench.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WorkbenchComponent = /** @class */ (function () {
    function WorkbenchComponent() {
    }
    WorkbenchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: "<navbar></navbar><router-outlet></router-outlet>",
        })
    ], WorkbenchComponent);
    return WorkbenchComponent;
}());

//# sourceMappingURL=workbench.component.js.map

/***/ }),

/***/ "../../../../../src/workbench/workbench.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkbenchRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__ = __webpack_require__("../../../../../src/authentication/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workbench_component__ = __webpack_require__("../../../../../src/workbench/workbench.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workbench_detail_component__ = __webpack_require__("../../../../../src/workbench/workbench-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workbench_list_component__ = __webpack_require__("../../../../../src/workbench/workbench-list.component.ts");




var WorkbenchRoutes = [
    {
        path: '',
        redirectTo: '/workbench',
        pathMatch: 'full'
    },
    {
        path: 'workbench',
        component: __WEBPACK_IMPORTED_MODULE_1__workbench_component__["a" /* WorkbenchComponent */],
        children: [
            {
                path: 'new',
                component: __WEBPACK_IMPORTED_MODULE_2__workbench_detail_component__["a" /* WorkbenchDetailComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_2__workbench_detail_component__["a" /* WorkbenchDetailComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__workbench_list_component__["a" /* WorkbenchListComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0__authentication_authentication_guard__["a" /* AuthenticationGuard */]]
            }
        ]
    }
];
//# sourceMappingURL=workbench.routes.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map