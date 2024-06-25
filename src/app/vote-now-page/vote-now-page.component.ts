import { Component, OnInit } from '@angular/core';
import { CandidateServiceService } from '../services/candidate-service.service';
import { VoteServiceService } from '../services/vote-service.service';
@Component({
  selector: 'app-vote-now-page',
  templateUrl: './vote-now-page.component.html',
  styleUrls: ['./vote-now-page.component.css']
})
export class VoteNowPageComponent implements OnInit {
  All_candidates:any;
  userId:any;
  voteCounts: { [key: number]: number } = {};

  constructor(private candidateService:CandidateServiceService,private voteservice:VoteServiceService) { }
message="";
  ngOnInit(): void {
    this.candidateService.getAllCadidates().subscribe((res)=>
    {
      this.All_candidates=res;
      this.All_candidates.forEach((candidate:any) => {
        this.fetchVoteCounts(candidate.id);
      });
    })

    const userStore = localStorage.getItem('user');
    const userData = userStore && JSON.parse(userStore);
    this.userId = userData?.id;
  }
  voteToTheCandidate(candidateId:any)
  {
    const body = {
      candidateId:candidateId,
      userId: this.userId,
    };
    this.voteservice.vote(body).subscribe((res) => {
      console.log(res);
        if(res["message"])
        {
          this.message=res.message;
        }
        else if(res["admin"])
        {
          this.message=res.admin;
        }
        this.fetchVoteCounts(candidateId);
    });
    setTimeout(() => {
      this.message="";
    }, 3000);
  }
  fetchVoteCounts(candidateId: any) {
    this.voteservice.voteCount(candidateId).subscribe((res: any) => {
      this.voteCounts[candidateId] = res.length;
    });
  }




}
