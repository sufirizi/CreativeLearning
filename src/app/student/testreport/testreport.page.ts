import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testreport',
  templateUrl: './testreport.page.html',
  styleUrls: ['./testreport.page.scss'],
})
export class TestreportPage implements OnInit {

  items:any;
  pid:any;
  constructor(
    public dataService: ApiServiceService,
    private actRoute: ActivatedRoute
  ) { 
    this.pid = this.actRoute.snapshot.params.pid;
  } 

  ngOnInit() {
    //alert(this.pid);
    this.dataService.getUserReport(this.pid).subscribe((data: any[])=>{
      this.items=data;
    });  
  }

}
