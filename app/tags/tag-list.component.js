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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var navbar_component_1 = require('../navbar.component');
var tag_service_1 = require('./tag.service');
var tag_1 = require('./tag');
var TagListComponent = (function () {
    function TagListComponent(fb, _tagService, _router) {
        this._tagService = _tagService;
        this._router = _router;
        this.error = false;
        this.name = new forms_1.FormControl("", forms_1.Validators.required);
        this.description = new forms_1.FormControl("");
        this.notready = true;
        this.form = fb.group({
            "name": this.name,
            "description": this.description
        });
        this._getTags();
    }
    TagListComponent.prototype._getTags = function () {
        var _this = this;
        this.error = false;
        this._tagService.getTags()
            .subscribe(function (tags) {
            _this.tags = tags;
            _this.notready = false;
        }, function (error) { return _this._errorMessage = error; });
    };
    TagListComponent.prototype.deleteTag = function (tag) {
        var _this = this;
        this.error = false;
        if (window.confirm("Are you sure you want to delete this tag?")) {
            this._tagService.deleteTag(tag)
                .subscribe(function (tag) {
                _this._getTags();
            }, function (error) { return _this._errorMessage = error; });
        }
    };
    TagListComponent.prototype.goToTag = function (tag) {
        this._router.navigate(['/tag', tag]);
    };
    TagListComponent.prototype.goToCases = function (tag) {
        this._router.navigate(['/workbench'], { queryParams: { 'tags': tag } });
        //this._router.navigate( ['/workbench', {'tag': tag}] );
    };
    TagListComponent.prototype.onSubmit = function (value) {
        this.error = false;
        var newtag = new tag_1.Tag(value.name, value.description);
        this._validateTag(newtag);
    };
    TagListComponent.prototype._validateTag = function (tag) {
        var _this = this;
        this._tagService.getTags(new http_1.URLSearchParams('name=' + tag.name))
            .subscribe(function (tags) {
            if (tags.length != 0) {
                _this.error = true;
                _this.notready = false;
            }
            else {
                _this._createTag(tag);
                _this.notready = false;
            }
        }, function (error) { return _this._errorMessage = error; });
    };
    TagListComponent.prototype._createTag = function (tag) {
        var _this = this;
        this._tagService.createTag(tag)
            .subscribe(function (tag) {
            _this._getTags();
            // reset the form
            _this.name.updateValue(null);
            _this.description.updateValue(null);
        }, function (error) { return _this._errorMessage = error; });
    };
    TagListComponent = __decorate([
        core_1.Component({
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, navbar_component_1.NavbarComponent],
            providers: [http_1.HTTP_PROVIDERS, tag_service_1.TagService],
            templateUrl: '/app/tags/tag-list.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, tag_service_1.TagService, router_1.Router])
    ], TagListComponent);
    return TagListComponent;
}());
exports.TagListComponent = TagListComponent;
//# sourceMappingURL=tag-list.component.js.map