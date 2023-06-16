import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/alert.service';
import { HttpClient} from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';
import { of , Observable, Subject} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.page.html',
  styleUrls: ['./editstudent.page.scss'],
})
export class EditstudentPage implements OnInit {
  userDetails:any;
  uid: any;
  pid:any; 
  myuser:any;
  items:any;
  role:any;
  public dialCode: string;
  simpleObservable = new Subject();
  simpleObservable$ = this.simpleObservable.asObservable();
  constructor(
    private alertService: AlertService,
    public http:HttpClient,  
    public dataService: ApiServiceService,
    public router: Router,
    private actRoute: ActivatedRoute,
    

  ) { 
    this.uid = this.actRoute.snapshot.params.uid;
    this.pid = this.actRoute.snapshot.params.pid;
  } 

  ngOnInit() {

    this.role = localStorage.getItem('role');
    this.dataService.getClasses().subscribe((data: any[])=>{
      this.items = data;
      
    });

    /* Student details by post ID */
    this.dataService.getUserDetails(this.uid).subscribe((data: any[])=>{
      this.userDetails=data;
      this.simpleObservable.next(this.userDetails);
      //alert(this.userDetails.image);
      this.dialCode = this.userDetails.class;
      //console.log('UserData', this.userDetails.extra.data);
    });

  }

  update(form: NgForm) {

    //alert(form.value.fee);
     
    if(form.value.username=="")
    {
      this.alertService.presentToast("Name cannot be blank");
      return false;
    }
    if(form.value.email=="") 
    {
      this.alertService.presentToast("Email cannot be blank");
      return false;
    }
    // if(form.value.password=="")
    // {
    //   this.alertService.presentToast("Password cannot be blank");
    //   return false;
    // }
    if(form.value.father=="")
    {
      this.alertService.presentToast("Father'name cannot be blank");
      return false;
    }
    if(form.value.mobile=="")
    {
      this.alertService.presentToast("Mobile cannot be blank");
      return false;
    }
    if(form.value.class=="") 
    {
      this.alertService.presentToast("Select Class");
      return false;
    }
    

    this.dataService.updateStudent(form, this.uid, this.pid).subscribe(
      (data: any[]) => {
        this.myuser = data;
        if(this.myuser.code=="success"){
          this.alertService.presentToast(this.myuser.message);
           setTimeout(function() {
            this.simpleObservable.next(this.userDetails);
          }.bind(this), 2000);
        }else{
          this.alertService.presentToast(this.myuser.message);
        }
        
      },
    
    );
    
  }

}
