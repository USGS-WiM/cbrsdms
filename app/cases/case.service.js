"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var app_settings_1 = require('../app.settings');
var CaseService = (function () {
    function CaseService(http) {
        this.http = http;
    }
    CaseService.prototype.getCase = function (id) {
        var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
        return this.http.get(app_settings_1.APP_SETTINGS.CASES_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CaseService.prototype.getCases = function (searchArgs) {
        var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(app_settings_1.APP_SETTINGS.CASES_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CaseService.prototype.createCase = function (acase) {
        var body = JSON.stringify(acase);
        var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
        return this.http.post(app_settings_1.APP_SETTINGS.CASES_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CaseService.prototype.updateCase = function (acase) {
        // pull out the ID
        var id = acase.id;
        delete acase['id'];
        var body = JSON.stringify(acase);
        var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
        return this.http.put(app_settings_1.APP_SETTINGS.CASES_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CaseService.prototype.createFinalLeter = function (caseid) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var filename = "";
                        var disposition = xhr.getResponseHeader('Content-Disposition');
                        if (disposition && disposition.indexOf('attachment') !== -1) {
                            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                            var matches = filenameRegex.exec(disposition);
                            if (matches != null && matches[1])
                                filename = matches[1].replace(/['"]/g, '');
                        }
                        resolve([xhr.response, filename]);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.responseType = "blob";
            xhr.open("GET", app_settings_1.APP_SETTINGS.CASES_URL + "?case_number=" + caseid + "&format=docx", true);
            xhr.setRequestHeader("Authorization", "Basic " + btoa(sessionStorage.getItem('username') + ":" + sessionStorage.getItem('password')));
            xhr.send();
        });
    };
    CaseService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    CaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CaseService);
    return CaseService;
}());
exports.CaseService = CaseService;
//# sourceMappingURL=case.service.js.map