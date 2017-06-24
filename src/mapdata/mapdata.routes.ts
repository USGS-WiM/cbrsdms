import {Routes} from '@angular/router';
import {AuthenticationGuard} from '../authentication/authentication.guard';
import {MapdataComponent} from './mapdata.component';
import {MapdataListComponent} from './mapdata-list.component';

export const MapdataRoutes: Routes = [
    {
        path: '',
        redirectTo: '/mapdata',
        pathMatch: 'full'
    },
    {
        path: 'mapdata',
        component: MapdataComponent,
        children: [
            {
                path: '',
                component: MapdataListComponent,
                canActivate: [AuthenticationGuard]
            }
        ]
    }
];
