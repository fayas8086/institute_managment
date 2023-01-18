import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './teachers.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import{MatIconModule}  from '@angular/material/icon';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { CommonModule } from '@angular/common';
import { TeachernavComponent } from './teachernav/teachernav.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    TeachersComponent,
    LoginComponent,
    TeacherDashboardComponent,
    TeachernavComponent,
    AddStudentComponent,
    StudentListComponent
  ],
  imports: [
    TeachersRoutingModule,FormsModule,ReactiveFormsModule, MatSlideToggleModule,
    ReactiveFormsModule,
    NgxPaginationModule,MatIconModule,
      MatSidenavModule,
      CommonModule,
 MatSelectModule,
      FormsModule,
      MDBBootstrapModule,
      MdbAccordionModule,
      HttpClientModule,
      MdbCarouselModule,
      MdbCheckboxModule,
      MdbCollapseModule,
      MdbDropdownModule,
      MdbFormsModule,
      MdbModalModule,
      MdbPopoverModule,
      MdbRadioModule,
      MdbRangeModule,
      MdbRippleModule,
      MdbScrollspyModule,
      MdbTabsModule,
      MdbTooltipModule,
      MdbValidationModule,
      MatSlideToggleModule,
      ReactiveFormsModule,
      NgxPaginationModule
  ],  schemas: [ NO_ERRORS_SCHEMA ],
})
export class TeachersModule { }
