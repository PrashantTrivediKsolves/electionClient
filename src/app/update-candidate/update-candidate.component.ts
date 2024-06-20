import { Component, OnInit } from '@angular/core';
import { CandidateServiceService } from '../services/candidate-service.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {

  constructor(private candiateservice:CandidateServiceService) { }
  statusMessage="login";

  ngOnInit(): void {
  };

  updateCandidate(data:any)
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
