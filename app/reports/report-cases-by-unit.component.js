System.register(['@angular/core', '@angular/router', '@angular/http', '../cases/case.service', '../systemunits/systemunit.service', './report-grid.component', '../grid/column', '../app.utilities'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, case_service_1, systemunit_service_1, report_grid_component_1, column_1, app_utilities_1;
    var ReportCasesByUnitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (case_service_1_1) {
                case_service_1 = case_service_1_1;
            },
            function (systemunit_service_1_1) {
                systemunit_service_1 = systemunit_service_1_1;
            },
            function (report_grid_component_1_1) {
                report_grid_component_1 = report_grid_component_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            },
            function (app_utilities_1_1) {
                app_utilities_1 = app_utilities_1_1;
            }],
        execute: function() {
            ReportCasesByUnitComponent = (function () {
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
            exports_1("ReportCasesByUnitComponent", ReportCasesByUnitComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWNhc2VzLWJ5LXVuaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWNhc2VzLWJ5LXVuaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQVdJLG9DQUNZLE9BQWUsRUFDZixZQUF5QixFQUN6QixrQkFBcUM7b0JBRnJDLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7b0JBVmpELHFCQUFnQixHQUFHLEVBQUUsQ0FBQztvQkFJdEIsYUFBUSxHQUFZLElBQUksQ0FBQztnQkFPdEIsQ0FBQztnQkFFSiw2Q0FBUSxHQUFSO29CQUFBLGlCQWlCQztvQkFoQkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXO3lCQUM5QyxTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUNiLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLElBQUksZUFBZSxHQUFHLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDakUsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQzdDLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQ2hDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs0QkFDdkIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUV2QixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0QkFDakIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOzRCQUN2QixLQUFJ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QUFJLEVBQUUsYUFBYSxDQUFDO3dCQUMvQixJQUFJLGVBQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO3dCQUM5QixJQUFJLGVBQU0sQ0FBQyxrQkFBa0IsRUFBQyxrQkFBa0IsQ0FBQzt3QkFDakQsSUFBSSxlQUFNLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDO3dCQUMzQyxJQUFJLGVBQU0sQ0FBQyxjQUFjLEVBQUMsY0FBYyxDQUFDO3dCQUN6QyxJQUFJLGVBQU0sQ0FBQyxtQkFBbUIsRUFBQyxtQkFBbUIsQ0FBQzt3QkFDbkQsSUFBSSxlQUFNLENBQUMsc0JBQXNCLEVBQUUsZUFBZSxDQUFDO3dCQUNuRCxJQUFJLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQztxQkFDakQsQ0FBQztnQkFDTixDQUFDO2dCQUVPLGlEQUFZLEdBQXBCO29CQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsbUNBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixDQUFDO2dCQWpJTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFdBQVcsRUFBRSxpREFBaUQ7d0JBQzlELFVBQVUsRUFBQyxDQUFDLDBCQUFpQixFQUFFLDJDQUFtQixDQUFDO3dCQUNuRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHNDQUFpQixDQUFDO3FCQUM5QyxDQUFDOzs4Q0FBQTtnQkErSEYsaUNBQUM7WUFBRCxDQUFDLEFBN0hELElBNkhDO1lBN0hELG1FQTZIQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1VSTFNlYXJjaFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Q2FzZX0gICAgICAgICAgICAgIGZyb20gJy4uL2Nhc2VzL2Nhc2UnO1xyXG5pbXBvcnQge0Nhc2VTZXJ2aWNlfSAgICAgICBmcm9tICcuLi9jYXNlcy9jYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1N5c3RlbXVuaXR9ICAgICAgICBmcm9tICcuLi9zeXN0ZW11bml0cy9zeXN0ZW11bml0JztcclxuaW1wb3J0IHtTeXN0ZW11bml0U2VydmljZX0gZnJvbSAnLi4vc3lzdGVtdW5pdHMvc3lzdGVtdW5pdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtSZXBvcnRHcmlkQ29tcG9uZW50fSBmcm9tICcuL3JlcG9ydC1ncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29sdW1ufSAgICAgICAgICAgIGZyb20gJy4uL2dyaWQvY29sdW1uJztcclxuaW1wb3J0IHtBUFBfREFURVRJTUUsIGRvd25sb2FkQ1NWLCBkeW5hbWljU29ydE11bHRpcGxlfSBmcm9tICcuLi9hcHAudXRpbGl0aWVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvcmVwb3J0cy9yZXBvcnQtY2FzZXMtYnktdW5pdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgUmVwb3J0R3JpZENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtDYXNlU2VydmljZSwgU3lzdGVtdW5pdFNlcnZpY2VdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0Q2FzZXNCeVVuaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGFyYW1zOiBhbnk7XHJcbiAgICBwcml2YXRlIF9jYXNlczogQ2FzZVtdO1xyXG4gICAgY2FzZXNfcHJvcGVydGllcyA9IFtdO1xyXG4gICAgc3lzdGVtdW5pdHM6IFN5c3RlbXVuaXRbXTtcclxuICAgIHNlbGVjdGVkX3VuaXQ6IG51bWJlcjtcclxuICAgIGNvbHVtbnM6IENvbHVtbltdO1xyXG4gICAgbm90cmVhZHk6IEJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2Nhc2VTZXJ2aWNlOiBDYXNlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9zeXN0ZW11bml0U2VydmljZTogU3lzdGVtdW5pdFNlcnZpY2VcclxuICAgICkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9wYXJhbXMgPSB0aGlzLl9yb3V0ZXIucm91dGVyU3RhdGUucXVlcnlQYXJhbXNcclxuICAgICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1sndW5pdHMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmxTZWFyY2hQYXJhbXMgPSAndmlldz1yZXBvcnQmY2Jyc191bml0PScgKyBwYXJhbXNbJ3VuaXRzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF91bml0ID0gTnVtYmVyKHBhcmFtc1sndW5pdHMnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q2FzZXModXJsU2VhcmNoUGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRTeXN0ZW11bml0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENvbHVtbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RlbGV0ZSBwYXJhbXNbJ3VuaXRzJ107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRDYXNlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldFN5c3RlbXVuaXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtcy51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkZpbHRlcih1bml0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vdHJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZF91bml0ID0gdW5pdDtcclxuICAgICAgICBsZXQgdXJsU2VhcmNoUGFyYW1zID0gKHVuaXQgPT0gJycpID8gbnVsbCA6ICd2aWV3PXJlcG9ydCZjYnJzX3VuaXQ9JyArIHVuaXQudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLl9nZXRDYXNlcyh1cmxTZWFyY2hQYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRmlsdGVyKCkge1xyXG4gICAgICAgIHRoaXMubm90cmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfdW5pdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fZ2V0Q2FzZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnRUb0NTVigpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe2hlYWRlcnMucHVzaChpdGVtLmRlc2NyKTt9KTtcclxuICAgICAgICBsZXQgZmlsZW5hbWUgPSAnJztcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF91bml0KSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuc2VsZWN0ZWRfdW5pdDtcclxuICAgICAgICAgICAgbGV0IHVuaXQgPSB0aGlzLnN5c3RlbXVuaXRzLmZpbHRlcihmdW5jdGlvbiggb2JqICkge3JldHVybiBvYmouaWQgPT0gaWQ7fSk7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lID0gJ1JlcG9ydF9DYXNlc0J5VW5pdF8nICsgdW5pdFswXS5zeXN0ZW1fdW5pdF9udW1iZXIgKyAnXycgKyBBUFBfREFURVRJTUUuVE9EQVkgKyAnLmNzdic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWxlbmFtZSA9ICdSZXBvcnRfQ2FzZXNCeVVuaXRfJyArIEFQUF9EQVRFVElNRS5UT0RBWSArICcuY3N2JztcclxuICAgICAgICB9XHJcbiAgICAgICAgZG93bmxvYWRDU1Yoe2ZpbGVuYW1lOiBmaWxlbmFtZSwgZGF0YTogdGhpcy5jYXNlc19wcm9wZXJ0aWVzLCBoZWFkZXJzOiBoZWFkZXJzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0Q2FzZXMobmV3VXJsU2VhcmNoUGFyYW1zPykge1xyXG4gICAgICAgIGxldCB1cmxTZWFyY2hQYXJhbXMgPSBuZXdVcmxTZWFyY2hQYXJhbXMgPyBuZXdVcmxTZWFyY2hQYXJhbXMgOiAndmlldz1yZXBvcnQnO1xyXG4gICAgICAgIHRoaXMuX2Nhc2VTZXJ2aWNlLmdldENhc2VzKG5ldyBVUkxTZWFyY2hQYXJhbXModXJsU2VhcmNoUGFyYW1zKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGNhc2VzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXNlcyA9IGNhc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzZXNfcHJvcGVydGllcy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gdGhpcy5fY2FzZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FzZV9wcm9wZXJ0eTogYW55ID0gdGhpcy5fY2FzZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IGNhc2VfcHJvcGVydHkucHJvcGVydHlfc3RyaW5nLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FkZHJlc3NbMV0gPT09IFwiXCIgPyBjYXNlX3Byb3BlcnR5LnN0cmVldF9hZGRyZXNzID0gYWRkcmVzc1swXSA6IGNhc2VfcHJvcGVydHkuc3RyZWV0X2FkZHJlc3MgPSBhZGRyZXNzWzFdICsgXCIsIFwiICsgYWRkcmVzc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VfcHJvcGVydHkuc3RyZWV0X2FkZHJlc3MgPSBhZGRyZXNzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNhc2VfcHJvcGVydHlbJ3Byb3BlcnR5X3N0cmluZyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlc19wcm9wZXJ0aWVzLnB1c2goY2FzZV9wcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FzZXMubGVuZ3RoID09IHRoaXMuY2FzZXNfcHJvcGVydGllcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3J0QW5kU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdHJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRTeXN0ZW11bml0cygpIHtcclxuICAgICAgICB0aGlzLl9zeXN0ZW11bml0U2VydmljZS5nZXRTeXN0ZW11bml0cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBzeXN0ZW11bml0cyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeXN0ZW11bml0cyA9IHN5c3RlbXVuaXRzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENvbHVtbnMoKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdpZCcsICdDYXNlIE51bWJlcicpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdzdGF0dXMnLCAnU3RhdHVzJyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ3Byb2hpYml0aW9uX2RhdGUnLCdQcm9oaWJpdGlvbiBEYXRlJyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ2NicnNfdW5pdF9zdHJpbmcnLCAnQ0JSUyBVbml0JyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ3JlcXVlc3RfZGF0ZScsJ1JlcXVlc3QgRGF0ZScpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdmaW5hbF9sZXR0ZXJfZGF0ZScsJ0ZpbmFsIExldHRlciBEYXRlJyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ2RldGVybWluYXRpb25fc3RyaW5nJywgJ0RldGVybWluYXRpb24nKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbignc3RyZWV0X2FkZHJlc3MnLCAnU3RyZWV0IEFkZHJlc3MnKSxcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NvcnRBbmRTaG93KCkge1xyXG4gICAgICAgIHRoaXMuY2FzZXNfcHJvcGVydGllcy5zb3J0KGR5bmFtaWNTb3J0TXVsdGlwbGUoWydpZCddKSk7XHJcbiAgICAgICAgdGhpcy5ub3RyZWFkeSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufSJdfQ==