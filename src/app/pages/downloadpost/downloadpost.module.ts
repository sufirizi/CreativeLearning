import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadpostPageRoutingModule } from './downloadpost-routing.module';

import { DownloadpostPage } from './downloadpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadpostPageRoutingModule
  ],
  declarations: [DownloadpostPage]
})
export class DownloadpostPageModule {}
