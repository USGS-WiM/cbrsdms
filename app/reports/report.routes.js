"use strict";
var authentication_guard_1 = require('../authentication/authentication.guard');
var report_component_1 = require('./report.component');
var report_list_component_1 = require('./report-list.component');
var report_cases_by_unit_component_1 = require('./report-cases-by-unit.component');
exports.ReportRoutes = [
    {
        path: '',
        redirectTo: 'reports',
        terminal: true
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
];
//# sourceMappingURL=report.routes.js.map