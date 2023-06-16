import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckfeePageRoutingModule } from './checkfee-routing.module';

import { CheckfeePage } from './checkfee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckfeePageRoutingModule
  ],
  declarations: [CheckfeePage]
})
export class CheckfeePageModule {}
