import {Component, EventEmitter, Output} from '@angular/core';
import {Grid} from '../grid/grid';
import {Router} from '@angular/router';

@Component({
    selector: 'systemunit-grid',
    inputs: ['rows: rows', 'columns: columns'],
    templateUrl: 'mapdata-grid.component.html',
    styles: ['.gridHeader {cursor:pointer;}']

})
export class SystemunitGridComponent extends Grid {
    @Output() edit: EventEmitter<boolean>;
    constructor(private _router: Router) {
        super();
        this.edit = new EventEmitter();
    }

    onClick(row: any) {
        this.edit.emit(row);
    }
}
