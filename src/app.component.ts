import {Component, OnInit, OnChanges, SimpleChange} from '@angular/core';
import {Router} from '@angular/router';
import {CaseService}       from './cases/case.service';
import {CasefileService}   from './casefiles/casefile.service';
import {PropertyService}   from './properties/property.service';
import {RequesterService}  from './requesters/requester.service';
import {AuthenticationService} from './authentication/authentication.service';
import {LoginComponent}    from './authentication/login.component';
//import {isLoggedin}        from './authentication/is-loggedin';
import {APP_SETTINGS}      from './app.settings';
//import './styles.css';

// Use Filesaver.js to save binary to file
// https://github.com/eligrey/FileSaver.js/
//export const fileSaver = require('./assets/FileSaver.min.js');

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    //styleUrls: ['./styles.css'],
    providers: [
        PropertyService,
        RequesterService,
        CaseService,
        CasefileService,
        AuthenticationService
    ]
})
export class AppComponent implements OnInit{

    constructor(public router: Router) {
    }

    ngOnInit() {
        //if (!isLoggedin()) {this.router.navigateByUrl('login');}
        setTimeout(()=> { if (!APP_SETTINGS.IS_LOGGEDIN) {this.router.navigateByUrl('login');} }, 500);
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
