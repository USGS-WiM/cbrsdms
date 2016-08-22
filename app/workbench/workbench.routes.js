"use strict";
var authentication_guard_1 = require('../authentication/authentication.guard');
var workbench_component_1 = require('./workbench.component');
var workbench_detail_component_1 = require('./workbench-detail.component');
var workbench_list_component_1 = require('./workbench-list.component');
exports.WorkbenchRoutes = [
    {
        path: '',
        redirectTo: '/workbench',
        pathMatch: 'full'
    },
    {
        path: 'workbench',
        component: workbench_component_1.WorkbenchComponent,
        children: [
            {
                path: ':id',
                component: workbench_detail_component_1.WorkbenchDetailComponent,
                canActivate: [authentication_guard_1.AuthenticationGuard]
            },
            {
                path: '',
                component: workbench_list_component_1.WorkbenchListComponent,
                canActivate: [authentication_guard_1.AuthenticationGuard]
            }
        ]
    }
];
//# sourceMappingURL=workbench.routes.js.map