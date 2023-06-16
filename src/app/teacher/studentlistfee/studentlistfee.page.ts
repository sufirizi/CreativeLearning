import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentlistfee', 
  templateUrl: './studentlistfee.page.html',
  styleUrls: ['./studentlistfee.page.scss'],
})
export class StudentlistfeePage implements OnInit { 

  options:any;
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
    this.dataService.getStudents(this.slug).subscribe((data: any[])=>{
      this.items = data;
    });
    
    this.dataService.getForms().subscribe((data: any[])=>{
      this.options = data;
    });
  }

}
