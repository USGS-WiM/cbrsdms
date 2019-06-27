
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Systemmap} from './systemmap';


import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class SystemmapService {
    constructor (private http: HttpClient) {}

    getSystemmap (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.SYSTEMMAPS_URL + id + '/', options)
            .map(res => <Systemmap> res)
            .catch(err => this.handleError(err))
    }

    getSystemmaps (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.SYSTEMMAPS_URL, options)
            .map(res => <Systemmap[]> res)
            .catch(err => this.handleError(err))
    }

    createSystemmap (systemmap: Systemmap): Observable<Systemmap> {
        const body = JSON.stringify(systemmap);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.SYSTEMMAPS_URL, body, options)
            .map(res => <Systemmap> res)
            .catch(err => this.handleError(err))
    }

    updateSystemmap (systemmap: Systemmap): Observable<Systemmap> {
        // pull out the ID
        const id = systemmap.id;
        delete systemmap['id'];

        const body = JSON.stringify(systemmap);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.SYSTEMMAPS_URL + id + '/', body, options)
            .map(res => <Systemmap> res)
            .catch(err => this.handleError(err))
    }

    deleteSystemmap (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.delete(APP_SETTINGS.SYSTEMMAPS_URL + id + '/', options)
            .map(res => res)
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        return observableThrowError(error.json() || 'Server error');
    }
}
