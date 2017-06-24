import {Component} from '@angular/core';
import {Grid} from '../grid/grid';
import {Router} from '@angular/router';

@Component({
    selector: 'prohibitiondate-grid',
    inputs: ['rows: rows', 'columns: columns'],
    templateUrl: 'mapdata-grid.component.html',
    styles: ['.gridHeader {cursor:pointer;}']

})
export class ProhibitiondateGridComponent extends Grid {
    constructor(private _router: Router) {
        super();
    }

    onClick(row: any) {
        // open editor somehow
        alert('clicked prohibitiondate row ' + row);
    }
}
