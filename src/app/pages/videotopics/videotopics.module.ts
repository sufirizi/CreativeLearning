import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideotopicsPageRoutingModule } from './videotopics-routing.module';

import { VideotopicsPage } from './videotopics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideotopicsPageRoutingModule
  ],
  declarations: [VideotopicsPage]
})
export class VideotopicsPageModule {}
