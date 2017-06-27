import {Component} from '@angular/core';
import {Grid} from '../grid/grid';
import {Router} from '@angular/router';

@Component({
    selector: 'systemmap-grid',
    inputs: ['rows: rows', 'columns: columns', 'displayLookup: displayLookup'],
    templateUrl: 'mapdata-grid.component.html',
    styles: ['.gridHeader {cursor:pointer;}']

})
export class SystemmapGridComponent extends Grid {
    displayLookup: Array<any>;
    constructor(private _router: Router) {
        super();
    }

    onClick(row: any) {
        // open editor somehow
        alert('clicked systemmap row ' + row);
    }
}
