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

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService
    ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(x => {
      this.category = x['id'];
      if (this.category) {
         this.bookService.getBooksByCategory(this.category).subscribe(response => {
          this.bookList = response;
         });
      }
    });
  }

}
