import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBooksComponent } from './components/main-books/main-books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';



@NgModule({
  declarations: [MainBooksComponent, DetailBookComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
