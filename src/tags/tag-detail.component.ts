import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {CaseService} from '../cases/case.service';
import {TagService} from './tag.service';
import {Tag} from './tag';

@Component({
    providers: [TagService],
    templateUrl: 'tag-detail.component.html'
})
export class TagDetailComponent implements OnInit, OnDestroy {
    tag_ID: number;
    error: Boolean = false;
    private _params: any;
    private _numTags: number;
    cases_properties = [];
    notready: Boolean = true;
    private _errorMessage: string;
    myTag: Tag;
    form: FormGroup;
    editName: FormControl = new FormControl('', Validators.required);
    editDescription: FormControl  = new FormControl('');

    constructor(fb: FormBuilder, private _route: ActivatedRoute,
                private _router: Router,
                private _caseService: CaseService,
                private _tagService: TagService) {
        this.form = fb.group({
            'name': this.editName,
            'description': this.editDescription
        });
    }

    ngOnInit() {
        this._params = this._route.params
            .subscribe(
                params => {
                    this.tag_ID = +params['id'];
                    this._getTag(this.tag_ID);
                });
    }

    ngOnDestroy() {
        if (this._params) {
            this._params.unsubscribe();
        }
    }

    cancel() {
        this.goToTags();
    }

    onSubmit(value: any) {
        this.notready = true;
        const newtag: Tag = new Tag(value.name, value.description);
        this._validateTag(newtag);
    }

    goToTags() {
        this._router.navigate(['/tags']);
    }

    private _getTag(tagID: number) {
        this._tagService.getTag(tagID)
            .subscribe(
                tag => {
                    this.myTag = tag;
                    this.editName.setValue(this.myTag.name);
                    this.editDescription.setValue(this.myTag.description);
                    this.notready = false;
                },
                error => this._errorMessage = <any>error);
    }

    private _validateTag(tag: Tag) {
        this._tagService.getTags(new URLSearchParams('name=' + tag.name))
            .subscribe(
                (tags: Tag[]) => {
                    if (tag.name !== this.myTag.name && tags.length !== 0) {
                        this.error = true;
                        this.notready = false;
                    } else {
                        this.myTag.name = tag.name;
                        this.myTag.description = tag.description;
                        this._updateTag(this.myTag);
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error);
    }

    private _updateTag(tag: Tag) {
        this._tagService.updateTag(tag)
            .subscribe(
                res => {
                    this.goToTags();
                },
                error => this._errorMessage = <any>error
            );
    }

}
