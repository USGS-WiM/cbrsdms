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
var http_1 = require('@angular/http');
var case_service_1 = require('../cases/case.service');
var systemunit_service_1 = require('../systemunits/systemunit.service');
var report_grid_component_1 = require('./report-grid.component');
var column_1 = require('../grid/column');
var app_utilities_1 = require('../app.utilities');
var ReportCasesByUnitComponent = (function () {
    function ReportCasesByUnitComponent(_router, _caseService, _systemunitService) {
        this._router = _router;
        this._caseService = _caseService;
        this._systemunitService = _systemunitService;
        this.cases_properties = [];
        this.notready = true;
    }
    ReportCasesByUnitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._router.routerState.queryParams
            .subscribe(function (params) {
            if (params['units']) {
                var urlSearchParams = 'view=report&cbrs_unit=' + params['units'];
                _this.selected_unit = Number(params['units']);
                _this._getCases(urlSearchParams);
                _this._getSystemunits();
                _this._getColumns();
            }
            else {
                _this._getCases();
                _this._getSystemunits();
                _this._getColumns();
            }
        });
    };
    ReportCasesByUnitComponent.prototype.ngOnDestroy = function () {
        if (this._params) {
            this._params.unsubscribe();
        }
    };
    ReportCasesByUnitComponent.prototype.onFilter = function (unit) {
        this.notready = false;
        this.selected_unit = unit;
        var urlSearchParams = (unit == '') ? null : 'view=report&cbrs_unit=' + unit.toString();
        this._getCases(urlSearchParams);
    };
    ReportCasesByUnitComponent.prototype.clearFilter = function () {
        this.notready = true;
        this.selected_unit = null;
        this._getCases();
    };
    ReportCasesByUnitComponent.prototype.exportToCSV = function () {
        var headers = [];
        this.columns.forEach(function (item) { headers.push(item.descr); });
        var filename = '';
        if (this.selected_unit) {
            var id_1 = this.selected_unit;
            var unit = this.systemunits.filter(function (obj) { return obj.id == id_1; });
            filename = 'Report_CasesByUnit_' + unit[0].system_unit_number + '_' + app_utilities_1.APP_DATETIME.TODAY + '.csv';
        }
        else {
            filename = 'Report_CasesByUnit_' + app_utilities_1.APP_DATETIME.TODAY + '.csv';
        }
        app_utilities_1.downloadCSV({ filename: filename, data: this.cases_properties, headers: headers });
    };
    ReportCasesByUnitComponent.prototype._getCases = function (newUrlSearchParams) {
        var _this = this;
        var urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'view=report';
        this._caseService.getCases(new http_1.URLSearchParams(urlSearchParams))
            .subscribe(function (cases) {
            _this._cases = cases;
            _this.cases_properties.length = 0;
            if (cases.length > 0) {
                for (var i = 0, j = _this._cases.length; i < j; i++) {
                    var case_property = _this._cases[i];
                    var address = case_property.property_string.split(',');
                    //address[1] === "" ? case_property.street_address = address[0] : case_property.street_address = address[1] + ", " + address[0];
                    case_property.street_address = address[0];
                    delete case_property['property_string'];
                    _this.cases_properties.push(case_property);
                    if (_this._cases.length == _this.cases_properties.length) {
                        _this._sortAndShow();
                    }
                }
            }
            else {
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    ReportCasesByUnitComponent.prototype._getSystemunits = function () {
        var _this = this;
        this._systemunitService.getSystemunits()
            .subscribe(function (systemunits) {
            _this.systemunits = systemunits;
        }, function (error) { return _this._errorMessage = error; });
    };
    ReportCasesByUnitComponent.prototype._getColumns = function () {
        this.columns = [
            new column_1.Column('id', 'Case Number'),
            new column_1.Column('status', 'Status'),
            new column_1.Column('prohibition_date', 'Prohibition Date'),
            new column_1.Column('cbrs_unit_string', 'CBRS Unit'),
            new column_1.Column('request_date', 'Request Date'),
            new column_1.Column('final_letter_date', 'Final Letter Date'),
            new column_1.Column('determination_string', 'Determination'),
            new column_1.Column('street_address', 'Street Address'),
        ];
    };
    ReportCasesByUnitComponent.prototype._sortAndShow = function () {
        this.cases_properties.sort(app_utilities_1.dynamicSortMultiple(['id']));
        this.notready = false;
    };
    ReportCasesByUnitComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/reports/report-cases-by-unit.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, report_grid_component_1.ReportGridComponent],
            providers: [case_service_1.CaseService, systemunit_service_1.SystemunitService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, case_service_1.CaseService, systemunit_service_1.SystemunitService])
    ], ReportCasesByUnitComponent);
    return ReportCasesByUnitComponent;
}());
exports.ReportCasesByUnitComponent = ReportCasesByUnitComponent;
//# sourceMappingURL=report-cases-by-unit.component.js.map