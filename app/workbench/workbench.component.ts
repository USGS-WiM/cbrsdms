import {Component}         from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {CaseService}       from '../cases/case.service';
import {WorkbenchListComponent}     from './workbench-list.component';
import {WorkbenchDetailComponent} from './workbench-detail.component';
import {Grid}              from '../grid/grid';

@Component({
    template: `
    <router-outlet></router-outlet>
    `,
    directives:[Grid, RouterOutlet],
    providers: [
        HTTP_PROVIDERS,
        CaseService,
    ]
})
@RouteConfig([
  {path:'/',    name: 'WorkbenchList',   component: WorkbenchListComponent, useAsDefault: true},
  {path:'/cases/:id', name: 'WorkbenchDetail', component: WorkbenchDetailComponent}
])
export class WorkbenchComponent {}
