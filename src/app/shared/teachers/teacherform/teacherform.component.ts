import { Component, OnInit } from '@angular/core';
import { Teachers } from 'src/app/models/Teachers.model';
import { TeacherregisterService } from 'src/app/services/teacherregister/teacherregister.service';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-teacherform',
  templateUrl: './teacherform.component.html',
  styleUrls: ['./teacherform.component.css']
})
export class TeacherformComponent implements OnInit {
 
  gender: Gender[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'}
  ];

  constructor(
    public teacherRegService: TeacherregisterService
  ) { }

  ngOnInit(): void {
  }

  createOrUpdateTeachers(currentTeachers: Teachers) {

    if (currentTeachers.teacherId != null) {
      this.updateTeachers(currentTeachers);
    } else {
      this.createTeachers(currentTeachers);
    }
  }

  createTeachers(teacher: Teachers) {
    this.teacherRegService.createTeachers(teacher).subscribe();
  }

  updateTeachers(teacher: Teachers) {
    this.teacherRegService.updateTeachers(teacher).subscribe();
  }

  clear() {
    this.teacherRegService.currentTeacher = new Teachers();
  }


}
