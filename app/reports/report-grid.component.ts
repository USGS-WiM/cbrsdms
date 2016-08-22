import {Component} from '@angular/core';
import {Grid}   from '../grid/grid';
import {Router} from '@angular/router';

@Component({
    selector: 'report-grid',
    inputs: ['rows: rows','columns: columns'],
    templateUrl: 'app/reports/report-grid.component.html',
    styles: ['.gridHeader {cursor:pointer;}']

})
export class ReportGridComponent extends Grid{
    constructor(private _router: Router){
        super();
    }

    onClick(row: any) {
        this._router.navigate( ['/workbench', row.id]  );
    }

}