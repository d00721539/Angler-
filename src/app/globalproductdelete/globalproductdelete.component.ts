import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-globalproductdelete',
  templateUrl: './globalproductdelete.component.html',
  styleUrls: ['./globalproductdelete.component.css']
})
export class GlobalproductdeleteComponent implements OnInit {
  public id ;

  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  deleteProductById(){
    if(!this.id){
      alert("Id can not be empty!");
      return;
    }else if(!this.httpService.isInt(this.id)){
      alert("Id must be number!");
      return;
    }
    let url = environment.url + "/product?id=" + this.id;
    this.httpService.delete(url).subscribe(res=>{
      alert("Succesfully deleted!");
    },err=>{
      alert("There is no product with the id provided!")
      console.log(err);
    })
  }
}
