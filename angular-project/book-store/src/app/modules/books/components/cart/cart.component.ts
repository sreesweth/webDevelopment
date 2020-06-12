import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from 'src/app/models/books.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private bookservice: BookService) { }

  itemsInCart: Book[] = [];

  ngOnInit(): void {
    console.log(this.bookservice.booksInCart);
    this.itemsInCart = this.bookservice.booksInCart;
  }
  
  calculateTotalValue(book: Book) {
    return `$${(book.price * book.noOfBooks).toFixed(2)}`;
  }

}
