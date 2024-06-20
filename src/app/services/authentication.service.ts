import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';

import {BehaviorSubject,Subject} from 'rxjs'

import { Router } from '@angular/router';

import { EventEmitter } from '@angular/core';

import { jwtDecode } from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userId=new Subject<any>();
  subject = new Subject<String>();
  constructor(private http:HttpClient,private router:Router) { }

  signUpService(data:any)
  {
    this.http.post("http://localhost:8001/signup", data,{observe:'response'}).subscribe((res)=>
      {
          if(res)
          {
            console.log(res);
            this.router.navigate(['login']);
          }
      });
  }
  signinUser(data:any)
  {
    console.log("helllo");
    const body = {
      aadharCard: data.aadharCard,
      password: data.password,
    };
    console.log(body);
    this.http.post("http://localhost:8001/login", body,{withCredentials:true}).subscribe(
      (res: any) => {
        console.log(res);
        if(res)
        {
          localStorage.setItem('user', JSON.stringify(res));
          this.router.navigate(["home"]);

          let token=res.token;

          const decoded = this.getdecode(token);

          console.log("decoded id");

          console.log(decoded.id);
          this.userId.next(decoded.id);

          this.subject.next(decoded.username);

          console.log("role: ");
          console.log(decoded.role);

          if(decoded.role==="admin")
          {
            this.router.navigate(["admin"]);
          }

          else{
            this.router.navigate(["header"]);
          }
        }
      },
      (error) => {
        console.log('Login failed:', error);
      }
    );
  }

  getdecode(token:string):any{
    try{
      return jwtDecode(token);
    }
    catch(error)
    {
      return error
    }
  }

}
