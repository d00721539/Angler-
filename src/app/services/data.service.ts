import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  get(url) {
      return this.http.get(url);
  }

  post(url, data) {
      return this.http.post(url, data);
  }

  put(url, data) {
      return this.http.put(url, data);
  }
  delete(url) {
    return this.http.delete(url);
}
  login() {
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

  isLoggedIn() {
      if (localStorage.getItem('currentUser')) {
          return true;
      } else {
          return false;
      }
  }

  getCurrentUser(){
      return localStorage.getItem('currentUser');
  }
  isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  }
}
