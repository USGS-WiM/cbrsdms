import {Routes} from '@angular/router';
import {AuthenticationGuard}    from '../authentication/authentication.guard';
import {ReportComponent} from './report.component';
import {ReportListComponent} from './report-list.component';
import {ReportCasesByUnitComponent} from './report-cases-by-unit.component';
import {ReportDaysToResolution} from './report-days-to-resolution.component';
import {ReportDaysToEachStatus} from './report-days-to-each-status.component';
import {ReportCountCasesByStatus} from './report-count-cases-by-status.component';

export const ReportRoutes: Routes = [
    {
        path: '',
        redirectTo: 'reports',
        pathMatch: 'full'
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
                path: 'daystoresolution',
                component: ReportDaysToResolution,
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'daystoeachstatus',
                component: ReportDaysToEachStatus,
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'countcasesbystatus',
                component: ReportCountCasesByStatus,
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
