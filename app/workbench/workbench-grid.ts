import {Component} from 'angular2/core';
import {Grid}   from '../grid/grid';
import {Router} from 'angular2/router';

@Component({
    selector: 'grid',
    inputs: ['rows: rows','columns: columns'],
    templateUrl: 'app/workbench/workbench-list.component.html',
    styles: ['.gridHeader {cursor:pointer;}']

})
export class WorkbenchGrid extends Grid{
    constructor(private _router: Router){
        super();
    }
    
    onClick(row: any) {
        this._router.navigate( ['WorkbenchDetail', { id: row.id }]  );
    }
}