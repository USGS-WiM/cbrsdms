import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication/authentication.service';
import {APP_SETTINGS} from './app.settings';

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    providers: [AuthenticationService]
})
export class NavbarComponent implements OnInit {
    hideNavbar = false;
    first_name: string;
    last_name: string;

    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
    }

    ngOnInit() {
        this.hideNavbar = !APP_SETTINGS.IS_LOGGEDIN;
        this.first_name = sessionStorage.getItem('first_name');
        this.last_name = sessionStorage.getItem('last_name');
    }

    onLogout() {
        this._authenticationService.logout();
    }

}
