import { OnInit } from '@angular/core';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("Header component is loggged....");
  }
  async SignUpFun()
  {
    console.log("signUp clicked");
    this.router.navigate(["/signup"]);
  }
  async LoginFun(){
    console.log("login clicked");
    this.router.navigate(["/login"]);
  }

}
