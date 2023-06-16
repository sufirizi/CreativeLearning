import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangedpPageRoutingModule } from './changedp-routing.module';

import { ChangedpPage } from './changedp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangedpPageRoutingModule
  ],
  declarations: [ChangedpPage]
})
export class ChangedpPageModule {}
