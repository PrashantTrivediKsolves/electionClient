import { Component, OnInit } from '@angular/core';
import { CandidateServiceService } from '../services/candidate-service.service';

@Component({
  selector: 'app-candidate-management',
  templateUrl: './candidate-management.component.html',
  styleUrls: ['./candidate-management.component.css']
})
export class CandidateManagementComponent implements OnInit {

  constructor(private candiateservice:CandidateServiceService) { }
  statusMessage="login";

  ngOnInit(): void {
  };

  addCandidate(data:any)
  {
    console.log("candiate data");
    console.log(data);
    this.candiateservice.addNewCandidate(data);
    this.candiateservice.status.subscribe((res)=>
    {
      this.statusMessage=res;
      // setTimeout(()=>
      // {
      //   this.candiateservice.status.next("");
      //   this.statusMessage="";
      // },3000)
    })
  }

}
