import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
import { MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-globallocaluserlist',
  templateUrl: './globallocaluserlist.component.html',
  styleUrls: ['./globallocaluserlist.component.css']
})
export class GloballocaluserlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password', 'accountDisabledStatus','businessName'];
  dataSource = new MatTableDataSource<any>();

  constructor(private httpService : DataService) {
    let url = environment.url + "/user/global";
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
  ngOnInit() {
  }
 @ViewChild(MatSort) sort: MatSort
 @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

}
