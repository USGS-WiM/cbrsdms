import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
//import {APP_SETTINGS} from './app.settings';
import {AppComponent} from './app.component';
import 'rxjs/Rx';

bootstrap(AppComponent, [ROUTER_PROVIDERS]);
    //.catch(err => console.error(err));