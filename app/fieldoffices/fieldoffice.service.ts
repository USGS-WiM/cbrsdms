import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Fieldoffice}    from './fieldoffice';
import {Observable}     from 'rxjs/Observable';
import {APP_SETTINGS}   from '../app.settings';

@Injectable()
export class FieldofficeService {
    constructor (private http: Http) {}

    getFieldoffice (id: number | string) {
        let options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });
        
        return this.http.get(APP_SETTINGS.FIELDOFFICES_URL+id+'/', options)
            .map(res => <Fieldoffice> res.json())
            .catch(this.handleError);
    }
  
    getFieldoffices (searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS, search: searchArgs });
        
        return this.http.get(APP_SETTINGS.FIELDOFFICES_URL, options)
            .map(res => <Fieldoffice[]> res.json())
            .catch(this.handleError);
    }

    createFieldoffice (fieldoffice: Fieldoffice) : Observable<Fieldoffice> {
        let body = JSON.stringify(fieldoffice);
        let options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });
        //let options = new RequestOptions({headers: new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) });

        return this.http.post(APP_SETTINGS.FIELDOFFICES_URL, body, options)
            .map(res => <Fieldoffice> res.json())
            .catch(this.handleError)
    }
    
    updateFieldoffice (fieldoffice: Fieldoffice) : Observable<Fieldoffice> {
        // pull out the ID
        let id = fieldoffice.id;
        delete fieldoffice['id'];
        
        let body = JSON.stringify(fieldoffice);
        let options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });
        
        return this.http.put(APP_SETTINGS.FIELDOFFICES_URL+id+'/', body, options)
            .map(res => <Fieldoffice> res.json())
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