import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Prohibitiondate} from './prohibitiondate';
import {Observable}     from 'rxjs/Observable';
import {APP_SETTINGS}   from '../app.settings';

@Injectable()
export class ProhibitiondateService {
    constructor (private http: Http) {}

    getProhibitiondate (id: number | string) {
        let options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });
        
        return this.http.get(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL+id+'/', options)
            .map(res => <Prohibitiondate> res.json())
            .catch(this.handleError);
    }
  
    getProhibitiondates (searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS, search: searchArgs });
        
        return this.http.get(APP_SETTINGS.SYSTEMUNITPROHIBITIONDATES_URL, options)
            .map(res => <Prohibitiondate[]> res.json())
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