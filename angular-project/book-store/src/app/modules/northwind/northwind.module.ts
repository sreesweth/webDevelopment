import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorthwindRoutingModule } from './northwind-routing.module';
import { NorthwindLayoutComponent } from './components/northwind-layout/northwind-layout.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { NorthWindDataService } from './services/north-wind-data.service';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';



@NgModule({
  declarations: [NorthwindLayoutComponent, CustomersComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NorthwindRoutingModule
  ],
  providers: [
    NorthWindDataService
  ]
})
export class NorthwindModule { }
