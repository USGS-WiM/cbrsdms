import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {URLSearchParams} from '@angular/http';
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
export class WorkbenchDetailComponent{
    case_ID: number;
    mapsfound = true;
    private _filesToUpload: File[] = [];
    filesToUploadDetails: Object[] = [];
    private _finalletterToUpload: File;
    finalletterToUploadDetails: Object;
    caseFileClass = 'col-md-4';
    active = true;
    notready: Boolean = true;
    noxhr: Boolean = true;
    isOnHold: Boolean = false;
    isreadonly_prohibitiondate: Boolean = false;
    commentUnique: Boolean = true;
    commentOwner: Boolean = true;
    editingComment: Boolean = false;
    editCommentID: number;
    private _isNewCase: Boolean = false;
    private _errorMessage: string;
    private _today = new Date();

    private _userFields: string[] = ['analyst', 'qc_reviewer'];
    private _debug: Boolean = false;

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

    private _showToast(message: string, timeout?: number) {
        const toast = <HTMLElement> document.querySelector('#cbra_toast');
        toast.className = 'cbraToast toastVisible';
        toast.innerHTML = message;
        setTimeout(function(){
            toast.className = 'cbraToast';
        }, (timeout ? timeout : 5000));
    }

    private _makeControls(fields) {
        let controls = {};
        for (let i = 0, j = fields.length; i < j; i++) {
            // add a validator for zipcode fields
            if (fields[i] == 'zipcode') {
                controls[fields[i]] = new FormControl({value: "", disabled: false}, Validators.maxLength(5));
            }
            // add validator for property control required fields: street, city, state)
            // although we don't know the source of the submitted fields,
            // we can determine if they are from a property object by testing if a uniquely property field is present
            if (['legal_description'].indexOf(fields) > -1) {
                if (['street', 'city', 'state'].indexOf(fields) > -1) {
                    controls[fields[i]] = new FormControl({value: "", disabled: false}, Validators.required);
                }
            }
            // add validator for requester control required fields: first_name, last_name, email
            // although we don't know the source of the submitted fields,
            // we can determine if they are from a requester object by testing if a uniquely requester field is present
            else if (['email'].indexOf(fields) > -1) {
                if (['first_name', 'last_name', 'email'].indexOf(fields) > -1) {
                    controls[fields[i]] = new FormControl({value: "", disabled: false}, Validators.required);
                }
            }
            // otherwise don't impose any validators
            else {controls[fields[i]] = new FormControl({value: "", disabled: false});}
        }
        return controls;
    }

    private _updateControls(fields, controls, values): void {
        for (let i = 0, j = fields.length; i < j; i++) {
            let field = fields[i];
            if (field.slice(-4) == "date" && values[field] != null && field != "cbrs_map_date" && field != "prohibition_date") {
                let thisDate = new Date(values[field]);
                thisDate = new Date(thisDate.getTime() + Math.abs(thisDate.getTimezoneOffset()*60000));
                controls[field].setValue({date: {year: thisDate.getFullYear(), month: thisDate.getMonth() + 1, day: thisDate.getDate()}});
            }
            else {
                controls[field].setValue(values[field]);
            }
        }
    }

    private _updateControl(field, fields, controls, values): void {
        let i = fields.indexOf(field);
        controls[fields[i]].setValue(values[fields[i]]);
    }

