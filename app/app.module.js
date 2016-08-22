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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var case_service_1 = require('./cases/case.service');
var casefile_service_1 = require('./casefiles/casefile.service');
var casetag_service_1 = require('./casetags/casetag.service');
var comment_service_1 = require('./comments/comment.service');
var determination_service_1 = require('./determinations/determination.service');
var fieldoffice_service_1 = require('./fieldoffices/fieldoffice.service');
var prohibitiondate_service_1 = require('./prohibitiondates/prohibitiondate.service');
var systemmap_service_1 = require('./systemmaps/systemmap.service');
var systemunit_service_1 = require('./systemunits/systemunit.service');
var user_service_1 = require('./users/user.service');
var property_service_1 = require('./properties/property.service');
var requester_service_1 = require('./requesters/requester.service');
var authentication_service_1 = require('./authentication/authentication.service');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar.component');
var login_component_1 = require('./authentication/login.component');
var tag_list_component_1 = require('./tags/tag-list.component');
var tag_detail_component_1 = require('./tags/tag-detail.component');
var workbench_component_1 = require('./workbench/workbench.component');
var workbench_list_component_1 = require('./workbench/workbench-list.component');
var workbench_grid_component_1 = require('./workbench/workbench-grid.component');
var workbench_filter_component_1 = require('./workbench/workbench-filter.component');
var workbench_detail_component_1 = require('./workbench/workbench-detail.component');
var report_component_1 = require('./reports/report.component');
var report_list_component_1 = require('./reports/report-list.component');
var report_grid_component_1 = require('./reports/report-grid.component');
var report_cases_by_unit_component_1 = require('./reports/report-cases-by-unit.component');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_routing_1.routing, platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule, http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent, navbar_component_1.NavbarComponent, login_component_1.LoginComponent, tag_list_component_1.TagListComponent, tag_detail_component_1.TagDetailComponent,
                workbench_component_1.WorkbenchComponent, workbench_list_component_1.WorkbenchListComponent, workbench_grid_component_1.WorkbenchGridComponent, workbench_filter_component_1.WorkbenchFilterComponent, workbench_detail_component_1.WorkbenchDetailComponent,
                report_component_1.ReportComponent, report_list_component_1.ReportListComponent, report_grid_component_1.ReportGridComponent, report_cases_by_unit_component_1.ReportCasesByUnitComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders, case_service_1.CaseService, casefile_service_1.CasefileService, casetag_service_1.CasetagService, property_service_1.PropertyService, requester_service_1.RequesterService, authentication_service_1.AuthenticationService,
                comment_service_1.CommentService, determination_service_1.DeterminationService, fieldoffice_service_1.FieldofficeService, prohibitiondate_service_1.ProhibitiondateService, systemmap_service_1.SystemmapService, systemunit_service_1.SystemunitService, user_service_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map