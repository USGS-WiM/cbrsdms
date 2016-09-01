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
    var FieldofficeService;
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
            FieldofficeService = (function () {
                function FieldofficeService(http) {
                    this.http = http;
                }
                FieldofficeService.prototype.getFieldoffice = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.get(app_settings_1.APP_SETTINGS.FIELDOFFICES_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                FieldofficeService.prototype.getFieldoffices = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
                    return this.http.get(app_settings_1.APP_SETTINGS.FIELDOFFICES_URL, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                FieldofficeService.prototype.createFieldoffice = function (fieldoffice) {
                    var body = JSON.stringify(fieldoffice);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    //let options = new RequestOptions({headers: new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) });
                    return this.http.post(app_settings_1.APP_SETTINGS.FIELDOFFICES_URL, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                FieldofficeService.prototype.updateFieldoffice = function (fieldoffice) {
                    // pull out the ID
                    var id = fieldoffice.id;
                    delete fieldoffice['id'];
                    var body = JSON.stringify(fieldoffice);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    return this.http.put(app_settings_1.APP_SETTINGS.FIELDOFFICES_URL + id + '/', body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                FieldofficeService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                FieldofficeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FieldofficeService);
                return FieldofficeService;
            }());
            exports_1("FieldofficeService", FieldofficeService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRvZmZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpZWxkb2ZmaWNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUNJLDRCQUFxQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07Z0JBQUcsQ0FBQztnQkFFbkMsMkNBQWMsR0FBZCxVQUFnQixFQUFtQjtvQkFDL0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO29CQUVsRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxnQkFBZ0IsR0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQzt5QkFDOUQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQWMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUF4QixDQUF3QixDQUFDO3lCQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELDRDQUFlLEdBQWYsVUFBaUIsVUFBNEI7b0JBQ3pDLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUV0RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUM7eUJBQ3ZELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFnQixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQTFCLENBQTBCLENBQUM7eUJBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsOENBQWlCLEdBQWpCLFVBQW1CLFdBQXdCO29CQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7b0JBQzlFLGtJQUFrSTtvQkFFbEksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDOUQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQWMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUF4QixDQUF3QixDQUFDO3lCQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDO2dCQUVELDhDQUFpQixHQUFqQixVQUFtQixXQUF3QjtvQkFDdkMsa0JBQWtCO29CQUNsQixJQUFJLEVBQUUsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO29CQUN4QixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO29CQUU5RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxnQkFBZ0IsR0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ3BFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFjLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQzt5QkFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFTyx3Q0FBVyxHQUFuQixVQUFxQixLQUFlO29CQUNoQyx5Q0FBeUM7b0JBQ3pDLG9GQUFvRjtvQkFDcEYsNENBQTRDO29CQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQWpETDtvQkFBQyxpQkFBVSxFQUFFOztzQ0FBQTtnQkFrRGIseUJBQUM7WUFBRCxDQUFDLEFBakRELElBaURDO1lBakRELG1EQWlEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0ZpZWxkb2ZmaWNlfSAgICBmcm9tICcuL2ZpZWxkb2ZmaWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0IHtBUFBfU0VUVElOR1N9ICAgZnJvbSAnLi4vYXBwLnNldHRpbmdzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpZWxkb2ZmaWNlU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGdldEZpZWxkb2ZmaWNlIChpZDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBBUFBfU0VUVElOR1MuTUlOX0FVVEhfSlNPTl9IRUFERVJTIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEFQUF9TRVRUSU5HUy5GSUVMRE9GRklDRVNfVVJMK2lkKycvJywgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPEZpZWxkb2ZmaWNlPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRGaWVsZG9mZmljZXMgKHNlYXJjaEFyZ3M/OiBVUkxTZWFyY2hQYXJhbXMpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5NSU5fQVVUSF9KU09OX0hFQURFUlMsIHNlYXJjaDogc2VhcmNoQXJncyB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBUFBfU0VUVElOR1MuRklFTERPRkZJQ0VTX1VSTCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPEZpZWxkb2ZmaWNlW10+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGaWVsZG9mZmljZSAoZmllbGRvZmZpY2U6IEZpZWxkb2ZmaWNlKSA6IE9ic2VydmFibGU8RmllbGRvZmZpY2U+IHtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGZpZWxkb2ZmaWNlKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuICAgICAgICAvL2xldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChBUFBfU0VUVElOR1MuRklFTERPRkZJQ0VTX1VSTCwgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPEZpZWxkb2ZmaWNlPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlRmllbGRvZmZpY2UgKGZpZWxkb2ZmaWNlOiBGaWVsZG9mZmljZSkgOiBPYnNlcnZhYmxlPEZpZWxkb2ZmaWNlPiB7XHJcbiAgICAgICAgLy8gcHVsbCBvdXQgdGhlIElEXHJcbiAgICAgICAgbGV0IGlkID0gZmllbGRvZmZpY2UuaWQ7XHJcbiAgICAgICAgZGVsZXRlIGZpZWxkb2ZmaWNlWydpZCddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZmllbGRvZmZpY2UpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogQVBQX1NFVFRJTkdTLkFVVEhfSlNPTl9IRUFERVJTIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEFQUF9TRVRUSU5HUy5GSUVMRE9GRklDRVNfVVJMK2lkKycvJywgYm9keSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPEZpZWxkb2ZmaWNlPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yIChlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICAvLyBUT0RPIGZpZ3VyZSBvdXQgYSBiZXR0ZXIgZXJyb3IgaGFuZGxlclxyXG4gICAgICAgIC8vIGluIGEgcmVhbCB3b3JsZCBhcHAsIHdlIG1heSBzZW5kIHRoZSBzZXJ2ZXIgdG8gc29tZSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxyXG4gICAgICAgIC8vIGluc3RlYWQgb2YganVzdCBsb2dnaW5nIGl0IHRvIHRoZSBjb25zb2xlXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKTtcclxuICAgIH1cclxufSJdfQ==