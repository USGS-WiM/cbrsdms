import {Component}         from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {HTTP_PROVIDERS}    from '@angular/http';
import {CaseService}       from '../cases/case.service';
import {Grid}              from '../grid/grid';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
    template: `
    <div style="float: left;">
        <a [routerLink]="['/workbench']">Workbench</a>
        <!-- <a href="../../cbra/cbrarequests/">Create Case</a>
        <a href="/reports">Reports</a>
        <a href="/tags">Tags</a> -->
    </div>
    <div style="float: right;">
        <!-- <input type="text">
        <button>Search</button>
        <button>Reset</button> -->
        User: {{ first_name }} {{ last_name }} <a href="/logout" (click)="onLogout()">Logout</a>
    </div>
    <router-outlet></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES, Grid],
    providers: [HTTP_PROVIDERS, CaseService]
})
export class WorkbenchComponent {
    first_name: string;
    last_name: string;

    constructor(public auth: AuthenticationService, public router: Router) {
        this.first_name = sessionStorage.getItem('first_name');
        this.last_name = sessionStorage.getItem('last_name');
    }

    onLogout() {
        this.auth.logout();
    }
}
