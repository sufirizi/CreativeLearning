import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeerecordPageRoutingModule } from './feerecord-routing.module';

import { FeerecordPage } from './feerecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeerecordPageRoutingModule
  ],
  declarations: [FeerecordPage]
})
export class FeerecordPageModule {}
