import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/alert.service';
import { HttpClient} from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marksform',
  templateUrl: './marksform.page.html',
  styleUrls: ['./marksform.page.scss'],
})
export class MarksformPage implements OnInit {
  
  subjects:any[] = 
  [
    {"sub": "English"},
    {"sub": "Urdu"},
    {"sub": "Maths"},
    {"sub": "L.Science"},
    {"sub": "P.Science"},
    {"sub": "Science"},
    {"sub": "History"},
    {"sub": "Geography"},
    {"sub": "Computer"},
    {"sub": "Hindi"},
    {"sub": "Bengali"},
    {"sub": "GK"}
  ];

  remarks:any[] = 
  [
    {"remark": "Good"},
    {"remark": "Very Good"},
    {"remark": "Excellent"},
    {"remark": "Very weak"},
    {"remark": "Hard work needed"},
    {"remark": "Very Poor"},
  ] 

  pid:any;
  response:any;
  name:any;
  constructor(
    private alertService: AlertService,
    public http:HttpClient,  
    public dataService: ApiServiceService,
    public router: Router, 
    private actRoute: ActivatedRoute,
  ) { 
    this.pid = this.actRoute.snapshot.params.pid;
  }

  ngOnInit() {
    //alert(this.pid);
    this.dataService.getUserReport(this.pid).subscribe(
      (data: any[]) => {
        this.response = data;
        console.log(this.response);
        if(this.response.code=="success"){
          this.name = this.response.name;
        }else{
          this.name = '';
        }
        
      },
    
    );

  }

  addmarks(form: NgForm) {
 
    console.log(form.value);
    //alert(form.value.subject);
    return false;
    if(form.value.subject==undefined)
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
      this.alertService.presentToast("Full Marks cannot be blank");
      return false;
    }
    if(form.value.marks_obtained=="")
    {
      this.alertService.presentToast("Marks Obtained cannot be blank");
      return false;
    }
    if(form.value.result==undefined)
    {
      this.alertService.presentToast("Result cannot be blank");
      return false;
    } 
    if(form.value.remarks==undefined)
    {
      this.alertService.presentToast("Remarks cannot be blank");
      return false;
    } 
    
    this.dataService.addMarks(form, this.pid).subscribe(
      (data: any[]) => {
        this.response = data;
        if(this.response.code=="success"){
          this.alertService.presentToast(this.response.message);
           setTimeout(function() {
            form.resetForm();
          }.bind(this), 2000);
        }else{
          this.alertService.presentToast(this.response.message);
        }
        
      },
    
    );
    
  }


}
