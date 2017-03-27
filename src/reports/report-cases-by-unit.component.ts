import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {URLSearchParams} from '@angular/http';
import {ReportCase}              from './report-case';
import {ReportCaseService}       from './report-case.service';
import {Systemunit}        from '../systemunits/systemunit';
import {SystemunitService} from '../systemunits/systemunit.service';
import {ReportGridComponent} from './report-grid.component';
import {Column}            from '../grid/column';
import {APP_UTILITIES} from '../app.utilities';
import * as FileSaver from 'file-saver';

@Component({
    templateUrl: 'report-cases-by-unit.component.html',
    providers: [ReportCaseService, SystemunitService]
})

export class ReportCasesByUnitComponent implements OnInit, OnDestroy {

    private _params: any;
    page_size: number = 100;
    private _prevPage: string;
    private _nextPage: string;
    private _reportcases: ReportCase[];
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
                    let urlSearchParams = 'report=casesbyunit&cbrs_unit=' + params['units'];
                    this.selected_unit = Number(params['units']);
                    this._getReportCases(urlSearchParams);
                    this._getSystemunits();
                    this._getColumns();
                    //delete params['units'];
                }
                else {
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

    // Show toast
    // Set innerHTML of toast element before showing
    // toast.innerHTML = dateControlLabels[thisDateControlIndex] + " can not be earlier than " + dateControlLabels[thisDateControlIndex-1] + "!";
    private _showToast(message: string, timeout?: number) {
        let toast = <HTMLElement> document.querySelector("#cbra_toast");
        toast.className = "cbraToast toastVisible";
        toast.innerHTML = message;
        setTimeout(function(){
            toast.className = "cbraToast";
        }, (timeout ? timeout : 5000));
    }

    prevPage(unit?: number) {
        if (this._prevPage == null) {
            this._showToast("This is the first page.");
        }
        else {
            this.notready = true;
            let prevPageNum;
            let ndxStart = this._prevPage.indexOf("page=");
            if (ndxStart == -1) {
                let urlSearchParams = (unit.toString() == '') ? null : 'report=casesbyunit&cbrs_unit=' + unit.toString();
                this._getReportCases(urlSearchParams);
            }
            else {
                ndxStart += 5;
                let ndxEnd = this._prevPage.indexOf("&", ndxStart);
                ndxEnd == -1 ? prevPageNum = this._prevPage.slice(ndxStart) : prevPageNum = this._prevPage.slice(ndxStart, ndxEnd);
                let urlSearchParams = (unit.toString() == '') ? 'page='  + prevPageNum + '&report=casesbyunit&format=csv&page_size=' + this.page_size : 'page='  + prevPageNum + '&report=casesbyunit&format=csv&page_size=' + this.page_size + '&cbrs_unit=' + unit.toString();
                this._getReportCases(urlSearchParams);
            }
        }
    }

    nextPage(unit?: number) {
        if (this._nextPage == null) {
            this._showToast("This is the last page.");
        }
        else {
            this.notready = true;
            let nextPageNum;
            let ndxStart = this._nextPage.indexOf("page=") + 5;
            let ndxEnd = this._nextPage.indexOf("&", ndxStart);
            ndxEnd == -1 ? nextPageNum = this._nextPage.slice(ndxStart) : nextPageNum = this._nextPage.slice(ndxStart, ndxEnd);
            let urlSearchParams = (unit.toString() == '') ? 'page='  + nextPageNum + '&report=casesbyunit&format=csv&page_size=' + this.page_size : 'page='  + nextPageNum + '&report=casesbyunit&format=csv&page_size=' + this.page_size + '&cbrs_unit=' + unit.toString();
            this._getReportCases(urlSearchParams);
        }
    }

    onFilter(unit: number) {
        this.notready = true;
        this.selected_unit = unit;
        let urlSearchParams = (unit.toString() == '') ? null : 'report=casesbyunit&cbrs_unit=' + unit.toString();
        this._getReportCases(urlSearchParams);
    }

    clearFilter() {
        this.notready = true;
        this.selected_unit = null;
        this._getReportCases();
    }

    // exportToCSV() {
    //     let headers = [];
    //     this.columns.forEach(function(item){headers.push(item.descr);});
    //     let filename = '';
    //     if (this.selected_unit) {
    //         let id = this.selected_unit;
    //         let unit = this.systemunits.filter(function( obj ) {return obj.id == id;});
    //         filename = 'Report_CasesByUnit_' + unit[0].system_unit_number + '_' + APP_UTILITIES.TODAY + '.csv';
    //     }
    //     else {
    //         filename = 'Report_CasesByUnit_' + APP_UTILITIES.TODAY + '.csv';
    //     }
    //     APP_UTILITIES.downloadCSV({filename: filename, data: this.cases_properties, headers: headers});
    // }

    exportToCSV(unit?: number) {
        this.notready = true;
        let urlSearchParams = (unit.toString() == '') ? 'report=casesbyunit&format=csv&page_size=' + this.page_size : 'report=casesbyunit&format=csv&page_size=' + this.page_size + '&cbrs_unit=' + unit.toString();
        this._getReportCasesCSV(urlSearchParams);
    }

    private _getReportCasesCSV(urlSearchParams?) {
        this._reportCaseService.getReportCasesCSV(urlSearchParams)
            .then(function(data) {
                //let saveAs:any;
                let blob = new Blob([data[0]],{ type: "text/csv" });
                FileSaver.saveAs(blob, data[1]);
            });
    }

    private _getReportCases(newUrlSearchParams?) {
        let urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'report=casesbyunit';
        this._reportCaseService.getReportCases(new URLSearchParams(urlSearchParams))
            .subscribe(
                reportcases => {
                    if (Number(reportcases.count) > 0) {
                        this._showToast(reportcases.count + " cases found.");
                        this.page_size = Math.ceil(Number(reportcases.count)/100) * 100;
                        this.page_size < 100 ? this.page_size = 100 : this.page_size;
                        this._prevPage = reportcases.previous;
                        this._nextPage = reportcases.next;
                        this._reportcases = reportcases.results;
                        for (let i = 0, j = this._reportcases.length; i < j; i++) {
                            let case_property: any = this._reportcases[i];
                            let address = case_property.property_string.split(',');
                            //address[1] === "" ? case_property.street_address = address[0] : case_property.street_address = address[1] + ", " + address[0];
                            case_property.street_address = address[0];
                            delete case_property['property_string'];
                            this.cases_properties.push(case_property);
                            // if (this._reportcases.length == this.cases_properties.length - 1) {
                            //     this._sortAndShow();
                            // }
                        }
                        setTimeout(()=> {
                            this._sortAndShow();
                        }, 500);
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
                    this.systemunits = systemunits.sort(APP_UTILITIES.dynamicSort('system_unit_number'));
                },
                error => this._errorMessage = <any>error);
    }

    private _getColumns() {
        this.columns = [
            new Column('id', 'Case ID'),
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

}
