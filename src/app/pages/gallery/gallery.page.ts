import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
 
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html', 
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  items: any = [];
  constructor(public dataService: ApiServiceService) {
  }

  ngOnInit() {
  
     this.dataService.getImages().subscribe((data: any[])=>{
      this.items = data;
    });


  }

}
