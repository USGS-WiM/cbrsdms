import {Component, EventEmitter, Output} from '@angular/core';
import {Grid} from '../grid/grid';
import {Router} from '@angular/router';

@Component({
    selector: 'prohibitiondate-grid',
    inputs: ['rows: rows', 'columns: columns', 'displayLookup: displayLookup'],
    templateUrl: 'mapdata-grid.component.html',
    styles: ['.gridHeader {cursor:pointer;}']

})
export class ProhibitiondateGridComponent extends Grid {
    @Output() edit: EventEmitter<boolean>;
    displayLookup: Array<any>;
    constructor(private _router: Router) {
        super();
        this.edit = new EventEmitter();
    }

    onClick(row: any) {
        this.edit.emit(row);
    }
}
