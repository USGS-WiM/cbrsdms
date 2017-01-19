import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {URLSearchParams} from '@angular/http';
import {ReportCase}              from './report-case';
import {ReportCaseService}       from './report-case.service';
import {ReportGridComponent} from './report-grid.component';
import {Column}            from '../grid/column';
import {APP_UTILITIES} from '../app.utilities';

@Component({
    templateUrl: 'report-detail.component.html',
    providers: [ReportCaseService]
})

export class ReportDaysToResolution implements OnInit {

    private _params: any;
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

    exportToCSV() {
        let headers = [];
        this.columns.forEach(function(item){headers.push(item.descr);});
        let filename = 'Report_DaysToResolution_' + APP_UTILITIES.TODAY + '.csv';
        APP_UTILITIES.downloadCSV({filename: filename, data: this.reportcases, headers: headers});
    }

    private _getReportCases(newUrlSearchParams?) {
        let urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'report=daystoresolution';
        this._reportCaseService.getReportCases(new URLSearchParams(urlSearchParams))
            .subscribe(
                reportcases => {
                    this.reportcases = reportcases;
                    this._sortAndShow();
                },
                error => this._errorMessage = <any>error
            );
    }

    private _getColumns() {
        this.columns = [
            new Column('id', 'Case Number'),
            new Column('case_reference', 'Case Reference'),
            new Column('request_date','Request Date'),
            new Column('close_date','Close Date'),
            new Column('close_days','Days to Close'),
        ];
    }

    private _sortAndShow() {
        this.reportcases.sort(APP_UTILITIES.dynamicSort('-close_days'));
        this.notready = false;
    }

}
