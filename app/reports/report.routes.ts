import {RouterConfig} from '@angular/router';
import {AuthenticationGuard}    from '../authentication/authentication.guard';
import {ReportComponent} from './report.component';
import {ReportListComponent} from './report-list.component';
import {ReportCasesByUnitComponent} from './report-cases-by-unit.component';

export const ReportRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: 'reports',
        terminal: true
    },
    {
        path: 'reports',
        component: ReportComponent,
        children: [
            {
                path: 'casesbyunit',
                component: ReportCasesByUnitComponent,
                canActivate: [AuthenticationGuard]
            },
            {
                path: '',
                component: ReportListComponent,
                canActivate: [AuthenticationGuard]
            }
        ]
    }
];