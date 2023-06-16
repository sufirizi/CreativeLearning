import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({ 
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  slug: string; 
  items: any = [];
  role:any;
  constructor(
    public dataService: ApiServiceService,
    private actRoute: ActivatedRoute
  ) 
  { 
    this.slug = this.actRoute.snapshot.params.slug;
  }
 
  ngOnInit() {
    this.role = localStorage.getItem('role');
    this.dataService.getStudents(this.slug).subscribe((data: any[])=>{
      this.items = data;
      //console.log(this.items);
    });
  }
 
}
