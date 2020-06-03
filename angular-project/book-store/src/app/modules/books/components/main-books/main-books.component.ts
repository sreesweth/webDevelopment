import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-books',
  templateUrl: './main-books.component.html',
  styleUrls: ['./main-books.component.scss']
})
export class MainBooksComponent implements OnInit {
  category: string;
  constructor( 
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(x => {
      this.category = x['category'];
    });
  }

}
