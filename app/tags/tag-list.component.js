System.register(['@angular/core', '@angular/forms', '@angular/router', '@angular/http', '../navbar.component', './tag.service', './tag'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, http_1, navbar_component_1, tag_service_1, tag_1;
    var TagListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (tag_service_1_1) {
                tag_service_1 = tag_service_1_1;
            },
            function (tag_1_1) {
                tag_1 = tag_1_1;
            }],
        execute: function() {
            TagListComponent = (function () {
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
                        providers: [tag_service_1.TagService],
                        templateUrl: 'app/tags/tag-list.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, tag_service_1.TagService, router_1.Router])
                ], TagListComponent);
                return TagListComponent;
            }());
            exports_1("TagListComponent", TagListComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFnLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7Z0JBU0ksMEJBQVksRUFBZSxFQUFVLFdBQXVCLEVBQVUsT0FBZTtvQkFBaEQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFSckYsVUFBSyxHQUFZLEtBQUssQ0FBQztvQkFFdkIsU0FBSSxHQUFnQixJQUFJLG1CQUFXLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzdELGdCQUFXLEdBQWdCLElBQUksbUJBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDL0MsYUFBUSxHQUFZLElBQUksQ0FBQztvQkFLckIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2pCLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVztxQkFDbEMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQztnQkFFTyxtQ0FBUSxHQUFoQjtvQkFBQSxpQkFTQztvQkFSRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7eUJBQ3JCLFNBQVMsQ0FDTixVQUFBLElBQUk7d0JBQ0EsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUMxQixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFRLEtBQUssRUFBL0IsQ0FBK0IsQ0FBQyxDQUFDO2dCQUN0RCxDQUFDO2dC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QUFVLENBQUM7d0JBQ3ZCLFdBQVcsRUFBRSxrQ0FBa0M7cUJBQ2xELENBQUM7O29DQUFBO2dCQXFGRix1QkFBQztZQUFELENBQUMsQUFwRkQsSUFvRkM7WUFwRkQsK0NBb0ZDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gICAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtVUkxTZWFyY2hQYXJhbXN9ICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge05hdmJhckNvbXBvbmVudH0gICBmcm9tICcuLi9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtUYWdTZXJ2aWNlfSAgICAgICAgZnJvbSAnLi90YWcuc2VydmljZSc7XHJcbmltcG9ydCB7VGFnfSAgICAgICAgICAgICAgIGZyb20gJy4vdGFnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIE5hdmJhckNvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtUYWdTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnYXBwL3RhZ3MvdGFnLWxpc3QuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWdMaXN0Q29tcG9uZW50IHtcclxuICAgIGVycm9yOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgICBmb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBuYW1lOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICAgIGRlc2NyaXB0aW9uOiBGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChcIlwiKTtcclxuICAgIG5vdHJlYWR5OiBCb29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2Vycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gICAgdGFnczogVGFnW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF90YWdTZXJ2aWNlOiBUYWdTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMubmFtZSxcclxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiB0aGlzLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fZ2V0VGFncygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2dldFRhZ3MoKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3RhZ1NlcnZpY2UuZ2V0VGFncygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICB0YWdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSB0YWdzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm90cmVhZHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYWcodGFnKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YWc/XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhZ1NlcnZpY2UuZGVsZXRlVGFnKHRhZylcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgdGFnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0VGFncygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdvVG9UYWcodGFnOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoIFsnL3RhZycsIHRhZ10gKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvQ2FzZXModGFnOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoIFsnL3dvcmtiZW5jaCddLCB7cXVlcnlQYXJhbXM6IHsndGFncyc6IHRhZ319ICk7XHJcbiAgICAgICAgLy90aGlzLl9yb3V0ZXIubmF2aWdhdGUoIFsnL3dvcmtiZW5jaCcsIHsndGFnJzogdGFnfV0gKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5lcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBuZXd0YWcgPSBuZXcgVGFnKHZhbHVlLm5hbWUsIHZhbHVlLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICB0aGlzLl92YWxpZGF0ZVRhZyhuZXd0YWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3ZhbGlkYXRlVGFnKHRhZzogVGFnKSB7XHJcbiAgICAgICAgdGhpcy5fdGFnU2VydmljZS5nZXRUYWdzKG5ldyBVUkxTZWFyY2hQYXJhbXMoJ25hbWU9Jyt0YWcubmFtZSkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICB0YWdzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFncy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RyZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlVGFnKHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90cmVhZHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlVGFnKHRhZzogVGFnKSB7XHJcbiAgICAgICAgdGhpcy5fdGFnU2VydmljZS5jcmVhdGVUYWcodGFnKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgdGFnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRUYWdzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGZvcm1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUudXBkYXRlVmFsdWUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbi51cGRhdGVWYWx1ZShudWxsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59Il19