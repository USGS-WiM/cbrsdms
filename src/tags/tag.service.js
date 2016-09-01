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
    var TagService;
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
            TagService = (function () {
                function TagService(http) {
                    this.http = http;
                }
                TagService.prototype.getTag = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.get(app_settings_1.APP_SETTINGS.TAGS_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                TagService.prototype.getTags = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
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
                TagService.prototype.deleteTag = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.delete(app_settings_1.APP_SETTINGS.TAGS_URL + id + '/', options);
                    //.map(res => console.log(res))
                    //.catch(this.handleError);
                };
                TagService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                TagService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TagService);
                return TagService;
            }());
            exports_1("TagService", TagService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBQ0ksb0JBQXFCLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFBRyxDQUFDO2dCQUVuQywyQkFBTSxHQUFOLFVBQVEsRUFBbUI7b0JBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztvQkFFbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsUUFBUSxHQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO3lCQUN0RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBTSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQWhCLENBQWdCLENBQUM7eUJBQzVCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsNEJBQU8sR0FBUCxVQUFTLFVBQTRCO29CQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztvQkFFdEcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzt5QkFDL0MsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQVEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFsQixDQUFrQixDQUFDO3lCQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2dCQUVELDhCQUFTLEdBQVQsVUFBVyxHQUFRO29CQUNmLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQy9CLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztvQkFFOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ3RELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQzt5QkFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCw4QkFBUyxHQUFULFVBQVcsR0FBUTtvQkFDZixrQkFBa0I7b0JBQ2xCLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQ2hCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVqQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMvQixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7b0JBRTlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFFBQVEsR0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQzVELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQzt5QkFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtnQkFDaEMsQ0FBQztnQkFFRCw4QkFBUyxHQUFULFVBQVcsRUFBbUI7b0JBQzFCLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztvQkFFbEYsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsUUFBUSxHQUFDLEVBQUUsR0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBQzNELCtCQUErQjtvQkFDL0IsMkJBQTJCO2dCQUNuQyxDQUFDO2dCQUVPLGdDQUFXLEdBQW5CLFVBQXFCLEtBQWU7b0JBQ2hDLHlDQUF5QztvQkFDekMsb0ZBQW9GO29CQUNwRiw0Q0FBNEM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBeERMO29CQUFDLGlCQUFVLEVBQUU7OzhCQUFBO2dCQXlEYixpQkFBQztZQUFELENBQUMsQUF4REQsSUF3REM7WUF4REQsbUNBd0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7VGFnfSAgICAgICAgICAgIGZyb20gJy4vdGFnJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0IHtBUFBfU0VUVElOR1N9ICAgZnJvbSAnLi4vYXBwLnNldHRpbmdzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhZ1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBnZXRUYWcgKGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5NSU5fQVVUSF9KU09OX0hFQURFUlMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEFQUF9TRVRUSU5HUy5UQUdTX1VSTCtpZCsnLycsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxUYWc+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICBcclxuICAgIGdldFRhZ3MgKHNlYXJjaEFyZ3M/OiBVUkxTZWFyY2hQYXJhbXMpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5NSU5fQVVUSF9KU09OX0hFQURFUlMsIHNlYXJjaDogc2VhcmNoQXJncyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQVBQX1NFVFRJTkdTLlRBR1NfVVJMLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8VGFnW10+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYWcgKHRhZzogVGFnKSA6IE9ic2VydmFibGU8VGFnPiB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0YWcpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogQVBQX1NFVFRJTkdTLkFVVEhfSlNPTl9IRUFERVJTIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoQVBQX1NFVFRJTkdTLlRBR1NfVVJMLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8VGFnPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlVGFnICh0YWc6IFRhZykgOiBPYnNlcnZhYmxlPFRhZz4ge1xyXG4gICAgICAgIC8vIHB1bGwgb3V0IHRoZSBJRFxyXG4gICAgICAgIGxldCBpZCA9IHRhZy5pZDtcclxuICAgICAgICBkZWxldGUgdGFnWydpZCddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodGFnKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dChBUFBfU0VUVElOR1MuVEFHU19VUkwraWQrJy8nLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8VGFnPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYWcgKGlkOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5NSU5fQVVUSF9KU09OX0hFQURFUlMgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKEFQUF9TRVRUSU5HUy5UQUdTX1VSTCtpZCsnLycsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAvLy5tYXAocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAgICAgICAgICAgIC8vLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIC8vIFRPRE8gZmlndXJlIG91dCBhIGJldHRlciBlcnJvciBoYW5kbGVyXHJcbiAgICAgICAgLy8gaW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWF5IHNlbmQgdGhlIHNlcnZlciB0byBzb21lIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBqdXN0IGxvZ2dpbmcgaXQgdG8gdGhlIGNvbnNvbGVcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG59Il19