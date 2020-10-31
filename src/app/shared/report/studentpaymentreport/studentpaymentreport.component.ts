import { Component, OnInit } from '@angular/core';
import { StudentpaymentService } from 'src/app/services/studentpayment/studentpayment.service';

@Component({
  selector: 'app-studentpaymentreport',
  templateUrl: './studentpaymentreport.component.html',
  styleUrls: ['./studentpaymentreport.component.css']
})
export class StudentpaymentreportComponent implements OnInit {

  constructor(
    public studentPaymentService: StudentpaymentService
  ) { }

  ngOnInit(): void {
  }

  src = "http://localhost:8080/reportView/"+this.studentPaymentService.currentStudentpayment.spId;

}
