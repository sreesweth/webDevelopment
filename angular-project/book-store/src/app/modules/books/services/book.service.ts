import { Injectable } from '@angular/core';
import { CategoryEnum, listOfBooks, Book } from '../../../models/books.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor() { }

  booksInCart: Book[] = [];

  getBooksByCategory(selectedCategory: CategoryEnum): Observable<Book[]> {

    let catBooks = listOfBooks.filter(x => x.catagory === selectedCategory);
    return new Observable((observer) => {
      observer.next(catBooks);
      observer.complete();
    });
  }

  addBookToCart( quantity: number, selectedBook: Book) {
    selectedBook.noOfBooks = quantity;
    this.booksInCart.push(selectedBook);
  }

  resetObservable() {
    this.getBooksByCategory(CategoryEnum.Health).subscribe();
  }

  getBooks() {
    //response( x=> {
    // what to do with that response
    // })
  }
}
