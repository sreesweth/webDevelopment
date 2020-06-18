import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NorthwindLayoutComponent } from './components/northwind-layout/northwind-layout.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component'; 
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerResolve } from './services/customer-dataresolver.service';
import { CustomerDetailsResolve } from './services/customer-details-dataresolver.service';

const routes: Routes = [
    {
        path: '',
        component: NorthwindLayoutComponent,
        children: [
            {
                path: 'customer',
                component: CustomersComponent,
                resolve: {
                    customer: CustomerResolve
                }
            },
            {
                path: 'customer/details/:id',
                component: CustomerDetailsComponent, 
                resolve: {
                    customer: CustomerDetailsResolve
                }
            },
            {
                path: 'customer/edit/:id',
                component: CustomerEditComponent,
                resolve: {
                    customer: CustomerDetailsResolve
                }
            },
            {
                path: 'customer/create',
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
