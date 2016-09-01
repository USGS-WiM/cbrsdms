System.register(['@angular/core', './workbench-filter', '../cases/case.service', '../tags/tag.service', '../systemunits/systemunit.service', '../users/user.service', '@angular/forms', '../app.settings'], function(exports_1, context_1) {
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
    var core_1, workbench_filter_1, case_service_1, tag_service_1, systemunit_service_1, user_service_1, forms_1, app_settings_1;
    var WorkbenchFilterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (workbench_filter_1_1) {
                workbench_filter_1 = workbench_filter_1_1;
            },
            function (case_service_1_1) {
                case_service_1 = case_service_1_1;
            },
            function (tag_service_1_1) {
                tag_service_1 = tag_service_1_1;
            },
            function (systemunit_service_1_1) {
                systemunit_service_1 = systemunit_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            }],
        execute: function() {
            WorkbenchFilterComponent = (function () {
                function WorkbenchFilterComponent(fb, _caseService, _tagService, _systemunitService, _userService) {
                    this._caseService = _caseService;
                    this._tagService = _tagService;
                    this._systemunitService = _systemunitService;
                    this._userService = _userService;
                    this.onFilter = new core_1.EventEmitter();
                    //private _case_property_fields = ["status", "case_number", "request_date_after", "request_date_before", "distance_from", "distance_to", "analyst", "qc_reviewer", "cbrs_unit", "tags", "street", "city", "priority", "on_hold", "invalid"];
                    this.myWorkbenchFilter = new workbench_filter_1.WorkbenchFilter();
                    this.myWorkbenchFreeText = { fiscal_year: undefined, freetext: undefined };
                    this.myStatuses = app_settings_1.APP_SETTINGS.STATUSES;
                    this.myUsers = [];
                    this._myWorkbenchFilter_fields = Object.keys(this.myWorkbenchFilter);
                    this._workbenchFreeText_fields = Object.keys(this.myWorkbenchFreeText);
                    this.active = true;
                    this.filternotready = true;
                    this._workbenchFilterControls = this._makeControls(this._myWorkbenchFilter_fields);
                    this.workbenchfiltergroup = new forms_1.FormGroup(this._workbenchFilterControls);
                    this._workbenchFreeTextControls = this._makeControls(this._workbenchFreeText_fields);
                    this.workbenchfreetextgroup = new forms_1.FormGroup(this._workbenchFreeTextControls);
                    this.form = fb.group({
                        workbenchfiltergroup: this.workbenchfiltergroup,
                        workbenchfreetextgroup: this.workbenchfreetextgroup
                    });
                    this._getUsers();
                    this._getSystemunits();
                    this._getTags();
                }
                WorkbenchFilterComponent.prototype._makeControls = function (fields) {
                    var controls = {};
                    for (var i = 0, j = fields.length; i < j; i++) {
                        controls[fields[i]] = new forms_1.FormControl("");
                    }
                    return controls;
                };
                WorkbenchFilterComponent.prototype._updateControls = function (fields, controls, values) {
                    for (var i = 0, j = fields.length; i < j; i++) {
                        controls[fields[i]].updateValue(values[fields[i]]);
                    }
                };
                WorkbenchFilterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    setTimeout(function () { return _this._updateControls(_this._myWorkbenchFilter_fields, _this._workbenchFilterControls, _this.myWorkbenchFilter); }, 0);
                    this.filternotready = false;
                };
                WorkbenchFilterComponent.prototype._getTags = function () {
                    var _this = this;
                    this._tagService.getTags()
                        .subscribe(function (tags) {
                        _this.myTags = tags;
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchFilterComponent.prototype._getSystemunits = function () {
                    var _this = this;
                    this._systemunitService.getSystemunits()
                        .subscribe(function (systemunits) {
                        _this.mySystemunits = systemunits;
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchFilterComponent.prototype._getUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) {
                        _this.myUsers = users;
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchFilterComponent.prototype.clearFilter = function () {
                    this.myWorkbenchFilter = new workbench_filter_1.WorkbenchFilter();
                    this._updateControls(this._myWorkbenchFilter_fields, this._workbenchFilterControls, this.myWorkbenchFilter);
                    this._updateControls(this._workbenchFreeText_fields, this._workbenchFreeTextControls, this.myWorkbenchFreeText);
                    //this._workbenchFreeTextControls["fiscal_year"].updateValue("");
                    //this._workbenchFreeTextControls["freetext"].updateValue("");
                };
                WorkbenchFilterComponent.prototype.onSubmit = function (form) {
                    // check each FormControl for changes
                    if (form.dirty) {
                        this.filternotready = true;
                        var urlSearchParams = 'view=workbench';
                        for (var i = 0, j = this._myWorkbenchFilter_fields.length; i < j; i++) {
                            var field = form.controls.workbenchfiltergroup.controls[this._myWorkbenchFilter_fields[i]];
                            if (field.dirty && field.value != null && field.value != '') {
                                urlSearchParams += '&' + this._myWorkbenchFilter_fields[i] + '=' + field.value;
                            }
                        }
                        for (var i = 0, j = this._workbenchFreeText_fields.length; i < j; i++) {
                            var field = form.controls.workbenchfreetextgroup.controls[this._workbenchFreeText_fields[i]];
                            if (field.dirty && field.value != null && field.value != '') {
                                urlSearchParams += '&' + this._workbenchFreeText_fields[i] + '=' + field.value;
                            }
                        }
                        this.filternotready = false;
                        this.onFilter.emit(urlSearchParams);
                    }
                    // reset the form
                    //this.active = false;
                    //setTimeout(()=> { this.filternotready = false; this.active=true; }, 1000);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], WorkbenchFilterComponent.prototype, "onFilter", void 0);
                WorkbenchFilterComponent = __decorate([
                    core_1.Component({
                        selector: 'workbench-filter',
                        templateUrl: 'app/workbench/workbench-filter.component.html',
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
                        providers: [case_service_1.CaseService, tag_service_1.TagService, systemunit_service_1.SystemunitService, user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, case_service_1.CaseService, tag_service_1.TagService, systemunit_service_1.SystemunitService, user_service_1.UserService])
                ], WorkbenchFilterComponent);
                return WorkbenchFilterComponent;
            }());
            exports_1("WorkbenchFilterComponent", WorkbenchFilterComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2JlbmNoLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JrYmVuY2gtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFvQ0ksa0NBQWEsRUFBZSxFQUNQLFlBQXlCLEVBQ3pCLFdBQXVCLEVBQ3ZCLGtCQUFxQyxFQUNyQyxZQUF5QjtvQkFIekIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQUN2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO29CQUNyQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtvQkF2Q3BDLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztvQkFFaEQsNE9BQTRPO29CQUM1TyxzQkFBaUIsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztvQkFDMUMsd0JBQW1CLEdBQUcsRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQztvQkFDcEUsZUFBVSxHQUFhLDJCQUFZLENBQUMsUUFBUSxDQUFDO29CQUc3QyxZQUFPLEdBQVcsRUFBRSxDQUFDO29CQUViLDhCQUF5QixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBR2hFLDhCQUF5QixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBSTFFLFdBQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2QsbUJBQWMsR0FBWSxJQUFJLENBQUM7b0JBdUIzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztvQkFDbkYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksaUJBQVMsQ0FBQyxJ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U0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSx3QkFBVSxFQUFFLHNDQUFpQixFQUFFLDBCQUFXLENBQUM7cUJBQ3ZFLENBQUM7OzRDQUFBO2dCQTRIRiwrQkFBQztZQUFELENBQUMsQUExSEQsSUEwSEM7WUExSEQsK0RBMEhDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1dvcmtiZW5jaEZpbHRlcn0gICAgICBmcm9tICcuL3dvcmtiZW5jaC1maWx0ZXInO1xyXG5pbXBvcnQge1RhZ30gICAgICAgICAgICAgICBmcm9tICcuLi90YWdzL3RhZyc7XHJcbmltcG9ydCB7U3lzdGVtdW5pdH0gICAgICAgIGZyb20gJy4uL3N5c3RlbXVuaXRzL3N5c3RlbXVuaXQnO1xyXG5pbXBvcnQge1VzZXJ9ICAgICAgICAgICAgICBmcm9tICcuLi91c2Vycy91c2VyJztcclxuaW1wb3J0IHtDYXNlU2VydmljZX0gICAgICAgZnJvbSAnLi4vY2FzZXMvY2FzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWdTZXJ2aWNlfSAgICAgICAgZnJvbSAnLi4vdGFncy90YWcuc2VydmljZSc7XHJcbmltcG9ydCB7U3lzdGVtdW5pdFNlcnZpY2V9IGZyb20gJy4uL3N5c3RlbXVuaXRzL3N5c3RlbXVuaXQuc2VydmljZSc7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9ICAgICAgIGZyb20gJy4uL3VzZXJzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7UkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0FQUF9TRVRUSU5HU30gICAgICBmcm9tICcuLi9hcHAuc2V0dGluZ3MnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3dvcmtiZW5jaC1maWx0ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvd29ya2JlbmNoL3dvcmtiZW5jaC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtDYXNlU2VydmljZSwgVGFnU2VydmljZSwgU3lzdGVtdW5pdFNlcnZpY2UsIFVzZXJTZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmtiZW5jaEZpbHRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAT3V0cHV0KCkgb25GaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICAvL3ByaXZhdGUgX2Nhc2VfcHJvcGVydHlfZmllbGRzID0gW1wic3RhdHVzXCIsIFwiY2FzZV9udW1iZXJcIiwgXCJyZXF1ZXN0X2RhdGVfYWZ0ZXJcIiwgXCJyZXF1ZXN0X2RhdGVfYmVmb3JlXCIsIFwiZGlzdGFuY2VfZnJvbVwiLCBcImRpc3RhbmNlX3RvXCIsIFwiYW5hbHlzdFwiLCBcInFjX3Jldmlld2VyXCIsIFwiY2Jyc191bml0XCIsIFwidGFnc1wiLCBcInN0cmVldFwiLCBcImNpdHlcIiwgXCJwcmlvcml0eVwiLCBcIm9uX2hvbGRcIiwgXCJpbnZhbGlkXCJdO1xyXG4gICAgbXlXb3JrYmVuY2hGaWx0ZXIgPSBuZXcgV29ya2JlbmNoRmlsdGVyKCk7XHJcbiAgICBteVdvcmtiZW5jaEZyZWVUZXh0ID0ge2Zpc2NhbF95ZWFyOiB1bmRlZmluZWQsIGZyZWV0ZXh0OiB1bmRlZmluZWR9O1xyXG4gICAgbXlTdGF0dXNlczogc3RyaW5nW10gPSBBUFBfU0VUVElOR1MuU1RBVFVTRVM7XHJcbiAgICBteVRhZ3M6IFRhZ1tdO1xyXG4gICAgbXlTeXN0ZW11bml0czogU3lzdGVtdW5pdFtdO1xyXG4gICAgbXlVc2VyczogVXNlcltdID0gW107XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcml2YXRlIF9teVdvcmtiZW5jaEZpbHRlcl9maWVsZHMgPSBPYmplY3Qua2V5cyh0aGlzLm15V29ya2JlbmNoRmlsdGVyKTtcclxuICAgIHByaXZhdGUgX3dvcmtiZW5jaEZpbHRlckNvbnRyb2xzO1xyXG4gICAgd29ya2JlbmNoZmlsdGVyZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIHByaXZhdGUgX3dvcmtiZW5jaEZyZWVUZXh0X2ZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMubXlXb3JrYmVuY2hGcmVlVGV4dCk7XHJcbiAgICBwcml2YXRlIF93b3JrYmVuY2hGcmVlVGV4dENvbnRyb2xzO1xyXG4gICAgd29ya2JlbmNoZnJlZXRleHRncm91cDogRm9ybUdyb3VwO1xyXG5cclxuICAgIGFjdGl2ZSA9IHRydWU7XHJcbiAgICBmaWx0ZXJub3RyZWFkeTogQm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9lcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIF9tYWtlQ29udHJvbHMoZmllbGRzKSB7XHJcbiAgICAgICAgbGV0IGNvbnRyb2xzID0ge307XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBmaWVsZHMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xzW2ZpZWxkc1tpXV0gPSBuZXcgRm9ybUNvbnRyb2woXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250cm9scztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVDb250cm9scyhmaWVsZHMsIGNvbnRyb2xzLCB2YWx1ZXMpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IGZpZWxkcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICAgICAgY29udHJvbHNbZmllbGRzW2ldXS51cGRhdGVWYWx1ZSh2YWx1ZXNbZmllbGRzW2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfY2FzZVNlcnZpY2U6IENhc2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX3RhZ1NlcnZpY2U6IFRhZ1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfc3lzdGVtdW5pdFNlcnZpY2U6IFN5c3RlbXVuaXRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fd29ya2JlbmNoRmlsdGVyQ29udHJvbHMgPSB0aGlzLl9tYWtlQ29udHJvbHModGhpcy5fbXlXb3JrYmVuY2hGaWx0ZXJfZmllbGRzKTtcclxuICAgICAgICB0aGlzLndvcmtiZW5jaGZpbHRlcmdyb3VwID0gbmV3IEZvcm1Hcm91cCh0aGlzLl93b3JrYmVuY2hGaWx0ZXJDb250cm9scyk7XHJcbiAgICAgICAgdGhpcy5fd29ya2JlbmNoRnJlZVRleHRDb250cm9scyA9IHRoaXMuX21ha2VDb250cm9scyh0aGlzLl93b3JrYmVuY2hGcmVlVGV4dF9maWVsZHMpO1xyXG4gICAgICAgIHRoaXMud29ya2JlbmNoZnJlZXRleHRncm91cCA9IG5ldyBGb3JtR3JvdXAodGhpcy5fd29ya2JlbmNoRnJlZVRleHRDb250cm9scyk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgICAgICAgd29ya2JlbmNoZmlsdGVyZ3JvdXA6IHRoaXMud29ya2JlbmNoZmlsdGVyZ3JvdXAsXHJcbiAgICAgICAgICAgIHdvcmtiZW5jaGZyZWV0ZXh0Z3JvdXA6IHRoaXMud29ya2JlbmNoZnJlZXRleHRncm91cFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9nZXRVc2VycygpO1xyXG4gICAgICAgIHRoaXMuX2dldFN5c3RlbXVuaXRzKCk7XHJcbiAgICAgICAgdGhpcy5fZ2V0VGFncygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fdXBkYXRlQ29udHJvbHModGhpcy5fbXlXb3JrYmVuY2hGaWx0ZXJfZmllbGRzLCB0aGlzLl93b3JrYmVuY2hGaWx0ZXJDb250cm9scywgdGhpcy5teVdvcmtiZW5jaEZpbHRlciksIDApO1xyXG4gICAgICAgIHRoaXMuZmlsdGVybm90cmVhZHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRUYWdzKCkge1xyXG4gICAgICAgIHRoaXMuX3RhZ1NlcnZpY2UuZ2V0VGFncygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICB0YWdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15VGFncyA9IHRhZ3M7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0U3lzdGVtdW5pdHMoKSB7XHJcbiAgICAgICAgdGhpcy5fc3lzdGVtdW5pdFNlcnZpY2UuZ2V0U3lzdGVtdW5pdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgc3lzdGVtdW5pdHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlTeXN0ZW11bml0cyA9IHN5c3RlbXVuaXRzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFVzZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLmdldFVzZXJzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHVzZXJzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15VXNlcnMgPSB1c2VycztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLm15V29ya2JlbmNoRmlsdGVyID0gbmV3IFdvcmtiZW5jaEZpbHRlcigpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzKHRoaXMuX215V29ya2JlbmNoRmlsdGVyX2ZpZWxkcywgdGhpcy5fd29ya2JlbmNoRmlsdGVyQ29udHJvbHMsIHRoaXMubXlXb3JrYmVuY2hGaWx0ZXIpO1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzKHRoaXMuX3dvcmtiZW5jaEZyZWVUZXh0X2ZpZWxkcywgdGhpcy5fd29ya2JlbmNoRnJlZVRleHRDb250cm9scywgdGhpcy5teVdvcmtiZW5jaEZyZWVUZXh0KTtcclxuICAgICAgICAvL3RoaXMuX3dvcmtiZW5jaEZyZWVUZXh0Q29udHJvbHNbXCJmaXNjYWxfeWVhclwiXS51cGRhdGVWYWx1ZShcIlwiKTtcclxuICAgICAgICAvL3RoaXMuX3dvcmtiZW5jaEZyZWVUZXh0Q29udHJvbHNbXCJmcmVldGV4dFwiXS51cGRhdGVWYWx1ZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdChmb3JtKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgZWFjaCBGb3JtQ29udHJvbCBmb3IgY2hhbmdlc1xyXG4gICAgICAgIGlmIChmb3JtLmRpcnR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVybm90cmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgdXJsU2VhcmNoUGFyYW1zID0gJ3ZpZXc9d29ya2JlbmNoJztcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB0aGlzLl9teVdvcmtiZW5jaEZpbHRlcl9maWVsZHMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBmb3JtLmNvbnRyb2xzLndvcmtiZW5jaGZpbHRlcmdyb3VwLmNvbnRyb2xzW3RoaXMuX215V29ya2JlbmNoRmlsdGVyX2ZpZWxkc1tpXV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGlydHkgJiYgZmllbGQudmFsdWUgIT0gbnVsbCAmJiBmaWVsZC52YWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFNlYXJjaFBhcmFtcyArPSAnJicgKyB0aGlzLl9teVdvcmtiZW5jaEZpbHRlcl9maWVsZHNbaV0gICsgJz0nICsgZmllbGQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB0aGlzLl93b3JrYmVuY2hGcmVlVGV4dF9maWVsZHMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmllbGQgPSBmb3JtLmNvbnRyb2xzLndvcmtiZW5jaGZyZWV0ZXh0Z3JvdXAuY29udHJvbHNbdGhpcy5fd29ya2JlbmNoRnJlZVRleHRfZmllbGRzW2ldXTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaXJ0eSAmJiBmaWVsZC52YWx1ZSAhPSBudWxsICYmIGZpZWxkLnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsU2VhcmNoUGFyYW1zICs9ICcmJyArIHRoaXMuX3dvcmtiZW5jaEZyZWVUZXh0X2ZpZWxkc1tpXSAgKyAnPScgKyBmaWVsZC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcm5vdHJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMub25GaWx0ZXIuZW1pdCh1cmxTZWFyY2hQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXQgdGhlIGZvcm1cclxuICAgICAgICAvL3RoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy9zZXRUaW1lb3V0KCgpPT4geyB0aGlzLmZpbHRlcm5vdHJlYWR5ID0gZmFsc2U7IHRoaXMuYWN0aXZlPXRydWU7IH0sIDEwMDApO1xyXG4gICAgfVxyXG59Il19