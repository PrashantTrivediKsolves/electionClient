import { Component, OnInit } from '@angular/core';
import { CandidateServiceService } from '../services/candidate-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {
candidate_Data:any;
  constructor(private candiateservice:CandidateServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let candidate_id=this.route.snapshot.paramMap.get('id');
    console.log(candidate_id);
    candidate_id&&this.candiateservice.getCandidateById(candidate_id).subscribe((data)=>
    {
      this.candidate_Data=data;
    })
  };

  updateCandidate(data:any)
  {
    if(this.candidate_Data)
      {
        data.id=this.candidate_Data.id;
      }
      this.candiateservice.updateCandidate(data).subscribe((res)=>
      {
        if(res)
          {
            this.router.navigate(["Candidate-Management"]);
          }
      })
  }
}
