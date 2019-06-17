
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Systemunit} from './systemunit';


import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class SystemunitService {
    constructor (private http: HttpClient) {}

    getSystemunit (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.SYSTEMUNITS_URL + id + '/', options)
            .map(res => <Systemunit> res)
            .catch(this.handleError);
    }

    getSystemunits (searchArgs?: URLSearchParams) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs };

        return this.http.get(APP_SETTINGS.SYSTEMUNITS_URL, options)
            .map(res => <Systemunit[]> res)
            .catch(this.handleError);
    }

    createSystemunit (systemunit: Systemunit): Observable<Systemunit> {
        const body = JSON.stringify(systemunit);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.SYSTEMUNITS_URL, body, options)
            .map(res => <Systemunit> res)
            .catch(this.handleError)
    }

    updateSystemunit (systemunit: Systemunit): Observable<Systemunit> {
        // pull out the ID
        const id = systemunit.id;
        delete systemunit['id'];

        const body = JSON.stringify(systemunit);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.SYSTEMUNITS_URL + id + '/', body, options)
            .map(res => <Systemunit> res)
            .catch(this.handleError)
    }

    deleteSystemunit (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.delete(APP_SETTINGS.SYSTEMUNITS_URL + id + '/', options)
            .map(res => res)
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return observableThrowError(error.json() || 'Server error');
    }
}
