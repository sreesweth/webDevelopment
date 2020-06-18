import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NorthWindDataService } from '../../services/north-wind-data.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customerId: string;
  customerInfo: Customer;

  constructor(private activeRoute: ActivatedRoute, private route: Router, private dataService: NorthWindDataService) {

   }

  ngOnInit(): void {
    this.customerInfo = this.activeRoute.snapshot.data['customer'];
    // this.activeRoute.params.subscribe(params => {
    //   this.customerId = params.id;
    //   if (this.customerId) {
    //     this.dataService.getCustomerByID(this.customerId).subscribe(res => {
    //       this.customerInfo = res;
    //     });
    //   }
    // });
  }

}
