import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.css']
})
export class SignupuserComponent implements OnInit {

  constructor(private signupservice:AuthenticationService) { }

  ngOnInit(): void {
  }
  signUp(data: any) {
    console.log(data);
    this.signupservice.signUpService(data);
  }
  
}
