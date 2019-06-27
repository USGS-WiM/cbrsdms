
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {ReportCase} from './report-case';


import {APP_SETTINGS} from '../app.settings';

@Injectable()
export class ReportCaseService {
    constructor (private http: HttpClient) {}

    getReportCases (searchArgs?) {
        const options = { headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, params: searchArgs };

        return this.http.get(APP_SETTINGS.REPORTCASES_URL, options)
            .map(res => <ReportCase[]> res)
            .catch(this.handleError);
    }

    getReportCasesCSV(urlSearchParams: string) {
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
            xhr.open('GET', APP_SETTINGS.REPORTCASES_URL + '?' + urlSearchParams, true);
            xhr.setRequestHeader('Authorization',
                'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')));
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
}
