import { Component, OnInit } from '@angular/core';
import { CandidateServiceService } from '../services/candidate-service.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-candidate-management',
  templateUrl: './candidate-management.component.html',
  styleUrls: ['./candidate-management.component.css']
})
export class CandidateManagementComponent implements OnInit {
  All_Candidates: any;

  constructor(
    private candidateServices: CandidateServiceService,
    private router: Router,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.candidateServices.candidates$.subscribe(candidates => {
      this.All_Candidates = candidates;
    });
    this.candidateServices.getAllCadidates().subscribe();
  }

  deleteCandidate(id: any) {
    console.log(id);
    this.candidateServices.deleteCandidate(id).subscribe();
  }

  updateCandidate(id: any) {
    // Update candidate logic
  }
}
