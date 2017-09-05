import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {URLSearchParams} from '@angular/http';
import {Systemmap} from '../systemmaps/systemmap';
import {SystemmapService} from '../systemmaps/systemmap.service';
import {Systemunitmap} from '../systemunitmaps/systemunitmap';
import {SystemunitmapService} from '../systemunitmaps/systemunitmap.service';
import {Systemunit} from '../systemunits/systemunit';
import {SystemunitService} from '../systemunits/systemunit.service';
import {Prohibitiondate} from '../prohibitiondates/prohibitiondate';
import {ProhibitiondateService} from '../prohibitiondates/prohibitiondate.service';
import {Column} from '../grid/column';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {APP_UTILITIES} from '../app.utilities';
import {APP_SETTINGS} from '../app.settings';
import {ModalService} from '../modal.service';
import {IMultiSelectOption, IMultiSelectSettings} from 'angular-2-dropdown-multiselect';
import {IMyOptions} from 'mydatepicker';


@Component({
    templateUrl: 'mapdata-list.component.html'
})
export class MapdataListComponent implements OnInit {

    row: any;
    systemunitoptions: IMultiSelectOption[] = [];
    systemunitsettings: IMultiSelectSettings = {
        enableSearch: true,
        checkedStyle: 'fontawesome',
        buttonClasses: 'btn btn-default btn-block',
        dynamicTitleMaxItems: 3,
        displayAllSelectedText: true
    };
    systemmaps: Systemmap[];
    systemunits: Systemunit[];
    prohibitiondates: Prohibitiondate[];
    systemmapColumns: Column[];
    systemunitColumns: Column[];
    prohibitiondateColumns: Column[];

    mySystemmap = new Systemmap();
    mySystemunit = new Systemunit();
    myProhibitiondate = new Prohibitiondate();

    private _requiredFields = ['map_number', ' map_date', 'system_unit_number', 'prohibition_date', 'system_unit'];
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
    noSystemmapsFound = true;
    noSystemunitsFound = true;
    noProhibitiondatesFound = true;
    private _errorMessage: string;
    private _today = new Date();

    myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        disableSince: {year: this._today.getFullYear(), month: this._today.getMonth() + 1, day: this._today.getDate() + 1}
    };

    private _makeControls(fields) {
        const controls = {};
        for (let i = 0, j = fields.length; i < j; i++) {
            // add a validator for required fields
            if (this._requiredFields.indexOf(fields) > -1) {
                controls[fields[i]] = new FormControl({value: '', disabled: false}, Validators.required);
            } else if (['system_units'].indexOf(fields[i]) > -1) {
                // special case for Multiselect field
                controls[fields[i]] = new FormControl({value: [], disabled: false});
            } else {
                controls[fields[i]] = new FormControl({value: '', disabled: false});
            }
        }
        return controls;
    }

    private _updateControls(fields, controls, values): void {
        for (let i = 0, j = fields.length; i < j; i++) {
            const field = fields[i];
            if (field.slice(-4) === 'date') {
                if (values[field] !== undefined && values[field] !== null) {
                    let thisDate = new Date(values[field]);
                    thisDate = new Date(thisDate.getTime() + Math.abs(thisDate.getTimezoneOffset() * 60000));
                    controls[field].setValue(
                        {date: {year: thisDate.getFullYear(), month: thisDate.getMonth() + 1, day: thisDate.getDate()}});
                } else {
                    controls[field].setValue('');
                }
            } else {
                controls[field].setValue(values[field]);
            }
        }
    }

    constructor (private _systemmapService: SystemmapService,
                 private _systemunitmapService: SystemunitmapService,
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

        // this.mapForm.controls['system_units'].valueChanges
        //     .subscribe((selectedOptions) => {
        //         console.log(selectedOptions);
        //     });
    }

    private _getSystemmaps(urlSearchParams?) {
        this._systemmapService.getSystemmaps(new URLSearchParams(urlSearchParams))
            .subscribe(
                (res: Systemmap[]) => {
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

    private _createSystemmap(map: Systemmap) {
        this.notready = true;
        const system_units = map.system_units;
        this._systemmapService.createSystemmap(map)
            .subscribe(
                result => {
                    if (system_units) {this._createSystemunitmap(result.id, system_units)}
                    this._getSystemmaps();
                    this.row = <Systemmap>result;
                    this._updateControls(this._mapFields, this._mapControls, <Systemmap>result);
                },
                error => APP_UTILITIES.showToast('ERROR: Could not create System Map' + ':\n'
                    + error['non_field_errors'][0], 10000)
            );
    }

    private _updateSystemmap(map: Systemmap) {
        this.notready = true;
        const system_units = map.system_units;
        this._systemmapService.updateSystemmap(map)
            .subscribe(
                result => {
                    if (system_units) {this._createSystemunitmap(result.id, system_units)}
                    this._getSystemmaps();
                    this.row = <Systemmap>result;
                    this._updateControls(this._mapFields, this._mapControls, <Systemmap>result);
                },
                error => APP_UTILITIES.showToast('ERROR: Could not update System Map' + ':\n'
                    + error['non_field_errors'][0], 10000)
            );
    }

    private _createSystemunitmap(mapID: number, unitIDs: number[]) {
        this.notready = true;
        for (const unitID of unitIDs) {
            this._systemunitmapService.getSystemunitmaps(
                new URLSearchParams('unit=' + unitID.toString() + '&map=' + mapID.toString()))
                .subscribe(
                    (res: Systemunitmap[]) => {
                        if (res.length === 0) {
                            this._systemunitmapService.createSystemunitmap(new Systemunitmap(unitID, mapID))
                                .subscribe(
                                    result => this.notready = false,
                                    error =>  this._errorMessage = <any>error
                                );
                        }
                    },
                    error => this._errorMessage = <any>error
                );
        }
    }

    private _getSystemunits(urlSearchParams?) {
        this._systemunitService.getSystemunits(new URLSearchParams(urlSearchParams))
            .subscribe(
                res => {
                    this.systemunits = res;
                    if (this.systemunits.length > 0) {
                        for (let i = 0, j = this.systemunits.length; i < j; i++) {
                            this.systemunitoptions.push(
                                {id: this.systemunits[i].id, name: this.systemunits[i].system_unit_number});
                        }
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

    private _createSystemunit(unit: Systemunit) {
        this.notready = true;
        this._systemunitService.createSystemunit(unit)
            .subscribe(
                result => {
                    this._getSystemunits();
                    this.row = <Systemunit>result;
                    this._updateControls(this._unitFields, this._unitControls, <Systemunit>result);
                },
                error => APP_UTILITIES.showToast('ERROR: Could not create System Unit' + ':\n'
                    + error['non_field_errors'][0], 10000)
            );
    }

    private _updateSystemunit(unit: Systemunit) {
        this.notready = true;
        this._systemunitService.updateSystemunit(unit)
            .subscribe(
                result => {
                    this._getSystemunits();
                    this.row = <Systemunit>result;
                    this._updateControls(this._unitFields, this._unitControls, <Systemunit>result);
                },
                error => APP_UTILITIES.showToast('ERROR: Could not update System Unit' + ':\n'
                    + error['non_field_errors'][0], 10000)
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

    private _createProhibitiondate(date: Prohibitiondate) {
        this.notready = true;
        this._prohibitiondateService.createProhibitiondate(date)
            .subscribe(
                result => {
                    this._getProhibitiondates();
                    this.row = <Prohibitiondate>result;
                    this._updateControls(this._dateFields, this._dateControls, <Prohibitiondate>result);
                },
                error => APP_UTILITIES.showToast('ERROR: Could not create Prohibition Date' + ':\n'
                    + error['non_field_errors'][0], 10000)
            );
    }

    private _updateProhibitiondate(date: Prohibitiondate) {
        this.notready = true;
        this._prohibitiondateService.updateProhibitiondate(date)
            .subscribe(
                result => {
                    this._getProhibitiondates();
                    this.row = <Prohibitiondate>result;
                    this._updateControls(this._dateFields, this._dateControls, <Prohibitiondate>result);
                },
                error => APP_UTILITIES.showToast('ERROR: Could not update Prohibition Date' + ':\n'
                    + error['non_field_errors'][0], 10000)
            );
    }

    deleteRow(modalID: string, recordID: number) {
        this.notready = true;
        if (confirm('Are you certain you want to delete this record?')) {
            switch (modalID) {
                case 'modalMap':
                    this._systemmapService.deleteSystemmap(recordID)
                        .subscribe(
                            res => {
                                this._getSystemmaps();
                            },
                            err => console.log(err)
                        );
                    this.closeModal(modalID);
                    break;
                case 'modalUnit':
                    this._systemunitService.deleteSystemunit(recordID)
                        .subscribe(
                            res => {
                                this._getSystemunits();
                            },
                            err => console.log(err)
                        );
                    this.closeModal(modalID);
                    break;
                case 'modalDate':
                    this._prohibitiondateService.deleteProhibitiondate(recordID)
                        .subscribe(
                            res => {
                                this._getProhibitiondates();
                            },
                            err => console.log(err)
                        );
                    this.closeModal(modalID);
                    break;
                default:
                    this.notready = false;
                    break;
            }
        }
    }

    private _getColumns() {
        this.systemmapColumns = [
            new Column('map_number', 'Map Number'),
            new Column('map_title', 'Map Title'),
            new Column('map_date', 'Map Date'),
            new Column('system_units', 'Unit ID'),
            new Column('effective', 'Effective'),
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

    filterGrid(filterID: string, filterValue: string) {
        const filterClass = filterID.slice(0, -7);
        switch (filterClass) {
            case 'systemmap':
                filterValue ? this._getSystemmaps('freetext=' + filterValue) : this._getSystemmaps();
                break;
            case 'systemunit':
                filterValue ? this._getSystemunits('freetext=' + filterValue) : this._getSystemunits();
                break;
            case 'prohibitiondate':
                filterValue ? this._getProhibitiondates('freetext=' + filterValue) : this._getProhibitiondates();
                break;
        }
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
                    this._updateControls(this._unitFields, this._unitControls, <Systemunit>row);
                    break;
                case 'modalDate':
                    this.row = <Prohibitiondate>row;
                    this._updateControls(this._dateFields, this._dateControls, <Prohibitiondate>row);
                    break;
                default:
                    this.row = row;
            }
        } else {
            this._clearModalControls();
        }
        this._modalService.open(modalID);
    }

    closeModal(modalID: string) {
        this._modalService.close(modalID);
        this._clearModalControls();
        this.row = undefined;
    }

    private _clearModalControls() {
        this._updateControls(this._mapFields, this._mapControls, new Systemmap());
        this._updateControls(this._unitFields, this._unitControls, new Systemunit());
        this._updateControls(this._dateFields, this._dateControls, new Prohibitiondate());
    }

    onSubmit(form: FormGroup, modalID: string) {
        this.notready = true;
        if (form.dirty) {
            switch (modalID) {
                case 'modalMap':
                    const map = form.value;
                    // validate that required fields have values
                    if (!map.map_number || !map.map_date) {
                        APP_UTILITIES.showToast('System Map NOT saved:\n'
                            + 'Map Number and Map Date must both have a value!');
                    } else {
                        let thisDate = map.map_date;
                        if (thisDate === '') { map.map_date = null; }
                        if (thisDate !== null) {
                            thisDate = ('0000' + thisDate.date.year).slice(-4)
                                + '-' + ('00' + thisDate.date.month).slice(-2)
                                + '-' + ('00' + thisDate.date.day).slice(-2);
                            map.map_date = thisDate;
                        }
                        if (map.id) {
                            this._updateSystemmap(map);
                        } else { this._createSystemmap(map); }
                    }
                    break;
                case 'modalUnit':
                    const unit = form.value;
                    // validate that required fields have values
                    if (!unit.system_unit_number) {
                        APP_UTILITIES.showToast('System Unit NOT saved:\nUnit Number must have a value!');
                    } else {
                        if (unit.id) {
                            this._updateSystemunit(unit);
                        } else { this._createSystemunit(unit); }
                    }
                    break;
                case 'modalDate':
                    const date = form.value;
                    // validate that required fields have values
                    if (!date.prohibition_date || !date.system_unit) {
                        APP_UTILITIES.showToast('Prohibition Date NOT saved:\n'
                            + 'Unit Number and Prohibition Date must both have a value!');
                    } else {
                        if (date.id) {
                            this._updateProhibitiondate(date);
                        } else { this._createProhibitiondate(date); }
                    }
                    break;
                default:
                    break;
            }
        }
        this.closeModal(modalID);
        this.notready = false;
    }

}
