import { Component, OnInit } from '@angular/core';
import { CandidateServiceService } from '../services/candidate-service.service';

@Component({
  selector: 'app-enroll-candidate',
  templateUrl: './enroll-candidate.component.html',
  styleUrls: ['./enroll-candidate.component.css']
})
export class EnrollCandidateComponent implements OnInit {

  constructor(private candiateservice:CandidateServiceService) { }
  statusMessage="login";

  ngOnInit(): void {
  };

  addCandidate(data:any)
  {
    console.log("candiate data");
    console.log(data);
    this.candiateservice.addNewCandidate(data);

  }


}
