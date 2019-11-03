import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (localStorage.getItem('currentUser')) {
          // logged in so return true
          console.log(localStorage.getItem('currentUser'))
          return true;
      }
      // not logged in so redirect to login page with the return url
      this.router.navigate(['']);
      return false;
  }
}