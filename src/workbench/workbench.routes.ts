import {Routes} from '@angular/router';
import {AuthenticationGuard}    from '../authentication/authentication.guard';
import {WorkbenchComponent} from './workbench.component';
import {WorkbenchDetailComponent} from './workbench-detail.component';
import {WorkbenchListComponent} from './workbench-list.component';

export const WorkbenchRoutes: Routes = [
    {
        path: '',
        redirectTo: '/workbench',
        pathMatch: 'full'
    },
    {
        path: 'workbench',
        component: WorkbenchComponent,
        children: [
            {
                path: 'new',
                component: WorkbenchDetailComponent,
                canActivate: [AuthenticationGuard]
            },
            {
                path: ':id',
                component: WorkbenchDetailComponent,
                canActivate: [AuthenticationGuard]
            },
            {
                path: '',
                component: WorkbenchListComponent,
                canActivate: [AuthenticationGuard]
            }
        ]
    }
];
