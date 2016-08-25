System.register(['../authentication/authentication.guard', './tag-detail.component', './tag-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var authentication_guard_1, tag_detail_component_1, tag_list_component_1;
    var TagRoutes;
    return {
        setters:[
            function (authentication_guard_1_1) {
                authentication_guard_1 = authentication_guard_1_1;
            },
            function (tag_detail_component_1_1) {
                tag_detail_component_1 = tag_detail_component_1_1;
            },
            function (tag_list_component_1_1) {
                tag_list_component_1 = tag_list_component_1_1;
            }],
        execute: function() {
            exports_1("TagRoutes", TagRoutes = [
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
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRhZy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUthLFNBQVM7Ozs7Ozs7Ozs7Ozs7WUFBVCx1QkFBQSxTQUFTLEdBQVc7Z0JBQzdCO29CQUNJLElBQUksRUFBRSxTQUFTO29CQUNmLFNBQVMsRUFBRSx5Q0FBa0I7b0JBQzdCLFdBQVcsRUFBRSxDQUFDLDBDQUFtQixDQUFDO2lCQUNyQztnQkFDRDtvQkFDSSxJQUFJLEVBQUUsTUFBTTtvQkFDWixTQUFTLEVBQUUscUNBQWdCO29CQUMzQixXQUFXLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQztpQkFDckM7YUFDSixDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkd1YXJkfSAgICBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5ndWFyZCc7XHJcbmltcG9ydCB7VGFnRGV0YWlsQ29tcG9uZW50fSBmcm9tICcuL3RhZy1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHtUYWdMaXN0Q29tcG9uZW50fSBmcm9tICcuL3RhZy1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnUm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RhZy86aWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogVGFnRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aGVudGljYXRpb25HdWFyZF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RhZ3MnLFxyXG4gICAgICAgIGNvbXBvbmVudDogVGFnTGlzdENvbXBvbmVudCxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhlbnRpY2F0aW9uR3VhcmRdXHJcbiAgICB9XHJcbl07Il19