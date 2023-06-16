import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/alert.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addmarks',
  templateUrl: './addmarks.page.html',
  styleUrls: ['./addmarks.page.scss'],
})
export class AddmarksPage implements OnInit {

  items: any = [];
  slug:any;
  response:any;
  options:any;
  constructor(
    private actRoute: ActivatedRoute,
    public dataService: ApiServiceService,
    private alertService: AlertService,
    public http:HttpClient, 
    public router: Router, 
  ) { 
    this.slug = this.actRoute.snapshot.params.slug;
  }

  ngOnInit() {
    //alert(this.slug);
    this.dataService.getStudents(this.slug).subscribe((data: any[])=>{
      this.items = data;
      console.log(this.items);
    });
    
    this.dataService.getForms().subscribe((data: any[])=>{
      this.options = data;
    });
  }

  marksSubmit(form: NgForm) {

 
    for(var i=1; i<=this.items.data.length; i++){
      alert(i);
    }

    //alert(form.value.subject);
    console.log('Form value', form.value);
    
    //alert(form.value.length);
    //return false
    if(form.value.subject=="")
    {
      this.alertService.presentToast("Subject cannot be blank");
      return false;
    }
    if(form.value.date=="")
    {
      this.alertService.presentToast("Date cannot be blank");
      return false;
    }
    if(form.value.full_marks=="")
    {
      this.alertService.presentToast("Full marks cannot be blank");
      return false;
    }

  
    // this.dataService.addMarks(form, this.slug).subscribe((data: any[]) => {
    //     this.response = data;
    //     console.log(this.response);
    //     // if(this.response.code=="success"){
    //     //   this.alertService.presentToast(this.response.message);
    //     // }else{
    //     //   this.alertService.presentToast(this.response.message);
    //     // }
        
    //   },
    
    // );
    
  }


}
