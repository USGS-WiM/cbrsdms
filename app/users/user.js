System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(username, first_name, last_name, email, groups, user_permissions, is_superuser, is_staff, is_active, id) {
                    this.username = username;
                    this.first_name = first_name;
                    this.last_name = last_name;
                    this.email = email;
                    this.groups = groups;
                    this.user_permissions = user_permissions;
                    this.is_superuser = is_superuser;
                    this.is_staff = is_staff;
                    this.is_active = is_active;
                    this.id = id;
                }
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map