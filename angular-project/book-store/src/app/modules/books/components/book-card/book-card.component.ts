import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/books.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input()
  databook: Book;

  noOfItems: number;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    console.log(this.databook);
    console.log(this.noOfItems);
  }

}
