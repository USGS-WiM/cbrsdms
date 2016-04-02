System.register(['angular2/core', 'angular2/router', 'angular2/http', './case.service', './case-list.component', './case-edit.component', '../grid/grid'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, case_service_1, case_list_component_1, case_edit_component_1, grid_1;
    var CaseComponent;
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
            function (case_list_component_1_1) {
                case_list_component_1 = case_list_component_1_1;
            },
            function (case_edit_component_1_1) {
                case_edit_component_1 = case_edit_component_1_1;
            },
            function (grid_1_1) {
                grid_1 = grid_1_1;
            }],
        execute: function() {
            CaseComponent = (function () {
                function CaseComponent() {
                }
                CaseComponent = __decorate([
                    core_1.Component({
                        template: "\n    <router-outlet></router-outlet>\n    ",
                        directives: [grid_1.Grid, router_1.RouterOutlet],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            case_service_1.CaseService,
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'CaseList', component: case_list_component_1.CaseListComponent, useAsDefault: true },
                        { path: '/:id', name: 'CaseDetail', component: case_edit_component_1.CaseEditComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], CaseComponent);
                return CaseComponent;
            }());
            exports_1("CaseComponent", CaseComponent);
        }
    }
});
//# sourceMappingURL=case.component.js.map