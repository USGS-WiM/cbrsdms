
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Casetag} from './casetag';
import 'rxjs/Rx';


import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class CasetagService {
    constructor (private http: HttpClient) {}

    getCasetag (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.CASETAGS_URL + id + '/', options)
            .map(res => <Casetag> res)
            .catch(this.handleError);
    }

    getCasetags (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.CASETAGS_URL, options)
            .map(res => <Casetag[]> res)
            .catch(this.handleError);
    }

    createCasetag (casetag: Casetag): Observable<Casetag> {
        const acasetag = {'case': casetag.caseid, 'tag': casetag.tag};
        const body = JSON.stringify(acasetag);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.CASETAGS_URL, body, options)
            .map(res => <Casetag> res)
            .catch(this.handleError)
    }

    updateCasetag (casetag: Casetag): Observable<Casetag> {
        // pull out the ID
        const id = casetag.id;
        delete casetag['id'];

        const body = JSON.stringify(casetag);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.CASETAGS_URL + id + '/', body, options)
            .map(res => <Casetag> res)
            .catch(this.handleError)
    }

    deleteCasetag (id: number | string): Observable<Response> {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.delete(APP_SETTINGS.CASETAGS_URL + id + '/', options)
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
