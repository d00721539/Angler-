import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public barcodeNumber;
  public myDate : Date = new Date();
  constructor(private httpService:DataService) { 
 }

  ngOnInit() {}
  checkoutItem(){
    console.log(this.barcodeNumber)
    if(!this.barcodeNumber){
      alert("Barcode number can not be empty!");
      return;
    }
    let url = "http://localhost:8080/product/checkout?id=" + this.barcodeNumber + "&businessName=" + localStorage.getItem("businessName");
    this.httpService.put(url,"").subscribe(res=>{
      let response = Object(res);
      let checkoutobject = {
        "userEmail" : localStorage.getItem("userEmail"),
	      "productid": response.id,
        "productBarcodeNumber": response.barcodeNumber,
        "productName": response.name,
        "productQuantity": response.quantity,
        "productIsCheckedOut": response.checkedOut,
        "checkedOutDate" : this.myDate,
        "businessName" : localStorage.getItem("businessName")
      }
      let checkouturl = environment.url + "/checkout";
      this.httpService.post(checkouturl, checkoutobject).subscribe(res=>{
            console.log(res);
            alert("Checkot successful!");
      },err=>{
          console.log(err);
      })
      console.log(res);

    },err=>{
    //  alert("Product given barcode could not be found!")
    alert(err.error.message)
      console.log(err);
    })
  }
}
