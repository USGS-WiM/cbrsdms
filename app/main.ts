import {bootstrap}    from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy} from 'angular2/router';
import {AppComponent} from './app.component';
import {AuthenticationService} from './authentication/authentication.service';
import 'rxjs/Rx';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy}),
    AuthenticationService
]);