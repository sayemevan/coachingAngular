import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Teacherpayment } from 'src/app/models/Teacherpayment.model';
import { TeacherpaymentService } from 'src/app/services/teacherpayment/teacherpayment.service';

@Component({
  selector: 'app-teacherpaymentlist',
  templateUrl: './teacherpaymentlist.component.html',
  styleUrls: ['./teacherpaymentlist.component.css']
})
export class TeacherpaymentlistComponent implements OnInit {
 
  displayedColumns: string[] = ['ID', 'Teacher Name', 'Subject', 'Amount', 'Payment Date','Receipts', 'Actions'];
  dataSource: MatTableDataSource<Teacherpayment>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public teacherPaymentService: TeacherpaymentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllTeacherpayment();
    this.teacherPaymentService.refreshNeed.subscribe(() => {
      this.getAllTeacherpayment();
    });
  }

  togglePanel() {
    this.teacherPaymentService.panelOpenState = !this.teacherPaymentService.panelOpenState
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllTeacherpayment(){
    this.teacherPaymentService.getAllTeacherpayment().subscribe(
      (data: Teacherpayment[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  deleteTeacherpayment(tpId: number) {
    this.teacherPaymentService.deleteTeacherpayment(tpId).subscribe();
  }

  editTeacherpayment(teacherPayment: Teacherpayment) {
    this.teacherPaymentService.currentTeacherpayment = Object.assign({}, teacherPayment);
    this.togglePanel();
  }

  teacherPaymentReceipt(teacherPayment: Teacherpayment){
    this.teacherPaymentService.currentTeacherpayment = Object.assign({}, teacherPayment);
    this.router.navigate(["/reportteacher"]);
  }


}
