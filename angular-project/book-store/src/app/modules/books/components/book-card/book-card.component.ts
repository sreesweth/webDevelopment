import { Component, OnInit, OnChanges, OnDestroy, SimpleChange,  Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/models/books.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  databook: Book;

  @Input()
  price: number;

  @Output()
  clickCard = new EventEmitter();

  noOfItems: number;

  constructor() {
    console.log('Inside Constructor');
   }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('Inside ngOnChanges');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
  }

  addToCart() {
    this.clickCard.emit({
      quantity: this.noOfItems,
      book: this.databook
    });
  }

  ngOnDestroy(): void {
    console.log('Inside ngOnDestroy');
  }

}
