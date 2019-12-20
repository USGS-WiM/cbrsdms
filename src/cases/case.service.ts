
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Case} from './case';
import {AuthenticationService} from '../authentication/authentication.service';
import 'rxjs/Rx';
import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class CaseService {
    constructor (private http: HttpClient, private _authenticationService: AuthenticationService) {}

    getCase (id: number | string) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS };

        return this.http.get(APP_SETTINGS.CASES_URL + id + '/', options)
        .map(res => <Case> res)
        .catch(this.handleError);
    }

    getCases (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.CASES_URL, options)
        .map(res => <Case[]> res)
        .catch(this.handleError);
    }

    createCase (acase: Case): Observable<Case> {
        const body = JSON.stringify(acase);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.post(APP_SETTINGS.CASES_URL, body, options)
            .map(res => <Case> res)
            .catch(this.handleError)
    }

    updateCase (acase: Case): Observable<Case> {
        // pull out the ID
        const id = acase.id;
        delete acase['id'];

        const body = JSON.stringify(acase);
        const options = { headers: APP_SETTINGS.AUTH_JSON_HEADERS };

        return this.http.put(APP_SETTINGS.CASES_URL + id + '/', body, options)
            .map(res => <Case> res)
            .catch(this.handleError)
    }

    createFinalLeter(caseid: number | string) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        let filename = '';
                        const disposition = xhr.getResponseHeader('Content-Disposition');
                        if (disposition && disposition.indexOf('attachment') !== -1) {
                            const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                            const matches = filenameRegex.exec(disposition);
                            if (matches != null && matches[1]) {filename = matches[1].replace(/['"]/g, '')}
                        }
                        resolve([xhr.response, filename]);
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.responseType = 'blob';
            xhr.open('GET', APP_SETTINGS.CASES_URL + '?case_number=' + caseid + '&format=docx', true);
            xhr.setRequestHeader('Authorization', 'Basic '
                + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')));
            xhr.send();
        });
    }

    private handleError (error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return observableThrowError(error.json() || 'Server error');
    }

    getWorkbenchCSV(urlSearchParams?: string) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        let filename = '';
                        const disposition = xhr.getResponseHeader('Content-Disposition');
                        if (disposition && disposition.indexOf('attachment') !== -1) {
                            const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                            const matches = filenameRegex.exec(disposition);
                            if (matches != null && matches[1]) {filename = matches[1].replace(/['"]/g, '')}
                        }
                        resolve([xhr.response, filename]);
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.responseType = 'blob';
            xhr.open('GET', APP_SETTINGS.CASES_URL + '?' + urlSearchParams, true);
            xhr.setRequestHeader('Authorization',
                'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')));
            xhr.send();
        });
    }
}
