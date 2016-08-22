import {Routes, RouterModule} from '@angular/router';
import {AuthenticationGuard}    from './authentication/authentication.guard';
import {AuthenticationRoutes} from './authentication/authentication.routes';
import {WorkbenchRoutes} from './workbench/workbench.routes';
import {ReportRoutes} from './reports/report.routes';
import {TagRoutes} from './tags/tag.routes';

const routes: Routes = [
    ...AuthenticationRoutes,
    ...WorkbenchRoutes,
    ...ReportRoutes,
    ...TagRoutes,
];

export const appRoutingProviders: any[] = [
    AuthenticationGuard
];

export const routing = RouterModule.forRoot(routes);//, { enableTracing: true });