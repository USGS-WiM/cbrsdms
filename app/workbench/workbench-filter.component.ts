import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {HTTP_PROVIDERS}    from '@angular/http';
import {WorkbenchFilter}      from './workbench-filter';
import {Tag}               from '../tags/tag';
import {Systemunit}        from '../systemunits/systemunit';
import {User}              from '../users/user';
import {CaseService}       from '../cases/case.service';
import {TagService}        from '../tags/tag.service';
import {SystemunitService} from '../systemunits/systemunit.service';
import {UserService}       from '../users/user.service';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {APP_SETTINGS}      from '../app.settings';

@Component({
    selector: 'workbench-filter',
    templateUrl: '/app/workbench/workbench-filter.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        CaseService,
        TagService,
        SystemunitService,
        UserService
    ]
})

export class WorkbenchFilterComponent implements OnInit {
    @Output() onFilter = new EventEmitter<string>();

    //private _case_property_fields = ["status", "case_number", "request_date_after", "request_date_before", "distance_from", "distance_to", "analyst", "qc_reviewer", "cbrs_unit", "tags", "street", "city", "priority", "on_hold", "invalid"];
    myWorkbenchFilter = new WorkbenchFilter();
    myWorkbenchFreeText = {fiscal_year: undefined, freetext: undefined};
    myStatuses: string[] = APP_SETTINGS.STATUSES;
    myTags: Tag[];
    mySystemunits: Systemunit[];
    myUsers: User[] = [];
    form: FormGroup;
    private _myWorkbenchFilter_fields = Object.keys(this.myWorkbenchFilter);
    private _workbenchFilterControls;
    workbenchfiltergroup: FormGroup;
    private _workbenchFreeText_fields = Object.keys(this.myWorkbenchFreeText);
    private _workbenchFreeTextControls;
    workbenchfreetextgroup: FormGroup;

    active = true;
    filternotready: Boolean = true;
    private _errorMessage: string;

    private _makeControls(fields) {
        let controls = {};
        for (let i = 0, j = fields.length; i < j; i++) {
            controls[fields[i]] = new FormControl("");
        }
        return controls;
    }

    private _updateControls(fields, controls, values): void {
        for (let i = 0, j = fields.length; i < j; i++) {
            controls[fields[i]].updateValue(values[fields[i]]);
        }
    }

    constructor (fb: FormBuilder,
                 private _caseService: CaseService,
                 private _tagService: TagService,
                 private _systemunitService: SystemunitService,
                 private _userService: UserService
    ) {
        this._workbenchFilterControls = this._makeControls(this._myWorkbenchFilter_fields);
        this.workbenchfiltergroup = new FormGroup(this._workbenchFilterControls);
        this._workbenchFreeTextControls = this._makeControls(this._workbenchFreeText_fields);
        this.workbenchfreetextgroup = new FormGroup(this._workbenchFreeTextControls);

        this.form = fb.group({
            workbenchfiltergroup: this.workbenchfiltergroup,
            workbenchfreetextgroup: this.workbenchfreetextgroup
        });

        this._getUsers();
        this._getSystemunits();
        this._getTags();
    }

    ngOnInit() {
        setTimeout(() => this._updateControls(this._myWorkbenchFilter_fields, this._workbenchFilterControls, this.myWorkbenchFilter), 0);
        this.filternotready = false;
    }

    private _getTags() {
        this._tagService.getTags()
            .subscribe(
                tags => {
                    this.myTags = tags;
                },
                error => this._errorMessage = <any>error);
    }

    private _getSystemunits() {
        this._systemunitService.getSystemunits()
            .subscribe(
                systemunits => {
                    this.mySystemunits = systemunits;
                },
                error => this._errorMessage = <any>error);
    }

    private _getUsers() {
        this._userService.getUsers()
            .subscribe(
                users => {
                    this.myUsers = users;
                },
                error => this._errorMessage = <any>error);
    }

    clearFilter() {
        this.myWorkbenchFilter = new WorkbenchFilter();
        this._updateControls(this._myWorkbenchFilter_fields, this._workbenchFilterControls, this.myWorkbenchFilter);
        this._updateControls(this._workbenchFreeText_fields, this._workbenchFreeTextControls, this.myWorkbenchFreeText);
        //this._workbenchFreeTextControls["fiscal_year"].updateValue("");
        //this._workbenchFreeTextControls["freetext"].updateValue("");
    }

    onSubmit(form) {
        // check each FormControl for changes
        if (form.dirty) {
            this.filternotready = true;
            let urlSearchParams = 'view=workbench';
            for (let i = 0, j = this._myWorkbenchFilter_fields.length; i < j; i++) {
                let field = form.controls.workbenchfiltergroup.controls[this._myWorkbenchFilter_fields[i]];
                if (field.dirty && field.value != null && field.value != '') {
                    urlSearchParams += '&' + this._myWorkbenchFilter_fields[i]  + '=' + field.value;
                }
            }
            for (let i = 0, j = this._workbenchFreeText_fields.length; i < j; i++) {
                let field = form.controls.workbenchfreetextgroup.controls[this._workbenchFreeText_fields[i]];
                if (field.dirty && field.value != null && field.value != '') {
                    urlSearchParams += '&' + this._workbenchFreeText_fields[i]  + '=' + field.value;
                }
            }
            this.filternotready = false;
            this.onFilter.emit(urlSearchParams);
        }

        // reset the form
        //this.active = false;
        //setTimeout(()=> { this.filternotready = false; this.active=true; }, 1000);
    }
}