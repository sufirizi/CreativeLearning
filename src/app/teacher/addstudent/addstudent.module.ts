import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddstudentPageRoutingModule } from './addstudent-routing.module';

import { AddstudentPage } from './addstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddstudentPageRoutingModule
  ],
  declarations: [AddstudentPage]
})
export class AddstudentPageModule {}
