import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password;
  public email;

  constructor(private httpService : DataService, private router : Router) {    localStorage.clear();
  }

  ngOnInit() {
  }
  submitLogin(){
    let userInfo = {
      "email" : this.email,
      "password" : this.password
    }
    let url = environment.login;
    this.httpService.post(url,userInfo).subscribe(res=>{
      let response = Object(res);
      localStorage.setItem("role",response.role);
      localStorage.setItem("userEmail",this.email);
      localStorage.setItem("userName",response.firstName);
      localStorage.setItem('currentUser',response.email);
      localStorage.setItem("businessName",response.businessName);
      if(localStorage.getItem("role") === "global"){
        this.router.navigate(["businessaccountlist"])
      }else{
      this.router.navigate(["product"]);
      }
    },err=>{
      alert(err.error.message);
    })
  }
}
