import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Teacherpayment } from 'src/app/models/Teacherpayment.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class TeacherpaymentService {

  dataUrl = 'http://localhost:8080/coaching/api/v1/teacherpayment';

  panelOpenState = false;

  currentTeacherpayment: Teacherpayment = new Teacherpayment();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllTeacherpayment(): Observable<Teacherpayment[]> {
    return this.http.get<Teacherpayment[]>(this.dataUrl, headerOption);
  }

  getTotalTeacherpayment(): Observable<number> {
    return this.http.get<number>(this.dataUrl+'/total', headerOption);
  }

  deleteTeacherpayment(tpId: number): Observable<Teacherpayment> {
    return this.http.delete<Teacherpayment>(this.dataUrl + '/' + tpId, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createTeacherpayment(teacherPayment: Teacherpayment): Observable<Teacherpayment> {
    return this.http.post<Teacherpayment>(this.dataUrl, teacherPayment, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateTeacherpayment(teacherPayment: Teacherpayment): Observable<Teacherpayment> {
    return this.http.put<Teacherpayment>(this.dataUrl + '/' + teacherPayment.tpId, teacherPayment, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
}
