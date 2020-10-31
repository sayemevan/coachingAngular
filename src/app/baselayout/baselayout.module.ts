import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaselayoutComponent } from './baselayout.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { TeachersComponent } from '../modules/teachers/teachers.component';
import { StudentsComponent } from '../modules/students/students.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { TeacherpaymentComponent } from '../modules/teacherpayment/teacherpayment.component';
import { StudentpaymentComponent } from '../modules/studentpayment/studentpayment.component';



@NgModule({
  declarations: [
    BaselayoutComponent,
    DashboardComponent,
    TeachersComponent,
    StudentsComponent,
    StudentpaymentComponent,
    TeacherpaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class BaselayoutModule { }
