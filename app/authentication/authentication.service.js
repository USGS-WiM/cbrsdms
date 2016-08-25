System.register(['@angular/core', 'rxjs/Observable', '@angular/http', '@angular/router', '../app.settings'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1, router_1, app_settings_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            }],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                }
                AuthenticationService.prototype.login = function (username, password) {
                    var _this = this;
                    var options = new http_1.RequestOptions({ headers: new http_1.Headers({ "Authorization": "Basic " + btoa(username + ":" + password) }) });
                    return this._http.post(app_settings_1.APP_SETTINGS.AUTH_URL, null, options)
                        .map(function (res) {
                        _this.user = res.json();
                        if (_this.user.is_staff) {
                            sessionStorage.setItem('username', username);
                            sessionStorage.setItem('password', password);
                            sessionStorage.setItem('first_name', _this.user.first_name);
                            sessionStorage.setItem('last_name', _this.user.last_name);
                            sessionStorage.setItem('email', _this.user.email);
                            sessionStorage.setItem('is_staff', _this.user.is_staff.toString());
                        }
                        else {
                            // TODO: do something more professional here
                            alert('This user is not authorized!');
                        }
                    });
                };
                AuthenticationService.prototype.logout = function () {
                    this._router.navigate(['/login']);
                    this.user = undefined;
                    sessionStorage.removeItem('username');
                    sessionStorage.removeItem('password');
                    sessionStorage.removeItem('first_name');
                    sessionStorage.removeItem('last_name');
                    sessionStorage.removeItem('email');
                    sessionStorage.removeItem('is_staff');
                    return Observable_1.Observable.of(true);
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFHSSwrQkFBb0IsS0FBVyxFQUFVLE9BQWU7b0JBQXBDLFVBQUssR0FBTCxLQUFLLENBQU07b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtnQkFBRyxDQUFDO2dCQUU1RCxxQ0FBSyxHQUFMLFVBQU0sUUFBZ0IsRUFBRSxRQUFnQjtvQkFBeEMsaUJBb0JDO29CQW5CRyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxjQUFPLENBQUMsRUFBRSxlQUFlLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7b0JBRXpILE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO3lCQUN2RCxHQUFHLENBQUMsVUFBQyxHQUFTO3dCQUNYLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUN2QixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7NEJBQ3JCLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUM3QyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQzs0QkFDN0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDM0QsY0FBYyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDekQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDakQsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzt3QkFDdEUsQ0FBQzt3QkFDRCxJQUFJLENBQUMsQ0FBQzs0QkFDRiw0Q0FBNEM7NEJBQzVDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO3dCQUMxQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUVYLENBQUM7Z0JBRUgsc0NBQU0sR0FBTjtvQkFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUN0QixjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0QyxjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0QyxjQUFjLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN4QyxjQUFjLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN2QyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuQyxjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRS9CLENBQUM7Z0JBeENIO29CQUFDLGlCQUFVLEVBQUU7O3lDQUFBO2dCQXlDYiw0QkFBQztZQUFELENBQUMsQUF4Q0QsSUF3Q0M7WUF4Q0QseURBd0NDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QVBQX1NFVFRJTkdTfSAgIGZyb20gJy4uL2FwcC5zZXR0aW5ncyc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vdXNlcnMvdXNlcidcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxyXG5cclxuICAgIGxvZ2luKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7aGVhZGVyczogbmV3IEhlYWRlcnMoeyBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIGJ0b2EodXNlcm5hbWUgKyBcIjpcIiArIHBhc3N3b3JkKX0pfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChBUFBfU0VUVElOR1MuQVVUSF9VUkwsIG51bGwsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlcyA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIuaXNfc3RhZmYpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdmaXJzdF9uYW1lJywgdGhpcy51c2VyLmZpcnN0X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhc3RfbmFtZScsIHRoaXMudXNlci5sYXN0X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2VtYWlsJywgdGhpcy51c2VyLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdpc19zdGFmZicsIHRoaXMudXNlci5pc19zdGFmZi50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGRvIHNvbWV0aGluZyBtb3JlIHByb2Zlc3Npb25hbCBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1RoaXMgdXNlciBpcyBub3QgYXV0aG9yaXplZCEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcblxyXG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICAgIHRoaXMudXNlciA9IHVuZGVmaW5lZDtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcm5hbWUnKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgncGFzc3dvcmQnKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnZmlyc3RfbmFtZScpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdsYXN0X25hbWUnKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnZW1haWwnKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnaXNfc3RhZmYnKTtcclxuICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodHJ1ZSk7XHJcblxyXG4gIH1cclxufSJdfQ==