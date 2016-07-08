import {bootstrap}    from '@angular/platform-browser-dynamic';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {AppComponent} from './app.component';
import {AuthenticationService} from './authentication/authentication.service';
import 'rxjs/Rx';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    AuthenticationService,
    disableDeprecatedForms(),
    provideForms()
])
.catch(err => console.error(err));