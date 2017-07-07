import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Casetag} from './casetag';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class CasetagService {
    constructor (private http: Http) {}

    getCasetag (id: number | string) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });

        return this.http.get(APP_SETTINGS.CASETAGS_URL + id + '/', options)
            .map(res => <Casetag> res.json())
            .catch(this.handleError);
    }

    getCasetags (searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });

        return this.http.get(APP_SETTINGS.CASETAGS_URL, options)
            .map(res => <Casetag[]> res.json())
            .catch(this.handleError);
    }

    createCasetag (casetag: Casetag): Observable<Casetag> {
        const acasetag = {'case': casetag.caseid, 'tag': casetag.tag};
        const body = JSON.stringify(acasetag);
        const options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });

        return this.http.post(APP_SETTINGS.CASETAGS_URL, body, options)
            .map(res => <Casetag> res.json())
            .catch(this.handleError)
    }

    updateCasetag (casetag: Casetag): Observable<Casetag> {
        // pull out the ID
        const id = casetag.id;
        delete casetag['id'];

        const body = JSON.stringify(casetag);
        const options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });

        return this.http.put(APP_SETTINGS.CASETAGS_URL + id + '/', body, options)
            .map(res => <Casetag> res.json())
            .catch(this.handleError)
    }

    deleteCasetag (id: number | string): Observable<Response> {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });

        return this.http.delete(APP_SETTINGS.CASETAGS_URL + id + '/', options)
            .map(res => console.log(res))
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
