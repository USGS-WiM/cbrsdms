import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Case} from '../cases/case';
import {CaseService} from '../cases/case.service';
import {WorkbenchFilterComponent} from './workbench-filter.component';
import {Column} from '../grid/column';
import {APP_UTILITIES} from '../app.utilities';
import {FormBuilder} from '@angular/forms';
import * as FileSaver from 'file-saver';

@Component({
    templateUrl: 'workbench-list.component.html',
    providers: [FormBuilder]
})

export class WorkbenchListComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(WorkbenchFilterComponent, {static: false})
    filterComponent: WorkbenchFilterComponent; // may need to change to '{static: true}'

    tag_ID: number;
    private _params: any;
    private _cases: Case[];
    cases_properties = [];
    columns: Column[];
    notready = true;
    hideFilter = true;
    noCasesFound = false;
    csvSearchParams;
    private _errorMessage: string;

    constructor (
        private _route: ActivatedRoute,
        private _router: Router,
        private _caseService: CaseService
    ) {}

    ngOnInit() {
        this._params = this._route.queryParams
            .subscribe(params => {
                if (params['tags']) {
                    this.tag_ID = params['tags'];
                    const urlSearchParams = {view: 'workbench', tags: params['tags']};
                    this._getCases(urlSearchParams);
                    this._getColumns();
                } else if (sessionStorage.getItem('filterUrlSearchParams')) {
                    // convert urlsearchparams to object for filter/request parameters
                    const urlParamArray = sessionStorage.getItem('filterUrlSearchParams').split('&');
                    const urlParamObject = {};
                    for (const param of urlParamArray) {
                        const paramArray = param.split('=');
                        urlParamObject[paramArray[0]] = paramArray[1];
                    }
                    this._getCases(urlParamObject);
                    this._getColumns();
                } else {
                    this._getCases();
                    this._getColumns();
                }
            });
        if (sessionStorage.getItem('filterUrlSearchParams')) {
            if (this.hideFilter) {this.toggleFilter()}
        }
    }

    ngOnDestroy() {
        if (this._params) {
            this._params.unsubscribe();
        }
    }

    ngAfterViewInit() {
        this.filterComponent.myWorkbenchFilter.tags = [+this.tag_ID];
    }

    toggleFilter() {
        this.hideFilter ? this.hideFilter = false : this.hideFilter = true;
    }

    onFilter(urlSearchParams: object) {
        this.notready = true;
        this.csvSearchParams = urlSearchParams ? urlSearchParams : {view: 'workbench', status: 'Open'};
        this._getCases(urlSearchParams);
    }

    private _getCases(newUrlSearchParams?) {
        const urlSearchParams = newUrlSearchParams ? newUrlSearchParams : {view: 'workbench', status: 'Open'};
        this._caseService.getCases(urlSearchParams)
            .subscribe(
                cases => {
                    this._cases = cases;
                    if (this._cases.length > 0) {
                        this.cases_properties.length = 0;
                        for (let i = 0, j = this._cases.length; i < j; i++) {
                            const case_property: any = this._cases[i];
                            if (case_property.property_string) {
                                const address = case_property.property_string.split(',');
                                case_property.street = address[0];
                                case_property.city = address[2];
                            }
                            this.cases_properties.push(case_property);
                            if (this._cases.length === this.cases_properties.length) {
                                if (!newUrlSearchParams) { this._router.navigate(['/workbench']); }
                            }
                        }
                        this.noCasesFound = false;
                    } else {
                        this.noCasesFound = true;
                    }
                    this._sortAndShow();
                    this.notready = false;
                },
                error => {this._errorMessage = <any>error; this.notready = false; }
            );
    }

    private _getColumns() {
        this.columns = [
            new Column('status', 'Status'),
            new Column('request_date', 'Request Date'),
            new Column('id', 'Case ID'),
            new Column('case_reference', 'Case Reference'),
            new Column('distance', 'Distance'),
            new Column('analyst_string', 'Analyst'),
            new Column('qc_reviewer_string', 'QC Review'),
            new Column('cbrs_unit_string', 'CBRS Unit'),
            new Column('street', 'Street Address'),
            new Column('city', 'City'),
            // new Column('policy_number', 'Policy #'),
            new Column('priority', 'Priority'),
            new Column('duplicate', 'Duplicate of'),
        ];
    }

    private _sortAndShow() {
        this.cases_properties.sort(APP_UTILITIES.dynamicSortMultiple(['-priority', 'id']));
        this.notready = false;
    }

    downloadCases() {
        const self = this;
        this.notready = true;
        if (!this.csvSearchParams) {this.csvSearchParams = {view: 'workbench', status: 'Open'}}
        const params = [];
        Object.keys(this.csvSearchParams).forEach(key => {
            params.push(key + '=' + this.csvSearchParams[key]);
        })
        const paramsObject = params.join('&') + '&format=csv';
        this._caseService.getWorkbenchCSV(paramsObject)
            .then(function(data) {
                const blob = new Blob([data[0]], { type: 'text/csv' });
                FileSaver.saveAs(blob, data[1]);
                self.notready = false;
            });
    }

    public jsonToCSV(json) {
        // converts json to csv
        let str = '';
        let line = '';
        Object.keys(json[0]).forEach(function(key) {
            if (line !== '') {line += ','; }
            line += key;
        });
        str += line + '\r\n';
        for (let i = 0; i < json.length; i++) {
            line = '';
            Object.keys(json[i]).forEach(function(key) {
                if (line !== '') {line += ','; }
                if (typeof json[i][key] === 'string' && json[i][key].indexOf(',') !== -1) {
                    line += '"' + json[i][key] + '"';
                } else {line += json[i][key]; }
            });
            str += line + '\r\n';
        }
        return str;
    }
}
