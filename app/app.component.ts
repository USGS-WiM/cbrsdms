import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CaseService}       from './cases/case.service';
import {CasefileService}   from './casefiles/casefile.service';
import {PropertyService}   from './properties/property.service';
import {RequesterService}  from './requesters/requester.service';
import {WorkbenchComponent}     from './workbench/workbench.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        PropertyService,
        RequesterService,
        CaseService,
        CasefileService]
})
@RouteConfig([
  {path: '/workbench/...', name: 'Workbench', component: WorkbenchComponent, useAsDefault: true}
])
export class AppComponent {}
