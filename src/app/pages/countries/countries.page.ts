import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { ModalController } from '@ionic/angular';
import { InfomodalPage  } from 'src/app/infomodal/infomodal.page';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  countries:any;
  region:string;
  count:number = 0;
  message = 'This modal example uses the modalController to present and dismiss modals.';
  constructor(
    private actRoute: ActivatedRoute,
    public dataService: ApiServiceService,
    private modalCtrl: ModalController
  ) { 
    this.region = this.actRoute.snapshot.params.region;
  }

  async openModal(name:string) {
    //alert(name);
    const modal = await this.modalCtrl.create({
      component: InfomodalPage,
      componentProps: { 
        countryname: name,
      }
    });
    modal.present(); 

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
  }

  ngOnInit() {
    //alert(this.region);

    this.dataService.getCountries(this.region).subscribe((data:any[])=>{
      this.countries = data;
      this.count = this.countries.length;
      //console.log(this.countries);
    });

  }

}
