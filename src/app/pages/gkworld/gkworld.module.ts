import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GkworldPageRoutingModule } from './gkworld-routing.module';

import { GkworldPage } from './gkworld.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GkworldPageRoutingModule
  ],
  declarations: [GkworldPage]
})
export class GkworldPageModule {}
