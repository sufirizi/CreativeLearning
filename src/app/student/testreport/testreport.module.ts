import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestreportPageRoutingModule } from './testreport-routing.module';

import { TestreportPage } from './testreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestreportPageRoutingModule
  ],
  declarations: [TestreportPage]
})
export class TestreportPageModule {}
