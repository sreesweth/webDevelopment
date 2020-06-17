import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

categories:string;

  constructor(private ActiveRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe(x=> {
      this.categories=x['categories'];
    })
  }


}
