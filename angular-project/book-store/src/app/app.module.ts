import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // Decorative

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeModule } from './modules/home/home.module';
import { BooksModule } from './modules/books/books.module';


@NgModule(
  {
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
  bootstrap: [AppComponent]
})
export class AppModule { }
