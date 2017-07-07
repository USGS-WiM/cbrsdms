import {Component} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {URLSearchParams} from '@angular/http';
import {TagService} from './tag.service';
import {Tag} from './tag';
import {CaseService} from '../cases/case.service';
import {Case} from '../cases/case';
import {APP_UTILITIES} from '../app.utilities';

@Component({
    providers: [TagService, CaseService],
    templateUrl: 'tag-list.component.html'
})
export class TagListComponent {
    error: Boolean = false;
    form: FormGroup;
    name: FormControl = new FormControl('', Validators.required);
    description: FormControl = new FormControl('');
    notready: Boolean = true;
    nottoggled: Boolean = true;
    private _errorMessage: string;
    tags: Tag[];
    private _caseCount: number;

    constructor(fb: FormBuilder, private _tagService: TagService, private _caseService: CaseService, private _router: Router) {
        this.form = fb.group({
            'name': this.name,
            'description': this.description
        });
        this._getTags();
    }

    private _getTags() {
        this.error = false;
        this._tagService.getTags()
            .subscribe(
                tags => {
                    this.tags = tags;
                    this.notready = false;
                },
                error => this._errorMessage = <any>error);
    }

    deleteTag(tag) {
        this.error = false;
        if (window.confirm('Are you sure you want to delete this tag?')) {
            this._caseService.getCases(new URLSearchParams('tags=' + tag))
                .subscribe(
                    (cases: Case[]) => {
                        if (cases.length > 0) {
                            APP_UTILITIES.showToast(
                                'This tag cannot be removed because it is assigned to one or more determination cases.');
                        } else {
                            this._tagService.deleteTag(tag)
                                .subscribe(
                                    res => this._getTags(),
                                    error => this._errorMessage = <any>error)
                        }
                    },
                    error => this._errorMessage = <any>error);

        }
    }

    goToTag(tag: any) {
        this._router.navigate( ['/tag', tag] );
    }

    goToCases(tag: any) {
        this._router.navigate( ['/workbench'], {queryParams: {'tags': tag}} );
    }

    toggleCreateTagForm() {
        this.nottoggled = !this.nottoggled;
    }

    onSubmit(value: any) {
        this.error = false;
        const newtag = new Tag(value.name, value.description);
        this._validateTag(newtag);
    }

    private _validateTag(tag: Tag) {
        this._tagService.getTags(new URLSearchParams('name=' + tag.name))
            .subscribe(
                (tags: Tag[]) => {
                    if (tags.length !== 0) {
                        this.error = true;
                        this.notready = false;
                    } else {
                        this._createTag(tag);
                        this.toggleCreateTagForm();
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error);
    }

    private _createTag(tag: Tag) {
        this._tagService.createTag(tag)
            .subscribe(
                res => {
                    this._getTags();
                    // reset the form
                    this.name.setValue(null);
                    this.description.setValue(null);
                },
                error => this._errorMessage = <any>error
            );
    }

}
