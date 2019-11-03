import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortable, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-productglobal',
  templateUrl: './productglobal.component.html',
  styleUrls: ['./productglobal.component.css']
})
export class ProductglobalComponent implements OnInit {

  displayedColumns: string[] = ['id', 'barcodeNumber', 'name', 'quantity','businessName'];
  dataSource = new MatTableDataSource<any>();

  constructor(private httpService:DataService) { }
// to put next to the class fields of the component

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
  ngOnInit() {
    this.httpService.get("http://localhost:8080/product").subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err => {
      console.log(err);
    })
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
}
