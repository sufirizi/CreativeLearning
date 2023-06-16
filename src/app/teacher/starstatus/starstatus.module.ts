import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarstatusPageRoutingModule } from './starstatus-routing.module';

import { StarstatusPage } from './starstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarstatusPageRoutingModule
  ],
  declarations: [StarstatusPage]
})
export class StarstatusPageModule {}
