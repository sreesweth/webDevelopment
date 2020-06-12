import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBooksComponent } from './components/main-books/main-books.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { BookService } from './services/book.service';
import { BooksRoutingModule } from './books-routing.module';
import { FormsModule } from '@angular/forms';
import { BookCardComponent } from './components/book-card/book-card.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    MainBooksComponent,
    DetailBookComponent,
    BookCardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  providers: [
    BookService
  ],
  exports: [
    DetailBookComponent
  ]
})
export class BooksModule { }
