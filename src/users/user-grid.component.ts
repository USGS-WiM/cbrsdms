import {Component, EventEmitter, Output} from '@angular/core';
import {Grid} from '../grid/grid';
import {Router} from '@angular/router';

@Component({
    selector: 'user-grid',
    inputs: ['rows: rows', 'columns: columns', 'displayLookup: displayLookup'],
    templateUrl: 'user-grid.component.html',
    styles: ['.gridHeader {cursor:pointer;}']

})
export class UserGridComponent extends Grid {
    @Output() edit: EventEmitter<boolean>;
    constructor(private _router: Router) {
        super();
        this.edit = new EventEmitter();
    }

    onClick(row: any) {
        this.edit.emit(row);
    }
}
