import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';

import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';

import { ContactComponent } from './contact/contact.component';

import { AboutComponent } from './about/about.component';

import { SignupuserComponent } from './signupuser/signupuser.component';

import { CandidateManagementComponent } from './candidate-management/candidate-management.component';

import { EnrollCandidateComponent } from './enroll-candidate/enroll-candidate.component';

import { PollResultComponent } from './poll-result/poll-result.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"signup",
    component:SignupuserComponent
  }
,
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"admin",
    component:AdminDashBoardComponent
  },
  {
    path:"Candidate-Management",
    component:CandidateManagementComponent
  },
  {
    path:"Enroll-Candidate",
    component:EnrollCandidateComponent
  },
  {
    path:"Poll-Result",
    component:PollResultComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
