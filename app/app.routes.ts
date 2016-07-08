import {provideRouter, RouterConfig} from '@angular/router';
import {AuthenticationGuard}    from './authentication/authentication.guard';
import {AuthenticationRoutes} from './authentication/authentication.routes';
import {WorkbenchRoutes} from './workbench/workbench.routes';
import {TagRoutes} from './tags/tag.routes';

export const routes: RouterConfig = [
    ...AuthenticationRoutes,
    ...WorkbenchRoutes,
    ...TagRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthenticationGuard
];