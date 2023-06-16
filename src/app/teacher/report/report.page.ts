import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  items:any;
  items2:any;
  constructor(public dataService: ApiServiceService,) { }

  ngOnInit() {
    /* Getting banners */
    this.dataService.getReport().subscribe((data: any[])=>{
    this.items = data;
    //alert(1);
    });

    this.dataService.getReportJuniors().subscribe((data: any[])=>{
      this.items2 = data;
      //alert(1);
      });


  }

} 
