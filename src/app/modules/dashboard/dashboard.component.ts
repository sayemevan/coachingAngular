import { Component, OnInit } from '@angular/core';
import { StudentregisterService } from 'src/app/services/studentregister/studentregister.service';
import { TeacherregisterService } from 'src/app/services/teacherregister/teacherregister.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalStudent: number;
  totalTeacher: number;

  constructor(
    public studentRegService: StudentregisterService,
    public teacherRegService: TeacherregisterService
  ) { }

  ngOnInit(): void {
    this.getTotalStudent();
    this.studentRegService.refreshNeed.subscribe(() => {
      this.getTotalStudent();
    });
    this.getTotalTeacher();
    this.teacherRegService.refreshNeed.subscribe(() => {
      this.getTotalTeacher();
    });
  }

  getTotalStudent(){
    this.studentRegService.getTotalStudents().subscribe(
      (data: number) => {
        this.totalStudent = data;
      }
    );
  }

  getTotalTeacher(){
    this.teacherRegService.getTotalTeachers().subscribe(
      (data: number) => {
        this.totalTeacher = data;
      }
    );
  }

}
