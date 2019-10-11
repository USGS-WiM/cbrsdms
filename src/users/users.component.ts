import {Component, OnInit} from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { Column } from '../grid/column';
import { APP_UTILITIES } from '../app.utilities';
import { ModalService } from '../modal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: 'users.component.html',
})
export class UsersComponent implements OnInit {

    users: User[];
    newUser = new User();
    user: User;
    columns: Column[];
    columns_notstaff: Column[];
    private _userFields;
    private _userControls;
    userForm: FormGroup;
    row;
    private _currentMapFilter;
    notready = false;
    private _errorMessage: string;
    subscription;
    changePassword = false;
    is_staff;
    username;

    private _requiredFields = [];

    constructor(private _userService: UserService, private _modalService: ModalService) {
        this._userFields = Object.keys(this.newUser);
        this._userControls = this._makeControls(this._userFields);
        this.userForm = new FormGroup(this._userControls)
    }

    ngOnInit() {
        this._getUsers();
        this._getColumns();
        this.is_staff = sessionStorage.getItem('is_staff');
        this.username = sessionStorage.getItem('username');
    }

    private _getColumns() {
        this.columns = [
            new Column('first_name', 'First Name'),
            new Column('last_name', 'Last Name'),
            new Column('username', 'Username'),
            new Column('email', 'Email'),
            new Column('is_active', 'Active'),
            new Column('is_staff', 'Staff')
        ];
        this.columns_notstaff = [
            new Column('first_name', 'First Name'),
            new Column('last_name', 'Last Name'),
            new Column('username', 'Username'),
            new Column('email', 'Email')
        ];
    }

    openModal(modalID: string, row?: any) {
        this.changePassword = false;
        if ((row && this.username === row.username) || this.is_staff === 'true') {
            if (row) {
                switch (modalID) {
                    case 'modalUser':
                        this.row = <User>row;
                        this._updateControls(<User>row);
                        break;
                    default:
                        this.row = row;
                }
            } else {
                this._clearModalControls();
            }
            this._modalService.open('modalUser');
        }
    }

    _getUsers(urlSearchParams?) {
        this.subscription = this._userService.getUsers(urlSearchParams)
            .subscribe(res => {
                this.users = res;
                this.notready = false;
                if (!urlSearchParams) {(<HTMLInputElement>document.getElementById('user-filter')).value = ''; }
            },
            error => this.handleError(error))
    }

    private _clearModalControls() {
        this._updateControls(new User());
    }

    private _updateControls(values): void {
        const fields = this._userFields; const controls = this._userControls;
        for (let i = 0, j = fields.length; i < j; i++) {
            const field = fields[i];
            if (field.slice(-4) === 'date') {
                if (values[field] !== undefined && values[field] !== null) {
                    let thisDate = new Date(values[field]);
                    thisDate = new Date(thisDate.getTime() + Math.abs(thisDate.getTimezoneOffset() * 60000));
                    controls[field].setValue(
                        {date: {year: thisDate.getFullYear(), month: thisDate.getMonth() + 1, day: thisDate.getDate()}});
                } else {
                    controls[field].setValue('');
                }
            } else {
                controls[field].setValue(values[field]);
            }
        }
    }

    private _makeControls(fields) {
        const controls = {};
        for (let i = 0, j = fields.length; i < j; i++) {
            // add a validator for required fields
            if (this._requiredFields.indexOf(fields) > -1) {
                controls[fields[i]] = new FormControl({value: '', disabled: false}, Validators.required);
            } else {
                controls[fields[i]] = new FormControl({value: '', disabled: false});
            }
        }
        return controls;
    }

    closeModal(modalID: string) {
        this._modalService.close(modalID);
        this._clearModalControls();
        this.row = undefined;
    }

    filterGrid(filterID: string, filterValue: string) {
        if (this.subscription) {this.subscription.unsubscribe(); }
        console.log('filter grid called with: ' + filterID + ' ' + filterValue);
        this._currentMapFilter = filterValue;
        filterValue ? this._getUsers({freetext: filterValue}) : this._getUsers();
    }

    deleteRow(modalID: string, recordID: number) {
        this.notready = true;
        if (confirm('Are you certain you want to delete this record?')) {
            switch (modalID) {
                case 'modalUser':
                    /* this._userService.deleteUser(recordID)
                        .subscribe(
                            res => {
                                this._getUsers
                            },
                            err => console.log(err)
                        ); */
                    this.closeModal(modalID);
                    break;
                default:
                    this.notready = false;
                    break;
            }
        }
    }

    onSubmit(form: FormGroup, modalID: string) {
        this.notready = true;
        this.changePassword = false;
        if (form.dirty) {
            const is_staff = sessionStorage.getItem('is_staff');
            const user_id = sessionStorage.getItem('user_id');
            switch (modalID) {
                case 'modalUser':
                    const user = form.value;
                    // validate that required fields have values
                    // TODO: add current password entry, check with session storage password
                    if (!user.username) {
                        APP_UTILITIES.showToast('Error', 'User NOT saved: Username must have a value!'); // TODO add more
                    } else {
                        if (user.id) {
                            this._updateUser(user);
                        } else { this._createUser(user); }
                    }
                    break;
                default:
                    break;
            }
        }
        this.closeModal(modalID);
        this.notready = false;
    }

    private _updateUser(user: User) {
        this.notready = true;
        this._userService.updateUser(user)
            .subscribe(
                res => {
                    // update session storage if changes made to logged in user
                    const loggedInUserID = sessionStorage.getItem('user_id');
                    if (res.id.toString() === loggedInUserID) {
                        if (user.password) { sessionStorage.setItem('password', user.password); }
                        if (res.username !== sessionStorage.getItem('username')) {sessionStorage.setItem('username', res.username)}
                        if (res.first_name !== sessionStorage.getItem('first_name')) {sessionStorage.setItem('first_name', res.first_name)}
                        if (res.last_name !== sessionStorage.getItem('last_name')) {sessionStorage.setItem('last_name', res.last_name)}
                        if (res.is_staff.toString() !== sessionStorage.getItem('is_staff')) {
                            sessionStorage.setItem('is_staff', res.is_staff.toString())
                        }
                    }
                    this._getUsers();
                    this.row = <User>res;
                    this._updateControls(this.row);
                    APP_UTILITIES.showToast('Success', 'Success! User info updated');
                    // this.changePassword = false;
                },
                error => this.handleError(error)
            )
    }

    private _createUser(user: User) {
        this.notready = true;
        this._userService.createUser(user)
            .subscribe(
                res => {
                    this._getUsers();
                    this.row = <User>res;
                    this._updateControls(this.row);
                    APP_UTILITIES.showToast('Success', 'Success! User created');
                },
                error => this.handleError(error)
            )
    }

    private handleError (error) {
        // TODO figure out a better error handler
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        const self = this;
        if (error.error) {
            for (const err in error.error) {
                if (typeof(error.error[err]) === 'object') {
                    for (const errMessage of error.error[err]) {
                        APP_UTILITIES.showToast('Error', self.capitalize(err) + ': ' + self.capitalize(errMessage));
                    }
                } else {
                    APP_UTILITIES.showToast('Error', self.capitalize(error.error[err]));
                }
            }
        }
    }

    private capitalize(message) {
        return message[0].toUpperCase() + message.substr(1);
    }
}
