import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-infomodal',
  templateUrl: './infomodal.page.html',
  styleUrls: ['./infomodal.page.scss'],
})
export class InfomodalPage implements OnInit {
  
  items:any;
  countryname:string;
  singlecountry:any;
  constructor(
    private modalCtrl: ModalController,
    private dataService: ApiServiceService
    ) { }

  ngOnInit() { 

    this.dataService.getSingleCountries(this.countryname).subscribe((data:any[])=>{
      this.singlecountry = data[0];
    });

    this.dataService.getStatesCountry(this.countryname).subscribe((data:any[])=>{
      this.items = data;
      this.items = this.items.data.states;
    });
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
