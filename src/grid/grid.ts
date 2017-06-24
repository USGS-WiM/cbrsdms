import {Component} from '@angular/core';
import {Column} from './column';
import {Sorter} from './sorter';

@Component({
    selector: 'grid',
    inputs: ['rows: rows', 'columns: columns'],
    templateUrl: 'grid.html'
})
export class Grid {
    columns: Array<Column>;
    rows: Array<any>;
    sorter: Sorter;
    constructor() {
        this.sorter = new Sorter();
    }

    sort(key) {
        this.sorter.sort(key, this.rows);
    }
}
