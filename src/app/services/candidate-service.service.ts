import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {
  private candidatesSubject = new BehaviorSubject<any[]>([]);
  public candidates$ = this.candidatesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadAllCandidates();
  }
  addNewCandidate(data: any){
    this.http.post("http://localhost:8001/candidate", data,{observe:'response'}).subscribe((res)=>
    {
      if(res)
        {
          console.log(data);
          console.log(res);
        }
    })
  }
  getAllCadidates(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8001/all_candidate").pipe(
      tap(candidates => {
        this.candidatesSubject.next(candidates);
      })
    );
  }
  deleteCandidate(id: any): Observable<any> {
    return this.http.delete(`http://localhost:8001/candidate/${id}`).pipe(
      tap(() => {
        this.loadAllCandidates(); // Refresh the candidates list after deleting
      })
    );
  }
  updateCandidate(data: any): Observable<any> {
    return this.http.put(`http://localhost:8001/candidate/${data.id}`, data).pipe(
      tap(() => {
        this.loadAllCandidates(); // Refresh the candidates list after updating
      })
    );
  }
  getCandidateById(id: any): Observable<any> {
    return this.http.get(`http://localhost:8001/candidate/${id}`);
  }
  private loadAllCandidates() {
    this.getAllCadidates().subscribe(); // This will trigger the tap and update the BehaviorSubject
  }
}
