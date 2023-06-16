import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
 
@Component({  
  selector: 'app-about', 
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit { 

  singlepage: any;
  constructor(public dataService: ApiServiceService) { } 

  ngOnInit() {

    this.dataService.getAbout().subscribe((data: any[])=>{
      data['media_url'] = data['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium'].source_url;
      this.singlepage = data;
    });



  }

}
