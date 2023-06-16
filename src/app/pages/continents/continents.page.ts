import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.page.html',
  styleUrls: ['./continents.page.scss'],
})
export class ContinentsPage implements OnInit {

  constructor() { }
  items: any[] = [
    {
      'continent': 'Asia', 
    },
    {
      'continent': 'Africa',
    },
    {
      'continent': 'Europe',
    },
    {
      'continent': 'Americas',
    },
    {
      'continent': 'Oceania'
    },
  ];

  ngOnInit() {
    
  }

}
