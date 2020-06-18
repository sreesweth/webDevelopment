import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NorthwindRoutingModule } from './northwind-routing.module';
import { NorthwindLayoutComponent } from './components/northwind-layout/northwind-layout.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { NorthWindDataService } from './services/north-wind-data.service';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerResolve } from './services/customer-dataresolver.service';
import { CustomerDetailsResolve } from './services/customer-details-dataresolver.service';


@NgModule({
  declarations: [NorthwindLayoutComponent, CustomersComponent, CustomerDetailsComponent, CustomerEditComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NorthwindRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    NorthWindDataService,
    CustomerResolve,
    CustomerDetailsResolve
  ]
})
export class NorthwindModule { }
