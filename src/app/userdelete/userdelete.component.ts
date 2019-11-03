import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-userdelete',
  templateUrl: './userdelete.component.html',
  styleUrls: ['./userdelete.component.css']
})
export class UserdeleteComponent implements OnInit {
  public id;
  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  
  deleteUser(){
    if(!this.id){
      alert("Id can not be empty!");
      return;
    }else if(!this.httpService.isInt(this.id)){
      alert("Id must be a number");
      return;
    }

    let url = environment.url + "/user/deletelocal?id=" + this.id + "&role=local" + "&businessName=" + localStorage.getItem("businessName");
    this.httpService.delete(url).subscribe(res=>{
      console.log(res);
      alert("User has been deleted!")
    },err=>{
      console.log(err);
      alert("User with that Id does not exist!");
    })
  }
}
