import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortable, MatSort, MatPaginator } from '@angular/material';
export interface PeriodicElement {
  id:number,
  barcodeNumber:string,
  name: string,
  isCheckedOut: string

}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, barcodeNumber: "5", name: 'product', },
//   {id: 2, barcodeNumber: "6", name: 'anotherproduct', },
// ];
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'barcodeNumber', 'name', 'quantity'];
  dataSource = new MatTableDataSource<any>();

  constructor(private httpService:DataService) { }
// to put next to the class fields of the component


  ngOnInit() {
    this.httpService.get("http://localhost:8080/product/business?businessName=" + localStorage.getItem("businessName")).subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err => {
      console.log(err);
    })
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
}
