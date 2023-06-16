import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.page.html',
  styleUrls: ['./download.page.scss'], 
}) 
export class DownloadPage implements OnInit {
 
  items: any = [];
  constructor( 
    public dataService: ApiServiceService
  ) 
    { }

  ngOnInit() {

    this.dataService.getSubjects().subscribe((data: any[])=>{
      this.items = data;
    });

  }

}
