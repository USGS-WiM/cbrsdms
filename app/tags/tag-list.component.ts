import {Component}         from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES, FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {URLSearchParams}    from '@angular/http';
import {NavbarComponent}   from '../navbar.component';
import {TagService}        from './tag.service';
import {Tag}               from './tag';

@Component({
    directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, NavbarComponent],
    providers: [TagService],
    templateUrl: 'app/tags/tag-list.component.html'
})
export class TagListComponent {
    error: Boolean = false;
    form: FormGroup;
    name: FormControl = new FormControl("", Validators.required);
    description: FormControl = new FormControl("");
    notready: Boolean = true;
    private _errorMessage: string;
    tags: Tag[];

    constructor(fb: FormBuilder, private _tagService: TagService, private _router: Router) {
        this.form = fb.group({
            "name": this.name,
            "description": this.description
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
        if (window.confirm("Are you sure you want to delete this tag?")) {
            this._tagService.deleteTag(tag)
                .subscribe(
                    tag => {
                        this._getTags();
                    },
                    error => this._errorMessage = <any>error);
        }
    }

    goToTag(tag: any) {
        this._router.navigate( ['/tag', tag] );
    }

    goToCases(tag: any) {
        this._router.navigate( ['/workbench'], {queryParams: {'tags': tag}} );
        //this._router.navigate( ['/workbench', {'tag': tag}] );
    }

    onSubmit(value: any) {
        this.error = false;
        let newtag = new Tag(value.name, value.description);
        this._validateTag(newtag);
    }

    private _validateTag(tag: Tag) {
        this._tagService.getTags(new URLSearchParams('name='+tag.name))
            .subscribe(
                tags => {
                    if (tags.length != 0) {
                        this.error = true;
                        this.notready = false;
                    }
                    else {
                        this._createTag(tag);
                        this.notready = false;
                    }
                },
                error => this._errorMessage = <any>error);
    }

    private _createTag(tag: Tag) {
        this._tagService.createTag(tag)
            .subscribe(
                tag => {
                    this._getTags();
                    // reset the form
                    this.name.updateValue(null);
                    this.description.updateValue(null);
                },
                error => this._errorMessage = <any>error
            );
    }

}