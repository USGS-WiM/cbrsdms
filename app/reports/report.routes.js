System.register(['../authentication/authentication.guard', './report.component', './report-list.component', './report-cases-by-unit.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var authentication_guard_1, report_component_1, report_list_component_1, report_cases_by_unit_component_1;
    var ReportRoutes;
    return {
        setters:[
            function (authentication_guard_1_1) {
                authentication_guard_1 = authentication_guard_1_1;
            },
            function (report_component_1_1) {
                report_component_1 = report_component_1_1;
            },
            function (report_list_component_1_1) {
                report_list_component_1 = report_list_component_1_1;
            },
            function (report_cases_by_unit_component_1_1) {
                report_cases_by_unit_component_1 = report_cases_by_unit_component_1_1;
            }],
        execute: function() {
            exports_1("ReportRoutes", ReportRoutes = [
                {
                    path: '',
                    redirectTo: 'reports',
                    pathMatch: 'full'
                },
                {
                    path: 'reports',
                    component: report_component_1.ReportComponent,
                    children: [
                        {
                            path: 'casesbyunit',
                            component: report_cases_by_unit_component_1.ReportCasesByUnitComponent,
                            canActivate: [authentication_guard_1.AuthenticationGuard]
                        },
                        {
                            path: '',
                            component: report_list_component_1.ReportListComponent,
                            canActivate: [authentication_guard_1.AuthenticationGuard]
                        }
                    ]
                }
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU1hLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBWiwwQkFBQSxZQUFZLEdBQVc7Z0JBQ2hDO29CQUNJLElBQUksRUFBRSxFQUFFO29CQUNSLFVBQVUsRUFBRSxTQUFTO29CQUNyQixTQUFTLEVBQUUsTUFBTTtpQkFDcEI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLFNBQVM7b0JBQ2YsU0FBUyxFQUFFLGtDQUFlO29CQUMxQixRQUFRLEVBQUU7d0JBQ047NEJBQ0ksSUFBSSxFQUFFLGFBQWE7NEJBQ25CLFNBQVMsRUFBRSwyREFBMEI7NEJBQ3JDLFdBQVcsRUFBRSxDQUFDLDBDQUFtQixDQUFDO3lCQUNyQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUUsRUFBRTs0QkFDUixTQUFTLEVBQUUsMkNBQW1COzRCQUM5QixXQUFXLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQzt5QkFDckM7cUJBQ0o7aUJBQ0o7YUFDSixDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkd1YXJkfSAgICBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5ndWFyZCc7XHJcbmltcG9ydCB7UmVwb3J0Q29tcG9uZW50fSBmcm9tICcuL3JlcG9ydC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlcG9ydExpc3RDb21wb25lbnR9IGZyb20gJy4vcmVwb3J0LWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHtSZXBvcnRDYXNlc0J5VW5pdENvbXBvbmVudH0gZnJvbSAnLi9yZXBvcnQtY2FzZXMtYnktdW5pdC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlcG9ydFJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIHJlZGlyZWN0VG86ICdyZXBvcnRzJyxcclxuICAgICAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAncmVwb3J0cycsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZXBvcnRDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJ2Nhc2VzYnl1bml0JyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUmVwb3J0Q2FzZXNCeVVuaXRDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhlbnRpY2F0aW9uR3VhcmRdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBSZXBvcnRMaXN0Q29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoZW50aWNhdGlvbkd1YXJkXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dOyJdfQ==