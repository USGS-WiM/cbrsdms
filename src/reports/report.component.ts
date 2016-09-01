import {Component}         from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavbarComponent}   from '../navbar.component';

@Component({
    template: `<navbar></navbar><router-outlet></router-outlet>`,
    directives:[ROUTER_DIRECTIVES, NavbarComponent]
})
export class ReportComponent {}
