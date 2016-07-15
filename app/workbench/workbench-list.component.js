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
var property_service_1 = require('../properties/property.service');
var workbench_filter_component_1 = require('./workbench-filter.component');
var workbench_grid_1 = require('./workbench-grid');
var column_1 = require('../grid/column');
var WorkbenchListComponent = (function () {
    function WorkbenchListComponent(_route, _router, _caseService, _propertyService) {
        this._route = _route;
        this._router = _router;
        this._caseService = _caseService;
        this._propertyService = _propertyService;
        this.cases_properties = [];
        this.notready = true;
        this.hideFilter = true;
        // this._params = this._router.routerState.queryParams
        //     .subscribe(params => {
        //         this.tag_ID = params['tag'];
        //         this._getCases(this.tag_ID);
        //         this._getColumns();
        //         //delete params['tag'];
        //     });
    }
    WorkbenchListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._router.routerState.queryParams
            .subscribe(function (params) {
            if (params['tags']) {
                _this.t = params['tags'];
                var urlSearchParams = 'view=workbench&tags=' + params['tags'];
                _this._getCases(urlSearchParams);
                _this._getColumns();
                delete params['tags'];
            }
            else {
                _this._getCases();
                _this._getColumns();
            }
        });
        // let tag_ID = this._route.snapshot._urlSegment.pathsWithParams[0].parameters.tag;
        // let tag_ID = this._route.snapshot.params['tag'];
        // this._getCases(tag_ID);
        // this._getColumns();
    };
    WorkbenchListComponent.prototype.ngOnDestroy = function () {
        if (this._params) {
            this._params.unsubscribe();
        }
    };
    WorkbenchListComponent.prototype.ngAfterViewInit = function () {
        this.filterComponent.myWorkbenchFilter.tags = [+this.t];
    };
    WorkbenchListComponent.prototype.toggleFilter = function () {
        this.hideFilter ? this.hideFilter = false : this.hideFilter = true;
    };
    WorkbenchListComponent.prototype.onFilter = function (urlSearchParams) {
        this._getCases(urlSearchParams);
    };
    // removeTagFilter() {
    //     this.notready = true;
    //     this.tag_ID = null;
    //     this._getCases();
    // }
    WorkbenchListComponent.prototype._getCases = function (newUrlSearchParams) {
        var _this = this;
        var urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'view=workbench';
        this._caseService.getCases(new http_1.URLSearchParams(urlSearchParams))
            .subscribe(function (cases) {
            _this._cases = cases;
            _this.cases_properties.length = 0;
            for (var i = 0, j = _this._cases.length; i < j; i++) {
                //this.getProperties(this.cases[i].id);
                var case_property = _this._cases[i];
                var address = case_property.property_string.split(',');
                case_property.street = address[0];
                case_property.city = address[1];
                _this.cases_properties.push(case_property);
                if (_this._cases.length == _this.cases_properties.length) {
                    // if (this._params) {
                    //     delete this._params._subscriptions[0].subject.value.tag;
                    // }
                    if (!newUrlSearchParams) {
                        _this._router.navigate(['/workbench']);
                    }
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
        this.cases_properties.sort(this._dynamicSortMultiple(['-priority', '-status']));
        this.notready = false;
    };
    __decorate([
        core_1.ViewChild(workbench_filter_component_1.WorkbenchFilterComponent), 
        __metadata('design:type', workbench_filter_component_1.WorkbenchFilterComponent)
    ], WorkbenchListComponent.prototype, "filterComponent", void 0);
    WorkbenchListComponent = __decorate([
        core_1.Component({
            template: "\n        <div [hidden]=\"!notready\" align=\"center\" id=\"loading-spinner\"><img class=\"loader\" [src]=\"'loading.gif'\" /></div>\n        <div [hidden]=\"notready\">\n            <div  align=\"center\"><button class=\"btn btn-default\" (click)=\"toggleFilter()\">Filter Cases</button></div>\n            <workbench-filter [hidden]=\"hideFilter\" (onFilter)=\"onFilter($event)\"></workbench-filter>\n            <grid [rows]=\"cases_properties\" [columns]=\"columns\"></grid>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, workbench_grid_1.WorkbenchGrid, workbench_filter_component_1.WorkbenchFilterComponent],
            providers: [
                http_1.HTTP_PROVIDERS,
                case_service_1.CaseService,
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, case_service_1.CaseService, property_service_1.PropertyService])
    ], WorkbenchListComponent);
    return WorkbenchListComponent;
}());
exports.WorkbenchListComponent = WorkbenchListComponent;
//# sourceMappingURL=workbench-list.component.js.map