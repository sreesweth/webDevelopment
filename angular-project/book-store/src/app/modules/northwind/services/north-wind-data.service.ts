import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import {map, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class NorthWindDataService {

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get(environment.apiUrl + '/customers')
    .pipe(
      map((res: []) => {
        let customerList:Customer[] = [];
        if (res && res['length'] > 0) {
          res.forEach(customer => {
            const cust: Customer = {
              id: customer['id'],
              address: customer['address'],
              companyName: customer['companyName'],
              contactName: customer['contactName'],
              contactTitle: customer['contactTitle']
            };
            customerList.push(cust);
          });
        }
        return customerList;
    }));
  }

  getCustomerByID(custId: string): Observable<Customer> { 
    //nortwind.sh.net/api/customers/BOAP
    return this.http.get( `${environment.apiUrl}/customers/${custId}`)
    .pipe(
      map( customer => {
        const cust: Customer = {
          id: customer['id'],
          address: customer['address'],
          companyName: customer['companyName'],
          contactName: customer['contactName'],
          contactTitle: customer['contactTitle']
        };
        return cust;
    }));
  }

}
