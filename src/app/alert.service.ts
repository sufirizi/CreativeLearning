import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public loggedin = 0;
  user: any = [];
  constructor(private toastController: ToastController) { }
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top',
      color: 'dark'
    });
    toast.present();
  }

    /* Check if user is logged in */
    ifloggedin(){
      this.user = JSON.parse(localStorage.getItem('user'));
      if(this.user != null){
        this.loggedin = 1;
        return this.loggedin;
     }else{
          this.loggedin=0;
          return this.loggedin;
      }
    }
}
 