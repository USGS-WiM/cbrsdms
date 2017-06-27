import {Component, OnInit} from '@angular/core';
import {URLSearchParams} from '@angular/http';
import {Systemmap} from '../systemmaps/systemmap';
import {SystemmapService} from '../systemmaps/systemmap.service';
import {Systemunit} from '../systemunits/systemunit';
import {SystemunitService} from '../systemunits/systemunit.service';
import {Prohibitiondate} from '../prohibitiondates/prohibitiondate';
import {ProhibitiondateService} from '../prohibitiondates/prohibitiondate.service';
import {Column} from '../grid/column';
import {APP_UTILITIES} from '../app.utilities';
import {FormBuilder} from '@angular/forms';


@Component({
    templateUrl: 'mapdata-list.component.html',
    providers: [FormBuilder]
})
export class MapdataListComponent implements OnInit {

    systemmaps: Systemmap[];
    systemunits: Systemunit[];
    prohibitiondates: Prohibitiondate[];
    systemmapColumns: Column[];
    systemunitColumns: Column[];
    prohibitiondateColumns: Column[];
    notready = true;
    noSystemmapsFound = false;
    noSystemunitsFound = false;
    noProhibitiondatesFound = false;
    private _errorMessage: string;

    constructor (private _systemmapService: SystemmapService,
                 private _systemunitService: SystemunitService,
                 private _prohibitiondateService: ProhibitiondateService) {}

    ngOnInit() {
        this._getSystemmaps();
        this._getSystemunits();
        this._getProhibitiondates();
        this._getColumns();
    }

    private _getSystemmaps(urlSearchParams?) {
        this._systemmapService.getSystemmaps(new URLSearchParams(urlSearchParams))
            .subscribe(
                res => {
                    this.systemmaps = res;
                    if (this.systemmaps.length > 0) {
                        this.noSystemmapsFound = false;
                        this.notready = false;
                    } else {
                        this.noSystemmapsFound = true;
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error
            );
    }

    private _getSystemunits(urlSearchParams?) {
        this._systemunitService.getSystemunits(new URLSearchParams(urlSearchParams))
            .subscribe(
                res => {
                    this.systemunits = res;
                    if (this.systemunits.length > 0) {
                        this.noSystemunitsFound = false;
                        this.notready = false;
                    } else {
                        this.noSystemunitsFound = true;
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error
            );
    }

    private _getProhibitiondates(urlSearchParams?) {
        this._prohibitiondateService.getProhibitiondates(new URLSearchParams(urlSearchParams))
            .subscribe(
                res => {
                    this.prohibitiondates = res;
                    if (this.prohibitiondates.length > 0) {
                        this.noProhibitiondatesFound = false;
                        this.notready = false;
                    } else {
                        this.noProhibitiondatesFound = true;
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error
            );
    }

    private _getColumns() {
        this.systemmapColumns = [
            new Column('map_number', 'Map Number'),
            new Column('map_title', 'Map Title'),
            new Column('map_date', 'Map Date'),
            new Column('system_units', 'Unit ID'),
            new Column('current', 'Current'),
        ];
        this.systemunitColumns = [
            new Column('system_unit_number', 'Unit Number'),
            new Column('system_unit_name', 'Unit Name'),
            // new Column('field_office', 'Field Office'),
        ];
        this.prohibitiondateColumns = [
            new Column('system_unit', 'Unit ID'),
            new Column('prohibition_date', 'Prohibition Date'),
        ];
    }

    filterSystemmaps(val: string) {
        val ? this._getSystemmaps('freetext=' + val) : this._getSystemmaps();
    }

    filterSystemunits(val: string) {
        val ? this._getSystemunits('freetext=' + val) : this._getSystemunits();
    }

    filterProhibitionDates(val: string) {
        val ? this._getProhibitiondates('freetext=' + val) : this._getProhibitiondates();
    }

    private _sortAndShow() {
        this.systemmaps.sort(APP_UTILITIES.dynamicSortMultiple(['-map_number', 'map_date']));
        this.notready = false;
    }

}
