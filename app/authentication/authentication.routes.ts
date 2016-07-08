import {RouterConfig} from '@angular/router';
import {AuthenticationGuard}    from '../authentication/authentication.guard';
import {LoginComponent}    from '../authentication/login.component';
import {LogoutComponent}   from '../authentication/logout.component';

export const AuthenticationRoutes: RouterConfig = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthenticationGuard]
    }
];