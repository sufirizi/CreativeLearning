import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  name: string;
  mobile: string;
  email: string;
  message: string;

  bck:string= 'assets/imgs/contact.png';
  success:any;
  options: any;
  singlepage:any;
  result:any;
  constructor(
    public dataService: ApiServiceService,
    private alertService: AlertService,
    ) { }
 
  ngOnInit() {

    this.dataService.getForms().subscribe((data: any[])=>{
      this.options = data;
    });

    this.dataService.getContact().subscribe((data: any[])=>{
      this.singlepage = data;
    });

  }

  processForm() {  

    // alert(this.name);
    // return false;

    if(this.name=="" || this.name==undefined){
      this.alertService.presentToast("Name cannot be blank");
      return false;
    }

    if(this.email=="" || this.email==undefined){
      this.alertService.presentToast("Email cannot be blank");
      return false;
    }

    if(this.mobile=="" || this.mobile==undefined){
      this.alertService.presentToast("Mobile cannot be blank");
      return false;
    }

    if(this.message=="" || this.message==undefined){
      this.alertService.presentToast("Message cannot be blank");
      return false;
    }


    this.dataService.sendmail(this.name, this.email, this.mobile, this.message).subscribe(
      (data: any[]) => {
        this.result = data;
        //alert(this.myuser.code);
        if(this.result.code=="success"){ 
          this.alertService.presentToast(this.result.message);
           setTimeout(function() {
              this.name="";
              this.email="";
              this.mobile="";
              this.message="";
          }.bind(this), 2000);
        }else{
          this.alertService.presentToast(this.result.message);
        }
      },
    );
    
  }

}
