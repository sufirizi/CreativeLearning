import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglenoticePageRoutingModule } from './singlenotice-routing.module';

import { SinglenoticePage } from './singlenotice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglenoticePageRoutingModule
  ],
  declarations: [SinglenoticePage]
})
export class SinglenoticePageModule {}
