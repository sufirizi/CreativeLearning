import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-classlist',  
  templateUrl: './classlist.page.html',
  styleUrls: ['./classlist.page.scss'],
})
export class ClasslistPage implements OnInit { 

  items: any = [];
  constructor(
    private actRoute: ActivatedRoute,
    public dataService: ApiServiceService
  ) { }

  ngOnInit() {
    //alert(1);
    this.dataService.getClassesatt().subscribe((data: any[])=>{
      this.items = data;
      console.log(this.items);
    });
  }

}
