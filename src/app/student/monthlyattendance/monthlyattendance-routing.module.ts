import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlyattendancePage } from './monthlyattendance.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlyattendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyattendancePageRoutingModule {}
