import {Component}         from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterOutlet, Router, CanActivate} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {CaseService}       from '../cases/case.service';
import {WorkbenchListComponent}     from './workbench-list.component';
import {WorkbenchDetailComponent} from './workbench-detail.component';
import {Grid}              from '../grid/grid';
import {AuthenticationService} from '../authentication/authentication.service';
import {isLoggedin}        from '../authentication/is-loggedin';

@Component({
    template: `
    <div style="float: left;">
        <a [routerLink]="['Workbench']">Workbench</a>
    </div>
    <div style="float: right;">
        User: {{ first_name }} {{ last_name }} <a href="/logout" (click)="onLogout()">Logout</a>
    </div>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES, Grid, RouterOutlet],
    providers: [HTTP_PROVIDERS, CaseService]
})
@RouteConfig([
  {path: '/', name: 'WorkbenchList', component: WorkbenchListComponent, useAsDefault: true},
  {path: '/cases/:id', name: 'WorkbenchDetail', component: WorkbenchDetailComponent},
])
@CanActivate(() => isLoggedin())
export class WorkbenchComponent {
    first_name: string;
    last_name: string;

    constructor(public auth: AuthenticationService, public router: Router) {
        this.first_name = sessionStorage.getItem('first_name');
        this.last_name = sessionStorage.getItem('last_name');
    }

    onLogout() {
        this.auth.logout()
            .subscribe(
                () => this.router.navigate(['../Login'])
            );
    }
}
