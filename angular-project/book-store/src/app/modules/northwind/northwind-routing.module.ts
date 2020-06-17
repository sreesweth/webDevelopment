import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NorthwindLayoutComponent } from './components/northwind-layout/northwind-layout.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component'; 
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

const routes: Routes = [
    {
        path: '',
        component: NorthwindLayoutComponent,
        children: [
            {
                path: 'customer',
                component: CustomersComponent
            },
            {
                path: 'customer/details/:id',
                component: CustomerDetailsComponent
            },
            {
                path: 'customer/edit/:custId',
                component: CustomerEditComponent
            },
            {
                path: '',
                redirectTo: 'customer',
                pathMatch: 'full'
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NorthwindRoutingModule { }
