import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.page.html', 
  styleUrls: ['./states.page.scss'],
})
export class StatesPage implements OnInit {

  items:any;
  count:number;
  constructor(
    public dataService: ApiServiceService
  ) { }

  ngOnInit() {

    this.dataService.getStatesIndia().subscribe((data:any[])=>{
      this.items = data;
      //this.items = this.items.data.states;
    });

  }

}
