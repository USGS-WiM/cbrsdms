System.register(['@angular/core', '@angular/router', '../systemunits/systemunit.service'], function(exports_1, context_1) {
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
    var core_1, router_1, systemunit_service_1;
    var ReportListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (systemunit_service_1_1) {
                systemunit_service_1 = systemunit_service_1_1;
            }],
        execute: function() {
            ReportListComponent = (function () {
                function ReportListComponent(_router, _systemunitService) {
                    this._router = _router;
                    this._systemunitService = _systemunitService;
                    this.notready = true;
                    this._getSystemunits();
                }
                ReportListComponent.prototype._getSystemunits = function () {
                    var _this = this;
                    this._systemunitService.getSystemunits()
                        .subscribe(function (systemunits) {
                        _this.systemunits = systemunits;
                        _this.notready = false;
                    }, function (error) { return _this._errorMessage = error; });
                };
                ReportListComponent.prototype.goToCasesByUnit = function (unit) {
                    this._router.navigate(['/reports/casesbyunit'], { queryParams: { 'units': unit } });
                };
                ReportListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/reports/report-list.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [systemunit_service_1.SystemunitService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, systemunit_service_1.SystemunitService])
                ], ReportListComponent);
                return ReportListComponent;
            }());
            exports_1("ReportListComponent", ReportListComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBV0E7Z0JBTUksNkJBQW9CLE9BQWUsRUFBVSxrQkFBcUM7b0JBQTlELFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFIbEYsYUFBUSxHQUFZLElBQUksQ0FBQztvQkFJckIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVPLDZDQUFlLEdBQXZCO29CQUFBLGlCQVFDO29CQVBHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUU7eUJBQ25DLFNBQVMsQ0FDTixVQUFBLFdBQVc7d0JBQ1AsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7d0JBQy9CLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFRLEtBQUssRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dCQUVELDZDQUFlLEdBQWYsVUFBZ0IsSUFBUztvQkFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBQyxFQUFDLENBQUUsQ0FBQztnQkFDdEYsQ0FBQztnQkE1Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxXQUFXLEVBQUUsd0NBQXdDO3dCQUNyRCxVQUFVLEVBQUMsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDOUIsU0FBUyxFQUFFLENBQUMsc0NBQWlCLENBQUM7cUJBQ2pDLENBQUM7O3VDQUFBO2dCQTBCRiwwQkFBQztZQUFELENBQUMsQUF4QkQsSUF3QkM7WUF4QkQscURBd0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTeXN0ZW11bml0fSAgICAgICAgZnJvbSAnLi4vc3lzdGVtdW5pdHMvc3lzdGVtdW5pdCc7XHJcbmltcG9ydCB7U3lzdGVtdW5pdFNlcnZpY2V9IGZyb20gJy4uL3N5c3RlbXVuaXRzL3N5c3RlbXVuaXQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3JlcG9ydHMvcmVwb3J0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbU3lzdGVtdW5pdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0TGlzdENvbXBvbmVudCAge1xyXG5cclxuICAgIHN5c3RlbXVuaXRzOiBTeXN0ZW11bml0W107XHJcbiAgICBub3RyZWFkeTogQm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9lcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfc3lzdGVtdW5pdFNlcnZpY2U6IFN5c3RlbXVuaXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fZ2V0U3lzdGVtdW5pdHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRTeXN0ZW11bml0cygpIHtcclxuICAgICAgICB0aGlzLl9zeXN0ZW11bml0U2VydmljZS5nZXRTeXN0ZW11bml0cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBzeXN0ZW11bml0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeXN0ZW11bml0cyA9IHN5c3RlbXVuaXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90cmVhZHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvQ2FzZXNCeVVuaXQodW5pdDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKCBbJy9yZXBvcnRzL2Nhc2VzYnl1bml0J10sIHtxdWVyeVBhcmFtczogeyd1bml0cyc6IHVuaXR9fSApO1xyXG4gICAgfVxyXG5cclxufSJdfQ==