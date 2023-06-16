import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-checkattendance',
  templateUrl: './checkattendance.page.html',
  styleUrls: ['./checkattendance.page.scss'],
})
export class CheckattendancePage implements OnInit {

  items: any = [];
  constructor(public dataService: ApiServiceService) { }

  ngOnInit() {
    this.dataService.getClasses().subscribe((data: any[])=>{
      this.items = data;
    });
  }

}
