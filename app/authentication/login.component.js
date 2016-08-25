System.register(['@angular/core', '@angular/forms', '@angular/router', './authentication.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, authentication_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
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
                        .subscribe(function (user) { return _this.router.navigateByUrl('workbench'); }, function () { _this.error = true; });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
                        templateUrl: 'app/authentication/login.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, authentication_service_1.AuthenticationService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBR0ksd0JBQVksRUFBZSxFQUFTLElBQTJCLEVBQVMsTUFBYztvQkFBbEQsU0FBSSxHQUFKLElBQUksQ0FBdUI7b0JBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFEdEYsVUFBSyxHQUFZLEtBQUssQ0FBQztvQkFFbkIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQixRQUFRLEVBQUcsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLFFBQVEsRUFBRyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDdkMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsaUNBQVEsR0FBUixVQUFTLEtBQVU7b0JBQW5CLGlCQU9DO29CQU5HLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQUEsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDO3lCQUMxQyxTQUFTLENBQ04sVUFBQyxJQUFTLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBdEMsQ0FBc0MsRUFDckQsY0FBUSxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDL0IsQ0FBQztnQkFDVixDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixVQUFVLEVBQUUsQ0FBRSxnQ0FBd0IsQ0FBRTt3QkFDeEMsV0FBVyxFQUFFLHlDQUF5QztxQkFDekQsQ0FBQzs7a0NBQUE7Z0JBb0JGLHFCQUFDO1lBQUQsQ0FBQyxBQWxCRCxJQWtCQztZQWxCRCwyQ0FrQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xvZ2luJyxcclxuICAgIGRpcmVjdGl2ZXM6IFsgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTIF0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9hdXRoZW50aWNhdGlvbi9sb2dpbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBlcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgYXV0aDogQXV0aGVudGljYXRpb25TZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAgWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXQodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpKSB7dGhpcy5hdXRoLmxvZ291dCgpO31cclxuICAgICAgICB0aGlzLmF1dGgubG9naW4odmFsdWUudXNlcm5hbWUsIHZhbHVlLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgKHVzZXI6IGFueSkgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnd29ya2JlbmNoJyksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7IHRoaXMuZXJyb3IgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19