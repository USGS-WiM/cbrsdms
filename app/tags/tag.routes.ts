import {Routes} from '@angular/router';
import {AuthenticationGuard}    from '../authentication/authentication.guard';
import {TagDetailComponent} from './tag-detail.component';
import {TagListComponent} from './tag-list.component';

export const TagRoutes: Routes = [
    {
        path: 'tag/:id',
        component: TagDetailComponent,
        canActivate: [AuthenticationGuard]
    },
    {
        path: 'tags',
        component: TagListComponent,
        canActivate: [AuthenticationGuard]
    }
];