System.register(['@angular/core', '@angular/router', './cases/case.service', './casefiles/casefile.service', './properties/property.service', './requesters/requester.service', './authentication/authentication.service', './authentication/login.component', './authentication/is-loggedin'], function(exports_1, context_1) {
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
    var core_1, router_1, case_service_1, casefile_service_1, property_service_1, requester_service_1, authentication_service_1, login_component_1, is_loggedin_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (case_service_1_1) {
                case_service_1 = case_service_1_1;
            },
            function (casefile_service_1_1) {
                casefile_service_1 = casefile_service_1_1;
            },
            function (property_service_1_1) {
                property_service_1 = property_service_1_1;
            },
            function (requester_service_1_1) {
                requester_service_1 = requester_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (is_loggedin_1_1) {
                is_loggedin_1 = is_loggedin_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //if (!isLoggedin()) {this.router.navigateByUrl('login');}
                    setTimeout(function () { if (!is_loggedin_1.isLoggedin()) {
                        _this.router.navigateByUrl('login');
                    } }, 500);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent],
                        providers: [
                            property_service_1.PropertyService,
                            requester_service_1.RequesterService,
                            case_service_1.CaseService,
                            casefile_service_1.CasefileService,
                            authentication_service_1.AuthenticationService
                        ]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//     links: string[] = [];
//
//     constructor(){
//         this.resetLinks();
//     }
//
//     ngOnChanges(changes: {[propName: string]: SimpleChange}) {
//         console.log('ngOnChanges - myProp = ' + changes['myProp'].currentValue);
//         this.resetLinks();
//     }
//
//     resetLinks(){
//         if (isLoggedin()) {
//             this.links.length = 0;
//             this.links.push('logout');
//             this.links.push('workbench');
//         }
//         else {
//             this.links.length = 0;
//             this.links.push('login');
//         }
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBRUksc0JBQW1CLE1BQWM7b0JBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtnQkFDakMsQ0FBQztnQkFFRCwrQkFBUSxHQUFSO29CQUFBLGlCQUdDO29CQUZHLDBEQUEwRDtvQkFDMUQsVUFBVSxDQUFDLGNBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyx3QkFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZGLENBQUM7Z0JBcEJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFdBQVcsRUFBRSx3QkFBd0I7d0JBQ3JDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdDQUFjLENBQUM7d0JBQy9DLFNBQVMsRUFBRTs0QkFDUCxrQ0FBZTs0QkFDZixvQ0FBZ0I7NEJBQ2hCLDBCQUFXOzRCQUNYLGtDQUFlOzRCQUNmLDhDQUFxQjt5QkFDeEI7cUJBQ0osQ0FBQzs7Z0NBQUE7Z0JBV0YsbUJBQUM7WUFBRCxDQUFDLEFBVkQsSUFVQztZQVZELHVDQVVDLENBQUE7Ozs7QUFDRCw0QkFBNEI7QUFDNUIsRUFBRTtBQUNGLHFCQUFxQjtBQUNyQiw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSLEVBQUU7QUFDRixpRUFBaUU7QUFDakUsbUZBQW1GO0FBQ25GLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IsRUFBRTtBQUNGLG9CQUFvQjtBQUNwQiw4QkFBOEI7QUFDOUIscUNBQXFDO0FBQ3JDLHlDQUF5QztBQUN6Qyw0Q0FBNEM7QUFDNUMsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDLFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0Nhc2VTZXJ2aWNlfSAgICAgICBmcm9tICcuL2Nhc2VzL2Nhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7Q2FzZWZpbGVTZXJ2aWNlfSAgIGZyb20gJy4vY2FzZWZpbGVzL2Nhc2VmaWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1Byb3BlcnR5U2VydmljZX0gICBmcm9tICcuL3Byb3BlcnRpZXMvcHJvcGVydHkuc2VydmljZSc7XHJcbmltcG9ydCB7UmVxdWVzdGVyU2VydmljZX0gIGZyb20gJy4vcmVxdWVzdGVycy9yZXF1ZXN0ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25TZXJ2aWNlfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2xvZ2luLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge2lzTG9nZ2VkaW59ICAgICAgICBmcm9tICcuL2F1dGhlbnRpY2F0aW9uL2lzLWxvZ2dlZGluJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgTG9naW5Db21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUHJvcGVydHlTZXJ2aWNlLFxyXG4gICAgICAgIFJlcXVlc3RlclNlcnZpY2UsXHJcbiAgICAgICAgQ2FzZVNlcnZpY2UsXHJcbiAgICAgICAgQ2FzZWZpbGVTZXJ2aWNlLFxyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vaWYgKCFpc0xvZ2dlZGluKCkpIHt0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCdsb2dpbicpO31cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4geyBpZiAoIWlzTG9nZ2VkaW4oKSkge3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ2xvZ2luJyk7fSB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxufVxyXG4vLyAgICAgbGlua3M6IHN0cmluZ1tdID0gW107XHJcbi8vXHJcbi8vICAgICBjb25zdHJ1Y3Rvcigpe1xyXG4vLyAgICAgICAgIHRoaXMucmVzZXRMaW5rcygpO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgbmdPbkNoYW5nZXMoY2hhbmdlczoge1twcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlfSkge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCduZ09uQ2hhbmdlcyAtIG15UHJvcCA9ICcgKyBjaGFuZ2VzWydteVByb3AnXS5jdXJyZW50VmFsdWUpO1xyXG4vLyAgICAgICAgIHRoaXMucmVzZXRMaW5rcygpO1xyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgcmVzZXRMaW5rcygpe1xyXG4vLyAgICAgICAgIGlmIChpc0xvZ2dlZGluKCkpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5saW5rcy5sZW5ndGggPSAwO1xyXG4vLyAgICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2goJ2xvZ291dCcpO1xyXG4vLyAgICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2goJ3dvcmtiZW5jaCcpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5saW5rcy5sZW5ndGggPSAwO1xyXG4vLyAgICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2goJ2xvZ2luJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbiJdfQ==