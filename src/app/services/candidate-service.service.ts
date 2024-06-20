import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CandidateServiceService {
  status=new BehaviorSubject<any>("");
  constructor(private http:HttpClient,private router:Router) { }
  addNewCandidate(data:any)
  {
    this.http.post("http://localhost:8001/candidate", data,{observe:'response'}).subscribe((res)=>
      {
          if(res)
          {
            console.log(res);
            this.status.next("Candidate Added success fully");
          }
      });
  }
}
