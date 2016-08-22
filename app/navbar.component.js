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
var authentication_service_1 = require('./authentication/authentication.service');
var is_loggedin_1 = require('./authentication/is-loggedin');
var NavbarComponent = (function () {
    function NavbarComponent(auth, _router) {
        this.auth = auth;
        this._router = _router;
        this.hideNavbar = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.hideNavbar = !is_loggedin_1.isLoggedin();
        this.first_name = sessionStorage.getItem('first_name');
        this.last_name = sessionStorage.getItem('last_name');
    };
    NavbarComponent.prototype.onLogout = function () {
        this.auth.logout();
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            templateUrl: 'app/navbar.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map