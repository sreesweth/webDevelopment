import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainBooksComponent } from './components/main-books/main-books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';


const routes: Routes = [
    {
        path: '',
        component: MainBooksComponent
    },
    {
        path: ':category',
        component: DetailBookComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
