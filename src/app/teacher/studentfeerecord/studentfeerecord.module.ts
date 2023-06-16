import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentfeerecordPageRoutingModule } from './studentfeerecord-routing.module';

import { StudentfeerecordPage } from './studentfeerecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentfeerecordPageRoutingModule
  ],
  declarations: [StudentfeerecordPage]
})
export class StudentfeerecordPageModule {}
