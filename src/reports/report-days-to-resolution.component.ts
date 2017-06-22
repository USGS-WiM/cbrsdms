import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {URLSearchParams} from '@angular/http';
import {ReportCase}              from './report-case';
import {ReportCaseService}       from './report-case.service';
import {ReportGridComponent} from './report-grid.component';
import {Column}            from '../grid/column';
import {APP_UTILITIES} from '../app.utilities';
import * as FileSaver from 'file-saver';

@Component({
    templateUrl: 'report-detail.component.html',
    providers: [ReportCaseService]
})

export class ReportDaysToResolution implements OnInit {

    paginated = true;
    allow_filter = false;
    private _params: any;
    page_size: number = 100;
    private _prevPage: string;
    private _nextPage: string;
    reportcases: ReportCase[];
    columns: Column[];
    notready: Boolean = true;
    private _errorMessage: string;

    constructor (
        private _route: ActivatedRoute,
        private _reportCaseService: ReportCaseService,
    ) {}

    ngOnInit() {
        this._params = this._route.queryParams
            .subscribe(params => {
                this._getReportCases();
                this._getColumns();
            });
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

    prevPage() {
        if (this._prevPage == null) {
            this._showToast("This is the first page.");
        }
        else {
            this.notready = true;
            let prevPageNum;
            let ndxStart = this._prevPage.indexOf("page=");
            if (ndxStart == -1) {
                let urlSearchParams = 'report=daystoresolution';
                this._getReportCases(urlSearchParams);
            }
            else {
                ndxStart += 5;
                let ndxEnd = this._prevPage.indexOf("&", ndxStart);
                ndxEnd == -1 ? prevPageNum = this._prevPage.slice(ndxStart) : prevPageNum = this._prevPage.slice(ndxStart, ndxEnd);
                let urlSearchParams = 'page=' + prevPageNum + '&report=daystoresolution';
                this._getReportCases(urlSearchParams);
            }
        }
    }

    nextPage() {
        if (this._nextPage == null) {
            this._showToast("This is the last page.");
        }
        else {
            this.notready = true;
            let nextPageNum;
            let ndxStart = this._nextPage.indexOf("page=") + 5;
            let ndxEnd = this._nextPage.indexOf("&", ndxStart);
            ndxEnd == -1 ? nextPageNum = this._nextPage.slice(ndxStart) : nextPageNum = this._nextPage.slice(ndxStart, ndxEnd);
            let urlSearchParams = 'page='  + nextPageNum + '&report=daystoresolution';
            this._getReportCases(urlSearchParams);
        }
    }

    // exportToCSV() {
    //     //let headers = [];
    //     let data = [];
    //     //this.columns.forEach(function(item){headers.push(item.descr);});
    //     this.reportcases.forEach(item => {
    //         let newitem = {};
    //         newitem['id'] = item.id;
    //         newitem['case_reference'] = item.case_reference;
    //         newitem['request_date'] = item.request_date;
    //         newitem['close_date'] = item.close_date;
    //         newitem['close_days'] = item.close_days;
    //         data.push(newitem);
    //     });
    //     let filename = 'Report_DaysToResolution_' + APP_UTILITIES.TODAY + '.csv';
    //     APP_UTILITIES.downloadCSV({filename: filename, data: data, headers: this.columns});
    // }

    // exportToCSV() {
    //     this._getReportCases('report=daystoresolution&format=csv&page_size=' + this._page_size)
    // }

    exportToCSV(unit?: number) {
        let urlSearchParams = 'report=daystoresolution&format=csv&page_size=' + this.page_size;
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
        let urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'report=daystoresolution';
        this._reportCaseService.getReportCases(new URLSearchParams(urlSearchParams))
            .subscribe(
                reportcases => {
                    if (Number(reportcases.count) > 0) {
                        this._showToast(reportcases.count + " cases found.");
                        this.page_size = Math.ceil(Number(reportcases.count)/100) * 100;
                        this.page_size < 100 ? this.page_size = 100 : this.page_size;
                        this._prevPage = reportcases.previous;
                        this._nextPage = reportcases.next;
                        this.reportcases = reportcases.results;
                        this._sortAndShow();
                    }
                    else {
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error
            );
    }

    private _getColumns() {
        this.columns = [
            new Column('id', 'Case ID'),
            new Column('case_reference', 'Case Reference'),
            new Column('request_date',  'Request Date'),
            new Column('close_date','Close Date'),
            new Column('close_days', 'Days to Close'),
        ];
    }

    private _sortAndShow() {
        this.reportcases.sort(APP_UTILITIES.dynamicSort('-close_days'));
        this.notready = false;
    }

}
