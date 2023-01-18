import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NavbarComponent } from './admin/navbar/navbar.component';
import { OrdersComponent } from './admin/orders/orders.component';

import { AboutComponent } from './admin/about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DemoComponent } from './admin/about/demo/demo.component';
import { ProductsComponent } from './admin/about/products/products.component';
import { ListviewComponent } from './admin/listview/listview.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './admin/registration/registration.component';
import { ModalComponent } from './admin/modal/modal.component';
import { NgCreditCardModule } from "angular-credit-card";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
 DashboardComponent,
 NavbarComponent,
    OrdersComponent,
    ListviewComponent,
    AboutComponent,
    DemoComponent,
    ProductsComponent,
    RegistrationComponent,
    ModalComponent,




  ],
  imports: [MatIconModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,MatSelectModule,
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
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
