System.register(['@angular/core', '@angular/router', '@angular/http', '../cases/case', '../properties/property', '../requesters/requester', '../comments/comment', '../tags/tag', '../casetags/casetag', '../cases/case.service', '../casefiles/casefile.service', '../properties/property.service', '../requesters/requester.service', '../comments/comment.service', '../tags/tag.service', '../casetags/casetag.service', '../systemunits/systemunit.service', '../systemmaps/systemmap.service', '../fieldoffices/fieldoffice.service', '../users/user.service', '../determinations/determination.service', '../prohibitiondates/prohibitiondate.service', '@angular/forms', '../app.settings', '../app.utilities'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, case_1, property_1, requester_1, comment_1, tag_1, casetag_1, case_service_1, casefile_service_1, property_service_1, requester_service_1, comment_service_1, tag_service_1, casetag_service_1, systemunit_service_1, systemmap_service_1, fieldoffice_service_1, user_service_1, determination_service_1, prohibitiondate_service_1, forms_1, app_settings_1, app_utilities_1;
    var WorkbenchDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (case_1_1) {
                case_1 = case_1_1;
            },
            function (property_1_1) {
                property_1 = property_1_1;
            },
            function (requester_1_1) {
                requester_1 = requester_1_1;
            },
            function (comment_1_1) {
                comment_1 = comment_1_1;
            },
            function (tag_1_1) {
                tag_1 = tag_1_1;
            },
            function (casetag_1_1) {
                casetag_1 = casetag_1_1;
            },
            function (case_service_1_1) {
                case_service_1 = case_service_1_1;
            },
            function (casefile_service_1_1) {
                casefile_service_1 = casefile_service_1_1;
            },
            function (property_service_1_1) {
                property_service_1 = property_service_1_1;
            },
            function (requester_service_1_1) {
                requester_service_1 = requester_service_1_1;
            },
            function (comment_service_1_1) {
                comment_service_1 = comment_service_1_1;
            },
            function (tag_service_1_1) {
                tag_service_1 = tag_service_1_1;
            },
            function (casetag_service_1_1) {
                casetag_service_1 = casetag_service_1_1;
            },
            function (systemunit_service_1_1) {
                systemunit_service_1 = systemunit_service_1_1;
            },
            function (systemmap_service_1_1) {
                systemmap_service_1 = systemmap_service_1_1;
            },
            function (fieldoffice_service_1_1) {
                fieldoffice_service_1 = fieldoffice_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (determination_service_1_1) {
                determination_service_1 = determination_service_1_1;
            },
            function (prohibitiondate_service_1_1) {
                prohibitiondate_service_1 = prohibitiondate_service_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            },
            function (app_utilities_1_1) {
                app_utilities_1 = app_utilities_1_1;
            }],
        execute: function() {
            // Use Filesaver.js to save binary to file
            // https://github.com/eligrey/FileSaver.js/
            //let fileSaver = require('../../node_modules/filesaver.js/FileSaver.js');
            WorkbenchDetailComponent = (function () {
                function WorkbenchDetailComponent(fb, _route, _caseService, _casefileService, _propertyService, _requesterService, _commentService, _tagService, _casetagService, _systemunitService, _systemmapService, _fieldofficeService, _userService, _determinationService, _prohibitiondateService) {
                    var _this = this;
                    this._route = _route;
                    this._caseService = _caseService;
                    this._casefileService = _casefileService;
                    this._propertyService = _propertyService;
                    this._requesterService = _requesterService;
                    this._commentService = _commentService;
                    this._tagService = _tagService;
                    this._casetagService = _casetagService;
                    this._systemunitService = _systemunitService;
                    this._systemmapService = _systemmapService;
                    this._fieldofficeService = _fieldofficeService;
                    this._userService = _userService;
                    this._determinationService = _determinationService;
                    this._prohibitiondateService = _prohibitiondateService;
                    this.mapsfound = true;
                    this._filesToUpload = [];
                    this.filesToUploadDetails = [];
                    this.active = true;
                    this.notready = true;
                    this.noxhr = true;
                    this.isreadonly_prohibitiondate = false;
                    this.commentUnique = true;
                    this._userFields = ['analyst', 'qc_reviewer', 'fws_reviewer'];
                    this._debug = false;
                    this.myCase = new case_1.Case();
                    this.myProperty = new property_1.Property();
                    this.myRequester = new requester_1.Requester();
                    this.myComment = new comment_1.Comment();
                    this.myCasetag = new casetag_1.Casetag();
                    this.myTag = new tag_1.Tag();
                    this.availableTags = [];
                    this.availableSystemmapdates = [];
                    this.availableAnalysts = [];
                    this.availableQCReviewers = [];
                    this.availableFWSReviewers = [];
                    this.salutations = app_settings_1.APP_SETTINGS.SALUTATIONS;
                    this.states = app_settings_1.APP_SETTINGS.US_STATES;
                    this.myCasefiles = [];
                    this._myCase_fields = Object.keys(this.myCase);
                    this._myProperty_fields = Object.keys(this.myProperty);
                    this._myRequester_fields = Object.keys(this.myRequester);
                    this._commentsControls = [];
                    this._casetagsControls = [];
                    if (this._debug) {
                        console.log("0: " + app_utilities_1.APP_DATETIME.TIME + ": " + this.myCase.map_number + " : " + this.selectedMap);
                    }
                    this._caseControls = this._makeControls(this._myCase_fields);
                    this._propertyControls = this._makeControls(this._myProperty_fields);
                    this._requesterControls = this._makeControls(this._myRequester_fields);
                    this.casegroup = new forms_1.FormGroup(this._caseControls);
                    this.propertygroup = new forms_1.FormGroup(this._propertyControls);
                    this.requestergroup = new forms_1.FormGroup(this._requesterControls);
                    this.commentgroup = new forms_1.FormArray(this._commentsControls);
                    this.taggroup = new forms_1.FormArray(this._casetagsControls);
                    this.form = fb.group({
                        casegroup: this.casegroup,
                        propertygroup: this.propertygroup,
                        requestergroup: this.requestergroup,
                        commentgroup: this.commentgroup,
                        taggroup: this.taggroup
                    });
                    this._route.params.subscribe(function (params) { return _this.case_ID = +params['id']; });
                    this._getCase(this.case_ID);
                    this._getCasefiles(this.case_ID);
                    this._getProperties(this.case_ID);
                    this._getRequesters(this.case_ID);
                    this._getComments(this.case_ID);
                    this._getCasetags(this.case_ID);
                    this._getSystemunits();
                    this._getFieldoffices();
                    this._getDeterminations();
                    // check of the browser supports XHR2, which allows file drag and drop
                    var xhr = new XMLHttpRequest();
                    if (xhr.upload) {
                        this.noxhr = false;
                    }
                    // TODO: Discover and fix the underlying issue and remove this hack.
                    // This is a hack to get the Map Number select box to properly select the case's map number.
                    // During debugging, the select box actually does make the proper selection, but then for some reason
                    // it de-selects, leaving the selected value null, and I can't figure out why. Maybe it's losing a race
                    // condition between the page load and the system unit select box load???
                    setTimeout(function () {
                        //this._updateControl("map_number", this._myCase_fields, this._caseControls, this.mySystemmaps);
                        _this.selectedMap = _this.myCase.map_number;
                        if (_this._debug) {
                            console.log("6: " + app_utilities_1.APP_DATETIME.TIME + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
                        }
                        console.log("map_number hack");
                    }, 3000);
                    /*
                            this.form.valueChanges
                                .subscribe((formValue) => {
                                    console.log(formValue);
                                });
                    */
                }
                WorkbenchDetailComponent.prototype._makeControls = function (fields) {
                    var controls = {};
                    for (var i = 0, j = fields.length; i < j; i++) {
                        //if (fields[i] == "zipcode") {controls[fields[i]] = new FormControl("", Validators.maxLength(5));}
                        //else {controls[fields[i]] = new FormControl("");}
                        controls[fields[i]] = new forms_1.FormControl("");
                    }
                    return controls;
                };
                WorkbenchDetailComponent.prototype._updateControls = function (fields, controls, values) {
                    for (var i = 0, j = fields.length; i < j; i++) {
                        controls[fields[i]].updateValue(values[fields[i]]);
                    }
                };
                WorkbenchDetailComponent.prototype._updateControl = function (field, fields, controls, values) {
                    var i = fields.indexOf(field);
                    controls[fields[i]].updateValue(values[fields[i]]);
                };
                WorkbenchDetailComponent.prototype._updateValues = function (fields, controls, values) {
                    for (var i = 0, j = fields.length; i < j; i++) {
                        console.log(fields[i] + ' : ' + values[fields[i]] + ' : ' + controls[fields[i]].value);
                    }
                };
                WorkbenchDetailComponent.prototype.updateCaseControlValue = function (formControl, value) {
                    this._caseControls[formControl].updateValue(value);
                    if (this._userFields.indexOf(formControl) > -1) {
                        this._buildUserOptions(formControl, value);
                    }
                };
                WorkbenchDetailComponent.prototype.updatePropertyControlValue = function (formControl, value) {
                    this._propertyControls[formControl].updateValue(value);
                };
                WorkbenchDetailComponent.prototype.updateRequesterControlValue = function (formControl, value) {
                    this._requesterControls[formControl].updateValue(value);
                };
                WorkbenchDetailComponent.prototype._addCommentControl = function (value) {
                    this._commentsControls.push(new forms_1.FormControl(value));
                };
                WorkbenchDetailComponent.prototype._addCasetagControl = function (value) {
                    this._casetagsControls.push(new forms_1.FormControl(value));
                };
                WorkbenchDetailComponent.prototype._getCase = function (caseID) {
                    var _this = this;
                    this._caseService.getCase(caseID)
                        .subscribe(function (acase) {
                        _this.myCase = acase;
                        if (_this._debug) {
                            console.log("1: " + app_utilities_1.APP_DATETIME.TIME + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
                        }
                        //this.selectedMap = this.myCase.map_number;
                        _this.selectedAnalyst = acase.analyst;
                        _this.selectedQCReviewer = acase.qc_reviewer;
                        _this.selectedFWSReviewer = acase.fws_reviewer;
                        _this._updateControls(_this._myCase_fields, _this._caseControls, _this.myCase);
                        _this._getUsers();
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype._getCasefiles = function (caseID) {
                    var _this = this;
                    this._casefileService.getCasefiles(new http_1.URLSearchParams('case=' + caseID))
                        .then(function (casefiles) {
                        _this.myCasefiles = casefiles;
                        //this.updateControls(this.myCase_fields, this.caseControls, this.myCase);
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype._getProperties = function (caseID) {
                    var _this = this;
                    this._propertyService.getProperties(new http_1.URLSearchParams('case=' + caseID))
                        .subscribe(function (properties) {
                        _this.myProperty = properties[0];
                        _this._updateControls(_this._myProperty_fields, _this._propertyControls, _this.myProperty);
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype._getRequesters = function (caseID) {
                    var _this = this;
                    this._requesterService.getRequesters(new http_1.URLSearchParams('case=' + caseID))
                        .subscribe(function (requesters) {
                        _this.myRequester = requesters[0];
                        _this._updateControls(_this._myRequester_fields, _this._requesterControls, _this.myRequester);
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype._getComments = function (caseID) {
                    var _this = this;
                    this._commentService.getComments(new http_1.URLSearchParams('case=' + caseID))
                        .subscribe(function (comments) {
                        _this.myComments = comments;
                        for (var i = 0, j = comments.length; i < j; i++) {
                            _this._addCommentControl(comments[i].comment);
                        }
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype._getCasetags = function (caseID) {
                    var _this = this;
                    this._casetagService.getCasetags(new http_1.URLSearchParams('case=' + caseID))
                        .subscribe(function (casetags) {
                        _this.myCasetags = casetags;
                        for (var i = 0, j = casetags.length; i < j; i++) {
                            _this._addCasetagControl(casetags[i].tagname);
                        }
                        _this._getTags();
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype._getTags = function () {
                    var _this = this;
                    this._tagService.getTags()
                        .subscribe(function (tags) {
                        _this.myTags = tags;
                        _this._buildTagOptions();
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype._buildTagOptions = function () {
                    this.availableTags.length = 0;
                    var usedTagIDs = [];
                    for (var i = 0, j = this.myCasetags.length; i < j; i++) {
                        usedTagIDs.push(this.myCasetags[i].tag);
                    }
                    for (var i = 0, j = this.myTags.length; i < j; i++) {
                        if (usedTagIDs.indexOf(this.myTags[i].id) < 0) {
                            this.availableTags.push(this.myTags[i]);
                        }
                    }
                };
                WorkbenchDetailComponent.prototype._getSystemunits = function () {
                    var _this = this;
                    this._systemunitService.getSystemunits()
                        .subscribe(function (systemunits) {
                        _this.mySystemunits = systemunits;
                        if (_this._debug) {
                            console.log("2: " + app_utilities_1.APP_DATETIME.TIME + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
                        }
                        //let unitID = (this.myCase.cbrs_unit ? this.myCase.cbrs_unit : this.mySystemunits[0].id);
                        //this.getSystemmaps(unitID);
                        if (_this.myCase.cbrs_unit) {
                            _this.getSystemmaps(_this.myCase.cbrs_unit);
                            _this.getProhibitiondates(_this.myCase.cbrs_unit);
                        }
                        _this.notready = false;
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype.getSystemmaps = function (unitID) {
                    var _this = this;
                    this._systemmapService.getSystemmaps(new http_1.URLSearchParams('unit=' + unitID))
                        .subscribe(function (systemmaps) {
                        _this.mySystemmaps = systemmaps;
                        if (_this.mySystemmaps.length == 0) {
                            _this.mapsfound = false;
                        } //alert('No maps found for this unit.'); }
                        else {
                            _this.mapsfound = true;
                            if (_this._debug) {
                                console.log("3: " + app_utilities_1.APP_DATETIME.TIME + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
                            }
                            _this._updateControl("map_number", _this._myCase_fields, _this._caseControls, _this.mySystemmaps);
                            if (_this._debug) {
                                console.log("4: " + app_utilities_1.APP_DATETIME.TIME + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
                                console.log(_this.mySystemmaps);
                            }
                            //let mapID = (this.myCase.map_number ? this.myCase.map_number : this.mySystemmaps[0].id);
                            //this.getSystemmapdate(mapID);
                            if (_this.myCase.map_number) {
                                _this.getSystemmapdate(_this.myCase.map_number);
                            }
                        }
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype.getSystemmapdate = function (mapID) {
                    if (!mapID) {
                        this._caseControls["cbrs_map_date"].updateValue("");
                    }
                    else {
                        var maps = this.mySystemmaps.filter(function (map) { return map.id == mapID; });
                        this._caseControls["cbrs_map_date"].updateValue(maps[0].map_date);
                        if (this._debug) {
                            console.log("5: " + app_utilities_1.APP_DATETIME.TIME + ": " + this.myCase.map_number + " : " + this.selectedMap);
                        }
                    }
                };
                WorkbenchDetailComponent.prototype.toggleReadOnlyProhibitionDate = function (determination) {
                    if (determination == 2 || determination == 4) {
                        this._caseControls["prohibition_date"].updateValue(null);
                        this.isreadonly_prohibitiondate = true;
                    }
                    else {
                        this.isreadonly_prohibitiondate = false;
                    }
                };
                WorkbenchDetailComponent.prototype._getUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) {
                        _this.myUsers = users;
                        _this._buildUserOptions();
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype._buildUserOptions = function (formControl, userID) {
                    var usedUserIDs = [];
                    var availableUserIDs = [];
                    // clear out the select lists for every user field in order to rebuild them with the latest application state information
                    this.availableAnalysts.length = 0;
                    this.availableQCReviewers.length = 0;
                    this.availableFWSReviewers.length = 0;
                    // make a list of user IDs that are already in use ("usedUserIDs")
                    // the content of this list depends on whether a formControl has just been updated (one of the switch cases) or not (default)
                    switch (formControl) {
                        case 'analyst':
                            if (this.myCase.qc_reviewer) {
                                usedUserIDs.push(this.myCase.qc_reviewer);
                            }
                            if (this.myCase.fws_reviewer) {
                                usedUserIDs.push(this.myCase.fws_reviewer);
                            }
                            if (userID && usedUserIDs.indexOf(userID) < 0) {
                                usedUserIDs.push(Number(userID));
                            }
                            break;
                        case 'qc_reviewer':
                            if (this.myCase.analyst) {
                                usedUserIDs.push(this.myCase.analyst);
                            }
                            if (this.myCase.fws_reviewer) {
                                usedUserIDs.push(this.myCase.fws_reviewer);
                            }
                            if (userID && usedUserIDs.indexOf(userID) < 0) {
                                usedUserIDs.push(Number(userID));
                            }
                            break;
                        case 'fws_reviewer':
                            if (this.myCase.analyst) {
                                usedUserIDs.push(this.myCase.analyst);
                            }
                            if (this.myCase.qc_reviewer) {
                                usedUserIDs.push(this.myCase.qc_reviewer);
                            }
                            if (userID && usedUserIDs.indexOf(userID) < 0) {
                                usedUserIDs.push(Number(userID));
                            }
                            break;
                        default:
                            if (this.myCase.analyst) {
                                usedUserIDs.push(this.myCase.analyst);
                            }
                            if (this.myCase.qc_reviewer) {
                                usedUserIDs.push(this.myCase.qc_reviewer);
                            }
                            if (this.myCase.fws_reviewer) {
                                usedUserIDs.push(this.myCase.fws_reviewer);
                            }
                            if (userID && usedUserIDs.indexOf(userID) < 0) {
                                usedUserIDs.push(Number(userID));
                            }
                            break;
                    }
                    // allow each select list to contain any unused users
                    for (var i = 0, j = this.myUsers.length; i < j; i++) {
                        if (usedUserIDs.indexOf(this.myUsers[i].id) < 0) {
                            this.availableAnalysts.push(this.myUsers[i]);
                            this.availableQCReviewers.push(this.myUsers[i]);
                            this.availableFWSReviewers.push(this.myUsers[i]);
                            // also store these unused/available user IDs ("availableUserIDs") for later comparison to avoid duplicates
                            availableUserIDs.push(this.myUsers[i].id);
                        }
                    }
                    // for the analyst select list only, add back the analyst assigned from the database and/or a user-selected analyst
                    var addAnalystUserIDs = [];
                    var caseAnalystUserID = this.myCase.analyst;
                    // if the analyst formControl was changed, add the selected value to the analyst select list
                    if (formControl == 'analyst') {
                        addAnalystUserIDs.push(Number(userID));
                        this.selectedAnalyst = userID;
                    }
                    else if (caseAnalystUserID) {
                        addAnalystUserIDs.push(caseAnalystUserID);
                        this.selectedAnalyst = caseAnalystUserID;
                    }
                    // if the analyst formControl was changed, but the selected value was not a user (i.e., null), and the analyst assigned from the database has not been re-assigned already, add back the analyst assigned from the database
                    if (formControl == 'analyst' && !userID) {
                        if (caseAnalystUserID && availableUserIDs.indexOf(caseAnalystUserID) < 0) {
                            addAnalystUserIDs.push(caseAnalystUserID);
                        }
                    }
                    for (var i = 0, j = this.myUsers.length; i < j; i++) {
                        if (addAnalystUserIDs.indexOf(this.myUsers[i].id) > -1) {
                            this.availableAnalysts.push(this.myUsers[i]);
                        }
                    }
                    // for the qc_reviewer select list only, add back the qc_reviewer assigned from the database and/or a user-selected qc_reviewer
                    var addQCReviewerUserIDs = [];
                    var caseQCReviewerUserID = this.myCase.qc_reviewer;
                    // if the qc_reviewer formControl was changed, add the selected value to the qc_reviewer select list
                    if (formControl == 'qc_reviewer') {
                        addQCReviewerUserIDs.push(Number(userID));
                        this.selectedQCReviewer = userID;
                    }
                    else if (caseQCReviewerUserID) {
                        addQCReviewerUserIDs.push(caseQCReviewerUserID);
                        this.selectedQCReviewer = caseQCReviewerUserID;
                    }
                    // if the qc_reviewer formControl was changed, but the selected value was not a user (i.e., null), and the qc_reviewer assigned from the database has not been re-assigned already, add back the qc_reviewer assigned from the database
                    if (formControl == 'qc_reviewer' && !userID) {
                        if (caseQCReviewerUserID && availableUserIDs.indexOf(caseQCReviewerUserID) < 0) {
                            addQCReviewerUserIDs.push(caseQCReviewerUserID);
                        }
                    }
                    for (var i = 0, j = this.myUsers.length; i < j; i++) {
                        if (addQCReviewerUserIDs.indexOf(this.myUsers[i].id) > -1) {
                            this.availableQCReviewers.push(this.myUsers[i]);
                        }
                    }
                    // for the fws_reviewer select list only, add back the fws_reviewer assigned from the database and/or a user-selected fws_reviewer
                    var addFWSReviewerUserIDs = [];
                    var caseFWSReviewerUserID = this.myCase.fws_reviewer;
                    // if the fws_reviewer formControl was changed, add the selected value to the fws_reviewer select list
                    if (formControl == 'fws_reviewer') {
                        addFWSReviewerUserIDs.push(Number(userID));
                        this.selectedFWSReviewer = userID;
                    }
                    else if (caseFWSReviewerUserID) {
                        addFWSReviewerUserIDs.push(caseFWSReviewerUserID);
                        this.selectedFWSReviewer = caseFWSReviewerUserID;
                    }
                    // if the fws_reviewer formControl was changed, but the selected value was not a user (i.e., null), and the fws_reviewer assigned from the database has not been re-assigned already, add back the fws_reviewer assigned from the database
                    if (formControl == 'fws_reviewer' && !userID) {
                        if (caseFWSReviewerUserID && availableUserIDs.indexOf(caseFWSReviewerUserID) < 0) {
                            addFWSReviewerUserIDs.push(caseFWSReviewerUserID);
                        }
                    }
                    for (var i = 0, j = this.myUsers.length; i < j; i++) {
                        if (addFWSReviewerUserIDs.indexOf(this.myUsers[i].id) > -1) {
                            this.availableFWSReviewers.push(this.myUsers[i]);
                        }
                    }
                };
                WorkbenchDetailComponent.prototype._getDeterminations = function () {
                    var _this = this;
                    this._determinationService.getDeterminations()
                        .subscribe(function (determinations) {
                        _this.myDeterminations = determinations;
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype.getProhibitiondates = function (unitID) {
                    var _this = this;
                    this._prohibitiondateService.getProhibitiondates(new http_1.URLSearchParams('unit=' + unitID))
                        .subscribe(function (prohibitiondates) {
                        _this.myProhibitiondates = prohibitiondates;
                    }, function (error) { return _this._errorMessage = error; });
                };
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
                WorkbenchDetailComponent.prototype._getFieldoffices = function () {
                    var _this = this;
                    this._fieldofficeService.getFieldoffices()
                        .subscribe(function (fieldoffices) {
                        _this.myFieldoffices = fieldoffices;
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype.addComment = function (newcomment) {
                    var _this = this;
                    if (!newcomment) {
                        return;
                    }
                    var matchingComment = this.myComments.filter(function (comment) { return comment.comment == newcomment; });
                    if (matchingComment[0]) {
                        this.commentUnique = false;
                        return;
                    }
                    else {
                        this.commentUnique = true;
                        this._commentService.createComment(new comment_1.Comment(this.case_ID, newcomment))
                            .subscribe(function (comment) {
                            _this.myComments.push(comment);
                            _this._addCommentControl(comment.comment);
                        }, function (error) { return _this._errorMessage = error; });
                    }
                };
                WorkbenchDetailComponent.prototype.addCasetag = function (newtag) {
                    var _this = this;
                    if (!newtag) {
                        return;
                    }
                    this._casetagService.createCasetag(new casetag_1.Casetag(this.case_ID, newtag))
                        .subscribe(function (casetag) {
                        _this.myCasetags.push(casetag);
                        _this._buildTagOptions();
                        _this._addCasetagControl(casetag.tagname);
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype.removeCasetag = function (oldtag) {
                    var _this = this;
                    this._casetagService.deleteCasetag(oldtag)
                        .subscribe(function (casetag) {
                        _this._getCasetags(_this.case_ID);
                    }, function (error) { return _this._errorMessage = error; });
                };
                WorkbenchDetailComponent.prototype.setSignoffDateToday = function (field) {
                    var controlName = field + "_signoff_date";
                    //if (this._userFields.indexOf(field) > -1) {
                    //    this.caseControls[controlName].updateValue(this._today);
                    //}
                    if (this.casegroup.contains(controlName)) {
                        this._caseControls[controlName].updateValue(app_utilities_1.APP_DATETIME.TODAY);
                    }
                };
                WorkbenchDetailComponent.prototype.setFinalLetterDate = function (checked) {
                    if (checked) {
                        this._caseControls["final_letter_date"].updateValue(app_utilities_1.APP_DATETIME.TODAY);
                        var close_case = confirm("Do you also want to close this case?");
                        if (close_case) {
                            this._caseControls["close_date"].updateValue(app_utilities_1.APP_DATETIME.TODAY);
                        }
                        else {
                            this._caseControls["close_date"].updateValue("");
                        }
                    }
                    else {
                        this._caseControls["final_letter_date"].updateValue("");
                    }
                };
                WorkbenchDetailComponent.prototype.fileDragHover = function (fileInput) {
                    fileInput.stopPropagation();
                    fileInput.preventDefault();
                    //fileInput.target.className = (fileInput.type == "dragover" ? "hover" : "");
                };
                WorkbenchDetailComponent.prototype.fileSelectHandler = function (fileInput) {
                    this.fileDragHover(fileInput);
                    var selectedFiles = fileInput.target.files || fileInput.dataTransfer.files;
                    for (var i = 0, j = selectedFiles.length; i < j; i++) {
                        this._filesToUpload.push(selectedFiles[i]);
                    }
                    for (var i = 0, f = void 0; f = this._filesToUpload[i]; i++) {
                        var fileDetails = { 'name': f.name, 'size': ((f.size) / 1024 / 1024).toFixed(3) };
                        this.filesToUploadDetails.push(fileDetails);
                    }
                };
                WorkbenchDetailComponent.prototype.removeCasefile = function (index) {
                    this._filesToUpload.splice(index, 1);
                    this.filesToUploadDetails.splice(index, 1);
                };
                WorkbenchDetailComponent.prototype._callCreateCasefiles = function () {
                    // create the new casefiles
                    this._casefileService.createCasefiles(this.myCase.id, this._filesToUpload)
                        .then(function (result) {
                        //console.log(result);
                    }, function (error) {
                        console.error(error);
                    });
                };
                WorkbenchDetailComponent.prototype.generateLetter = function () {
                    this._caseService.createFinalLeter(this.case_ID)
                        .then(function (data) {
                        var blob = new Blob([data[0]], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
                        saveAs(blob, data[1]);
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
                };
                //onSubmit () {this.updateValues(this.myCase_fields, this.caseControls, this.myCase)}
                WorkbenchDetailComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    // check each formControl group for changes, then send the changed objects to their respective services
                    if (form.dirty) {
                        this.notready = true;
                        var changedCaseGroup = form.controls.casegroup;
                        var changedPropertyGroup = form.controls.propertygroup;
                        var changedRequesterGroup = form.controls.requestergroup;
                        if (changedCaseGroup.dirty) {
                            this._caseService.updateCase(changedCaseGroup.value)
                                .subscribe(function (acase) {
                                _this._getCase(_this.case_ID);
                                if (_this._filesToUpload) {
                                    _this._callCreateCasefiles();
                                }
                            }, function (error) { return _this._errorMessage = error; });
                        }
                        if (changedPropertyGroup.dirty) {
                            this._propertyService.updateProperty(changedPropertyGroup.value)
                                .subscribe(function (property) {
                                _this._getProperties(_this.case_ID);
                            }, function (error) { return _this._errorMessage = error; });
                        }
                        if (changedRequesterGroup.dirty) {
                            this._requesterService.updateRequester(changedRequesterGroup.value)
                                .subscribe(function (requester) {
                                _this._getRequesters(_this.case_ID);
                            }, function (error) { return _this._errorMessage = error; });
                        }
                    }
                    // reset the form
                    this.active = false;
                    setTimeout(function () { _this.notready = false; _this.active = true; }, 1000);
                };
                WorkbenchDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/workbench/workbench-detail.component.html',
                        directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
                        providers: [
                            property_service_1.PropertyService,
                            requester_service_1.RequesterService,
                            case_service_1.CaseService,
                            casefile_service_1.CasefileService,
                            comment_service_1.CommentService,
                            tag_service_1.TagService,
                            casetag_service_1.CasetagService,
                            systemunit_service_1.SystemunitService,
                            systemmap_service_1.SystemmapService,
                            fieldoffice_service_1.FieldofficeService,
                            user_service_1.UserService,
                            determination_service_1.DeterminationService,
                            prohibitiondate_service_1.ProhibitiondateService],
                        styles: ['.error {color:red;}']
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, case_service_1.CaseService, casefile_service_1.CasefileService, property_service_1.PropertyService, requester_service_1.RequesterService, comment_service_1.CommentService, tag_service_1.TagService, casetag_service_1.CasetagService, systemunit_service_1.SystemunitService, systemmap_service_1.SystemmapService, fieldoffice_service_1.FieldofficeService, user_service_1.UserService, determination_service_1.DeterminationService, prohibitiondate_service_1.ProhibitiondateService])
                ], WorkbenchDetailComponent);
                return WorkbenchDetailComponent;
            }());
            exports_1("WorkbenchDetailComponent", WorkbenchDetailComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2JlbmNoLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3JrYmVuY2gtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdDQSwwQ0FBMEM7WUFDMUMsMkNBQTJDO1lBQzNDLDBFQUEwRTtZQXFCMUU7Z0JBNEdJLGtDQUFhLEVBQWUsRUFDUCxNQUFzQixFQUN0QixZQUF5QixFQUN6QixnQkFBaUMsRUFDakMsZ0JBQWlDLEVBQ2pDLGlCQUFtQyxFQUNuQyxlQUErQixFQUMvQixXQUF1QixFQUN2QixlQUErQixFQUMvQixrQkFBcUMsRUFDckMsaUJBQW1DLEVBQ25DLG1CQUF1QyxFQUN2QyxZQUF5QixFQUN6QixxQkFBMkMsRUFDM0MsdUJBQStDO29CQTFIeEUsaUJBK29CQztvQkFsaUJ3QixXQUFNLEdBQU4sTUFBTSxDQUFnQjtvQkFDdEIsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBQ2pDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7b0JBQ2pDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7b0JBQ25DLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtvQkFDL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtvQkFDckMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtvQkFDbkMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtvQkFDdkMsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBQ3pCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7b0JBQzNDLDRCQUF1QixH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VSxFQUFFLENBQUMsZ0NBQXdCLENBQUM7d0JBQ3RDLFNBQVMsRUFBRTs0QkFDUCxrQ0FBZTs0QkFDZixvQ0FBZ0I7NEJBQ2hCLDBCQUFXOzRCQUNYLGtDQUFlOzRCQUNmLGdDQUFjOzRCQUNkLHdCQUFVOzRCQUNWLGdDQUFjOzRCQUNkLHNDQUFpQjs0QkFDakIsb0NBQWdCOzRCQUNoQix3Q0FBa0I7NEJBQ2xCLDBCQUFXOzRCQUNYLDRDQUFvQjs0QkFDcEIsZ0RBQXNCLENBQUM7d0JBQzNCLE1BQU0sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNsQyxDQUFDOzs0Q0FBQTtnQkFncEJGLCtCQUFDO1lBQUQsQ0FBQyxBQS9vQkQsSUErb0JDO1lBL29CRCwrREErb0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtVUkxTZWFyY2hQYXJhbXN9ICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Q2FzZX0gICAgICAgICAgICAgIGZyb20gJy4uL2Nhc2VzL2Nhc2UnO1xyXG5pbXBvcnQge1Byb3BlcnR5fSAgICAgICAgICBmcm9tICcuLi9wcm9wZXJ0aWVzL3Byb3BlcnR5J1xyXG5pbXBvcnQge1JlcXVlc3Rlcn0gICAgICAgICBmcm9tICcuLi9yZXF1ZXN0ZXJzL3JlcXVlc3Rlcic7XHJcbmltcG9ydCB7Q29tbWVudH0gICAgICAgICAgIGZyb20gJy4uL2NvbW1lbnRzL2NvbW1lbnQnO1xyXG5pbXBvcnQge1RhZ30gICAgICAgICAgICAgICBmcm9tICcuLi90YWdzL3RhZyc7XHJcbmltcG9ydCB7Q2FzZXRhZ30gICAgICAgICAgIGZyb20gJy4uL2Nhc2V0YWdzL2Nhc2V0YWcnO1xyXG5pbXBvcnQge1N5c3RlbW1hcH0gICAgICAgICBmcm9tICcuLi9zeXN0ZW1tYXBzL3N5c3RlbW1hcCc7XHJcbmltcG9ydCB7U3lzdGVtdW5pdH0gICAgICAgIGZyb20gJy4uL3N5c3RlbXVuaXRzL3N5c3RlbXVuaXQnO1xyXG5pbXBvcnQge0ZpZWxkb2ZmaWNlfSAgICAgICBmcm9tICcuLi9maWVsZG9mZmljZXMvZmllbGRvZmZpY2UnO1xyXG5pbXBvcnQge1VzZXJ9ICAgICAgICAgICAgICBmcm9tICcuLi91c2Vycy91c2VyJztcclxuaW1wb3J0IHtEZXRlcm1pbmF0aW9ufSAgICAgZnJvbSAnLi4vZGV0ZXJtaW5hdGlvbnMvZGV0ZXJtaW5hdGlvbic7XHJcbmltcG9ydCB7UHJvaGliaXRpb25kYXRlfSAgIGZyb20gJy4uL3Byb2hpYml0aW9uZGF0ZXMvcHJvaGliaXRpb25kYXRlJztcclxuaW1wb3J0IHtDYXNlU2VydmljZX0gICAgICAgZnJvbSAnLi4vY2FzZXMvY2FzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHtDYXNlZmlsZVNlcnZpY2V9ICAgZnJvbSAnLi4vY2FzZWZpbGVzL2Nhc2VmaWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1Byb3BlcnR5U2VydmljZX0gICBmcm9tICcuLi9wcm9wZXJ0aWVzL3Byb3BlcnR5LnNlcnZpY2UnO1xyXG5pbXBvcnQge1JlcXVlc3RlclNlcnZpY2V9ICBmcm9tICcuLi9yZXF1ZXN0ZXJzL3JlcXVlc3Rlci5zZXJ2aWNlJztcclxuaW1wb3J0IHtDb21tZW50U2VydmljZX0gICAgZnJvbSAnLi4vY29tbWVudHMvY29tbWVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWdTZXJ2aWNlfSAgICAgICAgZnJvbSAnLi4vdGFncy90YWcuc2VydmljZSc7XHJcbmltcG9ydCB7Q2FzZXRhZ1NlcnZpY2V9ICAgIGZyb20gJy4uL2Nhc2V0YWdzL2Nhc2V0YWcuc2VydmljZSc7XHJcbmltcG9ydCB7U3lzdGVtdW5pdFNlcnZpY2V9IGZyb20gJy4uL3N5c3RlbXVuaXRzL3N5c3RlbXVuaXQuc2VydmljZSc7XHJcbmltcG9ydCB7U3lzdGVtbWFwU2VydmljZX0gIGZyb20gJy4uL3N5c3RlbW1hcHMvc3lzdGVtbWFwLnNlcnZpY2UnO1xyXG5pbXBvcnQge0ZpZWxkb2ZmaWNlU2VydmljZX0gZnJvbSAnLi4vZmllbGRvZmZpY2VzL2ZpZWxkb2ZmaWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1VzZXJTZXJ2aWNlfSAgICAgICBmcm9tICcuLi91c2Vycy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0RldGVybWluYXRpb25TZXJ2aWNlfSBmcm9tICcuLi9kZXRlcm1pbmF0aW9ucy9kZXRlcm1pbmF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQge1Byb2hpYml0aW9uZGF0ZVNlcnZpY2V9IGZyb20gJy4uL3Byb2hpYml0aW9uZGF0ZXMvcHJvaGliaXRpb25kYXRlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIEZvcm1BcnJheX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0FQUF9TRVRUSU5HU30gICAgICBmcm9tICcuLi9hcHAuc2V0dGluZ3MnO1xyXG5pbXBvcnQge0FQUF9EQVRFVElNRX0gICAgICBmcm9tICcuLi9hcHAudXRpbGl0aWVzJztcclxuXHJcbi8vIFVzZSBGaWxlc2F2ZXIuanMgdG8gc2F2ZSBiaW5hcnkgdG8gZmlsZVxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvXHJcbi8vbGV0IGZpbGVTYXZlciA9IHJlcXVpcmUoJy4uLy4uL25vZGVfbW9kdWxlcy9maWxlc2F2ZXIuanMvRmlsZVNhdmVyLmpzJyk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3dvcmtiZW5jaC93b3JrYmVuY2gtZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUHJvcGVydHlTZXJ2aWNlLFxyXG4gICAgICAgIFJlcXVlc3RlclNlcnZpY2UsXHJcbiAgICAgICAgQ2FzZVNlcnZpY2UsXHJcbiAgICAgICAgQ2FzZWZpbGVTZXJ2aWNlLFxyXG4gICAgICAgIENvbW1lbnRTZXJ2aWNlLFxyXG4gICAgICAgIFRhZ1NlcnZpY2UsXHJcbiAgICAgICAgQ2FzZXRhZ1NlcnZpY2UsXHJcbiAgICAgICAgU3lzdGVtdW5pdFNlcnZpY2UsXHJcbiAgICAgICAgU3lzdGVtbWFwU2VydmljZSxcclxuICAgICAgICBGaWVsZG9mZmljZVNlcnZpY2UsXHJcbiAgICAgICAgVXNlclNlcnZpY2UsXHJcbiAgICAgICAgRGV0ZXJtaW5hdGlvblNlcnZpY2UsXHJcbiAgICAgICAgUHJvaGliaXRpb25kYXRlU2VydmljZV0sXHJcbiAgICBzdHlsZXM6IFsnLmVycm9yIHtjb2xvcjpyZWQ7fSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3JrYmVuY2hEZXRhaWxDb21wb25lbnR7XHJcbiAgICBjYXNlX0lEOiBudW1iZXI7XHJcbiAgICBtYXBzZm91bmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfZmlsZXNUb1VwbG9hZDogRmlsZVtdID0gW107XHJcbiAgICBmaWxlc1RvVXBsb2FkRGV0YWlsczogT2JqZWN0W10gPSBbXTtcclxuICAgIGFjdGl2ZSA9IHRydWU7XHJcbiAgICBub3RyZWFkeTogQm9vbGVhbiA9IHRydWU7XHJcbiAgICBub3hocjogQm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc3JlYWRvbmx5X3Byb2hpYml0aW9uZGF0ZTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tbWVudFVuaXF1ZTogQm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIF9lcnJvck1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIF91c2VyRmllbGRzOnN0cmluZ1tdID0gWydhbmFseXN0JywgJ3FjX3Jldmlld2VyJywgJ2Z3c19yZXZpZXdlciddO1xyXG4gICAgcHJpdmF0ZSBfZGVidWc6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBteUNhc2UgPSBuZXcgQ2FzZSgpO1xyXG4gICAgbXlQcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eSgpO1xyXG4gICAgbXlSZXF1ZXN0ZXIgPSBuZXcgUmVxdWVzdGVyKCk7XHJcbiAgICBteUNvbW1lbnQgPSBuZXcgQ29tbWVudCgpO1xyXG4gICAgbXlDYXNldGFnID0gbmV3IENhc2V0YWcoKTtcclxuICAgIG15VGFnID0gbmV3IFRhZygpO1xyXG4gICAgbXlDb21tZW50czogQ29tbWVudFtdO1xyXG4gICAgbXlDYXNldGFnczogQ2FzZXRhZ1tdO1xyXG4gICAgbXlUYWdzOiBUYWdbXTtcclxuICAgIGF2YWlsYWJsZVRhZ3MgPSBbXTtcclxuICAgIG15U3lzdGVtdW5pdHM6IFN5c3RlbXVuaXRbXTtcclxuICAgIG15U3lzdGVtbWFwczogU3lzdGVtbWFwW107XHJcbiAgICBzZWxlY3RlZE1hcDogbnVtYmVyO1xyXG4gICAgYXZhaWxhYmxlU3lzdGVtbWFwZGF0ZXMgPSBbXTtcclxuICAgIG15RmllbGRvZmZpY2VzOiBGaWVsZG9mZmljZVtdO1xyXG4gICAgbXlVc2VyczogVXNlcltdO1xyXG4gICAgYXZhaWxhYmxlQW5hbHlzdHM6IFVzZXJbXSA9IFtdO1xyXG4gICAgYXZhaWxhYmxlUUNSZXZpZXdlcnM6IFVzZXJbXSA9IFtdO1xyXG4gICAgYXZhaWxhYmxlRldTUmV2aWV3ZXJzOiBVc2VyW10gPSBbXTtcclxuICAgIHNlbGVjdGVkQW5hbHlzdDogbnVtYmVyO1xyXG4gICAgc2VsZWN0ZWRRQ1Jldmlld2VyOiBudW1iZXI7XHJcbiAgICBzZWxlY3RlZEZXU1Jldmlld2VyOiBudW1iZXI7XHJcbiAgICBteURldGVybWluYXRpb25zOiBEZXRlcm1pbmF0aW9uW107XHJcbiAgICBteVByb2hpYml0aW9uZGF0ZXM6IFByb2hpYml0aW9uZGF0ZVtdO1xyXG4gICAgc2FsdXRhdGlvbnM6IHN0cmluZ1tdID0gQVBQX1NFVFRJTkdTLlNBTFVUQVRJT05TO1xyXG4gICAgc3RhdGVzOiBzdHJpbmdbXSA9IEFQUF9TRVRUSU5HUy5VU19TVEFURVM7XHJcbiAgICBteUNhc2VmaWxlcyA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX215Q2FzZV9maWVsZHMgPSBPYmplY3Qua2V5cyh0aGlzLm15Q2FzZSk7XHJcbiAgICBwcml2YXRlIF9teVByb3BlcnR5X2ZpZWxkcyA9IE9iamVjdC5rZXlzKHRoaXMubXlQcm9wZXJ0eSk7XHJcbiAgICBwcml2YXRlIF9teVJlcXVlc3Rlcl9maWVsZHMgPSBPYmplY3Qua2V5cyh0aGlzLm15UmVxdWVzdGVyKTtcclxuXHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBwcml2YXRlIF9jYXNlQ29udHJvbHM7XHJcbiAgICBwcml2YXRlIF9wcm9wZXJ0eUNvbnRyb2xzO1xyXG4gICAgcHJpdmF0ZSBfcmVxdWVzdGVyQ29udHJvbHM7XHJcbiAgICBwcml2YXRlIF9jb21tZW50c0NvbnRyb2xzOiBGb3JtQ29udHJvbFtdID0gW107XHJcbiAgICBwcml2YXRlIF9jYXNldGFnc0NvbnRyb2xzOiBGb3JtQ29udHJvbFtdID0gW107XHJcbiAgICBjYXNlZ3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIHByb3BlcnR5Z3JvdXA6IEZvcm1Hcm91cDtcclxuICAgIHJlcXVlc3Rlcmdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgICBjb21tZW50Z3JvdXA6IEZvcm1BcnJheTtcclxuICAgIHRhZ2dyb3VwOiBGb3JtQXJyYXk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWFrZUNvbnRyb2xzKGZpZWxkcykge1xyXG4gICAgICAgIGxldCBjb250cm9scyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gZmllbGRzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICAvL2lmIChmaWVsZHNbaV0gPT0gXCJ6aXBjb2RlXCIpIHtjb250cm9sc1tmaWVsZHNbaV1dID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUpKTt9XHJcbiAgICAgICAgICAgIC8vZWxzZSB7Y29udHJvbHNbZmllbGRzW2ldXSA9IG5ldyBGb3JtQ29udHJvbChcIlwiKTt9XHJcbiAgICAgICAgICAgIGNvbnRyb2xzW2ZpZWxkc1tpXV0gPSBuZXcgRm9ybUNvbnRyb2woXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250cm9scztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVDb250cm9scyhmaWVsZHMsIGNvbnRyb2xzLCB2YWx1ZXMpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IGZpZWxkcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICAgICAgY29udHJvbHNbZmllbGRzW2ldXS51cGRhdGVWYWx1ZSh2YWx1ZXNbZmllbGRzW2ldXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZUNvbnRyb2woZmllbGQsIGZpZWxkcywgY29udHJvbHMsIHZhbHVlcyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBpID0gZmllbGRzLmluZGV4T2YoZmllbGQpO1xyXG4gICAgICAgIGNvbnRyb2xzW2ZpZWxkc1tpXV0udXBkYXRlVmFsdWUodmFsdWVzW2ZpZWxkc1tpXV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VwZGF0ZVZhbHVlcyhmaWVsZHMsIGNvbnRyb2xzLCB2YWx1ZXMpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IGZpZWxkcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmllbGRzW2ldICsgJyA6ICcgKyB2YWx1ZXNbZmllbGRzW2ldXSArICcgOiAnICsgY29udHJvbHNbZmllbGRzW2ldXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vdmFsdWVzW2ZpZWxkc1tpXV0gPSBjb250cm9sc1tmaWVsZHNbaV1dLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUNhc2VDb250cm9sVmFsdWUoZm9ybUNvbnRyb2wsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fY2FzZUNvbnRyb2xzW2Zvcm1Db250cm9sXS51cGRhdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3VzZXJGaWVsZHMuaW5kZXhPZihmb3JtQ29udHJvbCkgPiAtMSkgeyB0aGlzLl9idWlsZFVzZXJPcHRpb25zKGZvcm1Db250cm9sLCB2YWx1ZSk7IH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQcm9wZXJ0eUNvbnRyb2xWYWx1ZShmb3JtQ29udHJvbCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9wcm9wZXJ0eUNvbnRyb2xzW2Zvcm1Db250cm9sXS51cGRhdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVSZXF1ZXN0ZXJDb250cm9sVmFsdWUoZm9ybUNvbnRyb2wsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdGVyQ29udHJvbHNbZm9ybUNvbnRyb2xdLnVwZGF0ZVZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hZGRDb21tZW50Q29udHJvbCh2YWx1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbW1lbnRzQ29udHJvbHMucHVzaChuZXcgRm9ybUNvbnRyb2wodmFsdWUpKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2FkZENhc2V0YWdDb250cm9sKHZhbHVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FzZXRhZ3NDb250cm9scy5wdXNoKG5ldyBGb3JtQ29udHJvbCh2YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChmYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2Nhc2VTZXJ2aWNlOiBDYXNlU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9jYXNlZmlsZVNlcnZpY2U6IENhc2VmaWxlU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9wcm9wZXJ0eVNlcnZpY2U6IFByb3BlcnR5U2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9yZXF1ZXN0ZXJTZXJ2aWNlOiBSZXF1ZXN0ZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbW1lbnRTZXJ2aWNlOiBDb21tZW50U2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF90YWdTZXJ2aWNlOiBUYWdTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2Nhc2V0YWdTZXJ2aWNlOiBDYXNldGFnU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9zeXN0ZW11bml0U2VydmljZTogU3lzdGVtdW5pdFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfc3lzdGVtbWFwU2VydmljZTogU3lzdGVtbWFwU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9maWVsZG9mZmljZVNlcnZpY2U6IEZpZWxkb2ZmaWNlU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfZGV0ZXJtaW5hdGlvblNlcnZpY2U6IERldGVybWluYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2hpYml0aW9uZGF0ZVNlcnZpY2U6IFByb2hpYml0aW9uZGF0ZVNlcnZpY2VcclxuICAgICl7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuX2RlYnVnKXtjb25zb2xlLmxvZyhcIjA6IFwiK0FQUF9EQVRFVElNRS5USU1FK1wiOiBcIit0aGlzLm15Q2FzZS5tYXBfbnVtYmVyK1wiIDogXCIrdGhpcy5zZWxlY3RlZE1hcCk7fVxyXG5cclxuICAgICAgICB0aGlzLl9jYXNlQ29udHJvbHMgPSB0aGlzLl9tYWtlQ29udHJvbHModGhpcy5fbXlDYXNlX2ZpZWxkcyk7XHJcbiAgICAgICAgdGhpcy5fcHJvcGVydHlDb250cm9scyA9IHRoaXMuX21ha2VDb250cm9scyh0aGlzLl9teVByb3BlcnR5X2ZpZWxkcyk7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdGVyQ29udHJvbHMgPSB0aGlzLl9tYWtlQ29udHJvbHModGhpcy5fbXlSZXF1ZXN0ZXJfZmllbGRzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYXNlZ3JvdXAgPSBuZXcgRm9ybUdyb3VwKHRoaXMuX2Nhc2VDb250cm9scyk7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eWdyb3VwID0gbmV3IEZvcm1Hcm91cCh0aGlzLl9wcm9wZXJ0eUNvbnRyb2xzKTtcclxuICAgICAgICB0aGlzLnJlcXVlc3Rlcmdyb3VwID0gbmV3IEZvcm1Hcm91cCh0aGlzLl9yZXF1ZXN0ZXJDb250cm9scyk7XHJcbiAgICAgICAgdGhpcy5jb21tZW50Z3JvdXAgPSBuZXcgRm9ybUFycmF5KHRoaXMuX2NvbW1lbnRzQ29udHJvbHMpO1xyXG4gICAgICAgIHRoaXMudGFnZ3JvdXAgPSBuZXcgRm9ybUFycmF5KHRoaXMuX2Nhc2V0YWdzQ29udHJvbHMpO1xyXG5cclxuICAgICAgICB0aGlzLmZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGNhc2Vncm91cDogdGhpcy5jYXNlZ3JvdXAsXHJcbiAgICAgICAgICAgIHByb3BlcnR5Z3JvdXA6IHRoaXMucHJvcGVydHlncm91cCxcclxuICAgICAgICAgICAgcmVxdWVzdGVyZ3JvdXA6IHRoaXMucmVxdWVzdGVyZ3JvdXAsXHJcbiAgICAgICAgICAgIGNvbW1lbnRncm91cDogdGhpcy5jb21tZW50Z3JvdXAsXHJcbiAgICAgICAgICAgIHRhZ2dyb3VwOiB0aGlzLnRhZ2dyb3VwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX3JvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHRoaXMuY2FzZV9JRCA9ICtwYXJhbXNbJ2lkJ10pO1xyXG4gICAgICAgIHRoaXMuX2dldENhc2UodGhpcy5jYXNlX0lEKTtcclxuICAgICAgICB0aGlzLl9nZXRDYXNlZmlsZXModGhpcy5jYXNlX0lEKTtcclxuICAgICAgICB0aGlzLl9nZXRQcm9wZXJ0aWVzKHRoaXMuY2FzZV9JRCk7XHJcbiAgICAgICAgdGhpcy5fZ2V0UmVxdWVzdGVycyh0aGlzLmNhc2VfSUQpO1xyXG4gICAgICAgIHRoaXMuX2dldENvbW1lbnRzKHRoaXMuY2FzZV9JRCk7XHJcbiAgICAgICAgdGhpcy5fZ2V0Q2FzZXRhZ3ModGhpcy5jYXNlX0lEKTtcclxuICAgICAgICB0aGlzLl9nZXRTeXN0ZW11bml0cygpO1xyXG4gICAgICAgIHRoaXMuX2dldEZpZWxkb2ZmaWNlcygpO1xyXG4gICAgICAgIHRoaXMuX2dldERldGVybWluYXRpb25zKCk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIG9mIHRoZSBicm93c2VyIHN1cHBvcnRzIFhIUjIsIHdoaWNoIGFsbG93cyBmaWxlIGRyYWcgYW5kIGRyb3BcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0ICAgIGlmICh4aHIudXBsb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm94aHIgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRPRE86IERpc2NvdmVyIGFuZCBmaXggdGhlIHVuZGVybHlpbmcgaXNzdWUgYW5kIHJlbW92ZSB0aGlzIGhhY2suXHJcbiAgICAgICAgLy8gVGhpcyBpcyBhIGhhY2sgdG8gZ2V0IHRoZSBNYXAgTnVtYmVyIHNlbGVjdCBib3ggdG8gcHJvcGVybHkgc2VsZWN0IHRoZSBjYXNlJ3MgbWFwIG51bWJlci5cclxuICAgICAgICAvLyBEdXJpbmcgZGVidWdnaW5nLCB0aGUgc2VsZWN0IGJveCBhY3R1YWxseSBkb2VzIG1ha2UgdGhlIHByb3BlciBzZWxlY3Rpb24sIGJ1dCB0aGVuIGZvciBzb21lIHJlYXNvblxyXG4gICAgICAgIC8vIGl0IGRlLXNlbGVjdHMsIGxlYXZpbmcgdGhlIHNlbGVjdGVkIHZhbHVlIG51bGwsIGFuZCBJIGNhbid0IGZpZ3VyZSBvdXQgd2h5LiBNYXliZSBpdCdzIGxvc2luZyBhIHJhY2VcclxuICAgICAgICAvLyBjb25kaXRpb24gYmV0d2VlbiB0aGUgcGFnZSBsb2FkIGFuZCB0aGUgc3lzdGVtIHVuaXQgc2VsZWN0IGJveCBsb2FkPz8/XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgLy90aGlzLl91cGRhdGVDb250cm9sKFwibWFwX251bWJlclwiLCB0aGlzLl9teUNhc2VfZmllbGRzLCB0aGlzLl9jYXNlQ29udHJvbHMsIHRoaXMubXlTeXN0ZW1tYXBzKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcCA9IHRoaXMubXlDYXNlLm1hcF9udW1iZXI7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2RlYnVnKXtjb25zb2xlLmxvZyhcIjY6IFwiK0FQUF9EQVRFVElNRS5USU1FK1wiOiBcIit0aGlzLm15Q2FzZS5tYXBfbnVtYmVyK1wiIDogXCIrdGhpcy5zZWxlY3RlZE1hcCk7fVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1hcF9udW1iZXIgaGFja1wiKTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuXHJcbi8qXHJcbiAgICAgICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlc1xyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChmb3JtVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1WYWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4qL1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldENhc2UoY2FzZUlEOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jYXNlU2VydmljZS5nZXRDYXNlKGNhc2VJRClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGFjYXNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2FzZSA9IGFjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2RlYnVnKXtjb25zb2xlLmxvZyhcIjE6IFwiK0FQUF9EQVRFVElNRS5USU1FK1wiOiBcIit0aGlzLm15Q2FzZS5tYXBfbnVtYmVyK1wiIDogXCIrdGhpcy5zZWxlY3RlZE1hcCk7fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zZWxlY3RlZE1hcCA9IHRoaXMubXlDYXNlLm1hcF9udW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEFuYWx5c3QgPSBhY2FzZS5hbmFseXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRRQ1Jldmlld2VyID0gYWNhc2UucWNfcmV2aWV3ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZXU1Jldmlld2VyID0gYWNhc2UuZndzX3Jldmlld2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2xzKHRoaXMuX215Q2FzZV9maWVsZHMsIHRoaXMuX2Nhc2VDb250cm9scywgdGhpcy5teUNhc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldFVzZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHByaXZhdGUgX2dldENhc2VmaWxlcyhjYXNlSUQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2Nhc2VmaWxlU2VydmljZS5nZXRDYXNlZmlsZXMobmV3IFVSTFNlYXJjaFBhcmFtcygnY2FzZT0nK2Nhc2VJRCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgY2FzZWZpbGVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2FzZWZpbGVzID0gY2FzZWZpbGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy51cGRhdGVDb250cm9scyh0aGlzLm15Q2FzZV9maWVsZHMsIHRoaXMuY2FzZUNvbnRyb2xzLCB0aGlzLm15Q2FzZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0UHJvcGVydGllcyhjYXNlSUQ6IG51bWJlciB8IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3Byb3BlcnR5U2VydmljZS5nZXRQcm9wZXJ0aWVzKG5ldyBVUkxTZWFyY2hQYXJhbXMoJ2Nhc2U9JytjYXNlSUQpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teVByb3BlcnR5ID0gcHJvcGVydGllc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb250cm9scyh0aGlzLl9teVByb3BlcnR5X2ZpZWxkcywgdGhpcy5fcHJvcGVydHlDb250cm9scywgdGhpcy5teVByb3BlcnR5KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRSZXF1ZXN0ZXJzKGNhc2VJRDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdGVyU2VydmljZS5nZXRSZXF1ZXN0ZXJzKG5ldyBVUkxTZWFyY2hQYXJhbXMoJ2Nhc2U9JytjYXNlSUQpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdGVycyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teVJlcXVlc3RlciA9IHJlcXVlc3RlcnNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ29udHJvbHModGhpcy5fbXlSZXF1ZXN0ZXJfZmllbGRzLCB0aGlzLl9yZXF1ZXN0ZXJDb250cm9scywgdGhpcy5teVJlcXVlc3Rlcik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0Q29tbWVudHMoY2FzZUlEOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9jb21tZW50U2VydmljZS5nZXRDb21tZW50cyhuZXcgVVJMU2VhcmNoUGFyYW1zKCdjYXNlPScrY2FzZUlEKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q29tbWVudHMgPSBjb21tZW50cztcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IGNvbW1lbnRzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRDb21tZW50Q29udHJvbChjb21tZW50c1tpXS5jb21tZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0Q2FzZXRhZ3MoY2FzZUlEOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9jYXNldGFnU2VydmljZS5nZXRDYXNldGFncyhuZXcgVVJMU2VhcmNoUGFyYW1zKCdjYXNlPScrY2FzZUlEKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGNhc2V0YWdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15Q2FzZXRhZ3MgPSBjYXNldGFncztcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IGNhc2V0YWdzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRDYXNldGFnQ29udHJvbChjYXNldGFnc1tpXS50YWduYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0VGFncygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFRhZ3MoKSB7XHJcbiAgICAgICAgdGhpcy5fdGFnU2VydmljZS5nZXRUYWdzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHRhZ3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlUYWdzID0gdGFncztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWlsZFRhZ09wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9idWlsZFRhZ09wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVUYWdzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgbGV0IHVzZWRUYWdJRHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHRoaXMubXlDYXNldGFncy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICAgICAgdXNlZFRhZ0lEcy5wdXNoKHRoaXMubXlDYXNldGFnc1tpXS50YWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHRoaXMubXlUYWdzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXNlZFRhZ0lEcy5pbmRleE9mKHRoaXMubXlUYWdzW2ldLmlkKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlVGFncy5wdXNoKHRoaXMubXlUYWdzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfZ2V0U3lzdGVtdW5pdHMoKSB7XHJcbiAgICAgICAgdGhpcy5fc3lzdGVtdW5pdFNlcnZpY2UuZ2V0U3lzdGVtdW5pdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgc3lzdGVtdW5pdHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlTeXN0ZW11bml0cyA9IHN5c3RlbXVuaXRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2RlYnVnKXtjb25zb2xlLmxvZyhcIjI6IFwiK0FQUF9EQVRFVElNRS5USU1FK1wiOiBcIit0aGlzLm15Q2FzZS5tYXBfbnVtYmVyK1wiIDogXCIrdGhpcy5zZWxlY3RlZE1hcCk7fVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbGV0IHVuaXRJRCA9ICh0aGlzLm15Q2FzZS5jYnJzX3VuaXQgPyB0aGlzLm15Q2FzZS5jYnJzX3VuaXQgOiB0aGlzLm15U3lzdGVtdW5pdHNbMF0uaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5nZXRTeXN0ZW1tYXBzKHVuaXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXlDYXNlLmNicnNfdW5pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN5c3RlbW1hcHModGhpcy5teUNhc2UuY2Jyc191bml0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9oaWJpdGlvbmRhdGVzKHRoaXMubXlDYXNlLmNicnNfdW5pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90cmVhZHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldFN5c3RlbW1hcHModW5pdElEOiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zeXN0ZW1tYXBTZXJ2aWNlLmdldFN5c3RlbW1hcHMobmV3IFVSTFNlYXJjaFBhcmFtcygndW5pdD0nK3VuaXRJRCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBzeXN0ZW1tYXBzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15U3lzdGVtbWFwcyA9IHN5c3RlbW1hcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubXlTeXN0ZW1tYXBzLmxlbmd0aCA9PSAwKSB7IHRoaXMubWFwc2ZvdW5kID0gZmFsc2U7IH0gLy9hbGVydCgnTm8gbWFwcyBmb3VuZCBmb3IgdGhpcyB1bml0LicpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwc2ZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fZGVidWcpe2NvbnNvbGUubG9nKFwiMzogXCIrQVBQX0RBVEVUSU1FLlRJTUUrXCI6IFwiK3RoaXMubXlDYXNlLm1hcF9udW1iZXIrXCIgOiBcIit0aGlzLnNlbGVjdGVkTWFwKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvbnRyb2woXCJtYXBfbnVtYmVyXCIsIHRoaXMuX215Q2FzZV9maWVsZHMsIHRoaXMuX2Nhc2VDb250cm9scywgdGhpcy5teVN5c3RlbW1hcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9kZWJ1Zyl7Y29uc29sZS5sb2coXCI0OiBcIitBUFBfREFURVRJTUUuVElNRStcIjogXCIrdGhpcy5teUNhc2UubWFwX251bWJlcitcIiA6IFwiK3RoaXMuc2VsZWN0ZWRNYXApOyBjb25zb2xlLmxvZyh0aGlzLm15U3lzdGVtbWFwcyk7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xldCBtYXBJRCA9ICh0aGlzLm15Q2FzZS5tYXBfbnVtYmVyID8gdGhpcy5teUNhc2UubWFwX251bWJlciA6IHRoaXMubXlTeXN0ZW1tYXBzWzBdLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmdldFN5c3RlbW1hcGRhdGUobWFwSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5teUNhc2UubWFwX251bWJlcikge3RoaXMuZ2V0U3lzdGVtbWFwZGF0ZSh0aGlzLm15Q2FzZS5tYXBfbnVtYmVyKX1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN5c3RlbW1hcGRhdGUobWFwSUQpIHtcclxuICAgICAgICBpZiAoIW1hcElEKSB7dGhpcy5fY2FzZUNvbnRyb2xzW1wiY2Jyc19tYXBfZGF0ZVwiXS51cGRhdGVWYWx1ZShcIlwiKTt9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBtYXBzID0gdGhpcy5teVN5c3RlbW1hcHMuZmlsdGVyKGZ1bmN0aW9uIChtYXApIHtyZXR1cm4gbWFwLmlkID09IG1hcElEO30pO1xyXG4gICAgICAgICAgICB0aGlzLl9jYXNlQ29udHJvbHNbXCJjYnJzX21hcF9kYXRlXCJdLnVwZGF0ZVZhbHVlKG1hcHNbMF0ubWFwX2RhdGUpO1xyXG4gICAgICAgICAgICBpZih0aGlzLl9kZWJ1Zyl7Y29uc29sZS5sb2coXCI1OiBcIitBUFBfREFURVRJTUUuVElNRStcIjogXCIrdGhpcy5teUNhc2UubWFwX251bWJlcitcIiA6IFwiK3RoaXMuc2VsZWN0ZWRNYXApO31cclxuICAgICAgICAgICAgLy90aGlzLnVwZGF0ZUNvbnRyb2woXCJjYnJzX21hcF9kYXRlXCIsIHRoaXMubXlDYXNlX2ZpZWxkcywgdGhpcy5jYXNlQ29udHJvbHMsIHRoaXMubXlTeXN0ZW1tYXBzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZVJlYWRPbmx5UHJvaGliaXRpb25EYXRlKGRldGVybWluYXRpb24pIHtcclxuICAgICAgICBpZiAoZGV0ZXJtaW5hdGlvbiA9PSAyIHx8IGRldGVybWluYXRpb24gPT0gNCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYXNlQ29udHJvbHNbXCJwcm9oaWJpdGlvbl9kYXRlXCJdLnVwZGF0ZVZhbHVlKG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLmlzcmVhZG9ubHlfcHJvaGliaXRpb25kYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNyZWFkb25seV9wcm9oaWJpdGlvbmRhdGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcnMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgdXNlcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlVc2VycyA9IHVzZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2J1aWxkVXNlck9wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfYnVpbGRVc2VyT3B0aW9ucyhmb3JtQ29udHJvbD8sIHVzZXJJRD8pIHtcclxuXHJcbiAgICAgICAgbGV0IHVzZWRVc2VySURzID0gW107XHJcbiAgICAgICAgbGV0IGF2YWlsYWJsZVVzZXJJRHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gY2xlYXIgb3V0IHRoZSBzZWxlY3QgbGlzdHMgZm9yIGV2ZXJ5IHVzZXIgZmllbGQgaW4gb3JkZXIgdG8gcmVidWlsZCB0aGVtIHdpdGggdGhlIGxhdGVzdCBhcHBsaWNhdGlvbiBzdGF0ZSBpbmZvcm1hdGlvblxyXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQW5hbHlzdHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmF2YWlsYWJsZVFDUmV2aWV3ZXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVGV1NSZXZpZXdlcnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgLy8gbWFrZSBhIGxpc3Qgb2YgdXNlciBJRHMgdGhhdCBhcmUgYWxyZWFkeSBpbiB1c2UgKFwidXNlZFVzZXJJRHNcIilcclxuICAgICAgICAvLyB0aGUgY29udGVudCBvZiB0aGlzIGxpc3QgZGVwZW5kcyBvbiB3aGV0aGVyIGEgZm9ybUNvbnRyb2wgaGFzIGp1c3QgYmVlbiB1cGRhdGVkIChvbmUgb2YgdGhlIHN3aXRjaCBjYXNlcykgb3Igbm90IChkZWZhdWx0KVxyXG4gICAgICAgIHN3aXRjaCAoZm9ybUNvbnRyb2wpIHtcclxuICAgICAgICAgICAgY2FzZSAnYW5hbHlzdCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5teUNhc2UucWNfcmV2aWV3ZXIpIHt1c2VkVXNlcklEcy5wdXNoKHRoaXMubXlDYXNlLnFjX3Jldmlld2VyKTt9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5teUNhc2UuZndzX3Jldmlld2VyKSB7dXNlZFVzZXJJRHMucHVzaCh0aGlzLm15Q2FzZS5md3NfcmV2aWV3ZXIpO31cclxuICAgICAgICAgICAgICAgIGlmICh1c2VySUQgJiYgdXNlZFVzZXJJRHMuaW5kZXhPZih1c2VySUQpIDwgMCkge3VzZWRVc2VySURzLnB1c2goTnVtYmVyKHVzZXJJRCkpO31cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdxY19yZXZpZXdlcic6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5teUNhc2UuYW5hbHlzdCkge3VzZWRVc2VySURzLnB1c2godGhpcy5teUNhc2UuYW5hbHlzdCk7fVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXlDYXNlLmZ3c19yZXZpZXdlcikge3VzZWRVc2VySURzLnB1c2godGhpcy5teUNhc2UuZndzX3Jldmlld2VyKTt9XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcklEICYmIHVzZWRVc2VySURzLmluZGV4T2YodXNlcklEKSA8IDApIHt1c2VkVXNlcklEcy5wdXNoKE51bWJlcih1c2VySUQpKTt9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZndzX3Jldmlld2VyJzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm15Q2FzZS5hbmFseXN0KSB7dXNlZFVzZXJJRHMucHVzaCh0aGlzLm15Q2FzZS5hbmFseXN0KTt9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5teUNhc2UucWNfcmV2aWV3ZXIpIHt1c2VkVXNlcklEcy5wdXNoKHRoaXMubXlDYXNlLnFjX3Jldmlld2VyKTt9XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlcklEICYmIHVzZWRVc2VySURzLmluZGV4T2YodXNlcklEKSA8IDApIHt1c2VkVXNlcklEcy5wdXNoKE51bWJlcih1c2VySUQpKTt9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm15Q2FzZS5hbmFseXN0KSB7dXNlZFVzZXJJRHMucHVzaCh0aGlzLm15Q2FzZS5hbmFseXN0KTt9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5teUNhc2UucWNfcmV2aWV3ZXIpIHt1c2VkVXNlcklEcy5wdXNoKHRoaXMubXlDYXNlLnFjX3Jldmlld2VyKTt9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5teUNhc2UuZndzX3Jldmlld2VyKSB7dXNlZFVzZXJJRHMucHVzaCh0aGlzLm15Q2FzZS5md3NfcmV2aWV3ZXIpO31cclxuICAgICAgICAgICAgICAgIGlmICh1c2VySUQgJiYgdXNlZFVzZXJJRHMuaW5kZXhPZih1c2VySUQpIDwgMCkge3VzZWRVc2VySURzLnB1c2goTnVtYmVyKHVzZXJJRCkpO31cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWxsb3cgZWFjaCBzZWxlY3QgbGlzdCB0byBjb250YWluIGFueSB1bnVzZWQgdXNlcnNcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHRoaXMubXlVc2Vycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHVzZWRVc2VySURzLmluZGV4T2YodGhpcy5teVVzZXJzW2ldLmlkKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQW5hbHlzdHMucHVzaCh0aGlzLm15VXNlcnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVRQ1Jldmlld2Vycy5wdXNoKHRoaXMubXlVc2Vyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUZXU1Jldmlld2Vycy5wdXNoKHRoaXMubXlVc2Vyc1tpXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWxzbyBzdG9yZSB0aGVzZSB1bnVzZWQvYXZhaWxhYmxlIHVzZXIgSURzIChcImF2YWlsYWJsZVVzZXJJRHNcIikgZm9yIGxhdGVyIGNvbXBhcmlzb24gdG8gYXZvaWQgZHVwbGljYXRlc1xyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlVXNlcklEcy5wdXNoKHRoaXMubXlVc2Vyc1tpXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZvciB0aGUgYW5hbHlzdCBzZWxlY3QgbGlzdCBvbmx5LCBhZGQgYmFjayB0aGUgYW5hbHlzdCBhc3NpZ25lZCBmcm9tIHRoZSBkYXRhYmFzZSBhbmQvb3IgYSB1c2VyLXNlbGVjdGVkIGFuYWx5c3RcclxuICAgICAgICBsZXQgYWRkQW5hbHlzdFVzZXJJRHMgPSBbXTtcclxuICAgICAgICBsZXQgY2FzZUFuYWx5c3RVc2VySUQgPSB0aGlzLm15Q2FzZS5hbmFseXN0O1xyXG4gICAgICAgIC8vIGlmIHRoZSBhbmFseXN0IGZvcm1Db250cm9sIHdhcyBjaGFuZ2VkLCBhZGQgdGhlIHNlbGVjdGVkIHZhbHVlIHRvIHRoZSBhbmFseXN0IHNlbGVjdCBsaXN0XHJcbiAgICAgICAgaWYgKGZvcm1Db250cm9sID09ICdhbmFseXN0Jykge2FkZEFuYWx5c3RVc2VySURzLnB1c2goTnVtYmVyKHVzZXJJRCkpOyB0aGlzLnNlbGVjdGVkQW5hbHlzdCA9IHVzZXJJRH1cclxuICAgICAgICAvLyBvdGhlcndpc2UsIGlmIHRoZSBhbmFseXN0IGZvcm1Db250cm9sIHdhcyBub3QgY2hhbmdlZCwgYWRkIGJhY2sgdGhlIGFuYWx5c3QgYXNzaWduZWQgZnJvbSB0aGUgZGF0YWJhc2VcclxuICAgICAgICBlbHNlIGlmIChjYXNlQW5hbHlzdFVzZXJJRCkge2FkZEFuYWx5c3RVc2VySURzLnB1c2goY2FzZUFuYWx5c3RVc2VySUQpOyB0aGlzLnNlbGVjdGVkQW5hbHlzdCA9IGNhc2VBbmFseXN0VXNlcklEO31cclxuICAgICAgICAvLyBpZiB0aGUgYW5hbHlzdCBmb3JtQ29udHJvbCB3YXMgY2hhbmdlZCwgYnV0IHRoZSBzZWxlY3RlZCB2YWx1ZSB3YXMgbm90IGEgdXNlciAoaS5lLiwgbnVsbCksIGFuZCB0aGUgYW5hbHlzdCBhc3NpZ25lZCBmcm9tIHRoZSBkYXRhYmFzZSBoYXMgbm90IGJlZW4gcmUtYXNzaWduZWQgYWxyZWFkeSwgYWRkIGJhY2sgdGhlIGFuYWx5c3QgYXNzaWduZWQgZnJvbSB0aGUgZGF0YWJhc2VcclxuICAgICAgICBpZiAoZm9ybUNvbnRyb2wgPT0gJ2FuYWx5c3QnICYmICF1c2VySUQpIHtpZiAoY2FzZUFuYWx5c3RVc2VySUQgJiYgYXZhaWxhYmxlVXNlcklEcy5pbmRleE9mKGNhc2VBbmFseXN0VXNlcklEKSA8IDApIHthZGRBbmFseXN0VXNlcklEcy5wdXNoKGNhc2VBbmFseXN0VXNlcklEKTt9fVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gdGhpcy5teVVzZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYWRkQW5hbHlzdFVzZXJJRHMuaW5kZXhPZih0aGlzLm15VXNlcnNbaV0uaWQpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQW5hbHlzdHMucHVzaCh0aGlzLm15VXNlcnNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmb3IgdGhlIHFjX3Jldmlld2VyIHNlbGVjdCBsaXN0IG9ubHksIGFkZCBiYWNrIHRoZSBxY19yZXZpZXdlciBhc3NpZ25lZCBmcm9tIHRoZSBkYXRhYmFzZSBhbmQvb3IgYSB1c2VyLXNlbGVjdGVkIHFjX3Jldmlld2VyXHJcbiAgICAgICAgbGV0IGFkZFFDUmV2aWV3ZXJVc2VySURzID0gW107XHJcbiAgICAgICAgbGV0IGNhc2VRQ1Jldmlld2VyVXNlcklEID0gdGhpcy5teUNhc2UucWNfcmV2aWV3ZXI7XHJcbiAgICAgICAgLy8gaWYgdGhlIHFjX3Jldmlld2VyIGZvcm1Db250cm9sIHdhcyBjaGFuZ2VkLCBhZGQgdGhlIHNlbGVjdGVkIHZhbHVlIHRvIHRoZSBxY19yZXZpZXdlciBzZWxlY3QgbGlzdFxyXG4gICAgICAgIGlmIChmb3JtQ29udHJvbCA9PSAncWNfcmV2aWV3ZXInKSB7YWRkUUNSZXZpZXdlclVzZXJJRHMucHVzaChOdW1iZXIodXNlcklEKSk7IHRoaXMuc2VsZWN0ZWRRQ1Jldmlld2VyID0gdXNlcklEfVxyXG4gICAgICAgIC8vIG90aGVyd2lzZSwgaWYgdGhlIHFjX3Jldmlld2VyIGZvcm1Db250cm9sIHdhcyBub3QgY2hhbmdlZCwgYWRkIGJhY2sgdGhlIHFjX3Jldmlld2VyIGFzc2lnbmVkIGZyb20gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgZWxzZSBpZiAoY2FzZVFDUmV2aWV3ZXJVc2VySUQpIHthZGRRQ1Jldmlld2VyVXNlcklEcy5wdXNoKGNhc2VRQ1Jldmlld2VyVXNlcklEKTsgdGhpcy5zZWxlY3RlZFFDUmV2aWV3ZXIgPSBjYXNlUUNSZXZpZXdlclVzZXJJRDt9XHJcbiAgICAgICAgLy8gaWYgdGhlIHFjX3Jldmlld2VyIGZvcm1Db250cm9sIHdhcyBjaGFuZ2VkLCBidXQgdGhlIHNlbGVjdGVkIHZhbHVlIHdhcyBub3QgYSB1c2VyIChpLmUuLCBudWxsKSwgYW5kIHRoZSBxY19yZXZpZXdlciBhc3NpZ25lZCBmcm9tIHRoZSBkYXRhYmFzZSBoYXMgbm90IGJlZW4gcmUtYXNzaWduZWQgYWxyZWFkeSwgYWRkIGJhY2sgdGhlIHFjX3Jldmlld2VyIGFzc2lnbmVkIGZyb20gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgaWYgKGZvcm1Db250cm9sID09ICdxY19yZXZpZXdlcicgJiYgIXVzZXJJRCkge2lmIChjYXNlUUNSZXZpZXdlclVzZXJJRCAmJiBhdmFpbGFibGVVc2VySURzLmluZGV4T2YoY2FzZVFDUmV2aWV3ZXJVc2VySUQpIDwgMCkge2FkZFFDUmV2aWV3ZXJVc2VySURzLnB1c2goY2FzZVFDUmV2aWV3ZXJVc2VySUQpO319XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB0aGlzLm15VXNlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhZGRRQ1Jldmlld2VyVXNlcklEcy5pbmRleE9mKHRoaXMubXlVc2Vyc1tpXS5pZCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVRQ1Jldmlld2Vycy5wdXNoKHRoaXMubXlVc2Vyc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZvciB0aGUgZndzX3Jldmlld2VyIHNlbGVjdCBsaXN0IG9ubHksIGFkZCBiYWNrIHRoZSBmd3NfcmV2aWV3ZXIgYXNzaWduZWQgZnJvbSB0aGUgZGF0YWJhc2UgYW5kL29yIGEgdXNlci1zZWxlY3RlZCBmd3NfcmV2aWV3ZXJcclxuICAgICAgICBsZXQgYWRkRldTUmV2aWV3ZXJVc2VySURzID0gW107XHJcbiAgICAgICAgbGV0IGNhc2VGV1NSZXZpZXdlclVzZXJJRCA9IHRoaXMubXlDYXNlLmZ3c19yZXZpZXdlcjtcclxuICAgICAgICAvLyBpZiB0aGUgZndzX3Jldmlld2VyIGZvcm1Db250cm9sIHdhcyBjaGFuZ2VkLCBhZGQgdGhlIHNlbGVjdGVkIHZhbHVlIHRvIHRoZSBmd3NfcmV2aWV3ZXIgc2VsZWN0IGxpc3RcclxuICAgICAgICBpZiAoZm9ybUNvbnRyb2wgPT0gJ2Z3c19yZXZpZXdlcicpIHthZGRGV1NSZXZpZXdlclVzZXJJRHMucHVzaChOdW1iZXIodXNlcklEKSk7IHRoaXMuc2VsZWN0ZWRGV1NSZXZpZXdlciA9IHVzZXJJRDt9XHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlLCBpZiB0aGUgZndzX3Jldmlld2VyIGZvcm1Db250cm9sIHdhcyBub3QgY2hhbmdlZCwgYWRkIGJhY2sgdGhlIGZ3c19yZXZpZXdlciBhc3NpZ25lZCBmcm9tIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIGVsc2UgaWYgKGNhc2VGV1NSZXZpZXdlclVzZXJJRCkge2FkZEZXU1Jldmlld2VyVXNlcklEcy5wdXNoKGNhc2VGV1NSZXZpZXdlclVzZXJJRCk7IHRoaXMuc2VsZWN0ZWRGV1NSZXZpZXdlciA9IGNhc2VGV1NSZXZpZXdlclVzZXJJRDt9XHJcbiAgICAgICAgLy8gaWYgdGhlIGZ3c19yZXZpZXdlciBmb3JtQ29udHJvbCB3YXMgY2hhbmdlZCwgYnV0IHRoZSBzZWxlY3RlZCB2YWx1ZSB3YXMgbm90IGEgdXNlciAoaS5lLiwgbnVsbCksIGFuZCB0aGUgZndzX3Jldmlld2VyIGFzc2lnbmVkIGZyb20gdGhlIGRhdGFiYXNlIGhhcyBub3QgYmVlbiByZS1hc3NpZ25lZCBhbHJlYWR5LCBhZGQgYmFjayB0aGUgZndzX3Jldmlld2VyIGFzc2lnbmVkIGZyb20gdGhlIGRhdGFiYXNlXHJcbiAgICAgICAgaWYgKGZvcm1Db250cm9sID09ICdmd3NfcmV2aWV3ZXInICYmICF1c2VySUQpIHtpZiAoY2FzZUZXU1Jldmlld2VyVXNlcklEICYmIGF2YWlsYWJsZVVzZXJJRHMuaW5kZXhPZihjYXNlRldTUmV2aWV3ZXJVc2VySUQpIDwgMCkge2FkZEZXU1Jldmlld2VyVXNlcklEcy5wdXNoKGNhc2VGV1NSZXZpZXdlclVzZXJJRCk7fX1cclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHRoaXMubXlVc2Vycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFkZEZXU1Jldmlld2VyVXNlcklEcy5pbmRleE9mKHRoaXMubXlVc2Vyc1tpXS5pZCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVGV1NSZXZpZXdlcnMucHVzaCh0aGlzLm15VXNlcnNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldERldGVybWluYXRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuX2RldGVybWluYXRpb25TZXJ2aWNlLmdldERldGVybWluYXRpb25zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRldGVybWluYXRpb25zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15RGV0ZXJtaW5hdGlvbnMgPSBkZXRlcm1pbmF0aW9ucztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBnZXRQcm9oaWJpdGlvbmRhdGVzKHVuaXRJRDogbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvaGliaXRpb25kYXRlU2VydmljZS5nZXRQcm9oaWJpdGlvbmRhdGVzKG5ldyBVUkxTZWFyY2hQYXJhbXMoJ3VuaXQ9Jyt1bml0SUQpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgcHJvaGliaXRpb25kYXRlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teVByb2hpYml0aW9uZGF0ZXMgPSBwcm9oaWJpdGlvbmRhdGVzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBidWlsZFN5c3RlbW1hcGRhdGVPcHRpb25zKG1hcElEKSB7XHJcbiAgICAgICAgdGhpcy5hdmFpbGFibGVTeXN0ZW1tYXBkYXRlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gdGhpcy5teVN5c3RlbW1hcHMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm15U3lzdGVtbWFwc1tpXS5pZCA9PSBtYXBJRCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlU3lzdGVtbWFwZGF0ZXMuaW5kZXhPZih0aGlzLm15U3lzdGVtbWFwc1tpXS5tYXBfZGF0ZSkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHsnaWQnOiB0aGlzLm15U3lzdGVtbWFwc1tpXS5pZCwgJ21hcF9kYXRlJzogdGhpcy5teVN5c3RlbW1hcHNbaV0ubWFwX2RhdGV9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlU3lzdGVtbWFwZGF0ZXMucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgKi9cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfZ2V0RmllbGRvZmZpY2VzKCkge1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkb2ZmaWNlU2VydmljZS5nZXRGaWVsZG9mZmljZXMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZmllbGRvZmZpY2VzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15RmllbGRvZmZpY2VzID0gZmllbGRvZmZpY2VzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbW1lbnQobmV3Y29tbWVudCkge1xyXG4gICAgICAgIGlmICghbmV3Y29tbWVudCkge3JldHVybjt9XHJcbiAgICAgICAgbGV0IG1hdGNoaW5nQ29tbWVudCA9IHRoaXMubXlDb21tZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNvbW1lbnQpIHtyZXR1cm4gY29tbWVudC5jb21tZW50ID09IG5ld2NvbW1lbnQ7fSk7XHJcbiAgICAgICAgaWYgKG1hdGNoaW5nQ29tbWVudFswXSkgeyB0aGlzLmNvbW1lbnRVbmlxdWUgPSBmYWxzZTsgcmV0dXJuOyB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWVudFVuaXF1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbW1lbnRTZXJ2aWNlLmNyZWF0ZUNvbW1lbnQobmV3IENvbW1lbnQodGhpcy5jYXNlX0lELCBuZXdjb21tZW50KSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlDb21tZW50cy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hZGRDb21tZW50Q29udHJvbChjb21tZW50LmNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZENhc2V0YWcobmV3dGFnKSB7XHJcbiAgICAgICAgaWYgKCFuZXd0YWcpIHtyZXR1cm47fVxyXG4gICAgICAgIHRoaXMuX2Nhc2V0YWdTZXJ2aWNlLmNyZWF0ZUNhc2V0YWcobmV3IENhc2V0YWcodGhpcy5jYXNlX0lELCBuZXd0YWcpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgY2FzZXRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUNhc2V0YWdzLnB1c2goY2FzZXRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYnVpbGRUYWdPcHRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkQ2FzZXRhZ0NvbnRyb2woY2FzZXRhZy50YWduYW1lKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDYXNldGFnKG9sZHRhZykge1xyXG4gICAgICAgIHRoaXMuX2Nhc2V0YWdTZXJ2aWNlLmRlbGV0ZUNhc2V0YWcob2xkdGFnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgY2FzZXRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0Q2FzZXRhZ3ModGhpcy5jYXNlX0lEKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0U2lnbm9mZkRhdGVUb2RheShmaWVsZDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGNvbnRyb2xOYW1lID0gZmllbGQgKyBcIl9zaWdub2ZmX2RhdGVcIjtcclxuICAgICAgICAvL2lmICh0aGlzLl91c2VyRmllbGRzLmluZGV4T2YoZmllbGQpID4gLTEpIHtcclxuICAgICAgICAvLyAgICB0aGlzLmNhc2VDb250cm9sc1tjb250cm9sTmFtZV0udXBkYXRlVmFsdWUodGhpcy5fdG9kYXkpO1xyXG4gICAgICAgIC8vfVxyXG4gICAgICAgIGlmICh0aGlzLmNhc2Vncm91cC5jb250YWlucyhjb250cm9sTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FzZUNvbnRyb2xzW2NvbnRyb2xOYW1lXS51cGRhdGVWYWx1ZShBUFBfREFURVRJTUUuVE9EQVkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaW5hbExldHRlckRhdGUoY2hlY2tlZCkge1xyXG4gICAgICAgIGlmKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FzZUNvbnRyb2xzW1wiZmluYWxfbGV0dGVyX2RhdGVcIl0udXBkYXRlVmFsdWUoQVBQX0RBVEVUSU1FLlRPREFZKTtcclxuICAgICAgICAgICAgbGV0IGNsb3NlX2Nhc2UgPSBjb25maXJtKFwiRG8geW91IGFsc28gd2FudCB0byBjbG9zZSB0aGlzIGNhc2U/XCIpO1xyXG4gICAgICAgICAgICBpZiAoY2xvc2VfY2FzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FzZUNvbnRyb2xzW1wiY2xvc2VfZGF0ZVwiXS51cGRhdGVWYWx1ZShBUFBfREFURVRJTUUuVE9EQVkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge3RoaXMuX2Nhc2VDb250cm9sc1tcImNsb3NlX2RhdGVcIl0udXBkYXRlVmFsdWUoXCJcIik7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHt0aGlzLl9jYXNlQ29udHJvbHNbXCJmaW5hbF9sZXR0ZXJfZGF0ZVwiXS51cGRhdGVWYWx1ZShcIlwiKTt9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsZURyYWdIb3ZlcihmaWxlSW5wdXQpIHtcclxuICAgICAgICBmaWxlSW5wdXQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZmlsZUlucHV0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy9maWxlSW5wdXQudGFyZ2V0LmNsYXNzTmFtZSA9IChmaWxlSW5wdXQudHlwZSA9PSBcImRyYWdvdmVyXCIgPyBcImhvdmVyXCIgOiBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxlU2VsZWN0SGFuZGxlcihmaWxlSW5wdXQ6IGFueSl7XHJcbiAgICAgICAgdGhpcy5maWxlRHJhZ0hvdmVyKGZpbGVJbnB1dCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkRmlsZXMgPSA8QXJyYXk8RmlsZT4+IGZpbGVJbnB1dC50YXJnZXQuZmlsZXMgfHwgZmlsZUlucHV0LmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHNlbGVjdGVkRmlsZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpbGVzVG9VcGxvYWQucHVzaChzZWxlY3RlZEZpbGVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGY7IGYgPSB0aGlzLl9maWxlc1RvVXBsb2FkW2ldOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGZpbGVEZXRhaWxzID0geyduYW1lJzogZi5uYW1lLCAnc2l6ZSc6ICgoZi5zaXplKS8xMDI0LzEwMjQpLnRvRml4ZWQoMyl9O1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzVG9VcGxvYWREZXRhaWxzLnB1c2goZmlsZURldGFpbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDYXNlZmlsZShpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZmlsZXNUb1VwbG9hZC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuZmlsZXNUb1VwbG9hZERldGFpbHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWxsQ3JlYXRlQ2FzZWZpbGVzICgpIHtcclxuICAgICAgICAvLyBjcmVhdGUgdGhlIG5ldyBjYXNlZmlsZXNcclxuICAgICAgICB0aGlzLl9jYXNlZmlsZVNlcnZpY2UuY3JlYXRlQ2FzZWZpbGVzKHRoaXMubXlDYXNlLmlkLCB0aGlzLl9maWxlc1RvVXBsb2FkKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVMZXR0ZXIgKCkge1xyXG4gICAgICAgIHRoaXMuX2Nhc2VTZXJ2aWNlLmNyZWF0ZUZpbmFsTGV0ZXIodGhpcy5jYXNlX0lEKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtkYXRhWzBdXSx7IHR5cGU6IFwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnRcIiB9KTtcclxuICAgICAgICAgICAgICAgIHNhdmVBcyhibG9iLCBkYXRhWzFdKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuX2Nhc2VTZXJ2aWNlLmNyZWF0ZUZpbmFsTGV0ZXIodGhpcy5jYXNlX0lEKVxyXG4gICAgICAgIC8vIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAvLyAgIC8vIGNyZWF0ZSBhIGJsb2IgdXJsIHJlcHJlc2VudGluZyB0aGUgZGF0YVxyXG4gICAgICAgIC8vICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbZGF0YV0seyB0eXBlOiBcImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50XCIgfSk7XHJcbiAgICAgICAgLy8gICB2YXIgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgLy8gICAvLyBhdHRhY2ggYmxvYiB1cmwgdG8gYW5jaG9yIGVsZW1lbnQgd2l0aCBkb3dubG9hZCBhdHRyaWJ1dGVcclxuICAgICAgICAvLyAgIHZhciBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgLy8gICBhbmNob3Iuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcclxuICAgICAgICAvLyAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgXCJkb2MuZG9jeFwiKTtcclxuICAgICAgICAvLyAgIGFuY2hvci5jbGljaygpO1xyXG4gICAgICAgIC8vICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgQVBQX1NFVFRJTkdTLkNBU0VTX1VSTCsnP2Nhc2VfbnVtYmVyPScrdGhpcy5jYXNlX0lEKycmZm9ybWF0PWRvY3gnKTtcclxuICAgICAgICAvLyBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiXCIpO1xyXG4gICAgICAgIC8vIGxpbmsuc2V0QXR0cmlidXRlKFwidXNlcm5hbWVcIiwgXCJmcmVkXCIpOy8vYnRvYShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpKSk7XHJcbiAgICAgICAgLy8gbGluay5zZXRBdHRyaWJ1dGUoXCJwYXNzd29yZFwiLCBcImZyZWRcIik7Ly9zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpKTtcclxuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIC8vIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gICAgfVxyXG5cclxuICAgIC8vb25TdWJtaXQgKCkge3RoaXMudXBkYXRlVmFsdWVzKHRoaXMubXlDYXNlX2ZpZWxkcywgdGhpcy5jYXNlQ29udHJvbHMsIHRoaXMubXlDYXNlKX1cclxuXHJcbiAgICBvblN1Ym1pdCAoZm9ybSkge1xyXG4gICAgICAgIC8vIGNoZWNrIGVhY2ggZm9ybUNvbnRyb2wgZ3JvdXAgZm9yIGNoYW5nZXMsIHRoZW4gc2VuZCB0aGUgY2hhbmdlZCBvYmplY3RzIHRvIHRoZWlyIHJlc3BlY3RpdmUgc2VydmljZXNcclxuICAgICAgICBpZiAoZm9ybS5kaXJ0eSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub3RyZWFkeSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2hhbmdlZENhc2VHcm91cCA9IGZvcm0uY29udHJvbHMuY2FzZWdyb3VwO1xyXG4gICAgICAgICAgICBsZXQgY2hhbmdlZFByb3BlcnR5R3JvdXAgPSBmb3JtLmNvbnRyb2xzLnByb3BlcnR5Z3JvdXA7XHJcbiAgICAgICAgICAgIGxldCBjaGFuZ2VkUmVxdWVzdGVyR3JvdXAgPSBmb3JtLmNvbnRyb2xzLnJlcXVlc3Rlcmdyb3VwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZWRDYXNlR3JvdXAuZGlydHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Nhc2VTZXJ2aWNlLnVwZGF0ZUNhc2UoY2hhbmdlZENhc2VHcm91cC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2FzZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRDYXNlKHRoaXMuY2FzZV9JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fZmlsZXNUb1VwbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxDcmVhdGVDYXNlZmlsZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoY2hhbmdlZFByb3BlcnR5R3JvdXAuZGlydHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb3BlcnR5U2VydmljZS51cGRhdGVQcm9wZXJ0eShjaGFuZ2VkUHJvcGVydHlHcm91cC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRQcm9wZXJ0aWVzKHRoaXMuY2FzZV9JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZWRSZXF1ZXN0ZXJHcm91cC5kaXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVxdWVzdGVyU2VydmljZS51cGRhdGVSZXF1ZXN0ZXIoY2hhbmdlZFJlcXVlc3Rlckdyb3VwLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RlciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRSZXF1ZXN0ZXJzKHRoaXMuY2FzZV9JRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yTWVzc2FnZSA9IDxhbnk+ZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+IHsgdGhpcy5ub3RyZWFkeSA9IGZhbHNlOyB0aGlzLmFjdGl2ZT10cnVlOyB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbn0iXX0=