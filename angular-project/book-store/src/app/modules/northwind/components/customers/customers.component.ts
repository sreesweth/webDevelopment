import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NorthWindDataService } from '../../services/north-wind-data.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerList: Customer[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private dataService: NorthWindDataService
    ) { }

  ngOnInit(): void {
    this.customerList = this.activeRoute.snapshot.data['customer'];
    // this.dataService.getAllCustomers().subscribe(res => {
    //   this.customerList = res;
    //   console.log(JSON.stringify(res));
    // });
  }
  
}
