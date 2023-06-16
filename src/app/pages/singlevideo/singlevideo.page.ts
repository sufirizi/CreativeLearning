import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-singlevideo',
  templateUrl: './singlevideo.page.html',
  styleUrls: ['./singlevideo.page.scss'],
})
export class SinglevideoPage implements OnInit {

  id: any; 
  items: any = [];
  constructor(
    private actRoute: ActivatedRoute,
    public dataService: ApiServiceService,
    public sanitizer: DomSanitizer
    ) 
    { 
      this.id = this.actRoute.snapshot.params.id;
    } 

  ngOnInit() {
     
    this.dataService.getVideos(this.id).subscribe((data: any[])=>{
      this.items = data;
    });

  } 

  getSafeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
