import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  private otpConfig = {
    length: 4,
    allowNumbersOnly: true,
    inputClass: 'cutom-otp',
    disableAutoFocus: false,
  }

  constructor() { }

  ngOnInit() {
  }

  onOtpChange($event) {
    console.log($event)
  }

}
