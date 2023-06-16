import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeerecordPage } from './feerecord.page';

const routes: Routes = [
  {
    path: '',
    component: FeerecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeerecordPageRoutingModule {}
