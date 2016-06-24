"use strict";
var is_loggedin_1 = require('../authentication/is-loggedin');
var AuthenticationGuard = (function () {
    function AuthenticationGuard() {
    }
    AuthenticationGuard.prototype.canActivate = function () {
        return is_loggedin_1.isLoggedin();
    };
    return AuthenticationGuard;
}());
exports.AuthenticationGuard = AuthenticationGuard;
//# sourceMappingURL=authentication.guard.js.map