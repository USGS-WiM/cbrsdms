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
    var SystemmapService;
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
            SystemmapService = (function () {
                function SystemmapService(http) {
                    this.http = http;
                }
                SystemmapService.prototype.getSystemmap = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.get(app_settings_1.APP_SETTINGS.SYSTEMMAPS_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                SystemmapService.prototype.getSystemmaps = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
                    return this.http.get(app_settings_1.APP_SETTINGS.SYSTEMMAPS_URL, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                SystemmapService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                SystemmapService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SystemmapService);
                return SystemmapService;
            }());
            exports_1("SystemmapService", SystemmapService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtbWFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzeXN0ZW1tYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQ0ksMEJBQXFCLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFBRyxDQUFDO2dCQUVuQyx1Q0FBWSxHQUFaLFVBQWMsRUFBbUI7b0JBQzdCLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztvQkFFbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsY0FBYyxHQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO3lCQUM1RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXRCLENBQXNCLENBQUM7eUJBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsd0NBQWEsR0FBYixVQUFlLFVBQTRCO29CQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFFdEcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQzt5QkFDckQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQWMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUF4QixDQUF3QixDQUFDO3lCQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVPLHNDQUFXLEdBQW5CLFVBQXFCLEtBQWU7b0JBQ2hDLHlDQUF5QztvQkFDekMsb0ZBQW9GO29CQUNwRiw0Q0FBNEM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBMUJMO29CQUFDLGlCQUFVLEVBQUU7O29DQUFBO2dCQTJCYix1QkFBQztZQUFELENBQUMsQUExQkQsSUEwQkM7WUExQkQsK0NBMEJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7U3lzdGVtbWFwfSAgICAgZnJvbSAnLi9zeXN0ZW1tYXAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQge0FQUF9TRVRUSU5HU30gICBmcm9tICcuLi9hcHAuc2V0dGluZ3MnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3lzdGVtbWFwU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGdldFN5c3RlbW1hcCAoaWQ6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogQVBQX1NFVFRJTkdTLk1JTl9BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBUFBfU0VUVElOR1MuU1lTVEVNTUFQU19VUkwraWQrJy8nLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8U3lzdGVtbWFwPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRTeXN0ZW1tYXBzIChzZWFyY2hBcmdzPzogVVJMU2VhcmNoUGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBBUFBfU0VUVElOR1MuTUlOX0FVVEhfSlNPTl9IRUFERVJTLCBzZWFyY2g6IHNlYXJjaEFyZ3MgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQVBQX1NFVFRJTkdTLlNZU1RFTU1BUFNfVVJMLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8U3lzdGVtbWFwW10+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBUT0RPIGZpZ3VyZSBvdXQgYSBiZXR0ZXIgZXJyb3IgaGFuZGxlclxyXG4gICAgICAgIC8vIGluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1heSBzZW5kIHRoZSBzZXJ2ZXIgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgIC8vIGluc3RlYWQgb2YganVzdCBsb2dnaW5nIGl0IHRvIHRoZSBjb25zb2xlXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxufSJdfQ==