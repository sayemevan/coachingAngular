import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Teachers } from 'src/app/models/Teachers.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class TeacherregisterService {
 
  dataUrl = 'http://localhost:8080/coaching/api/v1/teachers';

  panelOpenState = false;

  currentTeacher: Teachers = new Teachers();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllTeachers(): Observable<Teachers[]> {
    return this.http.get<Teachers[]>(this.dataUrl, headerOption);
  }

  getTotalTeachers(): Observable<number> {
    return this.http.get<number>(this.dataUrl+'/total', headerOption);
  }

  deleteTeachers(teacherId: number): Observable<Teachers> {
    return this.http.delete<Teachers>(this.dataUrl + '/' + teacherId, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createTeachers(teacher: Teachers): Observable<Teachers> {
    return this.http.post<Teachers>(this.dataUrl, teacher, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateTeachers(teacher: Teachers): Observable<Teachers> {
    return this.http.put<Teachers>(this.dataUrl + '/' + teacher.teacherId, teacher, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
