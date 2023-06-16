import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentlistfeePageRoutingModule } from './studentlistfee-routing.module';

import { StudentlistfeePage } from './studentlistfee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentlistfeePageRoutingModule
  ],
  declarations: [StudentlistfeePage]
})
export class StudentlistfeePageModule {}
