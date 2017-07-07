import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, URLSearchParams} from '@angular/http';
import {Tag} from './tag';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class TagService {
    constructor (private http: Http) {}

    getTag (id: number | string) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });

        return this.http.get(APP_SETTINGS.TAGS_URL + id + '/', options)
            .map(res => <Tag> res.json())
            .catch(this.handleError);
    }

    getTags (searchArgs?: URLSearchParams) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });

        return this.http.get(APP_SETTINGS.TAGS_URL, options)
            .map(res => <Tag[]> res.json())
            .catch(this.handleError);
    }

    createTag (tag: Tag): Observable<Tag> {
        let body = JSON.stringify(tag);
        const options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });

        return this.http.post(APP_SETTINGS.TAGS_URL, body, options)
            .map(res => <Tag> res.json())
            .catch(this.handleError)
    }

    updateTag (tag: Tag): Observable<Tag> {
        // pull out the ID
        const id = tag.id;
        delete tag['id'];

        const body = JSON.stringify(tag);
        const options = new RequestOptions({ headers: APP_SETTINGS.AUTH_JSON_HEADERS });

        return this.http.put(APP_SETTINGS.TAGS_URL + id + '/', body, options)
            .map(res => <Tag> res.json())
            .catch(this.handleError)
    }

    deleteTag (id: number | string) {
        const options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS });

        return this.http.delete(APP_SETTINGS.TAGS_URL + id + '/', options)
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
