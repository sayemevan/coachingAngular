import { Component, OnInit } from '@angular/core';
import { StudentpaymentService } from 'src/app/services/studentpayment/studentpayment.service';
import { TeacherpaymentService } from 'src/app/services/teacherpayment/teacherpayment.service';

@Component({
  selector: 'app-availablefund',
  templateUrl: './availablefund.component.html',
  styleUrls: ['./availablefund.component.css']
})
export class AvailablefundComponent implements OnInit {

  totalStudentPayment: number;
  totalTeacherPayment: number;
  balance: DoubleRange;

  constructor(
    public studentPaymentService: StudentpaymentService,
    public teacherPaymentService: TeacherpaymentService
  ) { }

  ngOnInit(): void {
    this.getTotalStudentpayment();
    this.studentPaymentService.refreshNeed.subscribe(() => {
      this.getTotalStudentpayment();
    });
    this.getTotalTeacherpayment();
    this.teacherPaymentService.refreshNeed.subscribe(() => {
      this.getTotalTeacherpayment();
    });
    //this.balance = this.totalStudentPayment - this.totalTeacherPayment;
  }

  getTotalStudentpayment(){
    this.studentPaymentService.getTotalStudentpayment().subscribe(
      (data: number) => {
        this.totalStudentPayment = data;
      }
    );
  }

  getTotalTeacherpayment(){
    this.teacherPaymentService.getTotalTeacherpayment().subscribe(
      (data: number) => {
        this.totalTeacherPayment = data;
      }
    );
  }


}
