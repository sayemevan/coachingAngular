import { Component, OnInit } from '@angular/core';
import { TeacherpaymentService } from 'src/app/services/teacherpayment/teacherpayment.service';

@Component({
  selector: 'app-teacherpaymentreport',
  templateUrl: './teacherpaymentreport.component.html',
  styleUrls: ['./teacherpaymentreport.component.css']
})
export class TeacherpaymentreportComponent implements OnInit {

  constructor(
    public teacherPaymentService: TeacherpaymentService
  ) { }

  ngOnInit(): void {
  }

  src = "http://localhost:8080/reportTeacher/"+this.teacherPaymentService.currentTeacherpayment.tpId;

}
