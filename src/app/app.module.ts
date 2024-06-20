import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';

import { HeaderComponent } from './header/header.component';

import {HttpClientModule} from "@angular/common/http";

import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';

import { ContactComponent } from './contact/contact.component'

import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';

import { SignupuserComponent } from './signupuser/signupuser.component';
import { CandidateManagementComponent } from './candidate-management/candidate-management.component';
import { EnrollCandidateComponent } from './enroll-candidate/enroll-candidate.component';
import { PollResultComponent } from './poll-result/poll-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashBoardComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    SignupuserComponent,
    CandidateManagementComponent,
    EnrollCandidateComponent,
    PollResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
