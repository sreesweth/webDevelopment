import { Component, OnInit } from '@angular/core';
import { FormField } from '../../../../models/form-field-model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CategoryEnum, Book } from 'src/app/models/books.model';

// Dependancy Injection

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

category: CategoryEnum;
bookList: Array<Book> = [];
noOfBooks: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService
    ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(x => {
      this.category = x.category;
      if (this.category) {
         this.bookService.getBooksByCategory(this.category).subscribe(response => {
          this.bookList = response;
         });
      }
    });
  }

  addToCart(selectedBook: Book) {
    console.log('selected Book:', selectedBook);
  }

  calculateTotalValue(book: Book) {
    return `$${(book.price * book.noOfBooks).toFixed(2)}`;
  }

}
