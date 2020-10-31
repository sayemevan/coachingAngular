import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Teachers } from 'src/app/models/Teachers.model';
import { TeacherregisterService } from 'src/app/services/teacherregister/teacherregister.service';

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {

  displayedColumns: string[] = ['Teacher ID', 'Teacher Name', 'Gender','Subject Name','Email', 'Joining Date', 'Actions'];
  dataSource: MatTableDataSource<Teachers>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public teacherRegService: TeacherregisterService
  ) { }

  ngOnInit(): void {
    this.getAllTeachers();
    this.teacherRegService.refreshNeed.subscribe(() => {
      this.getAllTeachers();
    });
  }

  togglePanel() {
    this.teacherRegService.panelOpenState = !this.teacherRegService.panelOpenState
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllTeachers(){
    this.teacherRegService.getAllTeachers().subscribe(
      (data: Teachers[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  deleteTeachers(teacherId: number) {
    this.teacherRegService.deleteTeachers(teacherId).subscribe();
  }

  editTeachers(teacher: Teachers) {
    this.teacherRegService.currentTeacher = Object.assign({}, teacher);
    this.togglePanel();
  }

 
}
