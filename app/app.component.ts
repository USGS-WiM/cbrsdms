import {Component, OnInit, OnChanges, SimpleChange} from '@angular/core';
import {HTTP_PROVIDERS}    from '@angular/http';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {CaseService}       from './cases/case.service';
import {CasefileService}   from './casefiles/casefile.service';
import {PropertyService}   from './properties/property.service';
import {RequesterService}  from './requesters/requester.service';
import {AuthenticationService} from './authentication/authentication.service';

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
export class AppComponent implements OnInit{

    constructor(public router: Router){}

    ngOnInit() {
        if (!isLoggedin()) {this.router.navigate(['/login']);}
    }

}
//     links: string[] = [];
//
//     constructor(){
//         this.resetLinks();
//     }
//
//     ngOnChanges(changes: {[propName: string]: SimpleChange}) {
//         console.log('ngOnChanges - myProp = ' + changes['myProp'].currentValue);
//         this.resetLinks();
//     }
//
//     resetLinks(){
//         if (isLoggedin()) {
//             this.links.length = 0;
//             this.links.push('logout');
//             this.links.push('workbench');
//         }
//         else {
//             this.links.length = 0;
//             this.links.push('login');
//         }
//     }
// }
