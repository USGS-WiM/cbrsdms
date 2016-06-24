import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'login',
  directives: [ REACTIVE_FORM_DIRECTIVES ],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)">
      <div *ngIf="error">Check your password</div>
      <div>
        <label for="username">Username</label>
        <input type="text" formControlName="username">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" formControlName="password">
      </div>
      <div class="form-group">
        <button type="submit" [disabled]="!form.valid">Login</button>
      </div>
    </form>
  `
})

export class LoginComponent {
    form: FormGroup;
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
                (user: any) => this.router.navigate(['/workbench']),
                () => { this.error = true; }
            );
    }
}