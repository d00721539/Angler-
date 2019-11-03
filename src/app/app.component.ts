import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularBarcode';
  public isAdmin;
  public isGlobal;
  public isLocal;
  public role;
  public userName;
  constructor(public router: Router){
    setInterval(() => {    //<<<---    using ()=> syntax
      this.userName = localStorage.getItem("userName");
      this.role =  localStorage.getItem("role");
      if(this.role === "admin"){
        this.isAdmin = true;
        this.isGlobal = false;
        this.isLocal = false;
      }else if(this.role === "global"){
        this.isGlobal = true;
        this.isAdmin = false;
        this.isLocal = false;
      }else if (this.role === "local"){
        this.isLocal = true;
        this.isAdmin = false;
        this.isGlobal = false;
      }else{

      }
    }, 50);
  }
  ngOnInit(){
    localStorage.clear();
  }
  logout(){
    localStorage.clear();
    this.router.navigate([""]);
  }
}
