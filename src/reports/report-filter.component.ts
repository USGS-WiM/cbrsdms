import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {IMyOptions} from 'mydatepicker';

@Component({
    selector: 'report-filter',
    templateUrl: 'report-filter.component.html'
})

export class ReportFilterComponent {
    @Output() onFilter = new EventEmitter<string>();

    myDateFields = [
        {name: 'request_date', label: 'Request Date'},
        {name: 'fws_fo_received_date', label: 'Field Office Received Date'},
        {name: 'fws_hq_received_date', label: 'Headquarters Received Date'},
        {name: 'analyst_signoff_date', label: 'Analyst Signoff Date'},
        {name: 'qc_reviewer_signoff_date', label: 'QC Reviewer Signoff Date'},
        {name: 'final_letter_date', label: 'Final Letter Date'},
        {name: 'close_date', label: 'Close Date'}];
    form: FormGroup;
    active = true;
    filternotready: Boolean = true;
    private _errorMessage: string;
    myDatePickerOptions: IMyOptions = {
        dateFormat: 'mm/dd/yyyy',
    };

    constructor (fb: FormBuilder) {

        this.form = fb.group({
            date_field: new FormControl(),
            from_date: new FormControl(),
            to_date: new FormControl()
        });

        this.filternotready = false;
    }

    private _showToast(message: string, timeout?: number) {
        const toast = <HTMLElement> document.querySelector('#cbra_toast');
        toast.className = 'cbraToast toastVisible';
        toast.innerHTML = message;
        setTimeout(function(){
            toast.className = 'cbraToast';
        }, (timeout ? timeout : 5000));
    }

    private convertDate(dateVal) {
        let convertedDate = ('0000' + dateVal.date.year).slice(-4);
        convertedDate += '-' + ('00' + dateVal.date.month).slice(-2);
        convertedDate += '-' + ('00' + dateVal.date.day).slice(-2);
        return convertedDate;
    }

    onSubmit(form) {
        // check each FormControl for changes
        if (form.dirty) {
            this.filternotready = true;

            let urlSearchParams = 'report=daystoeachstatus';
            const date_field_val = form.controls['date_field'].value;
            const from_date_val = form.controls['from_date'].value;
            console.log(from_date_val);
            const to_date_val = form.controls['to_date'].value;
            console.log(to_date_val);
            if (date_field_val) {urlSearchParams += '&date_field=' + date_field_val}
            if (from_date_val) {urlSearchParams += '&from_date=' + this.convertDate(from_date_val)}
            if (to_date_val) {urlSearchParams += '&to_date=' + this.convertDate(to_date_val)}

            if (!date_field_val) {
                this._showToast('You cannot filter without a date field selected.');
                this.filternotready = false;
            } else if (!from_date_val && !to_date_val) {
                this._showToast('You cannot filter without at least one date value (from or to) selected.');
                this.filternotready = false;
            } else {
                this.filternotready = false;
                this.onFilter.emit(urlSearchParams);
            }
        }
    }
}
