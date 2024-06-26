import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private signinservice:AuthenticationService) { }

  ngOnInit(): void {
  }

  signIn(data:any)
  {
    this.signinservice.signinUser(data);
  }

}
