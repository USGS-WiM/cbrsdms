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
            //import {routing} from './app.routing';
            //import {AppComponent} from './app.component';
            //import {AuthenticationService} from './authentication/authentication.service';
            //import 'rxjs/Rx';
            //import {disableDeprecatedForms, provideForms} from '@angular/forms';
            core_1.enableProdMode();
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
                .catch(function (err) { return console.log(err); });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztZQUdBLHdDQUF3QztZQUN4QywrQ0FBK0M7WUFDL0MsZ0ZBQWdGO1lBQ2hGLG1CQUFtQjtZQUNuQixzRUFBc0U7WUFFdEUscUJBQWMsRUFBRSxDQUFDO1lBQ2pCLGlEQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUM7aUJBQ2xELEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9ICAgIGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7QXBwTW9kdWxlfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xyXG5pbXBvcnQge2VuYWJsZVByb2RNb2RlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy9pbXBvcnQge3JvdXRpbmd9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG4vL2ltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG4vL2ltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG4vL2ltcG9ydCAncnhqcy9SeCc7XHJcbi8vaW1wb3J0IHtkaXNhYmxlRGVwcmVjYXRlZEZvcm1zLCBwcm92aWRlRm9ybXN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmVuYWJsZVByb2RNb2RlKCk7XHJcbnBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxyXG4uY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpOyJdfQ==
