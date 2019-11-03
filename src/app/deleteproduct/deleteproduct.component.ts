import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  public id ;

  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  deleteProductById(){
    if(!this.id){
      alert("Id can not be empty!");
      return;
    }else if(!this.httpService.isInt(this.id)){
      console.log("asdasd");
      alert("Id must be a number!");
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
