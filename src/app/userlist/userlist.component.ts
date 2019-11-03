import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
import { MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password', 'accountDisabledStatus'];
  dataSource = new MatTableDataSource<any>();

  constructor(private httpService : DataService) { 
    let url = environment.url + "/user/local?role=local&businessName=" +localStorage.getItem("businessName");
    this.httpService.get(url).subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err=>{
      console.log(err);
    })
  }

  ngOnInit() {
  } 
 @ViewChild(MatSort) sort: MatSort
 @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;

  }
}
