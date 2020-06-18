import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { NorthWindDataService } from './north-wind-data.service';
import { Customer } from 'src/app/models/customer.model';

@Injectable()
export class CustomerResolve implements Resolve<Customer[]> {

  constructor(private dataService: NorthWindDataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataService.getAllCustomers();
  }
}
