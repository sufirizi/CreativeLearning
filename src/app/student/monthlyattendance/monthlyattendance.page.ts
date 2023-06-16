import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-monthlyattendance',
  templateUrl: './monthlyattendance.page.html',
  styleUrls: ['./monthlyattendance.page.scss'],  
}) 
export class MonthlyattendancePage implements OnInit {
  month:any;
  uid:any;
  response: any;
  constructor(
    public dataService: ApiServiceService,
    private actRoute: ActivatedRoute, 
    ) { 
    this.month = this.actRoute.snapshot.params.month;
    this.uid = this.actRoute.snapshot.params.uid;
  }

  ngOnInit() {
    //alert(this.month);
    this.dataService.getUserMonthlyattendance(this.month, this.uid).subscribe((data: any[])=>{
      this.response = data;
      //alert(this.response.message);
    });
  }

}
