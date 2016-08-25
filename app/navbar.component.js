System.register(['@angular/core', '@angular/router', './authentication/authentication.service', './authentication/is-loggedin'], function(exports_1, context_1) {
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
    var core_1, router_1, authentication_service_1, is_loggedin_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent(auth, _router) {
                    this.auth = auth;
                    this._router = _router;
                    this.hideNavbar = false;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    this.hideNavbar = !is_loggedin_1.isLoggedin();
                    this.first_name = sessionStorage.getItem('first_name');
                    this.last_name = sessionStorage.getItem('last_name');
                };
                NavbarComponent.prototype.onLogout = function () {
                    this.auth.logout();
                };
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        templateUrl: 'app/navbar.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [authentication_service_1.AuthenticationService]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFLSSx5QkFBbUIsSUFBMkIsRUFBVSxPQUFlO29CQUFwRCxTQUFJLEdBQUosSUFBSSxDQUF1QjtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUp2RSxlQUFVLEdBQVcsS0FBSyxDQUFDO2dCQUszQixDQUFDO2dCQUVELGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLHdCQUFVLEVBQUUsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBRUQsa0NBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQXRCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixXQUFXLEVBQUUsMkJBQTJCO3dCQUN4QyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMsOENBQXFCLENBQUM7cUJBQ3JDLENBQUM7O21DQUFBO2dCQW1CRixzQkFBQztZQUFELENBQUMsQUFsQkQsSUFrQkM7WUFsQkQsNkNBa0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uU2VydmljZX0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7aXNMb2dnZWRpbn0gICAgICAgIGZyb20gJy4vYXV0aGVudGljYXRpb24vaXMtbG9nZ2VkaW4nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdmJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0F1dGhlbnRpY2F0aW9uU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBoaWRlTmF2YmFyOkJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGZpcnN0X25hbWU6IHN0cmluZztcclxuICAgIGxhc3RfbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhdXRoOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlTmF2YmFyID0gIWlzTG9nZ2VkaW4oKTtcclxuICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdmaXJzdF9uYW1lJyk7XHJcbiAgICAgICAgdGhpcy5sYXN0X25hbWUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYXN0X25hbWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLmF1dGgubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG59Il19