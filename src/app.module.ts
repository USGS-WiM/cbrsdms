import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CaseService} from './cases/case.service';
import {CasefileService} from './casefiles/casefile.service';
import {CasetagService} from './casetags/casetag.service';
import {CommentService} from './comments/comment.service';
import {DeterminationService} from './determinations/determination.service';
import {FieldofficeService} from './fieldoffices/fieldoffice.service';
import {ProhibitiondateService} from './prohibitiondates/prohibitiondate.service';
import {SystemmapService} from './systemmaps/systemmap.service';
import {SystemunitmapService} from './systemunitmaps/systemunitmap.service';
import {SystemunitService} from './systemunits/systemunit.service';
import {TagService} from './tags/tag.service';
import {UserService} from './users/user.service';
import {PropertyService} from './properties/property.service';
import {RequesterService} from './requesters/requester.service';
import {AuthenticationService} from './authentication/authentication.service';
import {WorkbenchFilterService} from './workbench/workbench-filter.service';
import {ReportCaseService} from './reports/report-case.service';
import {ReportCaseCountService} from './reports/report-case-count.service';
import {AppComponent} from './app.component';
import {Grid} from './grid/grid';
import {NavbarComponent} from './navbar.component';
import {LoginComponent} from './authentication/login.component';
import {TagListComponent} from './tags/tag-list.component';
import {TagDetailComponent} from './tags/tag-detail.component';
import {WorkbenchComponent} from './workbench/workbench.component';
import {WorkbenchListComponent} from './workbench/workbench-list.component';
import {WorkbenchGridComponent} from './workbench/workbench-grid.component';
import {WorkbenchFilterComponent} from './workbench/workbench-filter.component';
import {WorkbenchDetailComponent} from './workbench/workbench-detail.component';
import {MapdataComponent} from './mapdata/mapdata.component';
import {MapdataListComponent} from './mapdata/mapdata-list.component';
import {SystemmapGridComponent} from './mapdata/systemmap-grid.component';
import {SystemunitGridComponent} from './mapdata/systemunit-grid.component';
import {ProhibitiondateGridComponent} from './mapdata/prohibitiondate-grid.component';
import {UserGridComponent} from './users/user-grid.component';
import {ReportComponent} from './reports/report.component';
import {ReportListComponent} from './reports/report-list.component';
import {ReportGridComponent} from './reports/report-grid.component';
import {ReportCasesByUnitComponent} from './reports/report-cases-by-unit.component';
import {ReportFilterComponent} from './reports/report-filter.component';
import {ReportDaysToResolutionComponent} from './reports/report-days-to-resolution.component';
import {ReportDaysToEachStatusComponent} from './reports/report-days-to-each-status.component';
import {ReportCountCasesByStatusComponent} from './reports/report-count-cases-by-status.component';
import {DisplayValuePipe} from './display-value.pipe';
import {ModalService} from './modal.service';
import {ModalComponent} from './modal.component';
import {routing, appRoutingProviders} from './app.routing'
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {MyDatePickerModule} from 'mydatepicker';
import { DatePipe } from '@angular/common';
import {UsersComponent} from './users/users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReportCasesForUserComponent } from './reports/report-cases-for-user.component';


@NgModule({
    imports: [
        routing, BrowserModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, MultiselectDropdownModule,
        MyDatePickerModule, NgbModule
    ],
    declarations: [
        AppComponent, ModalComponent, Grid, NavbarComponent, LoginComponent, TagListComponent, TagDetailComponent,
        WorkbenchComponent, WorkbenchListComponent, WorkbenchGridComponent, WorkbenchFilterComponent, WorkbenchDetailComponent,
        MapdataComponent, MapdataListComponent, SystemmapGridComponent, SystemunitGridComponent, ProhibitiondateGridComponent,
        ReportComponent, ReportListComponent, ReportGridComponent, ReportFilterComponent, ReportCasesByUnitComponent,
        ReportDaysToResolutionComponent, ReportDaysToEachStatusComponent, ReportCountCasesByStatusComponent, DisplayValuePipe,
        UsersComponent, UserGridComponent, ReportCasesForUserComponent
    ],
    providers: [
        appRoutingProviders, CaseService, CasefileService, CasetagService, PropertyService, RequesterService, AuthenticationService,
        CommentService, DeterminationService, FieldofficeService, ProhibitiondateService, SystemmapService, SystemunitmapService,
        SystemunitService, TagService, UserService, WorkbenchFilterService, ReportCaseService, ReportCaseCountService, ModalService,
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
