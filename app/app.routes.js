"use strict";
var router_1 = require('@angular/router');
var authentication_guard_1 = require('./authentication/authentication.guard');
var authentication_routes_1 = require('./authentication/authentication.routes');
var workbench_routes_1 = require('./workbench/workbench.routes');
var tag_routes_1 = require('./tags/tag.routes');
exports.routes = authentication_routes_1.AuthenticationRoutes.concat(workbench_routes_1.WorkbenchRoutes, tag_routes_1.TagRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    authentication_guard_1.AuthenticationGuard
];
//# sourceMappingURL=app.routes.js.map