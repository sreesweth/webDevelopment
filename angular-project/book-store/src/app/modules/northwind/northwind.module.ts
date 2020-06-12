import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NorthwindRoutingModule } from './northwind-routing.module';
import { NorthwindLayoutComponent } from './components/northwind-layout/northwind-layout.component';
import { CustomersComponent } from './components/customers/customers.component';



@NgModule({
  declarations: [NorthwindLayoutComponent, CustomersComponent],
  imports: [
    CommonModule,
    NorthwindRoutingModule
  ]
})
export class NorthwindModule { }
