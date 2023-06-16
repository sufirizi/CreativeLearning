import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContinentsPageRoutingModule } from './continents-routing.module';

import { ContinentsPage } from './continents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContinentsPageRoutingModule
  ],
  declarations: [ContinentsPage]
})
export class ContinentsPageModule {}
