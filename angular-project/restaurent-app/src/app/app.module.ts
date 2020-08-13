import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { UpdateRestaurentComponent } from './update-restaurent/update-restaurent.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import{ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './add-restaurent/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurentComponent,
    UpdateRestaurentComponent,
    LoginComponent,
    ListComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
