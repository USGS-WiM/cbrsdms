import {Component, OnInit, OnDestroy, AfterViewInit, ViewChild} from '@angular/core';
import {Router, ROUTER_DIRECTIVES, ActivatedRoute}    from '@angular/router';
import {HTTP_PROVIDERS, URLSearchParams}    from '@angular/http';
import {WorkbenchFilter}      from './workbench-filter';
import {Case}              from '../cases/case';
import {CaseService}       from '../cases/case.service';
import {PropertyService}   from '../properties/property.service';
import {WorkbenchFilterComponent} from './workbench-filter.component';
import {WorkbenchGrid}     from './workbench-grid';
import {Column}            from '../grid/column';

@Component({
    template: `
        <div [hidden]="!notready" align="center" id="loading-spinner"><img class="loader" [src]="'loading.gif'" /></div>
        <div [hidden]="notready">
            <div  align="center"><button class="btn btn-default" (click)="toggleFilter()">Filter Cases</button></div>
            <workbench-filter [hidden]="hideFilter" (onFilter)="onFilter($event)"></workbench-filter>
            <grid [rows]="cases_properties" [columns]="columns"></grid>
        </div>
    `,
    directives:[ROUTER_DIRECTIVES, WorkbenchGrid, WorkbenchFilterComponent],
    providers: [
        HTTP_PROVIDERS,
        CaseService,
    ]
})

export class WorkbenchListComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild(WorkbenchFilterComponent)
    filterComponent: WorkbenchFilterComponent;

    t: number;
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
        private _caseService: CaseService,
        private _propertyService: PropertyService
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
        this._params = this._router.routerState.queryParams
        // this._params = this._route.params
            .subscribe(params => {
                if (params['tags']) {
                    this.t = params['tags'];
                    let urlSearchParams = 'view=workbench&tags=' + params['tags'];
                    this._getCases(urlSearchParams);
                    this._getColumns();
                    delete params['tags'];
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
        this.filterComponent.myWorkbenchFilter.tags = [+this.t];
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

    _getCases(newUrlSearchParams?) {
        let urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'view=workbench';
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
                        case_property.city = address[1];
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
    _getColumns() {
        this.columns = [
            new Column('status', 'Status'),
            new Column('request_date','Request Date'),
            new Column('id', 'Case Number'),
            new Column('distance', 'Distance'),
            new Column('analyst_string', 'Analyst'),
            new Column('qc_reviewer_string', 'QC Review'),
            new Column('cbrs_unit_string', 'CBRS Unit'),
            new Column('street', 'Street Address'),
            new Column('city', 'City'),
            new Column('priority', 'Priority'),
        ];
    }

    // the following function found here: http://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript/4760279#4760279
    _dynamicSortMultiple() {
        function dynamicSort(property) {
            let sortOrder = 1;
            if(property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }
            return function (a,b) {
                let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
            }
        }
        /*
         * save the arguments object as it will be overwritten
         * note that arguments object is an array-like object
         * consisting of the names of the properties to sort by
         */
        let props = arguments;
        return function (obj1, obj2) {
            let i = 0, result = 0, numberOfProperties = props.length;
            /* try getting a different result from 0 (equal)
             * as long as we have extra properties to compare
             */
            while(result === 0 && i < numberOfProperties) {
                result = dynamicSort(props[i])(obj1, obj2);
                i++;
            }
            return result;
        }
    }

    _sortAndShow() {
        this.cases_properties.sort(this._dynamicSortMultiple(['-priority', '-status']));
        this.notready = false;
    }

}
