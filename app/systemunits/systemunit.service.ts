import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Systemunit}     from './systemunit';
import {Observable}     from 'rxjs/Observable';
import {APP_SETTINGS}   from '../app.settings';

@Injectable()
export class SystemunitService {
    constructor (private http: Http) {}

    getSystemunit (id: number | string) {
        let options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
        
        return this.http.get(APP_SETTINGS.SYSTEMUNITS_URL+id+'/', options)
            .map(res => <Systemunit> res.json())
            .catch(this.handleError);
    }
  
    getSystemunits (searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
        
        return this.http.get(APP_SETTINGS.SYSTEMUNITS_URL, options)
            .map(res => <Systemunit[]> res.json())
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