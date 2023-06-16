import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.page.html',
  styleUrls: ['./teachers.page.scss'], 
})
export class TeachersPage implements OnInit {
  
  items: any = [];  
  constructor(public dataService: ApiServiceService) { }

  ngOnInit() { 

    this.dataService.getTeachers().subscribe((data: any[])=>{
      this.items = data;
    });

  }

}
