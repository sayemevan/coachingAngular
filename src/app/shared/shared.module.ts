import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentformComponent } from './students/studentform/studentform.component';
import { StudentlistComponent } from './students/studentlist/studentlist.component';
import { TeacherformComponent } from './teachers/teacherform/teacherform.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { StudentchildComponent } from './students/studentchild/studentchild.component';
import { MalestudentComponent } from './students/malestudent/malestudent.component';
import { StudentregisterService } from '../services/studentregister/studentregister.service';
import { TeacherregisterService } from '../services/teacherregister/teacherregister.service';
import { TeacherchildComponent } from './teachers/teacherchild/teacherchild.component';
import { TeacherlistComponent } from './teachers/teacherlist/teacherlist.component';
import { StudentpaymentformComponent } from './students/studentpaymentform/studentpaymentform.component';
import { StudentpaymentlistComponent } from './students/studentpaymentlist/studentpaymentlist.component';
import { TeacherpaymentformComponent } from './teachers/teacherpaymentform/teacherpaymentform.component';
import { TeacherpaymentlistComponent } from './teachers/teacherpaymentlist/teacherpaymentlist.component';
import { StudentpaymentService } from '../services/studentpayment/studentpayment.service';
import { TeacherpaymentService } from '../services/teacherpayment/teacherpayment.service';
import { MatDialogModule } from '@angular/material/dialog';
import { PdfViewerModule  } from 'ng2-pdf-viewer';
import { StudentpaymentreportComponent } from './report/studentpaymentreport/studentpaymentreport.component';
import { TeacherpaymentreportComponent } from './report/teacherpaymentreport/teacherpaymentreport.component';
import { FemalestudentComponent } from './students/femalestudent/femalestudent.component';
import { AvailablefundComponent } from './fund/availablefund/availablefund.component';



@NgModule({
  declarations: [
    StudentformComponent,
    StudentlistComponent,
    TeacherformComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    StudentchildComponent,
    MalestudentComponent,
    TeacherchildComponent,
    TeacherlistComponent,
    StudentpaymentformComponent,
    StudentpaymentlistComponent,
    TeacherpaymentformComponent,
    TeacherpaymentlistComponent,
    StudentpaymentreportComponent,
    TeacherpaymentreportComponent,
    FemalestudentComponent,
    AvailablefundComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule,
    MatDialogModule,
    PdfViewerModule
  ],
  providers: [
    StudentregisterService,
    TeacherregisterService,
    StudentpaymentService,
    TeacherpaymentService
  ],
  exports: [
    StudentformComponent,
    StudentlistComponent,
    TeacherformComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    StudentchildComponent,
    MalestudentComponent,
    TeacherchildComponent,
    TeacherlistComponent,
    StudentpaymentformComponent,
    StudentpaymentlistComponent,
    TeacherpaymentformComponent,
    TeacherpaymentlistComponent,
    StudentpaymentreportComponent,
    TeacherpaymentreportComponent,
    FemalestudentComponent
  ]
})
export class SharedModule { }
