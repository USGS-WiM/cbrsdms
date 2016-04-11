System.register(['angular2/core', 'angular2/http', '../cases/case.service', '../properties/property.service', './workbench-grid', '../grid/column'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, case_service_1, property_service_1, workbench_grid_1, column_1;
    var WorkbenchListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (case_service_1_1) {
                case_service_1 = case_service_1_1;
            },
            function (property_service_1_1) {
                property_service_1 = property_service_1_1;
            },
            function (workbench_grid_1_1) {
                workbench_grid_1 = workbench_grid_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            }],
        execute: function() {
            WorkbenchListComponent = (function () {
                function WorkbenchListComponent(_caseService, _propertyService) {
                    this._caseService = _caseService;
                    this._propertyService = _propertyService;
                    this.cases_properties = [];
                    this.notready = true;
                }
                WorkbenchListComponent.prototype._getCases = function () {
                    var _this = this;
                    this._caseService.getCases(new http_2.URLSearchParams('view=workbench'))
                        .subscribe(function (cases) {
                        _this._cases = cases;
                        for (var i = 0, j = _this._cases.length; i < j; i++) {
                            //this.getProperties(this.cases[i].id);
                            var case_property = _this._cases[i];
                            var address = case_property.property_string.split(',');
                            case_property.street = address[0];
                            case_property.city = address[1];
                            _this.cases_properties.push(case_property);
                            if (_this._cases.length == _this.cases_properties.length) {
                                _this._sortAndShow();
                            }
                        }
                    }, function (error) { return _this._errorMessage = error; });
                };
                /*    _getProperties(caseID: number) {
                        this._propertyService.getProperties(new URLSearchParams('case='+caseID))
                            .subscribe(
                                property => {
                                    let cases = this.cases.filter(function (acase) {return acase.id == caseID;});
                                    let case_property: any = cases[0];
                                    case_property.street = property[0].street;
                                    case_property.city = property[0].city;
                                    this._cases_properties.push(case_property);
                                    if (this._cases.length == this._cases_properties.length) {
                                        this._sortAndShow();
                                    }
                                },
                                error => this._errorMessage = <any>error);
                    }
                */
                WorkbenchListComponent.prototype._getColumns = function () {
                    this.columns = [
                        new column_1.Column('status', 'Status'),
                        new column_1.Column('request_date', 'Request Date'),
                        new column_1.Column('id', 'Case Number'),
                        new column_1.Column('distance', 'Distance'),
                        new column_1.Column('analyst_string', 'Analyst'),
                        new column_1.Column('qc_reviewer_string', 'QC Review'),
                        new column_1.Column('cbrs_unit_string', 'CBRS Unit'),
                        new column_1.Column('street', 'Street Address'),
                        new column_1.Column('city', 'City'),
                        new column_1.Column('priority', 'Priority'),
                    ];
                };
                // the following function found here: http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript/4760279#4760279
                WorkbenchListComponent.prototype._dynamicSortMultiple = function () {
                    function dynamicSort(property) {
                        var sortOrder = 1;
                        if (property[0] === "-") {
                            sortOrder = -1;
                            property = property.substr(1);
                        }
                        return function (a, b) {
                            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                            return result * sortOrder;
                        };
                    }
                    /*
                     * save the arguments object as it will be overwritten
                     * note that arguments object is an array-like object
                     * consisting of the names of the properties to sort by
                     */
                    var props = arguments;
                    return function (obj1, obj2) {
                        var i = 0, result = 0, numberOfProperties = props.length;
                        /* try getting a different result from 0 (equal)
                         * as long as we have extra properties to compare
                         */
                        while (result === 0 && i < numberOfProperties) {
                            result = dynamicSort(props[i])(obj1, obj2);
                            i++;
                        }
                        return result;
                    };
                };
                WorkbenchListComponent.prototype._sortAndShow = function () {
                    this.cases_properties.sort(this._dynamicSortMultiple('-priority', '-status'));
                    this.notready = false;
                };
                WorkbenchListComponent.prototype.ngOnInit = function () {
                    this._getCases();
                    this._getColumns();
                };
                WorkbenchListComponent = __decorate([
                    core_1.Component({
                        template: "\n        <div [hidden]=\"!notready\" align=\"center\"><img [src]=\"'loading.gif'\" /></div>\n        <div [hidden]=\"notready\">\n            <grid [rows]=\"cases_properties\" [columns]=\"columns\"></grid>\n        </div>\n    ",
                        directives: [workbench_grid_1.WorkbenchGrid],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            case_service_1.CaseService,
                        ]
                    }), 
                    __metadata('design:paramtypes', [case_service_1.CaseService, property_service_1.PropertyService])
                ], WorkbenchListComponent);
                return WorkbenchListComponent;
            }());
            exports_1("WorkbenchListComponent", WorkbenchListComponent);
        }
    }
});
//# sourceMappingURL=workbench-list.component.js.map