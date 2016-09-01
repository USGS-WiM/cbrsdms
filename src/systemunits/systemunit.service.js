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
    var SystemunitService;
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
            SystemunitService = (function () {
                function SystemunitService(http) {
                    this.http = http;
                }
                SystemunitService.prototype.getSystemunit = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.get(app_settings_1.APP_SETTINGS.SYSTEMUNITS_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                SystemunitService.prototype.getSystemunits = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
                    return this.http.get(app_settings_1.APP_SETTINGS.SYSTEMUNITS_URL, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                SystemunitService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                SystemunitService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SystemunitService);
                return SystemunitService;
            }());
            exports_1("SystemunitService", SystemunitService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtdW5pdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3lzdGVtdW5pdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFDSSwyQkFBcUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUFHLENBQUM7Z0JBRW5DLHlDQUFhLEdBQWIsVUFBZSxFQUFtQjtvQkFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO29CQUVsRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxlQUFlLEdBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7eUJBQzdELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFhLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQzt5QkFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCwwQ0FBYyxHQUFkLFVBQWdCLFVBQTRCO29CQUN4QyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFFdEcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQzt5QkFDdEQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQWUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUF6QixDQUF5QixDQUFDO3lCQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVPLHVDQUFXLEdBQW5CLFVBQXFCLEtBQWU7b0JBQ2hDLHlDQUF5QztvQkFDekMsb0ZBQW9GO29CQUNwRiw0Q0FBNEM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBMUJMO29CQUFDLGlCQUFVLEVBQUU7O3FDQUFBO2dCQTJCYix3QkFBQztZQUFELENBQUMsQUExQkQsSUEwQkM7WUExQkQsaURBMEJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7U3lzdGVtdW5pdH0gICAgIGZyb20gJy4vc3lzdGVtdW5pdCc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCB7QVBQX1NFVFRJTkdTfSAgIGZyb20gJy4uL2FwcC5zZXR0aW5ncyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTeXN0ZW11bml0U2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGdldFN5c3RlbXVuaXQgKGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5NSU5fQVVUSF9KU09OX0hFQURFUlMgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQVBQX1NFVFRJTkdTLlNZU1RFTVVOSVRTX1VSTCtpZCsnLycsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxTeXN0ZW11bml0PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRTeXN0ZW11bml0cyAoc2VhcmNoQXJncz86IFVSTFNlYXJjaFBhcmFtcykge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogQVBQX1NFVFRJTkdTLk1JTl9BVVRIX0pTT05fSEVBREVSUywgc2VhcmNoOiBzZWFyY2hBcmdzIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEFQUF9TRVRUSU5HUy5TWVNURU1VTklUU19VUkwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxTeXN0ZW11bml0W10+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBUT0RPIGZpZ3VyZSBvdXQgYSBiZXR0ZXIgZXJyb3IgaGFuZGxlclxyXG4gICAgICAgIC8vIGluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1heSBzZW5kIHRoZSBzZXJ2ZXIgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgIC8vIGluc3RlYWQgb2YganVzdCBsb2dnaW5nIGl0IHRvIHRoZSBjb25zb2xlXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxufSJdfQ==