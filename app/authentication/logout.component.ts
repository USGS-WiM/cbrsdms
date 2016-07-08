import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'logout',
  template: ``
})

export class LogoutComponent {

    constructor(public auth: AuthenticationService, public router: Router) {
        auth.logout()
            .subscribe(
                () => this.router.navigate(['/login'])
            );
    }

}