import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { NorthWindDataService } from '../../services/north-wind-data.service';
import { FormBuilder, FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerId: string;
  customerInfo: Customer;
  customerFormGroup: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dataService: NorthWindDataService
    ) {
      this.customerFormGroup = this.fb.group({
        'contactTitle': '',
        'contactName': '',
        'companyName': '',
        'street': '',
        'city': '',
        'country': '',
        'phone': '',
        'region': '',
        'postalCode': ''
      });
     }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.customerId = params.custId;
      if (this.customerId ) {
        this.dataService.getCustomerByID(this.customerId).subscribe(customer => {
          this.customerInfo = customer;
          if(this.customerInfo) {
            this.customerFormGroup.controls['contactTitle'].setValue(this.customerInfo.contactTitle);
            this.customerFormGroup.controls['contactName'].setValue(this.customerInfo.contactName);
            this.customerFormGroup.controls['companyName'].setValue(this.customerInfo.companyName);
            this.customerFormGroup.controls['street'].setValue(this.customerInfo.address.street);
            this.customerFormGroup.controls['city'].setValue(this.customerInfo.address.city);
            this.customerFormGroup.controls['country'].setValue(this.customerInfo.address.country);
            this.customerFormGroup.controls['phone'].setValue(this.customerInfo.address.phone);
            this.customerFormGroup.controls['region'].setValue(this.customerInfo.address.region);
            this.customerFormGroup.controls['postalCode'].setValue(this.customerInfo.address.postalCode);
          }
        });
      }
    });
  }

  submitData() {
    const cust = this.customerFormGroup.getRawValue();
    this.dataService.updateCustomerInfo({
      address: {
        city: cust.city,
        country: cust.country,
        phone: cust.phone,
        postalCode: cust.postalCode,
        region: cust.region,
        street: cust.street
      },
      companyName: cust.companyName,
      contactName: cust.contactName,
      contactTitle: cust.contactTitle,
      id: this.customerId
    }).subscribe(res => {
      console.log(res);
    });

  }

}
