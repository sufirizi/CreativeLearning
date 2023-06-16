import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListstatusPageRoutingModule } from './liststatus-routing.module';

import { ListstatusPage } from './liststatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListstatusPageRoutingModule
  ],
  declarations: [ListstatusPage]
})
export class ListstatusPageModule {}
