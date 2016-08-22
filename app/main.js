"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var core_1 = require('@angular/core');
//import {routing} from './app.routing';
//import {AppComponent} from './app.component';
//import {AuthenticationService} from './authentication/authentication.service';
//import 'rxjs/Rx';
//import {disableDeprecatedForms, provideForms} from '@angular/forms';
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map