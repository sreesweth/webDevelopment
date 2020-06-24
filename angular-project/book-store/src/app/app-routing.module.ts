import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './modules/home/component/home/home.component';
import { HeaderComponent } from './Newcomponent/header/header.component';
import { NavigationComponent } from './Newcomponent/navigation/navigation.component';
import {MainbooksComponent} from './modules/books/components/mainbooks/mainbooks.component';
import {ContactUsComponent} from './modules/books/components/contact-us/contact-us.component';
import { HealthBooksComponent} from './modules/books/components/health-books/health-books.component';
import {DetailBookComponent} from './modules/books/components/mainbooks/detail-book/detail-book.component';
const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'books',
    loadChildren:()=>import('./modules/books/books.module').then(m=>m.BooksModule)
  },
  {
  path:'contactUs',
    component:ContactUsComponent
  },
 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
