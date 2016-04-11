import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {URLSearchParams}   from 'angular2/http';
import {Case}              from '../cases/case'
import {CaseService}       from '../cases/case.service';
import {PropertyService}   from '../properties/property.service';
import {WorkbenchGrid}     from './workbench-grid';
import {Column}            from '../grid/column';

@Component({
    template: `
        <div [hidden]="!notready" align="center" id="loading-spinner"><img class="loader" [src]="'loading.gif'" /></div>
        <div [hidden]="notready">
            <grid [rows]="cases_properties" [columns]="columns"></grid>
        </div>
    `,
    directives:[WorkbenchGrid],
    providers: [
        HTTP_PROVIDERS,
        CaseService,
    ]
})

export class WorkbenchListComponent implements OnInit{

    constructor (private _caseService: CaseService, private _propertyService: PropertyService) {}

    private _cases: Case[];
    cases_properties = [];
    columns: Column[];
    notready: Boolean = true;
    private _errorMessage: string;

    _getCases() {
        this._caseService.getCases(new URLSearchParams('view=workbench'))
            .subscribe(
                cases => {
                    this._cases = cases;
                    for (var i = 0, j = this._cases.length; i < j; i++) {
                        //this.getProperties(this.cases[i].id);
                        let case_property: any = this._cases[i];
                        let address = case_property.property_string.split(',');
                        case_property.street = address[0];
                        case_property.city = address[1];
                        this.cases_properties.push(case_property);
                        if (this._cases.length == this.cases_properties.length) {
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
            var sortOrder = 1;
            if(property[0] === "-") {
                sortOrder = -1;
                property = property.substr(1);
            }
            return function (a,b) {
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                return result * sortOrder;
            }
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
            while(result === 0 && i < numberOfProperties) {
                result = dynamicSort(props[i])(obj1, obj2);
                i++;
            }
            return result;
        }
    }

    _sortAndShow() {
        this.cases_properties.sort(this._dynamicSortMultiple('-priority', '-status'));
        this.notready = false;
    }

    ngOnInit() {
        this._getCases();
        this._getColumns();
    }
}
