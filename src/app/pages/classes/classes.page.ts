import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

  items: any = [];
  constructor(
    private actRoute: ActivatedRoute,
    public dataService: ApiServiceService
  ) { }

  ngOnInit() { 

    this.dataService.getClasses().subscribe((data: any[])=>{
      this.items = data;
    });
  }

}
