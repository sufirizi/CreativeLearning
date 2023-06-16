import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyattendancePageRoutingModule } from './monthlyattendance-routing.module';

import { MonthlyattendancePage } from './monthlyattendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyattendancePageRoutingModule
  ],
  declarations: [MonthlyattendancePage]
})
export class MonthlyattendancePageModule {}
