import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starstatus',
  templateUrl: './starstatus.page.html', 
  styleUrls: ['./starstatus.page.scss'],
})
export class StarstatusPage implements OnInit {

  role:any;
  slug: string; 
  items: any = [];
  response: any; 
  constructor(
    public dataService: ApiServiceService,
    private actRoute: ActivatedRoute,
  ) { 
    this.slug = this.actRoute.snapshot.params.slug;
  } 

  ngOnInit() {
    //alert();
    this.role = localStorage.getItem('role'),
    this.dataService.getMonthlyStatus(this.slug).subscribe((data: any[])=>{
      this.items = data;
    });
  }

}
