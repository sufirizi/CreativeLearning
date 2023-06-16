import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({ 
  selector: 'app-downloadpost',
  templateUrl: './downloadpost.page.html',
  styleUrls: ['./downloadpost.page.scss'],
})
export class DownloadpostPage implements OnInit {
  slug: string; 
  post: any;
  items: any = []; 
  constructor(
    private actRoute: ActivatedRoute,
    public dataService: ApiServiceService
  ) { 
    this.slug = this.actRoute.snapshot.params.slug;
  } 
 
  ngOnInit() { 

    this.dataService.getDownloads(this.slug).subscribe((data: any[])=>{
      this.post = data;
      
    });
  }

  openLink(id){
    
    this.dataService.getLink(id).subscribe((data: any[])=>{
      this.items = data;
    });
    
    window.open(this.items);
  }

}
