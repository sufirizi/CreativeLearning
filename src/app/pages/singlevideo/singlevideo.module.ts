import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglevideoPageRoutingModule } from './singlevideo-routing.module';

import { SinglevideoPage } from './singlevideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglevideoPageRoutingModule
  ],
  declarations: [SinglevideoPage]
})
export class SinglevideoPageModule {}
