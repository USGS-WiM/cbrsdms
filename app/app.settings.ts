import {Injectable}     from 'angular2/core';
import {Headers} from 'angular2/http';

@Injectable()
export class APP_SETTINGS {
    private static _API_ENDPOINT: string = 'http://localhost:8000/cbraservices/';

    public static get CASES_URL(): string { return this._API_ENDPOINT+'cases/' };
    public static get PROPERTIES_URL(): string { return this._API_ENDPOINT+'properties/' };
    public static get REQUESTERS_URL(): string { return this._API_ENDPOINT+'requesters/' };
    public static get CASEFILES_URL(): string { return this._API_ENDPOINT+'casefiles/' };
    public static get COMMENTS_URL(): string { return this._API_ENDPOINT+'comments/' };
    public static get TAGS_URL(): string { return this._API_ENDPOINT+'tags/' };
    public static get CASETAGS_URL(): string { return this._API_ENDPOINT+'casetags/' };
    public static get SYSTEMUNITS_URL(): string { return this._API_ENDPOINT+'systemunits/' };
    public static get FIELDOFFICES_URL(): string { return this._API_ENDPOINT+'fieldoffices/' };
    public static get SYSTEMMAPS_URL(): string { return this._API_ENDPOINT+'systemmaps/' };
    public static get USERS_URL(): string { return this._API_ENDPOINT+'users/' };
    public static get DETERMINATIONS_URL(): string { return this._API_ENDPOINT+'determinations/' };
    public static get SYSTEMUNITPROHIBITIONDATES_URL(): string { return this._API_ENDPOINT+'systemunitprohibitiondates/' };

    public static get JSON_HEADER() { return new Headers({ 'Accept': 'application/json' }) };
}