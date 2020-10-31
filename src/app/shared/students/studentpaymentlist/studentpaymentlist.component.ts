import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Studentpayment } from 'src/app/models/Studentpayment.model';
import { StudentpaymentService } from 'src/app/services/studentpayment/studentpayment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentpaymentlist',
  templateUrl: './studentpaymentlist.component.html',
  styleUrls: ['./studentpaymentlist.component.css']
})
export class StudentpaymentlistComponent implements OnInit {

  
  payid: number;

  displayedColumns: string[] = ['ID', 'Student Name', 'Class', 'Batch','Amount', 'Payment Date','Receipts', 'Actions'];
  dataSource: MatTableDataSource<Studentpayment>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(
    public studentPaymentService: StudentpaymentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllStudentpayment();
    this.studentPaymentService.refreshNeed.subscribe(() => {
      this.getAllStudentpayment();
    });
  }

  togglePanel() {
    this.studentPaymentService.panelOpenState = !this.studentPaymentService.panelOpenState
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllStudentpayment(){
    this.studentPaymentService.getAllStudentpayment().subscribe(
      (data: Studentpayment[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  deleteStudentpayment(spId: number) {
    this.studentPaymentService.deleteStudentpayment(spId).subscribe();
  }

  editStudentpayment(studentPayment: Studentpayment) {
    this.studentPaymentService.currentStudentpayment = Object.assign({}, studentPayment);
    this.togglePanel();
  }

  studentPaymentReceipt(studentPayment: Studentpayment){
    this.studentPaymentService.currentStudentpayment = Object.assign({}, studentPayment);
    this.router.navigate(["/reportstudent"]);
  }

}
