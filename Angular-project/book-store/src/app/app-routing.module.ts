import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './Modules/home/home.component';
import { MainBooksComponent } from './Modules/books/components/main-books/main-books.component';
import { DetailBookComponent } from './Modules/books/components/detail-book/detail-book.component'



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '##',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'books',
    component: MainBooksComponent
  },
  {
    path: 'books/:categories',
    component: DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
