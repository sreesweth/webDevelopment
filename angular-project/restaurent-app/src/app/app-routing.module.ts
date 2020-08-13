import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, convertToParamMap } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HomeComponent } from './add-restaurent/home/home.component';

const routes: Routes = [
  {component:HomeComponent,path:''},
  {component:AddRestaurentComponent,path:'add'},
  {component:UpdateRestaurentComponent,path:'update'},
  {component:UpdateRestaurentComponent,path:'update/:id'},
  {component:ListComponent,path:'list'},
  {component:LoginComponent,path:'login'},
  {component:RegisterComponent,path:'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
