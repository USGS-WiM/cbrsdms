
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Systemunitmap} from './systemunitmap';


import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class SystemunitmapService {
    constructor (private http: HttpClient) {}

    getSystemunitmap (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.SYSTEMUNITMAPS_URL + id + '/', options)
            .map(res => <Systemunitmap> res)
            .catch(this.handleError);
    }

    getSystemunitmaps (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.SYSTEMUNITMAPS_URL, options)
            .map(res => <Systemunitmap[]> res)
            .catch(this.handleError);
    }

    createSystemunitmap (systemunitmap: Systemunitmap): Observable<Systemunitmap> {
        const body = JSON.stringify(systemunitmap);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.SYSTEMUNITMAPS_URL, body, options)
            .map(res => <Systemunitmap> res)
            .catch(this.handleError)
    }

    updateSystemunitmap (systemunitmap: Systemunitmap): Observable<Systemunitmap> {
        // pull out the ID
        const id = systemunitmap.id;
        delete systemunitmap['id'];

        const body = JSON.stringify(systemunitmap);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.SYSTEMUNITMAPS_URL + id + '/', body, options)
            .map(res => <Systemunitmap> res)
            .catch(this.handleError)
    }

    deleteSystemunitmap (id: number | string): Observable<Response> {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.delete(APP_SETTINGS.SYSTEMUNITMAPS_URL + id + '/', options)
            .map(res => <Response>res)
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
