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

export class ReportDaysToEachStatus implements OnInit {

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
                this._getCases();
                this._getColumns();
            });
    }

    exportToCSV() {
        let headers = [];
        this.columns.forEach(function(item){headers.push(item.descr);});
        let filename = 'Report_DaysToEachStatus_' + APP_UTILITIES.TODAY + '.csv';
        APP_UTILITIES.downloadCSV({filename: filename, data: this.reportcases, headers: headers});
    }

    private _getCases(newUrlSearchParams?) {
        let urlSearchParams = newUrlSearchParams ? newUrlSearchParams : 'report=daystoeachstatus';
        this._reportCaseService.getReportCases(new URLSearchParams(urlSearchParams))
            .subscribe(
                cases => {
                    this.reportcases = cases;
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
            new Column('analyst_signoff_date','Awaiting Level 1 QC'),
            new Column('analyst_signoff_days','Days to Level 1 QC'),
            new Column('qc_reviewer_signoff_date','Awaiting Level 2 QC Date'),
            new Column('qc_reviewer_days','Days to Awaiting Level 2 QC'),
            new Column('fws_reviewer_signoff_date','Awaiting Final Letter Date'),
            new Column('fws_reviewer_days','Days to Awaiting Final Letter'),
            new Column('final_letter_date','Final Letter Date'),
            new Column('final_letter_days','Days to Final Letter'),
            new Column('close_date','Close Date'),
            new Column('close_days','Days to Close'),
        ];
    }

    private _sortAndShow() {
        this.reportcases.sort(APP_UTILITIES.dynamicSort('-close_days'));
        this.notready = false;
    }

}
