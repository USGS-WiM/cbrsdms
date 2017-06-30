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

    private _mapFields;
    private _unitFields;
    private _dateFields;
    mapForm: FormGroup;
    unitForm: FormGroup;
    dateForm: FormGroup;
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

    private _updateControls(fields, controls, values): void {
        for (let i = 0, j = fields.length; i < j; i++) {
            const field = fields[i];
            controls[field].setValue(values[field]);
        }
    }

    constructor (private _systemmapService: SystemmapService,
                 private _systemunitService: SystemunitService,
                 private _prohibitiondateService: ProhibitiondateService,
                 private _modalService: ModalService) {

        // get the fields for each object type
        this._mapFields = Object.keys(this.mySystemmap);
        this._unitFields = Object.keys(this.mySystemunit);
        this._dateFields = Object.keys(this.myProhibitiondate);

        // make the controls for each control group
        this._mapControls = this._makeControls(this._mapFields);
        this._unitControls = this._makeControls(this._unitFields);
        this._dateControls = this._makeControls(this._dateFields);

        // populate the forms with the controls
        this.mapForm = new FormGroup(this._mapControls);
        this.unitForm = new FormGroup(this._unitControls);
        this.dateForm = new FormGroup(this._dateControls);

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

    openModal(modalID: string, row?: any) {
        if (row) {
            switch (modalID) {
                case 'modalMap':
                    this.row = <Systemmap>row;
                    this._updateControls(this._mapFields, this._mapControls, <Systemmap>row);
                    break;
                case 'modalUnit':
                    this.row = <Systemunit>row;
                    this._updateControls(this._mapFields, this._mapControls, <Systemunit>row);
                    break;
                case 'modalDate':
                    this.row = <Prohibitiondate>row;
                    this._updateControls(this._mapFields, this._mapControls, <Prohibitiondate>row);
                    break;
                default:
                    this.row = row;
            }
        }
        this._modalService.open(modalID);
    }

    closeModal(modalID: string) {
        this._modalService.close(modalID);
        this.row = undefined;
    }

    onSubmit(form: FormGroup, modalID: string) {
        // add code
        this.notready = true;
        if (form.dirty) {
            console.log(form.value);

            if (form.value.id) {
                switch (modalID) {
                    case 'modalMap':
                        this._systemmapService.updateSystemmap(form.value)
                            .subscribe(
                                result => {
                                    console.log(result);
                                    this._getSystemmaps();
                                    this.row = <Systemmap>result;
                                    this._updateControls(this._mapFields, this._mapControls, <Systemmap>result);
                                },
                                error => this._errorMessage = <any>error
                            );
                    break;
                case 'modalUnit':
                    this._systemunitService.updateSystemunit(form.value)
                            .subscribe(
                                result => {
                                    console.log(result);
                                    this._getSystemunits();
                                    this.row = <Systemunit>result;
                                    this._updateControls(this._unitFields, this._unitControls, <Systemunit>result);
                                },
                                error => this._errorMessage = <any>error
                            );
                    break;
                case 'modalDate':
                    this._prohibitiondateService.updateProhibitiondate(form.value)
                            .subscribe(
                                result => {
                                    console.log(result);
                                    this._getProhibitiondates();
                                    this.row = <Prohibitiondate>result;
                                    this._updateControls(this._dateFields, this._dateControls, <Prohibitiondate>result);
                                },
                                error => this._errorMessage = <any>error
                            );
                    break;
                default:
                    break;
                }
            } else {
                switch (modalID) {
                    case 'modalMap':
                        this._systemmapService.createSystemmap(form.value)
                            .subscribe(
                                result => {
                                    console.log(result);
                                    this._getSystemmaps();
                                    this.row = <Systemmap>result;
                                    this._updateControls(this._mapFields, this._mapControls, <Systemmap>result);
                                },
                                error => this._errorMessage = <any>error
                            );
                    break;
                case 'modalUnit':
                    this._systemunitService.createSystemunit(form.value)
                            .subscribe(
                                result => {
                                    console.log(result);
                                    this._getSystemunits();
                                    this.row = <Systemunit>result;
                                    this._updateControls(this._unitFields, this._unitControls, <Systemunit>result);
                                },
                                error => this._errorMessage = <any>error
                            );
                    break;
                case 'modalDate':
                    this._prohibitiondateService.createProhibitiondate(form.value)
                            .subscribe(
                                result => {
                                    console.log(result);
                                    this._getProhibitiondates();
                                    this.row = <Prohibitiondate>result;
                                    this._updateControls(this._dateFields, this._dateControls, <Prohibitiondate>result);
                                },
                                error => this._errorMessage = <any>error
                            );
                    break;
                default:
                    break;
                }
            }
        }
        this.closeModal(modalID);
        this.notready = false;
    }

    private _sortAndShow() {
        this.systemmaps.sort(APP_UTILITIES.dynamicSortMultiple(['-map_number', 'map_date']));
        this.notready = false;
    }

}
