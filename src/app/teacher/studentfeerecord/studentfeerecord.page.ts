import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { AlertService } from 'src/app/alert.service';
import { of , Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-studentfeerecord', 
  templateUrl: './studentfeerecord.page.html',
  styleUrls: ['./studentfeerecord.page.scss'], 
})
export class StudentfeerecordPage implements OnInit {

  options:any;
  id: any;  
  items: any = []; 
  form: FormGroup;
  response:any;
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();
  constructor(
    private actRoute: ActivatedRoute,
    public dataService: ApiServiceService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) { 
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.dataService.getStudentFee(this.id).subscribe((data: any[])=>{
      this.items = data;
    }); 

    this.dataService.getForms().subscribe((data: any[])=>{
      this.options = data;
    });
  }

  emailFormArray: Array<any> = [];

  onChange(email:number, isChecked: boolean) {
      if(isChecked) { 
        this.emailFormArray.push(email);
      } else {
        let index = this.emailFormArray.indexOf(email);
        this.emailFormArray.splice(index,1);
      }
  }

  duplicate() {
    //alert(this.emailFormArray.length);
    this.dataService.updatefee(this.emailFormArray, this.id).subscribe((data: any[])=>{
      this.response = data;

      this.dataService.getStudentFee(this.id).subscribe((data: any[])=>{
        this.items = data;
      });

      this.simpleObservable.next(this.items);
      this.alertService.presentToast(this.response.message);
    });
  }

}
