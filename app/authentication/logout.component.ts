import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router} from 'angular2/router';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'logout',
  template: ``
})

export class LogoutComponent {

    constructor(public auth: AuthenticationService, public router: Router) {
        auth.logout()
            .subscribe(
                () => this.router.navigate(['../Login'])
            );
    }

}