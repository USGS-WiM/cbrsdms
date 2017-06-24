import {Injectable} from '@angular/core';
import {WorkbenchFilter} from './workbench-filter';

@Injectable()
export class WorkbenchFilterService {
    private _myWorkbenchFilter: WorkbenchFilter;
    private _myWorkbenchFilterUrlSearchParams: string;

    constructor () {
        this._myWorkbenchFilter = new WorkbenchFilter();
        this._myWorkbenchFilterUrlSearchParams = '';
    }

    getFilter () {
        return this._myWorkbenchFilter;
    }

    getUrlSearchParams () {
        return this._myWorkbenchFilterUrlSearchParams;
    }

    setFilter (newWorkbenchFilterValues: Object) {
        for (let prop in newWorkbenchFilterValues) {
            this._myWorkbenchFilter[prop] = newWorkbenchFilterValues[prop];
            sessionStorage.setItem(prop, newWorkbenchFilterValues[prop]);
        }
    }

    setUrlSearchParams (newUrlSearchParams: string) {
        this._myWorkbenchFilterUrlSearchParams = newUrlSearchParams;
        sessionStorage.setItem('filterUrlSearchParams', newUrlSearchParams);
    }

    deleteFilter() {
        for (let prop in this._myWorkbenchFilter) {
            sessionStorage.removeItem(prop);
        }
    }

    deleteUrlSearchParams() {
        sessionStorage.removeItem('filterUrlSearchParams');
    }

}
