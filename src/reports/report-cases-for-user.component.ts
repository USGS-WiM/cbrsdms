import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReportCase} from './report-case';
import {ReportCaseService} from './report-case.service';
import {Column} from '../grid/column';
import {APP_UTILITIES} from '../app.utilities';
import * as FileSaver from 'file-saver';
import { UserService } from '../users/user.service';
import { User } from '../users/user';


@Component({
    templateUrl: 'report-cases-for-user.component.html'
})
export class ReportCasesForUserComponent implements OnInit, OnDestroy {

    private _params: any;
    page_size = 100;
    private _prevPage: string;
    private _nextPage: string;
    private _reportcases: ReportCase[] = [];
    cases_properties = [];
    users: User[];
    selected_user: string;
    columns: Column[];
    notready: Boolean = true;
    private _errorMessage: string;

    constructor (
        private _route: ActivatedRoute,
        private _reportCaseService: ReportCaseService,
        private _userService: UserService
    ) {}

    ngOnInit() {
        this._params = this._route.queryParams
            .subscribe(params => {
                 if (params['user']) {
                    const urlSearchParams = {report: 'allcasesforuser', user: params['user']}
                    this.selected_user = params['user'];
                    this._getReportCases(urlSearchParams);
                    this._getUsers();
                    this._getColumns();
                } else {
                    this._getReportCases();
                    this._getUsers();
                    this._getColumns();
                }
            });
    }

    ngOnDestroy() {
        if (this._params) {
            this._params.unsubscribe();
        }
    }

    prevPage(user?: number) {
        if (this._prevPage == null) {
            APP_UTILITIES.showToast('Info', 'This is the first page.');
        } else {
            this.notready = true;
            let prevPageNum;
            let ndxStart = this._prevPage.indexOf('page=');
            if (ndxStart === -1) {
                const urlSearchParams = (user.toString() === '') ? null : {report: 'allcasesforuser', user: user.toString()};
                this._getReportCases(urlSearchParams);
            } else {
                ndxStart += 5;
                const ndxEnd = this._prevPage.indexOf('&', ndxStart);
                ndxEnd === -1 ? prevPageNum = this._prevPage.slice(ndxStart) : prevPageNum = this._prevPage.slice(ndxStart, ndxEnd);
                const urlSearchParams = (user.toString() === '') ? {page: prevPageNum, report: 'allcasesforuser'} : {page: prevPageNum,
                    report: 'allcasesforuser'};
                this._getReportCases(urlSearchParams);
            }
        }
    }

    nextPage(user?: number) {
        if (this._nextPage == null) {
            APP_UTILITIES.showToast('Info', 'This is the last page.');
        } else {
            this.notready = true;
            let nextPageNum;
            const ndxStart = this._nextPage.indexOf('page=') + 5;
            const ndxEnd = this._nextPage.indexOf('&', ndxStart);
            ndxEnd === -1 ? nextPageNum = this._nextPage.slice(ndxStart) : nextPageNum = this._nextPage.slice(ndxStart, ndxEnd);
            const urlSearchParams = (user.toString() === '') ?
                {page: nextPageNum, report: 'allcasesforuser'} : {page: nextPageNum, report: 'allcasesforuser', user: user.toString()};
            this._getReportCases(urlSearchParams);
        }
    }

    onFilter(user: string) {
        this.notready = true;
        this.selected_user = user;
        const urlSearchParams = (user.toString() === '') ? null : {report: 'allcasesforuser', user: user.toString()};
        this._getReportCases(urlSearchParams);
    }

    clearFilter() {
        this.notready = true;
        this.selected_user = '';
        this._getReportCases();
    }

    exportToCSV(user?: number) {
        this.notready = true;
        const urlSearchParams = (user.toString() === '') ?
            'report=allcasesforuser&format=csv&page_size=' + this.page_size :
            'report=allcasesforuser&format=csv&page_size=' + this.page_size + '&user=' + user.toString();
        this._getReportCasesCSV(urlSearchParams);
    }

    private _getReportCasesCSV(urlSearchParams?) {
        const self = this;
        this._reportCaseService.getReportCasesCSV(urlSearchParams)
            .then(function(data) {
                const blob = new Blob([data[0]], { type: 'text/csv' });
                FileSaver.saveAs(blob, data[1]);
                self.notready = false;
            });
    }

    private _getReportCases(newUrlSearchParams?) {
        const urlSearchParams = newUrlSearchParams ? newUrlSearchParams : {report: 'allcasesforuser'};
        this._reportCaseService.getReportCases(urlSearchParams)
            .subscribe(
                (reportcases: any) => {
                    console.log(reportcases);
                    if (Number(reportcases.count) > 0) {
                        APP_UTILITIES.showToast('Info', reportcases.count + ' case(s) found.');
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
                        APP_UTILITIES.showToast('Info', 'No cases found.');
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error
            );
    }

    _getUsers(urlSearchParams?) {
        this._userService.getUsers(urlSearchParams)
            .subscribe(res => {
                this.users = res.sort(APP_UTILITIES.dynamicSort('username'));
                this.notready = false;
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
            new Column('analyst_string', 'Analyst'),
            new Column('qc_reviewer_string', 'QC Reviewer'),
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
