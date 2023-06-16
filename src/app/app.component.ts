import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx'; 
import { CartService } from 'src/app/cart.service';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';
import {SplashScreen} from '@capacitor/splash-screen';

// Show the splash for an indefinite amount of time:
// SplashScreen.show({
//   autoHide: false
// });

// Show the splash for two seconds and then automatically hide it:
// SplashScreen.show({
//   showDuration: 8000,
//   autoHide: true
// });

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'], 
})
export class AppComponent {
  ifloggedin = 0;
  // user:any;
  constructor(
    private platform: Platform,
    private navCtrl: NavController,
    private alertService: AlertService,
    public cartService: CartService,
    public router: Router
  ) {
    //alert(this.ifloggedin);
    //   this.user = JSON.parse(localStorage.getItem('user'));
    //   if(this.user != null){
    //     this.ifloggedin = 1;
    //  }else{
    //       this.ifloggedin=0;
    //   }
  
    this.initializeApp();
  }

  initializeApp() {
  this.platform.ready().then(() => {
    //this.statusBar.styleDefault();
      //SplashScreen.hide();
      setTimeout(() => {
        SplashScreen.hide();
      }, 4000);
    //this.authService.getToken();
  });
}

logoutUser(){
  //alert(1);
  localStorage.removeItem('id');
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  this.router.navigate(['/login']);
}

}


