import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckattendancePageRoutingModule } from './checkattendance-routing.module';

import { CheckattendancePage } from './checkattendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckattendancePageRoutingModule
  ],
  declarations: [CheckattendancePage]
})
export class CheckattendancePageModule {}
