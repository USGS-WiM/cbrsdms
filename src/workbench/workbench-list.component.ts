import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router}    from '@angular/router';
import {URLSearchParams}   from '@angular/http';
import {Case}              from '../cases/case';
import {CaseService}       from '../cases/case.service';
import {WorkbenchFilterComponent} from './workbench-filter.component';
import {WorkbenchGridComponent}   from './workbench-grid.component';
import {Column}            from '../grid/column';
import {APP_UTILITIES}     from '../app.utilities';
import {FormBuilder}       from '@angular/forms';

@Component({
    templateUrl: 'workbench-list.component.html',
    providers: [CaseService, FormBuilder]
})

export class WorkbenchListComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(WorkbenchFilterComponent)
    filterComponent: WorkbenchFilterComponent;

    tag_ID: number;
    private _params: any;
    private _cases: Case[];
    cases_properties = [];
    columns: Column[];
    notready: Boolean = true;
    hideFilter: Boolean = true;
    private _errorMessage: string;

    constructor (
        private _route: ActivatedRoute,
        private _router: Router,
        private _caseService: CaseService
    ) {
        // this._params = this._router.routerState.queryParams
        //     .subscribe(params => {
        //         this.tag_ID = params['tag'];
        //         this._getCases(this.tag_ID);
        //         this._getColumns();
        //         //delete params['tag'];
        //     });
    }

    ngOnInit() {
        this._params = this._route.queryParams
        // this._params = this._route.params
            .subscribe(params => {
                if (params['tags']) {
                    this.tag_ID = params['tags'];
                    let urlSearchParams = 'view=workbench&tags=' + params['tags'];
                    this._getCases(urlSearchParams);
                    this._getColumns();
                    //delete params['tags'];
                }
                else {
                    this._getCases();
                    this._getColumns();
                }
            });
        // let tag_ID = this._route.snapshot._urlSegment.pathsWithParams[0].parameters.tag;
        // let tag_ID = this._route.snapshot.params['tag'];
        // this._getCases(tag_ID);
        // this._getColumns();
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

    // removeTagFilter() {
    //     this.notready = true;
    //     this.tag_ID = null;
    //     this._getCases();
    // }

    private _getCases(newUrlSearchParams?) {
        let urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'view=workbench&status=Open';
        this._caseService.getCases(new URLSearchParams(urlSearchParams))
            .subscribe(
                cases => {
                    this._cases = cases;
                    this.cases_properties.length = 0;
                    for (let i = 0, j = this._cases.length; i < j; i++) {
                        //this.getProperties(this.cases[i].id);
                        let case_property: any = this._cases[i];
                        let address = case_property.property_string.split(',');
                        case_property.street = address[0];
                        case_property.city = address[2];
                        this.cases_properties.push(case_property);
                        if (this._cases.length == this.cases_properties.length) {
                            // if (this._params) {
                            //     delete this._params._subscriptions[0].subject.value.tag;
                            // }
                            if (!newUrlSearchParams) {this._router.navigate(['/workbench']);}
                            this._sortAndShow();
                        }
                    }
                },
                error => this._errorMessage = <any>error
            );
    }

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
    private _getColumns() {
        this.columns = [
            new Column('status', 'Status'),
            new Column('request_date','Request Date'),
            new Column('id', 'Case Number'),
            new Column('case_hash', 'Case Reference'),
            new Column('distance', 'Distance'),
            new Column('analyst_string', 'Analyst'),
            new Column('qc_reviewer_string', 'QC Review'),
            new Column('cbrs_unit_string', 'CBRS Unit'),
            new Column('street', 'Street Address'),
            new Column('city', 'City'),
            new Column('priority', 'Priority'),
        ];
    }


    private _sortAndShow() {
        //this.cases_properties.sort(APP_UTILITIES.dynamicSortMultiple(['-priority', '-status']));
        this.notready = false;
    }

}
