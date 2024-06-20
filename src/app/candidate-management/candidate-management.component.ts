import { Component, OnInit } from '@angular/core';
import { CandidateServiceService } from '../services/candidate-service.service';


@Component({
  selector: 'app-candidate-management',
  templateUrl: './candidate-management.component.html',
  styleUrls: ['./candidate-management.component.css']
})
export class CandidateManagementComponent implements OnInit {
  All_Candidates:any;
  constructor(private candidateServices:CandidateServiceService)
  {
    this.showAllCandidate();
  }
  showAllCandidate()
  {
    this.candidateServices.getAllCadidates().subscribe((res)=>
      {
        this.All_Candidates=res;
        console.log(this.All_Candidates);
      })
  }

  ngOnInit(): void {
    this.showAllCandidate();
  };
  deleteCandidate(id:any)
  {
    console.log(id);
    this.candidateServices.deleteCandidate(id).subscribe((res)=>
    {
      if(res)
        {
          this.showAllCandidate();
        }
    })

  }
}
