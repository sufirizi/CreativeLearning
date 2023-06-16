import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-studentlistatt',
  templateUrl: './studentlistatt.page.html',
  styleUrls: ['./studentlistatt.page.scss'],
})
export class StudentlistattPage implements OnInit {

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
    this.role = localStorage.getItem('role'),
    this.dataService.getStudents(this.slug).subscribe((data: any[])=>{
      this.items = data;
    });
  }

}
