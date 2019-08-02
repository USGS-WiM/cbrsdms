import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Systemunit} from '../systemunits/systemunit';
import {SystemunitService} from '../systemunits/systemunit.service';
import {APP_UTILITIES} from '../app.utilities';
import { UserService } from '../users/user.service';
import { User } from '../users/user';

@Component({
    templateUrl: 'report-list.component.html',
    providers: [SystemunitService]
})

export class ReportListComponent  {

    systemunits: Systemunit[];
    notready: Boolean = true;
    users: User[];
    count = 0;
    private _errorMessage: string;

    constructor(private _router: Router, private _systemunitService: SystemunitService, private _userService: UserService) {
        this._getSystemunits();
        this._getUsers();
    }

    private _getSystemunits() {
        this._systemunitService.getSystemunits()
            .subscribe(
                (systemunits: Systemunit[]) => {
                    this.systemunits = systemunits.sort(APP_UTILITIES.dynamicSort('system_unit_number'));
                    this.count ++;
                    if (this.count > 1) {this.notready = false; }
                },
                error => this._errorMessage = <any>error);
    }

    goToCasesByUnit(unit: any) {
        this._router.navigate( ['/reports/casesbyunit'], {queryParams: {'units': unit}} );
    }

    _getUsers() {
        this._userService.getUsers()
            .subscribe(res => {
                this.users = res.sort(APP_UTILITIES.dynamicSort('username'));
                this.count ++;
                if (this.count > 1) {this.notready = false; }
            },
            error => this._errorMessage = <any>error);
    }

    goToCasesForUser(user: any) {
        this._router.navigate( ['/reports/allcasesforuser'], {queryParams: {'user': user}} );
    }

}
