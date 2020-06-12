import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormField } from '../../../../models/form-field-model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CategoryEnum, Book } from 'src/app/models/books.model';
import { Subscription } from 'rxjs';

// Dependancy Injection

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit, OnDestroy {

category: CategoryEnum;
bookList: Array<Book> = [];
noOfBooks: number;
routerParamSubscription: Subscription = new Subscription();
getBooksByCategorySubscription: Subscription = new Subscription();

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService
    ) { }

  ngOnInit(): void {
    this.routerParamSubscription = this.activeRoute.params.subscribe(x => {
      this.category = x.category;
      if (this.category) {
         this.getBooksByCategorySubscription = this.bookService.getBooksByCategory(this.category).subscribe(response => {
          this.bookList = response;
         });
      }
    });
  }

  addToCart(selectedBook: Book) {
    console.log('selected Book:', selectedBook);
  }

  simpleExperiment() {
    this.bookService.resetObservable();
  }

  onAddToCart(event) {
    this.bookService.addBookToCart(event.quantity, event.book);
  }

  ngOnDestroy() {
    this.getBooksByCategorySubscription.unsubscribe();
    this.routerParamSubscription.unsubscribe();
  }
}
