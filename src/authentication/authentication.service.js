System.register(['@angular/core', 'rxjs/Rx', 'rxjs/add/operator/map', 'rxjs/add/operator/of', '@angular/http', '@angular/router', '../app.settings'], function(exports_1, context_1) {
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
    var core_1, Rx_1, http_1, router_1, app_settings_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {},
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
                    return Rx_1.Observable.of(true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUdJLCtCQUFvQixLQUFXLEVBQVUsT0FBZTtvQkFBcEMsVUFBSyxHQUFMLEtBQUssQ0FBTTtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUFHLENBQUM7Z0JBRTVELHFDQUFLLEdBQUwsVUFBTSxRQUFnQixFQUFFLFFBQWdCO29CQUF4QyxpQkFvQkM7b0JBbkJHLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLGNBQU8sQ0FBQyxFQUFFLGVBQWUsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztvQkFFekgsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7eUJBQ3ZELEdBQUcsQ0FBQyxVQUFDLEdBQVM7d0JBQ1gsS0FBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDckIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7NEJBQzdDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzRCQUM3QyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUMzRCxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUN6RCxjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNqRCxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RSxDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLDRDQUE0Qzs0QkFDNUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7d0JBQzFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBRVgsQ0FBQztnQkFFSCxzQ0FBTSxHQUFOO29CQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7b0JBQ3RCLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RDLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RDLGNBQWMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3hDLGNBQWMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3ZDLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25DLGNBQWMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RDLE1BQU0sQ0FBQyxlQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUvQixDQUFDO2dCQXhDSDtvQkFBQyxpQkFBVSxFQUFFOzt5Q0FBQTtnQkF5Q2IsNEJBQUM7WUFBRCxDQUFDLEFBeENELElBd0NDO1lBeENELHlEQXdDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL29mJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZSwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMsIFVSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Um91dGVyLCBST1VURVJfRElSRUNUSVZFU30gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtBUFBfU0VUVElOR1N9ICAgZnJvbSAnLi4vYXBwLnNldHRpbmdzJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi91c2Vycy91c2VyJ1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcclxuICAgIHVzZXI6IFVzZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHt9XHJcblxyXG4gICAgbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBuZXcgSGVhZGVycyh7IFwiQXV0aG9yaXphdGlvblwiOiBcIkJhc2ljIFwiICsgYnRvYSh1c2VybmFtZSArIFwiOlwiICsgcGFzc3dvcmQpfSl9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KEFQUF9TRVRUSU5HUy5BVVRIX1VSTCwgbnVsbCwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCgocmVzIDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSByZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlci5pc19zdGFmZikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2ZpcnN0X25hbWUnLCB0aGlzLnVzZXIuZmlyc3RfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGFzdF9uYW1lJywgdGhpcy51c2VyLmxhc3RfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCB0aGlzLnVzZXIuZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2lzX3N0YWZmJywgdGhpcy51c2VyLmlzX3N0YWZmLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZG8gc29tZXRoaW5nIG1vcmUgcHJvZmVzc2lvbmFsIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnVGhpcyB1c2VyIGlzIG5vdCBhdXRob3JpemVkIScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuXHJcbiAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuICAgICAgdGhpcy51c2VyID0gdW5kZWZpbmVkO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VybmFtZScpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdwYXNzd29yZCcpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdmaXJzdF9uYW1lJyk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhc3RfbmFtZScpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdlbWFpbCcpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdpc19zdGFmZicpO1xyXG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih0cnVlKTtcclxuXHJcbiAgfVxyXG59Il19