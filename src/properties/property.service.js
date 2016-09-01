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
    var PropertyService;
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
            PropertyService = (function () {
                function PropertyService(http) {
                    this.http = http;
                }
                PropertyService.prototype.getProperty = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.get(app_settings_1.APP_SETTINGS.PROPERTIES_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PropertyService.prototype.getProperties = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
                    return this.http.get(app_settings_1.APP_SETTINGS.PROPERTIES_URL, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PropertyService.prototype.createProperty = function (property) {
                    var body = JSON.stringify(property);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    return this.http.post(app_settings_1.APP_SETTINGS.PROPERTIES_URL, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PropertyService.prototype.updateProperty = function (property) {
                    // pull out the ID
                    var id = property.id;
                    delete property['id'];
                    var body = JSON.stringify(property);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    //let options = new RequestOptions({headers: new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) });
                    return this.http.put(app_settings_1.APP_SETTINGS.PROPERTIES_URL + id + '/', body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                PropertyService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                PropertyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PropertyService);
                return PropertyService;
            }());
            exports_1("PropertyService", PropertyService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3BlcnR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUNJLHlCQUFxQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07Z0JBQUcsQ0FBQztnQkFFbkMscUNBQVcsR0FBWCxVQUFhLEVBQW1CO29CQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7b0JBRWxGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLGNBQWMsR0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFDLE9BQU8sQ0FBQzt5QkFDM0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQVcsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFyQixDQUFxQixDQUFDO3lCQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELHVDQUFhLEdBQWIsVUFBZSxVQUE0QjtvQkFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMscUJBQXFCLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7b0JBRXRHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUM7eUJBQ3JELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFhLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQzt5QkFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCx3Q0FBYyxHQUFkLFVBQWdCLFFBQWtCO29CQUM5QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7b0JBRTlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUM1RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBVyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXJCLENBQXFCLENBQUM7eUJBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ2hDLENBQUM7Z0JBRUQsd0NBQWMsR0FBZCxVQUFnQixRQUFrQjtvQkFDOUIsa0JBQWtCO29CQUNsQixJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO29CQUNyQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO29CQUM5RSxrSUFBa0k7b0JBR2xJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLGNBQWMsR0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ2xFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFXLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQzt5QkFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFTyxxQ0FBVyxHQUFuQixVQUFxQixLQUFlO29CQUNoQyx5Q0FBeUM7b0JBQ3pDLG9GQUFvRjtvQkFDcEYsNENBQTRDO29CQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQWxETDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkFtRGIsc0JBQUM7WUFBRCxDQUFDLEFBbERELElBa0RDO1lBbERELDZDQWtEQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1Byb3BlcnR5fSAgICAgICBmcm9tICcuL3Byb3BlcnR5JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0IHtBUFBfU0VUVElOR1N9ICAgZnJvbSAnLi4vYXBwLnNldHRpbmdzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5U2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIGdldFByb3BlcnR5IChpZDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBBUFBfU0VUVElOR1MuTUlOX0FVVEhfSlNPTl9IRUFERVJTIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBUFBfU0VUVElOR1MuUFJPUEVSVElFU19VUkwraWQrJy8nLG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxQcm9wZXJ0eT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0UHJvcGVydGllcyAoc2VhcmNoQXJncz86IFVSTFNlYXJjaFBhcmFtcykge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogQVBQX1NFVFRJTkdTLk1JTl9BVVRIX0pTT05fSEVBREVSUywgc2VhcmNoOiBzZWFyY2hBcmdzIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBUFBfU0VUVElOR1MuUFJPUEVSVElFU19VUkwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxQcm9wZXJ0eVtdPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUHJvcGVydHkgKHByb3BlcnR5OiBQcm9wZXJ0eSkgOiBPYnNlcnZhYmxlPFByb3BlcnR5PiB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShwcm9wZXJ0eSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBBUFBfU0VUVElOR1MuQVVUSF9KU09OX0hFQURFUlMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChBUFBfU0VUVElOR1MuUFJPUEVSVElFU19VUkwsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxQcm9wZXJ0eT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvcGVydHkgKHByb3BlcnR5OiBQcm9wZXJ0eSkgOiBPYnNlcnZhYmxlPFByb3BlcnR5PiB7XHJcbiAgICAgICAgLy8gcHVsbCBvdXQgdGhlIElEXHJcbiAgICAgICAgbGV0IGlkID0gcHJvcGVydHkuaWQ7XHJcbiAgICAgICAgZGVsZXRlIHByb3BlcnR5WydpZCddO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHByb3BlcnR5KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuICAgICAgICAvL2xldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkgfSk7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChBUFBfU0VUVElOR1MuUFJPUEVSVElFU19VUkwraWQrJy8nLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8UHJvcGVydHk+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIC8vIFRPRE8gZmlndXJlIG91dCBhIGJldHRlciBlcnJvciBoYW5kbGVyXHJcbiAgICAgICAgLy8gaW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWF5IHNlbmQgdGhlIHNlcnZlciB0byBzb21lIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBqdXN0IGxvZ2dpbmcgaXQgdG8gdGhlIGNvbnNvbGVcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG59Il19