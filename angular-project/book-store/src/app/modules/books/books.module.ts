import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBooksComponent } from './components/main-books/main-books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { RouterModule } from '@angular/router';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    MainBooksComponent, 
    DetailBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    BookService
  ]
})
export class BooksModule { }
