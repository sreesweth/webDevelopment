import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { NavigationComponent } from '../app/navigation/navigation.component';
import { HomeModule } from './Modules/home/home.module';
import {  BooksModule } from './Modules/books/books.module';
import { ModelsComponent } from './models/models.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ModelsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BooksModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
