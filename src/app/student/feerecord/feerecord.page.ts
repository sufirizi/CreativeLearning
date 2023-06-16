import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
 
@Component({ 
  selector: 'app-feerecord',
  templateUrl: './feerecord.page.html',
  styleUrls: ['./feerecord.page.scss'], 
})
export class FeerecordPage implements OnInit {

  options:any;
  id: any;  
  items: any = [];
  constructor( 
    private actRoute: ActivatedRoute,
    public dataService: ApiServiceService,
  ) { 
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.dataService.getUserDetails(this.id).subscribe((data: any[])=>{
      this.items = data;
    }); 

    this.dataService.getForms().subscribe((data: any[])=>{
      this.options = data;
    });
  }

}
