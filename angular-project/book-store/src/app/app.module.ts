import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // Decorative

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample/sample.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule(
  {
  declarations: [
    AppComponent,
    SampleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
