"use strict";
var authentication_guard_1 = require('../authentication/authentication.guard');
var login_component_1 = require('../authentication/login.component');
var logout_component_1 = require('../authentication/logout.component');
exports.AuthenticationRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'logout',
        component: logout_component_1.LogoutComponent,
        canActivate: [authentication_guard_1.AuthenticationGuard]
    }
];
//# sourceMappingURL=authentication.routes.js.map