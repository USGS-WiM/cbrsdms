import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router} from 'angular2/router';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'login',
  directives: [ FORM_DIRECTIVES, NgIf ],
  template: `
    <form [ngFormModel]="form" (submit)="onSubmit(form.value)">
      <div *ngIf="error">Check your password</div>
      <div>
        <label for="username">Username</label>
        <input type="text" ngControl="username">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" ngControl="password">
      </div>
      <div class="form-group">
        <button type="submit" [disabled]="!form.valid">Login</button>
      </div>
    </form>
  `
})

export class LoginComponent {
    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder, public auth: AuthenticationService, public router: Router) {
        this.form = fb.group({
            username:  ['', Validators.required],
            password:  ['', Validators.required]
        });
    }

    onSubmit(value: any) {
        if (sessionStorage.getItem('username')) {this.auth.logout();}
        this.auth.login(value.username, value.password)
            .subscribe(
                (user: any) => this.router.navigate(['../Workbench']),
                () => { this.error = true; }
            );
    }
}