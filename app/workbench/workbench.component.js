System.register(['angular2/core', 'angular2/router', 'angular2/http', '../cases/case.service', './workbench-list.component', './workbench-detail.component', '../grid/grid', '../authentication/authentication.service', '../authentication/is-loggedin'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, case_service_1, workbench_list_component_1, workbench_detail_component_1, grid_1, authentication_service_1, is_loggedin_1;
    var WorkbenchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (case_service_1_1) {
                case_service_1 = case_service_1_1;
            },
            function (workbench_list_component_1_1) {
                workbench_list_component_1 = workbench_list_component_1_1;
            },
            function (workbench_detail_component_1_1) {
                workbench_detail_component_1 = workbench_detail_component_1_1;
            },
            function (grid_1_1) {
                grid_1 = grid_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            }],
        execute: function() {
            WorkbenchComponent = (function () {
                function WorkbenchComponent(auth, router) {
                    this.auth = auth;
                    this.router = router;
                    this.first_name = sessionStorage.getItem('first_name');
                    this.last_name = sessionStorage.getItem('last_name');
                }
                WorkbenchComponent.prototype.onLogout = function () {
                    var _this = this;
                    this.auth.logout()
                        .subscribe(function () { return _this.router.navigate(['/Login']); });
                };
                WorkbenchComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div style=\"float: left;\">\n        <a [routerLink]=\"['Workbench']\">Workbench</a>\n        <!-- <a href=\"../../cbra/cbrarequests/\">Create Case</a>\n        <a href=\"/reports\">Reports</a>\n        <a href=\"/tags\">Tags</a> -->\n    </div>\n    <div style=\"float: right;\">\n        <!-- <input type=\"text\">\n        <button>Search</button>\n        <button>Reset</button> -->\n        User: {{ first_name }} {{ last_name }} <a href=\"/logout\" (click)=\"onLogout()\">Logout</a>\n    </div>\n    <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES, grid_1.Grid, router_1.RouterOutlet],
                        providers: [http_1.HTTP_PROVIDERS, case_service_1.CaseService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'WorkbenchList', component: workbench_list_component_1.WorkbenchListComponent, useAsDefault: true },
                        { path: '/cases/:id', name: 'WorkbenchDetail', component: workbench_detail_component_1.WorkbenchDetailComponent },
                    ]),
                    router_1.CanActivate(function () { return is_loggedin_1.isLoggedin(); }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
                ], WorkbenchComponent);
                return WorkbenchComponent;
            }());
            exports_1("WorkbenchComponent", WorkbenchComponent);
        }
    }
});
//# sourceMappingURL=workbench.component.js.map