import {Component, OnChanges, SimpleChange} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CaseService}       from './cases/case.service';
import {CasefileService}   from './casefiles/casefile.service';
import {PropertyService}   from './properties/property.service';
import {RequesterService}  from './requesters/requester.service';
import {AuthenticationService} from './authentication/authentication.service';
import {LoginComponent}    from './authentication/login.component';
import {LogoutComponent}    from './authentication/logout.component';
import {WorkbenchComponent} from './workbench/workbench.component';
import {isLoggedin}        from './authentication/is-loggedin';

@Component({
    selector: 'my-app',
    //templateUrl: 'app/app.component.html',
    template: `
        <h1>CBRA Determination Management</h1>
        <div style="margin-left:100px;">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        PropertyService,
        RequesterService,
        CaseService,
        CasefileService,
        AuthenticationService
    ]
})
@RouteConfig([
    {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
    {path: '/logout', name: 'Logout', component: LogoutComponent}, //redirectTo: ['/Login']},
    {path: '/workbench/...', name: 'Workbench', component: WorkbenchComponent}
])
export class AppComponent implements OnChanges{
    links: string[] = [];

    constructor(){
        this.resetLinks();
    }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        console.log('ngOnChanges - myProp = ' + changes['myProp'].currentValue);
        this.resetLinks();
    }

    resetLinks(){
        if (isLoggedin()) {
            this.links.length = 0;
            this.links.push('Logout');
            this.links.push('Workbench');
        }
        else {
            this.links.length = 0;
            this.links.push('Login');
        }
    }
}
