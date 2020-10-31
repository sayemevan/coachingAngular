import { Component, OnInit } from '@angular/core';
import { Studentpayment } from 'src/app/models/Studentpayment.model';
import { Students } from 'src/app/models/Students.model';
import { StudentpaymentService } from 'src/app/services/studentpayment/studentpayment.service';
import { StudentregisterService } from 'src/app/services/studentregister/studentregister.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-studentpaymentform',
  templateUrl: './studentpaymentform.component.html',
  styleUrls: ['./studentpaymentform.component.css']
})
export class StudentpaymentformComponent implements OnInit {
 
  gender: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  allStudents: Students[];

  constructor(
    public studentPaymentService: StudentpaymentService,
    public studentRegService: StudentregisterService
  ) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){

    this.studentRegService.getAllStudents().subscribe(
      (data: Students[]) => {
        this.allStudents = data
      }
    );

  }

  createOrUpdateStudentpayment(currentStudentpayment: Studentpayment) {

    if (currentStudentpayment.spId != null) {
      this.updateStudentpayment(currentStudentpayment);
    } else {
      this.createStudentpayment(currentStudentpayment);
    }
  }

  createStudentpayment(studentPayment: Studentpayment) {
    this.studentPaymentService.createStudentpayment(studentPayment).subscribe();
  }

  updateStudentpayment(studentPayment: Studentpayment) {
    this.studentPaymentService.updateStudentpayment(studentPayment).subscribe();
  }

  clear() {
    this.studentPaymentService.currentStudentpayment = new Studentpayment();
  }


}
