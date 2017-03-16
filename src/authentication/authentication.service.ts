import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/observable/of';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Router}    from '@angular/router';
import {APP_SETTINGS}   from '../app.settings';
import {User} from '../users/user';
import {IMyOptions} from 'mydatepicker';


@Injectable()
export class AuthenticationService {
    public user: any;

    constructor(private _http: Http, private _router: Router) {}

    login(username: string, password: string) {

        let options = new RequestOptions(
            {headers: new Headers(
                { "Authorization": "Basic " + btoa(username + ":" + password), 'Accept': 'application/json'})
            });

        return this._http.post(APP_SETTINGS.AUTH_URL, null, options)
            .map((res : Response) => {
                let u = res.json();
                if (u.is_active) {
                    u.password = password;
                    this.user = u;
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('password', password);
                    sessionStorage.setItem('first_name', this.user.first_name);
                    sessionStorage.setItem('last_name', this.user.last_name);
                    return u;
                }
                else {
                    // TODO: do something more professional here
                    alert('This user is not authorized!');
                    return false;
                }
            });

    }

    getUser() {
        console.log("Auth.getUser: " + this.user.first_name);
        return this.user;
    }

  logout() {

      this._router.navigate(['/login']);
      this.user = undefined;
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('password');
      sessionStorage.removeItem('first_name');
      sessionStorage.removeItem('last_name');
      return Observable.of(true);

  }
}
