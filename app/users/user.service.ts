import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from 'angular2/http';
import {User}           from './user';
import {Observable}     from 'rxjs/Observable';
import {APP_SETTINGS}   from '../app.settings';

@Injectable()
export class UserService {
    constructor (private http: Http) {}

    getUser (id: number | string) {
        let options = new RequestOptions({ headers: APP_SETTINGS.JSON_HEADER });
        
        return this.http.get(APP_SETTINGS.USERS_URL+id+'/', options)
            .map(res => <User> res.json())
            .catch(this.handleError);
    }
  
    getUsers (searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: APP_SETTINGS.JSON_HEADER, search: searchArgs });
        
        return this.http.get(APP_SETTINGS.USERS_URL, options)
            .map(res => <User[]> res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}