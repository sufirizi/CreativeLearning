import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service'; 

@Component({
  selector: 'app-videotopics',
  templateUrl: './videotopics.page.html',
  styleUrls: ['./videotopics.page.scss'],
})
export class VideotopicsPage implements OnInit {

  url: string = 'https://creativelearning.net.in/wp-json/wp/v2/video';
  items: any = [];  
  constructor(public dataService: ApiServiceService) { } 

  ngOnInit() {
    
     this.dataService.getVideoTopic().subscribe((data: any[])=>{
      this.items = data;
    });


  }

}
