import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-businessaccountdisable',
  templateUrl: './businessaccountdisable.component.html',
  styleUrls: ['./businessaccountdisable.component.css']
})
export class BusinessaccountdisableComponent implements OnInit {
  public id;
  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  deleteUser(){
    let url = environment.url + "/user/delete?id=" + this.id;
    if(!this.id){
      alert("Id can not be empty!");
      return;
    }else if(!this.httpService.isInt(this.id)){
      alert("Id must be a number")
      return;
    }
    this.httpService.delete(url).subscribe(res=>{
      console.log(res);
      alert("User has been deleted!")
    },err=>{
      console.log(err);
      alert("User with that Id does not exist!");
    })
  }
}
