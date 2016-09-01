System.register(['../authentication/authentication.guard', './workbench.component', './workbench-detail.component', './workbench-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var authentication_guard_1, workbench_component_1, workbench_detail_component_1, workbench_list_component_1;
    var WorkbenchRoutes;
    return {
        setters:[
            function (authentication_guard_1_1) {
                authentication_guard_1 = authentication_guard_1_1;
            },
            function (workbench_component_1_1) {
                workbench_component_1 = workbench_component_1_1;
            },
            function (workbench_detail_component_1_1) {
                workbench_detail_component_1 = workbench_detail_component_1_1;
            },
            function (workbench_list_component_1_1) {
                workbench_list_component_1 = workbench_list_component_1_1;
            }],
        execute: function() {
            exports_1("WorkbenchRoutes", WorkbenchRoutes = [
                {
                    path: '',
                    redirectTo: '/workbench',
                    pathMatch: 'full'
                },
                {
                    path: 'workbench',
                    component: workbench_component_1.WorkbenchComponent,
                    children: [
                        {
                            path: ':id',
                            component: workbench_detail_component_1.WorkbenchDetailComponent,
                            canActivate: [authentication_guard_1.AuthenticationGuard]
                        },
                        {
                            path: '',
                            component: workbench_list_component_1.WorkbenchListComponent,
                            canActivate: [authentication_guard_1.AuthenticationGuard]
                        }
                    ]
                }
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2JlbmNoLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtiZW5jaC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU1hLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBZiw2QkFBQSxlQUFlLEdBQVc7Z0JBQ25DO29CQUNJLElBQUksRUFBRSxFQUFFO29CQUNSLFVBQVUsRUFBRSxZQUFZO29CQUN4QixTQUFTLEVBQUUsTUFBTTtpQkFDcEI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLFNBQVMsRUFBRSx3Q0FBa0I7b0JBQzdCLFFBQVEsRUFBRTt3QkFDTjs0QkFDSSxJQUFJLEVBQUUsS0FBSzs0QkFDWCxTQUFTLEVBQUUscURBQXdCOzRCQUNuQyxXQUFXLEVBQUUsQ0FBQywwQ0FBbUIsQ0FBQzt5QkFDckM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFFLEVBQUU7NEJBQ1IsU0FBUyxFQUFFLGlEQUFzQjs0QkFDakMsV0FBVyxFQUFFLENBQUMsMENBQW1CLENBQUM7eUJBQ3JDO3FCQUNKO2lCQUNKO2FBQ0osQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25HdWFyZH0gICAgZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uZ3VhcmQnO1xyXG5pbXBvcnQge1dvcmtiZW5jaENvbXBvbmVudH0gZnJvbSAnLi93b3JrYmVuY2guY29tcG9uZW50JztcclxuaW1wb3J0IHtXb3JrYmVuY2hEZXRhaWxDb21wb25lbnR9IGZyb20gJy4vd29ya2JlbmNoLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQge1dvcmtiZW5jaExpc3RDb21wb25lbnR9IGZyb20gJy4vd29ya2JlbmNoLWxpc3QuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBXb3JrYmVuY2hSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICByZWRpcmVjdFRvOiAnL3dvcmtiZW5jaCcsXHJcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3dvcmtiZW5jaCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBXb3JrYmVuY2hDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJzppZCcsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFdvcmtiZW5jaERldGFpbENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aGVudGljYXRpb25HdWFyZF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFdvcmtiZW5jaExpc3RDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhlbnRpY2F0aW9uR3VhcmRdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbl07Il19