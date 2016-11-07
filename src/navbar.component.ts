import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication/authentication.service';

import {isLoggedin}        from './authentication/is-loggedin';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    providers: [AuthenticationService]
})
export class NavbarComponent implements OnInit {
    hideNavbar:Boolean = false;
    first_name: string;
    last_name: string;

    constructor(public auth: AuthenticationService, private _router: Router) {
    }

    ngOnInit() {
        this.hideNavbar = !isLoggedin();
        this.first_name = sessionStorage.getItem('first_name');
        this.last_name = sessionStorage.getItem('last_name');
    }

    onLogout() {
        this.auth.logout();
    }

}
