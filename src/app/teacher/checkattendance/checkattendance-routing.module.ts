import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckattendancePage } from './checkattendance.page';

const routes: Routes = [
  {
    path: '',
    component: CheckattendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckattendancePageRoutingModule {}
