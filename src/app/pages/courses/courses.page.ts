import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({ 
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  items: any = [];
  constructor(public dataService: ApiServiceService) { }

  ngOnInit() {

    this.dataService.getCourses().subscribe((data: any[])=>{
      this.items = data;
    });


  }

}
