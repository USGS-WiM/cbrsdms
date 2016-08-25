System.register(['@angular/router', './authentication/authentication.guard', './authentication/authentication.routes', './workbench/workbench.routes', './reports/report.routes', './tags/tag.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, authentication_guard_1, authentication_routes_1, workbench_routes_1, report_routes_1, tag_routes_1;
    var routes, appRoutingProviders, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_guard_1_1) {
                authentication_guard_1 = authentication_guard_1_1;
            },
            function (authentication_routes_1_1) {
                authentication_routes_1 = authentication_routes_1_1;
            },
            function (workbench_routes_1_1) {
                workbench_routes_1 = workbench_routes_1_1;
            },
            function (report_routes_1_1) {
                report_routes_1 = report_routes_1_1;
            },
            function (tag_routes_1_1) {
                tag_routes_1 = tag_routes_1_1;
            }],
        execute: function() {
            routes = authentication_routes_1.AuthenticationRoutes.concat(workbench_routes_1.WorkbenchRoutes, report_routes_1.ReportRoutes, tag_routes_1.TagRoutes);
            exports_1("appRoutingProviders", appRoutingProviders = [
                authentication_guard_1.AuthenticationGuard
            ]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes)); //, { enableTracing: true });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBT00sTUFBTSxFQU9DLG1CQUFtQixFQUluQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWGQsTUFBTSxHQUNMLDRDQUFvQixRQUNwQixrQ0FBZSxFQUNmLDRCQUFZLEVBQ1osc0JBQVMsQ0FDZixDQUFDO1lBRVcsaUNBQUEsbUJBQW1CLEdBQVU7Z0JBQ3RDLDBDQUFtQjthQUN0QixDQUFBLENBQUM7WUFFVyxxQkFBQSxPQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQyxDQUFBLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVzLCBSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25HdWFyZH0gICAgZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5ndWFyZCc7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25Sb3V0ZXN9IGZyb20gJy4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ucm91dGVzJztcclxuaW1wb3J0IHtXb3JrYmVuY2hSb3V0ZXN9IGZyb20gJy4vd29ya2JlbmNoL3dvcmtiZW5jaC5yb3V0ZXMnO1xyXG5pbXBvcnQge1JlcG9ydFJvdXRlc30gZnJvbSAnLi9yZXBvcnRzL3JlcG9ydC5yb3V0ZXMnO1xyXG5pbXBvcnQge1RhZ1JvdXRlc30gZnJvbSAnLi90YWdzL3RhZy5yb3V0ZXMnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICAuLi5BdXRoZW50aWNhdGlvblJvdXRlcyxcclxuICAgIC4uLldvcmtiZW5jaFJvdXRlcyxcclxuICAgIC4uLlJlcG9ydFJvdXRlcyxcclxuICAgIC4uLlRhZ1JvdXRlcyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBSb3V0aW5nUHJvdmlkZXJzOiBhbnlbXSA9IFtcclxuICAgIEF1dGhlbnRpY2F0aW9uR3VhcmRcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKTsvLywgeyBlbmFibGVUcmFjaW5nOiB0cnVlIH0pOyJdfQ==