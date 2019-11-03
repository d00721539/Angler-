import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public obj = {
	"barcodeNumber" : "",
	"name" :  "",
  "isCheckedOut" : "",
  "quantity" : ""
  }
  public productName;
  public barcodeNumber;
  public isCheckedOut = false;
  public quantity:any;
  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
 
  AddProduct(){
    let url = "http://localhost:8080/product"
    if(!this.productName){
      alert("Product name can not be empty!");
      return;
    }else if(!this.barcodeNumber){
      alert("Barcode number can not be empty!");
      return;
    }else if(!this.quantity){
      alert("Quantity can not be empty!");
      return;
    }
    if(!this.httpService.isInt(this.quantity)){
      alert("Quantity must be number!");
      return;
    }
    else if(this.barcodeNumber.length > 32){
      alert("Barcode number can not have more than 32 digits!");
      return;
    }
    let obj = {
      "barcodeNumber" : this.barcodeNumber,
      "name" :  this.productName,
      "isCheckedOut" : false,
      "quantity" : this.quantity,
      "businessName" : localStorage.getItem("businessName")
      }
      console.log(obj);
      console.log(url);
      this.httpService.post(url,obj).subscribe(res=>{
        console.log(res);
        alert("succesfully added!");
      }, err =>{
        console.log(err);
      })
  }
}
