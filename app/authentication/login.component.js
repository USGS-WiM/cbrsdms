System.register(['angular2/core', 'angular2/common', 'angular2/router', './authentication.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, authentication_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(fb, auth, router) {
                    this.auth = auth;
                    this.router = router;
                    this.error = false;
                    this.form = fb.group({
                        username: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required]
                    });
                }
                LoginComponent.prototype.onSubmit = function (value) {
                    var _this = this;
                    if (sessionStorage.getItem('username')) {
                        this.auth.logout();
                    }
                    this.auth.login(value.username, value.password)
                        .subscribe(function (user) { return _this.router.navigate(['../Workbench']); }, function () { _this.error = true; });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [common_1.FORM_DIRECTIVES, common_1.NgIf],
                        template: "\n    <form [ngFormModel]=\"form\" (submit)=\"onSubmit(form.value)\">\n      <div *ngIf=\"error\">Check your password</div>\n      <div>\n        <label for=\"username\">Username</label>\n        <input type=\"text\" ngControl=\"username\">\n      </div>\n      <div>\n        <label for=\"password\">Password</label>\n        <input type=\"password\" ngControl=\"password\">\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" [disabled]=\"!form.valid\">Login</button>\n      </div>\n    </form>\n  "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, authentication_service_1.AuthenticationService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map