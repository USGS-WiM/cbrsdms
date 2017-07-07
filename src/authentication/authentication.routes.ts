import {Routes} from '@angular/router';
import {LoginComponent} from './login.component';

export const AuthenticationRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];
