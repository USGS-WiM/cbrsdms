"use strict";
var User = (function () {
    function User(id, username, first_name, last_name, email, groups, user_permissions, is_superuser, is_staff, is_active) {
        this.id = id;
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.groups = groups;
        this.user_permissions = user_permissions;
        this.is_superuser = is_superuser;
        this.is_staff = is_staff;
        this.is_active = is_active;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map