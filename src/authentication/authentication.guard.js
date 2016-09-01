System.register(['../authentication/is-loggedin'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var is_loggedin_1;
    var AuthenticationGuard;
    return {
        setters:[
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            }],
        execute: function() {
            AuthenticationGuard = (function () {
                function AuthenticationGuard() {
                }
                AuthenticationGuard.prototype.canActivate = function () {
                    return is_loggedin_1.isLoggedin();
                };
                return AuthenticationGuard;
            }());
            exports_1("AuthenticationGuard", AuthenticationGuard);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZW50aWNhdGlvbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUdBO2dCQUFBO2dCQUlBLENBQUM7Z0JBSEcseUNBQVcsR0FBWDtvQkFDSSxNQUFNLENBQUMsd0JBQVUsRUFBRSxDQUFDO2dCQUN4QixDQUFDO2dCQUNMLDBCQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCxxREFJQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYW5BY3RpdmF0ZX0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtpc0xvZ2dlZGlufSAgICAgZnJvbSAnLi4vYXV0aGVudGljYXRpb24vaXMtbG9nZ2VkaW4nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gaXNMb2dnZWRpbigpO1xyXG4gICAgfVxyXG59Il19