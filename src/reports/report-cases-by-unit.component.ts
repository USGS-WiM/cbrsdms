import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReportCase} from './report-case';
import {ReportCaseService} from './report-case.service';
import {Systemunit} from '../systemunits/systemunit';
import {SystemunitService} from '../systemunits/systemunit.service';
import {Column} from '../grid/column';
import {APP_UTILITIES} from '../app.utilities';
import * as FileSaver from 'file-saver';


@Component({
    templateUrl: 'report-cases-by-unit.component.html'
})
export class ReportCasesByUnitComponent implements OnInit, OnDestroy {

    private _params: any;
    page_size = 100;
    private _prevPage: string;
    private _nextPage: string;
    private _reportcases: ReportCase[] = [];
    cases_properties = [];
    systemunits: Systemunit[];
    selected_unit: number;
    columns: Column[];
    notready: Boolean = true;
    private _errorMessage: string;

    constructor (
        private _route: ActivatedRoute,
        private _reportCaseService: ReportCaseService,
        private _systemunitService: SystemunitService
    ) {}

    ngOnInit() {
        this._params = this._route.queryParams
            .subscribe(params => {
                if (params['units']) {
                    const urlSearchParams = {report: 'casesbyunit', cbrs_unit: params['units']}
                    this.selected_unit = Number(params['units']);
                    this._getReportCases(urlSearchParams);
                    this._getSystemunits();
                    this._getColumns();
                } else {
                    this._getReportCases();
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

    prevPage(unit?: number) {
        if (this._prevPage == null) {
            APP_UTILITIES.showToast('This is the first page.');
        } else {
            this.notready = true;
            let prevPageNum;
            let ndxStart = this._prevPage.indexOf('page=');
            if (ndxStart === -1) {
                const urlSearchParams = (unit.toString() === '') ? null : {report: 'casesbyunit', cbrs_unit: unit.toString()};
                this._getReportCases(urlSearchParams);
            } else {
                ndxStart += 5;
                const ndxEnd = this._prevPage.indexOf('&', ndxStart);
                ndxEnd === -1 ? prevPageNum = this._prevPage.slice(ndxStart) : prevPageNum = this._prevPage.slice(ndxStart, ndxEnd);
                const urlSearchParams = (unit.toString() === '') ? {page: prevPageNum, report: 'casesbyunit'} : {page: prevPageNum,
                    report: 'casesbyunit'};
                this._getReportCases(urlSearchParams);
            }
        }
    }

    nextPage(unit?: number) {
        if (this._nextPage == null) {
            APP_UTILITIES.showToast('This is the last page.');
        } else {
            this.notready = true;
            let nextPageNum;
            const ndxStart = this._nextPage.indexOf('page=') + 5;
            const ndxEnd = this._nextPage.indexOf('&', ndxStart);
            ndxEnd === -1 ? nextPageNum = this._nextPage.slice(ndxStart) : nextPageNum = this._nextPage.slice(ndxStart, ndxEnd);
            const urlSearchParams = (unit.toString() === '') ?
                {page: nextPageNum, report: 'casesbyunit'} : {page: nextPageNum, report: 'casesbyunit', cbrs_unit: unit.toString()};
            this._getReportCases(urlSearchParams);
        }
    }

    onFilter(unit: number) {
        this.notready = true;
        this.selected_unit = unit;
        const urlSearchParams = (unit.toString() === '') ? null : {report: 'casesbyunit', cbrs_unit: unit.toString()};
        this._getReportCases(urlSearchParams);
    }

    clearFilter() {
        this.notready = true;
        this.selected_unit = null;
        this._getReportCases();
    }

    exportToCSV(unit?: number) {
        this.notready = true;
        const urlSearchParams = (unit.toString() === '') ?
            'report=casesbyunit&format=csv&page_size=' + this.page_size :
            'report=casesbyunit&format=csv&page_size=' + this.page_size + '&cbrs_unit=' + unit.toString();
        this._getReportCasesCSV(urlSearchParams);
    }

    private _getReportCasesCSV(urlSearchParams?) {
        this._reportCaseService.getReportCasesCSV(urlSearchParams)
            .then(function(data) {
                const blob = new Blob([data[0]], { type: 'text/csv' });
                FileSaver.saveAs(blob, data[1]);
            });
    }

    private _getReportCases(newUrlSearchParams?) {
        const urlSearchParams = newUrlSearchParams ? newUrlSearchParams : {report: 'casesbyunit'};
        this._reportCaseService.getReportCases(urlSearchParams)
            .subscribe(
                (reportcases: any) => {
                    console.log(reportcases);
                    if (Number(reportcases.count) > 0) {
                        APP_UTILITIES.showToast(reportcases.count + ' case(s) found.');
                        const max_records = Math.ceil(Number(reportcases.count) / 100) * 100;
                        this.page_size < 100 ? this.page_size = 100 : this.page_size = max_records;
                        this._prevPage = reportcases.previous;
                        this._nextPage = reportcases.next;
                        this._reportcases.length = 0;
                        this._reportcases = reportcases.results;
                        this.cases_properties.length = 0;
                        for (let i = 0, j = this._reportcases.length; i < j; i++) {
                            const case_property: any = this._reportcases[i];
                            const address = case_property.property_string.split(',');
                            case_property.street_address = address[0];
                            delete case_property['property_string'];
                            this.cases_properties.push(case_property);
                            // if (this._reportcases.length == this.cases_properties.length - 1) {
                            //     this._sortAndShow();
                            // }
                        }
                        setTimeout(() => {
                            this._sortAndShow();
                        }, 500);
                    } else {
                        this.cases_properties = [];
                        APP_UTILITIES.showToast('No cases found.');
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error
            );
    }

    private _getSystemunits() {
        this._systemunitService.getSystemunits()
            .subscribe(
                (systemunits: Systemunit[]) => {
                    this.systemunits = systemunits.sort(APP_UTILITIES.dynamicSort('system_unit_number'));
                },
                error => this._errorMessage = <any>error);
    }

    private _getColumns() {
        this.columns = [
            new Column('id', 'Case ID'),
            // new Column('id', 'Case Reference'),
            new Column('status', 'Status'),
            new Column('prohibition_date', 'Prohibition Date'),
            new Column('cbrs_unit_string', 'CBRS Unit'),
            new Column('request_date', 'Request Date'),
            new Column('final_letter_date', 'Final Letter Date'),
            new Column('determination_string', 'Determination'),
            new Column('street_address', 'Street Address'),
        ];
    }

    private _sortAndShow() {
        this.cases_properties.sort(APP_UTILITIES.dynamicSort('id'));
        this.notready = false;
    }

    printCases() {
        window.print();
    }
}
