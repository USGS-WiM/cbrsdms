System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', '../app.settings'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, app_settings_1;
    var RequesterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            }],
        execute: function() {
            RequesterService = (function () {
                function RequesterService(http) {
                    this.http = http;
                }
                RequesterService.prototype.getRequester = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.JSON_HEADER });
                    return this.http.get(app_settings_1.APP_SETTINGS.REQUESTERS_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RequesterService.prototype.getRequesters = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.JSON_HEADER, search: searchArgs });
                    return this.http.get(app_settings_1.APP_SETTINGS.REQUESTERS_URL, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RequesterService.prototype.createRequester = function (requester) {
                    var body = JSON.stringify(requester);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.JSON_HEADER });
                    return this.http.post(app_settings_1.APP_SETTINGS.REQUESTERS_URL, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RequesterService.prototype.updateRequester = function (requester) {
                    // pull out the ID
                    var id = requester.id;
                    delete requester['id'];
                    var body = JSON.stringify(requester);
                    //let options = new RequestOptions({ headers: APP_SETTINGS.JSON_HEADER });
                    var options = new http_1.RequestOptions({ headers: new http_1.Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) });
                    return this.http.put(app_settings_1.APP_SETTINGS.REQUESTERS_URL + id + '/', body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RequesterService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                RequesterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RequesterService);
                return RequesterService;
            }());
            exports_1("RequesterService", RequesterService);
        }
    }
});
//# sourceMappingURL=requester.service.js.map