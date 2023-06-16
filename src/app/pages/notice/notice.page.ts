import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
 
@Component({
  selector: 'app-notice',
  templateUrl: './notice.page.html',
  styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {

  items: any = [];
  constructor(public dataService: ApiServiceService) { }

  ngOnInit() { 

    this.dataService.getNoticeCat().subscribe((data: any[])=>{
      this.items = data;
    });


  }

}
