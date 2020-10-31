import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Students } from 'src/app/models/Students.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class StudentregisterService {

  dataUrl = 'http://localhost:8080/coaching/api/v1/students';

  panelOpenState = false;

  currentStudent: Students = new Students();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.dataUrl, headerOption);
  }
  getTotalStudents(): Observable<number> {
    return this.http.get<number>(this.dataUrl+'/total', headerOption);
  }

  getAllMaleStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.dataUrl+'/male', headerOption);
  }

  getAllFemaleStudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.dataUrl+'/female', headerOption);
  }

  deleteStudents(studentId: number): Observable<Students> {
    return this.http.delete<Students>(this.dataUrl + '/' + studentId, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createStudents(student: Students): Observable<Students> {
    return this.http.post<Students>(this.dataUrl, student, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateStudents(student: Students): Observable<Students> {
    return this.http.put<Students>(this.dataUrl + '/' + student.student_id, student, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