    private _updateValues(fields, controls, values): void {
        for (let i = 0, j = fields.length; i < j; i++) {
            console.log(fields[i] + ' : ' + values[fields[i]] + ' : ' + controls[fields[i]].value);
            //values[fields[i]] = controls[fields[i]].value;
        }
    }

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
    ){

        if(this._debug){console.log("0: "+APP_UTILITIES.TIME+": "+this.myCase.map_number+" : "+this.selectedMap);}

        // append a temporary "final_letter" field to a case object so that it can be a control in the form
        let case_with_final_letter: any = this.myCase;
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
        // if the Case ID exists, get the case details
        if (this.case_ID) {
            this._isNewCase = false;
            this._getCase(this.case_ID);
            this._getCasefiles(this.case_ID);
            this._getProperties(this.case_ID);
            this._getRequesters(this.case_ID);
            this._getComments(this.case_ID);
            this._getCasetags(this.case_ID);
        }
        // otherwise this is a new case, so get user values for the select inputs
        else {
            this._isNewCase = true;
            this._getUsers();
        }
        // get values for the select inputs
        this._getCaseIDs();
        this._getSystemunits();
        this._getFieldoffices();
        this._getDeterminations();

        // check if the browser supports XHR2, which allows file drag and drop
        let xhr = new XMLHttpRequest();
	    if (xhr.upload) {
            this.noxhr = false;
        }

        // TODO: Discover and fix the underlying issue and remove this workaround.
        // This is a workaround to get the Map Number select box to properly select the case's map number.
        // During debugging, the select box actually does make the proper selection, but then for some reason
        // it de-selects, leaving the selected value null, and I can't figure out why. Maybe it's losing a race
        // condition between the page load and the system unit select box load???
        setTimeout(()=> {
            //this._updateControl("map_number", this._myCase_fields, this._caseControls, this.mySystemmaps);
            this.selectedMap = this.myCase.map_number;
            if(this._debug){console.log("6: "+APP_UTILITIES.TIME+": "+this.myCase.map_number+" : "+this.selectedMap);}
            //console.log("map_number workaround");
        }, 10000);

/*
        this.form.valueChanges
            .subscribe((formValue) => {
                console.log(formValue);
            });
*/
    }

    private _getCase(caseID: number) {
        this._caseService.getCase(caseID)
            .subscribe(
                acase => {
                    this.myCase = acase;
                    if(this._debug){console.log("1: "+APP_UTILITIES.TIME+": "+this.myCase.map_number+" : "+this.selectedMap);}
                    //this.selectedMap = this.myCase.map_number;
                    this.selectedAnalyst = acase.analyst;
                    this.selectedQCReviewer = acase.qc_reviewer;
                    this._updateControls(this._myCase_fields, this._caseControls, this.myCase);
                    this._getUsers();
                },
                error => this._errorMessage = <any>error);
    }

    private _getCasefiles(caseID: number) {
        this._casefileService.getCasefiles(new URLSearchParams('case='+caseID))
            .then(
                casefiles => {
                    this.myCasefiles = casefiles;
                    //this.updateControls(this.myCase_fields, this.caseControls, this.myCase);
                },
                error => this._errorMessage = <any>error);
    }

    private _getCaseIDs() {
        this._caseService.getCases(new URLSearchParams('view=caseid'))
            .subscribe(
                cases => {
                    this.myCaseIDs.length = 0;
                    for (let i = 0, j = cases.length; i < j; i++) {
                        this.myCaseIDs.push(cases[i]);
                    }
                    this.myCaseIDs.sort(APP_UTILITIES.dynamicSort('id'));
                },
                error => this._errorMessage = <any>error);
    }

    private _getProperties(caseID: number | string) {
        this._propertyService.getProperties(new URLSearchParams('case='+caseID))
            .subscribe(
                properties => {
                    this.myProperty = properties[0];
                    this._updateControls(this._myProperty_fields, this._propertyControls, this.myProperty);
                },
                error => this._errorMessage = <any>error);
    }

    private _getRequesters(caseID: number | string) {
        this._requesterService.getRequesters(new URLSearchParams('case='+caseID))
            .subscribe(
                requesters => {
                    this.myRequester = requesters[0];
                    this._updateControls(this._myRequester_fields, this._requesterControls, this.myRequester);
                },
                error => this._errorMessage = <any>error);
    }

    private _getComments(caseID: number | string) {
        this._commentService.getComments(new URLSearchParams('case='+caseID))
            .subscribe(
                comments => {
                    this.myComments = comments;
                    for (let i = 0, j = comments.length; i < j; i++) {
                        this._addCommentControl(comments[i].comment);
                    }
                },
                error => this._errorMessage = <any>error);
    }

    private _getCasetags(caseID: number | string) {
        this._casetagService.getCasetags(new URLSearchParams('case='+caseID))
            .subscribe(
                casetags => {
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
        let usedTagIDs = [];
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
                systemunits => {
                    this.mySystemunits = systemunits.sort(APP_UTILITIES.dynamicSort('system_unit_number'));
                    if(this._debug){console.log("2: "+APP_UTILITIES.TIME+": "+this.myCase.map_number+" : "+this.selectedMap);}
                    //let unitID = (this.myCase.cbrs_unit ? this.myCase.cbrs_unit : this.mySystemunits[0].id);
                    //this.getSystemmaps(unitID);
                    if (this.myCase.cbrs_unit) {
                        this.getSystemmaps(this.myCase.cbrs_unit);
                        this.getProhibitiondates(this.myCase.cbrs_unit);
                    }
                    this.notready = false;
                },
                error => this._errorMessage = <any>error);
    }

    public getSystemmaps(unitID: number | string) {
        this._systemmapService.getSystemmaps(new URLSearchParams('unit='+unitID))
            .subscribe(
                systemmaps => {
                    this.mySystemmaps = systemmaps;
                    if (this.mySystemmaps.length == 0) { this.mapsfound = false; } //alert('No maps found for this unit.'); }
                    else {
                        this.mapsfound = true;
                        if(this._debug){console.log("3: "+APP_UTILITIES.TIME+": "+this.myCase.map_number+" : "+this.selectedMap);}
                        this._updateControl("map_number", this._myCase_fields, this._caseControls, this.mySystemmaps);
                        if(this._debug){console.log("4: "+APP_UTILITIES.TIME+": "+this.myCase.map_number+" : "+this.selectedMap); console.log(this.mySystemmaps);}
                        //let mapID = (this.myCase.map_number ? this.myCase.map_number : this.mySystemmaps[0].id);
                        //this.getSystemmapdate(mapID);
                        if (this.myCase.map_number) {this.getSystemmapdate(this.myCase.map_number)}
                    }
                },
                error => this._errorMessage = <any>error);
    }

    public getSystemmapdate(mapID) {
        if (!mapID) {this._caseControls["cbrs_map_date"].setValue("");}
        else {
            let maps = this.mySystemmaps.filter(function (map) {return map.id == mapID;});
            this._caseControls["cbrs_map_date"].setValue(maps[0].map_date);
            if(this._debug){console.log("5: "+APP_UTILITIES.TIME+": "+this.myCase.map_number+" : "+this.selectedMap);}
            //this.updateControl("cbrs_map_date", this.myCase_fields, this.caseControls, this.mySystemmaps);
        }
    }

    public toggleReadOnlyProhibitionDate(determination) {
        if (determination == 2 || determination == 4) {
            // calling both reset and setValue is a workaround
            // because Angular2 currently does not expose any other way of toggling the disabled property of a control
            //this._caseControls["prohibition_date"].reset({value: "", disabled: true});
            //this._caseControls["prohibition_date"].setValue(null);
            this.isreadonly_prohibitiondate = true;
        }
        else {
            //this._caseControls["prohibition_date"].reset({value: "", disabled: false});
            //this._caseControls["prohibition_date"].setValue(null);
            this.isreadonly_prohibitiondate = false;
        }
    }

    public toggleOnHold() {
        this.isOnHold = !this.isOnHold;
    }

    myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
        disableSince: {year: this._today.getFullYear(), month: this._today.getMonth() + 1, day: this._today.getDate() + 1}
    };

    public validateDate(thisDateControl, thisDate) {
        if (this.notready) {return false;}
        if (typeof thisDate === 'undefined' || thisDate === null || thisDate === "") {return false;}
        if (typeof thisDate === 'object') {
            if (thisDate.year == 0) {return false;}
            else {thisDate = ("0000" + thisDate.year).slice(-4) + "-" + ("00" + thisDate.month).slice(-2) + "-" + ("00" + thisDate.day).slice(-2);}
        }
        // ensure the date value is a valid date by converting it to a date object and testing the constituent date values
        let thisDateAsDate = new Date(thisDate);
        thisDateAsDate = new Date(thisDateAsDate.getTime() + Math.abs(thisDateAsDate.getTimezoneOffset()*60000));
        if (thisDateAsDate.getFullYear() < 1000  || thisDateAsDate.getFullYear() > 9999 || thisDateAsDate.getMonth() < 1 || thisDateAsDate.getMonth() > 12 || thisDateAsDate.getDate() < 1 || thisDateAsDate.getDate() > 31) {
            this._showToast(thisDate + " (" + thisDateAsDate.toISOString().substr(0,10) + ") is not a valid date. Please enter a valid date.");
            return false;
        }
        // establish two parallel arrays of the date controls and their labels
        let dateControls = ["request_date","fws_fo_received_date","fws_hq_received_date","analyst_signoff_date","qc_reviewer_signoff_date","final_letter_date","close_date"];
        let dateControlLabels = ["Request Date","Field Office Received Date","Headquarters Received Date","Analyst Signoff Date","QC Signoff Date","Final Letter Date","Close Date"];
        // determine the index of the current date control within the date control array
        let thisDateControlIndex = dateControls.indexOf(thisDateControl);
        // declare variables for potential use
        let prevDateControl, prevDate, nextDateControl, nextDate;
        // if this date control is the last or a middle date control in the array (i.e., not the first)
        if (thisDateControlIndex != 0) {
            // determine the previous date control and its value
            // if the previous date has not been entered, the user should not be allowed to enter a value in the current date control,
            // except for Close Date (Final Letter Date can be null), and Headquarters Received Date (Field Office Received Date seems to be null in a majority of cases)
            if (thisDateControl == "close_date") {
                prevDateControl = dateControls[dateControls.indexOf(thisDateControl)-1];
                prevDate = this._caseControls[prevDateControl].value;
                if (!prevDate) {
                    prevDateControl = dateControls[dateControls.indexOf(thisDateControl)-2];
                    prevDate = this._caseControls[prevDateControl].value;
                    if (!prevDate) {
                        // warn the user of the invalid date selection
                        this._showToast(dateControlLabels[thisDateControlIndex] + " should not be entered until " + dateControlLabels[thisDateControlIndex - 3] + " has been entered!");
                        // clear the current date control value
                        //this.updateCaseControlValue(thisDateControl, null);
                        // short circuit this validation function and exit
                        return false;
                    }
                }
            }
            else if (thisDateControl == "fws_hq_received_date") {
                prevDateControl = dateControls[dateControls.indexOf(thisDateControl)-1];
                prevDate = this._caseControls[prevDateControl].value;
                if (!prevDate) {
                    prevDateControl = dateControls[dateControls.indexOf(thisDateControl)-2];
                    prevDate = this._caseControls[prevDateControl].value;
                    if (!prevDate) {
                        // warn the user of the invalid date selection
                        this._showToast(dateControlLabels[thisDateControlIndex] + " should not be entered until " + dateControlLabels[thisDateControlIndex - 2] + " has been entered!");
                        // clear the current date control value
                        //this.updateCaseControlValue(thisDateControl, null);
                        // short circuit this validation function and exit
                        return false;
                    }
                }
            }
            else {
                prevDateControl = dateControls[dateControls.indexOf(thisDateControl)-1];
                prevDate = this._caseControls[prevDateControl].value;
                if (!prevDate) {
                    // warn the user of the invalid date selection
                    this._showToast(dateControlLabels[thisDateControlIndex] + " should not be entered until " + dateControlLabels[thisDateControlIndex - 1] + " has been entered!");
                    // clear the current date control value
                    //this.updateCaseControlValue(thisDateControl, null);
                    // short circuit this validation function and exit
                    return false;
                }
            }
        }

        // if this date control is the first or a middle date control in the array (i.e., not the last)
        if (thisDateControlIndex != dateControls.length-1) {
            // determine the next date control and its value
            if (thisDateControl == "analyst_signoff_date") {
                nextDateControl = dateControls[dateControls.indexOf(thisDateControl)+1];
                nextDate = this._caseControls[nextDateControl].value;
                if (!nextDate) {
                    nextDateControl = dateControls[dateControls.indexOf(thisDateControl)+2];
                    nextDate = this._caseControls[nextDateControl].value;
                }
            }
            else if (thisDateControl == "final_letter_date") {
                nextDateControl = dateControls[dateControls.indexOf(thisDateControl)+1];
                nextDate = this._caseControls[nextDateControl].value;
                // if close_date is not already set, then set it equal to final_letter_date
                if (!nextDate) {
                    let thisDateObj = new Date(thisDate);
                    thisDateObj = new Date(thisDateObj.getTime() + Math.abs(thisDateObj.getTimezoneOffset()*60000));
                    this.updateCaseControlValue("close_date", {date: {year: thisDateObj.getFullYear(), month: thisDateObj.getMonth() + 1, day: thisDateObj.getDate()}});
                    nextDate = thisDate;
                }
            }
            else {
                nextDateControl = dateControls[dateControls.indexOf(thisDateControl)+1];
                nextDate = this._caseControls[nextDateControl].value;
            }
            // (note that it is possible (and expected, in a normal workflow) that the next date does not yet exist, which is perfectly valid
        }

        // finally, validate the chronology of the entered dates

        // convert thisDate, prevDate, and nextDate to actual date values in order to properly compare them
        if (typeof thisDate !== 'undefined' && thisDate !== null && thisDate !== "" && typeof thisDate === 'object') {
            if (thisDate.date.year == 0) {return false;}
            else {thisDate = ("0000" + thisDate.date.year).slice(-4) + "-" + ("00" + thisDate.date.month).slice(-2) + "-" + ("00" + thisDate.date.day).slice(-2);}
        }
        if (typeof prevDate !== 'undefined' && prevDate !== null && prevDate !== "" && typeof prevDate === 'object') {
            if (prevDate.date.year == 0) {return false;}
            else {prevDate = ("0000" + prevDate.date.year).slice(-4) + "-" + ("00" + prevDate.date.month).slice(-2) + "-" + ("00" + prevDate.date.day).slice(-2);}
        }
        if (typeof nextDate !== 'undefined' && nextDate !== null && nextDate !== "" && typeof nextDate === 'object') {
            if (nextDate.date.year == 0) {return false;}
            else {nextDate = ("0000" + nextDate.date.year).slice(-4) + "-" + ("00" + nextDate.date.month).slice(-2) + "-" + ("00" + nextDate.date.day).slice(-2);}
        }

        // if this date control is the last date control in the array,
        // check if the current date is not null and predates the previous date (which is invalid)
        // (note that the previous date MUST exist (although it could be Final Letter Date, or QC Signoff Date))
        if (thisDate && thisDateControlIndex == dateControls.length-1 && (thisDate < prevDate)) {
            // warn the user of the invalid date selection
            if (prevDateControl == "final_letter_date") {this._showToast(dateControlLabels[thisDateControlIndex] + " can not be earlier than " + dateControlLabels[thisDateControlIndex - 2] + "!");}
            else {this._showToast(dateControlLabels[thisDateControlIndex] + " can not be earlier than " + dateControlLabels[thisDateControlIndex - 1] + "!");}
            // clear the current date control value
            //this.updateCaseControlValue(thisDateControl, null);
        }
        // if this date control is the first date control in the array
        // check if the current date postdates the next date (which is invalid)
        // (note that the next date MAY OR MAY NOT exist)
        else if (thisDateControlIndex == 0 && nextDate && (thisDate > nextDate)) {
            // warn the user of the invalid date selection
            this._showToast(dateControlLabels[thisDateControlIndex] + " can not be later than " + dateControlLabels[thisDateControlIndex+1] + "!");
            // clear the current date control value
            //this.updateCaseControlValue(thisDateControl, null);
        }
        // else it is a middle date control in the array
        // (note that the next date MAY OR MAY NOT exist)
        else {
            // if the next date does not yet exist, which is perfectly valid, check if the current date is not null and predates the previous date (which is invalid)
            if (!nextDate && thisDate && (thisDate < prevDate)) {
                // warn the user of the invalid date selection
                this._showToast(dateControlLabels[thisDateControlIndex] + " can not be earlier than " + dateControlLabels[thisDateControlIndex-1] + "!");
                // clear the current date control value
                //this.updateCaseControlValue(thisDateControl, null);
            }
            // else check if the current date is not null and predates the previous date, or postdates the next date (both of which are invalid)
            else if ((thisDate && (thisDate < prevDate)) || (nextDate && (thisDate > nextDate))) {
                // warn the user of the invalid date selection
                if (thisDateControl == "qc_reviewer_signoff_date" && nextDateControl == "close_date") {this._showToast(dateControlLabels[thisDateControlIndex] + " must be between " + dateControlLabels[thisDateControlIndex - 1] + " and " + dateControlLabels[thisDateControlIndex + 2] + "!");}
                else {this._showToast(dateControlLabels[thisDateControlIndex] + " must be between " + dateControlLabels[thisDateControlIndex - 1] + " and " + dateControlLabels[thisDateControlIndex + 1] + "!");}
                // clear the current date control value
                //this.updateCaseControlValue(thisDateControl, null);
            }
            // else all is well!
            else {
                // // if this date control is Final Letter Date, then also close the case by setting the Close Date to the same date
                // if (thisDateControl == "final_letter_date") {
                //     this.updateCaseControlValue("close_date", thisDate);
                // }
                return false;
            }
        }
    }

    private _getUsers() {
        this._userService.getUsers(new URLSearchParams('used_users=True'))
            .subscribe(
                users => {
                    this.myUsers = users;//.sort(APP_UTILITIES.dynamicSort('username'));
                    this._buildUserOptions();
                },
                error => this._errorMessage = <any>error);
    }

    private _buildUserOptions(formControl?, userID?) {

        let usedUserIDs = [];
        let availableUserIDs = [];

        // clear out the select lists for every user field in order to rebuild them with the latest application state information
        this.availableAnalysts.length = 0;
        this.availableQCReviewers.length = 0;

        // make a list of user IDs that are already in use ("usedUserIDs")
        // the content of this list depends on whether a formControl has just been updated (one of the switch cases) or not (default)
        switch (formControl) {
            case 'analyst':
                if (this.myCase.qc_reviewer) {usedUserIDs.push(this.myCase.qc_reviewer);}
                if (userID && usedUserIDs.indexOf(userID) < 0) {usedUserIDs.push(Number(userID));}
                break;
            case 'qc_reviewer':
                if (this.myCase.analyst) {usedUserIDs.push(this.myCase.analyst);}
                if (userID && usedUserIDs.indexOf(userID) < 0) {usedUserIDs.push(Number(userID));}
                break;
            default:
                if (this.myCase.analyst) {usedUserIDs.push(this.myCase.analyst);}
                if (this.myCase.qc_reviewer) {usedUserIDs.push(this.myCase.qc_reviewer);}
                if (userID && usedUserIDs.indexOf(userID) < 0) {usedUserIDs.push(Number(userID));}
                break;
        }

        // allow each select list to contain any unused users who are current (active) employees
        for (let i = 0, j = this.myUsers.length; i < j; i++) {
            if (usedUserIDs.indexOf(this.myUsers[i].id) < 0 && this.myUsers[i].is_active) {
                this.availableAnalysts.push(this.myUsers[i]);
                this.availableQCReviewers.push(this.myUsers[i]);

                // also store these unused/available user IDs ("availableUserIDs") for later comparison to avoid duplicates
                availableUserIDs.push(this.myUsers[i].id);
            }
        }

        // for the analyst select list only, add back the analyst assigned from the database and/or a user-selected analyst
        let addAnalystUserIDs = [];
        let caseAnalystUserID = this.myCase.analyst;
        // if the analyst formControl was changed, add the selected value to the analyst select list
        if (formControl == 'analyst') {addAnalystUserIDs.push(Number(userID)); this.selectedAnalyst = userID}
        // otherwise, if the analyst formControl was not changed, add back the analyst assigned from the database
        else if (caseAnalystUserID) {addAnalystUserIDs.push(caseAnalystUserID); this.selectedAnalyst = caseAnalystUserID;}
        // if the analyst formControl was changed, but the selected value was not a user (i.e., null), and the analyst assigned from the database has not been re-assigned already, add back the analyst assigned from the database
        if (formControl == 'analyst' && !userID) {if (caseAnalystUserID && availableUserIDs.indexOf(caseAnalystUserID) < 0) {addAnalystUserIDs.push(caseAnalystUserID);}}
        for (let i = 0, j = this.myUsers.length; i < j; i++) {
            if (addAnalystUserIDs.indexOf(this.myUsers[i].id) > -1) {
                this.availableAnalysts.push(this.myUsers[i]);
            }
        }

        // for the qc_reviewer select list only, add back the qc_reviewer assigned from the database and/or a user-selected qc_reviewer
        let addQCReviewerUserIDs = [];
        let caseQCReviewerUserID = this.myCase.qc_reviewer;
        // if the qc_reviewer formControl was changed, add the selected value to the qc_reviewer select list
        if (formControl == 'qc_reviewer') {addQCReviewerUserIDs.push(Number(userID)); this.selectedQCReviewer = userID}
        // otherwise, if the qc_reviewer formControl was not changed, add back the qc_reviewer assigned from the database
        else if (caseQCReviewerUserID) {addQCReviewerUserIDs.push(caseQCReviewerUserID); this.selectedQCReviewer = caseQCReviewerUserID;}
        // if the qc_reviewer formControl was changed, but the selected value was not a user (i.e., null), and the qc_reviewer assigned from the database has not been re-assigned already, add back the qc_reviewer assigned from the database
        if (formControl == 'qc_reviewer' && !userID) {if (caseQCReviewerUserID && availableUserIDs.indexOf(caseQCReviewerUserID) < 0) {addQCReviewerUserIDs.push(caseQCReviewerUserID);}}
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
        this._prohibitiondateService.getProhibitiondates(new URLSearchParams('unit='+unitID))
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
        if (!newcomment) {return;}
        let matchingComment = this.myComments.filter(function (comment) {return comment.comment == newcomment;});
        if (matchingComment[0]) { this.commentUnique = false; return; }
        else {
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
        let oldcomment = this.myComments.filter(function(comment) {return comment.id == commentID})[0];
        if (oldcomment.created_by_string == this._authenticationService.user.username){
            this.commentOwner = true;
            this.editingComment = true;
            this.editCommentID = commentID;
        }
        else {
            this.commentOwner = false;
            setTimeout(()=> {
                this.commentOwner = true;
            }, 5000);
        }
    }

    cancelEditComment(){
        this.editingComment = false;
    }

    updateComment(newcomment) {
        if (!this.editCommentID || !newcomment) {return;}
        let commentID = this.editCommentID;
        let matchingComment = this.myComments.filter(function (comment) {return comment.comment == newcomment;});
        if (matchingComment[0]) { this.commentUnique = false; return; }
        else {
            this.commentUnique = true;
            let oldcomment = this.myComments.filter(function(comment) {return comment.id == commentID})[0];
            //let me = this.myUsers.filter(function(user) {return user.username == newcomment.created_by_string})[0];
            this._commentService.updateComment(new Comment(oldcomment.acase, newcomment, oldcomment.created_by, oldcomment.created_by_string, oldcomment.created_date, oldcomment.id))
                .subscribe(
                    comment => {
                        let ndx = this.myComments.indexOf(oldcomment);
                        this.myComments.splice(ndx, 1, comment);
                        this._addCommentControl(comment.comment);
                        this.editingComment = false;
                    },
                    error => this._errorMessage = <any>error);
        }
    }

    addCasetag(newtag) {
        if (!newtag) {return;}
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
        let controlName = field + "_signoff_date";
        //if (this._userFields.indexOf(field) > -1) {
        //    this.caseControls[controlName].setValue(this._today);
        //}
        if (this.casegroup.contains(controlName)) {
            this._caseControls[controlName].setValue(APP_UTILITIES.TODAY);
        }
    }

    setFinalLetterDate(checked) {
        if(checked) {
            this._caseControls["final_letter_date"].setValue(APP_UTILITIES.TODAY);
            let close_case = confirm("Do you also want to close this case?");
            if (close_case) {
                this._caseControls["close_date"].setValue(APP_UTILITIES.TODAY);
            }
            else {this._caseControls["close_date"].setValue("");}
        }
        else {this._caseControls["final_letter_date"].setValue("");}
    }

    // Fullscreen file drag on dragover
    // Show the dropzone when dragging files (not folders or page
    // elements). The dropzone is hidden after a timer to prevent
    // flickering to occur as `dragleave` is fired constantly.
    // var dragTimer;
    // $(document).on('dragover', function(e) {
    //     var dt = e.originalEvent.dataTransfer;
    //     if (dt.types && (dt.types.indexOf ? dt.types.indexOf('Files') != -1 : dt.types.contains('Files'))) {
    //         document.getElementById("casefiledrag").className = "fullScreenFileDrag";
    //         window.clearTimeout(dragTimer);
    //     }
    // });
    // $(document).on('dragleave', function(e) {
    //     dragTimer = window.setTimeout(function() {
    //         document.getElementById("casefiledrag").className = "";
    //     }, 25);
    // });




    

    fileDragHover(fileInput) {
        fileInput.stopPropagation();
        fileInput.preventDefault();
        // document.getElementById("casefiledrag").className = "fullScreenFileDrag";
        //fileInput.target.className = (fileInput.type == "dragover" ? "hover" : "");
    }

    casefileSelectHandler(fileInput: any){
        // document.getElementById("casefiledrag").className = "";
        //this.notready = true;
        this.fileDragHover(fileInput);
        let selectedFiles = <Array<File>> fileInput.target.files || fileInput.dataTransfer.files;
        for (let i = 0, j = selectedFiles.length; i < j; i++) {
            let f = selectedFiles[i];
            this._filesToUpload.push(f);
            let fileDetails = {'name': f.name};//, 'size': ((f.size)/1024/1024).toFixed(3)};
            this.filesToUploadDetails.push(fileDetails);
            // if (i == j) {
            //     this.notready = false;
            // }
        }
    }

    finalletterSelectHandler(fileInput: any){
        //this.notready = true;
        this.fileDragHover(fileInput);
        let selectedFiles = <Array<File>> fileInput.target.files || fileInput.dataTransfer.files;
        this._finalletterToUpload = selectedFiles[0];
        this.finalletterToUploadDetails = {'name': this._finalletterToUpload.name};//, 'size': ((this._finalletterToUpload.size)/1024/1024).toFixed(3)};
        //this.notready = false;
    }

    removeCasefile(index: number) {
        this._filesToUpload.splice(index, 1);
        this.filesToUploadDetails.splice(index, 1);
    }

    removeFinalLetter() {
        this._finalletterToUpload = undefined;
        this.finalletterToUploadDetails = undefined;
    }

    deleteCasefile(casefileid) {
        this._casefileService.deleteCasefile(casefileid)
            .subscribe(
                response => {this._getCasefiles(this.myCase.id);},
                error => this._errorMessage = <any>error);
    }

    private _callCreateCasefiles () {
        // create the new casefiles
        this._casefileService.createCasefiles(this.myCase.id, this._filesToUpload)
            .then(
                (result) => {
                    console.log(result);
                    this._getCasefiles(this.myCase.id);
                    this._filesToUpload.length = 0;
                    this.filesToUploadDetails.length = 0;
                    if (this._finalletterToUpload) {
                        this._callCreateFinalLetter();
                    }
                    else if (this._isNewCase) {
                        this._isNewCase = false;
                        this._router.navigate( ['/workbench/' + this.case_ID] );
                    }
                },
                (error) => {
                    console.error(error);
                }
            );
    }

    private _callCreateFinalLetter () {
        // create the new final letter
        let uploadFiles = [this._finalletterToUpload];
        this._casefileService.createCasefiles(this.myCase.id, uploadFiles, true)
            .then(
                (result) => {
                    //console.log(result);
                    this._getCasefiles(this.myCase.id);
                    this._finalletterToUpload = undefined;
                    this.finalletterToUploadDetails = undefined;
                    if (this._isNewCase) {
                        this._isNewCase = false;
                        this._router.navigate( ['/workbench/' + this.case_ID] );
                    }
                },
                (error) => {
                    console.error(error);
                }
            );
    }

    generateLetter () {
        this._caseService.createFinalLeter(this.case_ID)
            .then(function(data) {
                //let saveAs:any;
                let blob = new Blob([data[0]],{ type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
                FileSaver.saveAs(blob, data[1]);
            });

        // this._caseService.createFinalLeter(this.case_ID)
        // .then(function(data) {
        //   // create a blob url representing the data
        //   var blob = new Blob([data],{ type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
        //   var url = window.URL.createObjectURL(blob);
        //   // attach blob url to anchor element with download attribute
        //   var anchor = document.createElement('a');
        //   anchor.setAttribute('href', url);
        //   anchor.setAttribute('download', "doc.docx");
        //   anchor.click();
        //   window.URL.revokeObjectURL(url);
        // });

        // let link = document.createElement("a");
        // link.setAttribute("href", APP_SETTINGS.CASES_URL+'?case_number='+this.case_ID+'&format=docx');
        // link.setAttribute("download", "");
        // link.setAttribute("username", "fred");//btoa(sessionStorage.getItem('username')));
        // link.setAttribute("password", "fred");//sessionStorage.getItem('password'));
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    }

    //onSubmit () {this.updateValues(this.myCase_fields, this.caseControls, this.myCase)}

    onSubmit (form) {

        this.notready = true;

        // check each formControl group for changes, then send the changed objects to their respective services
        if (form.dirty || this._filesToUpload || this._finalletterToUpload) {

            let changedCaseGroup = form.controls.casegroup;
            let changedPropertyGroup = form.controls.propertygroup;
            let changedRequesterGroup = form.controls.requestergroup;

            // check if this is a create or update (case_number will only exist if this is an update)
            if (this.myCase.case_number) {

                if (changedCaseGroup.dirty) {
                    // for each date field, replace empty string with null (Django Date fields don't allow empty strings)
                    // and for all date fields with values, reformat from mm/dd/yyyy to yyyy-mm-dd
                    // note that cbrs_map_date and prohibition_date are slightly different, since they're plain text and not mydatepicker objects
                    let thisDate = changedCaseGroup.controls.request_date.value;
                    if (thisDate === "") {changedCaseGroup.controls.request_date.setValue(null);}
                    else if (thisDate !== null) {
                        thisDate = ("0000" + thisDate.date.year).slice(-4) + "-" + ("00" + thisDate.date.month).slice(-2) + "-" + ("00" + thisDate.date.day).slice(-2);
                        changedCaseGroup.controls.request_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.cbrs_map_date.value;
                    if (thisDate === "") {changedCaseGroup.controls.cbrs_map_date.setValue(null);}
                    thisDate = changedCaseGroup.controls.prohibition_date.value;
                    if (thisDate === "") {changedCaseGroup.controls.prohibition_date.setValue(null);}
                    thisDate = changedCaseGroup.controls.fws_fo_received_date.value;
                    if (thisDate === "") {changedCaseGroup.controls.fws_fo_received_date.setValue(null);}
                    else if (thisDate !== null) {
                       thisDate = ("0000" + thisDate.date.year).slice(-4) + "-" + ("00" + thisDate.date.month).slice(-2) + "-" + ("00" + thisDate.date.day).slice(-2);
                        changedCaseGroup.controls.fws_fo_received_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.fws_hq_received_date.value;
                    if (thisDate === "") {changedCaseGroup.controls.fws_hq_received_date.setValue(null);}
                    else if (thisDate !== null) {
                        thisDate = ("0000" + thisDate.date.year).slice(-4) + "-" + ("00" + thisDate.date.month).slice(-2) + "-" + ("00" + thisDate.date.day).slice(-2);
                        changedCaseGroup.controls.fws_hq_received_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.final_letter_date.value;
                    if (thisDate === "") {changedCaseGroup.controls.final_letter_date.setValue(null);}
                    else if (thisDate !== null) {
                        thisDate = ("0000" + thisDate.date.year).slice(-4) + "-" + ("00" + thisDate.date.month).slice(-2) + "-" + ("00" + thisDate.date.day).slice(-2);
                        changedCaseGroup.controls.final_letter_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.close_date.value;
                    if (thisDate === "") {changedCaseGroup.controls.close_date.setValue(null);}
                    else if (thisDate !== null) {
                        // it is possible that close_date has already been set to be equal to final_letter_date, in which case it will be a string, otherwise it will be a mydatepicker object
                        if (typeof thisDate != 'string') {
                            thisDate = ("0000" + thisDate.date.year).slice(-4) + "-" + ("00" + thisDate.date.month).slice(-2) + "-" + ("00" + thisDate.date.day).slice(-2);
                            changedCaseGroup.controls.close_date.setValue(thisDate);
                        }
                    }
                    thisDate = changedCaseGroup.controls.analyst_signoff_date.value;
                    if (thisDate === "") {changedCaseGroup.controls.analyst_signoff_date.setValue(null);}
                    else if (thisDate !== null) {
                        thisDate = ("0000" + thisDate.date.year).slice(-4) + "-" + ("00" + thisDate.date.month).slice(-2) + "-" + ("00" + thisDate.date.day).slice(-2);
                        changedCaseGroup.controls.analyst_signoff_date.setValue(thisDate);
                    }
                    thisDate = changedCaseGroup.controls.qc_reviewer_signoff_date.value;
                    if (thisDate === "") {changedCaseGroup.controls.qc_reviewer_signoff_date.setValue(null);}
                    else if (thisDate !== null) {
                        thisDate = ("0000" + thisDate.date.year).slice(-4) + "-" + ("00" + thisDate.date.month).slice(-2) + "-" + ("00" + thisDate.date.day).slice(-2);
                        changedCaseGroup.controls.qc_reviewer_signoff_date.setValue(thisDate);
                    }

                    this._caseService.updateCase(changedCaseGroup.value)
                        .subscribe(
                            acase => {
                                //this._getCase(this.case_ID);
                                this.myCase = acase;
                                //this._caseControls['priority'].setValue(this.myCase.priority);
                                this._updateControls(this._myCase_fields, this._caseControls, this.myCase);
                            },
                            error => this._errorMessage = <any>error
                        );
                }


                if (changedPropertyGroup.dirty) {
                    this._propertyService.updateProperty(changedPropertyGroup.value)
                        .subscribe(
                            property => {
                                //this._getProperties(this.case_ID);
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
                                //this._getRequesters(this.case_ID);
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
            }

            else {
                this._createCase(form);
            }

        }

        else if (this._filesToUpload) {
            this._callCreateCasefiles();
        }

        else if (this._finalletterToUpload) {
            this._callCreateFinalLetter();
        }

        // reset the form
        this.active = false;
        setTimeout(()=> { this.notready = false; this.active=true; }, 5000);
    }

    private _createCase(form) {
        // adapted from cbrarequests: https://github.com/USGS-WiM/CBRARequests/blob/master/src/app.component.ts

        let changedPropertyGroup = form.controls.propertygroup;
        let changedRequesterGroup = form.controls.requestergroup;

        // ensure required fields have values
        // TODO remove the console logging and replace with proper user notification
        if (!changedPropertyGroup.controls.street && !changedPropertyGroup.controls.city  && !changedPropertyGroup.controls.state)
            {console.log("Warning: couldn't find the property street and/or city and/or state"); return;}
        if (!changedRequesterGroup.controls.first_name && !changedRequesterGroup.controls.last_name && !changedRequesterGroup.controls.email)
            {console.log("Warning: couldn't find the requester first name and/or last name and/or email"); return;}

        // ensure no property fields are null (use empty strings if null)
        for (let group of changedPropertyGroup) {
            for (let key of group) {
                if (!changedPropertyGroup[key]) {
                    changedPropertyGroup[key] = "";
                }
            }
        }

        // ensure no requester fields are null (use empty strings if null)
        for (let group of changedRequesterGroup) {
            for (let key of group) {
                if (!changedRequesterGroup[key]) {
                    changedRequesterGroup[key] = "";
                }
            }
        }

        // create the local models
        this._newCase = new Case();
        this._newProperty = new Property(
            changedPropertyGroup.controls.street.value, changedPropertyGroup.controls.city.value, changedPropertyGroup.controls.state.value,
            changedPropertyGroup.controls.zipcode.value, changedPropertyGroup.controls.unit.value, changedPropertyGroup.controls.legal_description.value,
            changedPropertyGroup.controls.subdivision.value, changedPropertyGroup.controls.policy_number.value);
        this._newRequester = new Requester(
            changedRequesterGroup.controls.first_name.value, changedRequesterGroup.controls.last_name.value,
            changedRequesterGroup.controls.salutation.value, changedRequesterGroup.controls.organization.value,
            changedRequesterGroup.controls.email.value, changedRequesterGroup.controls.street.value, changedRequesterGroup.controls.unit.value,
            changedRequesterGroup.controls.city.value, changedRequesterGroup.controls.state.value, changedRequesterGroup.controls.zipcode.value);

        // check if the property, requester, or case already exist, and create them as necessary
        this.__getProperties(this._newProperty);

    }

    //////
    //
    // _createCase functions
    //
    //////

    private __getCases(propertyID: number, requesterID: number) {
        this._caseService.getCases(new URLSearchParams('property='+propertyID+'&requester='+requesterID))
            .subscribe(
                cases => {
                    if (cases.length > 0) {
                        // inform the user that the request already exists and show the summary
                        this._newCase.id = cases[0].id;
                        // TODO: replace this alert with a better UX, like a modal
                        //alert("That case already exists! Loading the case details...");
                        this._showToast("That case already exists! Loading the case details...");
                        this.__goToCase(this._newCase.id);
                        this.notready = false;
                    }
                    else {
                        // send the new request to the DB
                        this.__createRequest();
                    }
                },
                error => console.error(<any>error));
    }

    private __getProperties(property: Property) {
        this._propertyService.getProperties(
            new URLSearchParams(
                'street='+property.street
                +'&unit='+property.unit
                +'&city='+property.city
                +'&state='+property.state
                +'&zipcode='+property.zipcode
                //+'&legal_description='+property.legal_description
            ))
            .subscribe(
                properties => {
                    if (properties.length > 0) {this._newProperty.id = properties[0].id;}
                    this.__getRequesters(this._newRequester);
                },
                error => console.error(<any>error));
    }

    private __getRequesters(requester: Requester) {
        this._requesterService.getRequesters(
            new URLSearchParams(
                'salutation='+requester.salutation
                +'&first_name='+requester.first_name
                +'&last_name='+requester.last_name
                +'&organization='+requester.organization
                +'&email='+requester.email
                +'&street='+requester.street
                +'&unit='+requester.unit
                +'&city='+requester.city
                +'&state='+requester.state
                +'&zipcode='+requester.zipcode
            ))
            .subscribe(
                requesters => {
                    if (requesters.length > 0) {this._newRequester.id = requesters[0].id;}
                    if (this._newProperty.id && this._newRequester.id) {
                        this.__getCases(this._newProperty.id, this._newRequester.id);
                    }
                    else {
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
        }
        else if (this._newRequester.id && !this._newProperty.id) {
            this.__assignRequesterID();
            this.__callCreatePropertyAndCase();
        }
        else {
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
                    }
                    else {
                        this.__goToCase(this._newCase.id);
                        this.notready = false;
                    }
                },
                error =>  console.error(<any>error)
            );
    }

    private __goToCase(caseID: number | string) {
        this._router.navigate( ['/workbench/'+caseID] );
    }

}
