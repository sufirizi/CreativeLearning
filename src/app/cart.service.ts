import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  constructor() { }

  public count = 0;
  public loggedin = 0;
  user: any = [];
  mycart: any = [];

  // gettotalproducts(){
  //   //getting stored cart from total products saved in local storage
  //   this.mycart = JSON.parse(localStorage.getItem('carts'));

  //   //checking if products exist in cart then only returning size
  //    if(this.mycart != null){
  //       this.count = this.mycart.length;
  //       return this.count; 
  //    }
  //    //else returning zero  
  //   else{
  //       this.count=0; 
  //       return this.count;
  //   }

  // }

  /* Check if user is logged in */
  ifloggedin(){
    this.user = localStorage.getItem('id');
    if(this.user>0){
      this.loggedin = 1;
      return this.loggedin;
   }else{
        this.loggedin=0;
        return this.loggedin;
    }
  }

}
