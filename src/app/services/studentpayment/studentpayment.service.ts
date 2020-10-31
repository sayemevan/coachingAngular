import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Studentpayment } from 'src/app/models/Studentpayment.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class StudentpaymentService {

  dataUrl = 'http://localhost:8080/coaching/api/v1/studentpayment';

  panelOpenState = false;

  currentStudentpayment: Studentpayment = new Studentpayment();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllStudentpayment(): Observable<Studentpayment[]> {
    return this.http.get<Studentpayment[]>(this.dataUrl, headerOption);
  }

  getTotalStudentpayment(): Observable<number> {
    return this.http.get<number>(this.dataUrl+'/total', headerOption);
  }

  deleteStudentpayment(spId: number): Observable<Studentpayment> {
    return this.http.delete<Studentpayment>(this.dataUrl + '/' + spId, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createStudentpayment(studentPayment: Studentpayment): Observable<Studentpayment> {
    return this.http.post<Studentpayment>(this.dataUrl, studentPayment, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateStudentpayment(studentPayment: Studentpayment): Observable<Studentpayment> {
    return this.http.put<Studentpayment>(this.dataUrl + '/' + studentPayment.spId, studentPayment, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
}
 