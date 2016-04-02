import {Component}         from 'angular2/core';
import {RouteParams}       from 'angular2/router';
import {URLSearchParams}   from 'angular2/http';
import {Case}              from '../cases/case';
import {Property}          from '../properties/property'
import {Requester}         from '../requesters/requester';
import {Comment}           from '../comments/comment';
import {Tag}               from '../tags/tag';
import {Casetag}           from '../casetags/casetag';
import {Systemmap}         from '../systemmaps/systemmap';
import {Systemunit}        from '../systemunits/systemunit';
import {Fieldoffice}       from '../fieldoffices/fieldoffice';
import {User}              from '../users/user';
import {Determination}     from '../determinations/determination';
import {Prohibitiondate}   from '../prohibitiondates/prohibitiondate';
import {CaseService}       from '../cases/case.service';
import {CasefileService}   from '../casefiles/casefile.service';
import {PropertyService}   from '../properties/property.service';
import {RequesterService}  from '../requesters/requester.service';
import {CommentService}    from '../comments/comment.service';
import {TagService}        from '../tags/tag.service';
import {CasetagService}    from '../casetags/casetag.service';
import {SystemunitService} from '../systemunits/systemunit.service';
import {SystemmapService}  from '../systemmaps/systemmap.service';
import {FieldofficeService} from '../fieldoffices/fieldoffice.service';
import {UserService}       from '../users/user.service';
import {DeterminationService} from '../determinations/determination.service';
import {ProhibitiondateService} from '../prohibitiondates/prohibitiondate.service';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, Control, ControlArray} from 'angular2/common';

@Component({
    templateUrl: 'app/workbench/workbench-detail.component.html',
    directives: [FORM_DIRECTIVES],
    providers: [
        PropertyService,
        RequesterService,
        CaseService,
        CasefileService,
        CommentService,
        TagService,
        CasetagService,
        SystemunitService,
        SystemmapService,
        FieldofficeService,
        UserService,
        DeterminationService,
        ProhibitiondateService],
    styles: ['.error {color:red;}']
})
export class WorkbenchDetailComponent{
    case_ID: number;
    mapsfound: boolean = true;
    private _filesToUpload: File[];
    filesToUploadDetails: Object[] = [];
    active = true;
    notready: Boolean = true;
    noxhr: Boolean = true;
    private _errorMessage: string;

    private _userFields:string[] = ['analyst', 'qc_reviewer', 'fws_reviewer'];
    private _today: string = new Date().toISOString().substr(0,10);

    myCase = new Case();
    myProperty = new Property();
    myRequester = new Requester();
    myComment = new Comment();
    myCasetag = new Casetag();
    myTag = new Tag();
    myComments: Comment[];
    myCasetags: Casetag[];
    myTags: Tag[];
    availableTags = [];
    mySystemunits: Systemunit[];
    mySystemmaps: Systemmap[];
    availableSystemmapdates = [];
    myFieldoffices: Fieldoffice[];
    myUsers: User[];
    availableAnalysts: User[] = [];
    availableQCReviewers: User[] = [];
    availableFWSReviewers: User[] = [];
    selectedAnalyst: number;
    selectedQCReviewer: number;
    selectedFWSReviewer: number;
    myDeterminations: Determination[];
    myProhibitiondates: Prohibitiondate[];
    salutations: String[] = ['Mr.', 'Ms.', 'Dr.'];
    myCasefiles = [];

    private _myCase_fields = Object.keys(this.myCase);
    private _myProperty_fields = Object.keys(this.myProperty);
    private _myRequester_fields = Object.keys(this.myRequester);

    form: ControlGroup;
    private _caseControls;
    private _propertyControls;
    private _requesterControls;
    private _commentsControls: Control[] = [];
    private _casetagsControls: Control[] = [];
    casegroup: ControlGroup;
    propertygroup: ControlGroup;
    requestergroup: ControlGroup;
    commentgroup: ControlArray;
    taggroup: ControlArray;

    private _makeControls(fields) {
        let controls = {};
        for (let i = 0, j = fields.length; i < j; i++) {
            controls[fields[i]] = new Control("");
        }
        return controls;
    }

    private _updateControls(fields, controls, values): void {
        for (let i = 0, j = fields.length; i < j; i++) {
            controls[fields[i]].updateValue(values[fields[i]]);
        }
    }

    private _updateControl(field, fields, controls, values): void {
        let i = fields.indexOf(field);
        controls[fields[i]].updateValue(values[fields[i]]);
    }

