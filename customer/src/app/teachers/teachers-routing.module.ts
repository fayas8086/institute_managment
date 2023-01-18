import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
const routes: Routes = [
  
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: TeacherDashboardComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
