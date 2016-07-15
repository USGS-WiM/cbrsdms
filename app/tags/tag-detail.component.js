"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var navbar_component_1 = require('../navbar.component');
var case_service_1 = require('../cases/case.service');
var tag_service_1 = require('./tag.service');
var tag_1 = require('./tag');
var TagDetailComponent = (function () {
    function TagDetailComponent(fb, _route, _router, _caseService, _tagService) {
        this._route = _route;
        this._router = _router;
        this._caseService = _caseService;
        this._tagService = _tagService;
        this.error = false;
        this.cases_properties = [];
        this.notready = true;
        this.editName = new forms_1.FormControl("", forms_1.Validators.required);
        this.editDescription = new forms_1.FormControl("");
        this.form = fb.group({
            "name": this.editName,
            "description": this.editDescription
        });
    }
    TagDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._params = this._route.params
            .subscribe(function (params) {
            _this.tag_ID = +params['id'];
            _this._getTag(_this.tag_ID);
        });
    };
    TagDetailComponent.prototype.ngOnDestroy = function () {
        if (this._params) {
            this._params.unsubscribe();
        }
    };
    TagDetailComponent.prototype.cancel = function () {
        this.goToTags();
    };
    TagDetailComponent.prototype.onSubmit = function (value) {
        this.notready = true;
        var newtag = new tag_1.Tag(value.name, value.description);
        this._validateTag(newtag);
    };
    TagDetailComponent.prototype.goToTags = function () {
        this._router.navigate(['/tags']);
    };
    TagDetailComponent.prototype._getTag = function (tagID) {
        var _this = this;
        this._tagService.getTag(tagID)
            .subscribe(function (tag) {
            _this.myTag = tag;
            _this.editName.updateValue(_this.myTag.name);
            _this.editDescription.updateValue(_this.myTag.description);
            _this.notready = false;
        }, function (error) { return _this._errorMessage = error; });
    };
    TagDetailComponent.prototype._validateTag = function (tag) {
        var _this = this;
        this._tagService.getTags(new http_1.URLSearchParams('name=' + tag.name))
            .subscribe(function (tags) {
            if (tag.name != _this.myTag.name && tags.length != 0) {
                _this.error = true;
                _this.notready = false;
            }
            else {
                _this.myTag.name = tag.name;
                _this.myTag.description = tag.description;
                _this._updateTag(_this.myTag);
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    TagDetailComponent.prototype._updateTag = function (tag) {
        var _this = this;
        this._tagService.updateTag(tag)
            .subscribe(function (tag) {
            _this.goToTags();
        }, function (error) { return _this._errorMessage = error; });
    };
    TagDetailComponent = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, navbar_component_1.NavbarComponent],
            providers: [http_1.HTTP_PROVIDERS, tag_service_1.TagService],
            templateUrl: '/app/tags/tag-detail.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, case_service_1.CaseService, tag_service_1.TagService])
    ], TagDetailComponent);
    return TagDetailComponent;
}());
exports.TagDetailComponent = TagDetailComponent;
//# sourceMappingURL=tag-detail.component.js.map