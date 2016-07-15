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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var is_loggedin_1 = require('./authentication/is-loggedin');
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.hideNavbar = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.hideNavbar = !is_loggedin_1.isLoggedin();
        this.first_name = sessionStorage.getItem('first_name');
        this.last_name = sessionStorage.getItem('last_name');
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            template: "\n        <nav [hidden]=\"hideNavbar\">\n            <div style=\"float: left;\">\n                <!-- <a [routerLink]=\"['/workbench']\">Workbench</a> -->\n                <a href=\"/workbench\">Workbench</a>\n                <a href=\"../../cbra/cbrarequests/\">Create Case</a>\n                <!-- <a href=\"/reports\">Reports</a> -->\n                <a [routerLink]=\"['/tags']\">Tags</a>\n            </div>\n            <div style=\"float: right;\">\n                <!-- <input type=\"text\">\n                <button>Search</button>\n                <button>Reset</button> -->\n                User: {{ first_name }} {{ last_name }} <a [routerLink]=\"['/logout']\" (click)=\"onLogout()\">Logout</a>\n            </div>\n        </nav>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map