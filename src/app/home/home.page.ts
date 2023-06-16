import { Component, OnInit} from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  items: any = [];
  features: any=[];
  notice: any=[];
  options: any=[];
  stars: any;


  constructor(
    public dataService: ApiServiceService,
  ) {

  }

  onDarkMode(event) {
    document.body.classList.toggle('dark', event.detail.checked);
    localStorage.setItem('mode', event.detail.checked ? 'dark':'light');
  }

  ngOnInit() {

  /* Getting banners */
  this.dataService.getStars().subscribe((data: any[])=>{
    this.stars = data;
  });

  /* Getting banners */
  this.dataService.getBanner().subscribe((data: any[])=>{
    this.items = data;
  });

   /* Getting features from home id=6 */
  this.dataService.getFeatures('6').subscribe((data: any[])=>{
    this.features = data;
  });

   /* Getting latest notice */
  this.dataService.getNotice().subscribe((data: any[])=>{
    this.notice = data;
  });

  /* Get forms */
  this.dataService.getForms().subscribe((data: any[])=>{
    this.options = data;
  });

  /* Push Notification Logic here */
  PushNotifications.requestPermissions().then(result => {
    if (result.receive === 'granted') {
      // Register with Apple / Google to receive push via APNS/FCM
      PushNotifications.register();
    } else {
      // Show some error
    }
  });

  // On success, we should be able to receive notifications
  // PushNotifications.addListener('registration',
  //   (token: Token) => {
  //     alert('Push registration success, token: ' + token.value);
  //   }
  // );

  // Some issue with our setup and push will not work
  // PushNotifications.addListener('registrationError',
  //   (error: any) => {
  //     alert('Error on registration: ' + JSON.stringify(error));
  //   }
  // );

  // Show us the notification payload if the app is open on our device
  PushNotifications.addListener('pushNotificationReceived',
    (notification: PushNotificationSchema) => {
      alert('Push received: ' + JSON.stringify(notification));
    }
  );

  // Method called when tapping on a notification
  PushNotifications.addListener('pushNotificationActionPerformed',
    (notification: ActionPerformed) => {
      alert('Push action performed: ' + JSON.stringify(notification));
    }
  );

  /* Push Notification Logic here */

}

downloadForm(link: string){
  window.open(link);
}

}

