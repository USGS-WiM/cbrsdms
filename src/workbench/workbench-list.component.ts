import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Case} from '../cases/case';
import {CaseService} from '../cases/case.service';
import {WorkbenchFilterComponent} from './workbench-filter.component';
import {Column} from '../grid/column';
import {APP_UTILITIES} from '../app.utilities';
import {FormBuilder} from '@angular/forms';

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
                    const urlSearchParams = 'view=workbench&tags=' + params['tags'];
                    this._getCases(urlSearchParams);
                    this._getColumns();
                } else if (sessionStorage.getItem('filterUrlSearchParams')) {
                    this._getCases(sessionStorage.getItem('filterUrlSearchParams'));
                    this._getColumns();
                } else {
                    this._getCases();
                    this._getColumns();
                }
            });
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

    onFilter(urlSearchParams: string) {
        this._getCases(urlSearchParams);
    }

    private _getCases(newUrlSearchParams?) {
        const urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'view=workbench&status=Open';
        this._caseService.getCases(new URLSearchParams(urlSearchParams))
            .subscribe(
                cases => {
                    console.log(cases);
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
                },
                error => this._errorMessage = <any>error
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

}
