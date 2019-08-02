
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Fieldoffice} from './fieldoffice';


import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class FieldofficeService {
    constructor (private http: HttpClient) {}

    getFieldoffice (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.FIELDOFFICES_URL + id + '/', options)
            .map(res => <Fieldoffice> res)
            .catch(this.handleError);
    }

    getFieldoffices (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.FIELDOFFICES_URL, options)
            .map(res => <Fieldoffice[]> res)
            .catch(this.handleError);
    }

    createFieldoffice (fieldoffice: Fieldoffice): Observable<Fieldoffice> {
        const body = JSON.stringify(fieldoffice);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.FIELDOFFICES_URL, body, options)
            .map(res => <Fieldoffice> res)
            .catch(this.handleError)
    }

    updateFieldoffice (fieldoffice: Fieldoffice): Observable<Fieldoffice> {
        // pull out the ID
        const id = fieldoffice.id;
        delete fieldoffice['id'];

        const body = JSON.stringify(fieldoffice);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.FIELDOFFICES_URL + id + '/', body, options)
            .map(res => <Fieldoffice> res)
            .catch(this.handleError)
    }

    private handleError (error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return observableThrowError(error['message'] || 'Server error');
    }
}
