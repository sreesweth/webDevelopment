import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    let isAuthenticated = true;
    // if (this.autheticationService.isUserValid) {
    //   isAuthenticated = true;
    // }
    // alert('Please login to Access Northwind');

    return isAuthenticated;
  }
}
