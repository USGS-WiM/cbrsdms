import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {ReportCase}           from './report-case';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {APP_SETTINGS}   from '../app.settings';

@Injectable()
export class ReportCaseService {
    constructor (private http: Http) {}

    getReportCases (searchArgs?: URLSearchParams) {
        let options = new RequestOptions({ headers: APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });

        return this.http.get(APP_SETTINGS.REPORTCASES_URL, options)
            .map(res => <ReportCase[]> res.json())
            .catch(this.handleError);
    }

    getReportCasesCSV(urlSearchParams: string) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let filename = "";
                        let disposition = xhr.getResponseHeader('Content-Disposition');
                        if (disposition && disposition.indexOf('attachment') !== -1) {
                            let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                            let matches = filenameRegex.exec(disposition);
                            if (matches != null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                        }
                        resolve([xhr.response, filename]);
                    } else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.responseType = "blob";
            xhr.open("GET", APP_SETTINGS.REPORTCASES_URL + "?" + urlSearchParams, true);
            xhr.setRequestHeader("Authorization", "Basic " + btoa(sessionStorage.getItem('username') + ":" + sessionStorage.getItem('password')));
            xhr.send();
        });
    }

    private handleError (error: Response) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
