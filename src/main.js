System.register(['@angular/platform-browser-dynamic', './app.module', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1, core_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
                .catch(function (err) { return console.log(err); });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLHFCQUFjLEVBQUUsQ0FBQztZQUNqQixpREFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDO2lCQUNsRCxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSAgICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHtBcHBNb2R1bGV9IGZyb20gJy4vYXBwLm1vZHVsZSc7XG5pbXBvcnQge2VuYWJsZVByb2RNb2RlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZW5hYmxlUHJvZE1vZGUoKTtcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxuLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiJdfQ==