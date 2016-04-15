System.register(['angular2/core', 'angular2/http', 'angular2/router', './cases/case.service', './casefiles/casefile.service', './properties/property.service', './requesters/requester.service', './authentication/authentication.service', './authentication/login.component', './authentication/logout.component', './workbench/workbench.component', './authentication/is-loggedin'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, case_service_1, casefile_service_1, property_service_1, requester_service_1, authentication_service_1, login_component_1, logout_component_1, workbench_component_1, is_loggedin_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (case_service_1_1) {
                case_service_1 = case_service_1_1;
            },
            function (casefile_service_1_1) {
                casefile_service_1 = casefile_service_1_1;
            },
            function (property_service_1_1) {
                property_service_1 = property_service_1_1;
            },
            function (requester_service_1_1) {
                requester_service_1 = requester_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (workbench_component_1_1) {
                workbench_component_1 = workbench_component_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.links = [];
                    this.resetLinks();
                }
                AppComponent.prototype.ngOnChanges = function (changes) {
                    console.log('ngOnChanges - myProp = ' + changes['myProp'].currentValue);
                    this.resetLinks();
                };
                AppComponent.prototype.resetLinks = function () {
                    if (is_loggedin_1.isLoggedin()) {
                        this.links.length = 0;
                        this.links.push('Logout');
                        this.links.push('Workbench');
                    }
                    else {
                        this.links.length = 0;
                        this.links.push('Login');
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        //templateUrl: 'app/app.component.html',
                        template: "\n        <h1>CBRA Determination Management</h1>\n        <div style=\"margin-left:100px;\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            property_service_1.PropertyService,
                            requester_service_1.RequesterService,
                            case_service_1.CaseService,
                            casefile_service_1.CasefileService,
                            authentication_service_1.AuthenticationService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true },
                        { path: '/logout', name: 'Logout', component: logout_component_1.LogoutComponent },
                        { path: '/workbench/...', name: 'Workbench', component: workbench_component_1.WorkbenchComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map