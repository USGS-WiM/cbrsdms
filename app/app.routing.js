"use strict";
var router_1 = require('@angular/router');
var authentication_guard_1 = require('./authentication/authentication.guard');
var authentication_routes_1 = require('./authentication/authentication.routes');
var workbench_routes_1 = require('./workbench/workbench.routes');
var report_routes_1 = require('./reports/report.routes');
var tag_routes_1 = require('./tags/tag.routes');
var routes = authentication_routes_1.AuthenticationRoutes.concat(workbench_routes_1.WorkbenchRoutes, report_routes_1.ReportRoutes, tag_routes_1.TagRoutes);
exports.appRoutingProviders = [
    authentication_guard_1.AuthenticationGuard
];
exports.routing = router_1.RouterModule.forRoot(routes); //, { enableTracing: true });
//# sourceMappingURL=app.routing.js.map