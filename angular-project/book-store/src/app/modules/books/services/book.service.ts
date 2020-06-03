import { Injectable } from '@angular/core';
import { CategoryEnum, listOfBooks, Book } from '../../../models/books.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooksByCategory(selectedCategory: CategoryEnum): Observable<Book[]> {

    let catBooks = listOfBooks.filter(x => x.catagory === selectedCategory);
    return new Observable((observer) => {
      observer.next(catBooks);
      observer.complete();
    });
  }

  getBooks() {
    //response( x=> {
    // what to do with that response
    // })
  }
}
