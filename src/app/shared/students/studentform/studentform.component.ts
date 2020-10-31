import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/models/Students.model';
import { StudentregisterService } from 'src/app/services/studentregister/studentregister.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {

  gender: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  constructor(
    public studentRegService: StudentregisterService
  ) { }

  ngOnInit(): void {
  }

  createOrUpdateStudent(currentStudents: Students) {

    if (currentStudents.student_id != null) {
      this.updateStudents(currentStudents);
    } else {
      this.createStudents(currentStudents);
    }
  }

  createStudents(student: Students) {
    this.studentRegService.createStudents(student).subscribe();
  }

  updateStudents(student: Students) {
    this.studentRegService.updateStudents(student).subscribe();
  }

  clear() {
    this.studentRegService.currentStudent = new Students();
  }

}
