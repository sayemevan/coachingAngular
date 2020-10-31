import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Students } from 'src/app/models/Students.model';
import { StudentregisterService } from 'src/app/services/studentregister/studentregister.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  displayedColumns: string[] = ['Student ID', 'Student Name', 'Gender','DOB','Class', 'Group','Batch', 'Actions'];
  dataSource: MatTableDataSource<Students>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public studentRegService: StudentregisterService
  ) { }
 
  ngOnInit(): void {
    this.getAllStudents();
    this.studentRegService.refreshNeed.subscribe(() => {
      this.getAllStudents();
    });
  }

  togglePanel() {
    this.studentRegService.panelOpenState = !this.studentRegService.panelOpenState
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllStudents(){
    this.studentRegService.getAllStudents().subscribe(
      (data: Students[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  deleteStudents(studentId: number) {
    this.studentRegService.deleteStudents(studentId).subscribe();
  }

  editStudents(student: Students) {
    this.studentRegService.currentStudent = Object.assign({}, student);
    this.togglePanel();
  }

}
