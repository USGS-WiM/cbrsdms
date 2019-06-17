
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Tag} from './tag';


import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class TagService {
    constructor (private http: HttpClient) {}

    getTag (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.TAGS_URL + id + '/', options)
            .map(res => <Tag> res)
            .catch(this.handleError);
    }

    getTags (searchArgs?: URLSearchParams) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs };

        return this.http.get(APP_SETTINGS.TAGS_URL, options)
            .map(res => <Tag[]> res)
            .catch(this.handleError);
    }

    createTag (tag: Tag): Observable<Tag> {
        let body = JSON.stringify(tag);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.TAGS_URL, body, options)
            .map(res => <Tag> res)
            .catch(this.handleError)
    }

    updateTag (tag: Tag): Observable<Tag> {
        // pull out the ID
        const id = tag.id;
        delete tag['id'];

        const body = JSON.stringify(tag);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.TAGS_URL + id + '/', body, options)
            .map(res => <Tag> res)
            .catch(this.handleError)
    }

    deleteTag (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.delete(APP_SETTINGS.TAGS_URL + id + '/', options)
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
