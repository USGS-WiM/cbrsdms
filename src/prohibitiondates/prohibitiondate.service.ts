import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Prohibitiondate} from './prohibitiondate';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class ProhibitiondateService {
    constructor (private http: Http) {}

    getProhibitiondate (id: number | string) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });

        return this.http.get(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL + id + '/', options)
            .map(res => <Prohibitiondate> res.json())
            .catch(this.handleError);
    }

    getProhibitiondates (searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });

        return this.http.get(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL, options)
            .map(res => <Prohibitiondate[]> res.json())
            .catch(this.handleError);
    }

    createProhibitiondate (systemmap: Prohibitiondate): Observable<Prohibitiondate> {
        const body = JSON.stringify(systemmap);
        const options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });

        return this.http.post(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL, body, options)
            .map(res => <Prohibitiondate> res.json())
            .catch(this.handleError)
    }

    updateProhibitiondate (prohibitiondate: Prohibitiondate): Observable<Prohibitiondate> {
        // pull out the ID
        const id = prohibitiondate.id;
        delete prohibitiondate['id'];

        const body = JSON.stringify(prohibitiondate);
        const options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });

        return this.http.put(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL + id + '/', body, options)
            .map(res => <Prohibitiondate> res.json())
            .catch(this.handleError)
    }

    private handleError (error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
