import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';

@Injectable()
export class APP_SETTINGS {

    private static _environment = 'production';
    private static _API_ENDPOINT = 'http://localhost:8000/cbraservices/';
	  // private static _API_ENDPOINT = 'http://cbradev.wim.usgs.gov/cbra/cbraservices/';
	// private static _API_ENDPOINT = 'https://' + window.location.hostname + '/cbra/cbraservices/';
    public static set environment (env: string) { this._environment = env };

    public static get IS_LOGGEDIN(): boolean { return (!!sessionStorage.getItem('username') && !!sessionStorage.getItem('password')); };

    public static get AUTH_URL(): string { return this._API_ENDPOINT + 'auth/' };
    public static get CASES_URL(): string { return this._API_ENDPOINT + 'cases/' };
    public static get PROPERTIES_URL(): string { return this._API_ENDPOINT + 'properties/' };
    public static get REQUESTERS_URL(): string { return this._API_ENDPOINT + 'requesters/' };
    public static get CASEFILES_URL(): string { return this._API_ENDPOINT + 'casefiles/' };
    public static get COMMENTS_URL(): string { return this._API_ENDPOINT + 'comments/' };
    public static get TAGS_URL(): string { return this._API_ENDPOINT + 'tags/' };
    public static get CASETAGS_URL(): string { return this._API_ENDPOINT + 'casetags/' };
    public static get SYSTEMUNITS_URL(): string { return this._API_ENDPOINT + 'systemunits/' };
    public static get FIELDOFFICES_URL(): string { return this._API_ENDPOINT + 'fieldoffices/' };
    public static get SYSTEMMAPS_URL(): string { return this._API_ENDPOINT + 'systemmaps/' };
    public static get SYSTEMUNITMAPS_URL(): string { return this._API_ENDPOINT + 'systemunitmaps/' };
    public static get USERS_URL(): string { return this._API_ENDPOINT + 'users/' };
    public static get DETERMINATIONS_URL(): string { return this._API_ENDPOINT + 'determinations/' };
    public static get SYSTEMUNITPROHIBITIONDATES_URL(): string { return this._API_ENDPOINT + 'systemunitprohibitiondates/' };
    public static get REPORTCASES_URL(): string { return this._API_ENDPOINT + 'reportcases/' };
    public static get REPORTCASECOUNTS_URL(): string { return this._API_ENDPOINT + 'reportcasecounts/' };

    public static get MIN_JSON_HEADERS() { return new Headers({ 'Accept': 'application/json' }) };
    public static get JSON_HEADERS() { return new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }) };
    public static get AUTH_HEADERS() { return new Headers({ 'Authorization': 'Basic ' +
        btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password'))}) };
    public static get MIN_AUTH_JSON_HEADERS() { return new Headers({
        'Authorization': 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')),
        'Accept': 'application/json' }
    )};
    public static get AUTH_JSON_HEADERS() { return new Headers({
        'Authorization': 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')),
        'Accept': 'application/json', 'Content-Type': 'application/json' }
    )};

    public static get STATUSES(): string[] {
        return ['Closed with no Final Letter', 'Final', 'Awaiting Final Letter', 'Awaiting QC', 'Received'] }
    public static get SALUTATIONS(): string[] { return ['Mr.', 'Ms.', 'Dr.'] };
    public static get US_STATES(): string[] {
        return ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
            'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
            'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'] };
    public static get CONTENT_TYPES(): string[] {
        return ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/pdf', 'text/plain', 'image/jpeg', 'image/png', 'image/gif', 'image/tiff', 'image/bmp',
            'application/zip', 'application/x-bzip', 'application/x-bzip2'] };
    public static get MAX_UPLOAD_SIZE(): number { return 2621440 };

}
