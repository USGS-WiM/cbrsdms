import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReportCaseCount}              from './report-case-count';
import {ReportCaseCountService}       from './report-case-count.service';
import {ReportGridComponent} from './report-grid.component';
import {Column}            from '../grid/column';
import {APP_UTILITIES} from '../app.utilities';

@Component({
    templateUrl: 'report-detail.component.html',
    providers: [ReportCaseCountService]
})

export class ReportCountCasesByStatus implements OnInit {

    paginated = false;
    allow_filter = false;
    private _params: any;
    reportcases: ReportCaseCount[];
    columns: Column[];
    notready: Boolean = true;
    private _errorMessage: string;

    constructor (
        private _route: ActivatedRoute,
        private _reportCaseCountService: ReportCaseCountService,
    ) {}

    ngOnInit() {
        this._params = this._route.queryParams
            .subscribe(params => {
                this._getCaseCounts();
                this._getColumns();
            });
    }

    exportToCSV() {
        //let headers = [];
        //this.columns.forEach(function(item){headers.push(item.descr});});
        let filename = 'Report_CountCasesByStatus_' + APP_UTILITIES.TODAY + '.csv';
        APP_UTILITIES.downloadCSV({filename: filename, data: this.reportcases, headers: this.columns});
    }

    private _getCaseCounts() {
        this._reportCaseCountService.getReportCaseCounts()
            .subscribe(
                reportcases => {
                    this.reportcases = reportcases;
                    this._show();
                },
                error => this._errorMessage = <any>error
            );
    }

    private _getColumns() {
        this.columns = [
            new Column('count_received', 'Count Received'),
            new Column('count_awaiting_level_1_qc', 'Count Awaiting Level 1 QC'),
            new Column('count_awaiting_level_2_qc','Count Awaiting Level 2 QC'),
            new Column('count_awaiting_final_letter','Count Awaiting Final Letter'),
            new Column('count_closed','Count Closed'),
            new Column('count_closed_no_final_letter','Count Closed with No Final Letter'),
        ];
    }


    private _show() {
        this.notready = false;
    }

}
