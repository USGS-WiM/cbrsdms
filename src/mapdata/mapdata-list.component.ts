import {Component, OnInit} from '@angular/core';
import {URLSearchParams} from '@angular/http';
import {Systemmap} from '../systemmaps/systemmap';
import {SystemmapService} from '../systemmaps/systemmap.service';
import {Systemunit} from '../systemunits/systemunit';
import {SystemunitService} from '../systemunits/systemunit.service';
import {Prohibitiondate} from '../prohibitiondates/prohibitiondate';
import {ProhibitiondateService} from '../prohibitiondates/prohibitiondate.service';
import {Column} from '../grid/column';
import {FormGroup, FormControl} from '@angular/forms';
import {APP_UTILITIES} from '../app.utilities';
import {APP_SETTINGS} from '../app.settings';
import {ModalService} from '../modal.service';


@Component({
    templateUrl: 'mapdata-list.component.html'
})
export class MapdataListComponent implements OnInit {

    row: any;
    systemmaps: Systemmap[];
    systemunits: Systemunit[];
    prohibitiondates: Prohibitiondate[];
    systemmapColumns: Column[];
    systemunitColumns: Column[];
    prohibitiondateColumns: Column[];

    mySystemmap = new Systemmap();
    mySystemunit = new Systemunit();
    myProhibitiondate = new Prohibitiondate();

    private _myMap_fields;
    private _myUnit_fields;
    private _myDate_fields;
    addMapForm: FormGroup;
    addUnitForm: FormGroup;
    addDateForm: FormGroup;
    editMapForm: FormGroup;
    editUnitForm: FormGroup;
    editDateForm: FormGroup;
    private _mapControls;
    private _unitControls;
    private _dateControls;

    notready = true;
    noSystemmapsFound = false;
    noSystemunitsFound = false;
    noProhibitiondatesFound = false;
    private _errorMessage: string;

    private _makeControls(fields) {
        let controls = {};
        for (let i = 0, j = fields.length; i < j; i++) {
            controls[fields[i]] = new FormControl({value: '', disabled: false});
        }
        return controls;
    }

    constructor (private _systemmapService: SystemmapService,
                 private _systemunitService: SystemunitService,
                 private _prohibitiondateService: ProhibitiondateService,
                 private _modalService: ModalService) {

        // get the fields for each object type
        this._myMap_fields = Object.keys(this.mySystemmap);
        this._myUnit_fields = Object.keys(this.mySystemunit);
        this._myDate_fields = Object.keys(this.myProhibitiondate);

        // make the controls for each control group
        this._mapControls = this._makeControls(this._myMap_fields);
        this._unitControls = this._makeControls(this._myUnit_fields);
        this._dateControls = this._makeControls(this._myDate_fields);

        // populate the forms with the controls
        this.addMapForm = new FormGroup(this._mapControls);
        this.addUnitForm = new FormGroup(this._unitControls);
        this.addDateForm = new FormGroup(this._dateControls);
        this.editMapForm = new FormGroup(this._mapControls);
        this.editUnitForm = new FormGroup(this._unitControls);
        this.editDateForm = new FormGroup(this._dateControls);

    }

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

    openModal(modalId: string, row?: any) {
        this.row = row;
        this._modalService.open(modalId);
    }

    closeModal(id: string) {
        this.row = undefined;
        this._modalService.close(id);
    }

    addMap(data: any) {
        // add code
        console.log(data);
    }

    addUnit(data: any) {
        // add code
        console.log(data);
    }

    addDate(data: any) {
        // add code
        console.log(data);
    }

    private _sortAndShow() {
        this.systemmaps.sort(APP_UTILITIES.dynamicSortMultiple(['-map_number', 'map_date']));
        this.notready = false;
    }

}
