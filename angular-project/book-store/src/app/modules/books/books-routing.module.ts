import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBooksComponent } from './components/main-books/main-books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
    {
        path: '',
        component: MainBooksComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: ':category',
        component: DetailBookComponent
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
