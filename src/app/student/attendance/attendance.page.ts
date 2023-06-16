import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  options:any;
  uid:any;
  months:any[] = 
  [
    {
      "month": "January"
    },
    {
      "month": "February"
    },
    {
      "month": "March"
    },
    {
      "month": "April"
    },
    {
      "month": "May"
    },
    {
      "month": "June" 
    },
    {
      "month": "July"  
    },
    {
      "month": "August"
    },
    {
      "month": "September"
    },
    {
      "month": "October" 
    },
    {
      "month": "November"
    },
    {
      "month": "December"
    }
  ];
  constructor(public dataService: ApiServiceService,private actRoute: ActivatedRoute) { 
    this.uid = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.dataService.getForms().subscribe((data: any[])=>{
      this.options = data;
    });
  }

}
