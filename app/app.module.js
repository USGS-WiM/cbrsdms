System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/http', '@angular/router', './cases/case.service', './casefiles/casefile.service', './casetags/casetag.service', './comments/comment.service', './determinations/determination.service', './fieldoffices/fieldoffice.service', './prohibitiondates/prohibitiondate.service', './systemmaps/systemmap.service', './systemunits/systemunit.service', './users/user.service', './properties/property.service', './requesters/requester.service', './authentication/authentication.service', './app.component', './navbar.component', './authentication/login.component', './tags/tag-list.component', './tags/tag-detail.component', './workbench/workbench.component', './workbench/workbench-list.component', './workbench/workbench-grid.component', './workbench/workbench-filter.component', './workbench/workbench-detail.component', './reports/report.component', './reports/report-list.component', './reports/report-grid.component', './reports/report-cases-by-unit.component', './app.routing'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, http_1, router_1, case_service_1, casefile_service_1, casetag_service_1, comment_service_1, determination_service_1, fieldoffice_service_1, prohibitiondate_service_1, systemmap_service_1, systemunit_service_1, user_service_1, property_service_1, requester_service_1, authentication_service_1, app_component_1, navbar_component_1, login_component_1, tag_list_component_1, tag_detail_component_1, workbench_component_1, workbench_list_component_1, workbench_grid_component_1, workbench_filter_component_1, workbench_detail_component_1, report_component_1, report_list_component_1, report_grid_component_1, report_cases_by_unit_component_1, app_routing_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
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
            function (casetag_service_1_1) {
                casetag_service_1 = casetag_service_1_1;
            },
            function (comment_service_1_1) {
                comment_service_1 = comment_service_1_1;
            },
            function (determination_service_1_1) {
                determination_service_1 = determination_service_1_1;
            },
            function (fieldoffice_service_1_1) {
                fieldoffice_service_1 = fieldoffice_service_1_1;
            },
            function (prohibitiondate_service_1_1) {
                prohibitiondate_service_1 = prohibitiondate_service_1_1;
            },
            function (systemmap_service_1_1) {
                systemmap_service_1 = systemmap_service_1_1;
            },
            function (systemunit_service_1_1) {
                systemunit_service_1 = systemunit_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
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
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (tag_list_component_1_1) {
                tag_list_component_1 = tag_list_component_1_1;
            },
            function (tag_detail_component_1_1) {
                tag_detail_component_1 = tag_detail_component_1_1;
            },
            function (workbench_component_1_1) {
                workbench_component_1 = workbench_component_1_1;
            },
            function (workbench_list_component_1_1) {
                workbench_list_component_1 = workbench_list_component_1_1;
            },
            function (workbench_grid_component_1_1) {
                workbench_grid_component_1 = workbench_grid_component_1_1;
            },
            function (workbench_filter_component_1_1) {
                workbench_filter_component_1 = workbench_filter_component_1_1;
            },
            function (workbench_detail_component_1_1) {
                workbench_detail_component_1 = workbench_detail_component_1_1;
            },
            function (report_component_1_1) {
                report_component_1 = report_component_1_1;
            },
            function (report_list_component_1_1) {
                report_list_component_1 = report_list_component_1_1;
            },
            function (report_grid_component_1_1) {
                report_grid_component_1 = report_grid_component_1_1;
            },
            function (report_cases_by_unit_component_1_1) {
                report_cases_by_unit_component_1 = report_cases_by_unit_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            }],
        execute: function() {
            AppModule = (function () {
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
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpREE7Z0JBQUE7Z0JBQXdCLENBQUM7Z0JBZnpCO29CQUFDLGVBQVEsQ0FBQzt3QkFDTixPQUFPLEVBQUU7NEJBQ0QscUJBQU8sRUFBRSxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CLEVBQUUscUJBQVksRUFBRSxpQkFBVTt5QkFDckY7d0JBQ0wsWUFBWSxFQUFFOzRCQUNWLDRCQUFZLEVBQUUsa0NBQWUsRUFBRSxnQ0FBYyxFQUFFLHFDQUFnQixFQUFFLHlDQUFrQjs0QkFDbkYsd0NBQWtCLEVBQUUsaURBQXNCLEVBQUUsaURBQXNCLEVBQUUscURBQXdCLEVBQUUscURBQXdCOzRCQUN0SCxrQ0FBZSxFQUFFLDJDQUFtQixFQUFFLDJDQUFtQixFQUFFLDJEQUEwQjt5QkFDeEY7d0JBQ0QsU0FBUyxFQUFFOzRCQUNQLGlDQUFtQixFQUFFLDBCQUFXLEVBQUUsa0NBQWUsRUFBRSxnQ0FBYyxFQUFFLGtDQUFlLEVBQUUsb0NBQWdCLEVBQUUsOENBQXFCOzRCQUMzSCxnQ0FBYyxFQUFFLDRDQUFvQixFQUFFLHdDQUFrQixFQUFFLGdEQUFzQixFQUFFLG9DQUFnQixFQUFFLHNDQUFpQixFQUFFLDBCQUFXO3lCQUNySTt3QkFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO3FCQUM1QixDQUFDOzs2QkFBQTtnQkFDc0IsZ0JBQUM7WUFBRCxDQUFDLEFBQXpCLElBQXlCO1lBQXpCLGlDQUF5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtDYXNlU2VydmljZX0gICAgICAgZnJvbSAnLi9jYXNlcy9jYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge0Nhc2VmaWxlU2VydmljZX0gICBmcm9tICcuL2Nhc2VmaWxlcy9jYXNlZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtDYXNldGFnU2VydmljZX0gICAgICAgZnJvbSAnLi9jYXNldGFncy9jYXNldGFnLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NvbW1lbnRTZXJ2aWNlfSAgICAgICBmcm9tICcuL2NvbW1lbnRzL2NvbW1lbnQuc2VydmljZSc7XHJcbmltcG9ydCB7RGV0ZXJtaW5hdGlvblNlcnZpY2V9ICAgICAgIGZyb20gJy4vZGV0ZXJtaW5hdGlvbnMvZGV0ZXJtaW5hdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHtGaWVsZG9mZmljZVNlcnZpY2V9ICAgICAgIGZyb20gJy4vZmllbGRvZmZpY2VzL2ZpZWxkb2ZmaWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1Byb2hpYml0aW9uZGF0ZVNlcnZpY2V9ICAgICAgIGZyb20gJy4vcHJvaGliaXRpb25kYXRlcy9wcm9oaWJpdGlvbmRhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7U3lzdGVtbWFwU2VydmljZX0gICAgICAgZnJvbSAnLi9zeXN0ZW1tYXBzL3N5c3RlbW1hcC5zZXJ2aWNlJztcclxuaW1wb3J0IHtTeXN0ZW11bml0U2VydmljZX0gICAgICAgZnJvbSAnLi9zeXN0ZW11bml0cy9zeXN0ZW11bml0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSAgICAgICBmcm9tICcuL3VzZXJzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7UHJvcGVydHlTZXJ2aWNlfSAgIGZyb20gJy4vcHJvcGVydGllcy9wcm9wZXJ0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHtSZXF1ZXN0ZXJTZXJ2aWNlfSAgZnJvbSAnLi9yZXF1ZXN0ZXJzL3JlcXVlc3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvblNlcnZpY2V9IGZyb20gJy4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSAgIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSAgIGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TG9naW5Db21wb25lbnR9ICAgZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RhZ0xpc3RDb21wb25lbnR9ICAgZnJvbSAnLi90YWdzL3RhZy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7VGFnRGV0YWlsQ29tcG9uZW50fSAgIGZyb20gJy4vdGFncy90YWctZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V29ya2JlbmNoQ29tcG9uZW50fSAgIGZyb20gJy4vd29ya2JlbmNoL3dvcmtiZW5jaC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1dvcmtiZW5jaExpc3RDb21wb25lbnR9ICAgZnJvbSAnLi93b3JrYmVuY2gvd29ya2JlbmNoLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtXb3JrYmVuY2hHcmlkQ29tcG9uZW50fSAgIGZyb20gJy4vd29ya2JlbmNoL3dvcmtiZW5jaC1ncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V29ya2JlbmNoRmlsdGVyQ29tcG9uZW50fSAgIGZyb20gJy4vd29ya2JlbmNoL3dvcmtiZW5jaC1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtXb3JrYmVuY2hEZXRhaWxDb21wb25lbnR9ICAgZnJvbSAnLi93b3JrYmVuY2gvd29ya2JlbmNoLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlcG9ydENvbXBvbmVudH0gICBmcm9tICcuL3JlcG9ydHMvcmVwb3J0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7UmVwb3J0TGlzdENvbXBvbmVudH0gICBmcm9tICcuL3JlcG9ydHMvcmVwb3J0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtSZXBvcnRHcmlkQ29tcG9uZW50fSAgIGZyb20gJy4vcmVwb3J0cy9yZXBvcnQtZ3JpZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlcG9ydENhc2VzQnlVbml0Q29tcG9uZW50fSAgIGZyb20gJy4vcmVwb3J0cy9yZXBvcnQtY2FzZXMtYnktdW5pdC5jb21wb25lbnQnO1xyXG5pbXBvcnQge3JvdXRpbmcsIGFwcFJvdXRpbmdQcm92aWRlcnN9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICAgICAgcm91dGluZywgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFJvdXRlck1vZHVsZSwgSHR0cE1vZHVsZVxyXG4gICAgICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsIE5hdmJhckNvbXBvbmVudCwgTG9naW5Db21wb25lbnQsIFRhZ0xpc3RDb21wb25lbnQsIFRhZ0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBXb3JrYmVuY2hDb21wb25lbnQsIFdvcmtiZW5jaExpc3RDb21wb25lbnQsIFdvcmtiZW5jaEdyaWRDb21wb25lbnQsIFdvcmtiZW5jaEZpbHRlckNvbXBvbmVudCwgV29ya2JlbmNoRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIFJlcG9ydENvbXBvbmVudCwgUmVwb3J0TGlzdENvbXBvbmVudCwgUmVwb3J0R3JpZENvbXBvbmVudCwgUmVwb3J0Q2FzZXNCeVVuaXRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBhcHBSb3V0aW5nUHJvdmlkZXJzLCBDYXNlU2VydmljZSwgQ2FzZWZpbGVTZXJ2aWNlLCBDYXNldGFnU2VydmljZSwgUHJvcGVydHlTZXJ2aWNlLCBSZXF1ZXN0ZXJTZXJ2aWNlLCBBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgQ29tbWVudFNlcnZpY2UsIERldGVybWluYXRpb25TZXJ2aWNlLCBGaWVsZG9mZmljZVNlcnZpY2UsIFByb2hpYml0aW9uZGF0ZVNlcnZpY2UsIFN5c3RlbW1hcFNlcnZpY2UsIFN5c3RlbXVuaXRTZXJ2aWNlLCBVc2VyU2VydmljZVxyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fSJdfQ==