    private _updateValues(fields, controls, values): void {
        for (let i = 0, j = fields.length; i < j; i++) {
            console.log(fields[i] + ' : ' + values[fields[i]] + ' : ' + controls[fields[i]].value);
            //values[fields[i]] = controls[fields[i]].value;
        }
    }

    private updateCaseControlValue(control, value) {
        this._caseControls[control].updateValue(value);
        if (this._userFields.indexOf(control) > -1) { this._buildUserOptions(control, value); }
    }

    private updateRequesterControlValue(control, value) {
        this._requesterControls[control].updateValue(value);
    }

    private _addCommentControl(value): void {
        this._commentsControls.push(new Control(value))
    }

    private _addCasetagControl(value): void {
        this._casetagsControls.push(new Control(value));
    }

    constructor (fb: FormBuilder,
                 private _routeParams: RouteParams,
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
                 private _prohibitiondateService: ProhibitiondateService
    ){

        this._caseControls = this._makeControls(this._myCase_fields);
        this._propertyControls = this._makeControls(this._myProperty_fields);
        this._requesterControls = this._makeControls(this._myRequester_fields);

        this.casegroup = new ControlGroup(this._caseControls);
        this.propertygroup = new ControlGroup(this._propertyControls);
        this.requestergroup = new ControlGroup(this._requesterControls);
        this.commentgroup = new ControlArray(this._commentsControls);
        this.taggroup = new ControlArray(this._casetagsControls);

        this.form = fb.group({
            casegroup: this.casegroup,
            propertygroup: this.propertygroup,
            requestergroup: this.requestergroup,
            commentgroup: this.commentgroup,
            taggroup: this.taggroup
        });

        let caseID = +this._routeParams.get('id');
        this.case_ID = caseID;
        this._getCase(caseID);
        this._getCasefiles(caseID);
        this._getProperties(caseID);
        this._getRequesters(caseID);
        this._getComments(caseID);
        this._getCasetags(caseID);
        this._getSystemunits();
        this._getFieldoffices();
        this._getDeterminations();

        // check of the browser supports XHR2, which allows file drag and drop
        let xhr = new XMLHttpRequest();
	    if (xhr.upload) {
            this.noxhr = false;
        }

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
                    this.selectedAnalyst = acase.analyst;
                    this.selectedQCReviewer = acase.qc_reviewer;
                    this.selectedFWSReviewer = acase.fws_reviewer;
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
                    this.mySystemunits = systemunits;
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
    
    private getSystemmaps(unitID: number | string) {
        this._systemmapService.getSystemmaps(new URLSearchParams('unit='+unitID))
            .subscribe(
                systemmaps => {
                    this.mySystemmaps = systemmaps;
                    if (this.mySystemmaps.length == 0) { this.mapsfound = false; } //alert('No maps found for this unit.'); }
                    else {
                        this.mapsfound = true;
                        this._updateControl("map_number", this._myCase_fields, this._caseControls, this.mySystemmaps);
                        //let mapID = (this.myCase.map_number ? this.myCase.map_number : this.mySystemmaps[0].id);
                        //this.getSystemmapdate(mapID);
                        if (this.myCase.map_number) {this.getSystemmapdate(this.myCase.map_number)}
                    }
                },
                error => this._errorMessage = <any>error);
    }

    private getSystemmapdate(mapID) {
        if (!mapID) {this._caseControls["cbrs_map_date"].updateValue("");}
        else {
            let maps = this.mySystemmaps.filter(function (map) {return map.id == mapID;});
            this._caseControls["cbrs_map_date"].updateValue(maps[0].map_date);
            //this.updateControl("cbrs_map_date", this.myCase_fields, this.caseControls, this.mySystemmaps);
        }
    }

    private _getUsers() {
        this._userService.getUsers()
            .subscribe(
                users => {
                    this.myUsers = users;
                    this._buildUserOptions();
                },
                error => this._errorMessage = <any>error);
    }
    
    private _buildUserOptions(control?, userID?) {

        let usedUserIDs = [];
        let availableUserIDs = [];

        // clear out the select lists for every user field in order to rebuild them with the latest application state information
        this.availableAnalysts.length = 0;
        this.availableQCReviewers.length = 0;
        this.availableFWSReviewers.length = 0;

        // make a list of user IDs that are already in use ("usedUserIDs")
        // the content of this list depends on whether a control has just been updated (one of the switch cases) or not (default)
        switch (control) {
            case 'analyst':
                if (this.myCase.qc_reviewer) {usedUserIDs.push(this.myCase.qc_reviewer);}
                if (this.myCase.fws_reviewer) {usedUserIDs.push(this.myCase.fws_reviewer);}
                if (userID && usedUserIDs.indexOf(userID) < 0) {usedUserIDs.push(Number(userID));}
                break;
            case 'qc_reviewer':
                if (this.myCase.analyst) {usedUserIDs.push(this.myCase.analyst);}
                if (this.myCase.fws_reviewer) {usedUserIDs.push(this.myCase.fws_reviewer);}
                if (userID && usedUserIDs.indexOf(userID) < 0) {usedUserIDs.push(Number(userID));}
                break;
            case 'fws_reviewer':
                if (this.myCase.analyst) {usedUserIDs.push(this.myCase.analyst);}
                if (this.myCase.qc_reviewer) {usedUserIDs.push(this.myCase.qc_reviewer);}
                if (userID && usedUserIDs.indexOf(userID) < 0) {usedUserIDs.push(Number(userID));}
                break;
            default:
                if (this.myCase.analyst) {usedUserIDs.push(this.myCase.analyst);}
                if (this.myCase.qc_reviewer) {usedUserIDs.push(this.myCase.qc_reviewer);}
                if (this.myCase.fws_reviewer) {usedUserIDs.push(this.myCase.fws_reviewer);}
                if (userID && usedUserIDs.indexOf(userID) < 0) {usedUserIDs.push(Number(userID));}
                break;
        }

        // allow each select list to contain any unused users
        for (let i = 0, j = this.myUsers.length; i < j; i++) {
            if (usedUserIDs.indexOf(this.myUsers[i].id) < 0) {
                this.availableAnalysts.push(this.myUsers[i]);
                this.availableQCReviewers.push(this.myUsers[i]);
                this.availableFWSReviewers.push(this.myUsers[i]);

                // also store these unused/available user IDs ("availableUserIDs") for later comparison to avoid duplicates
                availableUserIDs.push(this.myUsers[i].id);
            }
        }

        // for the analyst select list only, add back the analyst assigned from the database and/or a user-selected analyst
        let addAnalystUserIDs = [];
        let caseAnalystUserID = this.myCase.analyst;
        // if the analyst control was changed, add the selected value to the analyst select list
        if (control == 'analyst') {addAnalystUserIDs.push(Number(userID)); this.selectedAnalyst = userID}
        // otherwise, if the analyst control was not changed, add back the analyst assigned from the database
        else if (caseAnalystUserID) {addAnalystUserIDs.push(caseAnalystUserID); this.selectedAnalyst = caseAnalystUserID;}
        // if the analyst control was changed, but the selected value was not a user (i.e., null), and the analyst assigned from the database has not been re-assigned already, add back the analyst assigned from the database
        if (control == 'analyst' && !userID) {if (caseAnalystUserID && availableUserIDs.indexOf(caseAnalystUserID) < 0) {addAnalystUserIDs.push(caseAnalystUserID);}}
        for (let i = 0, j = this.myUsers.length; i < j; i++) {
            if (addAnalystUserIDs.indexOf(this.myUsers[i].id) > -1) {
                this.availableAnalysts.push(this.myUsers[i]);
            }
        }

        // for the qc_reviewer select list only, add back the qc_reviewer assigned from the database and/or a user-selected qc_reviewer
        let addQCReviewerUserIDs = [];
        let caseQCReviewerUserID = this.myCase.qc_reviewer;
        // if the qc_reviewer control was changed, add the selected value to the qc_reviewer select list
        if (control == 'qc_reviewer') {addQCReviewerUserIDs.push(Number(userID)); this.selectedQCReviewer = userID}
        // otherwise, if the qc_reviewer control was not changed, add back the qc_reviewer assigned from the database
        else if (caseQCReviewerUserID) {addQCReviewerUserIDs.push(caseQCReviewerUserID); this.selectedQCReviewer = caseQCReviewerUserID;}
        // if the qc_reviewer control was changed, but the selected value was not a user (i.e., null), and the qc_reviewer assigned from the database has not been re-assigned already, add back the qc_reviewer assigned from the database
        if (control == 'qc_reviewer' && !userID) {if (caseQCReviewerUserID && availableUserIDs.indexOf(caseQCReviewerUserID) < 0) {addQCReviewerUserIDs.push(caseQCReviewerUserID);}}
        for (let i = 0, j = this.myUsers.length; i < j; i++) {
            if (addQCReviewerUserIDs.indexOf(this.myUsers[i].id) > -1) {
                this.availableQCReviewers.push(this.myUsers[i]);
            }
        }

        // for the fws_reviewer select list only, add back the fws_reviewer assigned from the database and/or a user-selected fws_reviewer
        let addFWSReviewerUserIDs = [];
        let caseFWSReviewerUserID = this.myCase.fws_reviewer;
        // if the fws_reviewer control was changed, add the selected value to the fws_reviewer select list
        if (control == 'fws_reviewer') {addFWSReviewerUserIDs.push(Number(userID)); this.selectedFWSReviewer = userID;}
        // otherwise, if the fws_reviewer control was not changed, add back the fws_reviewer assigned from the database
        else if (caseFWSReviewerUserID) {addFWSReviewerUserIDs.push(caseFWSReviewerUserID); this.selectedFWSReviewer = caseFWSReviewerUserID;}
        // if the fws_reviewer control was changed, but the selected value was not a user (i.e., null), and the fws_reviewer assigned from the database has not been re-assigned already, add back the fws_reviewer assigned from the database
        if (control == 'fws_reviewer' && !userID) {if (caseFWSReviewerUserID && availableUserIDs.indexOf(caseFWSReviewerUserID) < 0) {addFWSReviewerUserIDs.push(caseFWSReviewerUserID);}}
        for (let i = 0, j = this.myUsers.length; i < j; i++) {
            if (addFWSReviewerUserIDs.indexOf(this.myUsers[i].id) > -1) {
                this.availableFWSReviewers.push(this.myUsers[i]);
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

    /*
    buildSystemmapdateOptions(mapID) {
        this.availableSystemmapdates.length = 0;
        for (let i = 0, j = this.mySystemmaps.length; i < j; i++) {
            if (this.mySystemmaps[i].id == mapID) {
                if (this.availableSystemmapdates.indexOf(this.mySystemmaps[i].map_date) < 0) {
                    let obj = {'id': this.mySystemmaps[i].id, 'map_date': this.mySystemmaps[i].map_date};
                    this.availableSystemmapdates.push(obj);
                }
            }
        }
    }
    */
    
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
        this._commentService.createComment(new Comment(this.case_ID, newcomment))
            .subscribe(
                comment => {
                    this.myComments.push(comment);
                    this._addCommentControl(comment.comment);
                },
                error => this._errorMessage = <any>error);
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
        //    this.caseControls[controlName].updateValue(this._today);
        //}
        if (this.casegroup.contains(controlName)) {
            this._caseControls[controlName].updateValue(this._today);
        }
    }

    fileDragHover(fileInput) {
        fileInput.stopPropagation();
        fileInput.preventDefault();
        fileInput.target.className = (fileInput.type == "dragover" ? "hover" : "");
    }

    fileSelectHandler(fileInput: any){
        this.fileDragHover(fileInput);
        this._filesToUpload = <Array<File>> fileInput.target.files || fileInput.dataTransfer.files;
        for (let i = 0, f; f = this._filesToUpload[i]; i++) {
            let fileDetails = {'name': f.name, 'size': ((f.size)/1024/1024).toFixed(3)};
            this.filesToUploadDetails.push(fileDetails);
        }
    }

    removeCasefile(index: number) {
        this.filesToUploadDetails.splice(index, 1);
    }

    private _callCreateCasefiles () {
        // create the new casefiles
        this._casefileService.createCasefiles(this.myCase.id, this._filesToUpload)
            .then(
                (result) => {
                    //console.log(result);
                },
                (error) => {
                    console.error(error);
                }
            );
    }

    //onSubmit () {this.updateValues(this.myCase_fields, this.caseControls, this.myCase)}

    onSubmit (form) {
        // check each form control group for changes, then send the changed objects to their respective services
        if (form.dirty) {

            this.notready = true;

            let changedCaseGroup = form.controls.casegroup;
            let changedPropertyGroup = form.controls.propertygroup;
            let changedRequesterGroup = form.controls.requestergroup;

            if (changedCaseGroup.dirty) {
                this._caseService.updateCase(changedCaseGroup.value)
                    .subscribe(
                        acase => {
                            this._getCase(this.case_ID);
                            if (this._filesToUpload) {
                                this._callCreateCasefiles();
                            }
                        },
                        error => this._errorMessage = <any>error
                    );
            }


            if (changedPropertyGroup.dirty) {
                this._propertyService.updateProperty(changedPropertyGroup.value)
                    .subscribe(
                        property => {
                            this._getProperties(this.case_ID);
                        },
                        error => this._errorMessage = <any>error
                    );
            }


            if (changedRequesterGroup.dirty) {
                this._requesterService.updateRequester(changedRequesterGroup.value)
                    .subscribe(
                        requester => {
                            this._getRequesters(this.case_ID);
                        },
                        error => this._errorMessage = <any>error
                    );
            }
        }

        // reset the form
        this.active = false;
        setTimeout(()=> { this.notready = false; this.active=true; }, 1000);
    }

}