
import {of as observableOf, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

import 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {APP_SETTINGS} from '../app.settings';
import { User } from '../users/user';


@Injectable()
export class AuthenticationService {
    public user: any;

    constructor(private _http: HttpClient, private _router: Router) {}

    login(username: string, password: string) {

        const options = {headers: new HttpHeaders(
                { 'Authorization': 'Basic ' + btoa(username + ':' + password), 'Accept': 'application/json'})
            };
        return this._http.post(APP_SETTINGS.AUTH_URL, null, options)
            .map((res: User) => {
                const u = res;
                if (u.is_active) {
                    u.password = password;
                    this.user = u;
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('password', password);
                    sessionStorage.setItem('first_name', this.user.first_name);
                    sessionStorage.setItem('last_name', this.user.last_name);
                    return u;
                } else {
                    // TODO: do something more professional here
                    alert('This user is not authorized!');
                    return false;
                }
            });

    }

    getUser() {
        console.log('Auth.getUser: ' + this.user.first_name);
        return this.user;
    }

  logout() {

      this._router.navigate(['/login']);
      this.user = undefined;
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('password');
      sessionStorage.removeItem('first_name');
      sessionStorage.removeItem('last_name');
      return observableOf(true);

  }
}
