import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Systemunit}        from '../systemunits/systemunit';
import {SystemunitService} from '../systemunits/systemunit.service';

@Component({
    templateUrl: 'report-list.component.html',
    providers: [SystemunitService]
})

export class ReportListComponent  {

    systemunits: Systemunit[];
    notready: Boolean = true;
    private _errorMessage: string;

    constructor(private _router: Router, private _systemunitService: SystemunitService) {
        this._getSystemunits();
    }

    private _getSystemunits() {
        this._systemunitService.getSystemunits()
            .subscribe(
                systemunits => {
                    this.systemunits = systemunits;
                    this.notready = false;
                },
                error => this._errorMessage = <any>error);
    }

    goToCasesByUnit(unit: any) {
        this._router.navigate( ['/reports/casesbyunit'], {queryParams: {'units': unit}} );
    }

}
