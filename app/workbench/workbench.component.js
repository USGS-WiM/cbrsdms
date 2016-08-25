System.register(['@angular/core', '@angular/router', '../navbar.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1;
    var WorkbenchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            }],
        execute: function() {
            WorkbenchComponent = (function () {
                function WorkbenchComponent() {
                }
                WorkbenchComponent = __decorate([
                    core_1.Component({
                        template: "<navbar></navbar><router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WorkbenchComponent);
                return WorkbenchComponent;
            }());
            exports_1("WorkbenchComponent", WorkbenchComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2JlbmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtiZW5jaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQTtnQkFBQTtnQkFBaUMsQ0FBQztnQkFKbEM7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsa0RBQWtEO3dCQUM1RCxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsRUFBRSxrQ0FBZSxDQUFDO3FCQUNsRCxDQUFDOztzQ0FBQTtnQkFDK0IseUJBQUM7WUFBRCxDQUFDLEFBQWxDLElBQWtDO1lBQWxDLG1EQUFrQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9ICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSAgIGZyb20gJy4uL25hdmJhci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogYDxuYXZiYXI+PC9uYXZiYXI+PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PmAsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgTmF2YmFyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV29ya2JlbmNoQ29tcG9uZW50IHt9XHJcbiJdfQ==