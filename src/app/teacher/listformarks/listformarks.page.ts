import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listformarks', 
  templateUrl: './listformarks.page.html',
  styleUrls: ['./listformarks.page.scss'],
})
export class ListformarksPage implements OnInit {

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
