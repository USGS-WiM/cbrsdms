System.register(['angular2/core', 'angular2/router', 'angular2/http', '../cases/case', '../properties/property', '../requesters/requester', '../comments/comment', '../tags/tag', '../casetags/casetag', '../cases/case.service', '../casefiles/casefile.service', '../properties/property.service', '../requesters/requester.service', '../comments/comment.service', '../tags/tag.service', '../casetags/casetag.service', '../systemunits/systemunit.service', '../systemmaps/systemmap.service', '../fieldoffices/fieldoffice.service', '../users/user.service', '../determinations/determination.service', '../prohibitiondates/prohibitiondate.service', 'angular2/common', '../app.settings'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, case_1, property_1, requester_1, comment_1, tag_1, casetag_1, case_service_1, casefile_service_1, property_service_1, requester_service_1, comment_service_1, tag_service_1, casetag_service_1, systemunit_service_1, systemmap_service_1, fieldoffice_service_1, user_service_1, determination_service_1, prohibitiondate_service_1, common_1, app_settings_1;
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
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_settings_1_1) {
                app_settings_1 = app_settings_1_1;
            }],
        execute: function() {
            WorkbenchDetailComponent = (function () {
                function WorkbenchDetailComponent(fb, _routeParams, _caseService, _casefileService, _propertyService, _requesterService, _commentService, _tagService, _casetagService, _systemunitService, _systemmapService, _fieldofficeService, _userService, _determinationService, _prohibitiondateService) {
                    var _this = this;
                    this._routeParams = _routeParams;
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
                    this.filesToUploadDetails = [];
                    this.active = true;
                    this.notready = true;
                    this.noxhr = true;
                    this.isreadonly_prohibitiondate = false;
                    this._userFields = ['analyst', 'qc_reviewer', 'fws_reviewer'];
                    this._today = new Date().toISOString().substr(0, 10);
                    this._time = new Date().toISOString().substr(14, 22);
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
                        console.log("0: " + this._getTime() + ": " + this.myCase.map_number + " : " + this.selectedMap);
                    }
                    this._caseControls = this._makeControls(this._myCase_fields);
                    this._propertyControls = this._makeControls(this._myProperty_fields);
                    this._requesterControls = this._makeControls(this._myRequester_fields);
                    this.casegroup = new common_1.ControlGroup(this._caseControls);
                    this.propertygroup = new common_1.ControlGroup(this._propertyControls);
                    this.requestergroup = new common_1.ControlGroup(this._requesterControls);
                    this.commentgroup = new common_1.ControlArray(this._commentsControls);
                    this.taggroup = new common_1.ControlArray(this._casetagsControls);
                    this.form = fb.group({
                        casegroup: this.casegroup,
                        propertygroup: this.propertygroup,
                        requestergroup: this.requestergroup,
                        commentgroup: this.commentgroup,
                        taggroup: this.taggroup
                    });
                    var caseID = +this._routeParams.get('id');
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
                            console.log("6: " + _this._getTime() + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
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
                WorkbenchDetailComponent.prototype._getTime = function () { return new Date().toISOString().substr(14, 22); };
                WorkbenchDetailComponent.prototype._makeControls = function (fields) {
                    var controls = {};
                    for (var i = 0, j = fields.length; i < j; i++) {
                        if (fields[i] == "zipcode") {
                            controls[fields[i]] = new common_1.Control("", common_1.Validators.maxLength(5));
                        }
                        else {
                            controls[fields[i]] = new common_1.Control("");
                        }
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
                WorkbenchDetailComponent.prototype.updateCaseControlValue = function (control, value) {
                    this._caseControls[control].updateValue(value);
                    if (this._userFields.indexOf(control) > -1) {
                        this._buildUserOptions(control, value);
                    }
                };
                WorkbenchDetailComponent.prototype.updatePropertyControlValue = function (control, value) {
                    this._propertyControls[control].updateValue(value);
                };
                WorkbenchDetailComponent.prototype.updateRequesterControlValue = function (control, value) {
                    this._requesterControls[control].updateValue(value);
                };
                WorkbenchDetailComponent.prototype._addCommentControl = function (value) {
                    this._commentsControls.push(new common_1.Control(value));
                };
                WorkbenchDetailComponent.prototype._addCasetagControl = function (value) {
                    this._casetagsControls.push(new common_1.Control(value));
                };
                WorkbenchDetailComponent.prototype._getCase = function (caseID) {
                    var _this = this;
                    this._caseService.getCase(caseID)
                        .subscribe(function (acase) {
                        _this.myCase = acase;
                        if (_this._debug) {
                            console.log("1: " + _this._getTime() + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
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
                            console.log("2: " + _this._getTime() + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
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
                                console.log("3: " + _this._getTime() + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
                            }
                            _this._updateControl("map_number", _this._myCase_fields, _this._caseControls, _this.mySystemmaps);
                            if (_this._debug) {
                                console.log("4: " + _this._getTime() + ": " + _this.myCase.map_number + " : " + _this.selectedMap);
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
                            console.log("5: " + this._getTime() + ": " + this.myCase.map_number + " : " + this.selectedMap);
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
                WorkbenchDetailComponent.prototype._buildUserOptions = function (control, userID) {
                    var usedUserIDs = [];
                    var availableUserIDs = [];
                    // clear out the select lists for every user field in order to rebuild them with the latest application state information
                    this.availableAnalysts.length = 0;
                    this.availableQCReviewers.length = 0;
                    this.availableFWSReviewers.length = 0;
                    // make a list of user IDs that are already in use ("usedUserIDs")
                    // the content of this list depends on whether a control has just been updated (one of the switch cases) or not (default)
                    switch (control) {
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
                    // if the analyst control was changed, add the selected value to the analyst select list
                    if (control == 'analyst') {
                        addAnalystUserIDs.push(Number(userID));
                        this.selectedAnalyst = userID;
                    }
                    else if (caseAnalystUserID) {
                        addAnalystUserIDs.push(caseAnalystUserID);
                        this.selectedAnalyst = caseAnalystUserID;
                    }
                    // if the analyst control was changed, but the selected value was not a user (i.e., null), and the analyst assigned from the database has not been re-assigned already, add back the analyst assigned from the database
                    if (control == 'analyst' && !userID) {
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
                    // if the qc_reviewer control was changed, add the selected value to the qc_reviewer select list
                    if (control == 'qc_reviewer') {
                        addQCReviewerUserIDs.push(Number(userID));
                        this.selectedQCReviewer = userID;
                    }
                    else if (caseQCReviewerUserID) {
                        addQCReviewerUserIDs.push(caseQCReviewerUserID);
                        this.selectedQCReviewer = caseQCReviewerUserID;
                    }
                    // if the qc_reviewer control was changed, but the selected value was not a user (i.e., null), and the qc_reviewer assigned from the database has not been re-assigned already, add back the qc_reviewer assigned from the database
                    if (control == 'qc_reviewer' && !userID) {
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
                    // if the fws_reviewer control was changed, add the selected value to the fws_reviewer select list
                    if (control == 'fws_reviewer') {
                        addFWSReviewerUserIDs.push(Number(userID));
                        this.selectedFWSReviewer = userID;
                    }
                    else if (caseFWSReviewerUserID) {
                        addFWSReviewerUserIDs.push(caseFWSReviewerUserID);
                        this.selectedFWSReviewer = caseFWSReviewerUserID;
                    }
                    // if the fws_reviewer control was changed, but the selected value was not a user (i.e., null), and the fws_reviewer assigned from the database has not been re-assigned already, add back the fws_reviewer assigned from the database
                    if (control == 'fws_reviewer' && !userID) {
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
                    this._commentService.createComment(new comment_1.Comment(this.case_ID, newcomment))
                        .subscribe(function (comment) {
                        _this.myComments.push(comment);
                        _this._addCommentControl(comment.comment);
                    }, function (error) { return _this._errorMessage = error; });
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
                        this._caseControls[controlName].updateValue(this._today);
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
                //onSubmit () {this.updateValues(this.myCase_fields, this.caseControls, this.myCase)}
                WorkbenchDetailComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    // check each form control group for changes, then send the changed objects to their respective services
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
                        directives: [common_1.FORM_DIRECTIVES],
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
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.RouteParams, case_service_1.CaseService, casefile_service_1.CasefileService, property_service_1.PropertyService, requester_service_1.RequesterService, comment_service_1.CommentService, tag_service_1.TagService, casetag_service_1.CasetagService, systemunit_service_1.SystemunitService, systemmap_service_1.SystemmapService, fieldoffice_service_1.FieldofficeService, user_service_1.UserService, determination_service_1.DeterminationService, prohibitiondate_service_1.ProhibitiondateService])
                ], WorkbenchDetailComponent);
                return WorkbenchDetailComponent;
            }());
            exports_1("WorkbenchDetailComponent", WorkbenchDetailComponent);
        }
    }
});
//# sourceMappingURL=workbench-detail.component.js.map