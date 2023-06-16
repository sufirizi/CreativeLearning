import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-singlenotice', 
  templateUrl: './singlenotice.page.html', 
  styleUrls: ['./singlenotice.page.scss'], 
})
export class SinglenoticePage implements OnInit {

  id: string;
  post: any;
  constructor(
    private actRoute: ActivatedRoute,
    public dataService: ApiServiceService
  ) { 
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {

  this.dataService.getAllNotice(this.id).subscribe((data: any[])=>{
    this.post = data;
  });

  }

}
