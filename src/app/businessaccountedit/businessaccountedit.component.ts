import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-businessaccountedit',
  templateUrl: './businessaccountedit.component.html',
  styleUrls: ['./businessaccountedit.component.css']
})
export class BusinessaccounteditComponent implements OnInit {
  public id;
  public firstName;
  public lastName;
  public email;
  public password;
  public role;
  public businessName;
  public accountStatus;
  public accountStatuses:any;

  constructor(private httpService : DataService) {  
      this.accountStatuses = [true,false];
  }

  ngOnInit() {
  }

  updateUser(){
    if(!this.id){
      alert("Id can not be empty!");
      return;
    }else if(!this.httpService.isInt(this.id)){
      alert("Id must be a number!");
      return;
    }
    else if(!this.firstName){
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
    }else{

    }
    let url = environment.url + "/user/update";
    let obj = {
      "id" : this.id,
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "password" : this.password,
      "email" : this.email,
      "role" : "admin",
      "businessBoolean" : true,
      "businessName" : this.businessName,
      "accountDisabledStatus" : this.accountStatus
    }
    this.httpService.put(url,obj).subscribe(res=>{
      console.log(res);
      alert("User has been updated!")
    },err=>{
      console.log(err);
      alert("An error has been occurred!")
    })
  }
  getUserById(){
    if(!this.httpService.isInt(this.id)){
      alert("Id must be a number");
      return;
    }
    let url = environment.url + "/user/business/id?id=" + this.id;
    this.httpService.get(url).subscribe(res=>{
      console.log(res);
      let obj = Object(res);
      if(res === null){
        alert("No account found with given id!")
      }
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.email = obj.email;
      this.password = obj.password;
      this.accountStatus = obj.accountDisabledStatus;
      this.businessName = obj.businessName;
    },err=>{
      console.log(err);
      alert("An error has been occurred retriving user information!")
    })
  }
}
