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
    var CommentService;
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
            CommentService = (function () {
                function CommentService(http) {
                    this.http = http;
                }
                CommentService.prototype.getComment = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.get(app_settings_1.APP_SETTINGS.COMMENTS_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CommentService.prototype.getComments = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
                    return this.http.get(app_settings_1.APP_SETTINGS.COMMENTS_URL, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CommentService.prototype.createComment = function (comment) {
                    var acomment = { 'case': comment.caseid, 'comment': comment.comment };
                    var body = JSON.stringify(acomment);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    //let options = new RequestOptions({headers: new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) });
                    return this.http.post(app_settings_1.APP_SETTINGS.COMMENTS_URL, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CommentService.prototype.updateComment = function (comment) {
                    // pull out the ID
                    var id = comment.id;
                    delete comment['id'];
                    var body = JSON.stringify(comment);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    return this.http.put(app_settings_1.APP_SETTINGS.COMMENTS_URL + id + '/', body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CommentService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                CommentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CommentService);
                return CommentService;
            }());
            exports_1("CommentService", CommentService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFDSSx3QkFBcUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUFHLENBQUM7Z0JBRW5DLG1DQUFVLEdBQVYsVUFBWSxFQUFtQjtvQkFDM0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO29CQUVsRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxZQUFZLEdBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7eUJBQzFELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYLFVBQWEsVUFBNEI7b0JBQ3JDLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUV0RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO3lCQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBWSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXRCLENBQXNCLENBQUM7eUJBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsc0NBQWEsR0FBYixVQUFlLE9BQWdCO29CQUMzQixJQUFJLFFBQVEsR0FBRyxFQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFDLENBQUM7b0JBQ3BFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BDLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztvQkFDOUUsa0lBQWtJO29CQUVsSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzt5QkFDMUQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQVUsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFwQixDQUFvQixDQUFDO3lCQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNoQyxDQUFDO2dCQUVELHNDQUFhLEdBQWIsVUFBZSxPQUFnQjtvQkFDM0Isa0JBQWtCO29CQUNsQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO29CQUNwQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO29CQUU5RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxZQUFZLEdBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUNoRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBVSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXBCLENBQW9CLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7Z0JBQ2hDLENBQUM7Z0JBRU8sb0NBQVcsR0FBbkIsVUFBcUIsS0FBZTtvQkFDaEMseUNBQXlDO29CQUN6QyxvRkFBb0Y7b0JBQ3BGLDRDQUE0QztvQkFDNUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxjQUFjLENBQUMsQ0FBQztnQkFDbEUsQ0FBQztnQkFsREw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBbURiLHFCQUFDO1lBQUQsQ0FBQyxBQWxERCxJQWtEQztZQWxERCwyQ0FrREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucywgVVJMU2VhcmNoUGFyYW1zfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtDb21tZW50fSAgICAgICAgZnJvbSAnLi9jb21tZW50JztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0IHtBUFBfU0VUVElOR1N9ICAgZnJvbSAnLi4vYXBwLnNldHRpbmdzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbW1lbnRTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgZ2V0Q29tbWVudCAoaWQ6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogQVBQX1NFVFRJTkdTLk1JTl9BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBUFBfU0VUVElOR1MuQ09NTUVOVFNfVVJMK2lkKycvJywgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPENvbW1lbnQ+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICBcclxuICAgIGdldENvbW1lbnRzIChzZWFyY2hBcmdzPzogVVJMU2VhcmNoUGFyYW1zKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBBUFBfU0VUVElOR1MuTUlOX0FVVEhfSlNPTl9IRUFERVJTLCBzZWFyY2g6IHNlYXJjaEFyZ3MgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQVBQX1NFVFRJTkdTLkNPTU1FTlRTX1VSTCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPENvbW1lbnRbXT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbW1lbnQgKGNvbW1lbnQ6IENvbW1lbnQpIDogT2JzZXJ2YWJsZTxDb21tZW50PiB7XHJcbiAgICAgICAgbGV0IGFjb21tZW50ID0geydjYXNlJzogY29tbWVudC5jYXNlaWQsICdjb21tZW50JzogY29tbWVudC5jb21tZW50fTtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGFjb21tZW50KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuICAgICAgICAvL2xldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBuZXcgSGVhZGVycyh7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSkgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChBUFBfU0VUVElOR1MuQ09NTUVOVFNfVVJMLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8Q29tbWVudD4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZUNvbW1lbnQgKGNvbW1lbnQ6IENvbW1lbnQpIDogT2JzZXJ2YWJsZTxDb21tZW50PiB7XHJcbiAgICAgICAgLy8gcHVsbCBvdXQgdGhlIElEXHJcbiAgICAgICAgbGV0IGlkID0gY29tbWVudC5pZDtcclxuICAgICAgICBkZWxldGUgY29tbWVudFsnaWQnXTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogQVBQX1NFVFRJTkdTLkFVVEhfSlNPTl9IRUFERVJTIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KEFQUF9TRVRUSU5HUy5DT01NRU5UU19VUkwraWQrJy8nLCBib2R5LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiA8Q29tbWVudD4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy8gVE9ETyBmaWd1cmUgb3V0IGEgYmV0dGVyIGVycm9yIGhhbmRsZXJcclxuICAgICAgICAvLyBpbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtYXkgc2VuZCB0aGUgc2VydmVyIHRvIHNvbWUgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGp1c3QgbG9nZ2luZyBpdCB0byB0aGUgY29uc29sZVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcbn0iXX0=