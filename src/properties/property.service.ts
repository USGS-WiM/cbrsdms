
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Property} from './property';


import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class PropertyService {
    constructor (private http: HttpClient) {}

    getProperty (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.PROPERTIES_URL + id + '/', options)
            .map(res => <Property> res)
            .catch(this.handleError);
    }

    getProperties (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.PROPERTIES_URL, options)
            .map(res => <Property[]> res)
            .catch(this.handleError);
    }

    createProperty (property: Property): Observable<Property> {
        const body = JSON.stringify(property);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.PROPERTIES_URL, body, options)
            .map(res => <Property> res)
            .catch(this.handleError)
    }

    updateProperty (property: Property): Observable<Property> {
        // pull out the ID
        const id = property.id;
        delete property['id'];

        const body = JSON.stringify(property);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.PROPERTIES_URL + id + '/', body, options)
            .map(res => <Property> res)
            .catch(this.handleError)
    }

    private handleError (error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return observableThrowError(error.json() || 'Server error');
    }
}
