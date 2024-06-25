import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VoteServiceService {

  private baseUrl = 'http://localhost:8001';  // Replace with your backend API base URL

  constructor(private http: HttpClient) { }

  vote(body: { candidateId: any; userId: any }): Observable<any> {
    return this.http.post(`${this.baseUrl}/vote`, body);
  }

  voteCount(candidateId:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/votecount/${candidateId}`);
  }

}
