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
var TagService = (function () {
    function TagService(http) {
        this.http = http;
    }
    TagService.prototype.getTag = function (id) {
        var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
        return this.http.get(app_settings_1.APP_SETTINGS.TAGS_URL + id + '/', options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getTags = function (searchArgs) {
        var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS, search: searchArgs });
        return this.http.get(app_settings_1.APP_SETTINGS.TAGS_URL, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.createTag = function (tag) {
        var body = JSON.stringify(tag);
        var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
        return this.http.post(app_settings_1.APP_SETTINGS.TAGS_URL, body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.updateTag = function (tag) {
        // pull out the ID
        var id = tag.id;
        delete tag['id'];
        var body = JSON.stringify(tag);
        var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
        return this.http.put(app_settings_1.APP_SETTINGS.TAGS_URL + id + '/', body, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.handleError = function (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TagService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TagService);
    return TagService;
}());
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map