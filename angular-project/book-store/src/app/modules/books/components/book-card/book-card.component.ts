import { Component, OnInit,Input } from '@angular/core';
import { BooksModule } from '../../books.module';
import { Book } from 'src/app/modules/books.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
 @Input() 
 book:Book;
noOfItems:number;
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(){
console.log(this.book)
console.log(this.noOfItems)
  }

}
