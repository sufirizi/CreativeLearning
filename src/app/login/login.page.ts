import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { AlertService } from 'src/app/alert.service';
import { HttpClient} from '@angular/common/http';
import { ApiServiceService } from 'src/app/api-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],  
})

export class LoginPage implements OnInit {
  isDarkMode = false;
  myuser:any;
  
  constructor(
    private alertService: AlertService,
    public http:HttpClient, 
    public dataService: ApiServiceService,
    public router: Router,
  ) { 
    if(localStorage.getItem('id')!=null){
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    if (localStorage.getItem('mode') == 'dark') {
      document.body.classList.toggle('dark', true);
      this.isDarkMode = true;
      this.changeStatusBar(true); 
    }
  }
 

  async login(form: NgForm) {    
    //alert(form.value.email); 
    //alert(form.value.password);  
    //this.alertService.presentToast(form.value.email);
    this.dataService.sendphone(form.value.email, form.value.password).subscribe(
      (data: any[]) => {
        this.myuser = data;
        //alert(this.myuser.code);
        if(this.myuser.code=="success"){  
          //alert(this.myuser.data.roles);
          //console.log('UserData', this.myuser.data.data);
          localStorage.setItem('role', this.myuser.data.roles);
          localStorage.setItem('name', this.myuser.data.data.display_name);
          localStorage.setItem('id', this.myuser.data.data.ID);
          localStorage.setItem('email', this.myuser.data.data.user_email);
          this.alertService.presentToast("Logged in. Please wait");
           setTimeout(function() {
            this.router.navigate(['/dashboard']);
          }.bind(this), 2000);
        }else{
          this.alertService.presentToast(this.myuser.message);
        }
        
      },
    
    );
  }

  onDarkMode(event) {
    document.body.classList.toggle('dark', event.detail.checked);
    localStorage.setItem('mode', event.detail.checked ? 'dark':'light');
    this.changeStatusBar(event.detail.checked);
  }

  changeStatusBar(isStatusBarLight) {
    StatusBar.setStyle({
      style: isStatusBarLight ? Style.Dark : Style.Light
    });
  }

}
