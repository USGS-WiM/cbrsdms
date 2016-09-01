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
    var CaseService;
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
            CaseService = (function () {
                function CaseService(http) {
                    this.http = http;
                }
                CaseService.prototype.getCase = function (id) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS });
                    return this.http.get(app_settings_1.APP_SETTINGS.CASES_URL + id + '/', options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CaseService.prototype.getCases = function (searchArgs) {
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.MIN_AUTH_JSON_HEADERS, search: searchArgs });
                    return this.http.get(app_settings_1.APP_SETTINGS.CASES_URL, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CaseService.prototype.createCase = function (acase) {
                    var body = JSON.stringify(acase);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    return this.http.post(app_settings_1.APP_SETTINGS.CASES_URL, body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CaseService.prototype.updateCase = function (acase) {
                    // pull out the ID
                    var id = acase.id;
                    delete acase['id'];
                    var body = JSON.stringify(acase);
                    var options = new http_1.RequestOptions({ headers: app_settings_1.APP_SETTINGS.AUTH_JSON_HEADERS });
                    return this.http.put(app_settings_1.APP_SETTINGS.CASES_URL + id + '/', body, options)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CaseService.prototype.createFinalLeter = function (caseid) {
                    return new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    var filename = "";
                                    var disposition = xhr.getResponseHeader('Content-Disposition');
                                    if (disposition && disposition.indexOf('attachment') !== -1) {
                                        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                                        var matches = filenameRegex.exec(disposition);
                                        if (matches != null && matches[1])
                                            filename = matches[1].replace(/['"]/g, '');
                                    }
                                    resolve([xhr.response, filename]);
                                }
                                else {
                                    reject(xhr.response);
                                }
                            }
                        };
                        xhr.responseType = "blob";
                        xhr.open("GET", app_settings_1.APP_SETTINGS.CASES_URL + "?case_number=" + caseid + "&format=docx", true);
                        xhr.setRequestHeader("Authorization", "Basic " + btoa(sessionStorage.getItem('username') + ":" + sessionStorage.getItem('password')));
                        xhr.send();
                    });
                };
                CaseService.prototype.handleError = function (error) {
                    // TODO figure out a better error handler
                    // in a real world app, we may send the server to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                CaseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CaseService);
                return CaseService;
            }());
            exports_1("CaseService", CaseService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFDSSxxQkFBcUIsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUFHLENBQUM7Z0JBRW5DLDZCQUFPLEdBQVAsVUFBUyxFQUFtQjtvQkFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLDJCQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO29CQUVsRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxTQUFTLEdBQUMsRUFBRSxHQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7eUJBQ3ZELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQzt5QkFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsQ0FBQztnQkFFRCw4QkFBUSxHQUFSLFVBQVUsVUFBNEI7b0JBQ2xDLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSwyQkFBWSxDQUFDLHFCQUFxQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO29CQUV0RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO3lCQUNoRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQW5CLENBQW1CLENBQUM7eUJBQy9CLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsZ0NBQVUsR0FBVixVQUFZ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SUFBSSxDQUFDLEtBQUssRUFBRSwyQkFBWSxDQUFDLFNBQVMsR0FBQyxlQUFlLEdBQUMsTUFBTSxHQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDcEYsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN0SSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2YsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFTyxpQ0FBVyxHQUFuQixVQUFxQixLQUFlO29CQUNoQyx5Q0FBeUM7b0JBQ3pDLG9GQUFvRjtvQkFDcEYsNENBQTRDO29CQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDO2dCQUNsRSxDQUFDO2dCQTFFTDtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkEyRWIsa0JBQUM7WUFBRCxDQUFDLEFBMUVELElBMEVDO1lBMUVELHFDQTBFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0Nhc2V9ICAgICAgICAgICBmcm9tICcuL2Nhc2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvUngnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQge0FQUF9TRVRUSU5HU30gICBmcm9tICcuLi9hcHAuc2V0dGluZ3MnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FzZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBnZXRDYXNlIChpZDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBBUFBfU0VUVElOR1MuTUlOX0FVVEhfSlNPTl9IRUFERVJTIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChBUFBfU0VUVElOR1MuQ0FTRVNfVVJMK2lkKycvJywgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPENhc2U+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0Q2FzZXMgKHNlYXJjaEFyZ3M/OiBVUkxTZWFyY2hQYXJhbXMpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5NSU5fQVVUSF9KU09OX0hFQURFUlMsIHNlYXJjaDogc2VhcmNoQXJncyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQVBQX1NFVFRJTkdTLkNBU0VTX1VSTCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPENhc2VbXT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVDYXNlIChhY2FzZTogQ2FzZSkgOiBPYnNlcnZhYmxlPENhc2U+IHtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGFjYXNlKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEFQUF9TRVRUSU5HUy5DQVNFU19VUkwsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxDYXNlPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlQ2FzZSAoYWNhc2U6IENhc2UpIDogT2JzZXJ2YWJsZTxDYXNlPiB7XHJcbiAgICAgICAgLy8gcHVsbCBvdXQgdGhlIElEXHJcbiAgICAgICAgbGV0IGlkID0gYWNhc2UuaWQ7XHJcbiAgICAgICAgZGVsZXRlIGFjYXNlWydpZCddO1xyXG5cclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGFjYXNlKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IEFQUF9TRVRUSU5HUy5BVVRIX0pTT05fSEVBREVSUyB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoQVBQX1NFVFRJTkdTLkNBU0VTX1VSTCtpZCsnLycsIGJvZHksIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IDxDYXNlPiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcilcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGaW5hbExldGVyKGNhc2VpZDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbGVuYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3Bvc2l0aW9uID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LURpc3Bvc2l0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNwb3NpdGlvbiAmJiBkaXNwb3NpdGlvbi5pbmRleE9mKCdhdHRhY2htZW50JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZW5hbWVSZWdleCA9IC9maWxlbmFtZVteOz1cXG5dKj0oKFsnXCJdKS4qP1xcMnxbXjtcXG5dKikvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoZXMgPSBmaWxlbmFtZVJlZ2V4LmV4ZWMoZGlzcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdKSBmaWxlbmFtZSA9IG1hdGNoZXNbMV0ucmVwbGFjZSgvWydcIl0vZywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoW3hoci5yZXNwb25zZSwgZmlsZW5hbWVdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBcImJsb2JcIjtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgQVBQX1NFVFRJTkdTLkNBU0VTX1VSTCtcIj9jYXNlX251bWJlcj1cIitjYXNlaWQrXCImZm9ybWF0PWRvY3hcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBcIkJhc2ljIFwiICsgYnRvYShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpICsgXCI6XCIgKyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpKSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvciAoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgLy8gVE9ETyBmaWd1cmUgb3V0IGEgYmV0dGVyIGVycm9yIGhhbmRsZXJcclxuICAgICAgICAvLyBpbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtYXkgc2VuZCB0aGUgc2VydmVyIHRvIHNvbWUgcmVtb3RlIGxvZ2dpbmcgaW5mcmFzdHJ1Y3R1cmVcclxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGp1c3QgbG9nZ2luZyBpdCB0byB0aGUgY29uc29sZVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKS5lcnJvciB8fCAnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9XHJcbn0iXX0=