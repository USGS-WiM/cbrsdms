"use strict";
function isLoggedin() {
    return (!!sessionStorage.getItem('username') && !!sessionStorage.getItem('password'));
}
exports.isLoggedin = isLoggedin;
//# sourceMappingURL=is-loggedin.js.map