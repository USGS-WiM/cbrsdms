import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {URLSearchParams} from '@angular/http';
import {Case}              from '../cases/case';
import {CaseService}       from '../cases/case.service';
import {Systemunit}        from '../systemunits/systemunit';
import {SystemunitService} from '../systemunits/systemunit.service';
import {ReportGridComponent} from './report-grid.component';
import {Column}            from '../grid/column';
import {APP_DATETIME, downloadCSV, dynamicSortMultiple} from '../app.utilities';

@Component({
    templateUrl: 'app/reports/report-cases-by-unit.component.html',
    directives:[ROUTER_DIRECTIVES, ReportGridComponent],
    providers: [CaseService, SystemunitService]
})

export class ReportCasesByUnitComponent implements OnInit, OnDestroy {

    private _params: any;
    private _cases: Case[];
    cases_properties = [];
    systemunits: Systemunit[];
    selected_unit: number;
    columns: Column[];
    notready: Boolean = true;
    private _errorMessage: string;

    constructor (
        private _router: Router,
        private _caseService: CaseService,
        private _systemunitService: SystemunitService
    ) {}

    ngOnInit() {
        this._params = this._router.routerState.queryParams
            .subscribe(params => {
                if (params['units']) {
                    let urlSearchParams = 'view=report&cbrs_unit=' + params['units'];
                    this.selected_unit = Number(params['units']);
                    this._getCases(urlSearchParams);
                    this._getSystemunits();
                    this._getColumns();
                    //delete params['units'];
                }
                else {
                    this._getCases();
                    this._getSystemunits();
                    this._getColumns();
                }
            });
    }

    ngOnDestroy() {
        if (this._params) {
            this._params.unsubscribe();
        }
    }

    onFilter(unit: number) {
        this.notready = false;
        this.selected_unit = unit;
        let urlSearchParams = (unit.toString() == '') ? null : 'view=report&cbrs_unit=' + unit.toString();
        this._getCases(urlSearchParams);
    }

    clearFilter() {
        this.notready = true;
        this.selected_unit = null;
        this._getCases();
    }

    exportToCSV() {
        let headers = [];
        this.columns.forEach(function(item){headers.push(item.descr);});
        let filename = '';
        if (this.selected_unit) {
            let id = this.selected_unit;
            let unit = this.systemunits.filter(function( obj ) {return obj.id == id;});
            filename = 'Report_CasesByUnit_' + unit[0].system_unit_number + '_' + APP_DATETIME.TODAY + '.csv';
        }
        else {
            filename = 'Report_CasesByUnit_' + APP_DATETIME.TODAY + '.csv';
        }
        downloadCSV({filename: filename, data: this.cases_properties, headers: headers});
    }

    private _getCases(newUrlSearchParams?) {
        let urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'view=report';
        this._caseService.getCases(new URLSearchParams(urlSearchParams))
            .subscribe(
                cases => {
                    this._cases = cases;
                    this.cases_properties.length = 0;
                    if (cases.length > 0) {
                        for (let i = 0, j = this._cases.length; i < j; i++) {
                            let case_property: any = this._cases[i];
                            let address = case_property.property_string.split(',');
                            //address[1] === "" ? case_property.street_address = address[0] : case_property.street_address = address[1] + ", " + address[0];
                            case_property.street_address = address[0];
                            delete case_property['property_string'];
                            this.cases_properties.push(case_property);
                            if (this._cases.length == this.cases_properties.length) {
                                this._sortAndShow();
                            }
                        }
                    }
                    else {
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error
            );
    }

    private _getSystemunits() {
        this._systemunitService.getSystemunits()
            .subscribe(
                systemunits => {
                    this.systemunits = systemunits;
                },
                error => this._errorMessage = <any>error);
    }

    private _getColumns() {
        this.columns = [
            new Column('id', 'Case Number'),
            new Column('status', 'Status'),
            new Column('prohibition_date','Prohibition Date'),
            new Column('cbrs_unit_string', 'CBRS Unit'),
            new Column('request_date','Request Date'),
            new Column('final_letter_date','Final Letter Date'),
            new Column('determination_string', 'Determination'),
            new Column('street_address', 'Street Address'),
        ];
    }

    private _sortAndShow() {
        this.cases_properties.sort(dynamicSortMultiple(['id']));
        this.notready = false;
    }

}