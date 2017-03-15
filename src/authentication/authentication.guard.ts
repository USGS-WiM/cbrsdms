import {CanActivate}    from '@angular/router';
//import {isLoggedin}        from './authentication/is-loggedin';
import {APP_SETTINGS}      from '../app.settings';

export class AuthenticationGuard implements CanActivate {
    canActivate() {
        return APP_SETTINGS.IS_LOGGEDIN;
    }
}
