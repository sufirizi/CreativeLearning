import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckfeePage } from './checkfee.page';

const routes: Routes = [
  {
    path: '',
    component: CheckfeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckfeePageRoutingModule {}
