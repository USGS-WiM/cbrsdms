"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var case_service_1 = require('../cases/case.service');
var grid_1 = require('../grid/grid');
var authentication_service_1 = require('../authentication/authentication.service');
var WorkbenchComponent = (function () {
    function WorkbenchComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.first_name = sessionStorage.getItem('first_name');
        this.last_name = sessionStorage.getItem('last_name');
    }
    WorkbenchComponent.prototype.onLogout = function () {
        this.auth.logout();
    };
    WorkbenchComponent = __decorate([
        core_1.Component({
            template: "\n    <div style=\"float: left;\">\n        <a [routerLink]=\"['/workbench']\">Workbench</a>\n        <!-- <a href=\"../../cbra/cbrarequests/\">Create Case</a>\n        <a href=\"/reports\">Reports</a>\n        <a href=\"/tags\">Tags</a> -->\n    </div>\n    <div style=\"float: right;\">\n        <!-- <input type=\"text\">\n        <button>Search</button>\n        <button>Reset</button> -->\n        User: {{ first_name }} {{ last_name }} <a href=\"/logout\" (click)=\"onLogout()\">Logout</a>\n    </div>\n    <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, grid_1.Grid],
            providers: [http_1.HTTP_PROVIDERS, case_service_1.CaseService]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], WorkbenchComponent);
    return WorkbenchComponent;
}());
exports.WorkbenchComponent = WorkbenchComponent;
//# sourceMappingURL=workbench.component.js.map