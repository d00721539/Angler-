import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
import { MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-businessaccountlist',
  templateUrl: './businessaccountlist.component.html',
  styleUrls: ['./businessaccountlist.component.css']
})
export class BusinessaccountlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password', 'role', 'businessName', 'accountDisabledStatus'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private httpService : DataService) { 
    let url = environment.url + "/user/business";
    this.httpService.get(url).subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err=>{
      console.log(err);
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
  ngOnInit() {  

  }

}
