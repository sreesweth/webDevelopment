import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AdminModule} from "./modules/admin/admin.module";
import {AuthModule} from "./modules/auth/auth.module";
import {CourseModule} from "./modules/course/course.module";
import{StaticpageModule}from"./modules/staticpage/staticpage.module";
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AuthModule,
    CourseModule,
    StaticpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
