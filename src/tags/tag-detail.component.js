System.register(['@angular/core', '@angular/router', '@angular/http', '@angular/forms', '../navbar.component', '../cases/case.service', './tag.service', './tag'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, forms_1, navbar_component_1, case_service_1, tag_service_1, tag_1;
    var TagDetailComponent;
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
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (case_service_1_1) {
                case_service_1 = case_service_1_1;
            },
            function (tag_service_1_1) {
                tag_service_1 = tag_service_1_1;
            },
            function (tag_1_1) {
                tag_1 = tag_1_1;
            }],
        execute: function() {
            TagDetailComponent = (function () {
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
                        providers: [tag_service_1.TagService],
                        templateUrl: '/app/tags/tag-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, case_service_1.CaseService, tag_service_1.TagService])
                ], TagDetailComponent);
                return TagDetailComponent;
            }());
            exports_1("TagDetailComponent", TagDetailComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWctZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQWFJLDRCQUFZLEVBQWUsRUFBVSxNQUFzQixFQUFVLE9BQWUsRUFBVSxZQUF5QixFQUFVLFdBQXVCO29CQUFuSCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtvQkFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO29CQVh4SixVQUFLLEdBQVksS0FBSyxDQUFDO29CQUd2QixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7b0JBQ3RCLGFBQVEsR0FBWSxJQUFJLENBQUM7b0JBSXpCLGFBQVEsR0FBZ0IsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNqRSxvQkFBZSxHQUFpQixJQUFJLG1CQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBR2hELElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRO3dCQUNyQixhQUFhLEVBQUUsSUFBSSxDQUFDLGVBQWU7cUJBQ3RDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVELHFDQUFRLEdBQVI7b0JBQUEsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07eUJBQzVCLFNBQVMsQ0FDTixVQUFBLE1BQU07d0JBQ0YsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzlC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QSxLQUFJLENBQUMsYUFBYSxHQUFRLEtBQUssRUFBL0IsQ0FBK0IsQ0FDM0MsQ0FBQztnQkFDVixDQUFDO2dCQTVGTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdDQUF3QixFQUFFLGtDQUFlLENBQUM7d0JBQzFFLFNBQVMsRUFBRSxDQUFDLHdCQUFVLENBQUM7d0JBQ3ZCLFdBQVcsRUFBRSxxQ0FBcUM7cUJBQ3JELENBQUM7O3NDQUFBO2dCQTBGRix5QkFBQztZQUFELENBQUMsQUF6RkQsSUF5RkM7WUF6RkQsbURBeUZDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9ICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7VVJMU2VhcmNoUGFyYW1zfSAgICBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSAgIGZyb20gJy4uL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0Nhc2VTZXJ2aWNlfSAgICAgICBmcm9tICcuLi9jYXNlcy9jYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1RhZ1NlcnZpY2V9ICAgICAgICBmcm9tICcuL3RhZy5zZXJ2aWNlJztcclxuaW1wb3J0IHtUYWd9ICAgICAgICAgICAgICAgZnJvbSAnLi90YWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUywgTmF2YmFyQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW1RhZ1NlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcvYXBwL3RhZ3MvdGFnLWRldGFpbC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhZ0RldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHRhZ19JRDogbnVtYmVyO1xyXG4gICAgZXJyb3I6IEJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3BhcmFtczogYW55O1xyXG4gICAgcHJpdmF0ZSBfbnVtVGFnczogbnVtYmVyO1xyXG4gICAgY2FzZXNfcHJvcGVydGllcyA9IFtdO1xyXG4gICAgbm90cmVhZHk6IEJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBfZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBteVRhZzogVGFnO1xyXG4gICAgZm9ybTogRm9ybUdyb3VwO1xyXG4gICAgZWRpdE5hbWU6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgZWRpdERlc2NyaXB0aW9uOiBGb3JtQ29udHJvbCAgPSBuZXcgRm9ybUNvbnRyb2woXCJcIik7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9jYXNlU2VydmljZTogQ2FzZVNlcnZpY2UsIHByaXZhdGUgX3RhZ1NlcnZpY2U6IFRhZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmYi5ncm91cCh7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLmVkaXROYW1lLFxyXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IHRoaXMuZWRpdERlc2NyaXB0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gdGhpcy5fcm91dGUucGFyYW1zXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFnX0lEID0gK3BhcmFtc1snaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9nZXRUYWcodGhpcy50YWdfSUQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmFtcykge1xyXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuZ29Ub1RhZ3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5ub3RyZWFkeSA9IHRydWU7XHJcbiAgICAgICAgbGV0IG5ld3RhZzogVGFnID0gbmV3IFRhZyh2YWx1ZS5uYW1lLCB2YWx1ZS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVUYWcobmV3dGFnKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvVGFncygpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvdGFncyddKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRUYWcodGFnSUQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3RhZ1NlcnZpY2UuZ2V0VGFnKHRhZ0lEKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgdGFnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15VGFnID0gdGFnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUudXBkYXRlVmFsdWUodGhpcy5teVRhZy5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXREZXNjcmlwdGlvbi51cGRhdGVWYWx1ZSh0aGlzLm15VGFnLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdHJlYWR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdGVUYWcodGFnOiBUYWcpIHtcclxuICAgICAgICB0aGlzLl90YWdTZXJ2aWNlLmdldFRhZ3MobmV3IFVSTFNlYXJjaFBhcmFtcygnbmFtZT0nK3RhZy5uYW1lKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHRhZ3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWcubmFtZSAhPSB0aGlzLm15VGFnLm5hbWUgJiYgdGFncy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RyZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5teVRhZy5uYW1lID0gdGFnLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlUYWcuZGVzY3JpcHRpb24gPSB0YWcuZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhZyh0aGlzLm15VGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RyZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF91cGRhdGVUYWcodGFnOiBUYWcpIHtcclxuICAgICAgICB0aGlzLl90YWdTZXJ2aWNlLnVwZGF0ZVRhZyh0YWcpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICB0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub1RhZ3MoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59Il19