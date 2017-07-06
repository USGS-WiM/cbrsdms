import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Systemmap} from './systemmap';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class SystemmapService {
    constructor (private http: Http) {}

    getSystemmap (id: number | string) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });

        return this.http.get(APP_SETTINGS.SYSTEMMAPS_URL + id + '/', options)
            .map(res => <Systemmap> res.json())
            .catch(err => this.handleError(err))
    }

    getSystemmaps (searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });

        return this.http.get(APP_SETTINGS.SYSTEMMAPS_URL, options)
            .map(res => <Systemmap[]> res.json())
            .catch(err => this.handleError(err))
    }

    createSystemmap (systemmap: Systemmap): Observable<Systemmap> {
        const body = JSON.stringify(systemmap);
        const options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });

        return this.http.post(APP_SETTINGS.SYSTEMMAPS_URL, body, options)
            .map(res => <Systemmap> res.json())
            .catch(err => this.handleError(err))
    }

    updateSystemmap (systemmap: Systemmap): Observable<Systemmap> {
        // pull out the ID
        const id = systemmap.id;
        delete systemmap['id'];

        const body = JSON.stringify(systemmap);
        const options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });

        return this.http.put(APP_SETTINGS.SYSTEMMAPS_URL + id + '/', body, options)
            .map(res => <Systemmap> res.json())
            .catch(err => this.handleError(err))
    }

    deleteSystemmap (id: number | string) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });

        return this.http.delete(APP_SETTINGS.SYSTEMMAPS_URL + id + '/', options)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        return Observable.throw(error.json() || 'Server error');
    }
}
