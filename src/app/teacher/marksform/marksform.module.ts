import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarksformPageRoutingModule } from './marksform-routing.module';

import { MarksformPage } from './marksform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarksformPageRoutingModule
  ],
  declarations: [MarksformPage]
})
export class MarksformPageModule {}
