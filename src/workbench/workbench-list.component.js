System.register(['@angular/core', '@angular/router', '@angular/http', '../cases/case.service', './workbench-filter.component', './workbench-grid.component', '../grid/column', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, case_service_1, workbench_filter_component_1, workbench_grid_component_1, column_1, forms_1;
    var WorkbenchListComponent;
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
            function (workbench_filter_component_1_1) {
                workbench_filter_component_1 = workbench_filter_component_1_1;
            },
            function (workbench_grid_component_1_1) {
                workbench_grid_component_1 = workbench_grid_component_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            WorkbenchListComponent = (function () {
                function WorkbenchListComponent(_router, _caseService) {
                    this._router = _router;
                    this._caseService = _caseService;
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
                            case_property.city = address[2];
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
                /*   private _getProperties(caseID: number) {
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
                WorkbenchListComponent.prototype._sortAndShow = function () {
                    //this.cases_properties.sort(dynamicSortMultiple(['-priority', '-status']));
                    this.notready = false;
                };
                __decorate([
                    core_1.ViewChild(workbench_filter_component_1.WorkbenchFilterComponent), 
                    __metadata('design:type', workbench_filter_component_1.WorkbenchFilterComponent)
                ], WorkbenchListComponent.prototype, "filterComponent", void 0);
                WorkbenchListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/workbench/workbench-list.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, workbench_grid_component_1.WorkbenchGridComponent, workbench_filter_component_1.WorkbenchFilterComponent],
                        providers: [case_service_1.CaseService, forms_1.FormBuilder]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, case_service_1.CaseService])
                ], WorkbenchListComponent);
                return WorkbenchListComponent;
            }());
            exports_1("WorkbenchListComponent", WorkbenchListComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2JlbmNoLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya2JlbmNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQWFJLGdDQUNZLE9BQWUsRUFDZixZQUF5QjtvQkFEekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFSckMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO29CQUV0QixhQUFRLEdBQVksSUFBSSxDQUFDO29CQUN6QixlQUFVLEdBQVksSUFBSSxDQUFDO29CQU92QixzREFBc0Q7b0JBQ3RELDZCQUE2QjtvQkFDN0IsdUNBQXVDO29CQUN2Qyx1Q0FBdUM7b0JBQ3ZDLDhCQUE4QjtvQkFDOUIsa0NBQWtDO29CQUNsQyxVQUFVO2dCQUNkLENBQUM7Z0JBRUQseUNBQVEsR0FBUjtvQkFBQSxpQkFvQkM7b0JBbkJHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVzt5QkFFOUMsU0FBUyxDQUFDLFVBQUEsTUFBTTt3QkFDYixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDeEIsSUFBSSxlQUFlLEdBQUcsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUM5RCxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUNoQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBRXZCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOzRCQUNqQixLQUFJLENBQUMsV0FBVyxFQUFF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SUFBSSxlQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQzt3QkFDOUIsSUFBSSxlQUFNLENBQUMsY0FBYyxFQUFDLGNBQWMsQ0FBQzt3QkFDekMsSUFBSSxlQUFNLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQzt3QkFDL0IsSUFBSSxlQUFNLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQzt3QkFDbEMsSUFBSSxlQUFNLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDO3dCQUN2QyxJQUFJLGVBQU0sQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUM7d0JBQzdDLElBQUksZUFBTSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQzt3QkFDM0MsSUFBSSxlQUFNLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDO3dCQUN0QyxJQUFJLGVBQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO3dCQUMxQixJQUFJLGVBQU0sQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDO3FCQUNyQyxDQUFDO2dCQUNOLENBQUM7Z0JBSU8sNkNBQVksR0FBcEI7b0JBQ0ksNEVBQTRFO29CQUM1RSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsQ0FBQztnQkF0SUQ7b0JBQUMsZ0JBQVMsQ0FBQyxxREFBd0IsQ0FBQzs7K0VBQUE7Z0JBUHhDO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsV0FBVyxFQUFFLDZDQUE2Qzt3QkFDMUQsVUFBVSxFQUFDLENBQUMsMEJBQWlCLEVBQUUsaURBQXNCLEVBQUUscURBQXdCLENBQUM7d0JBQ2hGLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsbUJBQVcsQ0FBQztxQkFDeEMsQ0FBQzs7MENBQUE7Z0JBMklGLDZCQUFDO1lBQUQsQ0FBQyxBQXpJRCxJQXlJQztZQXpJRCwyREF5SUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1VSTFNlYXJjaFBhcmFtc30gICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Q2FzZX0gICAgICAgICAgICAgIGZyb20gJy4uL2Nhc2VzL2Nhc2UnO1xyXG5pbXBvcnQge0Nhc2VTZXJ2aWNlfSAgICAgICBmcm9tICcuLi9jYXNlcy9jYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1dvcmtiZW5jaEZpbHRlckNvbXBvbmVudH0gZnJvbSAnLi93b3JrYmVuY2gtZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7V29ya2JlbmNoR3JpZENvbXBvbmVudH0gICBmcm9tICcuL3dvcmtiZW5jaC1ncmlkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Q29sdW1ufSAgICAgICAgICAgIGZyb20gJy4uL2dyaWQvY29sdW1uJztcclxuaW1wb3J0IHtkeW5hbWljU29ydE11bHRpcGxlfSBmcm9tICcuLi9hcHAudXRpbGl0aWVzJztcclxuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC93b3JrYmVuY2gvd29ya2JlbmNoLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczpbUk9VVEVSX0RJUkVDVElWRVMsIFdvcmtiZW5jaEdyaWRDb21wb25lbnQsIFdvcmtiZW5jaEZpbHRlckNvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtDYXNlU2VydmljZSwgRm9ybUJ1aWxkZXJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV29ya2JlbmNoTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoV29ya2JlbmNoRmlsdGVyQ29tcG9uZW50KVxyXG4gICAgZmlsdGVyQ29tcG9uZW50OiBXb3JrYmVuY2hGaWx0ZXJDb21wb25lbnQ7XHJcblxyXG4gICAgdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFyYW1zOiBhbnk7XHJcbiAgICBwcml2YXRlIF9jYXNlczogQ2FzZVtdO1xyXG4gICAgY2FzZXNfcHJvcGVydGllcyA9IFtdO1xyXG4gICAgY29sdW1uczogQ29sdW1uW107XHJcbiAgICBub3RyZWFkeTogQm9vbGVhbiA9IHRydWU7XHJcbiAgICBoaWRlRmlsdGVyOiBCb29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2Vycm9yTWVzc2FnZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9jYXNlU2VydmljZTogQ2FzZVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIC8vIHRoaXMuX3BhcmFtcyA9IHRoaXMuX3JvdXRlci5yb3V0ZXJTdGF0ZS5xdWVyeVBhcmFtc1xyXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnRhZ19JRCA9IHBhcmFtc1sndGFnJ107XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9nZXRDYXNlcyh0aGlzLnRhZ19JRCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvL2RlbGV0ZSBwYXJhbXNbJ3RhZyddO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9wYXJhbXMgPSB0aGlzLl9yb3V0ZXIucm91dGVyU3RhdGUucXVlcnlQYXJhbXNcclxuICAgICAgICAvLyB0aGlzLl9wYXJhbXMgPSB0aGlzLl9yb3V0ZS5wYXJhbXNcclxuICAgICAgICAgICAgLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtc1sndGFncyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ID0gcGFyYW1zWyd0YWdzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybFNlYXJjaFBhcmFtcyA9ICd2aWV3PXdvcmtiZW5jaCZ0YWdzPScgKyBwYXJhbXNbJ3RhZ3MnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRDYXNlcyh1cmxTZWFyY2hQYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENvbHVtbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2RlbGV0ZSBwYXJhbXNbJ3RhZ3MnXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENhc2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyBsZXQgdGFnX0lEID0gdGhpcy5fcm91dGUuc25hcHNob3QuX3VybFNlZ21lbnQucGF0aHNXaXRoUGFyYW1zWzBdLnBhcmFtZXRlcnMudGFnO1xyXG4gICAgICAgIC8vIGxldCB0YWdfSUQgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbJ3RhZyddO1xyXG4gICAgICAgIC8vIHRoaXMuX2dldENhc2VzKHRhZ19JRCk7XHJcbiAgICAgICAgLy8gdGhpcy5fZ2V0Q29sdW1ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJhbXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmZpbHRlckNvbXBvbmVudC5teVdvcmtiZW5jaEZpbHRlci50YWdzID0gWyt0aGlzLnRdO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLmhpZGVGaWx0ZXIgPyB0aGlzLmhpZGVGaWx0ZXIgPSBmYWxzZSA6IHRoaXMuaGlkZUZpbHRlciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaWx0ZXIodXJsU2VhcmNoUGFyYW1zOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9nZXRDYXNlcyh1cmxTZWFyY2hQYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZVRhZ0ZpbHRlcigpIHtcclxuICAgIC8vICAgICB0aGlzLm5vdHJlYWR5ID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLnRhZ19JRCA9IG51bGw7XHJcbiAgICAvLyAgICAgdGhpcy5fZ2V0Q2FzZXMoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRDYXNlcyhuZXdVcmxTZWFyY2hQYXJhbXM/KSB7XHJcbiAgICAgICAgbGV0IHVybFNlYXJjaFBhcmFtcyA9IG5ld1VybFNlYXJjaFBhcmFtcyA/IG5ld1VybFNlYXJjaFBhcmFtcyA6ICd2aWV3PXdvcmtiZW5jaCc7XHJcbiAgICAgICAgdGhpcy5fY2FzZVNlcnZpY2UuZ2V0Q2FzZXMobmV3IFVSTFNlYXJjaFBhcmFtcyh1cmxTZWFyY2hQYXJhbXMpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgY2FzZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2VzID0gY2FzZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlc19wcm9wZXJ0aWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB0aGlzLl9jYXNlcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmdldFByb3BlcnRpZXModGhpcy5jYXNlc1tpXS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXNlX3Byb3BlcnR5OiBhbnkgPSB0aGlzLl9jYXNlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSBjYXNlX3Byb3BlcnR5LnByb3BlcnR5X3N0cmluZy5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlX3Byb3BlcnR5LnN0cmVldCA9IGFkZHJlc3NbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VfcHJvcGVydHkuY2l0eSA9IGFkZHJlc3NbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzZXNfcHJvcGVydGllcy5wdXNoKGNhc2VfcHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FzZXMubGVuZ3RoID09IHRoaXMuY2FzZXNfcHJvcGVydGllcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9wYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBkZWxldGUgdGhpcy5fcGFyYW1zLl9zdWJzY3JpcHRpb25zWzBdLnN1YmplY3QudmFsdWUudGFnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdVcmxTZWFyY2hQYXJhbXMpIHt0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvd29ya2JlbmNoJ10pO31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRBbmRTaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuLyogICBwcml2YXRlIF9nZXRQcm9wZXJ0aWVzKGNhc2VJRDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvcGVydHlTZXJ2aWNlLmdldFByb3BlcnRpZXMobmV3IFVSTFNlYXJjaFBhcmFtcygnY2FzZT0nK2Nhc2VJRCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhc2VzID0gdGhpcy5jYXNlcy5maWx0ZXIoZnVuY3Rpb24gKGFjYXNlKSB7cmV0dXJuIGFjYXNlLmlkID09IGNhc2VJRDt9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FzZV9wcm9wZXJ0eTogYW55ID0gY2FzZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZV9wcm9wZXJ0eS5zdHJlZXQgPSBwcm9wZXJ0eVswXS5zdHJlZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZV9wcm9wZXJ0eS5jaXR5ID0gcHJvcGVydHlbMF0uY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXNlc19wcm9wZXJ0aWVzLnB1c2goY2FzZV9wcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Nhc2VzLmxlbmd0aCA9PSB0aGlzLl9jYXNlc19wcm9wZXJ0aWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zb3J0QW5kU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuKi9cclxuICAgIHByaXZhdGUgX2dldENvbHVtbnMoKSB7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdzdGF0dXMnLCAnU3RhdHVzJyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ3JlcXVlc3RfZGF0ZScsJ1JlcXVlc3QgRGF0ZScpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdpZCcsICdDYXNlIE51bWJlcicpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdkaXN0YW5jZScsICdEaXN0YW5jZScpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdhbmFseXN0X3N0cmluZycsICdBbmFseXN0JyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ3FjX3Jldmlld2VyX3N0cmluZycsICdRQyBSZXZpZXcnKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbignY2Jyc191bml0X3N0cmluZycsICdDQlJTIFVuaXQnKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbignc3RyZWV0JywgJ1N0cmVldCBBZGRyZXNzJyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ2NpdHknLCAnQ2l0eScpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdwcmlvcml0eScsICdQcmlvcml0eScpLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9zb3J0QW5kU2hvdygpIHtcclxuICAgICAgICAvL3RoaXMuY2FzZXNfcHJvcGVydGllcy5zb3J0KGR5bmFtaWNTb3J0TXVsdGlwbGUoWyctcHJpb3JpdHknLCAnLXN0YXR1cyddKSk7XHJcbiAgICAgICAgdGhpcy5ub3RyZWFkeSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=