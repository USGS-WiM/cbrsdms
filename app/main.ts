import {platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
import {enableProdMode} from '@angular/core';
//import {routing} from './app.routing';
//import {AppComponent} from './app.component';
//import {AuthenticationService} from './authentication/authentication.service';
//import 'rxjs/Rx';
//import {disableDeprecatedForms, provideForms} from '@angular/forms';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.log(err));