import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaselayoutComponent } from './baselayout/baselayout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StudentpaymentComponent } from './modules/studentpayment/studentpayment.component';
import { StudentsComponent } from './modules/students/students.component';
import { TeacherpaymentComponent } from './modules/teacherpayment/teacherpayment.component';
import { TeachersComponent } from './modules/teachers/teachers.component';
import { AvailablefundComponent } from './shared/fund/availablefund/availablefund.component';
import { StudentpaymentreportComponent } from './shared/report/studentpaymentreport/studentpaymentreport.component';
import { TeacherpaymentreportComponent } from './shared/report/teacherpaymentreport/teacherpaymentreport.component';
import { FemalestudentComponent } from './shared/students/femalestudent/femalestudent.component';
import { MalestudentComponent } from './shared/students/malestudent/malestudent.component';
import { StudentchildComponent } from './shared/students/studentchild/studentchild.component';
import { TeacherchildComponent } from './shared/teachers/teacherchild/teacherchild.component';


const routes: Routes = [{
  path:'',
  component: BaselayoutComponent,
  children:[{
    path:'',
    component: DashboardComponent
  },
  {
    path:'students',
    component: StudentsComponent,
    children:[{
      path:'',
      component:StudentchildComponent
    },
    {
      path:'malestudents',
      component:MalestudentComponent
    },
    {
      path: 'femalestudents',
      component:FemalestudentComponent
    }]
  },
  {
    path:'teachers',
    component:TeachersComponent,
    children: [{
      path:'',
      component: TeacherchildComponent
    }]

  },
  {
    path:'studentpayment',
    component: StudentpaymentComponent
  },
  {
    path:'teacherpayment',
    component: TeacherpaymentComponent
  },
  {
    path:'reportstudent',
    component: StudentpaymentreportComponent
  },
  {
    path:'reportteacher',
    component: TeacherpaymentreportComponent
  },
  {
    path:'fund',
    component: AvailablefundComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
