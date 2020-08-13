import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public collection:any;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestolist().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection)
    });
  }

}
