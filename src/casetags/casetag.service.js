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
    var CasetagService;
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
            CasetagService = (function () {
                function CasetagService(http) {
                    this.http = http;
                }
                CasetagService.prototype.getCasetag = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.get(app_settings_1.APP_SETTINGS.CASETAGS_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CasetagService.prototype.getCasetags = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
                    return this.http.get(app_settings_1.APP_SETTINGS.CASETAGS_URL, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CasetagService.prototype.createCasetag = function (casetag) {
                    var acasetag = { 'case': casetag.caseid, 'tag': casetag.tag };
                    var body = JSON.stringify(acasetag);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    //let options = new RequestOptions({headers: new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) });
                    return this.http.post(app_settings_1.APP_SETTINGS.CASETAGS_URL, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CasetagService.prototype.updateCasetag = function (casetag) {
                    // pull out the ID
                    var id = casetag.id;
                    delete casetag['id'];
                    var body = JSON.stringify(casetag);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    return this.http.put(app_settings_1.APP_SETTINGS.CASETAGS_URL + id + '/', body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CasetagService.prototype.deleteCasetag = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.delete(app_settings_1.APP_SETTINGS.CASETAGS_URL + id + '/', options);
                };
                CasetagService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                CasetagService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CasetagService);
                return CasetagService;
            }());
            exports_1("CasetagService", CasetagService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZXRhZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FzZXRhZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFDSSx3QkFBcUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUFHLENBQUM7Z0JBRW5DLG1DQUFVLEdBQVYsVUFBWSxFQUFtQjtvQkFDM0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO29CQUVsRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxZQUFZLEdBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7eUJBQzFELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYLFVBQWEsVUFBNEI7b0JBQ3JDLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUV0RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO3lCQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXRCLENBQXNCLENBQUM7eUJBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsc0NBQWEsR0FBYixVQUFlLE9BQWdCO29CQUMzQixJQUFJLFFBQVEsR0FBRyxFQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFDLENBQUM7b0JBQzVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BDLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztvQkFDOUUsa0lBQWtJO29CQUVsSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDMUQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQVUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFwQixDQUFvQixDQUFDO3lCQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDO2dCQUVELHNDQUFhLEdBQWIsVUFBZSxPQUFnQjtvQkFDM0Isa0JBQWtCO29CQUNsQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUNwQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO29CQUU5RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxZQUFZLEdBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUNoRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBVSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXBCLENBQW9CLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ2hDLENBQUM7Z0JBRUQsc0NBQWEsR0FBYixVQUFlLEVBQW1CO29CQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsMkJBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7b0JBRWxGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLFlBQVksR0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN2RSxDQUFDO2dCQUVPLG9DQUFXLEdBQW5CLFVBQXFCLEtBQWU7b0JBQ2hDLHlDQUF5QztvQkFDekMsb0ZBQW9GO29CQUNwRiw0Q0FBNEM7b0JBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7Z0JBeERMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXlEYixxQkFBQztZQUFELENBQUMsQUF4REQsSUF3REM7WUF4REQsMkNBd0RDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9ICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Q2FzZXRhZ30gICAgICAgICAgICBmcm9tICcuL2Nhc2V0YWcnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQge0FQUF9TRVRUSU5HU30gICBmcm9tICcuLi9hcHAuc2V0dGluZ3MnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FzZXRhZ1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBnZXRDYXNldGFnIChpZDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBBUFBfU0VUVElOR1MuTUlOX0FVVEhfSlNPTl9IRUFERVJTIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBUFBfU0VUVElOR1MuQ0FTRVRBR1NfVVJMK2lkKycvJywgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPENhc2V0YWc+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICBcclxuICAgIGdldENhc2V0YWdzIChzZWFyY2hBcmdzPzogVVJMU2VhcmNoUGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBBUFBfU0VUVElOR1MuTUlOX0FVVEhfSlNPTl9IRUFERVJTLCBzZWFyY2g6IHNlYXJjaEFyZ3MgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEFQUF9TRVRUSU5HUy5DQVNFVEFHU19VUkwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxDYXNldGFnW10+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYXNldGFnIChjYXNldGFnOiBDYXNldGFnKSA6IE9ic2VydmFibGU8Q2FzZXRhZz4ge1xyXG4gICAgICAgIGxldCBhY2FzZXRhZyA9IHsnY2FzZSc6IGNhc2V0YWcuY2FzZWlkLCAndGFnJzogY2FzZXRhZy50YWd9O1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoYWNhc2V0YWcpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogQVBQX1NFVFRJTkdTLkFVVEhfSlNPTl9IRUFERVJTIH0pO1xyXG4gICAgICAgIC8vbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoe2hlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEFQUF9TRVRUSU5HUy5DQVNFVEFHU19VUkwsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxDYXNldGFnPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlQ2FzZXRhZyAoY2FzZXRhZzogQ2FzZXRhZykgOiBPYnNlcnZhYmxlPENhc2V0YWc+IHtcclxuICAgICAgICAvLyBwdWxsIG91dCB0aGUgSURcclxuICAgICAgICBsZXQgaWQgPSBjYXNldGFnLmlkO1xyXG4gICAgICAgIGRlbGV0ZSBjYXNldGFnWydpZCddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoY2FzZXRhZyk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBBUFBfU0VUVElOR1MuQVVUSF9KU09OX0hFQURFUlMgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoQVBQX1NFVFRJTkdTLkNBU0VUQUdTX1VSTCtpZCsnLycsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxDYXNldGFnPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDYXNldGFnIChpZDogbnVtYmVyIHwgc3RyaW5nKSA6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5NSU5fQVVUSF9KU09OX0hFQURFUlMgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoQVBQX1NFVFRJTkdTLkNBU0VUQUdTX1VSTCtpZCsnLycsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgIC8vIFRPRE8gZmlndXJlIG91dCBhIGJldHRlciBlcnJvciBoYW5kbGVyXHJcbiAgICAgICAgLy8gaW4gYSByZWFsIHdvcmxkIGFwcCwgd2UgbWF5IHNlbmQgdGhlIHNlcnZlciB0byBzb21lIHJlbW90ZSBsb2dnaW5nIGluZnJhc3RydWN0dXJlXHJcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBqdXN0IGxvZ2dpbmcgaXQgdG8gdGhlIGNvbnNvbGVcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpO1xyXG4gICAgfVxyXG59Il19