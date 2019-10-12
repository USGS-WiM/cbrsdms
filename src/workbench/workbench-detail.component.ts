import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Case} from '../cases/case';
import {Property} from '../properties/property'
import {Requester} from '../requesters/requester';
import {Comment} from '../comments/comment';
import {Tag} from '../tags/tag';
import {Casetag} from '../casetags/casetag';
import {Systemmap} from '../systemmaps/systemmap';
import {Systemunit} from '../systemunits/systemunit';
import {Fieldoffice} from '../fieldoffices/fieldoffice';
import {User} from '../users/user';
import {Determination} from '../determinations/determination';
import {Prohibitiondate} from '../prohibitiondates/prohibitiondate';
import {CaseService} from '../cases/case.service';
import {CasefileService} from '../casefiles/casefile.service';
import {PropertyService} from '../properties/property.service';
import {RequesterService} from '../requesters/requester.service';
import {CommentService} from '../comments/comment.service';
import {TagService} from '../tags/tag.service';
import {CasetagService} from '../casetags/casetag.service';
import {SystemunitService} from '../systemunits/systemunit.service';
import {SystemmapService} from '../systemmaps/systemmap.service';
import {FieldofficeService} from '../fieldoffices/fieldoffice.service';
import {UserService} from '../users/user.service';
import {DeterminationService} from '../determinations/determination.service';
import {ProhibitiondateService} from '../prohibitiondates/prohibitiondate.service';
import {AuthenticationService} from '../authentication/authentication.service';
import {FormBuilder, Validators, FormGroup, FormControl, FormArray} from '@angular/forms';
import {APP_SETTINGS} from '../app.settings';
import {APP_UTILITIES} from '../app.utilities';
import {IMyOptions} from 'mydatepicker';
import * as FileSaver from 'file-saver';


@Component({
    templateUrl: 'workbench-detail.component.html',
    styles: ['.error {color:red;}']
})
export class WorkbenchDetailComponent implements OnInit, AfterViewInit {
    case_ID: number;
    private _filesToUpload: File[] = [];
    filesToUploadDetails: Object[] = [];
    private _finalletterToUpload: File;
    finalletterToUploadDetails: Object;
    caseFileClass = 'col-md-4';
    inInit = true;
    mapsfound = true;
    active = true;
    notready= true;
    noxhr = true;
    isOnHold = false;
    sendFinalMailReady = false;
    sendFinalMailComplete = false;
    isreadonly_prohibitiondate = false;
    commentUnique = true;
    commentOwner = true;
    editingComment = false;
    editCommentID: number;
    private _isNewCase = false;
    private _errorMessage: string;
	private _today = new Date();
	
	username = sessionStorage.getItem('username');


    private _userFields: string[] = ['analyst', 'qc_reviewer'];
    private _debug = false;

    private _newCase: Case;
    private _newProperty: Property;
    private _newRequester: Requester;
    myCase = new Case();
    myProperty = new Property();
    myRequester = new Requester();
    myComment = new Comment();
    myCasetag = new Casetag();
    myTag = new Tag();
    myComments: Comment[];
    myCasetags: Casetag[];
    myCaseIDs = [];
    myTags: Tag[];
    availableTags = [];
    mySystemunits: Systemunit[];
    mySystemmaps: Systemmap[];
    selectedMap: number;
    availableSystemmapdates = [];
    myFieldoffices: Fieldoffice[];
    myUsers: User[];
    availableAnalysts: User[] = [];
    availableQCReviewers: User[] = [];
    selectedAnalyst: number;
    selectedQCReviewer: number;
    myDeterminations: Determination[];
    myProhibitiondates: Prohibitiondate[];
    salutations: string[] = APP_SETTINGS.SALUTATIONS;
    states: string[] = APP_SETTINGS.US_STATES;
    myCasefiles = [];

    private _myCase_fields;
    private _myProperty_fields;
    private _myRequester_fields;

    form: FormGroup;
    private _caseControls;
    private _propertyControls;
    private _requesterControls;
    private _commentsControls: FormControl[] = [];
    private _casetagsControls: FormControl[] = [];
    casegroup: FormGroup;
    propertygroup: FormGroup;
    requestergroup: FormGroup;
    commentgroup: FormArray;
    taggroup: FormArray;

    myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        disableSince: {year: this._today.getFullYear(), month: this._today.getMonth() + 1, day: this._today.getDate() + 1}
    };

    private _makeControls(fields) {
        const controls = {};
        for (let i = 0, j = fields.length; i < j; i++) {
            // add a validator for zipcode fields
            if (fields[i] === 'zipcode') {
                controls[fields[i]] = new FormControl({value: '', disabled: false}, Validators.maxLength(5));
            }
            if (['legal_description'].indexOf(fields) > -1) {
                // add validator for property control required fields: street, city, state)
                // although we don't know the source of the submitted fields,
                // we can determine if they are from a property object by testing if a uniquely property field is present
                if (['street', 'city', 'state'].indexOf(fields[i]) > -1) {
                    controls[fields[i]] = new FormControl({value: '', disabled: false}, Validators.required);
                }
            } else if (['email'].indexOf(fields) > -1) {
                // add validator for requester control required fields: first_name, last_name, email
                // although we don't know the source of the submitted fields,
                // we can determine if they are from a requester object by testing if a uniquely requester field is present
                if (['first_name', 'last_name', 'email'].indexOf(fields[i]) > -1) {
                    controls[fields[i]] = new FormControl({value: '', disabled: false}, Validators.required);
                }
            } else {
                // otherwise don't impose any validators
                controls[fields[i]] = new FormControl({value: '', disabled: false});
            }
        }
        return controls;
    }

    private _updateControls(fields, controls, values): void {
        for (let i = 0, j = fields.length; i < j; i++) {
            const field = fields[i];
            if (field.slice(-4) === 'date' && values[field] !== null && field !== 'cbrs_map_date' && field !== 'prohibition_date') {
                let thisDate = new Date(values[field]);
                thisDate = new Date(thisDate.getTime() + Math.abs(thisDate.getTimezoneOffset() * 60000));
                controls[field].setValue({date: {year: thisDate.getFullYear(), month: thisDate.getMonth() + 1, day: thisDate.getDate()}});
            } else if (field === 'casefiles') {
                // do nothing with casefiles, these will be loaded separately
                continue;
            } else {
                controls[field].setValue(values[field]);
            }
        }
    }

    private _updateControl(field, fields, controls, values): void {
        const i = fields.indexOf(field);
        controls[fields[i]].setValue(values[fields[i]]);
    }

    // private _updateValues(fields, controls, values): void {
    //     for (let i = 0, j = fields.length; i < j; i++) {
    //         // console.log(fields[i] + ' : ' + values[fields[i]] + ' : ' + controls[fields[i]].value);
    //         // values[fields[i]] = controls[fields[i]].value;
    //     }
    // }

    private updateCaseControlValue(formControl, value) {
        this._caseControls[formControl].setValue(value);
        if (this._userFields.indexOf(formControl) > -1) { this._buildUserOptions(formControl, value); }
    }

    private updatePropertyControlValue(formControl, value) {
        this._propertyControls[formControl].setValue(value);
    }

    private updateRequesterControlValue(formControl, value) {
        this._requesterControls[formControl].setValue(value);
    }

    private _addCommentControl(value): void {
        this._commentsControls.push(new FormControl(value))
    }

    private _addCasetagControl(value): void {
        this._casetagsControls.push(new FormControl(value));
    }

    ngOnInit () {
        this.inInit = true;
    }

    ngAfterViewInit() {
        this.inInit = false;
    }

    constructor (fb: FormBuilder,
                 private _route: ActivatedRoute,
                 private _router: Router,
                 private _caseService: CaseService,
                 private _casefileService: CasefileService,
                 private _propertyService: PropertyService,
                 private _requesterService: RequesterService,
                 private _commentService: CommentService,
                 private _tagService: TagService,
                 private _casetagService: CasetagService,
                 private _systemunitService: SystemunitService,
                 private _systemmapService: SystemmapService,
                 private _fieldofficeService: FieldofficeService,
                 private _userService: UserService,
                 private _determinationService: DeterminationService,
                 private _prohibitiondateService: ProhibitiondateService,
                 private _authenticationService: AuthenticationService
    ) {

        if (this._debug) {
            console.log('0: ' + APP_UTILITIES.TIME + ': ' + this.myCase.map_number + ' : ' + this.selectedMap);
        }

        // append a temporary 'final_letter' field to a case object so that it can be a control in the form
        const case_with_final_letter: any = this.myCase;
        case_with_final_letter.final_letter = null;

        // get the fields for each object type
        this._myCase_fields = Object.keys(case_with_final_letter);
        this._myProperty_fields = Object.keys(this.myProperty);
        this._myRequester_fields = Object.keys(this.myRequester);

        // make the controls for each control group
        this._caseControls = this._makeControls(this._myCase_fields);
        this._propertyControls = this._makeControls(this._myProperty_fields);
        this._requesterControls = this._makeControls(this._myRequester_fields);

        // populate the control groups with the controls
        this.casegroup = new FormGroup(this._caseControls);
        this.propertygroup = new FormGroup(this._propertyControls);
        this.requestergroup = new FormGroup(this._requesterControls);
        this.commentgroup = new FormArray(this._commentsControls);
        this.taggroup = new FormArray(this._casetagsControls);

        // build the form
        this.form = fb.group({
            casegroup: this.casegroup,
            propertygroup: this.propertygroup,
            requestergroup: this.requestergroup,
            commentgroup: this.commentgroup,
            taggroup: this.taggroup
        });

        // get the Case ID from the route
        this._route.params.subscribe(params => this.case_ID = +params['id']);

        if (this.case_ID) {
            // if the Case ID exists, get the case details
            this._isNewCase = false;
            this._getCase(this.case_ID);
            this._getCasefiles(this.case_ID);
            this._getProperties(this.case_ID);
            this._getRequesters(this.case_ID);
            this._getComments(this.case_ID);
            this._getCasetags(this.case_ID);
        } else {
            // otherwise this is a new case, so get user values for the select inputs
            this._isNewCase = true;
            this._getUsers();
            this._getSystemunits();
        }
        // get values for the select inputs
        this._getCaseIDs();
        this._getFieldoffices();
        this._getDeterminations();

        // check if the browser supports XHR2, which allows file drag and drop
        const xhr = new XMLHttpRequest();
        if (xhr.upload) {
            this.noxhr = false;
        }

    }

    private _getCase(caseID: number) {
        this._caseService.getCase(caseID)
            .subscribe(
                (acase: Case) => {
                    this.myCase = acase;
                    if (this._debug) {
                        console.log('1: ' + APP_UTILITIES.TIME + ': ' + this.myCase.map_number + ' : ' + this.selectedMap);
                    }
                    this.selectedAnalyst = acase.analyst;
                    this.selectedQCReviewer = acase.qc_reviewer;
                    this.selectedMap = this.myCase.map_number;
                    this._updateControls(this._myCase_fields, this._caseControls, this.myCase);
                    this._getSystemunits();
                    this._getUsers();
                    this._sendFinalMailCheck(acase);
                },
                error => this._errorMessage = <any>error);
    }

    // show the send final email button if final date set and presence of final letter
    private _sendFinalMailCheck(acase: Case) {
        if (acase.final_letter_date) {
            for (const casefile of this.myCasefiles) {
                if (casefile.final_letter) {
                    this.sendFinalMailReady = true;
                }
            }
        }
    }

    private _getCasefiles(caseID: number) {
        this._casefileService.getCasefiles({case: caseID})
            .then(
                (casefiles: any) => {
                    this.myCasefiles = casefiles;
                    // this.updateControls(this.myCase_fields, this.caseControls, this.myCase);
                },
                error => this._errorMessage = <any>error);
    }

    private _getCaseIDs() {
        this._caseService.getCases({view: 'caseid'})
            .subscribe(
                (cases: Case[]) => {
                    this.myCaseIDs.length = 0;
                    for (let i = 0, j = cases.length; i < j; i++) {
                        this.myCaseIDs.push(cases[i]);
                    }
                    this.myCaseIDs.sort(APP_UTILITIES.dynamicSort('id'));
                },
                error => this._errorMessage = <any>error);
    }

    private _getProperties(caseID: number | string) {
        this._propertyService.getProperties({case: caseID})
            .subscribe(
                properties => {
                    this.myProperty = properties[0];
                    this._updateControls(this._myProperty_fields, this._propertyControls, this.myProperty);
                },
                error => this._errorMessage = <any>error);
    }

    private _getRequesters(caseID: number | string) {
        this._requesterService.getRequesters({case: caseID})
            .subscribe(
                requesters => {
                    this.myRequester = requesters[0];
                    this._updateControls(this._myRequester_fields, this._requesterControls, this.myRequester);
                },
                error => this._errorMessage = <any>error);
    }

    private _getComments(caseID: number | string) {
        this._commentService.getComments({case: caseID})
            .subscribe(
                (comments: Comment[]) => {
                    this.myComments = comments;
                    for (let i = 0, j = comments.length; i < j; i++) {
                        this._addCommentControl(comments[i].comment);
                    }
                },
                error => this._errorMessage = <any>error);
    }

    private _getCasetags(caseID: number | string) {
        this._casetagService.getCasetags({case: caseID})
            .subscribe(
                (casetags: Casetag[]) => {
                    this.myCasetags = casetags;
                    for (let i = 0, j = casetags.length; i < j; i++) {
                        this._addCasetagControl(casetags[i].tagname);
                    }
                    this._getTags();
                },
                error => this._errorMessage = <any>error);
    }

    private _getTags() {
        this._tagService.getTags()
            .subscribe(
                tags => {
                    this.myTags = tags;
                    this._buildTagOptions();
                },
                error => this._errorMessage = <any>error);
    }

    private _buildTagOptions() {
        this.availableTags.length = 0;
        const usedTagIDs = [];
        for (let i = 0, j = this.myCasetags.length; i < j; i++) {
            usedTagIDs.push(this.myCasetags[i].tag);
        }
        for (let i = 0, j = this.myTags.length; i < j; i++) {
            if (usedTagIDs.indexOf(this.myTags[i].id) < 0) {
                this.availableTags.push(this.myTags[i]);
            }
        }
    }

    private _getSystemunits() {
        this._systemunitService.getSystemunits()
            .subscribe(
                (systemunits: Systemunit[]) => {
                    this.mySystemunits = systemunits.sort(APP_UTILITIES.dynamicSort('system_unit_number'));
                    if (this._debug) {
                        console.log('2: ' + APP_UTILITIES.TIME + ': ' + this.myCase.map_number + ' : ' + this.selectedMap);
                    }
                    if (this.myCase.cbrs_unit) {
                        this.getSystemmaps(this.myCase.cbrs_unit);
                        this.getProhibitiondates(this.myCase.cbrs_unit);
                    } else {
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error);
    }

    public getSystemmaps(unitID: number | string) {
        this._systemmapService.getSystemmaps({unit: unitID})
            .subscribe(
                (systemmaps: Systemmap[]) => {
                    this.mySystemmaps = systemmaps.sort(APP_UTILITIES.dynamicSortMultiple(['-effective', 'map_number']));
                    if (this.mySystemmaps.length === 0) {
                        this.mapsfound = false;
                        this.notready = false;
                    } else {
                        this.mapsfound = true;
                        if (this._debug) {
                            console.log('3: ' + APP_UTILITIES.TIME + ': ' + this.myCase.map_number + ' : ' + this.selectedMap);
                        }
                        this._updateControl('map_number', this._myCase_fields, this._caseControls, this.mySystemmaps);
                        if (this._debug) {
                            console.log('4: ' + APP_UTILITIES.TIME + ': ' + this.myCase.map_number + ' : ' + this.selectedMap);
                        }
                        if (this.myCase.map_number) {
                            this.selectedMap = this.myCase.map_number;
                            this.updateCaseControlValue('map_number', this.myCase.map_number);
                            this.getSystemmapdate(this.myCase.map_number);
                        } else {
                            this.notready = false;
                        }
                    }
                },
                error => this._errorMessage = <any>error);
    }

    public getSystemmapdate(mapID) {
        if (!mapID) {
            this._caseControls['cbrs_map_date'].setValue('');
            this.notready = false;
        } else {
            const maps = this.mySystemmaps.filter(function (map) { return map.id === mapID; });
            // map_date comes in yyyy-mm-dd format
            const date_parts = maps[0].map_date.split('-');
            const mdy = date_parts[1] + '/' + date_parts[2] + '/' + date_parts[0];
            this._caseControls['cbrs_map_date'].setValue(mdy);
            if (this._debug) {
                console.log('5: ' + APP_UTILITIES.TIME + ': ' + this.myCase.map_number + ' : ' + this.selectedMap);
            }
            this.notready = false;
        }
    }

    public toggleReadOnlyProhibitionDate(determination) {
        (determination === 2 || determination === 4) ?
            this.isreadonly_prohibitiondate = true : this.isreadonly_prohibitiondate = false;
    }

    public toggleOnHold() {
        this.isOnHold = !this.isOnHold;
    }

    public validateDate(thisDateControl, thisDate) {
        const thisDateMDY = ('00' + thisDate.month).slice(-2)
            + '/' + ('00' + thisDate.day).slice(-2)
            + '/' + ('0000' + thisDate.year).slice(-4);
        if (this.inInit) {
            return false;
        }
        if (this.notready) {
            return false;
        }
        if (typeof thisDate === 'undefined' || thisDate === null || thisDate === '') {
            return false;
        }
        if (typeof thisDate === 'object' && thisDate.year === 0) {
            return false;
        } else {
            thisDate = ('0000' + thisDate.year).slice(-4)
                + '-' + ('00' + thisDate.month).slice(-2)
                + '-' + ('00' + thisDate.day).slice(-2);
        }
        // ensure the date value is a valid date by converting it to a date object and testing the constituent date values
        let thisDateAsDate = new Date(thisDate);
        thisDateAsDate = new Date(thisDateAsDate.getTime() + Math.abs(thisDateAsDate.getTimezoneOffset() * 60000));
        if (thisDateAsDate.getFullYear() < 1000  || thisDateAsDate.getFullYear() > 9999 || thisDateAsDate.getMonth() < 0
            || thisDateAsDate.getMonth() > 11 || thisDateAsDate.getDate() < 1 || thisDateAsDate.getDate() > 31) {
            APP_UTILITIES.showToast('Error', thisDateMDY
                + ' (' + thisDateAsDate.toISOString().substr(0, 10) + ') is not a valid date. Please enter a valid date.');
            return false;
        }
        // establish two parallel arrays of the date controls and their labels
        const dateControls = ['request_date', 'fws_fo_received_date', 'fws_hq_received_date', 'analyst_signoff_date',
            'qc_reviewer_signoff_date', 'final_letter_date', 'close_date'];
        const dateControlLabels = ['Request Date', 'Field Office Received Date', 'Headquarters Received Date',
            'Analyst Signoff Date', 'QC Signoff Date', 'Final Letter Date', 'Close Date'];
        // determine the index of the current date control within the date control array
        const thisDateControlIndex = dateControls.indexOf(thisDateControl);
        // declare variables for potential use
        let prevDateControl, prevDate, nextDateControl, nextDate;
        // if this date control is the last or a middle date control in the array (i.e., not the first)
        if (thisDateControlIndex !== 0) {
            // determine the previous date control and its value
            // if the previous date has not been entered, the user should not be allowed to enter a value in the current date control,
            // except for Close Date (Final Letter Date can be null),
            // and Headquarters Received Date (Field Office Received Date seems to be null in a majority of cases)
            if (thisDateControl === 'close_date') {
                prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 1];
                prevDate = this._caseControls[prevDateControl].value;
                if (!prevDate) {
                    prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 2];
                    prevDate = this._caseControls[prevDateControl].value;
                    if (!prevDate) {
                        // warn the user of the invalid date selection
                        APP_UTILITIES.showToast('Error', dateControlLabels[thisDateControlIndex] + ' should not be entered until '
                            + dateControlLabels[thisDateControlIndex - 3] + ' has been entered!');
                        // clear the current date control value
                        // this.updateCaseControlValue(thisDateControl, null);
                        // short circuit this validation function and exit
                        return false;
                    }
                }
            } else if (thisDateControl === 'fws_hq_received_date') {
                prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 1];
                prevDate = this._caseControls[prevDateControl].value;
                if (!prevDate) {
                    prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 2];
                    prevDate = this._caseControls[prevDateControl].value;
                    if (!prevDate) {
                        // warn the user of the invalid date selection
                        APP_UTILITIES.showToast('Error', dateControlLabels[thisDateControlIndex] + ' should not be entered until '
                            + dateControlLabels[thisDateControlIndex - 2] + ' has been entered!');
                        // clear the current date control value
                        // this.updateCaseControlValue(thisDateControl, null);
                        // short circuit this validation function and exit
                        return false;
                    }
                }
            } else {
                prevDateControl = dateControls[dateControls.indexOf(thisDateControl) - 1];
                prevDate = this._caseControls[prevDateControl].value;
                if (!prevDate) {
                    // warn the user of the invalid date selection
                    APP_UTILITIES.showToast('Error', dateControlLabels[thisDateControlIndex] + ' should not be entered until '
                        + dateControlLabels[thisDateControlIndex - 1] + ' has been entered!');
                    // clear the current date control value
                    // this.updateCaseControlValue(thisDateControl, null);
                    // short circuit this validation function and exit
                    return false;
                }
            }
        }

        // if this date control is the first or a middle date control in the array (i.e., not the last)
        if (thisDateControlIndex !== dateControls.length - 1) {
            // determine the next date control and its value
            if (thisDateControl === 'analyst_signoff_date') {
                nextDateControl = dateControls[dateControls.indexOf(thisDateControl) + 1];
                nextDate = this._caseControls[nextDateControl].value;
                if (!nextDate) {
                    nextDateControl = dateControls[dateControls.indexOf(thisDateControl) + 2];
                    nextDate = this._caseControls[nextDateControl].value;
                }
            } else if (thisDateControl === 'final_letter_date') {
                nextDateControl = dateControls[dateControls.indexOf(thisDateControl) + 1];
                nextDate = this._caseControls[nextDateControl].value;
                // if close_date is not already set, then set it equal to final_letter_date
                if (!nextDate) {
                    let thisDateObj = new Date(thisDate);
                    thisDateObj = new Date(thisDateObj.getTime() + Math.abs(thisDateObj.getTimezoneOffset() * 60000));
                    this.updateCaseControlValue('close_date',
                        {date: {year: thisDateObj.getFullYear(), month: thisDateObj.getMonth() + 1, day: thisDateObj.getDate()}});
                    nextDate = thisDate;
                }
            } else {
                nextDateControl = dateControls[dateControls.indexOf(thisDateControl) + 1];
                nextDate = this._caseControls[nextDateControl].value;
            }
            // note that it is possible (and expected, in a normal workflow)
            // that the next date does not yet exist, which is perfectly valid
        }

        // finally, validate the chronology of the entered dates

        // convert thisDate, prevDate, and nextDate to actual date values in order to properly compare them
        if (typeof thisDate !== 'undefined' && thisDate !== null && thisDate !== '' && typeof thisDate === 'object') {
            if (thisDate.date.year === 0) {
                return false;
            } else {thisDate = ('0000' + thisDate.date.year).slice(-4) + '-'
                + ('00' + thisDate.date.month).slice(-2)
                + '-' + ('00' + thisDate.date.day).slice(-2);
            }
        }
        if (typeof prevDate !== 'undefined' && prevDate !== null && prevDate !== '' && typeof prevDate === 'object') {
            if (prevDate.date.year === 0) {
                return false;
            } else {prevDate = ('0000' + prevDate.date.year).slice(-4)
                + '-' + ('00' + prevDate.date.month).slice(-2)
                + '-' + ('00' + prevDate.date.day).slice(-2);
            }
        }
        if (typeof nextDate !== 'undefined' && nextDate !== null && nextDate !== '' && typeof nextDate === 'object') {
            if (nextDate.date.year === 0) {
                return false;
            } else {nextDate = ('0000' + nextDate.date.year).slice(-4)
                + '-' + ('00' + nextDate.date.month).slice(-2)
                + '-' + ('00' + nextDate.date.day).slice(-2);
            }
        }

        // if this date control is the last date control in the array,
        // check if the current date is not null and predates the previous date (which is invalid)
        // (note that the previous date MUST exist (although it could be Final Letter Date, or QC Signoff Date))
        if (thisDate && thisDateControlIndex === dateControls.length - 1 && (thisDate < prevDate)) {
            // warn the user of the invalid date selection
            if (prevDateControl === 'final_letter_date') {
                APP_UTILITIES.showToast('Error', dateControlLabels[thisDateControlIndex]
                    + ' can not be earlier than ' + dateControlLabels[thisDateControlIndex - 2] + '!');
            } else {APP_UTILITIES.showToast('Error', dateControlLabels[thisDateControlIndex]
                + ' can not be earlier than ' + dateControlLabels[thisDateControlIndex - 1] + '!');
            }
            // clear the current date control value
            // this.updateCaseControlValue(thisDateControl, null);
        } else if (thisDateControlIndex === 0 && nextDate && (thisDate > nextDate)) {
            // if this date control is the first date control in the array
            // check if the current date postdates the next date (which is invalid)
            // (note that the next date MAY OR MAY NOT exist)
            // warn the user of the invalid date selection
            APP_UTILITIES.showToast('Error', dateControlLabels[thisDateControlIndex]
                + ' can not be later than ' + dateControlLabels[thisDateControlIndex + 1] + '!');
            // clear the current date control value
            // this.updateCaseControlValue(thisDateControl, null);
        } else {
            // else it is a middle date control in the array
            // (note that the next date MAY OR MAY NOT exist)
            // if the next date does not yet exist, which is perfectly valid,
            // check if the current date is not null and predates the previous date (which is invalid)
            if (!nextDate && thisDate && (thisDate < prevDate)) {
                // warn the user of the invalid date selection
                APP_UTILITIES.showToast('Error', dateControlLabels[thisDateControlIndex]
                    + ' can not be earlier than ' + dateControlLabels[thisDateControlIndex - 1] + '!');
                // clear the current date control value
                // this.updateCaseControlValue(thisDateControl, null);
            } else if ((thisDate && (thisDate < prevDate)) || (nextDate && (thisDate > nextDate))) {
                // else check if the current date is not null and predates the previous date,
                // or postdates the next date (both of which are invalid)
                // warn the user of the invalid date selection
                if (thisDateControl === 'qc_reviewer_signoff_date' && nextDateControl === 'close_date') {
                    APP_UTILITIES.showToast('Error', dateControlLabels[thisDateControlIndex]
                        + ' must be between ' + dateControlLabels[thisDateControlIndex - 1]
                        + ' and ' + dateControlLabels[thisDateControlIndex + 2] + '!');
                } else {
                    APP_UTILITIES.showToast('Error', dateControlLabels[thisDateControlIndex]
                        + ' must be between ' + dateControlLabels[thisDateControlIndex - 1]
                        + ' and ' + dateControlLabels[thisDateControlIndex + 1] + '!');
                }
                // clear the current date control value
                // this.updateCaseControlValue(thisDateControl, null);
            } else {
                // else all is well!
                // // if this date control is Final Letter Date, then also close the case by setting the Close Date to the same date
                // if (thisDateControl === 'final_letter_date') {
                //     this.updateCaseControlValue('close_date', thisDate);
                // }
                return false;
            }
        }
    }

    private _getUsers() {
        this._userService.getUsers({used_users: 'True'})
            .subscribe(
                users => {
                    this.myUsers = users;
                    this._buildUserOptions();
                },
                error => this._errorMessage = <any>error);
    }

    private _buildUserOptions(formControl?, userID?) {

        const usedUserIDs = [];
        const availableUserIDs = [];

        // clear out the select lists for every user field in order to rebuild them with the latest application state information
        this.availableAnalysts.length = 0;
        this.availableQCReviewers.length = 0;

        // make a list of user IDs that are already in use ('usedUserIDs')
        // the content of this list depends on whether a formControl has just been updated (one of the switch cases) or not (default)
        switch (formControl) {
            case 'analyst':
                if (this.myCase.qc_reviewer) { usedUserIDs.push(this.myCase.qc_reviewer); }
                if (userID && usedUserIDs.indexOf(userID) < 0) { usedUserIDs.push(Number(userID)); }
                break;
            case 'qc_reviewer':
                if (this.myCase.analyst) { usedUserIDs.push(this.myCase.analyst); }
                if (userID && usedUserIDs.indexOf(userID) < 0) { usedUserIDs.push(Number(userID)); }
                break;
            default:
                if (this.myCase.analyst) { usedUserIDs.push(this.myCase.analyst); }
                if (this.myCase.qc_reviewer) { usedUserIDs.push(this.myCase.qc_reviewer); }
                if (userID && usedUserIDs.indexOf(userID) < 0) { usedUserIDs.push(Number(userID)); }
                break;
        }

        // allow each select list to contain any unused users who are current (active) employees
        for (let i = 0, j = this.myUsers.length; i < j; i++) {
            if (usedUserIDs.indexOf(this.myUsers[i].id) < 0 && this.myUsers[i].is_active) {
                this.availableAnalysts.push(this.myUsers[i]);
                this.availableQCReviewers.push(this.myUsers[i]);

                // also store these unused/available user IDs ('availableUserIDs') for later comparison to avoid duplicates
                availableUserIDs.push(this.myUsers[i].id);
            }
        }

        // for the analyst select list only, add back the analyst assigned from the database and/or a user-selected analyst
        const addAnalystUserIDs = [];
        const caseAnalystUserID = this.myCase.analyst;
        // if the analyst formControl was changed, add the selected value to the analyst select list
        if (formControl === 'analyst') {
            addAnalystUserIDs.push(Number(userID)); this.selectedAnalyst = userID
        } else if (caseAnalystUserID) {
            // otherwise, if the analyst formControl was not changed, add back the analyst assigned from the database
            addAnalystUserIDs.push(caseAnalystUserID); this.selectedAnalyst = caseAnalystUserID;
        }
        // if the analyst formControl was changed, but the selected value was not a user (i.e., null),
        // and the analyst assigned from the database has not been re-assigned already,
        // add back the analyst assigned from the database
        if (formControl === 'analyst' && !userID) {
            if (caseAnalystUserID && availableUserIDs.indexOf(caseAnalystUserID) < 0) {
                addAnalystUserIDs.push(caseAnalystUserID);
            }
        }
        for (let i = 0, j = this.myUsers.length; i < j; i++) {
            if (addAnalystUserIDs.indexOf(this.myUsers[i].id) > -1) {
                this.availableAnalysts.push(this.myUsers[i]);
            }
        }

        // for the qc_reviewer select list only, add back the qc_reviewer assigned from the database and/or a user-selected qc_reviewer
        const addQCReviewerUserIDs = [];
        const caseQCReviewerUserID = this.myCase.qc_reviewer;
        // if the qc_reviewer formControl was changed, add the selected value to the qc_reviewer select list
        if (formControl === 'qc_reviewer') {
            addQCReviewerUserIDs.push(Number(userID)); this.selectedQCReviewer = userID
        } else if (caseQCReviewerUserID) {
            // otherwise, if the qc_reviewer formControl was not changed, add back the qc_reviewer assigned from the database
            addQCReviewerUserIDs.push(caseQCReviewerUserID); this.selectedQCReviewer = caseQCReviewerUserID;
        }
        // if the qc_reviewer formControl was changed, but the selected value was not a user (i.e., null),
        // and the qc_reviewer assigned from the database has not been re-assigned already,
        // add back the qc_reviewer assigned from the database
        if (formControl === 'qc_reviewer' && !userID) {
            if (caseQCReviewerUserID && availableUserIDs.indexOf(caseQCReviewerUserID) < 0) {
                addQCReviewerUserIDs.push(caseQCReviewerUserID);
            }
        }
        for (let i = 0, j = this.myUsers.length; i < j; i++) {
            if (addQCReviewerUserIDs.indexOf(this.myUsers[i].id) > -1) {
                this.availableQCReviewers.push(this.myUsers[i]);
            }
        }

    }

    private _getDeterminations() {
        this._determinationService.getDeterminations()
            .subscribe(
                determinations => {
                    this.myDeterminations = determinations;
                },
                error => this._errorMessage = <any>error);
    }

    private getProhibitiondates(unitID: number | string) {
        this._prohibitiondateService.getProhibitiondates({unit: unitID})
            .subscribe(
                prohibitiondates => {
                    this.myProhibitiondates = prohibitiondates;
                },
                error => this._errorMessage = <any>error);
    }

    private _getFieldoffices() {
        this._fieldofficeService.getFieldoffices()
            .subscribe(
                fieldoffices => {
                    this.myFieldoffices = fieldoffices;
                },
                error => this._errorMessage = <any>error);
    }

    addComment(newcomment) {
        if (!newcomment) { return; }
        const matchingComment = this.myComments.filter(function (comment) { return comment.comment === newcomment; });
        if (matchingComment[0]) {
            this.commentUnique = false; return;
        } else {
            this.commentUnique = true;
            this._commentService.createComment(new Comment(this.case_ID, newcomment))
                .subscribe(
                    comment => {
                        this.myComments.push(comment);
                        this._addCommentControl(comment.comment);
                    },
                    error => this._errorMessage = <any>error);
        }
    }

    editComment(commentID) {
        const oldcomment = this.myComments.filter(function(comment) { return comment.id === commentID })[0];
        if (oldcomment.created_by_string === this.username) {
        // if (oldcomment.created_by_string === this._authenticationService.user.username) {
            this.commentOwner = true;
            this.editingComment = true;
            this.editCommentID = commentID;
        } else {
            this.commentOwner = false;
            setTimeout(() => {
                this.commentOwner = true;
            }, 5000);
        }
    }

    cancelEditComment() {
        this.editingComment = false;
    }

    updateComment(newcomment) {
        if (!this.editCommentID || !newcomment) { return; }
        const commentID = this.editCommentID;
        const matchingComment = this.myComments.filter(function (comment) { return comment.comment === newcomment; });
        if (matchingComment[0]) {
            this.commentUnique = false; return;
        } else {
            this.commentUnique = true;
            const oldcomment = this.myComments.filter(function(comment) { return comment.id === commentID })[0];
            // let me = this.myUsers.filter(function(user) {return user.username === newcomment.created_by_string})[0];
            this._commentService.updateComment(
                new Comment(oldcomment.acase, newcomment, oldcomment.created_by, oldcomment.created_by_string,
                    oldcomment.created_date, oldcomment.id))
                .subscribe(
                    comment => {
                        const ndx = this.myComments.indexOf(oldcomment);
                        this.myComments.splice(ndx, 1, comment);
                        this._addCommentControl(comment.comment);
                        this.editingComment = false;
                    },
                    error => this._errorMessage = <any>error);
        }
    }

    addCasetag(newtag) {
        if (!newtag) { return; }
        this._casetagService.createCasetag(new Casetag(this.case_ID, newtag))
            .subscribe(
                casetag => {
                    this.myCasetags.push(casetag);
                    this._buildTagOptions();
                    this._addCasetagControl(casetag.tagname);
                },
                error => this._errorMessage = <any>error);
    }

    removeCasetag(oldtag) {
        this._casetagService.deleteCasetag(oldtag)
            .subscribe(
                casetag => {
                    this._getCasetags(this.case_ID);
                },
                error => this._errorMessage = <any>error);
    }

    setSignoffDateToday(field: string) {
        const controlName = field + '_signoff_date';
        if (this.casegroup.contains(controlName)) {
            this._caseControls[controlName].setValue(APP_UTILITIES.TODAY);
        }
    }

    setFinalLetterDate(checked) {
        if (checked) {
            this._caseControls['final_letter_date'].setValue(APP_UTILITIES.TODAY);
            const close_case = confirm('Do you also want to close this case?');
            if (close_case) {
                this._caseControls['close_date'].setValue(APP_UTILITIES.TODAY);
            } else {
                this._caseControls['close_date'].setValue('');
            }
        } else {
            this._caseControls['final_letter_date'].setValue('');
        }
    }

    fileDragHover(fileInput) {
        fileInput.stopPropagation();
        fileInput.preventDefault();
    }

    casefileSelectHandler(fileInput: any) {
        this.fileDragHover(fileInput);
        const selectedFiles = <Array<File>> fileInput.target.files || fileInput.dataTransfer.files;
        for (let i = 0, j = selectedFiles.length; i < j; i++) {
            const f = selectedFiles[i];
            this._filesToUpload.push(f);
            const fileDetails = {'name': f.name};
            this.filesToUploadDetails.push(fileDetails);
        }
    }

    finalletterSelectHandler(fileInput: any) {
        this.fileDragHover(fileInput);
        // if (this._finalletterToUpload) {
        //     let message = 'There is already a final leader ready for upload.\n';
        //     message += 'If you want to upload a different final letter, remove the current final letter.';
        //     APP_UTILITIES.showToast(message);
        // } else if (this.myCasefiles) {
        //     for (const casefile of this.myCasefiles) {
        //         if (casefile.final_letter) {
        //             let message = 'There is already a final leader that has been uploaded.\n';
        //             message += 'If you want to upload a different final letter, remove the current final letter.';
        //             APP_UTILITIES.showToast(message);
        //         }
        //     }
        // } else {
            const selectedFiles = <Array<File>> fileInput.target.files || fileInput.dataTransfer.files;
            this._finalletterToUpload = selectedFiles[0];
            this.finalletterToUploadDetails = {'name': this._finalletterToUpload.name};
        // }
    }

    removeCasefile(index: number) {
        this._filesToUpload.splice(index, 1);
        this.filesToUploadDetails.splice(index, 1);
    }

    sendFinalLetter() {
        if (this.case_ID && confirm('Are you sure you want to send the email with final letter?')) {
            this._casefileService.sendFinalLetter(this.case_ID);
            this.sendFinalMailComplete = true;
        }
    }

    removeFinalLetter() {
        this._finalletterToUpload = undefined;
        this.finalletterToUploadDetails = undefined;
    }

    deleteCasefile(casefileid) {
        this._casefileService.deleteCasefile(casefileid)
            .subscribe(
                response => { this._getCasefiles(this.myCase.id); },
                error => this._errorMessage = <any>error);
    }

    private _callCreateCasefiles () {
        // create the new casefiles
        this._casefileService.createCasefiles(this.myCase.id, this._filesToUpload)
            .then(
                (result) => {
                    this._getCasefiles(this.myCase.id);
                    this._filesToUpload.length = 0;
                    this.filesToUploadDetails.length = 0;
                    if (this._finalletterToUpload) {
                        this._callCreateFinalLetter();
                    } else if (this._isNewCase) {
                        this._isNewCase = false;
                        this._router.navigate( ['/workbench/' + this.case_ID] );
                    }
                },
                (error) => {
                    // console.error(error);
                    APP_UTILITIES.showToast('Error', error);
                }
            );
    }

    private _callCreateFinalLetter () {
        // create the new final letter
        const uploadFiles = [this._finalletterToUpload];
        this._casefileService.createCasefiles(this.myCase.id, uploadFiles, true)
            .then(
                (result) => {
                    this._getCasefiles(this.myCase.id);
                    this.removeFinalLetter();
                    if (this._isNewCase) {
                        this._isNewCase = false;
                        this._router.navigate( ['/workbench/' + this.case_ID] );
                    }
                },
                (error) => {
                    // console.error(error);
                    APP_UTILITIES.showToast('Error', error);
                }
            );
    }

    generateLetter () {
        const self = this;
        this._caseService.createFinalLeter(this.case_ID)
            .then(function(data) {
                const blob = new Blob([data[0]], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
                FileSaver.saveAs(blob, data[1]);
                self.notready = false;
            });
    }

    onSubmit (form) {

        this.notready = true;

        // check each formControl group for changes, then send the changed objects to their respective services
        if (form.dirty || this._filesToUpload || this._finalletterToUpload) {

            const changedCaseGroup = form.controls.casegroup;
            const changedPropertyGroup = form.controls.propertygroup;
            const changedRequesterGroup = form.controls.requestergroup;

            // check if this is a create or update (case_number will only exist if this is an update)
            if (this.myCase.case_number) {

                if (changedCaseGroup.dirty) {
                    // for each date field, replace empty string with null (Django Date fields don't allow empty strings)
                    // and for all date fields with values, reformat from mm/dd/yyyy to yyyy-mm-dd
                    // note that cbrs_map_date and prohibition_date are slightly different,
                    // since they're plain text and not mydatepicker objects
                    let thisDate = changedCaseGroup.controls.request_date.value;
                    if (thisDate === '') {
                        changedCaseGroup.controls.request_date.setValue(null);
                    } else if (thisDate !== null) {
                        thisDate = APP_UTILITIES.convertDateToISOString(thisDate);
                        changedCaseGroup.controls.request_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.cbrs_map_date.value;
                    if (thisDate === '') {
                        changedCaseGroup.controls.cbrs_map_date.setValue(null);
                    } else if (thisDate !== null) {
                        // map_date comes in mm/dd/yyyy format
                        const date_parts = thisDate.split('/');
                        const ymd = date_parts[2] + '-' + date_parts[0] + '-' + date_parts[1];
                        changedCaseGroup.controls.cbrs_map_date.setValue(ymd);
                    }
                    thisDate = changedCaseGroup.controls.prohibition_date.value;
                    if (thisDate === '') { changedCaseGroup.controls.prohibition_date.setValue(null); }
                    thisDate = changedCaseGroup.controls.fws_fo_received_date.value;
                    if (thisDate === '') {
                        changedCaseGroup.controls.fws_fo_received_date.setValue(null);
                    } else if (thisDate !== null) {
                       thisDate = APP_UTILITIES.convertDateToISOString(thisDate);
                        changedCaseGroup.controls.fws_fo_received_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.fws_hq_received_date.value;
                    if (thisDate === '') {
                        changedCaseGroup.controls.fws_hq_received_date.setValue(null);
                    } else if (thisDate !== null) {
                        thisDate = APP_UTILITIES.convertDateToISOString(thisDate);
                        changedCaseGroup.controls.fws_hq_received_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.final_letter_date.value;
                    if (thisDate === '') {
                        changedCaseGroup.controls.final_letter_date.setValue(null);
                    } else if (thisDate !== null) {
                        thisDate = APP_UTILITIES.convertDateToISOString(thisDate);
                        changedCaseGroup.controls.final_letter_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.close_date.value;
                    if (thisDate === '') {
                        changedCaseGroup.controls.close_date.setValue(null);
                    } else if (thisDate !== null) {
                        // it is possible that close_date has already been set to be equal to final_letter_date,
                        // in which case it will be a string, otherwise it will be a mydatepicker object
                        if (typeof thisDate !== 'string') {
                            thisDate = APP_UTILITIES.convertDateToISOString(thisDate);
                            changedCaseGroup.controls.close_date.setValue(thisDate);
                        }
                    }
                    thisDate = changedCaseGroup.controls.analyst_signoff_date.value;
                    if (thisDate === '') {
                        changedCaseGroup.controls.analyst_signoff_date.setValue(null);
                    } else if (thisDate !== null) {
                        thisDate = APP_UTILITIES.convertDateToISOString(thisDate);
                        changedCaseGroup.controls.analyst_signoff_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.qc_reviewer_signoff_date.value;
                    if (thisDate === '') {
                        changedCaseGroup.controls.qc_reviewer_signoff_date.setValue(null);
                    } else if (thisDate !== null) {
                        thisDate = APP_UTILITIES.convertDateToISOString(thisDate);
                        changedCaseGroup.controls.qc_reviewer_signoff_date.setValue(thisDate);
                    }

                    this._caseService.updateCase(changedCaseGroup.value)
                        .subscribe(
                            acase => {
                                this.selectedMap = acase.map_number;
                                this.myCase = acase;
                                this._updateControls(this._myCase_fields, this._caseControls, this.myCase);
                                // map_date comes in yyyy-mm-dd format
                                if (this.myCase.cbrs_map_date) {
                                    const date_parts = changedCaseGroup.controls.cbrs_map_date.value.split('-');
                                    const mdy = date_parts[1] + '/' + date_parts[2] + '/' + date_parts[0];
                                    this._caseControls['cbrs_map_date'].setValue(mdy);
                                }
                                this._sendFinalMailCheck(acase);
                            },
                            error => this._errorMessage = <any>error
                        );
                }


                if (changedPropertyGroup.dirty) {
                    this._propertyService.updateProperty(changedPropertyGroup.value)
                        .subscribe(
                            property => {
                                this.myProperty = property;
                                this._updateControls(this._myProperty_fields, this._propertyControls, this.myProperty);
                            },
                            error => this._errorMessage = <any>error
                        );
                }


                if (changedRequesterGroup.dirty) {
                    this._requesterService.updateRequester(changedRequesterGroup.value)
                        .subscribe(
                            requester => {
                                this.myRequester = requester;
                                this._updateControls(this._myRequester_fields, this._requesterControls, this.myRequester);
                            },
                            error => this._errorMessage = <any>error
                        );
                }


                if (this._filesToUpload) {
                    this._callCreateCasefiles();
                }


                if (this._finalletterToUpload) {
                    this._callCreateFinalLetter();
                }
            } else {
                this._createCase(form);
            }

        } else if (this._filesToUpload) {
            this._callCreateCasefiles();
        } else if (this._finalletterToUpload) {
            this._callCreateFinalLetter();
        }

        // reset the form
        this.active = false;
        setTimeout(() => { this.notready = false; this.active = true; }, 5000);
    }

    private _createCase(form) {
        // adapted from cbrarequests: https://github.com/USGS-WiM/CBRARequests/blob/master/src/app.component.ts

        const changedPropertyGroup = form.controls.propertygroup;
        const changedRequesterGroup = form.controls.requestergroup;

        // ensure required fields have values
        let hasRequiredValues = true;
        if (!changedPropertyGroup.controls.street && !changedPropertyGroup.controls.city  && !changedPropertyGroup.controls.state) {
            APP_UTILITIES.showToast('Error', 'Could not find the property street and/or city and/or state. Some address value is required.');
            hasRequiredValues = false;
        }
        if (!changedRequesterGroup.controls.first_name && !changedRequesterGroup.controls.last_name
            && !changedRequesterGroup.controls.email) {
            APP_UTILITIES.showToast('Error', 'Could not find the requester first name and/or last name and/or email. Some name is required.');
            hasRequiredValues = false;
        }
        if (!hasRequiredValues) {return}

        // ensure no property fields are null (use empty strings if null)
        // TODO: fix these? not creating any issues without them
        /* for (const group of changedPropertyGroup.controls) {
            for (const key of group) {
                if (!changedPropertyGroup.controls[key]) {
                    changedPropertyGroup.controls[key] = '';
                }
            }
        } */

        // ensure no requester fields are null (use empty strings if null)
        /* for (const group of changedRequesterGroup) {
            for (const key of group) {
                if (!changedRequesterGroup[key]) {
                    changedRequesterGroup[key] = '';
                }
            }
        } */

        // create the local models
        this._newCase = new Case();
        this._newProperty = new Property(
            changedPropertyGroup.controls.street.value, changedPropertyGroup.controls.city.value,
            changedPropertyGroup.controls.state.value, changedPropertyGroup.controls.zipcode.value,
            changedPropertyGroup.controls.unit.value, changedPropertyGroup.controls.legal_description.value,
            changedPropertyGroup.controls.subdivision.value, changedPropertyGroup.controls.policy_number.value);
        this._newRequester = new Requester(
            changedRequesterGroup.controls.first_name.value, changedRequesterGroup.controls.last_name.value,
            changedRequesterGroup.controls.salutation.value, changedRequesterGroup.controls.organization.value,
            changedRequesterGroup.controls.email.value, changedRequesterGroup.controls.street.value,
            changedRequesterGroup.controls.unit.value, changedRequesterGroup.controls.city.value,
            changedRequesterGroup.controls.state.value, changedRequesterGroup.controls.zipcode.value);

        // check if the property, requester, or case already exist, and create them as necessary
        this.__getProperties(this._newProperty);

    }

    //////
    //
    // _createCase functions
    //
    //////

    private __getCases(propertyID: number, requesterID: number) {
        this._caseService.getCases({property: propertyID, requester: requesterID})
            .subscribe(
                (cases: Case[]) => {
                    if (cases.length > 0) {
                        // inform the user that the request already exists and show the summary
                        this._newCase.id = cases[0].id;
                        // TODO: replace this alert with a better UX, like a modal
                        APP_UTILITIES.showToast('Info', 'That case already exists! Loading the case details...');
                        setTimeout(() => {
                            this.notready = false;
                            this.__goToCase(this._newCase.id);
                        }, 5000);
                    } else {
                        // send the new request to the DB
                        this.__createRequest();
                    }
                },
                error => console.error(<any>error));
    }

    private __getProperties(property: Property) {
        this._propertyService.getProperties({street: property.street,
                unit: property.unit,
                city: property.city,
                state: property.state,
                zipcode: property.zipcode
            })
            .subscribe(
                (properties: Property[]) => {
                    if (properties.length > 0) { this._newProperty.id = properties[0].id; }
                    this.__getRequesters(this._newRequester);
                },
                error => console.error(<any>error));
    }

    private __getRequesters(requester: Requester) {
        this._requesterService.getRequesters(
            {
                salutation: requester.salutation,
                first_name: requester.first_name,
                last_name: requester.last_name,
                organization: requester.organization,
                email: requester.email,
                street: requester.street,
                unit: requester.unit,
                city: requester.city,
                state: requester.state,
                zipcode: requester.zipcode,
            })
            .subscribe(
                (requesters: Requester[]) => {
                    if (requesters.length > 0) { this._newRequester.id = requesters[0].id; }
                    if (this._newProperty.id && this._newRequester.id) {
                        this.__getCases(this._newProperty.id, this._newRequester.id);
                    } else {
                        // send the new request to the DB
                        this.__createRequest();
                    }
                },
                error => console.error(<any>error));
    }

    private __createRequest () {
        if (this._newRequester.id && this._newProperty.id) {
            this.__assignRequesterID();
            this.__assignPropertyID();
            this.__callCreateCase();
        } else if (this._newRequester.id && !this._newProperty.id) {
            this.__assignRequesterID();
            this.__callCreatePropertyAndCase();
        } else if (!this._newRequester.id && this._newProperty.id) {
            this.__assignPropertyID();
            this.__callCreateRequestAndCase();
        } else {
            this.__callCreateRequesterAndPropertyAndCase();
        }
    }

    private __assignRequesterID () {
        this._newCase.requester = this._newRequester.id;
    }

    private __assignPropertyID () {
        this._newCase.property = this._newProperty.id;
    }

    private __callCreateRequesterAndPropertyAndCase () {
        // create the requester object, then grab its ID for the relation to the case
        this._requesterService.createRequester(this._newRequester)
            .subscribe(
                newrequester => {
                    this._newRequester = newrequester;
                    this.__assignRequesterID();
                    // create the property object, then grab its ID for the relation to the case
                    this.__callCreatePropertyAndCase();
                },
                error =>  console.error(<any>error));
    }

    private __callCreateRequestAndCase () {
        // create the request object, then grab its ID for the relation to the case
        this._requesterService.createRequester(this._newRequester)
            .subscribe(
                newrequester => {
                    this._newRequester = newrequester;
                    this.__assignRequesterID();
                    // create the new case
                    this.__callCreateCase();
                },
                error =>  console.error(<any>error));
    }

    private __callCreatePropertyAndCase () {
        // create the property object, then grab its ID for the relation to the case
        this._propertyService.createProperty(this._newProperty)
            .subscribe(
                newproperty => {
                    this._newProperty = newproperty;
                    this.__assignPropertyID();
                    // create the new case
                    this.__callCreateCase();
                },
                error =>  console.error(<any>error));
    }

    private __callCreateCase () {
        // create the new case
        this._caseService.createCase(this._newCase)
            .subscribe(
                newcase => {
                    this._newCase = newcase;
                    if (this._filesToUpload) {
                        this._callCreateCasefiles();
                    }
                    if (this._finalletterToUpload) {
                        this._callCreateFinalLetter();
                    } else {
                        this.__goToCase(this._newCase.id);
                        this.notready = false;
                    }
                },
                error =>  console.error(<any>error)
            );
    }

    private __goToCase(caseID: number | string) {
        this._router.navigate( ['/workbench/' + caseID] );
    }

    print() {
        window.print();
    }

}
