import { Component, OnInit } from '@angular/core';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = 'Tour of Heroes';
  numbers=[10,12,13]
  isGreen=false;
  isNumber=false;
  date=Date()
  price =25;

  
    names = [
      {name:'Jani',country:'Norway'},
      {name:'Carl',country:'Sweden'},
      {name:'Margareth',country:'England'},
      {name:'Hege',country:'Norway'},
      {name:'Joe',country:'Denmark'},
      {name:'Gustav',country:'Sweden'},
      {name:'Birgit',country:'Denmark'},
      {name:'Mary',country:'England'},
      {name:'Kai',country:'Norway'}
    ];
    listofcountry=true;

  
}


