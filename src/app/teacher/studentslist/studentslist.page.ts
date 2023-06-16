import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { AlertService } from 'src/app/alert.service';


@Component({
  selector: 'app-studentslist',
  templateUrl: './studentslist.page.html', 
  styleUrls: ['./studentslist.page.scss'], 
}) 
export class StudentslistPage implements OnInit {

  
  form: FormGroup;
  slug: string; 
  items: any = [];
  response: any; 
  date:any;
  
  constructor(
    public dataService: ApiServiceService,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) 
  { 
    this.slug = this.actRoute.snapshot.params.slug;
  } 

  ngOnInit() { 
    this.dataService.getStudents(this.slug).subscribe((data: any[])=>{
      this.items = data;
    });
  }


  emailFormArray: Array<any> = [];

  onChange(email:string, isChecked: boolean) {
      if(isChecked) {
        this.emailFormArray.push(email);
      } else {
        let index = this.emailFormArray.indexOf(email);
        this.emailFormArray.splice(index,1);
      }
  }

  duplicate() {
    this.date = (<HTMLInputElement>document.getElementById("date")).value;
    //alert(this.date);
    //return false;
    this.dataService.sendattendance(this.emailFormArray, this.slug, this.date).subscribe((data: any[])=>{
      this.response = data;
      //alert(this.response.message);
      this.alertService.presentToast(this.response.message);
    });
  }


 
}
