import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Newcomponent/header/header.component';
import { NavigationComponent } from './Newcomponent/navigation/navigation.component';
import { HomeModule} from './../app/modules/home/home.module';
import { RouterModule,Routes} from '@angular/router';
import {BooksModule} from './modules/books/books.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BooksModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}



