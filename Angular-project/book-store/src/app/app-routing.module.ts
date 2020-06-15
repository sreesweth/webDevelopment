import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './Modules/home/home.component';
import { MainBooksComponent } from './Modules/books/components/main-books/main-books.component'


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
    path: 'products',
    component: MainBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
