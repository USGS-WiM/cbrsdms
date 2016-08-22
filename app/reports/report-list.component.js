"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var systemunit_service_1 = require('../systemunits/systemunit.service');
var ReportListComponent = (function () {
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
exports.ReportListComponent = ReportListComponent;
//# sourceMappingURL=report-list.component.js.map