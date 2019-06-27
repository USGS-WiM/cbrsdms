
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Comment} from './comment';
import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class CommentService {
    constructor (private http: HttpClient) {}

    getComment (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.COMMENTS_URL + id + '/', options)
            .map(res => <Comment> res)
            .catch(this.handleError);
    }

    getComments (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.COMMENTS_URL, options)
            .map(res => <Comment[]> res)
            .catch(this.handleError);
    }

    createComment (comment: Comment): Observable<Comment> {
        const acomment = {'acase': comment.acase, 'comment': comment.comment};
        const body = JSON.stringify(acomment);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.COMMENTS_URL, body, options)
            .map(res => <Comment> res)
            .catch(this.handleError)
    }

    updateComment (comment: Comment): Observable<Comment> {
        // pull out the ID
        const id = comment.id;
        delete comment['id'];
        const acomment = {'acase': comment.acase, 'comment': comment.comment, 'created_by': comment.created_by};

        const body = JSON.stringify(acomment);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.COMMENTS_URL + id + '/', body, options)
            .map(res => <Comment> res)
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
