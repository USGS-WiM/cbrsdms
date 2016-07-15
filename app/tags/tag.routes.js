"use strict";
var authentication_guard_1 = require('../authentication/authentication.guard');
var tag_detail_component_1 = require('./tag-detail.component');
var tag_list_component_1 = require('./tag-list.component');
exports.TagRoutes = [
    {
        path: 'tag/:id',
        component: tag_detail_component_1.TagDetailComponent,
        canActivate: [authentication_guard_1.AuthenticationGuard]
    },
    {
        path: 'tags',
        component: tag_list_component_1.TagListComponent,
        canActivate: [authentication_guard_1.AuthenticationGuard]
    }
];
//# sourceMappingURL=tag.routes.js.map