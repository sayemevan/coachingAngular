import { Component, OnInit } from '@angular/core';
import { Teacherpayment } from 'src/app/models/Teacherpayment.model';
import { Teachers } from 'src/app/models/Teachers.model';
import { TeacherpaymentService } from 'src/app/services/teacherpayment/teacherpayment.service';
import { TeacherregisterService } from 'src/app/services/teacherregister/teacherregister.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-teacherpaymentform',
  templateUrl: './teacherpaymentform.component.html',
  styleUrls: ['./teacherpaymentform.component.css']
})
export class TeacherpaymentformComponent implements OnInit {
 
  gender: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  allTeachers: Teachers[];

  constructor(
    public teacherPaymentService: TeacherpaymentService,
    public teacherRegService: TeacherregisterService
  ) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers(){

    this.teacherRegService.getAllTeachers().subscribe(
      (data: Teachers[]) => {
        this.allTeachers = data
      }
    );

  }

  createOrUpdateTeacherpayment(currentTeacherpayment: Teacherpayment) {

    if (currentTeacherpayment.tpId != null) {
      this.updateTeacherpayment(currentTeacherpayment);
    } else {
      this.createTeacherpayment(currentTeacherpayment);
    }
  }

  createTeacherpayment(teacherPayment: Teacherpayment) {
    this.teacherPaymentService.createTeacherpayment(teacherPayment).subscribe();
  }

  updateTeacherpayment(teacherPayment: Teacherpayment) {
    this.teacherPaymentService.updateTeacherpayment(teacherPayment).subscribe();
  }

  clear() {
    this.teacherPaymentService.currentTeacherpayment = new Teacherpayment();
  }


}
