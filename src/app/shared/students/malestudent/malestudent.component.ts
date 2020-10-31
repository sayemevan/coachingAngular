import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Students } from 'src/app/models/Students.model';
import { StudentregisterService } from 'src/app/services/studentregister/studentregister.service';

@Component({
  selector: 'app-malestudent',
  templateUrl: './malestudent.component.html',
  styleUrls: ['./malestudent.component.css']
})
export class MalestudentComponent implements OnInit {

  displayedColumns: string[] = ['Student ID', 'Student Name', 'Gender','DOB','Class', 'Group','Batch'];
  dataSource: MatTableDataSource<Students>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public studentRegService: StudentregisterService
  ) { }

  ngOnInit(): void {
    this.getAllMaleStudents();
    this.studentRegService.refreshNeed.subscribe(() => {
      this.getAllMaleStudents();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllMaleStudents(){
    this.studentRegService.getAllMaleStudents().subscribe(
      (data: Students[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

}
