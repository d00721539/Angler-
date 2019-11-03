import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-businessaccountadd',
  templateUrl: './businessaccountadd.component.html',
  styleUrls: ['./businessaccountadd.component.css']
})
export class BusinessaccountaddComponent implements OnInit {
  public firstName;
  public lastName;
  public email;
  public role;
  public password;
  public businessName;
  public accountStatuses:any;
  public accountStatus;
  constructor(private httpService : DataService) { 
    this.accountStatuses = [true,false];
  }

  ngOnInit() {
  }

  addUser(){
    if(!this.firstName){
      alert("First name can not be empty!");
      return;
    }else if(!this.lastName){
      alert("Last name can not be empty!");
      return;
    }else if(!this.email){
      alert("Email can not be empty!");
      return;
    }else if(!this.password){
      alert("Password can not be empty!");
      return;
    }else if(!this.businessName){
      alert("Business name can not be empty!")
    }else{
      
    }
    let obj = {
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "email" : this.email,
      "role" : "admin",
      "businessBoolean" : true,
      "password" : this.password,
      "businessName" : this.businessName,
      "accountDisabledStatus" : this.accountStatus
    }
    console.log(obj);
    let url = environment.url + "/user/register";
    this.httpService.post(url,obj).subscribe(res=>{
        console.log(res);
        alert("Account added!")
    },err=>{
        console.log(err);
        alert(err.error.message)
    })

  }

}
