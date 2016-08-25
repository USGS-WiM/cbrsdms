System.register(['@angular/core', '@angular/router', '@angular/http', '../cases/case.service', './workbench-filter.component', './workbench-grid.component', '../grid/column', '../app.utilities', '@angular/forms'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, case_service_1, workbench_filter_component_1, workbench_grid_component_1, column_1, app_utilities_1, forms_1;
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
            function (app_utilities_1_1) {
                app_utilities_1 = app_utilities_1_1;
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
                    this.cases_properties.sort(app_utilities_1.dynamicSortMultiple(['-priority', '-status']));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2JlbmNoLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya2JlbmNoLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBaUJBO2dCQWFJLGdDQUNZLE9BQWUsRUFDZixZQUF5QjtvQkFEekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDZixpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkFSckMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO29CQUV0QixhQUFRLEdBQVksSUFBSSxDQUFDO29CQUN6QixlQUFVLEdBQVksSUFBSSxDQUFDO29CQU92QixzREFBc0Q7b0JBQ3RELDZCQUE2QjtvQkFDN0IsdUNBQXVDO29CQUN2Qyx1Q0FBdUM7b0JBQ3ZDLDhCQUE4QjtvQkFDOUIsa0NBQWtDO29CQUNsQyxVQUFVO2dCQUNkLENBQUM7Z0JBRUQseUNBQVEsR0FBUjtvQkFBQSxpQkFvQkM7b0JBbkJHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVzt5QkFFOUMsU0FBUyxDQUFDLFVBQUEsTUFBTTt3QkFDYixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNqQixLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDeEIsSUFBSSxlQUFlLEdBQUcsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUM5RCxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUNoQyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBRXZCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOzRCQUNqQixLQUFJLENBQUMsV0FBVyxF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b25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSAgICBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtDYXNlfSAgICAgICAgICAgICAgZnJvbSAnLi4vY2FzZXMvY2FzZSc7XHJcbmltcG9ydCB7Q2FzZVNlcnZpY2V9ICAgICAgIGZyb20gJy4uL2Nhc2VzL2Nhc2Uuc2VydmljZSc7XHJcbmltcG9ydCB7V29ya2JlbmNoRmlsdGVyQ29tcG9uZW50fSBmcm9tICcuL3dvcmtiZW5jaC1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtXb3JrYmVuY2hHcmlkQ29tcG9uZW50fSAgIGZyb20gJy4vd29ya2JlbmNoLWdyaWQuY29tcG9uZW50JztcclxuaW1wb3J0IHtDb2x1bW59ICAgICAgICAgICAgZnJvbSAnLi4vZ3JpZC9jb2x1bW4nO1xyXG5pbXBvcnQge2R5bmFtaWNTb3J0TXVsdGlwbGV9IGZyb20gJy4uL2FwcC51dGlsaXRpZXMnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3dvcmtiZW5jaC93b3JrYmVuY2gtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOltST1VURVJfRElSRUNUSVZFUywgV29ya2JlbmNoR3JpZENvbXBvbmVudCwgV29ya2JlbmNoRmlsdGVyQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW0Nhc2VTZXJ2aWNlLCBGb3JtQnVpbGRlcl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JrYmVuY2hMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gICAgQFZpZXdDaGlsZChXb3JrYmVuY2hGaWx0ZXJDb21wb25lbnQpXHJcbiAgICBmaWx0ZXJDb21wb25lbnQ6IFdvcmtiZW5jaEZpbHRlckNvbXBvbmVudDtcclxuXHJcbiAgICB0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wYXJhbXM6IGFueTtcclxuICAgIHByaXZhdGUgX2Nhc2VzOiBDYXNlW107XHJcbiAgICBjYXNlc19wcm9wZXJ0aWVzID0gW107XHJcbiAgICBjb2x1bW5zOiBDb2x1bW5bXTtcclxuICAgIG5vdHJlYWR5OiBCb29sZWFuID0gdHJ1ZTtcclxuICAgIGhpZGVGaWx0ZXI6IEJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2Nhc2VTZXJ2aWNlOiBDYXNlU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgLy8gdGhpcy5fcGFyYW1zID0gdGhpcy5fcm91dGVyLnJvdXRlclN0YXRlLnF1ZXJ5UGFyYW1zXHJcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudGFnX0lEID0gcGFyYW1zWyd0YWcnXTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2dldENhc2VzKHRoaXMudGFnX0lEKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2dldENvbHVtbnMoKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vZGVsZXRlIHBhcmFtc1sndGFnJ107XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IHRoaXMuX3JvdXRlci5yb3V0ZXJTdGF0ZS5xdWVyeVBhcmFtc1xyXG4gICAgICAgIC8vIHRoaXMuX3BhcmFtcyA9IHRoaXMuX3JvdXRlLnBhcmFtc1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zWyd0YWdzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnQgPSBwYXJhbXNbJ3RhZ3MnXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsU2VhcmNoUGFyYW1zID0gJ3ZpZXc9d29ya2JlbmNoJnRhZ3M9JyArIHBhcmFtc1sndGFncyddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldENhc2VzKHVybFNlYXJjaFBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q29sdW1ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZGVsZXRlIHBhcmFtc1sndGFncyddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q2FzZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGxldCB0YWdfSUQgPSB0aGlzLl9yb3V0ZS5zbmFwc2hvdC5fdXJsU2VnbWVudC5wYXRoc1dpdGhQYXJhbXNbMF0ucGFyYW1ldGVycy50YWc7XHJcbiAgICAgICAgLy8gbGV0IHRhZ19JRCA9IHRoaXMuX3JvdXRlLnNuYXBzaG90LnBhcmFtc1sndGFnJ107XHJcbiAgICAgICAgLy8gdGhpcy5fZ2V0Q2FzZXModGFnX0lEKTtcclxuICAgICAgICAvLyB0aGlzLl9nZXRDb2x1bW5zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmFtcykge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQ29tcG9uZW50Lm15V29ya2JlbmNoRmlsdGVyLnRhZ3MgPSBbK3RoaXMudF07XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmlsdGVyKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUZpbHRlciA/IHRoaXMuaGlkZUZpbHRlciA9IGZhbHNlIDogdGhpcy5oaWRlRmlsdGVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZpbHRlcih1cmxTZWFyY2hQYXJhbXM6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2dldENhc2VzKHVybFNlYXJjaFBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlVGFnRmlsdGVyKCkge1xyXG4gICAgLy8gICAgIHRoaXMubm90cmVhZHkgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMudGFnX0lEID0gbnVsbDtcclxuICAgIC8vICAgICB0aGlzLl9nZXRDYXNlcygpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENhc2VzKG5ld1VybFNlYXJjaFBhcmFtcz8pIHtcclxuICAgICAgICBsZXQgdXJsU2VhcmNoUGFyYW1zID0gbmV3VXJsU2VhcmNoUGFyYW1zID8gbmV3VXJsU2VhcmNoUGFyYW1zIDogJ3ZpZXc9d29ya2JlbmNoJztcclxuICAgICAgICB0aGlzLl9jYXNlU2VydmljZS5nZXRDYXNlcyhuZXcgVVJMU2VhcmNoUGFyYW1zKHVybFNlYXJjaFBhcmFtcykpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBjYXNlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FzZXMgPSBjYXNlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhc2VzX3Byb3BlcnRpZXMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHRoaXMuX2Nhc2VzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0UHJvcGVydGllcyh0aGlzLmNhc2VzW2ldLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhc2VfcHJvcGVydHk6IGFueSA9IHRoaXMuX2Nhc2VzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IGNhc2VfcHJvcGVydHkucHJvcGVydHlfc3RyaW5nLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VfcHJvcGVydHkuc3RyZWV0ID0gYWRkcmVzc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZV9wcm9wZXJ0eS5jaXR5ID0gYWRkcmVzc1syXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXNlc19wcm9wZXJ0aWVzLnB1c2goY2FzZV9wcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYXNlcy5sZW5ndGggPT0gdGhpcy5jYXNlc19wcm9wZXJ0aWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX3BhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRlbGV0ZSB0aGlzLl9wYXJhbXMuX3N1YnNjcmlwdGlvbnNbMF0uc3ViamVjdC52YWx1ZS50YWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1VybFNlYXJjaFBhcmFtcykge3RoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy93b3JrYmVuY2gnXSk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc29ydEFuZFNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4vKiAgIHByaXZhdGUgX2dldFByb3BlcnRpZXMoY2FzZUlEOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wcm9wZXJ0eVNlcnZpY2UuZ2V0UHJvcGVydGllcyhuZXcgVVJMU2VhcmNoUGFyYW1zKCdjYXNlPScrY2FzZUlEKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FzZXMgPSB0aGlzLmNhc2VzLmZpbHRlcihmdW5jdGlvbiAoYWNhc2UpIHtyZXR1cm4gYWNhc2UuaWQgPT0gY2FzZUlEO30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXNlX3Byb3BlcnR5OiBhbnkgPSBjYXNlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlX3Byb3BlcnR5LnN0cmVldCA9IHByb3BlcnR5WzBdLnN0cmVldDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlX3Byb3BlcnR5LmNpdHkgPSBwcm9wZXJ0eVswXS5jaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2VzX3Byb3BlcnRpZXMucHVzaChjYXNlX3Byb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FzZXMubGVuZ3RoID09IHRoaXMuX2Nhc2VzX3Byb3BlcnRpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NvcnRBbmRTaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgfVxyXG4qL1xyXG4gICAgcHJpdmF0ZSBfZ2V0Q29sdW1ucygpIHtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ3N0YXR1cycsICdTdGF0dXMnKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbigncmVxdWVzdF9kYXRlJywnUmVxdWVzdCBEYXRlJyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ2lkJywgJ0Nhc2UgTnVtYmVyJyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ2Rpc3RhbmNlJywgJ0Rpc3RhbmNlJyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ2FuYWx5c3Rfc3RyaW5nJywgJ0FuYWx5c3QnKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbigncWNfcmV2aWV3ZXJfc3RyaW5nJywgJ1FDIFJldmlldycpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdjYnJzX3VuaXRfc3RyaW5nJywgJ0NCUlMgVW5pdCcpLFxyXG4gICAgICAgICAgICBuZXcgQ29sdW1uKCdzdHJlZXQnLCAnU3RyZWV0IEFkZHJlc3MnKSxcclxuICAgICAgICAgICAgbmV3IENvbHVtbignY2l0eScsICdDaXR5JyksXHJcbiAgICAgICAgICAgIG5ldyBDb2x1bW4oJ3ByaW9yaXR5JywgJ1ByaW9yaXR5JyksXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgX3NvcnRBbmRTaG93KCkge1xyXG4gICAgICAgIHRoaXMuY2FzZXNfcHJvcGVydGllcy5zb3J0KGR5bmFtaWNTb3J0TXVsdGlwbGUoWyctcHJpb3JpdHknLCAnLXN0YXR1cyddKSk7XHJcbiAgICAgICAgdGhpcy5ub3RyZWFkeSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=