import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/alert.service';
import { HttpClient} from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  myuser:any; 
  items:any;
  constructor(
    private alertService: AlertService,
    public http:HttpClient, 
    public dataService: ApiServiceService,
    public router: Router,
    
  ) { } 

  ngOnInit() {
    this.dataService.getClasses().subscribe((data: any[])=>{
      this.items = data;
    });
  }
 
  register(form: NgForm) {

    //alert(form.value.class);
     
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
    if(form.value.password=="")
    {
      this.alertService.presentToast("Password cannot be blank");
      return false;
    }
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
    

    this.dataService.register(form).subscribe(
      (data: any[]) => {
        this.myuser = data;
        if(this.myuser.code=="success"){
          this.alertService.presentToast("Registered successfully! Need approval");
           setTimeout(function() {
            this.router.navigate(['/login']);
          }.bind(this), 2000);
        }else{
          this.alertService.presentToast(this.myuser.message);
        }
        
      },
    
    );
    
  }

}
