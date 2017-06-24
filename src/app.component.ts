import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {APP_SETTINGS} from './app.settings';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    constructor(public router: Router) {}

    ngOnInit() {
        setTimeout(() => { if (!APP_SETTINGS.IS_LOGGEDIN) { this.router.navigateByUrl('login'); } }, 500);
    }

}
