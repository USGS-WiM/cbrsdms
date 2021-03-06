
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Prohibitiondate} from './prohibitiondate';


import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class ProhibitiondateService {
    constructor (private http: HttpClient) {}

    getProhibitiondate (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL + id + '/', options)
            .map(res => <Prohibitiondate> res)
            .catch(this.handleError);
    }

    getProhibitiondates (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL, options)
            .map(res => <Prohibitiondate[]> res)
            .catch(this.handleError);
    }

    createProhibitiondate (systemmap: Prohibitiondate): Observable<Prohibitiondate> {
        const body = JSON.stringify(systemmap);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL, body, options)
            .map(res => <Prohibitiondate> res)
            .catch(this.handleError)
    }

    updateProhibitiondate (prohibitiondate: Prohibitiondate): Observable<Prohibitiondate> {
        // pull out the ID
        const id = prohibitiondate.id;
        delete prohibitiondate['id'];

        const body = JSON.stringify(prohibitiondate);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL + id + '/', body, options)
            .map(res => <Prohibitiondate> res)
            .catch(this.handleError)
    }

    deleteProhibitiondate (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.delete(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL + id + '/', options)
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
