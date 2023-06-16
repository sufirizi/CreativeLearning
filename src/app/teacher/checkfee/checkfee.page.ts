import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-checkfee', 
  templateUrl: './checkfee.page.html',
  styleUrls: ['./checkfee.page.scss'],
})
export class CheckfeePage implements OnInit {
  items: any = [];
  constructor(public dataService: ApiServiceService) { }
 
  ngOnInit() {
    this.dataService.getClasses().subscribe((data: any[])=>{
      this.items = data;
    });
  } 

}
