import {Routes} from '@angular/router';
import {AuthenticationGuard} from '../authentication/authentication.guard';
import {ReportComponent} from './report.component';
import {ReportListComponent} from './report-list.component';
import {ReportCasesByUnitComponent} from './report-cases-by-unit.component';
import {ReportDaysToResolutionComponent} from './report-days-to-resolution.component';
import {ReportDaysToEachStatusComponent} from './report-days-to-each-status.component';
import {ReportCountCasesByStatusComponent} from './report-count-cases-by-status.component';
import { ReportCasesForUserComponent } from './report-cases-for-user.component';

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
                component: ReportDaysToResolutionComponent,
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'daystoeachstatus',
                component: ReportDaysToEachStatusComponent,
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'allcasesforuser',
                component: ReportCasesForUserComponent,
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'countcasesbystatus',
                component: ReportCountCasesByStatusComponent,
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
