import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

import { LoginComponent } from './admin/login/login.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { DashComponent } from './students/dash/dash.component';
import { StudentloginComponent } from './students/studentlogin/studentlogin.component';

const routes: Routes = [
  {
    path: '',
    component: StudentloginComponent,
  },
  {
    path: 'studentdash',
    component: DashComponent,
  },
{
path:'admin',component:LoginComponent
},{
  path:'registration',component:RegistrationComponent
},

{
  path:'dashboard',component:DashboardComponent
},
{
  path:'orders',component:OrdersComponent
},
{
  path:'about',component:AboutComponent
},
{ path: 'teachers', loadChildren: () => import('./teachers/teachers.module').then(m => m.TeachersModule) },
{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
