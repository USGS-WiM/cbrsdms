System.register(['@angular/core', '@angular/http', 'rxjs/Rx', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', '../app.settings'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1, app_settings_1;
    var RequesterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            }],
        execute: function() {
            RequesterService = (function () {
                function RequesterService(http) {
                    this.http = http;
                }
                RequesterService.prototype.getRequester = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.get(app_settings_1.APP_SETTINGS.REQUESTERS_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RequesterService.prototype.getRequesters = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
                    return this.http.get(app_settings_1.APP_SETTINGS.REQUESTERS_URL, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RequesterService.prototype.createRequester = function (requester) {
                    var body = JSON.stringify(requester);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    return this.http.post(app_settings_1.APP_SETTINGS.REQUESTERS_URL, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RequesterService.prototype.updateRequester = function (requester) {
                    // pull out the ID
                    var id = requester.id;
                    delete requester['id'];
                    var body = JSON.stringify(requester);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    //let options = new RequestOptions({headers: new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) });
                    return this.http.put(app_settings_1.APP_SETTINGS.REQUESTERS_URL + id + '/', body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                RequesterService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXF1ZXN0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQ0ksMEJBQXFCLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFBRyxDQUFDO2dCQUVuQyx1Q0FBWSxHQUFaLFVBQWMsRUFBbUI7b0JBQzdCLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztvQkFFbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsY0FBYyxHQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO3lCQUM1RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXRCLENBQXNCLENBQUM7eUJBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsd0NBQWEsR0FBYixVQUFlLFVBQTRCO29CQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFFdEcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQzt5QkFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQWMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUF4QixDQUF3QixDQUFDO3lCQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDBDQUFlLEdBQWYsVUFBaUIsU0FBb0I7b0JBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3JDLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztvQkFFOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQzVELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQzt5QkFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCwwQ0FBZSxHQUFmLFVBQWlCLFNBQW9CO29CQUNqQyxrQkFBa0I7b0JBQ2xCLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUM7b0JBQ3RCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUV2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7b0JBQzlFLGtJQUFrSTtvQkFHbEksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsY0FBYyxHQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDbEUsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQVksR0FBRyxDQUFDLElBQUksRUFBRSxFQUF0QixDQUFzQixDQUFDO3lCQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDO2dCQUVPLHNDQUFXLEdBQW5CLFVBQXFCLEtBQWU7b0JBQ2hDLHlDQUF5QztvQkFDekMsb0ZBQW9GO29CQUNwRiw0Q0FBNEM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBbERMO29CQUFDLGlCQUFVLEVBQUU7O29DQUFBO2dCQW1EYix1QkFBQztZQUFELENBQUMsQUFsREQsSUFrREM7WUFsREQsK0NBa0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7UmVxdWVzdGVyfSAgICAgIGZyb20gJy4vcmVxdWVzdGVyJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0IHtBUFBfU0VUVElOR1N9ICAgZnJvbSAnLi4vYXBwLnNldHRpbmdzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBnZXRSZXF1ZXN0ZXIgKGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5NSU5fQVVUSF9KU09OX0hFQURFUlMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEFQUF9TRVRUSU5HUy5SRVFVRVNURVJTX1VSTCtpZCsnLycsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxSZXF1ZXN0ZXI+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICBcclxuICAgIGdldFJlcXVlc3RlcnMgKHNlYXJjaEFyZ3M/OiBVUkxTZWFyY2hQYXJhbXMpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5NSU5fQVVUSF9KU09OX0hFQURFUlMsIHNlYXJjaDogc2VhcmNoQXJncyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQVBQX1NFVFRJTkdTLlJFUVVFU1RFUlNfVVJMLCBvcHRpb25zKVxyXG5cdFx0ICAgIC5tYXAocmVzID0+IDxSZXF1ZXN0ZXJbXT4gcmVzLmpzb24oKSlcclxuXHRcdCAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUmVxdWVzdGVyIChyZXF1ZXN0ZXI6IFJlcXVlc3RlcikgOiBPYnNlcnZhYmxlPFJlcXVlc3Rlcj4ge1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocmVxdWVzdGVyKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQVBQX1NFVFRJTkdTLlJFUVVFU1RFUlNfVVJMLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8UmVxdWVzdGVyPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSZXF1ZXN0ZXIgKHJlcXVlc3RlcjogUmVxdWVzdGVyKSA6IE9ic2VydmFibGU8UmVxdWVzdGVyPiB7XHJcbiAgICAgICAgLy8gcHVsbCBvdXQgdGhlIElEXHJcbiAgICAgICAgbGV0IGlkID0gcmVxdWVzdGVyLmlkO1xyXG4gICAgICAgIGRlbGV0ZSByZXF1ZXN0ZXJbJ2lkJ107XHJcblxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkocmVxdWVzdGVyKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuICAgICAgICAvL2xldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChBUFBfU0VUVElOR1MuUkVRVUVTVEVSU19VUkwraWQrJy8nLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8UmVxdWVzdGVyPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBUT0RPIGZpZ3VyZSBvdXQgYSBiZXR0ZXIgZXJyb3IgaGFuZGxlclxyXG4gICAgICAgIC8vIGluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1heSBzZW5kIHRoZSBzZXJ2ZXIgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgIC8vIGluc3RlYWQgb2YganVzdCBsb2dnaW5nIGl0IHRvIHRoZSBjb25zb2xlXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxufSJdfQ==