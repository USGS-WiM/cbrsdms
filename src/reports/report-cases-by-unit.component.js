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
                    var urlSearchParams = (unit.toString() == '') ? null : 'view=report&cbrs_unit=' + unit.toString();
                    this._getCases(urlSearchParams);
                };
                ReportCasesByUnitComponent.prototype.clearFilter = function () {
                    this.notready = true;
                    this.selected_unit = null;
                    this._getCases();
                };
                ReportCasesByUnitComponent.prototype.exportToCSV = function () {
                    var downloadCSV;
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
                    //this.cases_properties.sort(dynamicSortMultiple(['id']));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWNhc2VzLWJ5LXVuaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWNhc2VzLWJ5LXVuaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQVdJLG9DQUNZLE9BQWUsRUFDZixZQUF5QixFQUN6QixrQkFBcUM7b0JBRnJDLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7b0JBVmpELHFCQUFnQixHQUFHLEVBQUUsQ0FBQztvQkFJdEIsYUFBUSxHQUFZLElBQUksQ0FBQztnQkFPdEIsQ0FBQztnQkFFSiw2Q0FBUSxHQUFSO29CQUFBLGlCQWlCQztvQkFoQkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXO3lCQUM5QyxTQUFTLENBQUMsVUFBQSxNQUFNO3dCQUNiLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ2xCLElBQUksZUFBZSxHQUFHLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDakUsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NEJBQzdDLEtBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQ2hDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs0QkFDdkIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUV2QixDQUFDO3dCQUNELElBQUksQ0FBQyxDQUFDOzRCQUNGLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs0QkFDakIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOzRCQUN2QixLQUFJ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QUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDO3dCQUMvQixJQUFJLGVBQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO3dCQUM5QixJQUFJLGVBQU0sQ0FBQyxrQkFBa0IsRUFBQyxrQkFBa0IsQ0FBQzt3QkFDakQsSUFBSSxlQUFNLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDO3dCQUMzQyxJQUFJLGVBQU0sQ0FBQyxjQUFjLEVBQUMsY0FBYyxDQUFDO3dCQUN6QyxJQUFJLGVBQU0sQ0FBQyxtQkFBbUIsRUFBQyxtQkFBbUIsQ0FBQzt3QkFDbkQsSUFBSSxlQUFNLENBQUMsc0JBQXNCLEVBQUUsZUFBZSxDQUFDO3dCQUNuRCxJQUFJLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQztxQkFDakQsQ0FBQztnQkFDTixDQUFDO2dCQUVPLGlEQUFZLEdBQXBCO29CQUNJLDBEQUEwRDtvQkFDMUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBaklMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLGlEQUFpRDt3QkFDOUQsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUUsMkNBQW1CLENBQUM7d0JBQ25ELFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsc0NBQWlCLENBQUM7cUJBQzlDLENBQUM7OzhDQUFBO2dCQStIRixpQ0FBQztZQUFELENBQUMsQUE3SEQsSUE2SEM7WUE3SEQsbUVBNkhDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtDYXNlfSAgICAgICAgICAgICAgZnJvbSAnLi4vY2FzZXMvY2FzZSc7XHJcbmltcG9ydCB7Q2FzZVNlcnZpY2V9ICAgICAgIGZyb20gJy4uL2Nhc2VzL2Nhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7U3lzdGVtdW5pdH0gICAgICAgIGZyb20gJy4uL3N5c3RlbXVuaXRzL3N5c3RlbXVuaXQnO1xyXG5pbXBvcnQge1N5c3RlbXVuaXRTZXJ2aWNlfSBmcm9tICcuLi9zeXN0ZW11bml0cy9zeXN0ZW11bml0LnNlcnZpY2UnO1xyXG5pbXBvcnQge1JlcG9ydEdyaWRDb21wb25lbnR9IGZyb20gJy4vcmVwb3J0LWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb2x1bW59ICAgICAgICAgICAgZnJvbSAnLi4vZ3JpZC9jb2x1bW4nO1xyXG5pbXBvcnQge0FQUF9EQVRFVElNRSwgZG93bmxvYWRDU1YsIGR5bmFtaWNTb3J0TXVsdGlwbGV9IGZyb20gJy4uL2FwcC51dGlsaXRpZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9yZXBvcnRzL3JlcG9ydC1jYXNlcy1ieS11bml0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6W1JPVVRFUl9ESVJFQ1RJVkVTLCBSZXBvcnRHcmlkQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0Nhc2VTZXJ2aWNlLCBTeXN0ZW11bml0U2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRDYXNlc0J5VW5pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwcml2YXRlIF9wYXJhbXM6IGFueTtcclxuICAgIHByaXZhdGUgX2Nhc2VzOiBDYXNlW107XHJcbiAgICBjYXNlc19wcm9wZXJ0aWVzID0gW107XHJcbiAgICBzeXN0ZW11bml0czogU3lzdGVtdW5pdFtdO1xyXG4gICAgc2VsZWN0ZWRfdW5pdDogbnVtYmVyO1xyXG4gICAgY29sdW1uczogQ29sdW1uW107XHJcbiAgICBub3RyZWFkeTogQm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9lcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2FzZVNlcnZpY2U6IENhc2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3N5c3RlbXVuaXRTZXJ2aWNlOiBTeXN0ZW11bml0U2VydmljZVxyXG4gICAgKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IHRoaXMuX3JvdXRlci5yb3V0ZXJTdGF0ZS5xdWVyeVBhcmFtc1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zWyd1bml0cyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybFNlYXJjaFBhcmFtcyA9ICd2aWV3PXJlcG9ydCZjYnJzX3VuaXQ9JyArIHBhcmFtc1sndW5pdHMnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX3VuaXQgPSBOdW1iZXIocGFyYW1zWyd1bml0cyddKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRDYXNlcyh1cmxTZWFyY2hQYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldFN5c3RlbXVuaXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlIHBhcmFtc1sndW5pdHMnXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENhc2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0U3lzdGVtdW5pdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJhbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRmlsdGVyKHVuaXQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm90cmVhZHkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkX3VuaXQgPSB1bml0O1xyXG4gICAgICAgIGxldCB1cmxTZWFyY2hQYXJhbXMgPSAodW5pdC50b1N0cmluZygpID09ICcnKSA/IG51bGwgOiAndmlldz1yZXBvcnQmY2Jyc191bml0PScgKyB1bml0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5fZ2V0Q2FzZXModXJsU2VhcmNoUGFyYW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLm5vdHJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkX3VuaXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2dldENhc2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0VG9DU1YoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtoZWFkZXJzLnB1c2goaXRlbS5kZXNjcik7fSk7XHJcbiAgICAgICAgbGV0IGZpbGVuYW1lID0gJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfdW5pdCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSB0aGlzLnNlbGVjdGVkX3VuaXQ7XHJcbiAgICAgICAgICAgIGxldCB1bml0ID0gdGhpcy5zeXN0ZW11bml0cy5maWx0ZXIoZnVuY3Rpb24oIG9iaiApIHtyZXR1cm4gb2JqLmlkID09IGlkO30pO1xyXG4gICAgICAgICAgICBmaWxlbmFtZSA9ICdSZXBvcnRfQ2FzZXNCeVVuaXRfJyArIHVuaXRbMF0uc3lzdGVtX3VuaXRfbnVtYmVyICsgJ18nICsgQVBQX0RBVEVUSU1FLlRPREFZICsgJy5jc3YnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmlsZW5hbWUgPSAnUmVwb3J0X0Nhc2VzQnlVbml0XycgKyBBUFBfREFURVRJTUUuVE9EQVkgKyAnLmNzdic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvd25sb2FkQ1NWKHtmaWxlbmFtZTogZmlsZW5hbWUsIGRhdGE6IHRoaXMuY2FzZXNfcHJvcGVydGllcywgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENhc2VzKG5ld1VybFNlYXJjaFBhcmFtcz8pIHtcclxuICAgICAgICBsZXQgdXJsU2VhcmNoUGFyYW1zID0gbmV3VXJsU2VhcmNoUGFyYW1zID8gbmV3VXJsU2VhcmNoUGFyYW1zIDogJ3ZpZXc9cmVwb3J0JztcclxuICAgICAgICB0aGlzLl9jYXNlU2VydmljZS5nZXRDYXNlcyhuZXcgVVJMU2VhcmNoUGFyYW1zKHVybFNlYXJjaFBhcmFtcykpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBjYXNlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FzZXMgPSBjYXNlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2VzX3Byb3BlcnRpZXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FzZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHRoaXMuX2Nhc2VzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhc2VfcHJvcGVydHk6IGFueSA9IHRoaXMuX2Nhc2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSBjYXNlX3Byb3BlcnR5LnByb3BlcnR5X3N0cmluZy5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGRyZXNzWzFdID09PSBcIlwiID8gY2FzZV9wcm9wZXJ0eS5zdHJlZXRfYWRkcmVzcyA9IGFkZHJlc3NbMF0gOiBjYXNlX3Byb3BlcnR5LnN0cmVldF9hZGRyZXNzID0gYWRkcmVzc1sxXSArIFwiLCBcIiArIGFkZHJlc3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlX3Byb3BlcnR5LnN0cmVldF9hZGRyZXNzID0gYWRkcmVzc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYXNlX3Byb3BlcnR5Wydwcm9wZXJ0eV9zdHJpbmcnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzZXNfcHJvcGVydGllcy5wdXNoKGNhc2VfcHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nhc2VzLmxlbmd0aCA9PSB0aGlzLmNhc2VzX3Byb3BlcnRpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc29ydEFuZFNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RyZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0U3lzdGVtdW5pdHMoKSB7XHJcbiAgICAgICAgdGhpcy5fc3lzdGVtdW5pdFNlcnZpY2UuZ2V0U3lzdGVtdW5pdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgc3lzdGVtdW5pdHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3lzdGVtdW5pdHMgPSBzeXN0ZW11bml0cztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDb2x1bW5zKCkge1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcclxuICAgICAgICAgICAgbmV3IENvbHVtbignaWQnLCAnQ2FzZSBOdW1iZXInKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbignc3RhdHVzJywgJ1N0YXR1cycpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdwcm9oaWJpdGlvbl9kYXRlJywnUHJvaGliaXRpb24gRGF0ZScpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdjYnJzX3VuaXRfc3RyaW5nJywgJ0NCUlMgVW5pdCcpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdyZXF1ZXN0X2RhdGUnLCdSZXF1ZXN0IERhdGUnKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbignZmluYWxfbGV0dGVyX2RhdGUnLCdGaW5hbCBMZXR0ZXIgRGF0ZScpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdkZXRlcm1pbmF0aW9uX3N0cmluZycsICdEZXRlcm1pbmF0aW9uJyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ3N0cmVldF9hZGRyZXNzJywgJ1N0cmVldCBBZGRyZXNzJyksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zb3J0QW5kU2hvdygpIHtcclxuICAgICAgICAvL3RoaXMuY2FzZXNfcHJvcGVydGllcy5zb3J0KGR5bmFtaWNTb3J0TXVsdGlwbGUoWydpZCddKSk7XHJcbiAgICAgICAgdGhpcy5ub3RyZWFkeSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
