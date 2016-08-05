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
var http_1 = require('@angular/http');
var workbench_filter_1 = require('./workbench-filter');
var case_service_1 = require('../cases/case.service');
var tag_service_1 = require('../tags/tag.service');
var systemunit_service_1 = require('../systemunits/systemunit.service');
var user_service_1 = require('../users/user.service');
var forms_1 = require('@angular/forms');
var app_settings_1 = require('../app.settings');
var WorkbenchFilterComponent = (function () {
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
            providers: [
                http_1.HTTP_PROVIDERS,
                case_service_1.CaseService,
                tag_service_1.TagService,
                systemunit_service_1.SystemunitService,
                user_service_1.UserService
            ]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, case_service_1.CaseService, tag_service_1.TagService, systemunit_service_1.SystemunitService, user_service_1.UserService])
    ], WorkbenchFilterComponent);
    return WorkbenchFilterComponent;
}());
exports.WorkbenchFilterComponent = WorkbenchFilterComponent;
//# sourceMappingURL=workbench-filter.component.js.map