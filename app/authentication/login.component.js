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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var authentication_service_1 = require('./authentication.service');
var LoginComponent = (function () {
    function LoginComponent(fb, auth, router) {
        this.auth = auth;
        this.router = router;
        this.error = false;
        this.form = fb.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    }
    LoginComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (sessionStorage.getItem('username')) {
            this.auth.logout();
        }
        this.auth.login(value.username, value.password)
            .subscribe(function (user) { return _this.router.navigate(['/workbench']); }, function () { _this.error = true; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            template: "\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"login-form\">\n        <div *ngIf=\"error\">Check your password</div>\n        <div>\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\">\n        </div>\n        <div>\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\">\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n        </div>\n    </form>\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, authentication_service_1.AuthenticationService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map