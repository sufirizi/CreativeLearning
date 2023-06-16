import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-liststatus',
  templateUrl: './liststatus.page.html',
  styleUrls: ['./liststatus.page.scss'],
})
export class ListstatusPage implements OnInit {

  items: any = [];
  constructor(public dataService: ApiServiceService) { }

  ngOnInit() {
    this.dataService.getClasses().subscribe((data: any[])=>{
      this.items = data;
    });
  }

}
