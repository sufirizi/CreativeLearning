import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gkworld',
  templateUrl: './gkworld.page.html',
  styleUrls: ['./gkworld.page.scss'],
})
export class GkworldPage implements OnInit { 

  constructor() { }

  items: any[] = [
    {
      'page': 'Countries by continents', 
      'link': '/continents/',
    },
    {
      'page': 'States of India', 
      'link': '/states/',
    }
    
  ];
  ngOnInit() {
    console.log(this.items);
  }

}
