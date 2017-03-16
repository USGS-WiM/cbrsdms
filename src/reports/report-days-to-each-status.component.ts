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
        //let headers = [];
        let data = [];
        //this.columns.forEach(function(item){headers.push(item.descr);});
        this.reportcases.forEach(item => {
            let newitem = {};
            newitem['id'] = item.id;
            newitem['case_reference'] = item.case_reference;
            newitem['request_date'] = item.request_date;
            newitem['analyst_signoff_date'] = item.analyst_signoff_date;
            newitem['analyst_days'] = item.analyst_days;
            newitem['qc_reviewer_signoff_date'] = item.qc_reviewer_signoff_date;
            newitem['qc_reviewer_days'] = item.qc_reviewer_days;
            newitem['fws_reviewer_signoff_date'] = item.fws_reviewer_signoff_date;
            newitem['fws_reviewer_days'] = item.fws_reviewer_days;
            newitem['final_letter_date'] = item.final_letter_date;
            newitem['final_letter_days'] = item.final_letter_days;
            newitem['close_date'] = item.close_date;
            newitem['close_days'] = item.close_days;
            data.push(newitem);
        });
        let filename = 'Report_DaysToEachStatus_' + APP_UTILITIES.TODAY + '.csv';
        APP_UTILITIES.downloadCSV({filename: filename, data: data, headers: this.columns});
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
            new Column('analyst_days','Days to Level 1 QC'),
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
