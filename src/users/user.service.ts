
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {User} from './user';


import {APP_SETTINGS} from '../app.settings';
import { APP_UTILITIES } from '../app.utilities';

@Injectable()
export class UserService {
    constructor (private http: HttpClient) {}

    getUser (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.USERS_URL + id + '/', options)
            .map(res => <User> res)
            // .catch(this.handleError);
    }

    getUsers (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.USERS_URL, options)
            .map(res => <User[]> res)
            // .catch(this.handleError);
    }

    createUser(user: User): Observable<User> {
        const body = JSON.stringify(user);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.USERS_URL, body, options)
            .map(res => res)
            // .catch(this.handleError)
    }

    deleteUser(id: number | string) {
        // TODO
        return 'testing';
    }

    updateUser(user: User): Observable<User> {
        // pull out the ID
        const id = user.id;
        delete user['id'];
        delete user['groups'];
        delete user['user_permissions'];
        const body = JSON.stringify(user);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS};

        return this.http.put(APP_SETTINGS.USERS_URL + id + '/', body, options)
            .map(res => res)
            // .catch(this.handleError)
    }

    private handleError (error: HttpErrorResponse) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        const self = this;
        if (error.error) {
            for (const err in error.error) {
                if (typeof(error.error[err]) === 'object') {
                    for (const errMessage of error.error[err]) {
                        APP_UTILITIES.showToast('Error', self.capitalize(err) + ': ' + self.capitalize(errMessage));
                    }
                } else {
                    APP_UTILITIES.showToast('Error', self.capitalize(error.error[err]));
                }
            }
        }
        return observableThrowError(error.message || 'Server error');
    }

    private capitalize(message) {
        return message[0].toUpperCase() + message.substr(1);
    }
}
